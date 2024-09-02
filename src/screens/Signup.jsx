import {db, auth } from '../database/firebase.config'
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Signup() {

    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("")


    function handleSignup(e) {
        e.preventDefault();
        console.log("clicked")
        console.log(email, password, name, phone, city, gender)
        console.log(typeof email, typeof password, typeof name, typeof phone, typeof city, typeof gender);


        createUserWithEmailAndPassword(auth, email, password)
            .then(async (response) => {
                const uid = response.user.uid;
                const userData = { name, email, phone, city, gender, uid }
                await setDoc(doc(db, "users", uid), userData)

                Swal.fire({
                    title: 'success',
                    text: 'Successfully create account',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                navigate('/login')
            })
            .catch((error) => {
                console.log(error);
                console.error("Error Code:", error.code);
                console.error("Error Message:", error.message);
                console.error("Error Details:", error);
                Swal.fire({
                    title: 'Something Went Wrong',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });

    }


    return (
        <section>
            <div className="w-screen h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                        Sign Up to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 ">
                        have an account?{" "}
                        <a href="#" title="" onClick={ () => navigate('/login')}
                            className="font-semibold text-black transition-all duration-200 hover:underline" >
                            Login
                        </a>
                    </p>
                    <form className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input type="email" placeholder="Name" onChange={e => setName(e.target.value)} required
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    ></input>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input type="email" placeholder="abc@gmail" onChange={e => setEmail(e.target.value)}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    ></input>
                                </div>
                            </div>

                            <div>
                                <label htmlFor=""
                                    className="text-base font-medium text-gray-900" >
                                    Phone number:
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={e => setPhone(e.target.value)}
                                        type="text"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="123-456-7890"
                                        required=""
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="countries"
                                    className="text-base font-medium text-gray-900" >
                                    Select an option
                                </label>
                                <div className="mt-2">

                                    <select
                                        onChange={e => setCity(e.target.value)}
                                        id="countries"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option disabled selected="">Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900">
                                    Identification
                                </label>
                                <div className="mt-2">
                                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input
                                                    id="horizontal-list-radio-license"
                                                    type="radio"
                                                    value="male"
                                                    name="list-radio"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    onChange={e => setGender(e.target.value)}
                                                />
                                                <label
                                                    htmlFor="horizontal-list-radio-license"
                                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Male{" "}
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input
                                                    id="horizontal-list-radio-id"
                                                    type="radio"
                                                    value="female"
                                                    name="list-radio"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    onChange={e => setGender(e.target.value)}
                                                />
                                                <label
                                                    htmlFor="horizontal-list-radio-id"
                                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Female
                                                </label>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                    ></input>
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <label htmlFor="remember"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                                    I agree with the{" "}
                                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                                        terms and conditions
                                    </a>
                                    .
                                </label>
                            </div>

                            <div>
                                <button type="button"
                                    onClick={handleSignup}
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" >
                                    Create Account
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}