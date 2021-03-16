/*
bedangya var dgn let di script gak jauh beda hanya kalau di vanila js yg bisas kita pakai 
maka var dianggap global
kalau di ts dia akan sama dgn let krn dia adalah variable block scope
maksudnya slama masih di dlam {} dia hanya berlaku nilai variable tsb diluar scope {}
maka sudah gak bisa /gak brlaku nilai variable  lettsb 

utk const adalah variable gak bisa diubah jika memakai const sttaemtne t
utk itu kita paling banter utk bisa flexible gnakan let
contoh sbb
*/

const userName = 'Indra';
//userName = 'komang ' // otomatis merah disorot pada saat ini krn gak bisa diubah kita // coment lagi

let age = 27;

age = 45; //gak ada error 
console.log('umur saya  =',age)
let result;
function add( num1:number,num2:number):void {
  
  result = num1+num2;

}
//console.log(result) kalau kita taruh diluar variable gak dikenali jadi mmg hanya dikalang {} 
//saja scope variable tsb kcuali let result diluar {} diknali dia!
add(23.56,31.8961)

console.log(result)

////Penggunaan Array Function /////
/*
asal mula function( ) {} ; kita ganti ()=> {} ini sama

*/

const tambah = (num1:number,num2:number)=>  num1 +num2; //kalau cuman 1 baris bisa tanpa kurungkurawal
//versi pendek
const printResult = (num:number)=>console.log(`hasil penjumlahan= ${num}`)

printResult(tambah(3,2));

//versi lngkap bisa ditulis sprti dibawah ini ada outut dari func tsb kalau gak ada brarti harus void sbb:

const myOutput:(num:string|number)=>void = output=>console.log(output);

myOutput(tambah(33.33,4.1297))

//contoh lainya 

const button = document.querySelector('button'); 
  if(button) {
    button.addEventListener('click',event=>console.log(event))
  }




  