function addToCart(){
    let itemName = document.querySelector('.product h3').textContent;
    let itemPrice = parseFloat(document.querySelector('.product p:last-of-type').textContent.replace('Price: $',''));

    let item = {
        name:itemName,
        price:itemPrice,
        quantity:1
    };
    addToCartArray(item);
}
const addtoCartButtons = document.querySelectorAll('.product button');
addtoCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('.price').innerText;
        alert(`Added ${productName} to cart. Price:${productPrice}`);
    });
});
function goToProfilePage(){
    window.location.href = 'profile.html';
}