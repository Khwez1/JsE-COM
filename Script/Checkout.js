let purchased = JSON.parse(localStorage.getItem('purchased')) // turns the array made on the products page into a variable 
//where array will be displayed
let table = document.querySelector('table')
//displaying the array
table.innerHTML = purchased.map((item,index)=>{
    return`
    <tr>
        <td><img width=200 height=200 src="${item.url}"/></td>
        <td>${item.quantity}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>R${item.price}</td>
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