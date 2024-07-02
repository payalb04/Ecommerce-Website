document.getElementById('orderForm').addEventListener('submit', function(event){
    event.preventDefault();

    setTimeout(function(){
        window.location.href = 'thankyou.html';
    }, 1000);
});