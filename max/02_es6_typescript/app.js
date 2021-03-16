/*
bedangya var dgn let di script gak jauh beda hanya kalau di vanila js yg bisas kita pakai
maka var dianggap global
kalau di ts dia akan sama dgn let krn dia adalah variable block scope
maksudnya slama masih di dlam {} dia hanya berlaku nilai variable tsb diluar scope {}
maka sudah gak bisa /gak brlaku nilai variable  lettsb

utk const adalah variable gak bisa diubah jika memakai const sttaemtne t
utk itu kita paling banter utk bisa flexible gnakan let
contoh sbb
*/
var userName = 'Indra';
//userName = 'komang ' // otomatis merah disorot pada saat ini krn gak bisa diubah kita // coment lagi
var age = 27;
age = 45; //gak ada error 
console.log('umur saya  =', age);
var result;
function add(num1, num2) {
    result = num1 + num2;
}
//console.log(result) kalau kita taruh diluar variable gak dikenali jadi mmg hanya dikalang {} 
//saja scope variable tsb kcuali let result diluar {} diknali dia!
console.log(result);
