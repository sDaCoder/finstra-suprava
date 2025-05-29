import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import axios from 'axios';

interface MessageType {
    sender: string
    message: string
    timestamp: Date
    suggestions?: string[]
    scam_detected?: boolean
}

interface InputBoxProps {
    chatMessages: MessageType[],
    setChatMessages: (messages: MessageType[] | any) => void
}

const InputBox: React.FC<InputBoxProps> = ({ chatMessages, setChatMessages }) => {
    const [chatInput, setChatInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendMessage = async () => {
        if (!chatInput.trim()) {
            setChatInput(chatInput.trim());
            return;
        }

        // Create user message
        const userMessage = {
            sender: "user",
            message: chatInput,
            timestamp: new Date()
        };

        // Add user message
        setChatMessages((prev: MessageType[]) => [...prev, userMessage]);
        setChatInput("");
        setIsLoading(true);

        try {
            // Get previous messages for context
            const previousMessages = chatMessages.slice(-5); // Get last 5 messages

            const res = await axios.post("http://127.0.0.1:5000/api/py/chat", {
                message: chatInput,
                language: "english",
                chat_history: [...previousMessages, userMessage]
            });

            const botMessage: MessageType = {
                sender: "bot",
                message: res.data.response,
                timestamp: new Date(),
                suggestions: res.data.suggestions || [],
                scam_detected: res.data.scam_detected || false
            };

            setChatMessages((prev: MessageType[]) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            // Add error message to chat
            setChatMessages((prev: MessageType[]) => [
                ...prev,
                {
                    sender: "bot",
                    message: "Sorry, I encountered an error. Please try again.",
                    timestamp: new Date()
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex gap-2 border p-4 rounded-full shadow-md max-w-[82vw] mx-auto mt-4 bg-white">
                <input
                    className="flex-1 border rounded-lg px-3 py-2 text-black border-none outline-none"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage()}
                    placeholder="Type your message here..."
                    disabled={isLoading}
                />
                <Button
                    onClick={sendMessage}
                    className="bg-green-700 text-white py-6 rounded-full"
                    disabled={isLoading}
                >
                    <Send />
                </Button>
            </div>
        </>
    )
    
}

export default InputBox