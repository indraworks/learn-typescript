/*
di TS gimana forloopnya ,sma dgn js  tetap sama ga beda
for (i=0;i<10;i++) {
  console.log(i)
}
//contoh 1
*/
for(let i=0; i < 10;i++) {
  console.log(i)
}

//decklarasi array 
// let myarray :number[] =[1,2,3,4,5,6,7]
//contoh2 pemakaian array dan loop
let reviews :number[] =[3.5,1,7,10,66,4.7,2,9];
let total:number =0;

for(let i=0;i<reviews.length;i++){
  console.log(reviews[i])
  total +=reviews[i] //jumtotal disave di total variable
}

let average:number = total/reviews.length
console.log(`total reviews =${total} and average of reviews = ${average}`);





