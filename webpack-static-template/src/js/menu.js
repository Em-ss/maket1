
 let click1 = document.querySelector('.dropbtn');
//  let click2 = document.querySelector('.dropbtn2');
//  let click3 = document.querySelector('.dropbtn3');

 let clickClose = document.querySelector('.close');


 click1.addEventListener('click', openBtn);
 clickClose.addEventListener('click', openBtn);

//  click2.addEventListener('click', openBtn2);
//  click3.addEventListener('click', openBtn3);


 function openBtn() {
    document.getElementById("myDropdown").classList.toggle("show");
      let block = document.querySelector(".block");
    block.classList.toggle("show");
   
}

 function openBtn2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  var block2 = document.querySelector(".block2");
  block2.classList.toggle("show");
}

 function openBtn3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  let block3 = document.querySelector(".block2");
  block3.classList.toggle("show");
  console.log("retsd")
}




 let allBtns = document.querySelectorAll('.close2')
  allBtns.forEach(function(btn)  {
    btn.addEventListener('click', function()  {
      let Dropdowns = document.querySelector('.dropdown-content2');
      let Dropdownss = document.querySelector('.block2');
      let Dropdownsss = document.querySelector('.dropdown-content3');
      
      Dropdowns.classList.remove('show');
      Dropdownss.classList.remove('show');
      Dropdownsss.classList.remove('show');
      
      })
    })
  
  


 let allBtns2 = document.querySelectorAll('.openWnd')
 allBtns2.forEach(function(btn)  {
   btn.addEventListener('click', function()  {
    if (btn.classList.contains('dropbtn2')) {
      openBtn2();
    }
    if (btn.classList.contains('dropbtn3')) {
      openBtn3();
    }     
     })
   })

/*

function myFunction4() {


  var dropdowns3 = document.getElementsByClassName("dropdown-content3");
  var dropdownss3 = document.getElementsByClassName("block2");
  var i;
  for (i = 0; i < dropdowns2.length; i++) {
    var openDropdown3 = dropdowns3[i];
    var openDropdownss3 = dropdownss3[i];
    if (openDropdown3.classList.contains('show')) {
      openDropdownss3.classList.remove('show');
      openDropdown3.classList.remove('show');
    }
  }
}

click.addEventListener('click', function () {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var dropdownss = document.getElementsByClassName("block");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var openDropdownss = dropdownss[i];
      if (openDropdown.classList.contains('show')) {
        openDropdownss.classList.remove('show');
        openDropdown.classList.remove('show');
      }
    }
  }
})


click2.addEventListener('click', function (event) {
  if (!event.target.matches('.dropbtn2')) {
  
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var dropdownss2 = document.getElementsByClassName("block2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      var openDrodownss2 = dropdownss2[i];
      if (openDropdown2.classList.contains('show')) {
        openDropdownss2.classList.remove('show');
        openDropdown2.classList.remove('show');
      }
    }
  }
  })
  */