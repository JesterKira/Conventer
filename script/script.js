const Body = document.querySelector(".body");
const BurgerMenu = document.querySelector(".burger");
const NavigationMenu = document.querySelector(".navigation__menu");

BurgerMenu.addEventListener("click", function () {
    BurgerMenu.classList.toggle('active');
    NavigationMenu.classList.toggle('active');
    Body.classList.toggle('lock');
})