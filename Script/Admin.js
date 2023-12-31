//this is where all products will be stored
let items = [];
try {
  items = JSON.parse(localStorage.getItem("products")) || [];
} catch (error) {
  console.log("There has been an error");
  items = [];
}
//function to create objects
function CreateItems(id, name, description, price, url) {
  (this.id = id),
    (this.name = name),
    (this.description = description),
    (this.price = price),
    (this.url = url),
    (this.quantity = 1);
}
let item1 = new CreateItems(
  1,
  "Yamaha Oboe",
  "It's an oboe",
  3400,
  "https://i.postimg.cc/G24NX38y/oboe.webp"
);
let item2 = new CreateItems(
  2,
  "Sanchez acoustic guitar",
  "It's a guitar",
  6649,
  "https://i.postimg.cc/xCjHQqyX/guitar.webp"
);
let item3 = new CreateItems(
  3,
  "Sonata Alto Saxophone",
  "It's a Sax",
  5500,
  "https://i.postimg.cc/dVKTS2vw/saxophone.webp"
);
let item4 = new CreateItems(
  4,
  "Sanchez Bass Guitar",
  "It's a Bass",
  1399,
  "https://i.postimg.cc/MpKQ1yST/bass-guitar.webp"
);
let item5 = new CreateItems(
  5,
  "Casiotone electric keyboard",
  "It's a keyboard",
  2769,
  "https://i.postimg.cc/Hx50WjrH/electronic-keyboard.webp"
);
let item6 = new CreateItems(
  6,
  "Blue-ludwig 5PC Drumset",
  "It's a drumset",
  5999,
  "https://i.postimg.cc/N0qw9H5z/drum-kit.webp"
);
//pushing items into array
items.push(item1, item2, item3, item4, item5, item6);
//sets the array in local storage
localStorage.setItem("items", JSON.stringify(items));
items = JSON.parse(localStorage.getItem("items"));
let table = document.querySelector("[data-Admin]");
function displayItemsAdmin() {
  let products = items.map(function (item, index) {
    return `   
        <div id= "modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" id="close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" id="save" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
        </div>
        <tr style="width: 100%">
            <td style="text-align:center">${item.id}</td>
            <td style="text-align:center">${item.name}</td>
            <td style="text-align:center"><img width="150" height="150" src="${item.url}"/></td>
            <td style="text-align:center">R${item.price}</td>
           <td style="text-align:center">${item.description}</td>
           <td style="text-align:center"><button class="edit" style="color:black; font-weight:700" value="${index}">edit</button></td>
           <td style="text-align:center"><button style="color:black; font-weight:700" class="del" value="${index}">delete</button></td>
       </tr>
       `;
  });
  // to make the separate array from .map one array in items
  table.innerHTML = products.join("");
}
//intializes the function for display
displayItemsAdmin();
//Button functionality
//this is the function that will save the changes to the array
function saveAndLoad() {
  localStorage.setItem("items", JSON.stringify(items));
  //sets the array from local storage to array(items) in code
  items = JSON.parse(localStorage.getItem("items"));
}
//Delete button functionality
//Delete button function
function remove(position) {
  items.splice(position, 1);
}
//Delete button variable
let delBtn = document.querySelector(".del");
//Delete button
table.addEventListener("click", function () {
  if (event.target.classList.contains("del")) {
    remove(event.target.value);
    saveAndLoad();
    displayItemsAdmin();
  }
});
// variable for modal
let modal = document.querySelector("#modal");
let closeBtn = document.querySelector("#close");
let save = document.querySelector("#save");
//Edit button functionality
function intializesModal(position) {
  modal.style.display = "block";
  items.at(position);
}
//Edit button variable
let edtBtn = document.querySelector(".edit");
//display modal and editBtn function
table.addEventListener("click", function () {
  if (event.target.classList.contains("edit")) {
    intializesModal(event.target.value);
  }
});
//hideModals function
function hideModal() {
  if (event.target.classList.contains("modal")) {
    modal.style.display = "none";
  }
}
//close modal funtion
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
// display the create item modal

// variable for addmodal
let adminModal = document.querySelector("#modal2");
//display Admnmodal and
function displayModal() {
  adminModal.style.display = "block";
}
//hideAdmnModals function
function hideAdminModal() {
  adminModal.style.display = "none";
}
hideAdminModal();

function ObjectCreater(name, description, price, url) {
  (this.id = items.length + 1),
    (this.name = name),
    (this.description = description),
    (this.price = price),
    (this.url = url);
  this.quantity = 1;
}
function CreateObject() {
  let itemName = document.getElementById("itemName").value;
  let itemDescription = document.getElementById("itemDescription").value;
  let itemPrice = document.getElementById("itemPrice").value;
  let itemUrl = document.getElementById("itemUrl").value;

  let newItem = new ObjectCreater(
    itemName,
    itemDescription,
    itemPrice,
    itemUrl
  );
  items.push(newItem);
  displayItemsAdmin()
  saveAndLoad()
  console.log(newItem);
}
let sortBtn = document.querySelector("[data-sortBtn]");
//sort button function
sortBtn.addEventListener("click", () => {
  let items = JSON.parse(localStorage.getItem("items"));
  if (items) {
    let sorted = items.slice().sort((a, b) => a.price - b.price);
    let products = sorted.map(function (item, index) {
      return `   
        <tr>
            <td style="text-align:center">${item.id}</td>
            <td style="text-align:center">${item.name}</td>
            <td style="text-align:center"><img width="150" height="150" src="${item.url}"/></td>
            <td style="text-align:center">R${item.price}</td>
           <td style="text-align:center">${item.description}</td>
           <td style="text-align:center"><button class="edit" value="${index}">Edit</button></td>
           <td style="text-align:center"><button class="del" value="${index}">Delete</button></td>
       </tr>
            `;
    });
    table.innerHTML = products.join("");
  }
});
//spinner function
if (items.length === 0) {
  table.innerHTML = function spinner() {
    return `
            <center>
                <div>
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </center>
        `;
  };
}
