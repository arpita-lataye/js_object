var b=require('readline-sync');
var n=b.questionInt('enter the number:');
let m=(n%2==0)? (n,'is even number'):(n,'is odd number');
console.log(m)