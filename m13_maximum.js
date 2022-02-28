// Write a programme to find the 3 maximum values of an object and print them.

var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }

var max=0;
for (i in my_dict){
    if (my_dict[i]>max){
        max=my_dict[i]
        s=i
    }
}
console.log(max)
delete my_dict[s]

var smax=0;
for (i in my_dict){
    if (my_dict[i]>smax){
        smax=my_dict[i]
        h=i
    }
}
console.log(smax)
delete (my_dict[h])

var tmax=0;
for (i in my_dict){
    if (my_dict[i]>tmax){
        tmax=my_dict[i]
    }
}
console.log(tmax)