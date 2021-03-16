import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

/////main program //////////////////
//instatiate

let myShape = new Shape(30,60);

console.log(myShape.getInfo());
let myCircle = new Circle(12,13,17);
console.log(`nilai getInfo dari circle : ${myCircle.getInfoCircle()}`);
console.log(`nilai dari luas Circle : ${myCircle.getLuasCircle()}`);
//
let myRectangle = new Rectangle(10,20,45,90);
console.log(`nilai properties rectangle dari Shape ; ${myRectangle.getInfo()} `);
console.log(`nilai properties rectangle dari Rectangle ; ${myRectangle.getInfoRectangle()} `);
console.log(`nilai luas rectangle dari diri sendiri : ${myRectangle.getLuasRectangle()}`)







/*
catatan tentang inhertiance jadi begini kita akan buat sbuah superclass nah 
superclass ini baik properties dan methodenya bisa di turunkan ke anak 
dgn cara :
1.import module superClass
2.utk construtornya/propertiesnya  kita panggul  super(varibale2 superclass)
dan utk metodenya kita bisa panggil dgn panggil nama metode super class



*/