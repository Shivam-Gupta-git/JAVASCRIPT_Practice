let itemsContainer = document.querySelector('#items-container')

let displayProduct = (myitem)=>{
  let innerHTML = '';
  myitem.forEach(item => {
    innerHTML += `
    <div class="item-container">
    <img src="${item.item_image}" alt="">
    <div class="rating">
      <span class="rating-star">${item.rating.stars}<i class="fa-solid fa-star"></i></span>
      <span class="no-of-reviews">${item.rating.noOfReviews}K</span>
    </div>
    <div class="company-name">${item.companyName}</div>
    <div class="item-name">${item.itemName}</div>
    <div class="prise">
      <span class="current-prise">${item.price.currentPrise}</span>
      <span class="original-prise">${item.price.originalPrise}</span>
      <span class="discount">(${item.price.discount} % OFF)</span>
    </div>
    <div class="button-container">
      <button class="btn-add-bag">Add to Bag</button>
    </div>
  </div>
    `
  });
  itemsContainer.innerHTML = innerHTML;
}
displayProduct(items);



let categoryList = document.querySelector('#categoryList')
let allCategories = [];
let initializeCategories = (items) => {
  items.forEach(item => {
    if(!allCategories.includes(item.category)){
      categoryList.innerHTML += `     <label class="choose-item">
      <input type="checkbox" onclick="categoryFilter(event)" value="${item.category}">${item.category}
    </label>
    `
    allCategories.push(item.category)
    }
  })
}
initializeCategories(items)



let selectedCategories = [];
let categoryFilter = (event) =>{
  let category = event.target.value;

  if(event.target.checked){
    selectedCategories.push(category)
  }
  else{
    selectedCategories = selectedCategories.filter(cat => cat !== category);
  }

  let filteredItems = items.filter(item => selectedCategories.includes(item.category));

  if(selectedCategories.length == 0){
    filteredItems = items;
  }
  displayProduct(filteredItems)
}