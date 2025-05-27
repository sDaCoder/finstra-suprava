from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv
import traceback
import time

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini API
api_key = os.getenv('GEMINI_API_KEY')
if not api_key:
    print("WARNING: GEMINI_API_KEY not found in environment variables!")
else:
    print("API key loaded successfully")

genai.configure(api_key=api_key)

# # List available models and find a suitable one
# print("Available models:")
# available_models = list(genai.list_models())
# for m in available_models:
#     print(f"- {m.name}")

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

@app.route('/chat', methods=['POST'])
def chat():
    try:
        print("Received chat request")
        data = request.json
        print(f"Request data: {data}")
        
        user_message = data.get('message', '')
        language = data.get('language', 'english')
        
        print(f"User message: {user_message}")
        print(f"Selected language: {language}")
        
        # Prepare the prompt with language instruction
        language_instruction = ""
        if language.lower() == 'hindi':
            language_instruction = "Please respond in Hindi using Devanagari script. Format the response clearly with sections and bullet points. "
        elif language.lower() == 'bengali':
            language_instruction = "Please respond in Bengali. Format the response clearly with sections and bullet points. "
            
        full_prompt = f"{SYSTEM_PROMPT}\n\nUser: {user_message}\n\n{language_instruction}Assistant: "
        print(f"Sending prompt to Gemini API using model: {model._model_name}")
        
        max_retries = 3
        retry_count = 0
        while retry_count < max_retries:
            try:
                # Generate response using Gemini
                response = model.generate_content(full_prompt)
                print(f"Received response from Gemini API: {response.text}")
                return jsonify({
                    'response': response.text,
                    'status': 'success'
                })
            except Exception as retry_error:
                if '429' in str(retry_error) and retry_count < max_retries - 1:
                    retry_count += 1
                    print(f"Rate limit hit, waiting 60 seconds before retry {retry_count}")
                    time.sleep(60)  # Wait for 60 seconds before retrying
                else:
                    raise retry_error
        
    except Exception as e:
        error_traceback = traceback.format_exc()
        print(f"Error occurred: {str(e)}")
        print(f"Traceback: {error_traceback}")
        
        # Check if it's a rate limit error
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

if __name__ == '__main__':
    app.run(debug=True) 