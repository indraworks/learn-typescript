
class Person {
  //atribute 
  name :String;
  age: number;
  height:number;
  //buat constructor kalau di ts smua sama
  //constructor({});

  constructor(item1:String,item2:number,item3:number) {
    this.name = item1;
    this.age = item2 ;
    this.height =item3;

  }

  //method :
  //kalau string interpolation jgn lupa pakai bavktik ` bedaan dgn dart!
  describe():void {
    console.log(`myname is :${this.name}` );
    
  }

}

//now on our main program
//create objec /instasiate object
let person1 = new Person('andrea',38,173.5);

//use method of Person Class
person1.describe();


////////
// contoh class 
/////////
class Departement {
  //atribute
  name:String;
  //constructor
  constructor(n:String) {
    this.name = n;
  }

}

//biat instance nama accounting

const accounting = new Departement('Accounting');
console.log(accounting);






/*
kalau mau jalanin bisa langsung tsc app.ts -w atau tsc app.ts --watch
jadi sma dgn pemograman yg lain kita bahas disini adalah 
class apa class ,apa atribute dan constructor 
kita buat object kelas di namaikan instasiate 
btw ya kalau didart kebalikan dgn ts didart type deidapan variable
kalau di ts type di blkan gvariable


*/






/*TyPEDATA :
refresh lagi typedata di ts sbb:
number utk smua integer dan real
String ukt smua ' dan ""
boolean utk logic true or false
aarray : kumpulan deret cara nulisnya 
         tydata +[]
  misalkan kalau string contoh: String[];
                number  contoh: hightint[];
                                 int[];
    penulisan cara statement utk array:                             
   let list:number[] =[1,2,3]  //cara1:
   let list:array<number> =[1,2,3]  //cara 2:generic                            
  
Tuple adalah array yg jumlah elementnya sudah fix!
     dan array tipe datanya boleh lebih dari satu
//declareya :
yang lainya ulang baca lagi di bagian dir type_data :))


*/