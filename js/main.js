// Nav Menu Mobile

document.querySelector(".fade_layer").addEventListener("click", showMenu);
document.querySelector(".menu_button").addEventListener("click", showMenu);

function showMenu(){
  let menu = document.querySelector("nav.menu");
  menu.classList.toggle("show");
  
  let layer = document.querySelector(".fade_layer")
  layer.classList.toggle("visible")
}


// document.querySelectorAll(".products_button").forEach(divs => {
//   divs.addEventListener("click", function(event) {
//     let clickedElementClass = event.target.className;
//     let dropdown = document.querySelectorAll(".products_section",{clickedElementClass});
//     dropdown.forEach(d => d.classList.toggle("show_products"));

//   }) 
// })

document.querySelectorAll(".products_button").forEach(div => {
  div.addEventListener("click", function(event) {
    let clickedElementClass = event.target.className;
    let dropdown = document.querySelector(".products_section",{clickedElementClass});
    dropdown.classList.toggle("show_products");
  })
})


// function dropdownProducts(){
//   let dropdown = document.querySelector(".products_section#protein_section")
//   dropdown.classList.toggle("show_products")
// }
  

  //this.nextElementSibling.classlist.toggle