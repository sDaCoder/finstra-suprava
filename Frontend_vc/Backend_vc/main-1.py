from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os


GEMINI_API_KEY = "AIzaSyBZEskc710rmiJyDAkcCZpBMtOOjxMy4GQ"
genai.configure(api_key=GEMINI_API_KEY)

app = FastAPI()

# CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class VoiceQuery(BaseModel):
    text: str

@app.post("/search")
async def search(query: VoiceQuery):
    input_text = query.text

    try:
        model = genai.GenerativeModel('gemini-2.0-flash')
        prompt = ("You are Finstra, a multilingual financial strategist."
            f"You are Finstra, a multilingual financial strategist.craft a relevant and helpful answer. Please detect the language of the following message and respond in the same language: {input_text}"
        )
        response = model.generate_content(prompt)

        if response.text:
            return {"response": response.text}
        else:
            return {"response": "Sorry, Gemini did not return a valid response."}

    except Exception as e:
        return {"response": f"Error from Gemini API: {str(e)}"}