/*
kit bisa membuat typeAliasjadi kalau dia panjag kompleks kita buat masukan 
kedalam type variablenya dulu nanti baru,dimplemantasi  variable :TypeAlias
pada bab 5 dibaahs literal type skrgn kit agunakan hal tsb ubah code tadi anaotations
merujuk apda aliasTypeData sbb


*/

//langkah1:buat type aliasnya 
type aliasLiteralTypes = number|string;
type textConvertions = 'as-text' | 'as-number';
;

//langkah 2 implementasikan :
function combine(
  input1:aliasLiteralTypes,
  input2:aliasLiteralTypes,
  resultConversion:textConvertions) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number'|| resultConversion ==='as-number') {
    result = +input1 + +input2; //ditambahkan +variable utk convert cast jaid number otomatis jik apilihan as-number
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