"use strict";
const cartIcon = document.querySelectorAll(".cart-icon");
const cartInfo = document.querySelector(".cart-info-box");
const images = document.querySelectorAll(".small");
const mainImage = document.querySelector(".main-image");
const addBtn = document.querySelector(".icon-plus");
const subtractBtn = document.querySelector(".icon-minus");
const addToCartBtn = document.querySelector(".add-to-cart");
const inputValue = document.querySelector(".number-selected");
const sneakersBought = document.querySelector("#number-selected");
const price = document.querySelector(".price");
const emptyCart = document.querySelector(".empty-cart-info");
const filledCart = document.querySelector(".cart-checkout-container");
const errorMessage = document.querySelector(".error");
const clearCartBtn = document.querySelector(".icon-delete");

// ////////////functions
function clearCart() {
  filledCart.classList.add("display");
  emptyCart.classList.remove("display");
  document.querySelector(".items-bought").classList.add("display");
  document.querySelector(".items-bought").innerHTML = 0;
}
function closeOverlay() {
  document.querySelector(".overlay").classList.add("display");
  document.querySelector(".light-bulb").style.display = "none";
}
function openOverlay() {
  document.querySelector(".overlay").classList.remove("display");
  document.querySelector(".light-bulb").style.display = "flex";
}
function Subtract() {
  let number = Number(inputValue.innerHTML);
  if (number > 0) {
    inputValue.innerHTML = number - 1;
  } else if ((number = 0)) {
    number = 0;
  }
}
function add() {
  let number = Number(inputValue.innerHTML);
  inputValue.innerHTML = number + 1;
}
function addToCart() {
  if (inputValue.innerHTML > 0) {
    document.querySelector(".items-bought").innerHTML = inputValue.innerHTML;
    document.querySelector(".items-bought").classList.remove("display");
    sneakersBought.innerHTML = Number(inputValue.innerHTML);
    price.innerHTML = Number(inputValue.innerHTML) * 125;
    filledCart.classList.remove("display");
    emptyCart.classList.add("display");
    inputValue.innerHTML = 0;
  } else {
    document.querySelector(".items-bought").classList.add("display");
    document.querySelector(".items-bought").innerHTML = 0;
    filledCart.classList.add("display");
    emptyCart.classList.remove("display");
    errorMessage.classList.remove("display");
    setTimeout(function () {
      errorMessage.classList.add("display");
    }, 2000);
  }
}

// ///////////////buttons/////////////
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", Subtract);
clearCartBtn.addEventListener("click", clearCart);
document.querySelector(".checkout-btn").addEventListener("click", function () {
  window.location.reload();
});

////////writing functions////////////////////////////
for (let i = 0; i < cartIcon.length; i++) {
  const element = cartIcon[i];
  element.addEventListener("click", function () {
    cartInfo.classList.toggle("display");
  });
}

addToCartBtn.addEventListener("click", addToCart);

//  ////////changing the main image function
for (let i = 0; i < images.length; i++) {
  const element = images[i];
  element.addEventListener("click", function () {
    images.forEach((image) => (image.style.borderColor = "#fff"));
    element.style.borderColor = "#fff";
    element.style.borderColor = "#ff7d1a";
    // trying to use thus block of code to set an opacity for
    // the clicked image. However, it interferes with the hover state
    //  opacity value

    // images.forEach((image) => (image.style.opacity = 1));
    // element.style.opacity = 1;
    // element.style.opacity = 0.5;

    if (element.classList.contains("image-0")) {
      mainImage.src = "images/image-product-1.jpg";
    } else if (element.classList.contains("image-1")) {
      mainImage.src = "images/image-product-2.jpg";
    } else if (element.classList.contains("image-2")) {
      mainImage.src = "images/image-product-3.jpg";
    } else if (element.classList.contains("image-3")) {
      mainImage.src = "images/image-product-4.jpg";
    }
  });
}
// light bulb functionalities////////////////////////////////
// //////////////////////////////////////////////////////////
// ////activating the lightbox feature
mainImage.addEventListener("click", openOverlay);

/////////////////////////////////////////////
const overlayImages = document.querySelectorAll(".lightbulb-small"),
  closeBtn = document.querySelector(".close"),
  mainOverlayImage = document.querySelector(".main-overlay");

for (let i = 0; i < overlayImages.length; i++) {
  const element = overlayImages[i];
  element.addEventListener("click", function () {
    overlayImages.forEach((image) => (image.style.borderColor = " #0000001a"));
    element.style.borderColor = " #0000001a";
    element.style.borderColor = "#ff7d1a";

    if (element.classList.contains("image-0")) {
      mainOverlayImage.src = "images/image-product-1.jpg";
    } else if (element.classList.contains("image-1")) {
      mainOverlayImage.src = "images/image-product-2.jpg";
    } else if (element.classList.contains("image-2")) {
      mainOverlayImage.src = "images/image-product-3.jpg";
    } else if (element.classList.contains("image-3")) {
      mainOverlayImage.src = "images/image-product-4.jpg";
    }
  });
}
closeBtn.addEventListener("click", closeOverlay);

// //////////////testing the next and prev buttons//////////////
// let slideIndex = 1;
// showSlides(slideIndex);

// // //next/previous buttons controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// function currentSlide(n) {
//   showSlides((showSlides = n));
// }
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName(".light-main-image");
//   let thumbnails = document.getElementsByClassName(".lightbulb-small");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     const element = slides[i];
//     element.style.display = "none";
//   }
//   for (let i = 0; i < thumbnails.length; i++) {
//     const element = thumbnails[i];
//     element.className= element.className.replace('active','')
//   }
//   slides[slideIndex-1].style.display='block';
//   thumbnails[slideIndex-1].className=
// }
