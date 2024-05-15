import React from 'react'

export default function Arrow({imgUrl, name, onClick}) {
  return (
    <div className='arrow' onClick={onClick}><img src={imgUrl} alt="Button" />
    <p>{name}</p>
    </div>
  )
}
