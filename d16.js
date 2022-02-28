/* Write a Bubble Sort algorithm in JavaScript.
Note: Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]*/

array=[6,4,0, 3,-2,1]
var is_sorted=false;
while (!is_sorted){
    is_sorted=true;
    for (n=0; n<array.length-1; n++){
        if(array[n]>array[n+1]){
            var x=array[n+1];
            array[n+1]=array[n];
            array[n]=x;
            is_sorted=false;
        }
    }
}
console.log(array)