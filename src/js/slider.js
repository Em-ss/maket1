 let list1 = document.querySelector('.logo-list-item-7');
 let list2 = document.querySelector('.logo-list-item-8');
 let list3 = document.querySelector('.logo-list-item-9');
 let list4 = document.querySelector('.logo-list-item-10');
 let list5 = document.querySelector('.logo-list-item-11');
 let label = document.querySelector('.logo-info__headline');
 let logo = document.querySelector('.logo-icon');
 let list = document.querySelector('.logo-list');

 let checkbox = document.querySelector('.logo-info__switch');
  
   checkbox.addEventListener('click', function () {
    if (label.textContent === 'Показать все') {
     list1.classList.add('logo-list-mod');
     list2.classList.add('logo-list-mod');
     list3.classList.add('logo-list-mod');
     list4.classList.add('logo-list-mod');
     list5.classList.add('logo-list-mod');

     label.textContent = 'Скрыть';
     logo.src = "./img/icon2.png";
     

   
    list.classList.add('logo-list-height')
  } else {
    list1.classList.remove('logo-list-mod');
     list2.classList.remove('logo-list-mod');
     list3.classList.remove('logo-list-mod');
     list4.classList.remove('logo-list-mod');
     list5.classList.remove('logo-list-mod');
    
    label.textContent = 'Показать все';
    logo.src = "./img/icon.png";
    list.classList.remove('logo-list-height')

  }
});







  let slider = document.querySelector('.slider')

  document.addEventListener('DOMContentLoaded', () => {
const width = window.innerWidth
if (width < 768){
  let swiper = new Swiper(".mySwiper", {
pagination: {
el: ".pagination",
dynamicBullets: true,
},
}); 
} 
});



/*var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  }); 
  
  /*
   document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 768){
    let newSwiper = new Swiper('.mySwiper', {
      pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    });
  } else {
    newSwiper.destroy();
  }
});



window.addEventListener('resize', () => {
  const width = window.innerWidth
  if (width < 768){
    let newSwiper = new Swiper('.mySwiper', {
      pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    });
  } else {
    newSwiper.destroy();
  }
});
*/