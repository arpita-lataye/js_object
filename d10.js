a={'c1': 'Red', 'c2': 'Green', 'c3':null}
var b=[];
for (i in a){
    console.log(i)
    if (a[i] !==null){
        // console.log(a[i])
        b.push({i:a[i]})
    }
}
console.log(b)