//class

class Invoice {
//declare property mrupakan variable public
  client:string;
  details:string;
  amount:number;

 constructor(c:string,d:string,a:number){
    //men-assign value dari instance lewat parameter ke 
    // property
    this.client = c;
    this.details = d;
    this.amount = a;
   //buat method tampilkan hasil transaksi
    }
   format() {
     return `${this.client} owe money $${this.amount} USD  for : ${this.details}`
   }
 
}


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
console.log(invoice01.format())
console.log(invoice02.format())

//yang jadi masalah adalah bahwa properti dari class
//bersifat public shingga bisa diakses nilainya dari luar dan 
// bisa diganti langsung utk kita akan buat sebgai static
// contoh dibawah ini bisa diubah2

invoice01.client= 'rujak cingur' //mngubah client dari indra ke rujak cingur
console.log(invoice01.format());





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

