/* Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno */

n={red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
var d=[];
for (i in n){
    // console.log(i)
    d.push(i)
}
console.log(d)




m={red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
var k=[];
for (i in m){
    k.push(i)
    k.push(m[i])
}
console.log(k)