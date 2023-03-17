// Nav Menu Mobile

document.querySelector(".fade_layer").addEventListener("click", showMenu);
document.querySelector(".menu_button").addEventListener("click", showMenu);

function showMenu() {
  let menu = document.querySelector("nav.menu");
  menu.classList.toggle("show");

  let layer = document.querySelector(".fade_layer")
  layer.classList.toggle("visible")
}



// Shop section
const productButtons = document.querySelectorAll('.products_button');

productButtons.forEach(button => {
  button.addEventListener('click', () => {
    dropdownProducts(button);
  });
});

function dropdownProducts(button){
  const productSection = button.nextElementSibling;
  const isShowing = productSection.classList.contains("show_products");

  if (!isShowing) {
    productSection.style.animation = "show_section 1.6s ease-in-out forwards";
  }

  productSection.classList.toggle("show_products");

  button.classList.toggle("wide", productSection.classList.contains("show_products"));

  if (isShowing) {
    productSection.style.animation = "hide_section 0.8s ease-in-out forwards";
    productSection.addEventListener("animationend", () => {
      productSection.style.animation = "none";
    }, { once: true });
  }
}

