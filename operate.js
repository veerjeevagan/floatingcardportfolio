

const hamburger = document.querySelector(".menu-btn");
const allBars = document.querySelectorAll(".menu-btn div");
const leftNavWrap = document.querySelector(".nav-left-wrapper");


hamburger.addEventListener('click' , () =>{
  for(bar of allBars)
  {
    bar.classList.toggle("change");
  }

  hamburger.classList.toggle("change");
  leftNavWrap.classList.toggle("nav-left-wrapper-appear");

});

