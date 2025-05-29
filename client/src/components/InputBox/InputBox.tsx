import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import axios from 'axios';

interface MessageType {
    sender: string
    message: string
    timestamp: Date
}

interface InputBoxProps {
    chatMessages: MessageType[],
    setChatMessages: (messages: MessageType[] | any) => void,
    chatInput: string,
    setChatInput: (input: string) => void
}
const InputBox: React.FC<InputBoxProps> = ({ chatMessages, setChatMessages, chatInput, setChatInput }) => {

    const sendMessage = async () => {
        if (!chatInput.trim()) {
            setChatInput(chatInput.trim());
            return;
        }
        setChatMessages((prev: MessageType[]) => [
            ...prev,
            { sender: "user", message: chatInput, timestamp: new Date() }
        ]);
        setChatInput("");

        try {
            const res = await axios.post("http://127.0.0.1:5000/api/py/chat", {
                message: chatInput,
                language: "english",
            })
            const botMessage = {
                sender: "bot",
                message: res.data.response,
                timestamp: new Date(),
            }
            setChatMessages((prev: MessageType[]) => [...prev, botMessage]);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex gap-2 border p-4 rounded-full shadow-md max-w-[82vw] mx-auto mt-4 bg-white">
                <input
                    className="flex-1 border rounded-lg px-3 py-2 text-black border-none outline-none"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message here..."
                />
                <Button
                    onClick={sendMessage}
                    className="bg-green-700 text-white py-6 rounded-full"
                >
                    <Send />
                </Button>
            </div>
        </>
    )
}

export default InputBox