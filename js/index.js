const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

let documentTitle = document.title;

const menuLinks = document.querySelectorAll(".menu-list__link");

menuLinks.forEach((link) => {
  if(link.textContent == documentTitle) {
    link.classList.add('active');
    link.addEventListener('click', (e)=> {
      e.preventDefault();
    })
  } else {
    link.classList.remove("active");
  }
})

const footerLinks = document.querySelectorAll(".footer__table-link");

footerLinks.forEach((elem) => {

  elem.addEventListener('click', () => {
    elem.classList.add("visited");
  })
  
})

const Contactbtn = document.querySelectorAll(".btn-contact");
const PopUpInner = document.querySelector(".pop-up-inner");
const PopUp = document.querySelector(".pop-up");
const PopUpBtn = document.querySelector(".pop-up__btn");

function closeModal() {
    PopUp.classList.remove("active");
    PopUpInner.classList.remove("active");
    body.classList.remove("active")
}

function openModal() {
  PopUp.classList.add("active");
  PopUpInner.classList.add("active");
  body.classList.add("active");
}

PopUpBtn.addEventListener('click', () => {
  closeModal();
})

Contactbtn.forEach((elem) => {
  elem.addEventListener('click', () => {
      openModal();
  })
})

PopUpInner.addEventListener("click", (e) => {
  if (!e.target.closest(".pop-up") ){
      closeModal();
    }
});