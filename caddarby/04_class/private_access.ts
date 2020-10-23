

class PrivatePerson {
  //adalah propertied harus ditulis 
  //varibale dan typedatanya 
  private myfirstName :string; 
  private mylastName:string;
  private myAge :number;
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
   
let person1 = new PrivatePerson('kurawa','babi');
let person2 = new PrivatePerson('anjing','kau');

person1.myfirstName = 'airlangga';
console.log(person1);
console.log(person2);

/*
acess modifier adalah pengakssesan propertied didalam class
public ini defaultnya bisa diakses tuk smua propertieds ddlm kelas
protected properties hnay dapat diaksse dlm kelas itu sndir dan subclassnya saja
prvate =propterty hany aksesable dalam classnya saja /curent class
contoh diatas kita buat private property firstname dan lastname 
kmudian kita beri asign baru akan terotlak !
Property 'myfirstName' is private and only accessible within class 'PrivatePerson'.
yg sungguh aneh walau di compile tsc dan error ,tapi nghasilkan file *.js ?? :))
sbnarnya gak boleh ini  sbab file js hasil dari tsc harus bnar ada jika compilation itu 100% tanpa error
artinya donot generate file js if thre is on Error!

kit abisa cegah dgn runing tsc --noEmitOnError namaFile.ts
*/


