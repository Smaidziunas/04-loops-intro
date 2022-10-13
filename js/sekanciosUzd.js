'use strict';
console.log('sekanciosUzd.js');

// 8. =========== Suskaiciuoti kiek skaiciau 4 kartotiniu nuo 0 iki 160

let suma = 0;

for (let i = 1; i <= 160; i = i + 1){
    if(i % 4 === 0) {
  suma++;
  // console.log('i->',i, 'suma===',suma);
}
}
// console.log(suma);



// 9. ============ Surasyti i kintamaji myString visus skaicius nuo -10 iki 35 atskirtus kableliu ir tarpu pvz, -10, -9, -8, ....

let myString = "";

for(let i = -10; i <= 35; i++) {
  if(i === 35) {
    myString = myString + i + ".";
  } else {
  myString = myString + i + ", ";
}
}
// console.log('myString ===', myString);


// 10. ============ Sudeti skaicius nuo 10 iki 20.

      // 1.  sudedant atspausdinti kievieno zingsnio informacija pvz "Ciklo numeris 1, prie 0 pridedu 10 ir gaunu 10" pvz "Ciklo numeris 2, prie 10 pridedu 11 ir gaunu 21" pvz "Ciklo numeris 3, prie 21 pridedu 12 ir gaunu 33" ....
      // 2. atspausdinti galutini rezultata


let prieEl = 0;

for (let i = 10; i < 20; i++) {

 let prideduEl = i;
 let gaunuEl = prieEl + i;
 
 let zinute = `'Ciklo numeris' ${i-9} 'prie' ${prieEl} 'pridedu' ${i} 'ir gaunu' ${gaunuEl}`;


  prieEl = gaunuEl;

      //  console.log('zinute ===', zinute);

  if(i === 19) {
    //  console.log('zinute ===', zinute);
    console.log('gaunuEl ===', gaunuEl);
  }

 
}

;
