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
let item3 = new CreateItems(3,'Sonata Alto Saxophone','The Sonata Alto Sax is the perfect choice for every aspiring saxophonist',5500.00,'https://i.postimg.cc/dVKTS2vw/saxophone.webp')
let item4 = new CreateItems(4,'Sanchez Bass Guitar','Sanchez bass guitar black and white Features Small BodyDouble Cutaway24 Frets1 Single-Coil Pickup and 1 Split-Coil Pickup2 Volume & 2 Tone ControlsChrome Fittings',1399.99,'https://i.postimg.cc/MpKQ1yST/bass-guitar.webp')
let item5 = new CreateItems(5,' Casiotone electric keyboard','The new Casiotone series is designed to be the most portable 61-note keyboard.',2769.00,'https://i.postimg.cc/Hx50WjrH/electronic-keyboard.webp')
let item6 = new CreateItems(6,'Blue-ludwig 5PC Drumset','The ludwig Revolution 20" 5pc Drum Kit is a turning point in beginner drum kits.',5999.00,'https://i.postimg.cc/N0qw9H5z/drum-kit.webp')
//pushing items into array
items.push(item1,item2,item3,item4,item5,item6)
//sets the array in local storage
localStorage.setItem('items',JSON.stringify(items))
items = JSON.parse(localStorage.getItem('items'))
let table = document.querySelector('[data-Admin]')
function displayItemsAdmin(){
    let products = items.map(function (item, index){
        return `<div class="container">
                <div class="row justify-content-start">
                <div class="col-md-4">
                   ${item.id}
                   ${item.name}
                   <img width="200" height="200" src="${item.url}"/>
                   R${item.price}
                   ${item.description}
                   <button>Edit</button>
                   <button class="del" value="${index}">Delete</button>
               </div>
               </div>
               </div>`
   })
   // to make the separate array from .map one array in items
   table.innerHTML = products.join('')
}
function favourite(){
    localStorage.setItem('items',JSON.stringify(items))
    //sets the array from local storage to array(items) in code
    items = JSON.parse(localStorage.getItem('items'))
}
displayItemsAdmin()
