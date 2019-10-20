'use strict'

function AllProductsCont(name, src) {
    this.name = name;
    this.src = src;
    this.clickCtr = 0;
    this.shownCtr = 0;
    AllProductsCont.all.push(this);
}

AllProductsCont.roundCtr = 0;
AllProductsCont.roundLimit = 25;
AllProductsCont.all = [];

AllProductsCont.leftObject = null;
AllProductsCont.middleObject = null;
AllProductsCont.rightObject = null;


//console.log(' aaaalllllllll ' , AllProductsCont.all);


AllProductsCont.container = document.getElementById('products-container');

AllProductsCont.leftImage = document.getElementById('left-product-image');
AllProductsCont.middleImage = document.getElementById('middle-product-image');
AllProductsCont.rightImage = document.getElementById('right-product-image');


AllProductsCont.leftTitle = document.getElementById('left-product-title');
AllProductsCont.middleTitle = document.getElementById('middle-product-title');
AllProductsCont.rightTitle = document.getElementById('right-product-title');



new AllProductsCont('bag', 'img/bag.jpg');
new AllProductsCont('banana', 'img/banana.jpg');
new AllProductsCont('bathroom', 'img/bathroom.jpg');
new AllProductsCont('boots', 'img/boots.jpg');
new AllProductsCont('breakfast', 'img/breakfast.jpg');
new AllProductsCont('bubblegum', 'img/bubblegum.jpg');
new AllProductsCont('chair', 'img/chair.jpg');
new AllProductsCont('cthulhu', 'img/cthulhu.jpg');
new AllProductsCont('dog-duck', 'img/dog-duck.jpg');
new AllProductsCont('dragon', 'img/dragon.jpg');
new AllProductsCont('pen', 'img/pen.jpg');
new AllProductsCont('pet-sweep', 'img/pet-sweep.jpg');
new AllProductsCont('scissors', 'img/scissors.jpg');
new AllProductsCont('shark', 'img/shark.jpg');
new AllProductsCont('sweep', 'img/sweep.png');
new AllProductsCont('tauntaun', 'img/tauntaun.jpg');
new AllProductsCont('unicorn', 'img/unicorn.jpg');
new AllProductsCont('usb', 'img/usb.gif');
new AllProductsCont('water-can', 'img/water-can.jpg');
new AllProductsCont('wine-glass', 'img/wine-glass.jpg');



function renderNewProducts() {

    var forbidden = [AllProductsCont.leftObject, AllProductsCont.middleObject, AllProductsCont.rightObject];

    do {

        AllProductsCont.leftObject = getRandomGoat();
    
      } while (forbidden.includes(AllProductsCont.leftObject))



}  // Ending render Products function 


AllProductsCont.leftObject.shownCtr++;                                              /// Increment The Counter 
AllProductsCont.middleObject.shownCtr++;
AllProductsCont.rightObject.shownCtr++;


var leftProductImageElement = AllProductsCont.leftImage;
var middleProductImageElement = AllProductsCont.middleImage;
var rightProductImageElement = AllProductsCont.rightImage;


leftProductImageElement.setAttribute('src', AllProductsCont.leftObject.src);            // Left Product 
leftProductImageElement.setAttribute('alt', AllProductsCont.leftObject.name);

middleProductImageElement.setAttribute('src', AllProductsCont.middleObject.src);        // Middle Product 
middleProductImageElement.setAttribute('alt', AllProductsCont.middleObject.name);

rightProductImageElement.setAttribute('src', AllProductsCont.rightObject.src);          // Right Product 
rightProductImageElement.setAttribute('alt', AllProductsCont.rightObject.name);


AllProductsCont.leftTitle.textContent = AllProductsCont.leftObject.name;
AllProductsCont.leftTitle.textContent = AllProductsCont.leftObject.name
AllProductsCont.rightTitle.textContent = AllProductsCont.rightObject.name;


function getRandomProduct() {
    var index = Math.floor(Math.random() * AllProductsCont.all.length);
    console.log('index', index);
    return AllProductsCont.all[index];
}  // Ending random product function 



function updateTotals() {

    var tableBody = document.getElementById('productsTable');

    tableBody.innerHTML = '';

    for (var i = 0; i < AllProductsCont.all.length; i++) {
        var newProduct = AllProductsCont.all[i];
        var row = addElement('tr', tableBody);
        addElement('td', row, newProduct.title);
        addElement('td', row, '' + newProduct.clickCtr);
        addElement('td', row, '' + newProduct.shownCtr);
    }
} // Ending Total Updates product function 




function addElement(tag, container, text) {

    var element = document.createElement(tag);
    container.appendChild(element);
    if (text) {
        element.textContent = text;
    }
    return element;

} // Ending Add Element  function 



function clickHandler(event) {

    var clickedId = event.target.id;
    var productChlicked;
  
    if(clickedId === 'left-product-image') {
      productChlicked = AllProductsCont.leftObject;
    } else if (clickedId === 'middle-product-image') {
      productChlicked = AllProductsCont.middleObject;
    } if (clickedId === 'right-product-image'){
      productChlicked = AllProductsCont.rightObject;  

    }else {
      console.log('Um, what was clicked on???', clickedId);
    }
  
    if(productChlicked) {
      productChlicked.clickCtr++;
      AllProductsCont.roundCtr++;
  
      updateTotals();
  
      if(AllProductsCont.roundCtr === AllProductsCont.roundLimit) {
  
        alert('No more clicking for you!');
  
        AllProductsCont.container.removeEventListener('click', clickHandler);

      } else {
  
        renderNewProducts();
      } // Ending last else to render the new product 
    } // Ending if statement condition if clicked 
  } // Ending Click Handler function 

    AllProductsCont.container.addEventListener('click', clickHandler);

    updateTotals();

    renderNewProducts();