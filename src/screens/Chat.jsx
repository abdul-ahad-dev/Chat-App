import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import back from '../assets/back.png'
import user from '../assets/user.png'

export default function Chat() {

    const prams = useLocation()

    // console.log("~~Home~chat", prams);
    // useEffect(() => {
    //     getMessages()
    // }, [])

    // const getMessages = async () => {
    // }
    const [messages, setMessages] = useState([
        { name: 'John Doe', text: "Hey, how's it going?", avatar: '/placeholder-user.jpg', fallback: 'JD', isSender: false },
        { name: 'Jane Smith', text: 'Pretty good, thanks for asking!', avatar: '/placeholder-user.jpg', fallback: 'JS', isSender: true },
        { name: 'Bob Johnson', text: 'Awesome, glad to hear it!', avatar: '/placeholder-user.jpg', fallback: 'BJ', isSender: false },
    ]);

    const handleSendMessage = (message) => {
        const newMessage = {
            name: 'You',
            text: message,
            avatar: '/placeholder-user.jpg',
            fallback: 'You',
            isSender: true,
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <>
            <div className="bg-blue-300 flex gap-3 items-center px-6 py-3">
                <img src={back} className="h-5 w-5 " alt="" />
                <img src={user} className="h-12 w-12 rounded-full" alt="w-10 h-10 " />
                <h1 className="text-xl font-semibold">Abdul Ahad</h1>
            </div>


            <div className="flex flex-col h-[80vh] max-w-2xl mx-auto bg-gray-100 rounded-2xl shadow-lg">
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-4 ${message.isSender ? 'justify-end' : ''}`}
                        >
                            {!message.isSender && (
                                <Avatar avatar={message.avatar} fallback={message.fallback} />
                            )}
                            <div
                                className={`p-3 rounded-2xl max-w-[70%] ${message.isSender
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-300 text-black'
                                    }`}
                            >
                                {!message.isSender && (
                                    <div className="font-medium">{message.name}</div>
                                )}
                                <div>{message.text}</div>
                            </div>
                            {message.isSender && (
                                <Avatar avatar={message.avatar} fallback={message.fallback} />
                            )}
                        </div>
                    ))}
                </div>
                <MessageInput onSend={handleSendMessage} />
            </div>
        </>
    )
}


function Avatar({ avatar, fallback }) {
    return (
        <div className="w-10 h-10 shrink-0">
            <img
                className="w-10 h-10 rounded-full"
                src={user}
                alt={fallback}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
            />
            <span className="sr-only">{fallback}</span>
        </div>
    );
}

function MessageInput({ onSend }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white px-4 py-3 rounded-b-2xl flex items-center gap-2 relative"
        >
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 resize-none rounded-2xl p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
                type="submit"
                className="absolute right-5 p-2 rounded-full bg-blue-600 text-white"
            >
                <SendIcon />
            </button>
        </form>
    );
}

function SendIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}