document.addEventListener('DOMContentLoaded',

function(){
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function(){
        const searchTerm = searchInput.ariaValueMax.trim().toLowerCase();
        if("searchTerm!=="){
            comsole.log('Searching for:', searchTerm);
        }else{
            alert('Please enter a search term');
        }
    });

    let cartItems = 0;
    const cartIcon = document.querySelector('.cart-icon');

    cartIcon.addEventListener('click', function(){
        console.log('Cart clicked');
    });
});
function goToProfilePage(){
    window.location.href = 'profile.html';
}