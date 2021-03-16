
/// Spread Operator  ///////////////////
/*
https://www.geeksforgeeks.org/javascript-spread-operator/
https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab


jadinya intinya ini berlaku utk array yg mau di dpread dipisah per-individue /iterable
contoh :

let hobbies =['surfing','swim','painting','boxer','karate',]
jadi gini kit amau extract sebuah array hobies ke masing2 variable 
satu persatu ...
const hobi1 = hobbies[0];
const hobi2 = hobbies[1];
const hobi3 = hobbies[2];
const hobi4 = hobbies[3];
jadi intinya nilai array 1 persatu distract di copikan dke masing2 variable
daripada nulis satu satu maka bisa langsung jadi semacam ini 

const tmpHobbies = [...hobbies];


*/
let hobbies =['surfing','swim','painting','boxer','karate','gardening']
let tmpHobbies = [...hobbies];
console.log('hasil spread hobiies =',tmpHobbies); 
//hasil:[ 'surfing', 'swim', 'painting', 'boxer', 'karate', 'gardening' ]
//nah kalau mau tanbah gak jadi maslah 
tmpHobbies = [...hobbies,'sex'];
console.log('hasil penambahan =',tmpHobbies);
//hasilnya :hasil:[ 'surfing', 'swim', 'painting', 'boxer', 'karate', 'gardening','sex' ]


//bagaiman spreading in object?/ini dia pakai tanda {} = sblahkanan ada lah awal/old objectnya
//contoh :
let Person = {
  firstName:'indra',
  trueAge:34,
  ismarried:false

}
//oya hati2 ya tanda oldvar : neVar dibawah bukan assign tapi alias ya 
//pergantian nama di dlam spread operator utk object!

let {firstName:corectName,trueAge,ismarried} = Person;
//dgn spread ini ngeprin gak perlu Person.corectName
console.log('name =',corectName);
//ganti update skrg name = jokontol
corectName = 'jokontol';
console.log('name baru =',corectName)

/////End Spread Operator /////////////


//////////////////REST VALUE /////////////////
/*
tentang  rest value ,jadi mis kit amau masukan banyal argument di sbuah paramerter
function 
function (a,b,c,d,c,f...n.){} atau function (1,2,3,4,5...n.){}
intinya banyak agrunent yg mau diolah 
nah kita cukup ambil rest smua value simbol : ...name_variable
( biasayany ini bisa array atau tupel ) kalau tupel kan ix jumlahnya 
kalau pakai array bisa banyak contoh dibawah   ini penggunaannya
ingat nama restnya terserah gak ada masalh yg pnting titik 3nya jgnlupa
sbb nama hamya pelintas/parmeter penampung arugment dari main program
*/

// function mySum(...nums:number[]) {
//   //kita buat res utk smua element array dgn lakuakn pejumlahan
//   //sluruhnay 
//   return nums.reduce((newValue,currValue)=> {
//    return newValue+
//   },0 )
// }

function mySum(...nums:number[]) {
  return nums.reduce((totalValue,curValue)=>{
    return totalValue+curValue;
  },0);
}

console.log(mySum(7,9,11.5,84.5,33.5))


//https://www.geeksforgeeks.org/javascript-rest-operator/
/*
dapat dari geeks for geeks jadi intinya rest parameter bantu function utk 
bisa masukin banyak argument sd tak hingga karna dgn bantuna (...variable) kdalam 
sbuah function sbafai parameter
contoh:
*/
function kali(...nums:number[]) {
return nums.reduce((totalValue,currValue)=>{
   return  totalValue*currValue;
},1)
}


const hasil = kali(1,2,3,4);
  console.log('hasil perkalian = ',hasil);