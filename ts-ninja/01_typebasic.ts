//kita akan compile ini file dgn tsc typebasic.ts 
/*
disni pengenalan typescript tipe data apa saja yg dimasukan di dalam 
variable di typescript
 boolean : true /false;
 String: smua character "" , '
 Number: utk integer dan float,

*/

//compiler type scritp tidak akan mngeluarkan warning 
// apabila variable atau data parameter yang akan dipassing di argument 
// tidak dilabelli / atau di beri type datanya contoh function pi dibawah ini 
//akan kluar tanbda merah maka harus dibuat type data pada parameter di function tsb
// dari (inputdata) mejadi ( inputdata:number)

const circ =(diameter:number)=> {
  return diameter *Math.PI;

}
console.log(circ(7.5))

//jka sudah di declare  string number maka gak akan bisa di ubah akan ada error 
//warna merah pada compiler ts script
//contoh:

var mystr = 'indra';
//mystr = 72; akan muncul error krn menolak di beri integer/number type datanya 
//karenasudah inisialisasi string

var myboolean = true;
//akan error jika myboolean = "nilai ujian =18"; sbb type data inisialisasi sudah boolean 
//etc

