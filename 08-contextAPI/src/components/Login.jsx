// how to pass data

import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // setUser is a state function is in UserContextProvider file
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        // sending data to profile
        setUser({ username, password })
    }

    return (
        <div className='flex justify-center items-center mt-28'>
            <div className='flex flex-col w-96 gap-3 bg-black/70 px-6 py-4 rounded-md'>
                <h2 className='text-center text-4xl mb-5'>Login</h2>
                <input
                    type="text"

                    // to control/govern state value
                    value={username}
                    // to update state if there is a change in input feild
                    onChange={(e) => setUsername(e.target.value)}

                    placeholder='Username'
                    className='px-3 py-1 rounded-sm text-black'

                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className='px-3 py-1 rounded-sm text-black'
                />
                <button
                    onClick={handleSubmit}
                    className='px-3 py-2 rounded-sm text-white bg-slate-800
                    text-lg hover:bg-slate-500 duration-200 my-5'
                >Submit</button>
            </div >
        </div>
    )
}

export default Login
