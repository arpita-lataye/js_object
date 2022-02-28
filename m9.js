// Take 1 list and have some objects inside it as sample data given below, and create a new list with unique values and console the unique values list.

const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }];
var unique=[];
for (i of list){
    for (j in i){
        if (!unique.includes(i[j])){
            unique.push(i[j]);
        }
    }
}
console.log(unique)