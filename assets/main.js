// Smartphone Data
var smartphoneData = [
  {name: 'Apple iPhone 14 Pro Max 256GB Meia-noite 6,1” 12MP', price: "R$6.250,00", img: "https://cdn.awsli.com.br/2500x2500/761/761012/produto/218353870/editada--5--rcs401z0ta.png"},
  {name: 'Apple iPhone 14 128GB Meia-noite 6,1” 12MP - iOS 5G', price: "R$4.550,00 no pix", img: "https://www.atacadogames.com/imagem/smartphones/celular-apple-iphone-14-a2884-ch-256gb-5g-tela-6-1-camera-dupla-branco-sim-fisico/2/184464.jpg?pfdrid_c=true"},
  {name: 'Apple iPhone 13 128GB Estelar Tela 6,1” 12MP', price: "R$4.090,00", img: "https://www.atacadogames.com/imagem/smartphones/celular-apple-iphone-13-pro-256gb-5g-tela-6-1-cameras-de-12mp-12mp-12mp-e-12mp-verde-cpo/2/170624.jpg?pfdrid_c=true"},
  {name: 'iPhone 11 Apple 128GB Branco 6,1” 12MP iOS', price: "R$3.199,00", img: "https://www.atacadogames.com/imagem/smartphones/celular-apple-iphone-11-a2221-lz-64gb-4g-lte-tela-6-1-cameras-de-12mp-12mp-e-12mp-preto-caixa-slim/2/137191.jpg?pfdrid_c=true"}
];

// Smartphone Data System
var item = document.querySelectorAll('[data-id]');

item.forEach(function(item) {
  var dataId = item.getAttribute('data-id');
  var smartphone = smartphoneData[dataId];
  
  // Verifique se o celular foi encontrado na array
  if (smartphone) {
    var ItemName = item.querySelector('.ItemName');
    var ItemPrice = item.querySelector('.ItemPrice');
    var ItemDescription = item.querySelector('.ItemDescription');
    var ItemPriceC = item.querySelector('.ItemPriceC');
    var smartphoneImg = item.querySelector('#smartphoneImg')
    
    ItemName.innerHTML = smartphone.name
    ItemPrice.innerHTML = smartphone.price
    smartphoneImg.src = smartphone.img
    
    console.log(smartphoneData);
  }
});

// Search
const searchInput = document.querySelector('#searchText')
const smartphones = document.querySelectorAll('.pl-container #pl_c_box')

searchInput.addEventListener("input", searchFunction)

function searchFunction(){
  if (searchInput.value != '') {
        for (let item of smartphones) {
          let title = item.querySelector('.ItemName')
          title = title.textContent.toLowerCase()
          let filterText = searchInput.value.toLowerCase()
          
          if (!title.includes(filterText)) {
            item.style.display = "none"
          } else {
            item.style.display = "flex"
          }
        }
  } else {
    for (let item of smartphones) {
      item.style.display = "flex"
    }
  };
};

searchInput.addEventListener("input", searchFunction)