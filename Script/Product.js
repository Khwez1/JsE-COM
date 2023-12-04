//declaring a new array for the products selected by user
let purchased = []
// declaring a variable to display the array
let forSale = document.querySelector('[data-forSale]')
//reloading items array to display
let items = JSON.parse(localStorage.getItem('items'))
//displaying the items array
forSale.innerHTML = items.map(function (item,index){
    return`
    <div>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p><img width="200" height="200" src="${item.url}"/></p>
        <p>${item.price}</p>
        <button value="${index}" data-add>Add to Cart</button>
    </div>
    `
}).join('')

function add(index){
    purchased.push(items[index])
    localStorage.setItem('purchased',JSON.stringify(purchased))
}

forSale.addEventListener('click',function (){
    if (event.target.hasAttribute('data-add')){
        add(event.target.value)
    }
})

let a = items.filter(item =>{
    return item.name == 'Nike Shoe'; 
})