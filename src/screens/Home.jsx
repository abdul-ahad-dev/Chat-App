import { db } from '../database/firebase.config'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import user from '../assets/user.png'
import Navbar from '../components/NavBar'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Home() {
    const [messages, setMessages] = useState([])
    const naviagate = useNavigate()
    const prams = useLocation()

    console.log("~~Home~", prams);
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const list = []
        const dbSnap = await getDocs(collection(db, "users"));
        dbSnap.forEach(item => {
            list.push(item.data())
        });
        setUsers(list)
        console.log("~~user~~", users);

        console.log("list ==>", list);
    }

    return (
        <>
            {/* Header */}
            <Navbar />

            {users.map(item => (
                <div onClick={() => naviagate('/chat', { state: item })} key={item.uid} className="w-11/12 mx-auto mt-4 flex justify-between bg-gray-100 rounded-xl shadow-lg p-4">
                    <div className="flex items-center">
                        <img
                            className="w-8 h-8 mr-2 rounded-full shadow-md"
                            src={user}
                            alt="user" />
                        <div>
                            <h1 className='text-lg font-semibold'>{item.name}</h1>
                            <h1 className='text-xs text-gray-700'>{item.email}</h1>
                        </div>
                    </div>
                    <button className="px-5 py-2 text-white bg-blue-600 font-semibold rounded-xl">Message</button>
                </div>
            ))}

        </>
    )
}
