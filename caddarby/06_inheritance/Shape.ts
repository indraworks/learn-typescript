export class Shape {
  constructor(private _x :number,private _y :number) {}
  //accessor geter/seter 
  //oya biasayanya bisa kita buat utk funciton get hasil kastingnya 
  //atau hasil return  bisa ubah type data dari number ke string tinggal taruh didpean 
  //nama functunya contoh :namaFunction(): type_data kembalian { return variable x,variable y}
  
  getInfo():string {
    return `x = ${this._x} ,y =${this._y}`;
  }


}
// let myshape = new Shape(12,13)
// console.log(myshape.getinfo())
