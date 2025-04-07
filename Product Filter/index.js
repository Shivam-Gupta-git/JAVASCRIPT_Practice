let itemsContainer = document.querySelector('#items-container');
let categoryListDiv = document.querySelector("#categoryList");
let allCat = [];
let selectedCategories = []; // Track selected categories

let displayProduct = (myitem) => {
    let innerHTML = '';

    myitem.forEach(item => {
        innerHTML += `
        <div class="item-container">
            <img src="${item.item_image}" alt="item image">
            <div class="rating">
            <span class="rating-star"> ${item.rating.stars} ⭐</span>
            <span class="no-of-reviews"> | ${item.rating.noOfReviews}k reviews</span>
               
            </div>
            <div class="company-name">${item.companyName}</div>
            <div class="item-name">${item.itemName}</div>
            <div class="price">
                <span class="current-prise"> ${item.price.currentPrise}</span>
                <span class="original-prise"> ${item.price.originalPrise}</span>
                <span class="discount">(${item.price.discount}% OFF)</span>
            </div>
         <div class="button-container">
         <button class="btn-add-bag">Add to Bag</button>
         </div>
          
        </div>`;
    });
    itemsContainer.innerHTML = innerHTML;
};

let initializeCategories = (items) => {
    items.forEach(item => {
        if (!allCat.includes(item.category)) {
            categoryListDiv.innerHTML += `<label class="choose-item">
                <input type='checkbox' onclick='categoryFilter(event)' value="${item.category}">${item.category}
            </label>
            `
            ;
            allCat.push(item.category);
        }
    });
};

let categoryFilter = (event) => {
    let category = event.target.value;

    if (event.target.checked) {
        // Add category to selectedCategories if checked
        selectedCategories.push(category);
    } else {
        // Remove category from selectedCategories if unchecked
        selectedCategories = selectedCategories.filter(cat => cat !== category);
    }

    // Filter items based on selected categories
    let filteredItems = items.filter(item => selectedCategories.includes(item.category));

    // If no categories are selected, show all items
    if (selectedCategories.length === 0) {
        filteredItems = items;
    }

    displayProduct(filteredItems);
};

// Initialize the categories and display products
initializeCategories(items);
displayProduct(items);

















