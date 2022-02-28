// Write a program where it will combine given objects and give the result in 1 object, if it has the same properties add the values of it.


// a = { fruit: "apple" },
// b = { vegetable: "carrot" },
// food = Object.assign({}, a, b);

// console.log(food);

var dic1={1:10, 2:20}
var dic2={3:30,2:40}
var dic3={5:50,6:60};
for (i in dic1){
    if (i in dic2){
        dic2[i]=dic1[i]+dic2[i]
    } 
    else{
        dic2[i]=dic1[i]
    }
}
// console.log(dic2)
dic4=Object.assign({},dic2,dic3)
console.log(dic4)