import { db } from '../database/firebase.config'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import Navbar from '../components/NavBar'

export default function Home() {

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
            <Navbar/>




         



            {users.map((item, index) => (
                <div key={index} className="w-11/12 mx-auto mt-4 flex justify-between bg-gray-100 rounded-xl shadow-sm p-4">
                    <div className="">
                        <h1 className='text-lg font-semibold'>{item.name}</h1>
                        <h1 className='text-xs text-gray-700'>{item.email}</h1>
                    </div>
                    <button className="px-5 py-2 text-white bg-blue-600 font-semibold rounded-xl">Chat</button>
                </div>
            ))}

        </>
    )
}
