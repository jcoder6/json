// const menu = new XMLHttpRequest();
// menu.open("GET", "recipe.json", true);
// // console.log(menu);

// menu.onload = function() {
//   let menuItems;
//   if(this.readyState === 4){
//     menuItems = JSON.parse(this.responseText);
//     menuItems = menuItems.menu;
//   }
//   storeItems(menuItems);
// }
// menu.send();
// let itemMenu = [
//   {
//     id: 1,
//     name: "buttermilk pancakes",
//     price: 15.99,
//     category: "breakfast",
//     img: "./images/item-1.jpeg",
//     aboutItem: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
//   }
// ]

// const itemsContainer = document.querySelector(".section-center");
// function getItem() {
//   setTimeout(() => {
//     let output = '';
//     itemMenu.forEach((eachItem) => {
//       output += `<article class="menu-item">
//               <img src="${eachItem.img}" alt="menu item" class="photo" />
//               <div class="item-info">
//                 <header>
//                   <h4>${eachItem.name}</h4>
//                   <h4 class="price">$${eachItem.price}</h4>
//                 </header>
//                 <p class="item-text">${eachItem.aboutItem}</p>
//               </div>
//             </article>`
//     })
//     itemsContainer.innerHTML = output;
//   }, 1000)
// }

// function createItem(items, callbacks) {
//   // console.log(items);
//   setTimeout(() => {
//     itemMenu.push(items)
//     callbacks();
//   },2000);
// }

// const menu = new XMLHttpRequest();
// menu.open("GET", "recipe.json", true);

// menu.onload = function() {
//   if(this.readyState === 4){
//     console.log(menu.responseText);
//   }
// }

// menu.send();

// createItem({id: 2,
//   name: "Diner Double",
//   price: 13.99,
//   category: "launch",
//   img: "./images/item-2.jpeg",
//   aboutItem: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
// }, getItem);
