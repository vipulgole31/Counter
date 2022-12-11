"use strict";
const time = document.querySelector('.time');
const refDate = new Date('08-12-2027');

time.innerHTML = `Starting at 08-12-2022 
 ${Math.abs(Math.floor((Date.now() - refDate) / (1000 * 60 * 60 * 24)))} days`;
