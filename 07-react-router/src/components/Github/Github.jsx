import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
    // after loader this will help us to use API data and render it on browser
    const data = useLoaderData()    // it will solve data lacking issue 


    // to render this on page, we need a state
    // const [data, setData] = useState([])

    // const userDataApi1 = `https://api.github.com/users/Umar-Haqqi`
    // const userDataApi2 = `https://api.github.com/users/rohanadnan1`

    // // make a API call whenever component loads
    // useEffect(() => {
    //     fetch(userDataApi1)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //             // now we have access the data
    //             setData(data)
    //         })
    // }, [])
    // --- commenting this after using loader

    return (
        <>
            <div className='flex justify-center items-center flex-col gap-5 text-orange-700 font-bold min-h-[500px] text-5xl bg-black/10'>
                <div className='flex justify-center items-center gap-3'>
                    <img className='rounded-full' src={data.avatar_url} alt="profile" width={120} />
                    <span className='font-normal text-black/80' >
                        {data.name}
                    </span>
                </div>
                <div className='flex gap-3 text-2xl'>
                    <p>User's Location:</p>
                    <span className='font-normal text-black/80' >
                        {data.location}
                    </span>
                </div>
                <div className='flex gap-3 text-2xl'>
                    <p>User's Followers:</p>
                    <span className='font-normal text-black/80' >
                        {data.followers}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Github


// this function will fetch data with loader
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rohanadnan1')

    // can directly return it here
    return response.json()
}