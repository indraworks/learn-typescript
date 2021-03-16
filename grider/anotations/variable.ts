// const apples: number = true; // kalau yg ini otomatis langsung apple
//garis bawah mereah sbba number
//anotation ditypescript adalah cara mndeclare type data disebuagh variable
//apapun itu variablenya apakah function, apakah class, apakah object literal
// singkatnya : let name_variable :type-nya = nilau value berdasarkan type


////array
let colors:string[]= ['red','green','blue'];
let myNumber :number[]= [1,2,3];
let truths : boolean[]=[true,false,false,true];



// class

class Car {



}
//dibawah ini kita asign car adalah type class dan kita buat instancenya
//new  Car
let car :Car = new Car();


//object Literal
//biasanya js :
let personx = {
  name:'Indra',
  age:27,
  ocuppation:'engineer',
  ismarried: false
}

//diatas kita buat object lietarl masing2 ada variable dan nila variable
//yg sudah pasti kita tahu tipe data dari nila tsb
//nah skegn dgn typescript masing2 harus ada anotationnya 
//masing2 vvariable dtrangkan typedatanya sbb
//bisa seprti ini 
// type Person = {
//   name:string;
//   age:number;
//   ocuppation:string;
//   ismarried:boolean
// }
//nah variablenya kita decalre pada anotation tsb:

let person:{
   name:string;
   age:number;
  ocuppation:string;
  ismarried:boolean;
} = {
  name:'Indra',
  age:27,
  ocuppation:'engineer',
  ismarried: false
}

console.log(person.name);
console.log(person.age)
console.log(person.ocuppation)


/* FUNCTION 
annotaion functuon caranya memang ini agak membingugkan 
yg perlu di aris bawahi buat functonnya dulu ,kmudian asign kdalam variable
nah skgn kit abuat anotaions atau nilai type data pervariabel dari parameter yg 
akan di process di function itu ,nah kmduian kasih => yg artinya output "TYPE_DATA"
yg akan diharapkan dari aparmeter function tadi 

*/
//ini function //
// const Add = (a,b)=> {
//    return a+b;
// }

//ini anotaion harapan apakah balik return atau tidak (void)
//ini contoh jika void
//(a:number,b:number)=>void = 

//kita gabung :

const add:(a:number,b:number)=>void = (a,b)=> {
   return a+b;
}
//call function 

console.log(add(7,8));





