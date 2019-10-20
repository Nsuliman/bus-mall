'use strict'

function AllProductsCont (name, src) {
    this.name = name;
    this.src = src;
    this.clickCtr = 0;
    this.shownCtr = 0;
    Goat.all.push(this);
  }

AllProductsCont.roundCtr = 0;
AllProductsCont.roundLimit = 25;
Goat.all = [];

