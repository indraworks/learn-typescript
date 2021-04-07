/*
mulai bab 14 kita implement di project kita gak di tampilkan di console
tapi kita tampilkan di list
cara :
1.register  list container (ul) buat class dan constructornya
2. create render methode ygn mana merender <li> yg baru dan akan tampilkan di layar homepage
   dgn cara meg -add new Li pada container sbb:
    -accetpt rgument /passing argument :invoice/payment a heading  position
    -create html temlate(li,h4,p)
    add li ke template to start /end the list
    -

*/
//import invoice class
import { Invoice } from './class/Invoice.js';
//import paymemt class
import { Payment } from './class/Payment.js';
//import  templateList class
import { ListTemplate } from './class/ListTemplate.js';
//Listtemplate instansiate
//sblum isntansiate li buat parentnya ul
const ul = document.querySelector('ul'); //dikasih tanda seru 
//hanya ada 1 ul di html jadi gak perlu pakai class
const list = new ListTemplate(ul);
/////////////////////
//form
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//event 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //nah skrgn kit aaplikasikan pada saat tekan tombol submit
    //kita instance sbuah object dari class apakah invoice atau payment
    //tergantung dari tombol select sblumnya yg dipilih
    let doc; //kita init var doc sbgai type dari class HashFormater
    let a = type.value;
    let y = 'invoice';
    // console.log(a);
    // console.log(typeof(a));
    //udah gak bisa kalau (type.value === 'invoice) 
    if (!(a.match(y) === null)) {
        //create instance invoice
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
        console.log(type.value);
        //list.render(doc,type.value,'end')
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        console.log(doc);
        console.log(type.value);
        // list.render(doc,type.value,'end')
    }
    list.render(doc, type.value, 'end');
    //nah stelah jadi maka kita akan create instance juga Li 
    //yg tercreate dari Litemplate class 
    //sesudah list dicreate kita panggil metode classnya dan pasing 
    //pasing parameter yg dibutuhkan 
});
/*
 console.log(
      type.value,
      tofrom.value,
      details.value ,
      amount.valueAsNumber //value dari js biasanya
      //adalah merupakan text pada element anak form
      //tapi pada ts ini ada value as number yg langsung
      // ubah

    )


*/ 
