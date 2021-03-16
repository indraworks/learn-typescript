/*
ini maksudnya dalah bahwa kit aakan lakukan dsctucting iyaitu dari object 
dimasaukan kedalam function anotations 
anotaiosn ( variable:tydatanya _variable)

*/
//desctructuing di function
//basicnya
const chanelTV = (name:string,chanel:number):void => {
  console.log(`we shonw daily our ${chanel} named:${name}`)
}

chanelTV('melody & memory',7)


//nah sekarng kit aakan masuikin object dan buat anotationnya di function gimana caranya
//akan tetap sama object: {anotaionya } sbb:ini ada object info kit aakan masukin 
//dia sbgai parameter di funct dan kita harus buat objt anotationsya sprti yg sblumnya
//agat dikenali typescript

const info = {
  name:'dunia dalam berita',
  chanel :8
}

const newChanelTv = (info:{name:string;chanel:number}):void => {
  console.log(`we shonw daily our ${info.chanel} named:${info.name}`)
}

newChanelTv(info)

//cara ke 3 agak di function dipanggil hanya chanel 
//dan name tanpa embel2 Info depanya
//jadi info -nya digantikan dgn {name,chanel} ,supaya lbih jelas sbb:
const myTV = ({name,chanel}:{name:string;chanel:number}):void => {
 console.log(`we shonw daily our ${chanel} named:${name}`)
}

myTV(info)

//esctructing di object

const Person = {
  
}












