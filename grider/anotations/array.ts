/*

array ttp sama dgn js cara  variable : array_type [];


*/

type Cars =(string|number)[][];

let cars:Cars = [['cadilac',3],['mercy',1],['bajaj',6]];

console.log(cars[0]);
console.log(cars[1]);

//do inference when we do extracting from aarray as below

const carMarker = ['ford','toyota','chevy'];
const car = carMarker[0];
console.log(car);
const myCars = carMarker.pop();
console.log(myCars)

//prevent to put an ilegal typdate on array as below
//carMarker.push(200); //this will error cause an aarray type data all are string!


//we can get help from map,reduce,forEach etc from array 
//help with Map harus ada type data dsitiap variabel dlm map dan hasil kluaranya jugyga 
//anotasionya harsu ada /pair variabe/typdata hars ada
   carMarker.push('zuzuki');
  let myresultCar =carMarker.map((car:string):string=>(
    
    car.toUpperCase()
  ))
  console.log(myresultCar);

  //multiple typdata on single array 
  let myDate :(Date|string)[]



/// kita start dng array example dibawah ini  

let activeHobbies:string[];
let hobbiesx:string[]; 

 hobbiesx = ['Sports','Cooking'];
 activeHobbies =['Hiking'];
//kita mau masukan smua array hobies pada activeHobbies
activeHobbies.push(...hobbiesx);

console.log(activeHobbies);

// mencopy array sluruhnya kedalam variable baru 
//kita tidak menuliskan typdatanya tapi kita sbut ini sbgai 
// lawan anotaiton atau disebut sbgai inference nah ototmatis si ts akan 
//msndetup vaiable stb sbgai bertipedata 

const person = {
  name:'Max',
  age:30
}
const copiedPerson = {...person}; //kit acopied smua isi person array
console.log(person);


///////////Penggunaan reduce pada 