// Nav Menu Mobile
document.querySelector(".fade_layer").addEventListener("click", showMenu);
document.querySelector(".menu_button").addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade_layer")
    layer.classList.toggle("visible")
}

// Header Universal
const header = document.querySelector('.header_universal');
const navText = document.querySelectorAll('.nav_link');
const icons = document.querySelector('.nav_icons');

window.addEventListener('scroll', () => {
    if (window.pageYOffset <= 20) {
        header.classList.remove('header_universal--transparent');
    } else {
        header.classList.add('header_universal--transparent');
    }
});


// Shop section
const productButtons = document.querySelectorAll('.products_button');

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        dropdownProducts(button);
    });
});

function dropdownProducts(button) {
    const productSection = button.nextElementSibling;
    const isShowing = productSection.classList.contains("show_products");

    if (!isShowing) {
        productSection.style.animation = "show_section 1.6s ease-in-out forwards";
    }

    productSection.classList.toggle("show_products");

    button.classList.toggle("wide", productSection.classList.contains("show_products"));

    if (isShowing) {
        productSection.style.animation = "hide_section 1.6s ease-in-out forwards";
        productSection.addEventListener("animationend", () => {
            productSection.style.animation = "none";
        }, {
            once: true
        });
    }
}