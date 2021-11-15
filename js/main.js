const menuButton = document.getElementById("header-sp__nav__btn");
const spNavi = document.getElementById("header-sp__nav");
console.log(menuButton.className);
menuButton.addEventListener("click", function () {
  if (menuButton.className == "") {
    menuButton.classList.add("open");
    spNavi.classList.add("open");
  } else if(menuButton.className == "open") {
    menuButton.classList.remove("open");
    menuButton.classList.add("close");
    spNavi.classList.remove("open");
    spNavi.classList.add("close");
  } else {
    menuButton.classList.remove("close");
    menuButton.classList.add("open");
    spNavi.classList.remove("close");
    spNavi.classList.add("open");
  }
});