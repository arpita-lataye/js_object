dict1 = {'Alex': ['subj1', 'subj2', 'subj3'], 'David': ['subj1', 'subj2']}
var count=0;
for (i in dict1){
    // console.log(dict1[i])
    for (j in dict1[i]){
        // console.log(dict1[i][j])
        count+=1
    }
}
console.log('total count of subject is:',count)