//insansiate
import {Person} from './Person';

let myEmployee = new Person('indra','suryawan');
let myEmployee2 = new Person('Eka','hedromingrat');

console.log(`${myEmployee.firstName} ${myEmployee.lastName} ` );

console.log(`${myEmployee2.firstName} ${myEmployee2.lastName} ` );

/*
kita bisa pecah2 program kita utk class kit abuat jadikan sndir sbgai module dgn mnulis
export class  A {}  -->file ini disimpan di a.ts
dan kita ada program uktam contoh main.ts
kit aimport file tadi import {namaVarFIle} from 'dirPath/namafile (tanpa ts) 
kmudian kita tulis class AnakClass extends A  //dimana A adalah class superclass yg kita imprt
intinya kata extends tadi beritahu bahwa class kita subclass mewarisi properties dan metode dari ckass A ( si superClass)
dan kita tulis program utama kita  dibawahnya /instasiatemya 







*/