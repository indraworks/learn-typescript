/*
overiding properties maksudnya apa?dan protected properties maksudnya apa?
pernjelasan:

begini di class departement aada private variable utk supatya diaccess di buat 
propertiesnya dari private jadi protected ,
sifat protected mmmvberti access properties/constructor/metode
 pada dunia luar class2 yg hanya extend pada class ini 
saja yaitu departement sbb

*/


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

//kit abuat class acounting extend Departement
class Accounting extends Departement {
  //kita buat metode baru yg mana bisa access variable empployees

  AddEmployees(employee:string) {
    this.employees.push(employee); //terlihat kita panggil protected variable employee no error
  }
}

//skrgn kita instansiate
console.log('ini practical overiding and proctected properties class:')
const myaccounting = new Accounting('id4','secretaris');
myaccounting.AddEmployees('hi employee1');
myaccounting.AddEmployees('hi employee2');
myaccounting.AddEmployees('hi employee3');
//metode printing dari Departement
myaccounting.printEmployeeInfo();

