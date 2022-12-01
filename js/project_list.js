const data = [
    {
        id : 1,
        game_name : "액션 게임 1",
        game_img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game1.PNG?raw=true" ,
        game_sup:74,
        game_foll:120,
        game_ach : 85,
        game_cat : "ACTION"
    },
    {
        id : 2,
        game_name : "RTS Game 2",
        game_img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game2.PNG?raw=true" ,
        game_sup:21,
        game_foll:10,
        game_ach : 78,
        game_cat : "RTS"
    },
    {
        id : 3,
        game_name : "FPS 게임 3",
        game_img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game3.png?raw=true" ,
        game_sup:99,
        game_foll:50,
        game_ach : 65,
        game_cat : "FPS"
    },
    {
        id : 4,
        game_name : "새로운 게임 4",
        game_img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game4.png?raw=true" ,
        game_sup:41,
        game_foll:80,
        game_ach : 32,
        game_cat : "RPG"
    },
    {
        id : 5,
        game_name : "새로운 게임 5",
        game_img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game5.png?raw=true" ,
        game_sup:43,
        game_foll:57,
        game_ach : 15,
        game_cat : "ACTION"
    },
    {
        id : 6,
        game_name : "새로운 게임 6",
        game_img : "https://github.com/ahn1234/test-for-deploy/blob/main/img/game6.png?raw=true" ,
        game_sup:43,
        game_foll:84,
        game_ach : 77,
        game_cat : "RPG"
    },
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
                <span class = "glitch game_name">${product.game_name}</span>
                <span class = "game_cat">${product.game_cat} </span>
                <label class="letter">후원 수 : <label class = "game_sup">${product.game_sup} </label></label>
                <label class="letter">팔로워수 : <label class = "game_foll">${product.game_foll} </label></label>
                <label class="letter">달성률 : <label class = "game_ach">${product.game_ach} %</label></label>
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