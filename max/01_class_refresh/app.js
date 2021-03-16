//runing di terminal tsc -t es5 script.ts
//parent class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Departement = /** @class */ (function () {
    //constructor
    function Departement(id, name) {
        this.id = id;
        this.name = name;
        //atribute kita gainti dari private ke protected:
        this.employees = []; //set kosong dulu
        this.id = id;
        this.name = name;
    }
    //methode
    Departement.prototype.describeDepartement = function () {
        console.log("Departement : " + this.id + " & name: " + this.name);
    };
    //adding EMployee
    Departement.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    //print Empoyee
    Departement.prototype.printEmployeeInfo = function () {
        console.log("jumlah pegawai :" + this.employees.length);
        console.log("list of Employees :" + this.employees);
    };
    return Departement;
}());
//subclass itDepartement
var ITDepartement = /** @class */ (function (_super) {
    __extends(ITDepartement, _super);
    function ITDepartement(id, admins) {
        var _this = 
        //id kita isi dari luar waktu instasiate
        _super.call(this, id, 'IT') || this;
        _this.i = 0;
        _this.admins = admins;
        return _this;
    }
    return ITDepartement;
}(Departement));
//subclass acountingDepartement
var accountDepartement = /** @class */ (function (_super) {
    __extends(accountDepartement, _super);
    function accountDepartement(id, reports) {
        var _this = 
        //id kit aisi dari luar waktu isntasiate
        //utk depaetemnt udah jelas pasti dia accounting !:D 
        _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0]; //report paling atas ditumpukan array
        return _this;
    }
    Object.defineProperty(accountDepartement.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
            // return this.reports[0]; //kita ambil dari yg terakhir /paling depan stack array
        },
        set: function (value) {
            //sudah ada addReport maka kita panggil metode addReports
            this.addReports(value);
        },
        enumerable: false,
        configurable: true
    });
    //method employee bisa dibuat 
    //kit abuat metode addEmployee kita bisa access krn employee atribute parent class protected
    accountDepartement.prototype.addEmployee = function (name) {
        if (name === 'Max') { //kalau nama === max maka tak bisa add
            return;
        }
        this.employees.push(name);
    };
    accountDepartement.prototype.employeeAccountInfo = function () {
        console.log("jumlah pegawai " + this.employees.length);
        console.log("list of employees : " + this.employees);
    };
    //methods
    accountDepartement.prototype.addReports = function (text) {
        this.reports.push(text);
        //ini yg aku lupa satu masuk kewaray 
        //sbgai tumukan satu masuk ke last report
        //utk didisplay sbgai report terakhir!
        this.lastReport = text;
    };
    accountDepartement.prototype.printReports = function () {
        console.log("total smua reports: " + this.reports.length);
        console.log("List semua repots :" + this.reports);
    };
    return accountDepartement;
}(Departement));
////MAIN PROGRAM ///
//instansiate object IR Departement
var myit = new ITDepartement('it01', ['admin Max']);
myit.describeDepartement();
myit.addEmployee('indra');
myit.addEmployee('kevin');
myit.addEmployee('fara');
myit.addEmployee('zaky');
myit.addEmployee('alya');
myit.printEmployeeInfo();
//instanciate accoutn Departement
var myAcc = new accountDepartement('AC01', []); //[] kit atidak isi element report(namanya report)
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
var accounting = new accountDepartement('acc3', []);
accounting.mostRecentReport = 'testing report';
accounting.mostRecentReport = 'testing report2';
console.log(accounting.mostRecentReport);
accounting.printReports();
console.log(accounting.mostRecentReport);
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
