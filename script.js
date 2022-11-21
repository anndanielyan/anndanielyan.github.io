const btn = document.querySelector('.btn');
const number = document.querySelector('.number');
const minusbtn = document.querySelector('.minus');
const plusbtn = document.querySelector('.plus');
const score = document.querySelector('.score');

let num = 0;
plusbtn.addEventListener('click', function(e) {
    e.defaultPrevented;
    num++;
    number.textContent = num;
});

minusbtn.addEventListener('click', function(e) {
    e.defaultPrevented;
    num--;
    number.textContent = num;
});

