/*
access modifier sdah kit abahas yaitu ada yg orivate dan ada yg public
srkg utk buat short mode agar tidak tulis 2x statement utk buat variable calss
dan consturctor kit abisa masukan smua di consturctor
jadi di constructor bisa private public nama_variable :variable_type

*/

/*
tentang read-only hanya ada di ts jadi pernyatan ini di pasang 
di variable class atau constructor utk pertama kali saja 
kasih nilai divariable tsb stlahnya gak bisa lagi diubah2

*/

class Person {
private hobbies:string[]=[];//utk starting zero array

//constructor
constructor(private readonly id:number,public name:String,public age:Number) {
  this.id = id;
  this.name = name;
  this.age =age;
}
 //decribe common
 describe(this:Person) {
  console.log(`Person : ${this.id} ,${this.name}, ${this.age}`)
 }

//addhobbies 
  addHobbies(hobi:string){
    this.hobbies.push(hobi);
  }
//print hobbies
  printHobbies(){
    console.log(this.hobbies)
    console.log(`Person Hobbies : ${this.hobbies}`)
  }

}

//instantiate
const person1 = new Person(1,"indra",27)
let ps1Hobbies:string[]=['a','b','c','d'];
person1.describe();
for(let i=0;i<ps1Hobbies.length;i++) {
    person1.addHobbies(ps1Hobbies[i]);
}
console.log(person1.printHobbies());
//person1.id = 1
//print all about person
