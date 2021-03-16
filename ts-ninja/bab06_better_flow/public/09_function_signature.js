"use strict";
/*
apa yang disebut function signature
jadi gini ini adalah type cara meng-init sbuah function
dgn paramteter memiliki masing2 jenis type datanya masing2
dan nanti keluaran atau kembalian dari function tersebut
apakah void atau dikembalikan dalam bentuk number,string,boolean
atau object
nah setelahnya bikin signamature barulah di assign valuenya '
nah nama parameter boleh brubah yg penting urutan dan type data nya
harus nurut sama signature atau initial awal

*/
//asal mula kita boleh nulis type data dari sbuah function sbb
var myFunc;
//cara lain init function terdiri dari 3 biasanya
//example signature a
//cara pertama init sbuah func 
//example 1 init tapi hasil functiom gak di kembalikan stlah tanda => void berarti tidak 
//ada nilai return 
var myexampleFunc;
//stlah buat signaturenya kita assign
myexampleFunc = function (kalimat1, kalimat2, kalimat3) {
    console.log(" hello ini " + kalimat1 + " dan ini kalimat2:" + kalimat2 + " dan ini " + kalimat3 + " ");
};
//kita panggil functionnya
//jadi sekali lagi harus ikut dari signaturenya gak bisa 
//ganti type data atau ubah kktika asign functionnya
myexampleFunc('hi indra', 30, 'puasa senin');
myexampleFunc(3, 4, 'sore2 hitung');
// example 2
//example yg kedua adalah hasil output dari function adalah return
// berupa number sbb:
var calc; //kit auda sign dng return sbuah number
//kita asign value berdasarkan tipe datanya
calc = function (angka1, angka2, tulisan) {
    if (tulisan === 'add') {
        return angka1 + angka2;
    }
    else {
        return angka1 - angka2;
    }
};
//kita panggil functionnya example 2
var myval = calc(1, 3, 'add');
console.log('hasil pemjumlahan = ', myval);
myval = calc(4, 8, "kurang");
console.log('hasil pengurangan = ', myval);
// example 3
//example adalah function sign utk object
//ini sama pengembalian bisa berupa void (tanpa kembalian) 
//atau berupa kembalian object/number/string 
//signatur atau inisial function berupa parameter object
//misal hasil return brupa object
var logdetails;
//kita assing value atau nilaiberdasarkan type datanya
logdetails = function (teknisi) {
    return teknisi;
};
//kita panggil utk digunakan function teknisi
var siswa = logdetails({ name: 'syakinah', activity: 'jaga rel kereta api', badge: 4 });
console.log('log detail syakinah =', siswa);
//kita tulis lagi :
logdetails = function (teknisi) {
    return teknisi;
};
var jeruk = { name: 'purwati', activity: 'makan', badge: 3 };
var hasil = logdetails(jeruk);
console.log('hasil =', hasil);
