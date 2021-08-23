# JS Closures / Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> undefined y 2, la razón es que var a está declarada despues de que se manda al console.log, y al estar dentro de una función no es enviada al ambito global, y el 2 si se imprime ya que es un valor retornado por la función.


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> firstResult termina almacenando la función otherFunction. result termina con el valor de 5 retornado por otherFunction.

3. What is the result of the following code? Explain your answer.
  ```js
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;
  
  console.log(test());
  ```
> "Aurelio de Rosa" para el primer console.log y "John Doe" para el segundo. La razón es el uso de this, que en este caso nos marca el ambito del cual se tomara el valor y aunque la función es la misma el lugar donde se llama determina cual sera el valor que tomara fullname, el del objeto prop para el primero y el global para el segundo.

4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {}
      console.log(a)
  } 
  b(); 
  console.log(a);    
  ```

> 1 ya que está imprimiendo la var a que está declarada al inicio.