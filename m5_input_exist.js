var a=require('readline-sync');
var n=a.question('enter input to check:');
let dict={"name":"raju","matrks":56};
for (i in dict){
    if (i==n){
        console.log('exists');
        break
    }
    else{
        console.log('not exist')
        break
    }
}