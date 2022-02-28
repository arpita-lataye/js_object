a={"f":12,"g":45,"h":56,"e":34}
var min=a["f"];
for (i in a){
    if (a[i]<min){
        min=a[i]
    }
}
console.log(min)