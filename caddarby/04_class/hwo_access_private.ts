/*
bagaian privte access senblumnya sudah kita tahu kita tidak bisa access
utk access private property dari luar kelas digunakan getter and setter


contoh clas Cusotmer dgn private property  firstname and lastname
kita akan accss dgn public method  dgn method getter
dan kita akan seting value baru utk properties tsb dgn method setter
sbb:
class Customer{

  private firstName :string;
  private lastName :string;
  
  note :getFirstnaem nama metodem ,dan :string adalah type-data kembalianya
  public getFirstname():string {
    return this.firstName;
  }

  public setFirstname(theFirst:string):void {
    this.firstName = theFirst;
  }
 terlihat utk setter setFirstName adalah nama setter metode
 ( theFirst:string adaah  parameternya dan paramtypenya )
 void adalah tiak ada kembaliannya krn sifatnya constcutor 
 isi nilai properties dgn parameter
}



*/


/*
/Accessor apa itu kita akan gunakan hal yg lebih mudah dan jamak tanpa harus 
//naut metode tapi dgn command set and get dan yg perlu dirubah adalah 
//beritahu adalah propeties atau vatiablenya harus dgn _variable 
/* jadi haris ada underscore di variable propertiesnya !
contoh : private _firstName:string;
         private _lastName;string;
    //get
       public firstName():string {
         return this._firstName;
       }

    //set   
       public set firstName(value:string) {
         return this,_firstName = value
       }



contoh dibawah Pasien
*/

//contoh mmnbuat accessor pada class yg propertynya private
//access modifier dibuat stlah  buat cosntructor 
class Pasien {

 private _name : string; //pngguanan _variableProperty  underscore kebiaaan developer oop!
 private _age :number;   //boleh tanpa undescore tapi ini sudah convention name
 private _address:string;

  //buat constructor
  constructor(theName:string,theAge:number,theAddress:string) {
    this._name = theName;
    this._age = theAge;
    this._address = theAddress;
  }


  //buat seter and getter
  //get set name
      public get name():string {
        return this._name
      }

      public set name(value:string){
        this._name = value;
      }
  //get set age
    public get age():number{
      return this._age ;
    }
    public set age(value:number) {
      this._age = value;
    }
    
  //get set address
    
     public get address():string{
      return this._address ;
    }
    public set address(value:string) {
      this._address = value;

    }

 
}

//pngunaanya kit ainstasiate kasih asign awa
let pasien1 = new Pasien('tuti',34,'jl,kalibokor 57');
let pasien2 = new Pasien('esa',88,'jl,gagal 333');

console.log(pasien1.address);

pasien1.address ='jl.sumatra 3';
console.log(pasien1.address);
console.log(pasien2.address);




/*
shortCut constructor di typescript biasanya cara tradisional sbb:

class Jadul {
  private _a;string;
  private _b:string;
  constructor(theA :string,theB:string) {
    this._a = theA;
    this._b = theB;
  }
//acessor set/get 

}

kita bisa singkat  tanpa harus buat properti dan constructorya terpisah
kit abisa buat dalam sbuah constructor saja dan kit amasukan propertoes kdalam parameter 
properties di construcotrnya sbb contohnya:

class Modern {
  constructor(private _a:string,private _b:string) {
    //accesor geter/setter
    //note :jadi utk this._a = a; dll ini sudah gak ada cukup parameter proprties mewakili 
    // private _a:string,private _b:string <---cukup ini saja ini disebut short cutnya 
  }
}
//kita coba di module/directory 4a







*/








