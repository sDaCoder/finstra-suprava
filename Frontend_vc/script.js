// const baseUrl = 'http://127.0.0.1:5000';
const baseUrl = 'https://finstra-production.up.railway.app/';
const startBtn = document.getElementById('start-btn');
const resultDiv = document.getElementById('result');
const languageSelect = document.getElementById("language");

let hasSpokenIntro = false;
let lastResponseText = "";

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

startBtn.addEventListener('click', startListening);

recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  resultDiv.textContent = `You said: "${transcript}"`;

  try {
    const res = await fetch(`${baseUrl}/api/py/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: transcript })
    });

    const data = await res.json();
    resultDiv.innerHTML += `<br> <div class="response"> <strong>Response:</strong>${data.response}</div>`;
    // Try to match the input language used in recognition
    const detectedLang = recognition.lang || "en-US";

    // Speak the Gemini reply in the same language
    speakText(data.response, detectedLang);
  } catch (err) {
   resultDiv.textContent = "Error contacting backend: " + err.message;
  }
};

// Message translations
const introMessages = {
  "en-US": "Hey there! I am Finstra, your Financial Strategist. How can I help you?",
  "hi-IN": "नमस्ते! मैं फिन्स्ट्रा हूँ, आपका वित्तीय रणनीतिकार। मैं आपकी कैसे सहायता कर सकता हूँ?",
  "ta-IN": "வணக்கம்! நான் உங்கள் நிதி ஆலோசகர், Finstra. எப்படி உதவலாம்?",
  "bn-IN": "নমস্কার! আমি ফিন্সট্রা, আপনার আর্থিক উপদেষ্টা। আমি কিভাবে সাহায্য করতে পারি?",
  "mr-IN": "नमस्कार! मी फिन्स्ट्रा आहे, तुमचा आर्थिक सल्लागार. मी कशी मदत करू?",
  "te-IN": "నమస్తే! నేను ఫిన్స్ట్రా, మీ ఆర్థిక సలహాదారు. నేను ఎలా సహాయం చేయగలను?",
  "kn-IN": "ನಮಸ್ಕಾರ! ನಾನು ಫಿನ್ಸ್ಟ್ರಾ, ನಿಮ್ಮ ಹಣಕಾಸು ಸಲಹೆಗಾರ. ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
  "gu-IN": "નમસ્તે! હું ફિન્સ્ટ્રા છું, તમારું આર્થિક સલાહકાર. હું કેવી રીતે મદદ કરી શકું?",
  "ml-IN": "നമസ്കാരം! ഞാൻ ഫിൻസ്ട്രയാണ്, നിങ്ങളുടെ സാമ്പത്തിക ഉപദേഷ്ടാവ്. ഞാൻ എങ്ങനെ സഹായിക്കാം?"
};

function startListening() {
  const selectedLang = languageSelect.value;
  const introMessage = introMessages[selectedLang] || introMessages["en-US"];

  navigator.mediaDevices.getUserMedia({ audio: true }) // request mic
    .then(() => {
      recognition.lang = selectedLang;

      if (!hasSpokenIntro) {
        const intro = new SpeechSynthesisUtterance(introMessage);
        intro.lang = selectedLang;

        intro.onend = () => {
          hasSpokenIntro = true;
          setTimeout(() => {
            recognition.start();
            resultDiv.textContent = "Listening...";
          }, 1000); 
        };

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(intro);
      } else {
        recognition.start();
        resultDiv.textContent = "Listening...";
      }
    })
    .catch(err => {
      alert("Microphone access is required.");
      console.error("Mic error:", err);
    });
}

recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  resultDiv.textContent = `You said: "${transcript}"`;

  try {
    const res = await fetch(`${baseUrl}/api/py/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: transcript })
    });

    const data = await res.json();
    lastResponseText = data.response;
    resultDiv.innerHTML += `<br> <div class="response"> <strong>Response:</strong>${data.response}</div>`;

    speakText(data.response, recognition.lang);
  } catch (err) {
    resultDiv.textContent = "Error contacting backend: " + err.message;
  }
};


function speakText(text, lang = "en-US") {
  if (!text || typeof text !== "string") return;

  const cleanText = text
    .replace(/[*_`#~\-\/\\{}\[\]()]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  window.speechSynthesis.cancel();

  const chunks = [];
  const maxLength = 200;
  let remaining = cleanText;

  while (remaining.length > 0) {
    let chunk = remaining.slice(0, maxLength);
    const punctuation = Math.max(
      chunk.lastIndexOf("."),
      chunk.lastIndexOf("!"),
      chunk.lastIndexOf("?"),
      chunk.lastIndexOf(",")
    );

    if (punctuation > 50) {
      chunk = chunk.slice(0, punctuation + 1);
    }

    chunks.push(chunk.trim());
    remaining = remaining.slice(chunk.length).trim();
  }

  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === lang) || null;
  let index = 0;

  const speakNext = () => {
    if (index >= chunks.length) return;

    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.lang = lang;
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      index++;
      speakNext();
    };

    utterance.onerror = () => {
      index++;
      speakNext();
    };

    window.speechSynthesis.speak(utterance);
  };

  if (voices.length === 0) {
    window.speechSynthesis.onvoiceschanged = speakNext;
  } else {
    speakNext();
  }
}

