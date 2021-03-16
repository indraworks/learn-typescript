/*
di TS anotations sduah wajinb utk function argument harus ada anotations utk type data
dan jug anilai kebalian :value_of_return , bisa :number,:string atau 
bisa yg lainya atau bisa campur :string|number  ( lebih dari 1 type data pengaembalian
  jika gak ada return maka kita tinggal taruh :void )
  :void artinya nilai kembalian tidak ada atau :undefined
  jima terutlis :undefined maka dalam kalang function harus ada return;
  ini gak receomended jika gak ada kmbalian wajib :void itu saja  
 sbb:
*/

//function asli dgn ytypedata pngambalian number
function add(number1:number,number2:number):number {
  return number1 + number2;
}

//function yg panggil function utk cetak hasil pnjumlahan
//memasukan argument function add kdlam function primtAddResult
function printAddResult(num:number):void {
  console.log('hasil pmjunlahan =',num)
}

printAddResult(add(13,17));


