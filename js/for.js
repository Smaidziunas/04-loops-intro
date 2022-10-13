'use strict';
console.log('for.js');

// =============== PIRMOS UZDUOTYS

for(let i = 0; i <=10; i++) {
  // console.log('as esu for');
}

for(let i = 14; i < 35; i++) {
  // console.log('i ===', i);
}

for(let i = 0; i < 100; i = i + 3) {
  // console.log('i ===', i);
}


for(let i = 50; i >=24; i = i - 1) {
  // console.log('i ===', i);
}


// ====================== 4. atspausdinti 15 random verciu nuo 1 iki 10

              //  Function for random number:
              // function randomIntFromInterval(min, max) { // min and max included 
              //   return Math.floor(Math.random() * (max - min + 1) + min)
              // }

              // let rndInt = randomIntFromInterval(1, 10)
              // console.log(rndInt)

                // console.log('rndInt ===', rndInt);


                // for (let i = 0; i < 15; i ++ ) {
                //   function randomIntFromInterval(min, max) { // min and max included 
                //     return Math.floor(Math.random() * (max - min + 1) + min)
                //   }
                  
                //   let rndInt = randomIntFromInterval(1, 10)
                  // console.log(i, 'random', rndInt)
                // }



// ==================== 4.1 atspausdinti verciu vidurki

let totals = 0;
let average = totals / 15

              for (let i = 0; i < 15; i ++ ) {

                // function randomIntFromInterval(min, max) { // min and max included 
                //   return Math.floor(Math.random() * (max - min + 1) + min)
                // }
                // let rndInt = randomIntFromInterval(1, 10)

                // totals = totals + rndInt;

                // ======Jeigu norim, kad rezultatas butu viduje=====
                // if(i === 14) {
                //   console.log('average ===', totals/15);
                //   console.log('total ===', totals)
                // }
                
              }

              // console.log('average ===', totals/15);
              // console.log('total ===', totals)



// 5. ================ atspausdinti nuo 47 iki 68 visus lyginius skaicius. Isspausdina Lyiginis jeigu lyginis, Nelyginis, jeigu ne.

        for (let i = 47; i <68; i ++ ) {

          if(i % 2 === 0) {
            // console.log('i=== Lyginis', i);
          } else {
            // console.log('i=== Nelyginis', i);
          }

        }


// 6. =============== sudeti visus skaicius nuo 0 iki 10, atspusdinti rezultata

// let suma = 0;

//             for (let i = 0; i <10; i ++ ) {

//               suma = i + 1;
//               // console.log('suma ===', suma);

//               if(i === 9){
//                 console.log('suma ===', suma);
//               }

//             }



// 7. su while loop. parasyti cikla kuris meta kauliukus ir galimos reiksmes yra nuo 2 iki 12.




// ================  7.1 kiek kartu kompiuteris mes kauliukus kol ismes 12?


                // function randomIntFromInterval(min, max) { // min and max included 
                //   return Math.floor(Math.random() * (max - min + 1) + min)
                // }
                // let metimas = randomIntFromInterval(1, 6);
                // let metimas2 = randomIntFromInterval(1, 6);


// let metimuSk = 0;
// let sum = 0;
// let metimas = 0;
// let metimas2 =2;

//   for(let i = 0; sum != 12; i++){
    
//     function randomIntFromInterval(min, max) { // min and max included 
//       return Math.floor(Math.random() * (max - min + 1) + min)
//     }
//      metimas = randomIntFromInterval(1, 6);
//      metimas2 = randomIntFromInterval(1, 6);

//     let suma = metimas + metimas;

//     console.log('suma====', suma);

//     if(suma === 12) {
//       sum = 12;
//       console.log('metimu Skaicius', +metimuSk + 1);
//       break;
//     } else {
//       metimuSk = metimuSk + 1;
//     }

//   }




// 7.2 kiek kartu kompiuteris mes kauliukus kol daugiau nei 6?


// let metimuSk = 0;
// let sum = 0;
// let metimas = 0;
// let metimas2 =2;

  for(let i = 0; sum != 6; i++){
    
    // function randomIntFromInterval(min, max) { // min and max included 
    //   return Math.floor(Math.random() * (max - min + 1) + min)
    // }
    //  metimas = randomIntFromInterval(1, 6);
    //  metimas2 = randomIntFromInterval(1, 6);

    let suma = metimas + metimas;

    // console.log('suma====', suma);

    if(suma > 6) {
      sum = 6;
      console.log('metimu Skaicius', +metimuSk + 1);
      break;
    } else {
      metimuSk = metimuSk + 1;
    }

  }