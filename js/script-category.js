const input = document.querySelector('.navbar-side input[type="range"]');
const span = document.querySelector('.navbar-side .price p span');

input.addEventListener('input', function(){
    const inputValue = input.value;

    span.innerHTML = inputValue;

});

const heart = document.querySelectorAll('.catalog-car .recomendation-car .card .header-card .like');

for ( let i = 0; i < heart.length; i++ ){
    heart[i].addEventListener('click', function(){
        heart[i].classList.toggle('like');
        heart[i].classList.toggle('heart-fill');
    })
}