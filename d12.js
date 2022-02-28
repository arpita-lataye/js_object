/*Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder. */

var n=require('readline-sync');
var height=n.question('enter height of cylinder:');
var diameter=n.question('enter diameter of a cylinder:');
var radius=diameter/2;
console.log('volume of cylinder is:',height*Math.PI*radius*radius)