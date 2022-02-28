dict_num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
console.log('key','value','count')
var count=0;
for (i in dict_num){
    // console.log(dict_num [i])
    count+=1
    console.log(i,' ',dict_num[i],'  ',count)
}