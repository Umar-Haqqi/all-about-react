// how to get data
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // getting data here
    const { user } = useContext(UserContext)

    // conditional return
    if (!user) return <div>Please Login</div>
    return <div className='text-center mt-5'>Welcome {user.username}</div>
}

export default Profile
