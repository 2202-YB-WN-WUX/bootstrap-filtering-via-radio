// console.log("hi");

var productContainer = document.getElementById("product-container")

var productData = [
    {
        name: "Eggs",
        description: "A couple of eggs.",
        image: "https://fresh.co.nz/wp-content/uploads/2020/03/Fried-Eggs-5-Ways_LR-e1583270528321.jpg",
        price: 24,
        glutenFree: true,
        vegan: false,
        dairyFree: true,
    },
    {
        name: "Toast",
        description: "A single piece of toast.",
        image: "https://images.getrecipekit.com/20210919052613-breakfast-toast-topper-1030x687.jpg?width=650&quality=90&",
        price: 1,
        glutenFree: false,
        vegan: true,
        dairyFree: true,
    },
    {
        name: "Smoked Salmon Crostini",
        description: "A yum piece of baked salmon on bread.",
        image: "https://realhousemoms.com/wp-content/uploads/smoked-salmon-crostini-FB.jpg",
        price: 1242,
        glutenFree: false,
        vegan: false,
        dairyFree: true,
    },
    {
        name: "Milkshake",
        description: "A banana milkshake.",
        image: "https://bakingmischief.com/wp-content/uploads/2021/02/banana-milkshake-without-ice-cream-image-square-3.jpg",
        price: 5,
        glutenFree: true,
        vegan: false,
        dairyFree: false,
    },
    {
        name: "Coffee",
        description: "A coffee.",
        image: "https://sprudge.com/wp-content/uploads/2016/04/Sprudge-ObjetoEncontrado-JulianaGanan-Sprudge-ObjetoEncontrado-JulianaGanan-BSB_Coffee_Shops_Guide_objeto_latte_art_Lucas_Hamu_01.jpg",
        price: 2.50,
        glutenFree: true,
        vegan: false,
        dairyFree: false,
    },
    {
        name: "Tofu",
        description: "High protein",
        image: "https://www.wandercooks.com/wp-content/uploads/2020/11/yudofu-japanese-hot-tofu-3-500x375.jpg",
        price: 5,
        glutenFree: true,
        vegan: true,
        dairyFree: true,
    }
]

function renderFoodType(product) {
    let foodType = "";
    if (product.glutenFree === true) {
        foodType += `<span class="badge rounded-pill text-bg-primary">Gluten free</span>`
    }
    if (product.vegan === true) {
        foodType += `<span class="badge rounded-pill text-bg-primary">Vegan</span>`
    }
    if (product.dairyFree === true) {
        foodType += `<span class="badge rounded-pill text-bg-primary">Dairy free</span>`
    }
    return foodType;

}

function renderProducts(filter) {

    let filteredProducts = [];

    if (filter === "all") {
        for (let index = 0; index < productData.length; index++) {
            filteredProducts.push(productData[index])
        }

    } else if (filter === "glutenFree") {
        for (let index = 0; index < productData.length; index++) {
            if (productData[index].glutenFree === true) {
                filteredProducts.push(productData[index])
            }

        }

    } else if (filter === "vegan") {
        for (let index = 0; index < productData.length; index++) {
            if (productData[index].vegan === true) {
                filteredProducts.push(productData[index])
            }

        }

    } else if (filter === "dairyFree") {
        for (let index = 0; index < productData.length; index++) {
            if (productData[index].dairyFree === true) {
                filteredProducts.push(productData[index])
            }
        }
    }

    // check all our filtered products
    // console.log(filteredProducts)

    // show all products from filtered list

    for (let index = 0; index < filteredProducts.length; index++) {
        productContainer.innerHTML +=
            `
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card">
                    <img src="${filteredProducts[index].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${filteredProducts[index].name}</h5>
                            <p class="card-text">${filteredProducts[index].description}</p>
                            <p class="card-text">$${filteredProducts[index].price}</p>
                            <div>
                            ${renderFoodType(filteredProducts[index])}
                            </div>
                        </div>
                </div>
            </div >`
    }

} //end of checking the filter

// get all radio buttons
var radioButtons = document.getElementsByClassName('btn-check');

// add click listener to radio buttons
for (let index = 0; index < radioButtons.length; index++) {
    radioButtons[index].addEventListener('click', updateProductList);
}

function updateProductList() {

    // check which radio button is selected
    for (let index = 0; index < radioButtons.length; index++) {
        if (radioButtons[index].checked) {
            // console.log("This button is checked");
            // console.log(radioButtons[index])

            filterString = radioButtons[index].id;
            // ends loop
            break;
        }
    }

    // clear results
    productContainer.innerHTML = "";

    // rerender our products
    renderProducts(filterString);

}

// show all products at start
renderProducts("all");