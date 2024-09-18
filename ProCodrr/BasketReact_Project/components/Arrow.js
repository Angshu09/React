import React from 'react'

export default function Arrow({imgUrl, name, onClick, children}) {
  return (
    <div className='arrow' onClick={onClick}><img src={imgUrl} alt="Button" />
    <p>{children}</p>
    </div>
  )
}
