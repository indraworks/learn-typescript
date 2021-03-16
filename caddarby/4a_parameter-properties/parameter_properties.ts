
class Person {
  
  constructor(private _firstName:string,private _lastName:string) {
   
      
      }
       //accessor get/set
  get firstName():string {
  return this._firstName;
            
  }
   set firstName(value:string) {
       this._firstName = value;
  }   

}

//insansiate

let manusia1 = new Person('indra','Herlambang');
let manusia2 = new Person('Aki','Hirosima');

console.log(manusia1.firstName);
manusia1.firstName = 'gantiNama';
console.log(manusia1.firstName);



