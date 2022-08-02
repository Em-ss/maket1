var list12 = document.querySelector('.logo2-list-item-7');
var list22 = document.querySelector('.logo2-list-item-8');
var list32 = document.querySelector('.logo2-list-item-9');
var list42 = document.querySelector('.logo2-list-item-10');
var list52 = document.querySelector('.logo2-list-item-11');
var label2 = document.querySelector('.logo2-info__headline');
var logo2 = document.querySelector('.logo2-icon');
var list2 = document.querySelector('.logo2-list');

  var checkbox2 = document.querySelector('.logo2-info__switch');
  
  checkbox2.addEventListener('click', function () {
    if (label.textContent === 'Показать все') {
     list12.classList.add('logo2-list-mod');
     list22.classList.add('logo2-list-mod');
     list32.classList.add('logo2-list-mod');
     list42.classList.add('logo2-list-mod');
     list52.classList.add('logo2-list-mod');
     label2.textContent = 'Скрыть';
    
     logo2.src = "img/icon2.png";
     

   
    list2.classList.add('logo2-list-height')
  } else {
    list12.classList.remove('logo2-list-mod');
     list22.classList.remove('logo2-list-mod');
     list32.classList.remove('logo2-list-mod');
     list42.classList.remove('logo2-list-mod');
     list52.classList.remove('logo2-list-mod');
    
    label2.textContent = 'Показать все';
    logo2.src = "img/icon1.png";
    list2.classList.remove('logo2-list-height')

  }
});

let slider2 = document.querySelector('.slider2')

document.addEventListener('DOMContentLoaded', () => {
const width = window.innerWidth
if (width < 768){
var swiper = new Swiper(".mySwiper2", {
  
pagination: {
el: ".pagination2",
dynamicBullets: true,
},

}); 
} 
});
