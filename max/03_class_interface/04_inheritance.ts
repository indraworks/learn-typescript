class Departement {
  private employees:string[]=[];

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
/*
dng adanya inheritance maka properties dari departement bisa kita 
pakai atau copies tapi syaratnya adalah kita forward dgn syntak super() artinya
adalah ada pintu gerbang utk access ke properties2 construtor yg ada di parent Class
teresbut,jadi inheritance terjadi bila sia class Anak pakai kata extends waktu delcrare
nah kit abisa munculkan variable dgn memakai constructor yg kita buat dgn typedata yg sama sprti 
parent classnya 
is super adalah forward variable constructor ke tmpat constructor Departement
utk pnggunaan this.variable = variabe_dari_constructor ini di tulus stlah super

*/

class ITDepartement extends Departement {
  //dgn adanya extend seakan2 kita copy sma contructor dan fungsi/mdetode dari Departement didalam
  //berada  dlm kalang class IRDepartement

}
console.log('punya ITDepartement dgn instansiate newAccounting :')

const newAccounting = new ITDepartement('d2','Department');
newAccounting.describe();
newAccounting.Speak();
newAccounting.addEmployee('indra new');
newAccounting.addEmployee('Ika new');
newAccounting.printEmployeeInfo()


//hasil undefined krn blum pake super()
console.log('punya Departement dgn instansiate accounting :')
const accounting = new Departement('d1','accounting');
accounting.addEmployee('max');
accounting.addEmployee('manu');
accounting.printEmployeeInfo()


//sekarang kit acoba kit abikin constructor sndiri 
//it apakai buat class baru Dummy 
//jadi gini di constructor Departement sudah ada id,name utk instansiate
//nah kit agak perlu buat this.blala = balalalalla
//kit ahanya perlu butuh gerbang anamnya super() yg isinya variable yg ada di 
//depatement utk supaya bisa access thsi.blalal nya didalam constructor yg ada di Departeent
//nah jalao kita mau buat variable baru utk constructor kita kita bisa pakai sperit biasa
//shorcutr acces modifier dab tarus this.blalal kita stlah super()
// disuper yg kita forward adalah super(id,name)


//cara satu :(sdikit bingung utk ngisinya )
class Dummy extends Departement {
  constructor(id,name,public admins:string[]=[]) {
    super(id,name) //jadi hanya ini saj ayg di forward,inipunya departement
    this.admins = admins; //ini variabe baru punya kita konstrukor Dumy
  }
  printDummy(){
    console.log(`my id (${this.id}) name:${this.name} allAdmin: ${this.admins} `)
  }
}

const dumyku = new Dummy('id3','indra Dumy',['admin1','admin2'])
console.log('----PRINT DUMMY  : ')
dumyku.printDummy()


//cara 2 pisahkan itu variable buat di luar consturcor utk yg admin 
//nati ngisinya pakai metode dan print semua pakai metode ini bisa juga
class Dummy2 extends Departement {
  // pisahkan yg vairbale baru bukan construtor warisan Departement
  private admins:string[]=[];
  
  constructor(id,name) {
    super(id,name) //jadi hanya ini saj ayg di forward,inipunya departement
     //ini variabe baru punya kita buat terpisah ditaru private diatas
  }
  addDummy2Admin(admin:string){
   this.admins.push(admin);
  }
  printDummy2(){
    console.log(`ini dummy2 :my id (${this.id}) name:${this.name} allAdmin: ${this.admins} `)
  }
}

//instansiate:
//masukan value id,name ke construcotr
console.log('ini bagian dari Dummy 2 ---------->:')
const dumy2ku = new Dummy2('d2-dumy','accountDumy2');
//masukan /tambah admins di metode Dummy2
dumy2ku.addDummy2Admin('adminDummy2-1');
dumy2ku.addDummy2Admin('adminDummy2-2');
dumy2ku.addDummy2Admin('adminDummy2-3');

//print semuanya 
dumy2ku.printDummy2()






