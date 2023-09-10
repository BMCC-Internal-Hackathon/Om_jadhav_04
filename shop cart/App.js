
    document.addEventListener('DOMContentLoaded', () => {
        const btnCart = document.querySelector('#cart-icon');
        const cart = document.querySelector('.cart');
        const btnClose = document.querySelector('#cart-close');
        const cartCount = document.querySelector('.cart-count');
        const totalValue = document.querySelector('.total-price');
        const cartContent = document.querySelector('.cart-content');
        const shopContent = document.getElementById('shop-content');

        const productsData = [
        {
        id: 1,
        name: "Organic Apples",
        category: "Fruit",
        img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 2.99
    },
    {
        id: 2,
        name: "Fresh Strawberries",
        category: "Fruit",
        img: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYWJlcnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price: 3.49
    },
    {
        id: 3,
        name: "Bananas",
        category: "Fruit",
        img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price: 1.99
    },

    // Vegetables
    {
        id: 4,
        name: "Organic Tomatoes",
        category: "Vegetables",
        img: "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 1.99
    },
    {
        id: 5,
        name: "Carrots",
        category: "Vegetables",
        img: "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 2.49
    },
    {
        id: 6,
        name: "Broccoli",
        category: "Vegetables",
        img: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJyb2Njb2xpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 2.99
    },

    // Milk
    {
        id: 7,
        name: "Fresh Milk",
        category: "Milk",
        img: "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMG1pbGt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 3.49
    },
    {
        id: 8,
        name: "Almond Milk",
        category: "Milk",
        img: "https://images.unsplash.com/photo-1620189507195-68309c04c4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWlsa3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 4.99
    },
    {
        id: 9,
        name: "Soy Milk",
        category: "Milk",
        img: "https://images.unsplash.com/photo-1555465083-a845797ef750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JnYW5pYyUyMHNveSUyMG1pbGt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 3.99
    },

    // Fresh Meat
    {
        id: 10,
        name: "",
        category: "Organic Eggs",
        img: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVnZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 3.99
    },
    {
        id: 11,
        name: "Free-range Chicken",
        category: "Fresh Meat",
        img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 7.99
    },
    {
        id: 12,
        name: "Salmon Fillet",
        category: "Fresh Meat",
        img: "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FsbW9uJTIwRmlsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 11.99
    },
        ];

        // Function to create a product box element
        function createProductBox(product, index) {
            const productBox = document.createElement('div');
            productBox.classList.add('food-box');

            productBox.innerHTML = `
                <div class="pic">
                    <img src="${product.img}" class="food-img">
                </div>
                <h2 class="food-title">${product.name}</h2>
                <span class="food-price">Rs.${product.price.toFixed(2)}</span>
                <ion-icon name="cart" class="add-cart" data-index="${index}"></ion-icon>
            `;

            return productBox;
        }

        // Function to dynamically create product boxes
        function createProductBoxes(productsData) {
            productsData.forEach((product, index) => {
                const productBox = createProductBox(product, index);
                shopContent.appendChild(productBox);
            });
        }

        // Call the function to create product boxes
        createProductBoxes(productsData);

        const itemList = [];

        function updateTotal() {
            let total = 0;

            itemList.forEach((item) => {
                total += parseFloat(item.price) * item.quantity;
            });

            totalValue.innerHTML = 'Rs.' + total.toFixed(2);

            // Update cart count
            const count = itemList.length;
            cartCount.innerHTML = count;

            if (count === 0) {
                cartCount.style.display = 'none';
            } else {
                cartCount.style.display = 'block';
            }
        }

        function addCart(event) {
            const index = event.target.getAttribute('data-index');
            const product = productsData[index];

            const existingItem = itemList.find((item) => item.id === product.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                itemList.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
            }

            const newProductElement = createCartProduct(product.name, product.price, product.img);
            cartContent.innerHTML += newProductElement;
            updateTotal();
        }

        function createCartProduct(name, price, img) {
    return `
        <div class="cart-box">
            <img src="${img}" class="cart-img">
            <div class="detail-box">
                <div class="cart-food-title">${name}</div>
                <div class="price-box">
                    <div class="cart-price">Rs.${price.toFixed(2)}</div>
                    <div class="cart-amt">Rs.${(price * itemList.find((item) => item.name === name).quantity).toFixed(2)}</div>
                </div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <ion-icon name="trash" class="cart-remove"></ion-icon>
        </div>
    `;
}


        shopContent.addEventListener('click', (event) => {
            if (event.target.classList.contains('add-cart')) {
                addCart(event);
            }
        });

        cartContent.addEventListener('click', (event) => {
            if (event.target.classList.contains('cart-remove')) {
                const itemToRemove = event.target.parentElement.querySelector('.cart-food-title').textContent;
                itemList.splice(
                    itemList.findIndex((item) => item.name === itemToRemove),
                    1
                );
                event.target.parentElement.remove();
                updateTotal();
            }
        });

      

        cartContent.addEventListener('change', (event) => {
            if (event.target.classList.contains('cart-quantity')) {
                const itemToChange = event.target.parentElement.parentElement.querySelector('.cart-food-title').textContent;
                const newQuantity = parseInt(event.target.value);

                const foundItem = itemList.find((item) => item.name === itemToChange);
                if (foundItem) {
                    foundItem.quantity = newQuantity;
                }

                updateTotal();
            }
        });

        btnCart.addEventListener('click', () => {
            cart.classList.add('cart-active');
        });

        btnClose.addEventListener('click', () => {
            cart.classList.remove('cart-active');
        });
    });
