/*
tentang functon di ts functuon merupkana sbuah type yg dideclare/di inisialisasikan 
dan jangan lupa parameter typescript harus selalu di tampilkan atau di definiiskan type 
datanya  contoh :
A dideclare dulu type datanya sebgai type data function 

func A(num1:number,num2:number,p?:string){
  console.log('ini adalah p = ',p);

  return num1+num2

}
nah ada namanya optional type pada parameter tandanya ? 
nah ini gak masalah dan tidak akan terjadi error jika 
kita masukan variable argument  hanya 2 dan perlu di ketahui 
posisi dari optional dari parameter ini di taruh selalu di paling kanan


contoh :
func A(num1:number,num2:number,p?:string){
  console.log('ini adalah p = ',p);

  return num1+num2

}

*/
A:Function;

const A=(num1:number,num2:number,p?:string|number):number=>{
  console.log('ini adalah p = ',p);

  return num1+num2

}

let b = A(12,13,'hello indra')
console.log('hasil b = ',b)
//kalau param yg p tidak di tulis gak akan eror conth
let c = A(14,18);
console.log('hasil tambah = ',c);

//utk suatau function yg tidak kembali adalah diberi void jadi tikda balik
//basanta langsung tampil ke screen
//menyayakan bahwa hasil akhir dari function adalah tidak dikembalikan 

const kata=(kata1:string):void =>{
   console.log(kata1)
}

kata('selamat siang pak indra')
