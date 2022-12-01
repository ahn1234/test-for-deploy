const funding_data = [
    {
        id : 1,
        funding_name : "액션 게임 1",
        funding_sup:74,
        fundation:120,

    },
    {
        id : 2,
        funding_name : "RTS Game 2",
        funding_sup:21,
        fundation:10,

    },
]





const productsContainer = document.querySelector(".fundings");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayFunding = (filteredFundings) => {
    productsContainer.innerHTML = filteredFundings.map(
        (funding) =>
            `
            <!----div class="funding">
                <div class="lines"></div>
                <div class="imgBx">
                    <img src=${funding.game_img} alt="">
                </div>
                <span class = "glitch funding_name">${funding.game_name}</span>
                <span class = "game_cat">${funding.game_cat} </span>
                <label class="letter">후원 수 : <label class = "game_sup">${funding.game_sup} </label></label>
                <label class="letter">팔로워수 : <label class = "game_foll">${funding.game_foll} </label></label>
                <label class="letter">달성률 : <label class = "game_ach">${funding.game_ach} %</label></label>
                <div class="actionBtn">
                    <button class="glitch" onclick="location.href='funding_detail.html'"> 자세히 보기</button>
                </div>
            </div-->      
            <div class="funding">
                <div class="lines"></div>
                <span class = "glitch funding_name">${funding.funding_name}</span>
                <label class="letter">후원자 수 : <label class = "funding_sup">${funding.funding_sup} </label></label>
                <label class="letter">후원금: <label class = "fundation">${funding.fundation} </label></label>
                <div class="actionBtn ">
                    <button class="glitch" onclick="location.href='project_detail.html'"> 자세히 보기</button>
                </div>
            </div>    
    `
    ).join("");
};


displayFunding(funding_data)

// 검색 기능
searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if(value){
        displayFunding(funding_data.filter(itemp=> itemp.game_name.toLowerCase().indexOf(value) !== -1));
    }else{
        displayFunding(funding_data)
    }
});

// 카테고리 필터링
const setCategories = () => {
    const allCats = funding_data.map((item) => item.game_cat);
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
            ? displayFunding(funding_data)
            : displayFunding(funding_data.filter((item)=> item.game_cat === selectedCat));
    });
};

// 가격 필터링
const setPrices = () => {
    const priceList = funding_data.map((item) => item.game_ach);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "%" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = e.target.value;
        displayProducts(funding_data.filter((item) => item.game_ach <= e.target.value));
    });
};

setCategories();
setPrices();