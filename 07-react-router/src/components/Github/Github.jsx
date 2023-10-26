import React, { useEffect, useState } from 'react'

function Github() {
    // to render this on page, we need a state
    const [data, setData] = useState([])

    const userDataApi1 = `https://api.github.com/users/Umar-Haqqi`
    const userDataApi2 = `https://api.github.com/users/rohanadnan1`

    // make a API call whenever component loads
    useEffect(() => {
        fetch(userDataApi1)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // now we have access the data
                setData(data)
            })
    }, [])

    return (
        <>
            <div className='flex justify-center items-center flex-col gap-10 text-orange-700 font-bold min-h-[500px] text-5xl bg-black/10'>
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
