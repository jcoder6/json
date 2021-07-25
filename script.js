const menuSection = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// console.log(menuSection, btnContainer);

const menu = new XMLHttpRequest();
menu.open("GET", "recipe.json", true);
menu.send();

menu.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let recipeResponse = JSON.parse(menu.responseText);
    getMenuItems(recipeResponse);
    displayFilterBtns(recipeResponse);
  }
}

function getMenuItems(menus) {
  console.log(menus);
  let menu = menus.menu;
  // console.log(menu);
  let items = collectItem(menu);
  menuSection.innerHTML = items;
}

function collectItem(menu){
  let getItem = menu.map(function (eachItem){
    console.log(eachItem);
    return `<article class="menu-item">
        <img src="${eachItem.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${eachItem.name}</h4>
            <h4 class="price">$${eachItem.price}</h4>
          </header>
          <p class="item-text">${eachItem.aboutItem}</p>
        </div>
      </article>`
  }).join("");
  return getItem;
}

function displayFilterBtns(category) {
  let menuCateg = category.menu;
  const categories = getFilterAndPutInArray(menuCateg) 
  displayBtn(categories);
  functionForBtn(menuCateg);
}

function getFilterAndPutInArray(filter) {
  let getFilters = filter.reduce(function (values, items) {
    if(!values.includes(items.category)){
      values.push(items.category);
    }
    return values;
  }, ["all"]);
  return getFilters;
}

function displayBtn(category){
  btnContainer.innerHTML = category.map(function (eachFilter) {
    return `<button class="filter-btn" type="button" data-filter="${eachFilter}">${eachFilter}</button>`;
  }).join("");
}

function functionForBtn(menuCateg) {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (filterBtn) {
    filterBtn.addEventListener('click', function (e) {
      const filterCateg = e.currentTarget.dataset.filter;
      const menu = menuCateg.filter(function (itemCateg) {
        if (itemCateg.category === filterCateg) {
          return itemCateg;
        }
      })
      const filteredMenu = { menu };
      console.log(filteredMenu);
      if (filterCateg === "all") {
        getMenuItems(category);
      } else {
        getMenuItems(filteredMenu);
      }
    })
  })
}