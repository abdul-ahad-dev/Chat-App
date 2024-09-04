import { db } from '../database/firebase.config'
import { collection, getDocs } from "firebase/firestore"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        getUsers()
    })


    const getUsers = async () => {

        const list = []
        const dbSnap = await getDocs(collection(db, "users"));
        dbSnap.forEach(item => {
            list.push(item.data())
        });
        
        console.log("list ==>", list);
    }

    return <h1>HOME</h1>
}
