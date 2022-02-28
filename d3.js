// write a python program to create and display all combinations of letters, selecting each letter from a different key in a dictionary.

q={'b':['a','b'],'c':['d','e']};
var l=[];
for (i in q){
    for (j in q[i]){
        l.push(q[i][j])
    }
}
console.log(l)
for (i=0; i<l.length-2; i++){
    console.log(l[i],l[2])
    console.log(l[i],l[3])
}
