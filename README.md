# Om_jadhav_04
# Readme: OrchardCart Online Grocery Store

This HTML and JavaScript code represents a simple online grocery store named OrchardCart. OrchardCart allows users to browse and purchase various food products. Below is a brief description of the key features and functionality of the code.

## Features:

1. **Product Display:** The webpage displays a variety of food products, categorized into "Fruit," "Vegetables," "Milk," and "Fresh Meat." Each product is represented with an image, name, and price.

2. **Shopping Cart:** Users can add products to their shopping cart by clicking on the "cart" icon next to each product. The cart displays the added items along with their quantity and total price.

3. **Quantity Adjustment:** Users can adjust the quantity of each item in the cart by changing the value in the input field next to the product.

4. **Total Calculation:** The webpage dynamically calculates and updates the total price of the items in the cart as users add or adjust quantities.

5. **Cart Count:** The number of items in the cart is displayed in a badge on the cart icon. If the cart is empty, the count is hidden.

6. **Place Order Button:** Users can place an order by clicking the "Place Order" button.


## Code Structure:

- The HTML file (`index.html`) defines the structure of the webpage, including the product display, shopping cart, and layout.

- The JavaScript code (`<script>` section in the HTML) adds interactivity to the webpage. It listens for events such as clicks on the cart icon, adding products to the cart, adjusting quantities, and removing items from the cart.

- The product data is stored in the `productsData` array, which includes information about each product, such as name, category, image URL, and price.

- Functions are defined to create product boxes, dynamically populate the product display, update the cart, and handle user interactions.

## How to Use:

1. Open the HTML file in a web browser to access OrchardCart.

2. Browse through the available food products.

3. Click the "cart" icon next to a product to add it to your cart.

4. Adjust the quantity of items in the cart by changing the values in the input fields.

5. The total price in the cart is updated automatically based on your selections.

6. Click the "Place Order" button when you're ready to finalize your order.

7. You can close the cart by clicking the "X" icon.

## Customization:

- You can customize the product data in the `productsData` array to add or remove products.

- You can modify the styling by editing the associated CSS file (`style.css`).

- If you wish to use your own images, simply replace the image URLs in the `productsData` array with the URLs of your desired images.

- Additional features and functionality can be added as needed.
