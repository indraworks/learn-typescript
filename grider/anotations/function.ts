//pattern function di typescript


const add = (a:number,b:number):number => {
  return a+b;
}

//jadi seblah kanan dari => itu adalah function kita na notation adalah 
/*
(a:number,b:number):number  ---->dicheck ini apajkah :number nilai kembalian number atau tiak
--->kmudian check variable2 sudah punya typesama dgn yg ada di sblah kanan/implemenasi
penting kalau gak reutrn maka harus diberikan nilai :void 
bisa jug atidak ditulis 
jadi di sblahakan jika tidak ada return  maka yg bagian : ,harus :void


*/
//tanpa return bisa di ditulis
const subtract =(a:number,b:number) => {
  a+b;
}
//tanpa return bisa ditulis  mesti paka void
const subtract2 =(a:number,b:number):void => {
  a+b;
}

//jika tanpa variable
function divide(a:number,b:number):number {
  return a/b;
}
//penggunaan never adalah quit dari jalur program sblum 
//program selsai karna error
const throwError = (message:string):string =>{
 if(!message) {
   throw new Error(message)
 } 
 return message
}

//function di masukim object literal

let todayWeather = {
   date:new Date(),
   weather: 'sunny'
};

// 1)kita masukan obkect literal dan fungsi dan print :
// const logWeather =(forecast:{date:Date,weather:string}):void => {
//   console.log(forecast.date);
//   console.log(forecast.weather)
// }

//2.kit adestuctirng sperti e2015 dibawah :
//jadi ({destructingnya}:{})
const logWeather =({date,weather}:{date:Date,weather:string}):void => {
  console.log('Date :',date);
  console.log('Status :',weather);
}


//kita calling funcutionnya
logWeather(todayWeather) 

/*
kit abia ganti dgn es2015 yg atas
const logWeather =({date,weather}) => {
  console.log(date);
  console.log(weather);

}

*/

// type2 function yg dipakai di ts selain diatas
// maksudnya secara garis besar
// name funct
function smoke(x:number,y:number):number {
  return x+y;
}

//anomius func
const greet = function(a:number,b:number):number  {
   return a+b;
}

//optional func with void or return  sbb:
//

const voided=():void | number => {
  return 2
}



