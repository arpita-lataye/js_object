/* Write a program to convert a number
entered by the user into its corresponding
number in words. for example if the input
is 876 then the output should be ‘Eight
Seven Six’. */

var a=require('readline-sync');
var num=a.questionInt('Enter any number:')
numberNames = {0:'Zero',1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine'};
var result='';
    key=String(num)
    for (i of key){
       
    for (j in numberNames){   
    if (i==j){
    console.log(numberNames[j],end="")
    }
}
}


// numberNames = {0:'Zero',1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine'};
// for (i in numberNames){
//     console.log(numberNames[i])
// }

