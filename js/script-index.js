const heart1 = document.querySelectorAll('.catalog-car .popular-car .card .header-card .like');
const heart2 = document.querySelectorAll('.catalog-car .recomendation-car .card .header-card .like');

for ( let i = 0; i < heart1.length; i++ ){
    heart1[i].addEventListener('click', function(){
        heart1[i].classList.toggle('like');
        heart1[i].classList.toggle('heart-fill');
    })
}

for ( let i = 0; i < heart2.length; i++ ){
    heart2[i].addEventListener('click', function(){
        heart2[i].classList.toggle('like');
        heart2[i].classList.toggle('heart-fill');
    })
}