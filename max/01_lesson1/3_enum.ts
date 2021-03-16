/*
enumaris merupakan tipe data di ts dimana sintak enum {NEW,OLD}
added by ts automaticly enumerated global constant identifier
kita mulai dulu di javascript 
kalau di javascript kita harus tulis consntantnya dulu 
baru nanti dgn if utk cari tahu  mis role sbuah user apakah dia ADMIN,READ_OLY atau AUTHOR
kita buat const nya tapi di TS kit atinggal buat type data kita yaitu enum
enum role = {ADMIN,READ_ONLY,AUTHOR} dijlakan dibawha kita mualai di jsnya
*/
/// js dulu kalau enumarate typedata blum ada 
// const ADMIN =2;
// const READ_ONLY =0;
// const AUTHOR =1;

// You don't declare type arrays like that. Declare your type as a singular entity. Then when you want to use that type as an array, do TYPE[]
// using your code
// type User = { name: string; age: number; role: Role; };
// const users: User[] = [...]
//jadi ingat kalau kit adeclare kita mesti singular nah baru pas impleennt pake aarrainya 
//dgn nama type tadi !

enum Role {ADMIN,READ_ONLY,AUTHOR};
/*
itu defaultnya 0,1,2 tapi bisa kita asign dengan itungan kita sndiri perindividue 
bisa jug akit aassgin dgn string mis ADMIN ='ADMIN'
atau bisa kita construct mulai urut 5
enum ROle {ADMIN =5,READ_ONLY,AUTHOR}

*/


//declare 
type Users ={
   name:string;
   age:number;
   role:Role //role mmberitahu declare tipe datanya adalah enumerate Role
 }


//implement
const users:Users[] = [
 {
  name:'Indra',
  age :28,
  role:Role.ADMIN
 },
 {
  name:'Lucky',
  age :19,
  role:Role.READ_ONLY
 }
 ,{
  name:'Yenni',
  age :14,
  role:Role.AUTHOR
 }

]
if (users[1].role == 1 ) {
  console.log('your are admin')
}
console.log(users[1].role)







