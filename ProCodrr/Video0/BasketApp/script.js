const leftButton = document.getElementsByClassName('left')[0]
const rightButton = document.getElementsByClassName('right')[0]
let basket1 = Number(document.querySelector('.basket-1>h3>span').innerHTML)
let basket2 = Number(document.querySelector('.basket-2>h3>span').innerHTML)

leftButton.addEventListener('click', () => {
    if(basket2 != 0){
        document.querySelector('.basket-2>h3>span').innerHTML = `${--basket2}`
        document.querySelector('.basket-1>h3>span').innerHTML = `${++basket1}`
    }
})

rightButton.addEventListener('click', () => {
    if(basket1 != 0){
        document.querySelector('.basket-2>h3>span').innerHTML = `${++basket2}`
        document.querySelector('.basket-1>h3>span').innerHTML = `${--basket1}`
    }
   
})