/*
kadang kita buat suatu functon yang hasilnya berupa satu type saja yaitu number
nah suapay bisa flexible kit abisa mggunakan input argument baik itu string | number
dan hasilmya pun bole string|argument gak masalah

*/

/// pembahasan bagain 1
// function combine(input1:number|string,input2:number|string) {
//   let result;
//   if(typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const resultCombine = combine('Andrea',57)

// console.log('hasil result1 +result2 =',resultCombine)

// const resultCombineX = combine(35.123,57)

// console.log('hasil result1 +result2 =',resultCombineX)

// pembahasan bagian 2 :tambahan utk 3rd Party
function combine(
  input1:number|string,
  input2:number|string,
  resultConversion:string) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number'|| resultConversion ==='as-number') {
    result = +input1 + +input2; //ditambahkan +variable utk convert cast jaid number otomatis
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const resultCombine = combine('Andrea',57,'as-text')

console.log('hasil result1 +result2 =',resultCombine)

const resultCombineX = combine(35.123,57,'as-number')

console.log('hasil result1 +result2 =',resultCombineX)

//jika string semua 
const resultCombineY = combine('15','12','as-number')

console.log('hasil result1 +result2 =',resultCombineY)
//jika as kata2
const resultCombineZ = combine('indra',' handsome','as-text')

console.log('hasil result1 +result2 =',resultCombineZ)

//intinya bahwasnaya variable bisa mendklarasikan dirinya itu sbgai lebih dari 1 type data
//seprti contoh diatas mis const a :number | String; jadi bila diisi string atau number dia tidak eror
