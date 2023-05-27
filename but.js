const btn = document.querySelector(".button-open__button");

btn.addEventListener("click", btnClick);

const content = document.querySelector(".links");

const image = document.querySelector(".button-open__image");

function btnClick() { 
  
  content.classList.toggle('links--invisible');
  
  if (content.classList.contains("links--invisible")) {
    btn.textContent = "Показать все";
    image.src = "images/icon.svg";
  } else {
    btn.textContent = "Скрыть";
    image.src = "images/icon2.svg";
  };
}