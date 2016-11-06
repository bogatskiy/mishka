var toggle = document.querySelector(".main-nav__toggle");
var toggleItem = document.querySelector(".main-nav__toggle-item")
var toggleItemTop = document.querySelector(".main-nav__toggle-item:nth-of-type(1)");
var toggleItemMid = document.querySelector(".main-nav__toggle-item:nth-of-type(2)");
var toggleItemBot = document.querySelector(".main-nav__toggle-item:nth-of-type(3)");
var nav = document.querySelector(".main-nav");

nav.classList.remove('no-js');
toggleItemTop.classList.remove("main-nav__toggle-item--nojs-top");
toggleItemMid.classList.remove("main-nav__toggle-item--nojs-midle");
toggleItemBot.classList.remove("main-nav__toggle-item--nojs-bottom");


toggle.addEventListener("click", function() {
  toggleItemTop.classList.toggle("main-nav__toggle-item--top-close");
  toggleItemMid.classList.toggle("main-nav__toggle-item--midle-close");
  toggleItemBot.classList.toggle("main-nav__toggle-item--bottom-close");
  nav.classList.toggle("main-nav--close")
})
