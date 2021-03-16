/*
disni diterangkan bagamana anotaitons pada object di TS
kita belajar desctructing ukt object2 literal bila di iplmeent diTS
*/

let Profile = {
  name:'indra',
  age:50,
  address:'jl.sumatra 27',
  mapPlace: function( lat:number,lng:number):void {
      this.lat = lat;
      this.lng = lng
      console.log('lat :',lat);
      console.log('long :',lng);
      
  },
  
  setAge(age:number):void {
    this.age = age;
    
  }
 

}

//kita skrg lakukan desctructiing caranya sbb 
//ini dbawah ini yg biasa di JS:
//const {age}  = Profile;
//kalau di ts maka tingga tambahkan {variable :type data}  

//kalau yg isinya juga object dalam object disbutkan dulu nama objectnya dan anak {}



//contoh yg biasa kita buat /yg sederhana

let Person: {
  namex:string,
  agex:number,
  ocupationx:string
} 
//kit acoba skrg utk disctructing


Person = {
  namex:'budi',
  agex:27,
  ocupationx:'engineer'
}
let {namex,agex,ocupationx}: {namex:string,agex:number,ocupationx:string} = Person;
//jadi kita gak perlu print lagi console.log(Person.namex) tapi console.log(namex)
namex = 'hello';
 console.log('namex skrg =',namex);
  console.log('namex lama =',namex);

//diset dan di print melalui funtion 
Profile.mapPlace(32.65,12.7776);
//dgn distruction bisa langsung name obejct anak di print
// console.log('hasil lat =',mapPlace.lat);
// console.log('hasil lng =',mapPlace.lng);
let {age}:{age:number} = Profile;
age = 28;
 Profile.age = 23;
console.log('age =',Profile.age);


console.log('age =',age); 
