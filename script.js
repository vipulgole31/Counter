"use strict";
const time = document.querySelector('.time');
const refDate = new Date('08-12-2027');
time.textContent = Math.abs(Math.floor((Date.now() - refDate)/(1000*60*60*24)));