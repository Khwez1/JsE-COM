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

//toalt price function
let answer = document.querySelector('#total-price')
function calculateTotalPrice(items) {
    // Using reduce to accumulate the total price
    let totalPrice = items.reduce((zero, currentItem) => {
        return zero + currentItem.price;
    }, 0);

    return  totalPrice;
}
answer.innerHTML = calculateTotalPrice(purchased)
console.log(answer);
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
                <td><button value=${index} id="remove"><i class="fa-sharp fa-solid fa-trash-xmark"></i></button></button></td>
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
    }
}
//checkout button
function checkout() {
    alert('Thank you for shopping')
}
//clearfunction
function Clear(position){
    purchased.splice(position++)
    saveAndLoad2()
}
let clearbtn = document.getElementById('clear')
clearbtn.addEventListener('click',Clear())