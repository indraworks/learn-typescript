function add( n1:number,n2:number,result:boolean,prhase:string) {
  let hasil;
  /*
   kalau dgn js-script kita akan buat funtion sprti dibawah ini
   if(typeof n1 =='number' || typeof n2 == 'number) {
     return n1 +n2;
   } else {
     throw new Error('incorect input!')
   }
  */
  // if(typeof n1 =='number' || typeof n2 == 'number') {
  //    return n1 +n2;
  //  } else {
  //    throw new Error('incorect input!')
  //  }
   if (result == true) {
       hasil = n1 +n2; 
    console.log(prhase + hasil)
   }else {
     throw new Error('please chek type data!')
   }
}

const angka1 = 13.5;
const angka2 = 34.7;
const showResult = true;
const myphrase = 'hasil penjumlahan =';
const result = add(angka1,angka2,showResult,myphrase);
console.log('hasil add =',result);

/*
jdi intinya adalah bahwa typescript adalah utk 
mngupayakan agar stiap variable ada punya type datanya
dan harus benar jika pnjumahan operasi aritmetika 
maka harus dgn number klo tidak maka akan error
enaknya adalah bahwa program kita sudah error jika 
salah awaktu dicompile dgn dmikian lbih cpat dlm pnanganna eror
dan mgnhindari banyak error yg akan daang /lebih complex lagi!
intinya kalau adalah salah type mis kit aisi n2 = 'her' mka akan kluar error 
saat dicimpoile dgn ts-node app.ts atau dgn tsc app.ts
app.ts:20:27 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

20 const result = add(angka1,angka2);
                             ~~~~~~


Found 1 error.

*/

/*
Beda JS dgn Type-Script :
Type-Script: hasil error kluar pada saat kita lakukan pada deveolpment
            blum di run time ,error lbih mudah ditmukan di debug 
            krn dia stike thd typedata!
js : hasil error itu dianggp bukan error trkadang krn dia dymanic  gak strike
     utk typedata yg ada ,eror trlihat stlah produksi lacaknya panjang

*/
/*SEMUA NAME TYPE_DATA TYPE SCRPT TERULIS huruf kecil lower-case
contoh number bukan Number ,string bukan String dst as sbb:
In TypeScript, you work with types like string or number.

Important: It is string and number (etc.), NOT String, Number etc.

The core primitive types in TypeScript are all lowercase!

*/