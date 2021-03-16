//asmsa dgn js tapi harus ditulis 
//atau dideclare dulu type daatanya 
//datau declare dulu type data variable yg akan d pakai


const character ='mario';
console.log(character);
const inputs = document.querySelectorAll('input'); //menseleksi sluruh isi dari 
//element input yg ada di html tampung di variable inputs
console.log(inputs)

//mengetahui isi sluruh isi input properties
inputs.forEach((input)=> {
  console.log("all properties tiap input",input)
} )

//compiler type scritp tidak akan mngeluarkan warning 
// apabila variable atau data parameter yang akan dipassing di argument 
// tidak dilabelli / atau di beri type datanya contoh function pi dibawah ini 
//akan kluar tanbda merah maka harus dibuat type data pada parameter di function tsb
// dari (inputdata) mejadi ( inputdata:number)
// var circ = function (diameter) {
//     return diameter * Math.PI;
// };
// console.log(circ(7.5));

console.log('test')