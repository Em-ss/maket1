 let slider3 = document.querySelector('.slider3')

 document.addEventListener('DOMContentLoaded', () => {
const width = window.innerWidth
if (width < 768){
    let swiper = new Swiper(".mySwiper3", {
    
pagination: {
el: ".pagination3",
dynamicBullets: true,
},

}); 
} 
});
