/*
pertanyaan di TS func bisa sebagai types ,
ya bemar jadi kita declare anotationnya 
harus sama dgn variable2 yg dimiliki oleh function yg akan kita arefer
nah berupa apa function itu ??
dia berupa anomious function seprti ini :
(argument_1:type_data_argument_1 ,...argument_n"type_data-argument_n)=>variable_hasil;
contoh :
sblumnya aslinya kit abuat dulu sbuah function :

function add(num1:number,num2:number) {
  return num1+num2;
}


//kita buat typedata function:
(a:number,b:number)=>number    <---ini functionya ya :D
nah kit amasukan dalam sbuah variable misalkan contoh sbb:

let hasilAdd = (a:number,b:number)=>number; //ini artinya saya declare sbuah fungsi yg angota number
                                            //hasil olah number

//kita copied  function Add diatas ke hasilAdd yg mana dia ini variablenya type datanya adalah sbuah function
 
hasilAdd = add;
kita gunakan skrg hasilAdd 

console.log(hasilAdd)
*/




//