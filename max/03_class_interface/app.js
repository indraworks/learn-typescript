/*
statuc properties atau metode adalah bahwa kita pasang di variable kita
static variable nah utk hal tsb kita gak perlu lagi instansiate
utk mmbuat object dari class kita ,contoh dari Departement kita instansiate
objet variable yg baru
const mewStaf = new Departement('id011','engineering')
tapi kita tinggal panggil namaClass dan propeties static tsb
atau kalau metode juga kita tanggil panggil metode utk create object variable
tanpa harus instansiate

*/
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Departement = /** @class */ (function () {
    function Departement(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; //<--kita ganti protected
        this.id = id;
        this.name = name;
    }
    //buat create static employee 
    //kita panggil di bawah 
    Departement.createEmployee = function (name) {
        return { name: name };
    };
    Departement.prototype.Speak = function () {
        console.log('hello world this from Departement');
    };
    Departement.prototype.describe = function () {
        console.log("Departement = " + this.id + " :" + this.name);
    };
    //addEmployee
    Departement.prototype.addEmployee = function (employee) {
        //validation etc
        this.employees.push(employee);
    };
    Departement.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Departement.fiscalYear = 2020;
    return Departement;
}());
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accounting.prototype.AddEmployees = function (employee) {
        this.employees.push(employee);
    };
    return Accounting;
}(Departement));
var AccountingDepartement = /** @class */ (function (_super) {
    __extends(AccountingDepartement, _super);
    function AccountingDepartement(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this._lastReport = reports[0]; // array repirt yg elementnya paling depan
        return _this;
    }
    Object.defineProperty(AccountingDepartement.prototype, "getlastReport", {
        get: function () {
            if (this._lastReport) {
                return this._lastReport;
            }
            throw new Error('No Report Faund');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartement.prototype, "lasReport", {
        //setter
        set: function (value) {
            this._lastReport = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartement.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartement.prototype.addReport = function (text) {
        this.reports.push(text);
        this._lastReport = text;
        console.log('update report....');
        console.log(this.reports);
    };
    AccountingDepartement.prototype.printReports = function () {
        console.log(this.reports);
        var newReport = __spreadArrays(this.reports);
        console.log(newReport); //
    };
    return AccountingDepartement;
}(Departement));
//instansiate Accounting ;
console.log('ini practical overiding and proctected properties class:');
var myaccounting = new Accounting('id4', 'secretaris');
myaccounting.AddEmployees('hi employee1');
myaccounting.AddEmployees('hi employee2');
myaccounting.AddEmployees('hi employee3');
//metode printing dari Departement
myaccounting.printEmployeeInfo();
/////////////////Ini utk AccountingDepartement ///////////////////
var maxAccount = new AccountingDepartement('id5', []);
maxAccount.addReport('Report1');
maxAccount.addReport('Report2');
maxAccount.addReport('Report3');
//getter
console.log('print getter lastReport :', maxAccount.getlastReport);
console.log('print semua Report =', maxAccount.printReports());
//panggil static createEmployee
var newEmployee1 = Departement.createEmployee('hebring');
console.log(newEmployee1);
console.log(Departement.fiscalYear);
