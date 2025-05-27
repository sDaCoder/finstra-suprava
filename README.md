# Finstra - AI Financial Advisor

Finstra is an AI-powered financial advisor that provides personalized financial guidance using the Gemini API. It supports multiple languages including English, Hindi, and Bengali.

## Prerequisites

- Python 3.13 or higher
- A Google Cloud account with access to the Gemini API
- An active Gemini API key

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
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
   cd Finstra
   pip install -r requirements.txt
   ```

   The virtual environment ensures that:
   - All packages are installed in an isolated environment
   - Different projects can use different versions of the same package
   - Your system Python installation remains clean
   - The project's dependencies are clearly defined and reproducible

4. **Environment Setup**
   - Create a `.env` file in the `backend` directory
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
     cd Finstra/backend
     ```
   - Run the Flask server:
     ```bash
     python app.py
     ```
   - The backend will start on `http://localhost:5000`

2. **Start the Frontend Server**
   - Open a new terminal/command prompt
   - Activate the virtual environment in this terminal too
   - Navigate to the frontend directory:
     ```bash
     cd Finstra/frontend
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
   - If packages are not found, ensure you're using the correct Python interpreter from the virtual environment

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

## Note for Windows Users

If using specific Python installation paths, use the following commands:

1. **Creating Virtual Environment:**
   ```cmd
   "C:\Users\[Username]\AppData\Local\Programs\Python\Python313\python.exe" -m venv venv
   ```

2. **Backend:**
   ```cmd
   "C:\Users\[Username]\AppData\Local\Programs\Python\Python313\python.exe" app.py
   ```

3. **Frontend:**
   ```cmd
   "C:\Users\[Username]\AppData\Local\Programs\Python\Python313\python.exe" -m http.server 8000
   ```

Replace `[Username]` with your Windows username.

## Support

For any issues or questions, please:
1. Check the troubleshooting section
2. Review the error messages in your terminal
3. Ensure all prerequisites are met
4. Verify your API key is active and correctly configured
5. Make sure your virtual environment is properly activated