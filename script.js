function changeItem(hoverClass, hoverText, color, modalClass, serviceClass) {
  document.querySelector(".intro").style.background = "none";
  document.querySelector(".container").classList.add(hoverClass);
  document.querySelector(".header").style.color = "rgba(255, 255, 255, 0.7)";
  document.querySelector(".fa-location-dot").style.color = "white";
  document.querySelector(".fa-phone-flip").style.color = "white";
  document.querySelector(".heading").style.color = "white";
  document
    .querySelector(".heading__first")
    .insertAdjacentHTML(
      "afterend",
      `<p class='heading__first_hover'>${hoverText}</p>`
    );
  document.querySelector(".heading__first").style.display = "none";
  document.querySelector(".logo-black").style.display = "none";
  document.querySelector(".logo-white").style.display = "block";
  document.querySelector(".btn-first").style.color = "white";
  document.querySelector(".btn-first button").style.borderColor = "white";
  document.querySelector(".btn-line").style.borderColor = "white";
  document.querySelector(modalClass).style.display = "flex";
  document.querySelector(modalClass).style.background = color;
  document.querySelector(serviceClass).style.color = color;
}

function rechangeItem(hoverClass, modalClass, serviceClass) {
  document.querySelector(".intro").style.background = "";
  document.querySelector(".container").classList.remove(hoverClass);
  document.querySelector(".header").style.color = "";
  document.querySelector(".fa-location-dot").style.color = "";
  document.querySelector(".fa-phone-flip").style.color = "";
  document.querySelector(".heading").style.color = "";
  document.querySelector(".heading__first_hover").remove();
  document.querySelector(".heading__first").style.display = "block";
  document.querySelector(".logo-black").style.display = "block";
  document.querySelector(".logo-white").style.display = "none";
  document.querySelector(".btn-first").style.color = "";
  document.querySelector(".btn-first button").style.borderColor = "";
  document.querySelector(".btn-line").style.borderColor = "";
  document.querySelector(modalClass).style.display = "none";
  document.querySelector(serviceClass).style.color = "white";
}
