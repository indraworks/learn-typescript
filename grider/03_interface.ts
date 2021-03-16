/*
apa itu interface?? mirip srti type 
bedanya kalau type itu pake = utk declarenya kalau interface tanpa =
interface x {} kalau type sbb :type y = {}

penjelasan :jadi gini dalam anotations sbuah function akan sangat 
panjang negisi variable dgn properites datanya 
utk itu dipisah saja di buat interface
ini contoh :
function printVehile( Vehicle:{name:string,
year:number,


})


*/
/////////////basic interface -01 /////////////////
//object 

// //type datanya 
// interface Vehicles {

//   name:string;
//   year:number;
//   broken:boolean
// }



// const oldCivic = {
//    name:'civic',
//    year:2000,
//    broken:true
// }

// //vehicle dlm '=()=>' adalah parameter yg mana typedatanya adalah Vehivle
// //oldcivic adlaah varibale yg punya typedata Vehicle dan memiliki value
// //dan memanfaatkan fucntion printVehicle utk mengeprit value2 yg ada padanya 

// const printVehicle=(vehicle:Vehicles):void=> {
//    console.log(`Name: ${vehicle.name}`);
//    console.log(`Year: ${vehicle.year}`);
//    console.log(`isBroken?: ${vehicle.broken}`);
// }

// //implenetation func

// printVehicle(oldCivic);


/////////////////// basic interface -02 //////////////////////////
//type2 interface bisa macem2 bisa array atau function jadi bukan hnya 
//typedata yg classic saja
//yg perlu digaris bawahi jika inerface datanya hanya usung 1 parameter sgn pasing 
//1 argument gak masalah utk iut kita beri contoh  sbb:

//interface Reportable hanya teridir dari variable yg typedatanya 
//adalah sbuah function yg hasilnya type datanya adalah string
interface Reportable {
  // name :string;
  // year: Date;
  // isbroken : true;
  summary():string; //pakai tanda variable() menandangkan dia function jgn lupa!!!
}

//trlihat arguemnt yg dimasukan ke parameter lebih sdikit
//akan tetapi tentu yg dilwwatkan hanya variable object summary saja!
//disini tiak ada error
const oldCivic2 = {
  name :' honda',
  year: new Date(),
  isbroken : true,
  summary():string {
    return `vehiclenames:${this.name}, year: ${this.year}, status-broken:${this.isbroken}`
  }


}

//ibject ke2 sbgai argument 
const drink = {
  name:'cola',
  netto:100,
  price:5000,
  summary():string {
    return `drink :${this.name} netto:${this.netto} price:${this.price}`
  }
}



//skrg kita buat fungsi dan parameter pelewat argument diatas
//parameter vehicle kit aganti dgn itemReport sbab paramtert passing
//argument yg hanya mwewakili summary dari argument vehicle thats make sense
const printSummary = (itemReport :Reportable):void => {
    console.log(itemReport.summary() )
}

//panggil fungsi yg kita buat dgn masukan aargument oldCivic2:
printSummary(oldCivic2)
//skrg ita bisa lewatkan drink sbgai argument ktrn memiliki type data yg sama
printSummary(drink)






/*
ksimulan kit abisa pakai fungsi(dlm contoh ini summary()) yg sama jika  masing2 object atau vriable memiliki 
type dari interface yg sama 
sbab kit abisa passing arument/object kita kepada fungsi yg mana menggunakan type data dari interface yg sama
here the diagram :
  reportable:(interface)
   tyedata: function():string   ----------->  dring( argument object) use typedata reprotable
            name sumary         ------------ > vehicle(argument object)


*/