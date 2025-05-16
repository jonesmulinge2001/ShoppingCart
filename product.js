class Products {
    constructor(productId, productName, productDesc, price, imageURL) {
        this.productId = productId;
        this.productName = productName;
        this.productDesc = productDesc;
        this.price = price;
        this.imageURL = imageURL;
    }

    displayProduct() {
        const productDiv = document.getElementById("products");
        productDiv.innerHTML += `
            <div class="product">
                <img src = "${this.imageURL}"/>
                <p>${this.productName}</p>
                <p>${this.productDesc}</p>
                <p>${this.price}</p>
                <button class="addToCart" id="${this.productId}">Add To Cart</button>
            </div>
        `;
    }
}

const currency = '$';
const productsList = [
    new Products(1, "waffle", "Waffle with berries", `${currency} 6.5`,'pro.jpg'),
    new Products(2, "creme", "vannila bean creme brulle", `${currency} 6.5`,'pro.jpg'),
    new Products(3, "macaron", "macaron mix of five", `${currency} 6.5`,'/food.jpg'),
    new Products(4, "tiramisu", "classic tiramisu", `${currency} 6.5`,'/food.jpg'),
    new Products(5, "baklava", "pistachio baklava", `${currency} 6.5`,'/food.jpg'),
    new Products(6, "pie", "lemon miringue pie", `${currency} 6.5`,'/food.jpg'),
    new Products(7, "cake", "red velvet cake", `${currency} 6.5`,'/food.jpg'),
    new Products(8, "brownie", "salted caramel brownie", `${currency} 6.5`,'/food.jpg'),
    new Products(9, "panna cotta", "vanilla panna cotta", `${currency} 6.5`,'/food.jpg')
];

productsList.forEach(item => item.displayProduct());

class Cart {
    constructor() {
        this.cart = [];
    }

    addProductToCart(productId) {
        const product = productsList.find(product => product.productId === parseInt(productId));
        if (product) {
            this.cart.push(product);
            this.updateCartCountValue();
        }
    }

    updateCartCountValue() {
        const cartProducts = document.getElementById("cartItem");   
        const cartDiv = document.getElementById("cartValue");

        cartProducts.innerHTML = '';
        this.cart.forEach(item => {
            const cartProduct = document.createElement("p");
            cartProduct.textContent = `${item.productName} - ${item.price}`;
            
            cartProducts.appendChild(cartProduct);
            cartDiv.appendChild(cartProducts);
        });

        cartDiv.textContent = `(${this.cart.length})`;
    }
}

const cart = new Cart(); // cart object

// function handleAddToCartClick(event) {
//     if (event.target.classList.contains("addToCart")) {
//         const productId = event.target.id;
//         cart.addProductToCart(productId);
//     }
// }

// document.getElementById("products").addEventListener("click", handleAddToCartClick);
