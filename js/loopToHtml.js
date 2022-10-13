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



// ========== ANTRAS Example FOR; idedam li cikla i UL, (nededam i Html);


// const listEl = document.getElementById('list');
// prisitraukiam dokumenta

let listUl = '<ul>';
// tuscias variable; 

for (let i= 4; i < 7; i++) {
  let liEl = `<li>${i}</li>`;
  // console.log(liEl);

  listUl = listUl + liEl + `\n`;
} listUl = listUl + '</ul>';
console.log(listUl);

// listEl.innerHTML = listHTML;
