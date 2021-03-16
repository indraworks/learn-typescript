//parent class

class Departement {
  //atribute
  private employees:string[] =[]; //set kosong dulu
  //constructor
  constructor(private readonly id:string,public name:string) {
    this.id = id;
    this.name = name;
  }

  //methode
  describeDepartement(this:Departement) {
    console.log(`Departement : ${this.id} & name: ${this.name}`);
  }
  
 //adding EMployee
  addEmployee(employee:string) {
    this.employees.push(employee);
  }
 //print Empoyee
  printEmployeeInfo() {
    console.log(`jumlah pegawai :${this.employees.length}`);
    console.log(`list of Employees :${this.employees}`)
  }

}

//subclass itDepartement
class ITDepartement extends Departement {
  i:number = 0;

  admins:string[];
  constructor(id:string,admins:string[]) {
    //id kita isi dari luar waktu instasiate
    super(id,'IT');
    this.admins = admins;
  }
  


 /*
 ket:parent class ada id jug atapi kita mau isi maka kit afowrad dgn 
 peritnah super()
 */
}


//subclass acountingDepartement
class accountDepartement extends Departement {
  //constructor
 constructor(id:string,private reports:string[]){
  //id kit aisi dari luar waktu isntasiate
  //utk depaetemnt udah jelas pasti dia accounting !:D 
  super(id,'Accounting');
 }
 //methods
 addReports(text:string){
   this.reports.push(text)
 }

 printReports() {
   console.log(`total smua reports: ${this.reports.length}`)
   console.log(`List semua repots :${this.reports}`)
 }

}

////MAIN PROGRAM ///

//instansiate object IR Departement
const myit = new ITDepartement('it01',['admin Max']);
myit.describeDepartement();

myit.addEmployee('indra');
myit.addEmployee('kevin');
myit.addEmployee('fara');
myit.addEmployee('zaky');
myit.addEmployee('alya');

myit.printEmployeeInfo();

//instanciate accoutn Departement
const myAcc = new accountDepartement('AC01',[]); //[] kit atidak isi element report(namanya report)
// tapi isi array kosong dulu []
//jadi kalau di construcotr berupa array maka kita isi array kosong dulu 
// dan karena disitu jug aprivate sifatnya maka diakases hanya di metode class
//di add reports sbb:
myAcc.addReports('Report juni 2020');
myAcc.addReports('Report juli 2020');
myAcc.addReports('Report august 2020');
myAcc.addReports('Report sept 2020');

//check totaol report dan smua report
myAcc.printReports();














/* disini kita akan buat contoh ada class Departement ( parent class)
ada 2 anak class /subclass:
-class itDepartement
-class accountingDepartement

kita akan mngnela super yaitu mpasing parameter atribute/properties
dari class anak ke class parent disconstrutornya.


*/