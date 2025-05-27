document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const languageSelector = document.getElementById('language-selector');

    async function sendMessage() {
        const message = userInput.value.trim();
        const language = languageSelector.value;
        
        if (message === '') return;

        // Add user message to chat
        appendMessage('user', message);
        userInput.value = '';

        try {
            const response = await fetch('http://127.0.0.1:5000/chat', {
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
        messageDiv.textContent = message;
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
}); 