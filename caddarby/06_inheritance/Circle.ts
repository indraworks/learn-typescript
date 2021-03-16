import {Shape } from './Shape';

export class Circle extends Shape{
constructor(private theX:number,private theY:number,private _luasCircle:number) {
  super(theX,theY) //theX dan the Y mngarah pada properties _x,_y di superclass
}
//accessor geter/setter
//panggil metode supeclass
  getInfoCircle():string {
    return super.getInfo() +`,luasCircle = ${this._luasCircle}`;
  }
  getLuasCircle():string {
    let hasil:number = 3.14 *this.theX * this.theY; //kalau sudah super tinggal
    //panggil di dlm metode this.varSuper tersebut!
   return `hasil Luas lingkaran ${hasil}`;
  }
   

}

// test instansiate:
// let mynewCircle = new Circle(20,40,130);
// console.log(mynewCircle.getInfoCircle());
// console.log(mynewCircle.getLuasCircle());




//////////CATATAN PENTING ///////////////
/*
diconstrucotr kit akasih super utk kita beritahu variable mana saja yg kita import dari super
yg diimport yg gak pake garis bawah ,nah _luasCircle adalah murni punya class Circle  bukan 
variable warisan dari superClass Shape
theX,theY disebut regular parameter, sedangkan _luasCircle disebut parameter properties

//nah disini kita inisa panggil metodde superclass kita sbut hal ini overide
//overide artinya superclass artinya prperty dan metodenya si supercalass bisa digunakan oleh anak kelass
//(bhs indonya :nunpangi dn mengendalikan anak kelas)

penting!:
di anak kelas didalam konstruktor jika properties superclass mau dipakai kita 
assign dengan: super( variableSuperClass,...dst)
jika kita mau panggil dan assign metode superclass maka caranya adalah:
super.namaFunctionSuperclass()

point terakhir ini Cirlce kan subclass ,kelas anak kita akan export juga  
dan kit amatikan program main/di coment
kmudian kita buat program utama main panggil 2-3 module ini  jadi program utama trdiri
1.super module 2.subclass module 
dimain.ts kita import 2 2 nya kita buat instansiate dan panggil method masing2

*/
