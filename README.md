# Finstra - AI Financial Advisor

Finstra is an AI-powered financial advisor that provides personalized financial guidance using the Gemini API. It supports multiple languages including English, Hindi, and Bengali.

## Prerequisites

- Python 3.13 or higher
- A Google Cloud account with access to the Gemini API
- An active Gemini API key

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone "repo link"
   cd Finstra
   ```

2. **Create and Activate Virtual Environment**
   
   Virtual environments (venv) are used to create an isolated environment for your project. This prevents conflicts between package versions across different projects and ensures consistent dependencies.

   For Windows:
   ```cmd
   python -m venv venv
   .\venv\Scripts\activate
   ```

   For Linux/Mac:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

   After activation, your prompt should change to show `(venv)` at the beginning.

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment Setup**
   - Create a `.env` file in the root directory (or copy from .env.example)
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

## Running the Application

1. **Start the Backend Server**
   - Open a terminal/command prompt
   - Ensure your virtual environment is activated (you should see `(venv)` in your prompt)
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Run the Flask server:
     ```bash
     python app.py
     ```
   - The backend will start on `http://localhost:5000`

2. **Start the Frontend Server**
   - Open a new terminal/command prompt
   - Activate the virtual environment in this terminal too
   - Navigate to the frontend_cb directory:
     ```bash
     cd frontend_cb
     ```
   - Start the Python HTTP server:
     ```bash
     python -m http.server 8000
     ```
   - The frontend will be available at `http://localhost:8000`

3. **Access the Application**
   - Open your web browser
   - Go to `http://localhost:8000`
   - The chat interface should now be available

## Note for Windows Users

If using specific Python installation paths, use these commands:

1. **Backend:**
   ```cmd
   cd backend
   "C:\Users\Dell\AppData\Local\Programs\Python\Python313\python.exe" app.py
   ```

2. **Frontend:**
   ```cmd
   cd frontend_cb
   "C:\Users\Dell\AppData\Local\Programs\Python\Python313\python.exe" -m http.server 8000
   ```

## Features

- Multi-language support (English, Hindi, Bengali)
- Real-time financial advice
- User-friendly chat interface
- Rural-focused financial guidance
- Secure API integration

## Troubleshooting

1. **Virtual Environment Issues**
   - Make sure you see `(venv)` in your terminal prompt
   - If not, activate the virtual environment again
   - If packages are not found, ensure you're using the correct Python interpreter

2. **Backend Issues**
   - Ensure your Gemini API key is correctly set in the `.env` file
   - Check if Flask server is running on port 5000
   - Look for error messages in the backend terminal

3. **Frontend Issues**
   - Make sure the Python HTTP server is running on port 8000
   - Clear browser cache if UI changes aren't visible
   - Check browser console for any JavaScript errors

4. **API Rate Limits**
   - The application includes retry mechanisms for API rate limits
   - If you encounter persistent 429 errors, wait a few minutes before retrying

## Support

For any issues or questions, please:
1. Check the troubleshooting section
2. Review the error messages in your terminal
3. Ensure all prerequisites are met
4. Verify your API key is active and correctly configured
5. Make sure your virtual environment is properly activated