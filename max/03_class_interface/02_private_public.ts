/*
penjelasan private class dlm access variable class
dari luar kit abisa langsung access ariable class tanpa harus 

yg perlu diketahui kit agak di anjurkan utk acess leawt variable class
langsung tapi mesti lewat metode karna melibatkan banyak operasi 
smisal CRUD operation
lwat metodenya saya beri contoh sbb:


class Murid {
  name:string,
  age:number,
  hobbies: string[3]  // kit aharus taruh private disini supaya 
  //gak bis adiakases dari luar class
 constructor(n:string,age:number){
   this.name = n;
   this.age = age;
 }
 addHobbies(hobi:string) {
  this.hobbies.push(hobi);
 }
 

}

*/

class Murid {
  name:string;
  age:number;
  private hobbies: string[] =[];  // kit aharus taruh private disini supaya 
  //gak bis adiakases dari luar class,utk waktu pertama default array kosong!
 constructor(n:string,age:number){
   this.name = n;
   this.age = age;
 }
 describe(this:Murid) {
   console.log('Departement '+this.name);
 }
 addHobbies(hobi:string) {
  this.hobbies.push(hobi);
 }
 printHobbies() {
   console.log(this.hobbies)
 }

}

const mymurid1 = new Murid('indra',28);
//mymurid1.hobbies[0] = 'anna'; //kit abisa akses langsung utk itu ganti private !
//maka akan error tanda merah
mymurid1.addHobbies('silat');
console.log(mymurid1);
console.log(mymurid1.printHobbies()) //kalau printHobbies saja berarti print pnujuk locaksi meror
//printHobbies di memori kalau printHobbies() brarti isi dari hobbies