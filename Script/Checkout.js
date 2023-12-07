let purchased = JSON.parse(localStorage.getItem('purchased')) // turns the array made on the products page into a variable 
//where array will be displayed
let table = document.querySelector('table')
//displaying the array

table.innerHTML = purchased.map((item)=>{
    return`
    <tr>
        <td><img width=200 height=200 src="${item.url}"/></td>
        <td>${item.quantity}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>R${item.price}</td>
        <td><button class="remove">remove</button></td>
    </tr>
    `
}).join('')
//function for subtotal and Grandtotal values
let price = document.querySelector('span');
function subtotal(){
}
//function for spinner
if(purchased.length === 0){
    table.innerHTML = function spinner(){
        return`
        <center>
        <div>
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        </center>
        `
}}
//toalt price function
let answer = document.querySelector('#total-price')
function calculateTotalPrice(items) {
    // Using reduce to accumulate the total price
    const totalPrice = items.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
    }, 0);

    return answer = totalPrice;
}

let removeFromCheckoutBtn = document.querySelector('.remove')
table.addEventListener('click',function (){
    if (event.target.classList.contains('remove')){
        remove(event.target.value)
        saveAndLoad2()
        table.innerHTML = purchased.map((item,index)=>{
            return`
            <tr>
                <td><img width=200 height=200 src="${item.url}"/></td>
                <td>${item.quantity}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>R${item.price}</td>
                <td><button value=${index} id="remove">remove</button></td>
            </tr>
            `
        }).join('')
    }
})
function saveAndLoad2(){
    localStorage.setItem('purchased',JSON.stringify(purchased))
    //sets the array from local storage to array(items) in code
    purchased = JSON.parse(localStorage.getItem('purchased'))
}
function remove(position) {
    purchased.splice(position,1)
}