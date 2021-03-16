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

//catatan utk buat metode nama_metode() {} 
itu saja ada () dan {} tidak sama dgn function ada arow => dan =
this. dlama kalang class atau constructor sama mewakili argument /object
yg ada di scope class tsb

*/
//class
class Departement {
     name:string;//<--variable class
  constructor(a:string) //<--berisi parameter plewat argument (contoh a:number / a:string)
    {
      this.name = a;
    }
   describe(this:Departement) { //kit aberi this :Departement  agar bisa dicopy ke lain variable 
    //yg otomatis nanti this ikut refer pada  class/nama classnya dimana dia brada!
     console.log('Departement ='+this.name)
   }

}

//create new object from class Departement we called as instansiate from class deaprtement

const office = new Departement('Accounting');
console.log(office)

office.describe() //panggil meotde 
/*
describe ini bis amuncul karena mrupakan bagian metode dari class office ,pnggunaan this nya merefere
pada instansiate variable /parmeter yg dipakukan padanya nah 
skrg saya mau buat dumy 
dumy ni adalag sbuah object didalamnya ada nama metode yg merujuk pada alamat memori adress di computer alamat
metode subscibe jadi saya painggl medote subcribe dgn merefer alamatnya =>>.. office.describe  dan bukan
office.describe() //ini manggil metode 
metode saya copy can ke sbuah vairbale apa bisa sama saya bisa panggil
ternya tidak bisa sbb pamggilan this.name pada metode memanggil class office bukan 
dummyVar

*/


const officeCopy = {name:'Dummy',describe:office.describe}  //kmudian alamat dari utk panggil 
                                               //metode saya copykan di variabel baru  officeCopy
//constructornya lewat name krn ini copy bukan buat instansiate! 
                                               officeCopy.describe();
//sekarang kita jalankan apa bisa sama ??
console.log("hasil officeCopy =",officeCopy.describe());

/*
Departement {name: "Accounting"}
app.js:28 Departement =Accounting
app.js:28 Departement =undefined
app.js:28 Departement =undefined
app.js:52 
hasilnya terlihat undefined smua karena this yg ada di subscribe() metode this mreffref pada 
variable class Departement bukan yg lain ,utk supaya kenal maka tidak metode dikasih anotations
this merefer pada nama class yg saat ini dia berada contoh diatas subscribe metode ada di class
departement maka this nya refer pada smua variable obejc pada class office dan di meode parameter 
dbiberi anotations
(this:Departement)
nah kita kan sudah copy tadi nujuk alamat tmpat subcribe berada otomatis thisnya ikut classnya 
refernya ke ( this :officeCopy ) ini otomatis berubah dgn sndirnya sbb:
*/



