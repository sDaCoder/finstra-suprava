from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv
import traceback
import time
import re
import serpapi

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini API
api_key = os.getenv('GEMINI_API_KEY')
serpapi_key = os.getenv('SERPAPI_API_KEY')  # Updated env var name to standard format
port = int(os.getenv('PORT', 5000))  # For Railway deployment

if not api_key:
    print("WARNING: GEMINI_API_KEY not found in environment variables!")
else:
    print("API key loaded successfully")

genai.configure(api_key=api_key)

# Initialize the model
try:
    model = genai.GenerativeModel('models/gemini-2.0-flash')
    print(f"Successfully initialized model: models/gemini-2.0-flash")
except Exception as e:
    print(f"Failed to initialize model: {str(e)}")
    raise Exception("Failed to initialize the model!")

SYSTEM_PROMPT = """
You are Finstra, a voice-based financial advisor for rural people.

Your tasks:
1. Simplify financial concepts using relatable rural analogies (e.g., interest = extra milk).
2. Solve personal finance questions: budgeting, saving, UPI, loans, insurance.
3. Empower users to understand and manage their money wisely.
4. Communicate in a friendly tone. If the language is Hindi or Bengali, reply accordingly.

Format your responses clearly with:
1. A brief greeting and introduction
2. Main points in clear sections with headings
3. Use bullet points or numbered lists for steps
4. Short, easy-to-read paragraphs
5. Rural examples and analogies in each section
6. A friendly conclusion

Be encouraging and kind. Avoid jargon. Use examples from farming, livestock, or village shops.
Keep paragraphs short and use line breaks between sections for better readability.
"""

# Scam detection patterns
SCAM_PATTERNS = [
    r'(?i)(send money|transfer.*urgently|lottery.*won|prince.*nigeria|inheritance.*claim)',
    r'(?i)(click.*link|verify.*account.*immediately|suspended.*account)',
    r'(?i)(give.*otp|share.*pin|tell.*password|bank.*details)',
    r'(?i)(investment.*guaranteed|double.*money|risk.*free.*profit)',
    r'(?i)(crypto.*mining|bitcoin.*investment|forex.*trading.*sure)'
]

# Proactive suggestions
PROACTIVE_SUGGESTIONS = {
    'savings': {
        'english': [
            "Would you like me to explain different types of savings accounts?",
            "Should I help you create a monthly budget plan?",
            "Would you like tips on reducing daily expenses?"
        ],
        'hindi': [
            "क्या आप चाहेंगे कि मैं विभिन्न प्रकार के बचत खातों के बारे में बताऊं?",
            "क्या मैं आपको मासिक बजट बनाने में मदद करूं?",
            "क्या आप दैनिक खर्च कम करने के तरीके जानना चाहेंगे?"
        ],
        'bengali': [
            "আপনি কি চান যে আমি বিভিন্ন ধরনের সেভিংস অ্যাকাউন্ট সম্পর্কে বলি?",
            "আমি কি আপনাকে মাসিক বাজেট তৈরি করতে সাহায্য করব?",
            "আপনি কি দৈনিক খরচ কমানোর টিপস জানতে চান?"
        ]
    },
    'banking': {
        'english': [
            "Would you like me to guide you through the bank account opening process?",
            "Should I explain different types of bank accounts available?",
            "Would you like to know about required documents for banking?"
        ],
        'hindi': [
            "क्या आप चाहेंगे कि मैं बैंक खाता खोलने की प्रक्रिया बताऊं?",
            "क्या मुझे विभिन्न प्रकार के उपलब्ध बैंक खातों के बारे में समझाना चाहिए?",
            "क्या आप बैंकिंग के लिए आवश्यक दस्तावेजों के बारे में जानना चाहेंगे?"
        ],
        'bengali': [
            "আপনি কি চান যে আমি ব্যাংক অ্যাকাউন্ট খোলার প্রক্রিয়া গাইড করি?",
            "আমি কি বিভিন্ন ধরনের উপলব্ধ ব্যাংক অ্যাকাউন্ট ব্যাখ্যা করব?",
            "আপনি কি ব্যাংকিংয়ের জন্য প্রয়োজনীয় নথি সম্পর্কে জানতে চান?"
        ]
    },
    'loans': {
        'english': [
            "Would you like me to explain different types of loans available?",
            "Should I help you understand loan eligibility criteria?",
            "Would you like tips on improving your credit score?"
        ],
        'hindi': [
            "क्या आप चाहेंगे कि मैं विभिन्न प्रकार के उपलब्ध लोन के बारे में बताऊं?",
            "क्या मैं आपको लोन पात्रता मानदंड समझाने में मदद करूं?",
            "क्या आप अपना क्रेडिट स्कोर सुधारने के तरीके जानना चाहेंगे?"
        ],
        'bengali': [
            "আপনি কি চান যে আমি বিভিন্ন ধরনের উপলব্ধ লোন সম্পর্কে বলি?",
            "আমি কি আপনাকে লোনের যোগ্যতার মানদণ্ড বুঝতে সাহায্য করব?",
            "আপনি কি আপনার ক্রেডিট স্কোর উন্নত করার টিপস চান?"
        ]
    },
    'insurance': {
        'english': [
            "Would you like me to explain different insurance types?",
            "Should I help you calculate insurance coverage needed?",
            "Would you like to know about government insurance schemes?"
        ],
        'hindi': [
            "क्या आप चाहेंगे कि मैं विभिन्न बीमा प्रकारों के बारे में बताऊं?",
            "क्या मैं आपको आवश्यक बीमा कवरेज की गणना करने में मदद करूं?",
            "क्या आप सरकारी बीमा योजनाओं के बारे में जानना चाहेंगे?"
        ],
        'bengali': [
            "আপনি কি চান যে আমি বিভিন্ন বীমার ধরন ব্যাখ্যা করি?",
            "আমি কি আপনাকে প্রয়োজনীয় বীমা কভারেজ গণনা করতে সাহায্য করব?",
            "আপনি কি সরকারি বীমা স্কিম সম্পর্কে জানতে চান?"
        ]
    }
}

def search_web(query: str) -> str:
    """Helper function to search the web using SerpAPI"""
    params = {
        "engine": "google",
        "q": query,
        "api_key": serpapi_key
    }
    try:
        results = serpapi.search(params)
        if "answer_box" in results and "snippet" in results["answer_box"]:
            return results["answer_box"]["snippet"]
        elif "organic_results" in results and len(results["organic_results"]) > 0:
            return results["organic_results"][0].get("snippet", "No snippet found.")
        else:
            return "I searched the web but couldn't find a clear answer."
    except Exception as e:
        return f"Web search failed: {e}"

def detect_scam_patterns(message):
    """Detect potential scam patterns in user message"""
    for pattern in SCAM_PATTERNS:
        if re.search(pattern, message):
            return True
    return False

def get_proactive_suggestions(message):
    """Get relevant proactive suggestions based on user message"""
    message_lower = message.lower()
    
    # English + Hindi + Bengali keywords for each category
    savings_keywords = ['save', 'saving', 'money', 'बचत', 'पैसे', 'बचाना', 'টাকা', 'সাশ্রয়']
    banking_keywords = ['bank', 'account', 'banking', 'बैंक', 'खाता', 'बैंकिंग', 'ব্যাংক', 'অ্যাকাউন্ট']
    loan_keywords = ['loan', 'borrow', 'credit', 'लोन', 'उधार', 'ऋण', 'লোন', 'ঋণ']
    insurance_keywords = ['insurance', 'policy', 'coverage', 'बीमा', 'पॉलिसी', 'বীমা', 'পলিসি']
    
    if any(word in message_lower for word in savings_keywords):
        return 'savings'
    elif any(word in message_lower for word in banking_keywords):
        return 'banking'
    elif any(word in message_lower for word in loan_keywords):
        return 'loans'
    elif any(word in message_lower for word in insurance_keywords):
        return 'insurance'
    return None

# NEW VOICE SEARCH ENDPOINT (Converted from FastAPI)
@app.route('/api/py/search', methods=['POST'])
def voice_search():
    """Voice search endpoint - converted from FastAPI to Flask"""
    try:
        data = request.json
        input_text = data.get('text', '')
        
        realtime_keywords = ["today", "current", "latest", "now", "rate", "price", "update", "news"]
        
        if any(word in input_text.lower() for word in realtime_keywords):
            web_snippet = search_web(input_text)
            prompt = (
                "You are Finstra, a financial strategist. Use the following real-time web result to answer the user's question:\n\n"
                f"Web Search Result:\n{web_snippet}\n\n"
                f"User Question:\n{input_text}\n\n"
                "Reply in the same language and be clear and strategic."
            )
            try:
                model = genai.GenerativeModel('gemini-2.0-flash')
                response = model.generate_content(prompt)
                return jsonify({"response": response.text})
            except Exception as e:
                return jsonify({"response": f"Gemini API error: {str(e)}"})
        
        try:
            model = genai.GenerativeModel('gemini-2.0-flash')
            prompt = (
                f"You are Finstra, a multilingual financial strategist. Respond in the same language and be clear, relevant and strategic: {input_text}"
            )
            response = model.generate_content(prompt)
            if response.text:
                return jsonify({"response": response.text})
            else:
                return jsonify({"response": "Sorry, Gemini did not return a valid response."})
        except Exception as e:
            return jsonify({"response": f"Error from Gemini API: {str(e)}"})
            
    except Exception as e:
        return jsonify({"response": f"Error processing voice search: {str(e)}"})

# EXISTING CHATBOT ENDPOINT
@app.route('/api/py/chat', methods=['POST'])
def chat():
    try:
        print("Received chat request")
        data = request.json
        print(f"Request data: {data}")
        
        user_message = data.get('message', '')
        language = data.get('language', 'english')
        chat_history = data.get('chat_history', [])
        
        # Check for scam patterns
        scam_detected = detect_scam_patterns(user_message)
        if scam_detected:
            scam_warning = """
⚠️ **SCAM ALERT** ⚠️

I detected something that might be a scam attempt. Please remember:

🔒 **Never share your OTP, PIN, or passwords**
💳 **Banks never ask for card details over phone/message**
💰 **Be careful of "guaranteed returns" or "easy money" schemes**
📱 **Don't click suspicious links or download unknown apps**

If someone is pressuring you for money or personal information, please contact your bank directly or local authorities.

Now, how can I help you with legitimate financial advice?
"""
            return jsonify({
                'response': scam_warning,
                'scam_detected': True,
                'status': 'success'
            })
        
        # Get proactive suggestions with language awareness
        suggestions = []
        suggestion_category = get_proactive_suggestions(user_message)
        if suggestion_category:
            if language in PROACTIVE_SUGGESTIONS[suggestion_category]:
                suggestions = PROACTIVE_SUGGESTIONS[suggestion_category][language][:2]
            else:
                suggestions = PROACTIVE_SUGGESTIONS[suggestion_category]['english'][:2]
        
        print(f"User message: {user_message}")
        print(f"Selected language: {language}")
        print(f"Suggestion category: {suggestion_category}")
        print(f"Suggestions found: {suggestions}")
        
        # Prepare conversation history for context
        conversation_context = ""
        if chat_history:
            for msg in chat_history[-5:]:
                role = "User" if msg['sender'] == 'user' else "Assistant"
                conversation_context += f"{role}: {msg['message']}\n"
        
        # Prepare the prompt with language instruction and context
        language_instruction = ""
        if language.lower() == 'hindi':
            language_instruction = "Please respond in Hindi using Devanagari script. Format the response clearly with sections and bullet points. "
        elif language.lower() == 'bengali':
            language_instruction = "Please respond in Bengali. Format the response clearly with sections and bullet points. "
        
        full_prompt = f"{SYSTEM_PROMPT}\n\nConversation History:\n{conversation_context}\n\nUser: {user_message}\n\n{language_instruction}Assistant: "
        
        print(f"Sending prompt to Gemini API using model: {model._model_name}")
        
        max_retries = 3
        retry_count = 0
        
        while retry_count < max_retries:
            try:
                response = model.generate_content(full_prompt)
                print(f"Received response from Gemini API: {response.text}")
                
                return jsonify({
                    'response': response.text,
                    'suggestions': suggestions,
                    'status': 'success'
                })
                
            except Exception as retry_error:
                if '429' in str(retry_error) and retry_count < max_retries - 1:
                    retry_count += 1
                    print(f"Rate limit hit, waiting 60 seconds before retry {retry_count}")
                    time.sleep(60)
                else:
                    raise retry_error
                    
    except Exception as e:
        error_traceback = traceback.format_exc()
        print(f"Error occurred: {str(e)}")
        print(f"Traceback: {error_traceback}")
        
        if '429' in str(e):
            return jsonify({
                'error': 'Rate limit exceeded. Please try again in a minute.',
                'status': 'error'
            }), 429
        else:
            return jsonify({
                'error': str(e),
                'traceback': error_traceback,
                'status': 'error'
            }), 500

@app.route('/api/py/common-questions', methods=['GET'])
def get_common_questions():
    questions = {
        'english': [
            "How to save money effectively?",
            "How to open a bank account?",
            "What is a fixed deposit?",
            "How to apply for a loan?",
            "What is insurance and why do I need it?",
            "How to use UPI payments?",
            "What are government schemes for farmers?",
            "How to invest small amounts?"
        ],
        'hindi': [
            "पैसे कैसे बचाएं?",
            "बैंक खाता कैसे खोलें?",
            "फिक्स्ड डिपॉजिट क्या है?",
            "लोन के लिए आवेदन कैसे करें?",
            "बीमा क्या है और क्यों जरूरी है?",
            "UPI पेमेंट कैसे करें?",
            "किसानों के लिए सरकारी योजनाएं",
            "कम पैसे में निवेश कैसे करें?"
        ],
        'bengali': [
            "কিভাবে টাকা সাশ্রয় করবেন?",
            "ব্যাংক অ্যাকাউন্ট কিভাবে খুলবেন?",
            "ফিক্সড ডিপোজিট কি?",
            "লোনের জন্য আবেদন কিভাবে করবেন?",
            "বীমা কি এবং কেন প্রয়োজন?",
            "UPI পেমেন্ট কিভাবে করবেন?",
            "কৃষকদের জন্য সরকারি প্রকল্প",
            "অল্প টাকায় বিনিয়োগ কিভাবে করবেন?"
        ]
    }
    return jsonify(questions)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
