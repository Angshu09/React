import React from "react";
import { useParams } from "react-router-dom";

export function User(){
    const {id} = useParams()
    return(
        <div className="bg-gray-600 text-3xl p-4 text-center text-white">User: {id}</div>
    )
}