const data = [
    {
    id : 1,
    name : "John",
    img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game1.PNG?raw=true" ,
    price:74,
    cat : "Dress",
    },
    {
        id : 11,
        name : "John",
        img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game2.PNG?raw=true" ,
        price:74,
        cat : "Dress",
    },
    {
        id : 2,
        name : "djaksdjlasdjlaj",
        // img : /img/game1.PNG ,
        price:40,
        cat : "Sport",
    },
    {
        id : 3,
        name : "chncvncvncvncvncv",
        // img : /img/game1.PNG ,
        price:200,
        cat : "Luxury",
    },
    {
        id : 4,
        name : "vwetdgdsdg",
        // img : /img/game1.PNG ,
        price:16,
        cat : "Sport",
    },
    {
        id : 5,
        name : "jgftf",
        // img : /img/game1.PNG ,
        price:74,
        cat : "Casual",
        },
]





const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");


// 게임 리스트들 출력
const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(
        (product) =>
         `
            <div class="product">
                <img src =  ${product.img} alt="" />
                <span class = "name">${product.name} </span>
                <span class = "priceText">${product.price} </span>
            </div>   
         `
    ).join("");
};


displayProducts(data)

searchInput.addEventListener("keyup", (e) => {
   const value = e.target.value.toLowerCase();

   if(value){
    displayProducts(data.filter(itemp=> itemp.name.toLowerCase().indexOf(value) !== -1));
    }else{
        displayProducts(data)
   }
});

const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories=[
        "ALL",
        ...allCats.filter((item,i)=>{
            return allCats.indexOf(item) === i;
        }),
    ];


    categoriesContainer.innerHTML = categories.map(cat=>
        `
        <span class = "cat">${cat}</span>
        `).join("");

    categoriesContainer.addEventListener("click",(e)=>{
        const selectedCat = e.target.textContent;

        selectedCat==="ALL"
            ? displayProducts(data)
            : displayProducts(data.filter((item)=> item.cat === selectedCat));
    });
};

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};

setCategories();
setPrices();