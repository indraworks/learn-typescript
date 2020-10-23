
export class Person {
  
  constructor(private _firstName:string,private _lastName:string) {
   
      
      }
       //accessor get/set
  get firstName():string {
  return this._firstName;
            
  }
   set firstName(value:string) {
       this._firstName = value;
  }   

      //accessor get/set
  get lastName():string {
  return this._lastName;
            
  }
   set last_lastName(value:string) {
       this._lastName = value;
  }   

}



