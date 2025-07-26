// Menu Button Js
let navbar = document.querySelector(".nav-container");
let menubar = document.querySelector("#menubar");
menubar.onclick = () => {
  navbar.classList.toggle("active");
};


// Scroll Animation JS
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry)
    if (entry.isIntersecting) observer.unobserve(entry.target);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//Blob JS

const blob = document.querySelector(".blob");

document.addEventListener("mousemove", (ee) => {
  let x = ee.pageX;
  let y = ee.pageY;

  blob.style.top = y + "px";
  blob.style.left = x + "px";
});

// Parallax JS
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((eloop) => {
    let speedx = eloop.dataset.speedx;
    let speedy = eloop.dataset.speedy;
    eloop.style.transform = `translateX(calc(-50% + ${
      xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});

// Background Pattern JS

const menu = document.getElementById("menu");
const menu_item = document.getElementsByClassName("menu-item");
Array.from(menu_item).forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
  };
});
