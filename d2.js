// ''' write a python program to map two list into a dictionary.'''

var keys=['red','green','blue']
var values=['#ff0000','#008000','#0000ff']
var n={}
for (i in keys){
    n[keys[i]]=values[i]
}
console.log(n);