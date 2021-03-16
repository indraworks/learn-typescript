

class Person {
  //adalah propertied harus ditulis 
  //varibale dan typedatanya 
  myfirstName :string; 
  mylastName:string;
  // myAge :number;
   //firstname :string,lastname:string adalah variable parameter sbrang nama 
   //mis anjing tahi kontol trserah !
   //didalam kalang kosntrucktor wajib :
   ////yg jelas this.properties = param !
 constructor(tahi :string,kontol:string) { 
   this.myfirstName = tahi; //yg jelas this.properties = param !
   this.mylastName = kontol;
 }
 


}
////skrng kita instansiate
   
let tamu1 = new Person('kurawa','babi');
let tamu2 = new Person('anjing','kau');

console.log(tamu1);
console.log(tamu2);

/*
acess modifier adalah pengakssesan propertied didalam class
public ini defaultnya bisa diakses tuk smua propertieds ddlm kelas
protected properties hnay dapat diaksse dlm kelas itu sndir dan subclassnya saja
prvate =propterty hany aksesable dalam classnya saja /curent class




*/


