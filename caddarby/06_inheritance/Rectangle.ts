import {Shape} from './Shape';

export class Rectangle extends Shape {
    
  
  //paramater property
   constructor(theX : number,theY:number,private _recLength: number,private _recWidth: number){
    super(theX,theY);
   }
  //accecor getter setter
  public get recLength(): number {
     return this._recLength;
   }
   public set recLength(value: number) {
     this._recLength = value;
   }
  public get recWidth(): number {
    return this._recWidth;
  }
  public set recWidth(value: number) {
    this._recWidth = value;
  }
  //pangil super.getinfo dri shape
  
  getInfoRectangle() {
    return super.getInfo() + ` ,width = ${this._recWidth},length = ${this._recLength}`;
  }
  getLuasRectangle() {
    let luasRec = this._recLength * this._recWidth;
    return `luas Rectangle = ${luasRec}`
  }

}


/*
 //cara generate getter and setter biar gak cape
   //sorot di contrcutor private _variable:type_data kmudian 
   //ctrl+ tunggu icon kiri biru kluar trus tinggla click
   //pilihanya/dipilih generate seter geter


*/