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
AllProductsCont.rightImage = document.getElementById('middle-product-image');
AllProductsCont.rightImage = document.getElementById('right-product-image');


AllProductsCont.leftTitle = document.getElementById('left-product-title');
AllProductsCont.rightTitle = document.getElementById('middle-product-title');
AllProductsCont.leftTitle = document.getElementById('right-product-title');



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



}  // Ending render Products function 


function getRandomProduct() {
    var index = Math.floor(Math.random() * AllProductsCont.all.length);
    console.log('index', index);
    return AllProductsCont.all[index];
}  // Ending random product function 