/*multipleaarray  buat declarasinydg dgn kurung tutup kurung tanda garis tegak  
tuple declarasinya adalah kurng kotak tutut kurung kota k gak bisa berupa
kalau panjang dibuat tersendiri dulu sbgai variable stlahnya 
kita akan asign variable tadi sbgai typedata kita sbb sbgai contoh

*/
//aslinya :
let guitar:(string|number|boolean)[][]=[['ibanez',3,true],['fender',5,false]];

//diperbaharui: kita pakay type utk definiskan datanya yg panjang

type Guitars =(string|number|boolean)[][];

let myguitar:Guitars = [['yamaha',2,true],['ibanez',4,false],['roky',5,false]];

console.log(myguitar[0]);
console.log(myguitar[2]);


//utk tuple [typedata, typdata2 ,....typedata-n,...]
type Person = [string,number,string];

let myperson :Person = ['manager',10,'grade-10'];

console.log(myperson[1])






