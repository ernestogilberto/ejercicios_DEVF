/*Crea una function que reciba un arreglo de enteros como parámetro, itera sobre el arreglo y suma los
valores del arreglo. Retorna el total.*/

var arr = [5, 6, 2, 19, 32, 21]

function arrSuma(arr) {
    var suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

console.log(arrSuma(arr));