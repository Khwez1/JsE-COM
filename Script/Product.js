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
    // <div>
    //     <h2>${item.name}</h2>
    //     <p>${item.description}</p>
    //     <p><img width="200" height="200" src="${item.url}"/></p>
    //     <p>${item.price}</p>
    //     <button value="${index}" data-add>Add to Cart</button>
    // </div>
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
//search button
let searchBtn = document.querySelector('[data-searchBtn]')
//search bar value 
let searchFor = document.querySelector('[searchBar]')
//search button function
searchBtn.addEventListener("click", ()=>{
    let searchResults = JSON.parse(localStorage.getItem("items"))?.items.filter(item =>{
    if(item.includes(searchFor.value)){
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
    }else{
        alert('nothing was found')
    };
    });
});
//sort button
//sort button function
let sortBtn = document.querySelector('[data-sortBtn]')
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
