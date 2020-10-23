//macam2 basic type di TS  antara lain type primitive
//ingat smua assign dilakuakn dgn huruf kecil kaltau tidak dianggap interface

//NUMBER
let angka: number = 227;
let harga: number = 3.5;

//STRING
//bisa juga ssnutkan string dlm variable sblumnya dgn ${}
let myname: string = 'indra';
let info: string = `tia hari dia ${myname} makan nasi +ayam`;
let myage: number = 33;
let info2: string = `ill be ${myage + 11} nex month `;
console.log(info2);

//BOOLEAN
let asnwer: boolean = true;
let employee: boolean = false;
let unmarried: boolean = true;

//ANY
//any ini tioe data mirip inference tapi depan ada kata any yg nanit boleh diubah2
//lagi tuk deklarasi selanjutnya

let myValue: any = 'harga sembako naik'; //decalare sbgai type any supaya open bisa diassign
//macam2 typedata

//tidak perlu dikasih let/atau relcaralagi cukup di assign value baru
//dgn type data yg baru
myValue = false;
myValue = {}; //object lietaral
myValue = () => {}; //sbuah function
myValue = 149254584906346; //number

//NULL and UNDEFINED
const secondValue: null = null;

const myUndef: undefined = undefined;
