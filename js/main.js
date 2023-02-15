document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".fade_layer").addEventListener("click", showMenu);
    document.querySelector(".menu_button").addEventListener("click", showMenu);
  
    function showMenu(){
      let menu = document.querySelector("nav.menu");
      menu.classList.toggle("show");
  
      let layer = document.querySelector(".fade_layer")
      layer.classList.toggle("visible")
    }
  });