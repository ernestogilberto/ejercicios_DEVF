/*
Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively*/

var arr = [3,4,6,1,5,2,9,10,23,12]

function lowGreatest (arr){
    arr.sort(function compareNumbers(a, b) {
        return a - b;
    })
    console.log(arr)
}

lowGreatest(arr)