export let list12 = document.querySelector('.logo2-list-item-7');
export let list22 = document.querySelector('.logo2-list-item-8');
export let list32 = document.querySelector('.logo2-list-item-9');
export let list42 = document.querySelector('.logo2-list-item-10');
export let list52 = document.querySelector('.logo2-list-item-11');
export let label2 = document.querySelector('.logo2-info__headline');
export let logo2 = document.querySelector('.logo2-icon');


 let checkbox2 = document.querySelector('.logo2-info__switch');
  
 checkbox2.addEventListener('click', function () {
    if (label2.textContent === 'Показать все') {
     list12.classList.add('logo2-list-mod');
     list22.classList.add('logo2-list-mod');
     list32.classList.add('logo2-list-mod');
     list42.classList.add('logo2-list-mod');
     list52.classList.add('logo2-list-mod');
     label2.textContent = 'Скрыть';
    
     logo2.src = "./img/icon2.png";
     

   
    list2.classList.add('logo2-list-height')
  } else {
    list12.classList.remove('logo2-list-mod');
     list22.classList.remove('logo2-list-mod');
     list32.classList.remove('logo2-list-mod');
     list42.classList.remove('logo2-list-mod');
     list52.classList.remove('logo2-list-mod');
    
    label2.textContent = 'Показать все';
    logo2.src = "./img/icon.png";
    list2.classList.remove('logo2-list-height')

  }
});

 let slider2 = document.querySelector('.slider2')

 document.addEventListener('DOMContentLoaded', () => {
const width = window.innerWidth
if (width < 768){
  let swiper = new Swiper(".mySwiper2", {
  
pagination: {
el: ".pagination2",
dynamicBullets: true,
},

}); 
} 
});
