# Quiz - JavaScript Basics

### Nombre completo: Ernesto Gilberto Valenzuela Gallardo
> 

-----------

## Self-Evaluation

#### Auto evaluación de los temas vistos en clase. Responde  a las siguientes preguntas sin utilizar ningun recurso para solucionarlas. Tu conocimiento es muy importante para nosotros. 

#### Objetivo de la evaluación: conocer que tanto haz aprendido sobre JavaScript y ver que temas se necesitan para una asesoria.

Reglas:

1. No googlear
2. No buscar en ningun libro
3. Realizarlo de forma individual

---

##### 1. ¿Qué es un algoritmo?

> Una serie ordenada y finita de instrucciones para lograr algo

##### 2. ¿Qué es un lenguaje de programación?

> Un conjunto de palabras e instrucciones que nos permiten decirle a la computadora lo que debe hacer de manera sencilla.

##### 3. Describe que es un tipo de dato:

> caracteristica que le dice al ordenador como almacenar y/o tratar cada dato que contiene un programa

##### 4. ¿Cuáles son los tipos de dato que conoces?

> En el caso de javascript number, string, boolean, NaN (aunque en el fondo es un number), null y undefined.


##### 6. ¿Qué es NaN?

> Un dato de tipo number que en realidad no contiene un numero (Not a Number)

##### 7. ¿Cual es el uso de `typeof`?

> Conocer el tipo de dato de un elemento

##### 8. ¿Cuál es la diferencia entre `==` y `===`?

> == se limita a comparar el valor mientras que === tambien compara el tipo de dato

##### 9. ¿Qué es una variable?

> Un espacio en memoria donde se almacena algun dato.

##### 10. ¿Qué es un statement?

> una expresion o conjunto de ellas que dan información al programa

##### 11. Del siguiente statement `a = b * 2` identifica sus partes _(literals, variables, operators)._

> a y b como variables, 2 como literal y * como operador

##### 12. ¿Qué es una expression?

> Se puede decir que es la unidad basica de informacion para crear un statement

##### 13. ¿Cuántas expressions puedes identificar del siguiente statement `a = b * 2;`?

> 4

##### 14. ¿Cuál es la diferencia entre lenguaje `interpreted` y `compiled`?

> el interpretado se lee mientras se va ejecutando mientras el compilado traduce todo a lenguaje maquina previo a la ejecucion

##### 15. Es JavaScript `interpreted` o `compiled`? Justifica tu respuesta.

> en teoria es interpretado aunque en cierta forma es compilado

##### 16. ¿Cuales son los tipos de comentarios en JavaScript?

> de linea con // y se bloque con /*+/

---------

## Sección Inténtalo tu mismo:

---

### Output Exercises.

Considera: `var a = 1;`

Escribe el código para:

##### 1 Imprimir `a` en consola:

> console.log(a)

##### 2. mostrar `a` en una alerta:

> alert(a)

### Input Exercises.

Pregunta al usuario su nombre con una función __prompt__ y que el mensaje diga: 
`"Porfavor, escribe tu nombre"` y guarda su nombre en una variable llamada `username`, después loguea el valor en consola

Solución:

```js
var username = prompt("Por favor, excribe tu nombre")
```

### Sección: Operadores

---

##### 1. Completa la oración:

JavaScript has both u___ and b___ operators, and one special t___ operator

> Unary, binary, ternary

##### 2. Tipos de Operadores

Nombre los _tipos de operadores_ que conoces, y da un ejemplo básico de cada uno que menciones:

> aritmeticos como +,-,*,/,%; logicos como &&, ||, !; de asignacion como =, +=, -=; de comparacion como >, <, >=, <=, ==, ===, !=, !==

##### 3. Describe el uso de los operadores aritméticos:

> Realizar calculos aritmeticos basicos


##### 4. ¿Qué es coercion en JS?

> El cambio automatico de tipo de dato


##### 5. ¿Es esto un código válido en JS?

```js
var amount = 100;

{
  amount = amount * 2;
  console.log(amount)
}
```

> Valido, imprimiria 200


### Estructuras de Control

##### 1. Describe que son y para que funcionan las estructuras de control:

> son estructuras par apoder realizar codigo que no corra de manera lineal nos ayuda a crear software mas robusto


##### 2. Realiza una estructura de control simple utilizando una condicion, si la condición se cumple, retorna true, en caso contrario, retorna false.

```js
var edad = 18;
//no se si era necesario en funcion pero como hablaba de retornar pues lo puse asi
function mayorEdad(){
  if(edad >= 18){
  return true;
}else{
  return false;
}
}

var mayor = mayorEdad()



```

##### 3. Escribe un bloque de código para validar si una variable `number` es menor que `10` para loguear `one digit`, de lo contrario, loguea `two digits`.

Solution:

```js
var number = 12;

if (number < 10){
  console.log("one digit")
} else{
  console.log("two digits")
}
```


### Ciclos

##### 1. Describe que es un ciclo y para que funcionan:

> una estructura de control repetitiva, para crear codigo que es necesario repetir o iterar de manera mas sencilla

##### 2. Realiza un ciclo for iterando el siguiente arreglo: var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:

```js
for(i=0; i < myArray.length; i++){
  console.log(myArray[i]) //para que haga algo
}
```


##### 3. Escribe un bloque de código para loguear los números de `0-9` usando `while` y  `do-while`  loops.

**`while`** solution:

```js
while(cont<10){
    console.log(cont)
    cont++
}
```

**`do-while`** solution:

```js
do{
    console.log(cont)
    cont++
}while(cont<10)
```

##### 4. ¿Cuales son las 3 clausulas de sintaxis para un `for` loop?

> inicializador de contador, condicion hasta cuando se repite, incremento o decremento del contador

### Sección: Functions

---

##### 1. ¿Qué es una función?

> un bloque de codigo que nos ayuda a reutilizarlo

##### 2 Escribe una función `sum` que reciba dos numberos como argumentos y que regrese la suma de ambos.

Solution:

```js
function sum(num1, num2) {
    return num1 + num2;
}
```

##### 3. ¿Qué es el scope en JavaScript?

> el ambito en el cual tiene alcance una variable, puede ser global o local.

##### 4. Responde `true` o `false` para las siguientes preguntas:

Consider:

```js
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
  }

  inner();
}

outer();
```

##### 5. ¿La función `inner` tiene acceso a al scope de la función `outer`?

> True

###### 6. ¿La función `outer` tiene acceso al scope de la función `inner`?

> False

## Section: Challenges

---

##### 1. Crea una funcion llamada `calculateAreaOfACircle` que reciba `radius` como parámetro. Usa una variable llamada `PI` igual a `3.14159`.

Solution:

```js
// crea la variable PI aqui
var PI = 3.14159

// crea tu funcion aqui
function calculateAreaOfACircle(radius){
  return PI*(radius*radius)
}

```

##### 2. Escribe una función que revierta el siguiente array

```js
var arr = [1,2,3,4]

function revArray(arr){
    var temp;
    for(var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length -1 -i];
        arr[arr.length -1 -i] = temp;
    }
}
```


##### 3. Escribe una funcion que compare dos arreglos y retorne true si son idénticos, retorna false en caso contrario.

```js
function compare(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    } else{
        for(i=0; i<arr1.length; i++){
            if (arr1[i] !== arr2[i]){
                return false;
            }
        }
    }
    return true;
}
```

