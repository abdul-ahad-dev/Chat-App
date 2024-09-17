import { db } from '../database/firebase.config'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import Navbar from "../components/NavBar";
import user from '../assets/user.png'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';


export default function ChatList() {
    const [users, setUsers] = useState([])
    const [myUid, setUid] = useState('')

    const naviagate = useNavigate()
    const prams = useLocation()

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        let uid = await localStorage.getItem("userId")
        setUid(uid)
        const list = []
        const dbSnap = await getDocs(collection(db, "users"));
        dbSnap.forEach(item => {
            list.push(item.data())
        });
        setUsers(list)
    }


    return (

        <>
             <Navbar />

            {users.map(item => (
                <div onClick={() => naviagate('/chat', { state: { ...item, myUid } })} key={item.uid} className="w-11/12 mx-auto mt-4 flex justify-between bg-gray-100 cursor-pointer rounded-xl shadow-lg p-4">
                    <div className="flex items-center">
                        <img
                            className="w-14 h-14 mr-2 rounded-full shadow-md"
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

            <Footer/>
        </>

    )
} 