
class Person{
//atribute
//  name:String;
//  age:number;
//  ismarried:boolean;

//constructor
constructor(private name:String,private age:number,private ismarried:boolean){
  this.name = name;
  this.age = age;
  this.ismarried = ismarried;
}

//method
getPerson() {
  return `name :${this.name},age:${this.age} ,isMarried:${this.ismarried}`;
}
public setName(  name:String):void {
  this.name = name
}
public setAge(  age:number):void {
  this.age = age;
}
public setisMarried(  married:boolean):void {
  this.ismarried = married
}

}



//MAIN //////
//instanstiate

let orang1 = new Person('Indra',28,false);
let orang2 = new Person('Januar',30,true);
console.log(orang1.getPerson());
orang1.setName('Herman');
console.log(orang1.getPerson()) //skrg sudah update name ='Herman';

console.log(orang2.getPerson());
orang2.setAge(40);
console.log(orang2.getPerson()) //age orang 2 bruabah jadi 40;

/* penjelasan diatas karna smua atribute cclass di private maka cara aksesnya lewat metode atau function
 yg kit abuat adalah setter dan geter diatas
 biasanya kan langsung 
 orang1.name = 'nana langsung!';
 tapi gak bisa krn private 
 */




/*
PRIVATE ATRIBUTE & PRIVATE 
jika atribute sbuah parent class kita beri private maka gak bisa dikases
oleh pihak luar kculai dalam klass itu sndiri
jika kit amau kasses kita hany abisa lewat construcotr saja 
nah jika di consturcotr di beri private maka kita hanya bisa akses lewat publick
publick mettoe getter dan setter
ada hal yg menarik disini yatu kita gak perlu tilis atribute 2x
yatu waktu kitde declare dalam class ,yg kedua di declare dalam constractor
caranya cukup sklai dgn mengenalkna properties atribute trsbut private /protecred/public

contoh :
//cara normal
class Person {
  name :String;
  age:numebr;
  adress:String;
  constructor(n:String,age:number,add:aString) {

  }
}

//cara shorcut:
//kit aganti diatas langsung
class Person_Short {
  constructor(private name:String,Private)
}



*/