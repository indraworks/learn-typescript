"use strict";
//menginit/delare variable user1 bertype Person yg mrupakan object
let user1;
//mengiis variable 1 ;
user1 = {
    name: 'indra',
    age: 40,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
//kita implment 
user1.greet('hi there iam ');
//kita skrng signature dan assign isPerson interface pada variable me
let me; //ini signature bahwa me diinisialisai memiliki type IsPerson
//nah stlah signature / initialisasi maka kita  assign dgn value 
//sesuai type data pada type yg ada di interface IsPerson
me = {
    name: 'suryawan',
    age: 40,
    speak(text) {
        console.log(text);
    },
    spend(num) {
        console.log(`i have spend money: ${num}`);
        return num;
    }
};
//kita apikasikan 
me.speak(`halo nama saya ${me.name}`);
//kita signature dan assing di variable f
const f = {
    name: 'rujak cingur',
    age: 30,
    skills: ['karete', 'silat', 'judo'],
    info() {
        return `info atlete: name:${f.name} usia:${f.age} skills:${f.skills}`;
    }
};
console.log(f.info());
//bagaiman kalau dimasukan di function interface ini sbgai tipe
// sama jug abuat signature/initial dulu 
//baru kemudina panggil funcnya 
//contoh intinya harus memiliki structure yg sama dgn yg ada di interface
//yg dijadikan type oleh function tsb
//saya signature dulu 
//jadi person adalah passing parameter yg mmepunyai type structure
// dari isPerson interface utk itu ya kita masukan sluruh isi sturctur interface
const myFuncPerson = (person) => {
    console.log(person);
};
//saya pake/assign
myFuncPerson({
    name: 'Tiara',
    age: 26,
    speak(text = "lazzy programmer") {
        console.log('lazy');
    },
    spend(num = 200) {
        console.log(`i have spend money: ${num}`);
        return num;
    }
});
myFuncPerson(me); //measukan sluruh object yg sudah di assign sesua type data kedalam 
//varibale me dan di pasing ke myFUncPerson
//intinya kalau interface jadi type ya smua structure object dalam 
//interface itu harus di assign/di implementasikan dalam function structure
//gak bisa salah satu hilang harus lengkap
//next impl interface kedalam class
