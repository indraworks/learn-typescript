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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Public contoh
//identifier sudah pasti default tanpa perlu 
// di beri lebel public
var Employee = /** @class */ (function () {
    //constructor
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
//instansiate
var myemp1 = new Employee('1234', 'indra');
//kita access Public/edit itu properties insansiate
//yg baru dibuat
myemp1.empCode = '123';
myemp1.empName = 'wahyu';
console.log('myemp1.empCode =', myemp1.empCode);
console.log('myemp1.empName =', myemp1.empName);
//private kita beri contoh kita edit yg diatas
var Employee1 = /** @class */ (function () {
    //constructor
    function Employee1(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee1;
}());
// instansiate Employee1
var myemp1x = new Employee1('111', 'rendra');
//myemp1x.empName = 'Ini Private' gak bisa di edit ini merah
//krn private
//////////////////Proctected //////////////////
//protected bisa diaksess asal di extend dulu 
//dan bisa access dari extend class atau subclass
var Employee3 = /** @class */ (function () {
    //constructor
    function Employee3(code, name) {
        this._empCode = code;
        this._empName = name;
    }
    Object.defineProperty(Employee3.prototype, "get_empName", {
        //getter
        get: function () {
            return this._empName; //ambil private variable sbgai return keyword
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee3.prototype, "set_empName", {
        //setter
        set: function (myempName) {
            this._empName = myempName; //pasing parameter argument diisikan ke 
            //private variable
        },
        enumerable: false,
        configurable: true
    });
    return Employee3;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    //constructor
    function SalesEmployee(code, name, salary, grade) {
        var _this = 
        //kita buat super utk ambil empCode,empName
        _super.call(this, code, name) || this;
        _this.SalesSalary = salary;
        _this.Grade = grade;
        return _this;
    }
    SalesEmployee.prototype.info = function () {
        //this.get_empName adalah metode get yg return nilai variable private _empName
        //kita panggil jangan get_empName() karena bukan function tapi ini 
        //adalah metode yg kemblikan property private jadi public
        return "this info sales employee name : " + this.get_empName + " gajinya:" + this.SalesSalary;
    };
    return SalesEmployee;
}(Employee3));
//kita instansiate
var empSales1 = new SalesEmployee('s12', 'Dian Hera', 1200, 5);
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
