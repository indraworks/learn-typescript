/*
statuc properties atau metode adalah bahwa kita pasang di variable kita 
static variable nah utk hal tsb kita gak perlu lagi instansiate 
utk mmbuat object dari class kita ,contoh dari Departement kita instansiate
objet variable yg baru 
const mewStaf = new Departement('id011','engineering')
tapi kita tinggal panggil namaClass dan propeties static tsb
atau kalau metode juga kita tanggil panggil metode utk create object variable
tanpa harus instansiate
jadi intinya static dibuat utk 1.tidak perlu instansiate bisa buat metode tuk create
                                  object variable
                                2.bisa langsung CRUD thd properties variable langsung
                                  dari subclass 
                                3.hanya subclass yg bisa access diluar itu tidak bisa
                                  jadi (subclass extend coreclass)

*/

class Departement {
   static fiscalYear:number = 2020;
  protected employees:string[]=[]; //<--kita ganti protected

  constructor(public id:string,public name:string) {
    this.id =id;
    this.name =name;

  }

  //buat create static employee 
  //kita panggil di bawah 
  static createEmployee(name:string){
    return {name:name}
  }
  Speak():void {
    console.log('hello world this from Departement');
  }
  describe(this:Departement) {
    console.log(`Departement = ${this.id} :${this.name}`)
  }

  //addEmployee
  addEmployee(employee:string) {
    //validation etc
    this.employees.push(employee);
  }
printEmployeeInfo() {
  console.log(this.employees.length);
  console.log(this.employees)
}

}


class Accounting extends Departement {


  AddEmployees(employee:string) {
    this.employees.push(employee); 
  }
}

class AccountingDepartement extends Departement {
 
  private _lastReport: string;

 
  public get getlastReport():string {
    if(this._lastReport) {
      return this._lastReport
    }
    throw new Error('No Report Faund')
  }
  //setter
  public set lasReport(value :string) {
    this._lastReport = value;
  }
     
  
  constructor(id:string,private reports:string[]) {
    super(id,'Accounting');
    this._lastReport = reports[0]; // array repirt yg elementnya paling depan

  }


  addEmployee(name:string) {
    if(name === 'Max') {
      return;
    }
    this.employees.push(name)
  }
  
  addReport(text:string){
    this.reports.push(text);
    this._lastReport = text; 
    console.log('update report....')
    console.log(this.reports)
  }
  printReports() {
    console.log(this.reports)
    let newReport:string[] = [...this.reports];
    console.log(newReport) //
  }

}


//instansiate Accounting ;
console.log('ini practical overiding and proctected properties class:')
const myaccounting = new Accounting('id4','secretaris');
myaccounting.AddEmployees('hi employee1');
myaccounting.AddEmployees('hi employee2');
myaccounting.AddEmployees('hi employee3');
//metode printing dari Departement
myaccounting.printEmployeeInfo();

/////////////////Ini utk AccountingDepartement ///////////////////

 const maxAccount = new AccountingDepartement('id5',[]); 

 maxAccount.addReport('Report1');
 maxAccount.addReport('Report2');
 maxAccount.addReport('Report3');

//getter
console.log('print getter lastReport :', maxAccount.getlastReport); 

console.log('print semua Report =', maxAccount.printReports()) 

//panggil static createEmployee

const newEmployee1 = Departement.createEmployee('hebring');
console.log(newEmployee1);
console.log(Departement.fiscalYear);




