"use strict";
//class
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        //men-assign value dari instance lewat parameter ke 
        // property
        this.client = c;
        this.details = d;
        this.amount = a;
        //buat method tampilkan hasil transaksi
    }
    Invoice.prototype.format = function () {
        return this.client + " owe money $" + this.amount + " USD  for : " + this.details;
    };
    return Invoice;
}());
//kita instansiate /buat object invoice
var invoice01 = new Invoice('indra', 'keperluan pengembanga softare & jaringan ', 300);
var invoice02 = new Invoice('hendy', 'biaya training dan pelatihan ', 400);
//tampilkan di console dengan panggil method
invoice01.format();
invoice02.format();
//nah kita bisa mmbuat atau simpan di dalam array 
//nah tetapi harus ikut dari format object yg disimpan diarray tsb utk itu 
//kita buat signature atau inisialisasi
//let arrayInvoice: {}[]= []; ini kalau kita declare objectnya kosong
//tapi kita declare invoicenya atau object yg sudah ada signaturenya atau property dgn typw 
//data yg sudah ada
var arrayInvoice = [];
//kita isikan 
arrayInvoice.push(invoice01); //masukan object yg sudah di buat
arrayInvoice.push(invoice02);
//coba kita masukan aarray object yg mirip dgn istance object Invoice structurenya
//bisa apa tidak?
//jawab:
//arrayInvoice.push({name:'kujang',details:'pinjam uang',amount:3000}); -->hasil tidak bisa !
console.log(arrayInvoice);
console.log(invoice01.format());
console.log(invoice02.format());
//yang jadi masalah adalah bahwa properti dari class
//bersifat public shingga bisa diakses nilainya dari luar dan 
// bisa diganti langsung utk kita akan buat sebgai static
// contoh dibawah ini bisa diubah2
invoice01.client = 'rujak cingur'; //mngubah client dari indra ke rujak cingur
console.log(invoice01.format());
/////////////////////
//form
var form = document.querySelector('.new-item-form');
//input
var type = document.querySelector('#type');
var tofrom = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//event 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //value dari js biasanya 
    //adalah merupakan text pada element anak form
    //tapi pada ts ini ada value as number yg langsung
    // ubah
    );
});
/*
catatan pwnting tentang class nanti bisa refresh dengan class yg ada di jvascript
sama
jadi class adalah blue print atau cetakan biru ,trdiri atas property
yang berisi dari key dan value jadi propertuy ini merupakan variable
global didalam class,ini defaultnya
nah pada saat cetak atau instansiate maka nilai dari object yg akan dicetak
dimasukan kedalam class melalui passing parameter di constructor yg ada didalam class
construtor sendiri adalah gunanya utk mengisikan nilai object kedalam properti class
atau dgn kata lain meng-assign ke dalam nilai properti class
jadi ketika dicetak object tadi sudah punya value propertinya

contoh :
class Invoice {
 //ini dibawah di sebut properti class
 clients:string,
 details:string,
 amount:number

 constructor(a:string,b:details,c:number)
   //buat constructor passing parameter agar properti dari obj nnti sudah ada
   //nilainya karena dari properti class ini yg diasigned argumen
   //dari object yg akan di cetak
   this.clients = a;
   this.details = b;
   this.details= c;

}
//kita buat metode class
 

}

*/
