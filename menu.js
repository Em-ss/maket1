function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    var block = document.querySelector(".block");
    block.classList.toggle("show");
}


window.onclick = function(event) {
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
}