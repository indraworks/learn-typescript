"use strict";
/*
access modifier adalah cara utk mengakses properti didalam
sbuah class ada 3 macam
defaultnya public tanpa harus ditulis tidak sudah default pubblic
-private - hanya bisa di access oleh internal dalam kelas
           dari luar tidak bisa harus dgn cara get/set.
protected - hanya bisa diaccess dlm class atau extend class
            atau class turunan
 
*/
//Public contoh
//identifier sudah pasti default tanpa perlu 
// di beri lebel public
class Employee {
    //constructor
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
}
//instansiate
const myemp1 = new Employee('1234', 'indra');
//kita access Public/edit itu properties insansiate
//yg baru dibuat
myemp1.empCode = '123';
myemp1.empName = 'wahyu';
console.log('myemp1.empCode =', myemp1.empCode);
console.log('myemp1.empName =', myemp1.empName);
//private kita beri contoh kita edit yg diatas
class Employee1 {
    //constructor
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
}
// instansiate Employee1
const myemp1x = new Employee1('111', 'rendra');
//myemp1x.empName = 'Ini Private' gak bisa di edit ini merah
//krn private
//////////////////Proctected //////////////////
//protected bisa diaksess asal di extend dulu 
//dan bisa access dari extend class atau subclass
class Employee3 {
    //constructor
    constructor(code, name) {
        this._empCode = code;
        this._empName = name;
    }
    //getter
    get get_empName() {
        return this._empName; //ambil private variable sbgai return keyword
    }
    //setter
    set set_empName(myempName) {
        this._empName = myempName; //pasing parameter argument diisikan ke 
        //private variable
    }
}
class SalesEmployee extends Employee3 {
    //constructor
    constructor(code, name, salary, grade) {
        //kita buat super utk ambil empCode,empName
        super(code, name);
        this.SalesSalary = salary;
        this.Grade = grade;
    }
    info() {
        //this.get_empName adalah metode get yg return nilai variable private _empName
        //kita panggil jangan get_empName() karena bukan function tapi ini 
        //adalah metode yg kemblikan property private jadi public
        return `this info sales employee name : ${this.get_empName} gajinya:${this.SalesSalary}`;
    }
}
//kita instansiate
const empSales1 = new SalesEmployee('s12', 'Dian Hera', 1200, 5);
console.log('Emp sales =', empSales1);
//kita edit empSales1
//empSales1.name= 'Manduaji' //tidda bisa !krn dia ini hanya bisa di insanstiae sama etend
//kalau mau edit gimana ??
//caranya kita buat functuon setter and getter yg sifatnya public dalam 
//class tersebut supaya bisa di access dari mana saja
//coba kita ubah sekatang
empSales1.set_empName = 'Wahyu';
console.log('empSales1 stlah diubah  =', empSales1);
// console.log(empSales1.info())
empSales1.info();
console.log(' ini empSales 1', empSales1.info());
//kalau mau ambil nilai dari empName /dari metode get cukup
//empName gak perlu pake ()
//karena kita ngambil metode 
console.log('ini tanpilkan empName =', empSales1.get_empName);
//////end proctected ////////////////////////////
