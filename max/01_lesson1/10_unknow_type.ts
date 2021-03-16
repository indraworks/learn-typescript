/*
bedanya dgn type data "any" apa?kalau unknown
kita ada option utk bikin if tanya apa sbnarnya 
data apa yg diisikan pertama kali /yg lainya dari situ 
baru kita bikin 
rujukan :https://stackoverflow.com/questions/35546421/how-to-get-a-variable-type-in-typescript

*/
let myAny :any;
let myUnknown :unknown;
let userInput:unknown; //diasign bgai unknown
let userName:string; //diasing sbagai 

userInput = 5;
userInput = "Max";
// userInput = myAny; //kalau userInput yg unknown jadi string dia gkpp
//tapi kalau type string,number djjadikan uknown maka gakbisa nolak !
//userName = myUnknown;
// console.log(typeof userInput)
// console.log(typeof userName)
// if( typeof userInput === 'string') {
//   console.log("typeOf userInput is string")
// } else {
//   console.log("typeOf userInput is unknown")
// }

userName = myAny;
console.log(typeof userName)

//jadi initinya kit abisa asign type unknow ini karena dia bisa berubah2 
//contoh diatas userInput pertama diisi  number  dia bisa terima karen dia unknow
//userinut kedua  diisi lagi jadi string nah skrg userinput type data asalah string 
//jadi userInput:number| string
//nah skrgn kit aada variable newvariable:string
//skrg kita copied dia dari userInput ke newvariable 
//newvariable = userInput tapi syarat kita haru scehck data userInput dulu alau ya baru bisa sbb:

if(typeof userInput === 'string') {
  userName = userInput //isi userInput 'Max dicopiekan ke userName
}else {
  userName = "iam still string!"
}
console.log(userName)



//utk type never sudah ada contohnya yaitu utk penanganna error dan itu 
//adalah kluar fdari program gak ada return




