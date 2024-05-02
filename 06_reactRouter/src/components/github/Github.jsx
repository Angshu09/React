import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Angshu09')
    //     .then( (res) => res.json())
    //     .then((res) => {
    //         console.log(res)
    //         setData(res)
    //     })
    // }, [])
    return(
        <div className="flex justify-center gap-4 flex-col items-center text-3xl bg-gray-600 text-white p-4 mt-5">
            <div>Followers: {data.followers}</div>
            <div><img src={data.avatar_url} alt="giuhub imge" width={300} /></div>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response  = await fetch('https://api.github.com/users/Angshu09')
    return response.json()
}