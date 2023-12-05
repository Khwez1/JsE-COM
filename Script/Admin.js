//this is where all products will be stored
let items = []
//function to create objects 
function CreateItems(id,name,description,price,url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}
let item1 = new CreateItems(1,'Yamaha Oboe','Yamaha oboes are able to produce clear, quality sound with superior intonation through dramatic improvement in the precision and stability of the tube.',3400.00,'https://i.postimg.cc/G24NX38y/oboe.webp')
let item2 = new CreateItems(2,'Sanchez acoustic guitar','The Sanchez acoustic guitar delivers pleasant and boisterous tones for beginners and young musicians.',649.90,'https://i.postimg.cc/xCjHQqyX/guitar.webp')
let item3 = new CreateItems(3,'Sonata Alto Saxophone','The Sonata Alto Sax is the perfect choice for every aspiring saxophonist',5500,'https://i.postimg.cc/dVKTS2vw/saxophone.webp')
let item4 = new CreateItems(4,'Sanchez Bass Guitar','Sanchez bass guitar black and white Features Small BodyDouble Cutaway24 Frets1 Single-Coil Pickup and 1 Split-Coil Pickup2 Volume & 2 Tone ControlsChrome Fittings',1399.99,'https://i.postimg.cc/MpKQ1yST/bass-guitar.webp')
let item5 = new CreateItems(5,'Casiotone electric keyboard','The new Casiotone series is designed to be the most portable 61-note keyboard.',2769.00,'https://i.postimg.cc/Hx50WjrH/electronic-keyboard.webp')
let item6 = new CreateItems(6,'Blue-ludwig 5PC Drumset','The ludwig Revolution 20" 5pc Drum Kit is a turning point in beginner drum kits.',5999.00,'https://i.postimg.cc/N0qw9H5z/drum-kit.webp')
//pushing items into array
items.push(item1,item2,item3,item4,item5,item6)
//sets the array in local storage
localStorage.setItem('items',JSON.stringify(items))
items = JSON.parse(localStorage.getItem('items'))
let table = document.querySelector('[data-Admin]')
function displayItemsAdmin(){
    let products = items.map(function (item, index){
        return `   
                   <tr>
                   <td style="text-align:center">${item.id}</td>
                   <td style="text-align:center">${item.name}</td>
                   <td style="text-align:center"><img width="150" height="150" src="${item.url}"/></td>
                   <td style="text-align:center">R${item.price}</td>
                   <td style="text-align:center">${item.description}</td>
                   <td style="text-align:center"><button class="add">Edit</button></td>
                   <td style="text-align:center"><button class="del" value="${index}">Delete</button></td>
                   </tr>
               `
   })
   // to make the separate array from .map one array in items
   table.innerHTML = products.join('')
}
//intializes the function for display 
displayItemsAdmin()
//Button functionality  
//this is the function that will save the changes to the array
function saveAndLoad(){
    localStorage.setItem('items',JSON.stringify(items))
    //sets the array from local storage to array(items) in code
    items = JSON.parse(localStorage.getItem('items'))
}
//Delete button functionality
function remove(position) {
    items.splice(position,1)
}
let delbtn = document.querySelector('.del')
table.addEventListener('click',function (){
    if (event.target.classList.contains('del')){
        remove(event.target.value)
        // alert(event.target.value)
        saveAndLoad()
        displayItemsAdmin()
    }
})
//Edit button funtionality
