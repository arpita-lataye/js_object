z={'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
var m=[];
for (i in z){
    // console.log(z[i])
    for(j in z[i]){
        // console.log(z[i][j])
        if (z[i][j]%2===0){
            // console.log(z[i][j])
            m.push(z[i][j])
        }
    }
}
console.log(m)