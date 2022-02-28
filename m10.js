// Take 10 student inputs and marks and save them in an object.

var a=require('readline-sync');
var students={};
for (i=0; i<10; i++){
    var name=a.question('enter student name:');
    var marks=a.questionInt('enter student marks:');
    students[name]=marks;
}
console.log(students);