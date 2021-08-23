/*1. Write a JavaScript program to list the properties of a JavaScript object.
    Sample object:*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
let studentKeys = Object.keys(student)
console.log(studentKeys);

// Sample Output: name,sclass,rollno