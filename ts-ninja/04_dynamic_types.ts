//dynamic types adalah type yang dynamic jadi dieclare di inisalisasi dulu 
//disebut any bolah apa saja 

//contoh utk non array 
//inisial
let mybebas:any = 25;
//di assign apa saja gak warning atau error
mybebas = true;
console.log(mybebas);
mybebas = 'ini 25';
console.log(mybebas);

//utk array bagaimana sama 
let myArrayMix :any[]=[]; //diinisialisasi sbgai type data any array

//kita isi sekarang
myArrayMix =['2',34,true];
console.log('MyArrayMix =',myArrayMix);

//bagaiaman dgn objet aray sama juga dideclare
//dideclare dulu ada 2 1.onjec itu sendiri yg ngisikan ke arraymya 
//2 array object yg nampung object2 tadi 

//kita initial invidue objectnya 
let individeObj :{name:string,kelas:number,address:string};

individeObj = {name:'surya',kelas:3,address:'jl semangka 7'};
myArrayMix.unshift(individeObj);
individeObj = {name:'tati',kelas:4,address:'jl durina 33'};
myArrayMix.unshift(individeObj);
individeObj = {name:'merga',kelas:1,address:'jl keripik 15'};
myArrayMix.unshift(individeObj);
individeObj = {name:'Silva',kelas:6,address:'jl embong brantas 8'};
myArrayMix.unshift(individeObj);

console.log('hasil array any =',myArrayMix)











