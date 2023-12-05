let purchased =JSON.parse(localStorage.getItem('purchased')) // turns the array made on the products page into a variable 
//where array will be displayed
let table = document.querySelector('tr')
//displaying the array
table.innerHTML = purchased.map((item,index)=>{
    return`
            <td><img width=200 height=200 src="${item.url}"/></td>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>R${item.price}</td>
    `
}).join('')