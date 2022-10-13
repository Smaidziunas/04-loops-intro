'use strict';
console.log('continue.js');

// =================
            // sukuriam cikla kuris tesiasi 20kartu
            // nespausdinti skaiciau 17


        // for (let i = 1; i < 20; i++) {
          
        //   if(i === 17) {
        //     continue;
        //   }

        //   console.log('i ===', i);
        // }


// ==================
            // nespausdinti 4, 15, 17


for (let i = 1; i < 20; i++) {

  if(i === 4 || i === 15 || i === 17) {
    // nutraukia esama cikla ir pereina prie step dalies;
    // !continue atveju nutraukiame esama interacija, o BREAK atveju nutraukiame VISA SALYGA;!
    continue;
  }

  console.log('i ===', i);
}