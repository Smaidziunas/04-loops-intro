'use strict';
console.log('loopToHtml.js');

// ========== pirmas example WHILE ==========

// nusitaikyti i saraso el 
// const listEl = document.getElementById('list')

// let htmlString = '';
// let i = 1
// while (i < 110) {
//   // ciklo body
//   // console.log(`<li>item ${i}</li>`);
//   htmlString = htmlString + `<li>item ${i}</li>\n`
//   // step
//   // i = i + 1
//   // i += 1;
//   i++;
// }

// console.log('htmlString ===', htmlString);
// listEl.innerHTML = htmlString



// ========== ANTRAS Example FOR; idedam li cikla i Html;


const listEl = document.getElementById('list');
// prisitraukiam dokumenta

let listHTML = '';
// tuscias variable; 

for (let i= 4; i < 7; i++) {
  console.log(`<li>item ${i}</li>`);

  listHTML = listHTML + `<li>${i}</li>\n`;
}

listEl.innerHTML = listHTML;
