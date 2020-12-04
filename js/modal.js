const modal = document.querySelector('#modal');
const button = document.querySelector('.firstButton');
const span = document.querySelector('.close');

button.addEventListener('click', function(){
    modal.style.display = "flex";
});

span.addEventListener('click', function(){
    modal.style.display = "none";
});

