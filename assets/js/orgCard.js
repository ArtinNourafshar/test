function openProductPage(url) {
    window.location.href = url;
}

function openCartPage() {
    window.location.href = 'cart.html';
}

function addToCart(productName, productImage) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.push({name: productName, image: productImage});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' has been added to the cart!');
}

function showCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `
                <div class="row mb-3">
                    <div class="col-3">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid" />
                    </div>
                    <div class="col-9">
                        <p>${item.name}</p>
                    </div>
                </div>
            `;
            cartContainer.appendChild(productDiv);
        });
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    alert('Your cart has been cleared!');
    showCart();
}

function goBack() {
    window.location.href = 'index.html';
}

// برای بارگذاری سبد خرید در صفحه cart.html
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cart-items')) {
        showCart();
    }
});
