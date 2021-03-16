/*
penulisan type data object 
const nameVariableObject : {
  //keypair :value
  nameVariable1 : typeData,
  nameVariablen :typeData
} = {
  nameVariable1: valueOfVariable
}

*/
// const Person :{
//    name:string,
//    age:number,

// }= {
//   name:'indra',
//   age:28
// }

// console.log("name =",Person.name)

//utk penulisa arrya adalah 
/*
let angka = number[];
let family = string[];
assignnya :
angka  = [1,2,3,4,5,6]
for(i=1;i<angka.length;i++) {
  print('angka :',angka[i])
}



*/
// let angka : number[];
// let family: string[];
// //assignnya :
// angka  = [1,2,3,4,5,6]
// for(let i=0;i< angka.length;i++) {
//   console.log('angka :',angka[i])
// }

/*
aray declration 
cara pertama :
let fruits:array<string>
fruits = ['mango','banana','chery','salada','apple']
declare ke2 :


*/

/* 
kalang loop utk array di typescript pakenya :
pake for i kayak javascript

pake for(const variable of var_arraynya){}
contoh:

*/
let fruits:string[];
fruits = ['mango','banana','chery','salada','apple']
for(const f of fruits){
  console.log('buah : ',f)
}
//declarasi 
let Person :{
  name:string;
  age:number;
  hobby:string[];
  role:[number,string] //ini tuple dia fixed jumlah arraynya dan harus sudah sesuai 
  //kalau lakukan pngisianya
}

//implementasi
Person = {
  name:'indra',
  age:20,
  hobby:['martial arts','jogging','football','karate','programming'],
  role:[2,'adamin']
}

console.log('role = ',Person.role[1])
/*
keterangan jadi utk tupe udah fix mis
kalau kita isi  Person.role[0] = 'wasit'
ini pasti akan eerror sbab utk index 0 pada role harus brupa number
dan yg index[1] pada role ahrsu string gak boleh kebalik 
jadi sudah fix!

*/
///Tupe juga bisa jadi array jadi pari pasangan 
let employees :[number,string][];

employees = [[1,'indra'],[2,'lucky'],[3,'yenni'],[4,'teguh']];
employees.push([5,'andra']); //cara nambah array tuple operasi sama sgn aray biasa
for(const t in employees) {
   console.log('name of employye =',employees[t][1]) //ini keluarin nammaynya saja
}
//tuple sperti aarray operationnya juga sama macam push() ,concat() etch
//kit aakan tambah element employee dgn push 

//data built in  
//di typescript  ada built in contoh
let date:Date = new Date();
console.log('date :',date);
let mymath = Math; // sbagai variable dari colletion math 
console.log(mymath.PI)
//mymath.PI // kita ambil Pi constanta dari math 3.14
//beda dgn yg ini 
let mymath2:number = Math.PI;
console.log('nilai pi =',mymath2)


///ARRAY 
//array string
let magazines:string[]=['vanity','people','music','guardian']
//booleans
let  mybooleans :boolean[] = [true,false,false,true];
let mynumber:number[]= [1,2,3,4,5];

//multiple type data in arrays
let user:(string|number|boolean)[] =['dog',34,true];
user.push(true);
user.push('indra');
console.log('user sekarang =',user);
//jadi user bisa ditambah dgn data string/number/boolean no mater with order
//gak masalah dgn urutan

//multiple array ///
let guitars:(string|number|boolean)[][] =[
  ['ibanez',4,false],['yamaha',2,true]
]
//kita tambahkan array baru jadi 3 array skrg
guitars.push(['sender'])
console.log(guitars)

//kita tambahkan di array[0]
guitars[0].push(true);
console.log(guitars) //[ [ 'ibanez', 4, false, true ], [ 'yamaha', 2, true ], [ 'sender' ] ]


/////////////////TUPLE ARRAY //////////////////////
////tuple  ,utk tuple order does matter urutan pengaruh 
//kalau salah urut maka erorr arraynya! dan arraynya sudah fix kalau aray yg typedata sbaragn dgn 
//tanda (|) kalau tuple pakai kurung kotak: [|] contoh: [string|boolean|number]














/*
bahan rujukan :
https://www.typescriptlang.org/docs/handbook/basic-types.html

*/






