document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const languageSelector = document.getElementById('language-selector');
    const commonQuestionsDiv = document.getElementById('common-questions');
    const suggestionsArea = document.getElementById('suggestions-area');
    const suggestionsList = document.getElementById('suggestions-list');

    // Load common questions on page load
    loadCommonQuestions();

    // Load common questions based on language
    async function loadCommonQuestions() {
        try {
            const response = await fetch('http://127.0.0.1:5000/common-questions');
            const questions = await response.json();
            const currentLanguage = languageSelector.value;
            
            displayCommonQuestions(questions[currentLanguage] || questions.english);
        } catch (error) {
            console.error('Error loading common questions:', error);
        }
    }

    // Display common questions
    function displayCommonQuestions(questions) {
        commonQuestionsDiv.innerHTML = '';
        questions.forEach(question => {
            const questionBtn = document.createElement('button');
            questionBtn.className = 'question-btn';
            questionBtn.textContent = question;
            questionBtn.onclick = () => {
                userInput.value = question;
                sendMessage();
            };
            commonQuestionsDiv.appendChild(questionBtn);
        });
    }

    // Display proactive suggestions
    function displaySuggestions(suggestions) {
        if (suggestions && suggestions.length > 0) {
            suggestionsList.innerHTML = '';
            suggestions.forEach(suggestion => {
                const suggestionBtn = document.createElement('button');
                suggestionBtn.className = 'suggestion-btn';
                suggestionBtn.textContent = suggestion;
                suggestionBtn.onclick = () => {
                    userInput.value = suggestion;
                    sendMessage();
                };
                suggestionsList.appendChild(suggestionBtn);
            });
            suggestionsArea.style.display = 'block';
        } else {
            suggestionsArea.style.display = 'none';
        }
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        const language = languageSelector.value;

        if (message === '') return;

        // Hide suggestions when sending new message
        suggestionsArea.style.display = 'none';

        // Add user message to chat
        appendMessage('user', message);
        userInput.value = '';

        try {
            const response = await fetch('http://127.0.0.1:5000/api/py/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: message,
                    language: language
                })
            });

            const data = await response.json();

            if (data.status === 'success') {
                appendMessage('bot', data.response);
                
                // Display suggestions if available
                if (data.suggestions) {
                    displaySuggestions(data.suggestions);
                }
                
                // Show scam alert styling if detected
                if (data.scam_detected) {
                    const lastMessage = chatMessages.lastElementChild;
                    lastMessage.classList.add('scam-alert');
                }
            } else {
                appendMessage('bot', 'Sorry, I encountered an error. Please try again.');
            }

        } catch (error) {
            console.error('Error:', error);
            appendMessage('bot', 'Sorry, I encountered an error. Please try again.');
        }
    }

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = message.replace(/\n/g, '<br>');
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Reload questions when language changes
    languageSelector.addEventListener('change', loadCommonQuestions);
});
