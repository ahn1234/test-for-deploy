const data = [
    {
    id : 1,
    funding_name : "액션 게임 1",
    game_img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game1.PNG?raw=true" ,
    funding_sup:74,
    fundation:120
    }
]





const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");


const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(
        (product) =>
         `
            <div class="product">
                <div class="lines"></div>
                <div class="imgBx">
                    <img src=${product.game_img} alt="">
                </div>
                <span class = "glitch game_name">${product.funding_name}</span>
                <label class="letter">후원 수 : <label class = "game_sup">${product.funding_sup} </label></label>
                <label class="letter">팔로워수 : <label class = "game_foll">${product.fundation} </label></label>
                <div class="actionBtn ">
                    <button class="glitch" onclick="location.href='project_detail.html'"> 자세히 보기</button>
                </div>
            </div>
         
    `
    ).join("");
};


displayProducts(data)

// 검색 기능
searchInput.addEventListener("keyup", (e) => {
   const value = e.target.value.toLowerCase();

   if(value){
    displayProducts(data.filter(itemp=> itemp.game_name.toLowerCase().indexOf(value) !== -1));
    }else{
        displayProducts(data)
   }
});

// 카테고리 필터링
const setCategories = () => {
    const allCats = data.map((item) => item.game_cat);
    const categories=[
        "ALL",
        ...allCats.filter((item,i)=>{
            return allCats.indexOf(item) === i;
        }),
    ];


    categoriesContainer.innerHTML = categories.map(game_cat=>
        `
        <span class = "cat">${game_cat}</span>
        `).join("");

    categoriesContainer.addEventListener("click",(e)=>{
        const selectedCat = e.target.textContent;

        selectedCat==="ALL"
            ? displayProducts(data)
            : displayProducts(data.filter((item)=> item.game_cat === selectedCat));
    });
};

// 가격 필터링 
const setPrices = () => {
    const priceList = data.map((item) => item.game_ach);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "%" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = e.target.value;
        displayProducts(data.filter((item) => item.game_ach <= e.target.value));
    });
};

setCategories();
setPrices();