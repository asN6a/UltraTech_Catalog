const storageBtn = document.querySelector('.storageBtn');
const sBtn1 = document.querySelector('#sBtn1');
const sBtn2 = document.querySelector('#sBtn2');
var priceText = document.querySelector("#priceText");
var priceCtext = document.querySelector('.priceCtext');
var smartphonePrice = document.querySelector('.smartphone-price');


sBtn1.addEventListener("click", function() {
  if (storageBtn === sBtn1) {
    priceText.innerHTML = "R$6.250,00 à vista"
    priceCtext.innerHTML = "6X R$ 1.132,00 ou 12X R$ 595,00"
    sBtn1.style.background = 'var(--main-color-0)'
    sBtn2.style.background = 'none'
    smartphonePrice.style.display = 'block'
  } 
});

sBtn2.addEventListener("click", function() {
  if (storageBtn === sBtn1) {
    priceText.innerHTML = "R$6.749,00 à vista"
    priceCtext.innerHTML = "6X R$ 1.222,00 ou 12X R$ 643,00"
    sBtn2.style.background = 'var(--main-color-0)'
    sBtn1.style.background = 'none'
  }
});