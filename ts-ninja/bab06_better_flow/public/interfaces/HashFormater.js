/*
kita buat interface has Formater yg isi structurenya hanya metode
dgn kembalian berupa string
nah di classnya nanti isinya struture metode itulah yg dipakai oleh class

interface HashFormater {
  //method
  format():string //kmbalian string
}

class Invoice implements HasFormater {
  contructor(private code : string ,protected name:string,protected amount:number) {}
  format() {
    return `MR.${this.name } owe money amount ${this.money}`
  }

}

//diatas adalah contoh :
*/
export {};
