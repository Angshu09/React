// console.log("hello world!!!!")
// if(module.hot){
//     module.hot.accept()
// }



// Importing necessary files and methods
import { createRoot } from 'react-dom/client'
import './style.css'
import React from 'react';



// This is the basoc implementation using a variable
// const card = <div className='card'>
//     <img src='https://images.unsplash.com/photo-1574763788197-1808b6ac8142?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwaXBob25lfGVufDB8fDB8fHww' alt='iphone'></img>
//     <div className="card-container">
//         <h2>iPhone 11</h2>
//         <p>Authorize product of Apple</p>
//         <h2><b>$1000</b></h2>
//     </div>
// </div>




// This is the card function on blueprint (Method 1), here we have to maintain the order of the parameters
// function Card(key, image, title, description, price){
//     return(
//         <div className='card' key={key}>
//             <img src={image} alt='iphone'></img>
//             <div className="card-container">
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//                 <h2><b>{price}</b></h2>
//             </div>
//         </div>
//     )
// }



// Method 2
function Card(cardDetail){

    const { title, image, description, price} = cardDetail;
    return(
        <div className='card'>
            <img src={image} alt='iphone'></img>
            <div className="card-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <h2><b>{price}</b></h2>
            </div>
        </div>
    )
}

function Heading(){
    return <h1>Hello react</h1>
}



//Example container how only one object ais allowed to pass
// const container = [
//     Card(1, "iPhone 12"), Card(2, "Micromax"), Card(3, "Samsung"), Card(4, "Redmi"), Card(5, "Motorola")
// ]


//Creating the root
const root = createRoot(document.getElementById('root'))


//Example of container only one array
// root.render(<div className='container'>{container}</div>)


//fetching the data (Method 1)
// fetch('https://dummyjson.com/products')
// .then((res) => res.json())
// .then((res) => {
//     const container2 = res.products.map((product) => {
//         return Card(product.id, product.thumbnail, product.title, product.description, product.price)
//     })

//     root.render(<div className='container'>{container2}</div>)
// })



// fetch('https://dummyjson.com/products')
// .then((res) => res.json())
// .then((res) => {
//     root.render(<div className='container'>{
//         res.products.map((product) => {
//             return Card({
//                 key: product.id,
//                 title: product.title,
//                 image: product.thumbnail,
//                 description: product.description,
//                 price: product.price
//             })
//         })
//     }</div>)
// })

// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: 'h1',
//     ref: null,
//     props: {
//         children: 'Hello World'
//     }
// })


//We can also set a function on the type
// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Heading,
//     ref: null,
//     props: {
//         children: 'Hello World'
//     }
// })


//We can pass the props to the props object, 
// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Card,
//     ref: null,
//     props: {
//         image: 'https://imgs.search.brave.com/Svi0m9K0yvxW7v4ryZ7UUkiMV9MaeP_bec_R2bvFgrc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9weGJh/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDIvbmFy/dXRvLXBpY3R1cmVz/LmpwZw',
//         title: "Naruto",
//         price: "Infinity",
//         description: "Naruto Uzumaki"
//     }
// })

//create same thing using react.createElement()
// root.render(
//     React.createElement(Card, 
//         {
//             image: 'https://imgs.search.brave.com/Svi0m9K0yvxW7v4ryZ7UUkiMV9MaeP_bec_R2bvFgrc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9weGJh/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDIvbmFy/dXRvLXBpY3R1cmVz/LmpwZw',
//             title: "Naruto",
//             price: "Infinity",
//             description: "Naruto Uzumaki"
//         }
//     )
// )


//This is the actual syntax. this is a jsx we pass the attributes like a html tag
// root.render(<Card title='Naruto' price='infinity' image='https://imgs.search.brave.com/Svi0m9K0yvxW7v4ryZ7UUkiMV9MaeP_bec_R2bvFgrc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9weGJh/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDIvbmFy/dXRvLXBpY3R1cmVz/LmpwZw' />)



fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((res) => {
    root.render(<div className='container'>{
        res.products.map((product) => {
            return (<Card title={product.title} image={product.thumbnail} description={product.description} price={product.price} key={product.id} />)
        })
    }</div>)
})