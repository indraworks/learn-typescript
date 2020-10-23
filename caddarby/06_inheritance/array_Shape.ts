import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(20,30);
let myCircle = new Circle(20,20,40);
let myRectangle = new Rectangle(13,14,15,16);

let kontol:Shape[] = []; //array kosong

//add all variable to the array 
kontol.push(myShape);
kontol.push(myCircle);
kontol.push(myRectangle);

for(let itemKontol of kontol) {
  console.log(itemKontol.getInfo())
}







/*
catatan kita bisa mmbuat sbuah typedata array dari superClass
import dulu smua module superclass dan subclass
buat instaiate dari superclass,subclass
buat array namavariable sebarang :typedata superclass[] =[] //sbuah array kosong
*/





