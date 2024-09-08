import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import back from '../assets/back.png'
import user from '../assets/user.png'

export default function Chat() {

    const naviagte = useNavigate()
    const { state } = useLocation()
    console.log("state", state);
    

    const [message, setMessage] = useState([])
    const [chatList, setChatList] = useState([])

    const [messages, setMessages] = useState([
        { name: 'John Doe', text: "Hey, how's it going?", avatar: '/placeholder-user.jpg', fallback: 'JD', isSender: false },
        { name: 'Jane Smith', text: 'Pretty good, thanks for asking!', avatar: '/placeholder-user.jpg', fallback: 'JS', isSender: true },
        { name: 'Bob Johnson', text: 'Awesome, glad to hear it!', avatar: '/placeholder-user.jpg', fallback: 'BJ', isSender: false },
    ]);

    const [inputValue, setInputValue] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            handleSendMessage(inputValue);
            setInputValue('');
        }
    };


    // console.log("~~Home~chat", prams);
    // useEffect(() => {
    //     getMessages()
    // }, [])

    // const getMessages = async () => {
    // }

    const sendMessage = async () => {
        let myUid = await localStorage.getItem("userId")

        addDoc(collection(db, "messages"), {
            message: message,
            [myUid]: true,
            [state.uid]: true,
            createdAt: Date.now(),
        })
    }

    return (
        <>
            <div className="bg-blue-300 flex gap-3 items-center px-6 py-3">
                <img src={back} className="h-5 w-5" alt="Back" />
                <img src={user} className="h-12 w-12 rounded-full" alt="User" />
                <h1 className="text-xl font-semibold">Abdul Ahad</h1>
            </div>

            <div className="flex flex-col h-[80vh] w-full mx-auto rounded-b-2xl bg-gray-100 shadow-lg">
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-4 ${message.isSender ? 'justify-end' : ''}`}
                        >
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
                        </div>
                    ))}
                </div>


                {/* Message Input */}
                <div
                    className="bg-white px-4 py-3 rounded-b-2xl flex items-center gap-2 relative">
                    <input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 rounded-2xl py-2 px-3 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button onClick={sendMessage} className="absolute right-5 py-2 px-5 rounded-2xl bg-blue-600 text-white">
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}
