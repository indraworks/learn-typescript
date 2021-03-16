//disni di terangkan tetang data array
/*
jadi typedata yg di declare inisilisasi  langsng bisa diisi dgn sesuai data yg diinisialisasi
jika tidak sama dgn yg diinisialisasi akan terjadi error tidak bisa di compile
oleh ts compilernya

*/
//contoh inistialisasi array number
var myArrayNumber = [1, 2, 3, 4, 5, 6, 7];
//juka kita unshif dgn 'sembako' maka erorr merah compilernya sbb 
// initialisasi data sudah number
console.log('sebelum =', myArrayNumber);
myArrayNumber.unshift(4);
console.log('sesudah =', myArrayNumber);
//akan error jika dimasukan baik push / unshift jika type data = string atau selain dari 
// number
//myArrayNumber.push('jaka sembung') akan error warning pada compiler'string..bla bla 
//jadi sblumnya haru di initialisasi delcare dulu typedatanya ,kalau misalkan pada 
//saat inisialisasi type data diatas adalaj number dan string maka gak msalah 
// jika dimasukan atau di edit salah satu element di array tsb dgn tipe data 
//number atau string contoh dibawha inisialisasi typedata string dan number
//
var myArrayStrNbr = [1, "pring", 345, 'levis', 'motor', 8, 9];
myArrayStrNbr.push(200);
myArrayStrNbr[2] = "kangkung";
console.log('arrayString Number after=', myArrayStrNbr);
myArrayStrNbr.unshift('bima sakti');
console.log('arrayString Number after unshift=', myArrayStrNbr);
myArrayStrNbr.unshift('kera sakti');
console.log('arrayString Number after push=', myArrayStrNbr);
//berbicara tentang objecy kalau object hmpir sama dgn array
//jadi dari inisialisasinya isi objectm properti type datanya apa ? nnti ngisinya harus sesiao
//diisikan dielement2 tsb baik yg mau diubah atau ditambahkan 
//element2 dari object type datanya akan beda2 masing2 
//jadi kalau object sudah di inisialisasi maka baik structure atau typedata 
//tidak bisa lagi diubah !
var myObjSiswa = {
    id: 1,
    name: 'indra',
    address: 'jl.Patimura 1',
    grade: 'A'
};
myObjSiswa.name = "Muhamad Sakti";
console.log("namanya berubah ", myObjSiswa);
//contoh saya mau tambah property skills di object MyObjSiswa 
//tidak bisa sbb sudah diinisialisasi
// myObjSiswa = {
//   id:2,
//   name:'Yoshi',
//   address:'jlgithub',
//   grade:'B',
//   skills:'Java'//compiler berwarna merah dibawah skill nolak utk nabmah properti
// }
