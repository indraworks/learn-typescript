
//runing di terminal tsc -t es5 script.ts
//parent class

class Departement {
  //atribute kita gainti dari private ke protected:
  protected employees:string[] =[]; //set kosong dulu
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
  private lastReport: string;
  public get mostRecentReport(): string {
   if (this.lastReport) {
     return this.lastReport;
   }
    throw new Error('No report found.');
    // return this.reports[0]; //kita ambil dari yg terakhir /paling depan stack array
  }
  public set mostRecentReport(value: string) {
    //sudah ada addReport maka kita panggil metode addReports
    this.addReports(value); 
  }

 
 constructor(id:string,private reports:string[]){
  //id kit aisi dari luar waktu isntasiate
  //utk depaetemnt udah jelas pasti dia accounting !:D 
  super(id,'Accounting');
  this.lastReport = reports[0]; //report paling atas ditumpukan array
 }



   //method employee bisa dibuat 
  //kit abuat metode addEmployee kita bisa access krn employee atribute parent class protected
  addEmployee(name:string) {
    if(name ==='Max') { //kalau nama === max maka tak bisa add
      return;
    }
    this.employees.push(name)
  }

  employeeAccountInfo() {
    console.log(`jumlah pegawai ${this.employees.length}`);
    console.log(`list of employees : ${this.employees}`);
  }
 //methods
 addReports(text:string){
   this.reports.push(text);
   //ini yg aku lupa satu masuk kewaray 
   //sbgai tumukan satu masuk ke last report
   //utk didisplay sbgai report terakhir!
   this.lastReport = text;
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


myAcc.addReports('Report sept 2021');


const accounting = new accountDepartement('acc3',[]);

accounting.mostRecentReport= 'testing report';
accounting.mostRecentReport= 'testing report2';
console.log(accounting.mostRecentReport);
accounting.printReports();
console.log(accounting.mostRecentReport)

/*
Getter and setter sudah dibahas sblum skrng kita mau buat atribute baru 
di class accountingDepartement,
private lastReport:String
nah kita buat metode get namametodenya mirip dgn variable
mis:get mostRecentReport() {}
kmudian utk pegisian kita masukan param di construcotrnya 
yaitu nilai report paling terakhir 
this.lastReport = reports[0]; //report paling atas


*/