/*
apa yang disebut function signature
jadi gini ini adalah type cara meng-init sbuah function 
dgn paramteter memiliki masing2 jenis type datanya masing2 
dan nanti keluaran atau kembalian dari function tersebut 
apakah void atau dikembalikan dalam bentuk number,string,boolean 
atau object
nah setelahnya bikin signamature barulah di assign valuenya '
nah nama parameter boleh brubah yg penting urutan dan type data nya
harus nurut sama signature atau initial awal

*/

//asal mula kita boleh nulis type data dari sbuah function sbb

let myFunc: Function;

 //cara lain init function terdiri dari 3 biasanya
//example signature a
//cara pertama init sbuah func 
//example 1 init tapi hasil functiom gak di kembalikan stlah tanda => void berarti tidak 
//ada nilai return 
 let myexampleFunc:(a:number|string,b:string|number,c:string)=>void;
    
//stlah buat signaturenya kita assign
myexampleFunc =(kalimat1:number|string,kalimat2:string|number,kalimat3:string)=>{
  console.log(` hello ini ${kalimat1} dan ini kalimat2:${kalimat2} dan ini ${kalimat3} `)
}
 //kita panggil functionnya
 //jadi sekali lagi harus ikut dari signaturenya gak bisa 
 //ganti type data atau ubah kktika asign functionnya
 myexampleFunc('hi indra',30,'puasa senin')  
 myexampleFunc(3,4,'sore2 hitung')

// example 2
 //example yg kedua adalah hasil output dari function adalah return
 // berupa number sbb:

 let calc:(a:number,b:number,c:string)=>number; //kit auda sign dng return sbuah number

 //kita asign value berdasarkan tipe datanya
 calc=(angka1:number,angka2:number,tulisan:string)=> {
       if(tulisan === 'add') {
         return angka1+angka2;
       } else {
         return angka1-angka2;
       }
  
 } 
//kita panggil functionnya example 2
  let myval = calc(1,3,'add');
  console.log('hasil pemjumlahan = ',myval);
  myval =calc(4,8,"kurang");
  console.log('hasil pengurangan = ',myval);



// example 3
//example adalah function sign utk object
//ini sama pengembalian bisa berupa void (tanpa kembalian) 
//atau berupa kembalian object/number/string 

//signatur atau inisial function berupa parameter object
//misal hasil return brupa object
let logdetails:(obj:{name:string,activity:string,badge:number})=>object;

//kita assing value atau nilaiberdasarkan type datanya
logdetails =(teknisi:{name:string,activity:string,badge:number})=> {
  return teknisi;
}

//kita panggil utk digunakan function teknisi

let siswa = logdetails({name:'syakinah',activity:'jaga rel kereta api',badge:4});
console.log('log detail syakinah =',siswa);



//kita bisa singkat cara penulisan dgn mmbuat type data bagi object
//aliasnya sbb; jangan lupa pake =
type myteknisi = {name:string,activity:string,badge:number}; 

//kita tulis lagi :
logdetails =(teknisi:myteknisi) => {
  return teknisi
}
let jeruk ={name:'purwati',activity:'makan',badge:3}
let hasil = logdetails(jeruk);
console.log('hasil =',hasil)