"use strict";
const time = document.querySelector('.time');
const refDate = new Date('11-21-2027');

time.innerHTML = `Starting at 21-12-2022 
 ${Math.abs(Math.floor((Date.now() - refDate) / (1000 * 60 * 60 * 24)))} days`;
