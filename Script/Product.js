//declaring a new array for the products selected by user
let purchased = []
// declaring a variable to display the array
let forSale = document.querySelector('[data-forSale]')
//reloading items array to display
let items = JSON.parse(localStorage.getItem('items'))
//displaying the items array
forSale.innerHTML = items.map(function displayArray(item,index){
    return`
    <div class="col-md-4 my-5 d-flex justify-content-center">
        <div class="card h-100" style="width: 18rem;">
            <img src="${item.url}" class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <button value="${index}" class="btn btn-primary" data-add>Add to Cart</button>
                <p class="card-text">R${item.price}</p>
            </div>
        </div>
    </div>
    `
}).join('')
//function to display cart with no duplicates
function updateCartItems() {
    let updatedCart = [];
    cartItems.forEach(item => {
        let existingItem = updatedCart.find(updatedItem => updatedItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity for duplicates
        } else {
            updatedCart.push({ ...item, quantity: 1 }); // Add new items with quantity 1
        }
    });
    cartItems = updatedCart;
}
//add to cart function
function add(index){
    purchased.push(items[index])
    noDuplicates()
    localStorage.setItem('purchased',JSON.stringify(purchased))
}
//button asigned to add to cart function
forSale.addEventListener('click',function (){
    if(event.target.hasAttribute('data-add')){
        add(event.target.value)
    }
})
//search button
let searchBtn = document.querySelector('[data-searchBtn]')
//search bar value 
let searchFor = document.querySelector('[data-searchBar]')
//search button function
searchBtn.addEventListener("click", ()=>{
    let searchResults = items?.filter(item =>
    item.name.includes(searchFor.value));
    if (searchResults.length === 0) {
        forSale.innerHTML = searchResults.map(function displayArray(item,index){
            return`
            <div class="col-md-4 my-5 d-flex justify-content-center">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${item.url}" class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <button value="${index}" class="btn btn-primary" data-add>Add to Cart</button>
                        <p class="card-text">R${item.price}</p>
                    </div>
                </div>
            </div>
            `}).join('');
        alert('No Products were found')
    }else{
        forSale.innerHTML = searchResults.map(function displayArray(item,index){
            return`
            <div class="col-md-4 my-5 d-flex justify-content-center">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${item.url}" class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <button value="${index}" class="btn btn-primary" data-add>Add to Cart</button>
                        <p class="card-text">R${item.price}</p>
                    </div>
                </div>
            </div>
            `}).join('');
        }
});
//sort button
let sortBtn = document.querySelector('[data-sortBtn]')
//sort button function
sortBtn.addEventListener("click", ()=>{
     sorted = JSON.parse(localStorage.getItem("items"))?.sort((a, b) =>{
      if(a.price < b.price ) return -1;
      if(a.price > b.price ) return 1;
      return 0; // If the price are 0 return eqaul
    });
    // Assign the innerHTML value after sorting the items
    forSale.innerHTML = sorted.map(function displayArray(item,index){
        return`
        <div class="col-md-4 my-5 d-flex justify-content-center">
            <div class="card h-100" style="width: 18rem;">
                <img src="${item.url}" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <button value="${index}" class="btn btn-primary" data-add>Add to Cart</button>
                    <p class="card-text">R${item.price}</p>
                </div>
            </div>
        </div>
        `}).join('');
    });
if(items.length === 0){
    forSale.innerHTML = function spinner(){
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