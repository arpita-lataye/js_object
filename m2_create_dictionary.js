// Write a programme to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).


var b=require('readline-sync');
var n=b.questionInt('how many numbers:');
var s={};
for (i=1; i<=n; i++){
    s[i]=i**2
    // m.push({i:s})
}
console.log(s);