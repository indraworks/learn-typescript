/*
class merupakan blue print dari sbuah instasiate 
kita rdiir atas properties ,cunstructor,method
we can have public,private ,protected
-private object/properties can be take it /access from outside class with 
accessor public getter /setter
-protected 

*/


class  Vehicle {
  
   


  private _driver: {
    name: string;
    islicense: boolean;
    age: number;
    experience: number;
  };
   //mmbuat method getter & setter
   public get getdriver(): {
     //type dec func-nya
     name:string;
     islicense:boolean;
     age:number;
     experience:number;
   } {
      //return variablenya yaitu _driver
      return this._driver
   }
   
   //setter 
   public set setdriver(value:{
     name:string;
     islicense:boolean;
     age:number;
     experience:number;
   }) {
     this._driver = value;
   }
 
  
  honk() {
    console.log('hi honk honk')
  }

  public printDriver():void {
    console.log(this._driver)
  }
}

const myvehicle = new Vehicle;

myvehicle.honk();


//basic pewarisan kalau kit amau buat clas yg lain dan  mausama 
//atau mau gunakan propertis dan metode dari class yg laun  maka kit atinggal
//copie smua kedlam kalang {} class kita yg baru kit abuat
//tapi ada cara yg sam ayagitu dgn extend konsep extend sama artinya mewarisi
//behavior dari proreties ,metode dari class yg diextend padanya sbb

//bagian1 
// class Car extends Vehicle {
//   //ini kosong dulu 
// }
// //kita instasiate obhect dari class Car
// const mycar = new Car;
// //kita bisa gunakan metodde vehicle pada object/instaistae kita
// mycar.drive();
// mycar.honk();

//bagisn 2: kit abisa recosnturckis metode punya Vehicle dgn output yg berbeda

// class Car extends Vehicle {
//   drive() {
//     console.log('hi brummm')
//   }
// }
// const mycar = new Car;
// mycar.drive();
// mycar.honk();


//bagian 3:  access modifer  class Car disbut subClass, utk metode pubic di core Calss Vehicle
//macam Drive() {} oleh sub class gak bisa diubah adi private akan eerror 
/*
kalau mau buat private maka dia harus buat nama class yg lain sbb dia adalah subclass
tsb,utk access private hanya bisa diakses via sesam class tsb bukan sub class utk access
harus dgn getter and setter

kalau mau akses tanpa getter dan setter maka harus jadi subclass dulu dan  properti variable
core class harus diubah yaitu dari private jadi protected


*/
// //contoh setter and getter
// class Car extends Vehicle {
 
// }
// //instasila 
// const testdriver = new Car;
// let jhon = {
//   name:'Jhon Wick',
//      islicense:true,
//      age:27,
//      experience:8
// }
// //setting driver;
// testdriver.setdriver= jhon; 
// //getting driver;
// testdriver.printDriver();

//bagian ke 3 :Protected fields
//masalah field di constructor ini kadang sering salah ngerti
/*
kit abuat skrg private colorCar,dan kmudian buat constructor di Vehicle core Car
dan k

dimasukan di constructor ,jgn lupa pake super( ) utk masukan data atau forward data/vriable
ke core class sbb:
kembali kemasalah awal yatu kita mau gunakan metode atau constructor parent class
kita masukan varibale dan mmebrinya nilai 
*/











