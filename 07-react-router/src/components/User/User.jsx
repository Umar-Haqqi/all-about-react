import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // get dynamic data (here is id from url)
    const {userid} = useParams() // now can access the id in url 
    // it should be extracted same (here is userid) 

    return (
        < >
            <h1 className='flex justify-center items-center text-orange-700 font-bold min-h-[400px] text-5xl'>User: {userid}</h1>
        </>
    )
}

export default User
