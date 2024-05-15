import React from 'react'
import Arrow from './Arrow'
import Basket from './Basket'
import './Container.css'
import {createRoot} from "react-dom/client"
const root = createRoot(document.querySelector('.root'));

const totalApple = 20

  let rightApple = 0
  let leftApple = totalApple - rightApple

  const left = () => {
    console.log('left');
    rightApple--
    leftApple++
    root.render(<Container />)
  }

  const right = () => {
    console.log('right');
    leftApple--
    rightApple++
    root.render(<Container />)
  }

export default function Container(/*{onClick}*/) {
  return (
    <>
      <div className='container' /*onClick={onClick}*/>
          <Basket number={1} count={leftApple}/>
          <Arrow onClick={left} name={'Left Arrow'} imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1FQfDqeUMNCEswpz8S_U4wMKesN3WopyDZhEWXSQWw&s'} />
          <Arrow onClick={right} name={'Right Arrow'} imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4zKvWy5SNX9El3TXdUFLTAGtZ_lnbDsuQjQLW3MwpQ&s'} />
          <Basket number={2} count={rightApple}/>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <button 
          onClick={() => {
          root.render(<Container />)
          }}>
          Re-render
        </button>
      </div>
    </>
  )
}
