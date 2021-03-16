/*
lanjutannya gimana  function type yg punya cb atau callback function?
intinya sama sprti bab 8 dimana function as type nah di result dari  function ini dimasukan argument input
jadi hasil result dai masuk sbgai argument di input yg  ke-3 atau dari argument function itu sndir
sbb utk penjelasannya  pakai contoh biar hafal
jangan lupa cb trsebut utk hasilnya tidak return tapi void!karnea
mau dicetak oleh function cbdan memang ini jadi keharusanya cb memang tidak return
tapi excute
Note! :
that's the wrong choice. As you learned, callback functions can return something, even 
if the argument on which they're passed does NOT expect a returned value.

note:That's the wrong answer. Being forced to return undefined if you actually
 don't want to return anything sounds like a bad idea. Keep in mind 
that "null" und "undefined" are values in JavaScript and not "nothing".

*/

//declare
function AddAndHandle(num1:number,num2:number,cb:(num:number)=>void) {
  const result =num1+num2;
  cb(result);
}
 
//implementasi
AddAndHandle(20,35.7,(result)=>{
console.log('hasil cb(result) = ',result)
})