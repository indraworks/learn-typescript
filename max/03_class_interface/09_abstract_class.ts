/*
sumber bacaan :https://www.tutorialsteacher.com/typescript
abstract class itu apa?
disebut abstract class karena nama depan class diberi nama abstract,property variable
diberi nama abstract ,
dan absract class tidak bisa dipakai utk instansiale 
(const subclass = new coreClass) <--in tidak bisa hanya bisa :
subclass extend coreClass {
  //smua proptri wajib dipakai/implement  dari abstract core class
     jika properti dari core class  dimulai dari abstract

  //smua metode akan dipakai/implement  dari abstract core class 
     jika metode core class 
}
kadang kita dapati sifat asbtract class smua properti & metoe diberi label abstract
kadang hanya properti saja ,metode tidak ,jika propertinya mau di acess akan sama
jangan lupa guanakan super( ) ini sama waktu acess yg private properti dari core class.

jika motode core class pakai lebeled abstract class maka kita harus impleented metode tsb
scara lengkap bbukan hanya kerangka saja


*/
/// contoh pertama abstact class smua properti dan metode pakai abstarct
abstract class Movies {
 abstract name:string;
 abstract Director():void ;
}

//subclass ( no instasiate) kitapakai extend core class
class Submovie extends Movies {
  name:string= 'testing;'
  Director():void {
    console.log('my name is tarantino')
  }
}

//instanciate object
const movie1 = new Submovie();

//implementation 
console.log(movie1.name)
console.log(movie1.Director())

//nanti contoh yg hanya abstract pada meotode sbb:

//nanti contoh yg hanya pada properties trus buat constructor sndiri 
//tdak dari core class abstractnya  sbb :