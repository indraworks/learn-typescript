

class Departement {
  protected employees:string[]=[]; //<--kita ganti protected

  constructor(public id:string,public name:string) {
    this.id =id;
    this.name =name;

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
  //id,name dari/inheritance from department
  //kita buat report lastRepors yg murpakan isi repirt aarray paling depan/palong baru!
  private _lastReport: string;

  //getter nama  lastReport() boleh ubah2 mis mostRecentReport() dll trserah ...:D
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
    this._lastReport = text; //nilai lastReport berisi repots array report  yg baru di masukan 
    console.log('update report....')
    console.log(this.reports)
  }
  printReports() {
    console.log(this.reports)
    let newReport:string[] = [...this.reports];
    console.log(newReport) //
  }

}


//skrgn kita instansiate Accounting ;
console.log('ini practical overiding and proctected properties class:')
const myaccounting = new Accounting('id4','secretaris');
myaccounting.AddEmployees('hi employee1');
myaccounting.AddEmployees('hi employee2');
myaccounting.AddEmployees('hi employee3');
//metode printing dari Departement
myaccounting.printEmployeeInfo();

/////////////////Ini utk AccountingDepartement ///////////////////
///demo setter and getter
//print geter cara manggil metode geter tanpa ()
 const maxAccount = new AccountingDepartement('id5',[]); //[ kit akasih kosong dulu baru add pakai meotde]
 //addnya tidak lwat konsturktor tapi pakai metode addReport
 maxAccount.addReport('Report1');
 maxAccount.addReport('Report2');
 maxAccount.addReport('Report3');

//getter
console.log('print getter lastReport :', maxAccount.getlastReport); 
//hasil = Report3 yg terakhir ditulis
//atau pertama di Array

console.log('print semua Report =', maxAccount.printReports())



