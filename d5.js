// Write a Python program to convert a list into a nested dictionary of keys.
// num_list = [1, 2, 3, 4]
// Sample output:
// {1: {2: {3: {4: {}}}}}

num_list = [1, 2, 3, 4]
dict=current={};
for (i in num_list){
    current[i]={}
    current=current[i]
}
console.log(dict)