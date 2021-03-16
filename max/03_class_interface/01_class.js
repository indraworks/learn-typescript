/*
sama dgn oop yg lain class adalah utk supaya bisa mmbuat object
class sam dgn blue print cetak biru utk create instanciate/object
sifat dan behavior object akan beda2 tergantung nilai properti yg dimaksukan kdalam
contructor /initial awal sbuah properties yg akan disandangkan /dipakai oleh object
yg akan dicetak sbb sgai contoh
class name_class {
     name:string //<--variable class
  constructor(a:string) //<--berisi parameter plewat argument (contoh a:number / a:string)
    {
      this.name = a;
    }

}

*/
//class
var Departement = /** @class */ (function () {
    function Departement(a) {
        this.name = a;
    }
    Departement.prototype.cetak = function () {
        console.log(this.name);
    };
    return Departement;
}());
//create new object from class Departement we called as instansiate from class deaprtement
var myOffice = new Departement('Hankamnas');
console.log('MyOffice =', myOffice.cetak());
