
class Departement {
  //atribute
  name:String;
   //constructor
   constructor(n:string) {
     this.name = n;
   }

  //metode
  describe():void{
  console.log(`my departement is ${this.name}`);

  }
  //kita mau copy describe class acounting
   
}

//instansiate
let accounting = new Departement('Accounting')

accounting.describe();

//copy aacounting kita coba sblum buat class yg di extends
//bisa apa gak??
let accountingCopy = {decribe :accounting.describe}

accountingCopy.decribe();//kita panggil desctibe dari accounting class
//hasillnya null sbb knapa this nya itu tetap refer sama yg buat 
//yatu class accounting bukan class accuntingCopy
//supata bisa maka kita jalankan komsep inherinteance

class newAccounting extends Departement {
  member:number;
  report:String;
  constructor(m:number,rep:String) {
    super('kurang ajar');
   this.member  = m;
   this.report = rep;
  }
   newDescribe() {
      console.log( ` member report: ${this.member} hello semua ${this.report}`)
     super.describe();
     super.describe();
   

   }
}

const report1 = new newAccounting(3,"report ikan tahunan");

report1.newDescribe();

// hasil akan terprint:
/*
member report: 3 hello semua report ikan tahunan
app.js:21 my departement is kurang ajar
app.js:21 my departement is kurang ajar
kita bisa access atribte name di parent class dan 
memberi nilai baru 'kurang ajar' dan di print 
cara isinya adalah passing param strirng di construotor
dan utk printnya panggil dgn super.describe() karn 
describe adalah metode parent class yg tujuan ngeprint 
atriute name parent class dan kita pasing value nya dari anak 
class 'kurang ajar'

*/






/* Inheritance = Pewarisan
inheritane adalah pewarisan 
disini nanti kita terangkan kalau kita sekedar copy 
sbuah metode dari class kmudian kita panggil gak bisa 
maka utk itulah apabila ada class lani mau pakai metode sbuah 
class tsb/parent maka wajib dia extends /maksudnya minta warisan dari indukd class
shingga smua atribute & metode/ufunction dari induk class
ada padanya sama dgn si induk class


*/

/*
sklaian belajar tetangn super() ,
jadi diatas newAccounting adalah subclass dari class Departement
nah kalau dia adalah subclass maka smua atribute dan metode dari departement
dapat dia akases nah utk dapat akases atribute di parent classnya dia(new accountign)
manggil pake comand super() nah parmenter yg di Departement itu diconstrucotrnya
hanya ada satu variable ,nah kita pasing aja kan itu string
tulis valuenya langsung! super( 'Reporting');
nah yg atriute local tetap sama dan yg jelas kalau manggil super() hnaya ada di dalam
construtor sblum statement this.bla bla..

constructor(m:number,rep:String) {
    super('Reporting'); // kasih nilai ke name ke atribute name di parent class
   this.member  = m; //atribute local
   this.report = rep; //atribute local




*/








