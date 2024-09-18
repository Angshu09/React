import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function () {
    const error = useRouteError();
    console.log(error);
  return (
    <div>Some Thing Went Wrong! {error.status}</div>
  )
}
