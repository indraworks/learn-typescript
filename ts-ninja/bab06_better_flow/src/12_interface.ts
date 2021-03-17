/*
interface adalah struktur yang mendefinisikan kontrak dalam aplikasi Anda.
 Ini mendefinisikan sintaks untuk diikuti kelas. 
Kelas yang diturunkan dari interface harus mengikuti struktur yang 
disediakan oleh interface mereka.

Kompilator TypeScript tidak mengubah interface ke JavaScript. 
Ini menggunakan interface untuk pemeriksaan tipe. 
Ini juga dikenal sebagai "pengetikan bebek" atau "subtipe struktural".
--diterjemahkan dari google

oya skedar mengigatkan kalau property protected bisa diaccess oleh extend class
kalau private sudah tidak bisa cara utk access maka gunakan function geter dan setter
nah static class adalah acces yg langsung lewat nama classNya dan 
bisa property bisa function jadi langsung gak ada hubungannya dgn property instanciate

describe how the object look likes
dan kita buat sbuah type yg menerangkan gimana objectnya structurenya 
look like
jadi bukan buat kelass ini nanti ada isntance bukan ya 
hanya buat medescribe sturcture dari sebuah Object dan juga metode dari object tsb
nah jadi interface bisa digunakan sebgai tipe kita setelah kita 
mendefiniskan structure object tsb dan kemudian mngisinya dengan nilai 
dan juga parameter ( jika interface yg dibuat tadi ada punya method)
*/
interface Person { //ingat buat interface hanya 
  //buat structure sbuah object /sgnaturenya gak diisi value
  name:string,
  age:number;
  greet(phrase:string):void; //ada masukan parameter di metode 
}
//menginit/delare variable user1 bertype Person yg mrupakan object
let user1:Person;
//mengiis variable 1 ;
user1= {
  name:'indra',
  age:40,
  greet(phrase:string){
    console.log(`${phrase} ${this.name}`)
  }
}
//kita implment 
user1.greet('hi there iam ');
/*
//lebih clear dalam mmbuat structure object dari pada custome type
//dan interface can be use as contract pada class
//kita bisa share diantara class yg di buat dari interfacee bisa dishare
// jadi harus implemented interface tsb dan mgnikuti pola structure dari 
//interface tsb 
//jadi lebih dari sekedar custom type 
// nah jadi gini ia bisa diimplementasikan kedalam class
//cara sbb:
class namaClass implements namaInterface {
   //nah isinya adalah harus sesuai dgn type structure yg ada di 
   //interface
   //nah kalau propertynya tambah misalkan ada yg baru 
   //gak masalah tapi utk smua yg ada di namaIterface property dan metodenya
   //harus diisikan kedalam namaClass yg udah dideclare 

     }
  contoh sbb dibawah ini:
*/
interface IsPerson {
  //property
  name: string;
  age: number;
  //method atau func didalam class
  speak(a: string): void;
  spend(a: number): number;
}

//kita skrng signature dan assign isPerson interface pada variable me

let me:IsPerson //ini signature bahwa me diinisialisai memiliki type IsPerson
//nah stlah signature / initialisasi maka kita  assign dgn value 
//sesuai type data pada type yg ada di interface IsPerson

me = {
  name:'suryawan',
  age:40,
  speak(text:string){
    console.log(text)
  },
  spend(num:number) {
    console.log(`i have spend money: ${num}`)
    return num;
  }
}

//kita apikasikan 
me.speak(`halo nama saya ${me.name}`)

//nah akalu mau signature & assign langsung saja satu baris
//contoh interface atlethe

interface Athlete {
  //property
  name:string,
  age:number,
  skills:string[];
  //method
  info():string;
}

//kita signature dan assing di variable f

const f:Athlete= {
  name:'rujak cingur',
  age:30,
  skills:['karete','silat','judo'],
  info() {
    return `info atlete: name:${f.name} usia:${f.age} skills:${f.skills}`
  }
}
console.log(f.info())


//bagaiman kalau dimasukan di function interface ini sbgai tipe
// sama jug abuat signature/initial dulu 
//baru kemudina panggil funcnya 
//contoh intinya harus memiliki structure yg sama dgn yg ada di interface
//yg dijadikan type oleh function tsb

//saya signature dulu 
//jadi person adalah passing parameter yg mmepunyai type structure
// dari isPerson interface utk itu ya kita masukan sluruh isi sturctur interface
const myFuncPerson =(person:IsPerson)=> {
     console.log(person) 
}

//saya pake/assign
myFuncPerson({
  name:'Tiara',
  age:26,
  speak(text="lazzy programmer"){
    console.log('lazy')
  },
  spend(num= 200) {
    console.log(`i have spend money: ${num}`)
    return num;
  }
})


myFuncPerson(me) //measukan sluruh object yg sudah di assign sesua type data kedalam 
//varibale me dan di pasing ke myFUncPerson

//intinya kalau interface jadi type ya smua structure object dalam 
//interface itu harus di assign/di implementasikan dalam function structure
//gak bisa salah satu hilang harus lengkap
//next impl interface kedalam class

