// You need to count the number of occurrences of each unique character of a word "MISSISSIPPI" and store them in an object in key, value pairs.

const word='MISSISSIPPI'
const list1=[];
let o={};
for (i of word){
    if (list1.includes(i)){
        o[i]=o[i]+1
    }
    else{
        list1.push(i);
        o[i]=1;
    }
}
console.log(o);