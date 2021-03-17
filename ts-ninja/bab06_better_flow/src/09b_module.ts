/*
di ts saat ini sudah suport es6 dan > ...es next
utk itu kit abisa memecah program kita dalam module2
nah cara edit dulu tsconfig.ts  replace es5 -> e6
                                        commonjs jadi es2015
di public/index.html tambahkan pada script type="module"
setelahnya buat dir classes/ buat file Invoice.ts
nah kemudian export module tsb sprti kita di js
nah di sandbox.ts /atau saaat ini kita gunakan module.ts
 import nah yg dimport jgn lupa adalah file js
nya karena di baca oleh browser di file index.html
import {Invoice} from '../class/invoice.js' //ingat js bukan ts

nah nnnti kita kalau udah slsai module ini kita buat
bundle pake webpack skrgn kita lanjut interface
stlah ini slesai smua diulang lagi buat book.js pake oop js
kmduian pake typescript utk latihan 

*/


import {Invoice} from './class/Invoice.js';




//kita instansiate /buat object invoice
let invoice01 = new Invoice('indra','keperluan pengembanga softare & jaringan ',300)
let invoice02 = new Invoice('hendy','biaya training dan pelatihan ',400)

//tampilkan di console dengan panggil method
invoice01.format();
invoice02.format();
//nah kita bisa mmbuat atau simpan di dalam array 
//nah tetapi harus ikut dari format object yg disimpan diarray tsb utk itu 
//kita buat signature atau inisialisasi
//let arrayInvoice: {}[]= []; ini kalau kita declare objectnya kosong
//tapi kita declare invoicenya atau object yg sudah ada signaturenya atau property dgn typw 
//data yg sudah ada
let arrayInvoice:Invoice[]=[];
//kita isikan 
arrayInvoice.push(invoice01); //masukan object yg sudah di buat
arrayInvoice.push(invoice02); 


//coba kita masukan aarray object yg mirip dgn istance object Invoice structurenya
//bisa apa tidak?
//jawab:
//arrayInvoice.push({name:'kujang',details:'pinjam uang',amount:3000}); -->hasil tidak bisa !
console.log(arrayInvoice);
// console.log(invoice01.format())
// console.log(invoice02.format())

//kita bisa pake forEach
arrayInvoice.forEach(invoice=>{
  console.log(invoice.format())
})

//yang jadi masalah adalah bahwa properti dari class
//bersifat public shingga bisa diakses nilainya dari luar dan 
// bisa diganti langsung utk kita akan buat sebgai static
// contoh dibawah ini bisa diubah2

//invoice01.client= 'rujak cingur' //mngubah client dari indra ke rujak cingur
//console.log(invoice01.format());





/////////////////////
//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//input
   const type =document.querySelector('#type') as HTMLSelectElement;
   const tofrom = document.querySelector('#toform') as HTMLInputElement;
   const details = document.querySelector('#details') as HTMLInputElement;
   const amount = document.querySelector('#amount') as HTMLInputElement;

//event 
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    console.log(
      type.value,
      tofrom.value,
      details.value ,
      amount.valueAsNumber //value dari js biasanya 
      //adalah merupakan text pada element anak form
      //tapi pada ts ini ada value as number yg langsung
      // ubah

    )
})





