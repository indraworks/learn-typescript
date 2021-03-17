/*
saatnya mengimplementasikan interfce dipakai oleh 
class kita buat directory 
interfaces , nama interface file hasFormater.ts
kita aimport file Interface tsb utk dipakai oelh class
invoice
buat kelass payment  import juga  itnerfacehasFormater.ts 
utk dipakai oleh class payment
kmudina import class invoice pada file ini 
interface_with_class
note kita jug abuat pembayaran payment karna kita berutang
utk invoice adalah pembayaran orang ke kita

*/
//import paymemt class
import {Payment} from './class/Payment.js'
//import invoice class
import {Invoice} from './class/Invoice.js'
import { HashFormater } from './interfaces/HashFormater.js';

//import HasFormater 



//kit abuat isntansiate invoice sbnyak 2 
const invc01 = new Invoice('hendri','pembayaran biaya training java',300);
const invc02 = new Invoice('darma','pembayaran linux & react',500);

//kita juga buat payment class

const pay01 = new Payment('trainer1','biaya utk beri training java',5000);
const pay02 = new Payment('trainer2','biaya utk beri training node & angular',5000);


/*
nah yg menjadi kemudahan kalau pake interface adalah kita
bisa gunakan Interface contoh dlm hal inii HashFormter dipakai 
sebgai type data dai variable dan waktu instance 
contoh vairbale a isntanciate class Invoice  variable b instasiate class Payment
gak jadi masalah krn dua klas tsb menggunakan interface yg sama HashFormater
kmudian kita buat variable docs yg merupakan array string yg structure object
nya mengaacu pada structure interface yaitu hasformater 
dan inikmudian  doc1 dan doc2 diisiakan 
sbb  let docs:hasformater[]:[] 
docs.pus(doc1) 
docs.push(doc2)
nah kesimpulan kita bisa pakai variable dan class   Interface sgabi type data
yaitu kalau pada variable langsng di signature :
  -- let namaVariable : namaInterface
     kalau pada class :
     namaClass implements NamaInterface

stlahnya baru mnginstance varibale dari klass yg udah sama type datanya 
sama2 pake namaIterface tadi 
    namaVariable new namaClass  //note namaClass yg sudah sama pake type Interface yg sama

*/
let doc1:HashFormater; //init var doc1 inisialisasi beritipe interface HashFormater
let doc2:HashFormater; //sama sprti doc1

//kita instansiate doc1 new Payment ,doc2 new Invoice
doc1 = new Payment('trainer1','biaya trainign SQL & java',5000);
doc2 = new Invoice('perserta01','pembayaran training SQL & Java',7000);

//kit abuat juga initial / buat data aarray penampung object2 yg sudah dibuat
//dan signaturenya dari typehasformater/object
let docs:HashFormater[]=[];

//masukan object kedalam array

docs.unshift(doc1);
docs.unshift(doc2);
console.log(docs);










////////////////////
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
