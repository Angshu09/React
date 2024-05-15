import React from 'react'

export default function Basket({number, count}) {
  return (
    <div className='basket'>
        <div className="basket-count"><h1>{count}</h1></div>
        <div className="basket-name"><h3>Basket - {number}</h3></div>
    </div>
  )
}
