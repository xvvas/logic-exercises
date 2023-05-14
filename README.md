# logic-exercises
## Js
### Operación Matemática Oculta
#### Función `concatLogic`

Realiza operaciones matemáticas y devuelve una cadena de texto que describe los pasos realizados.

##### Lenguaje:

JavaScript

#####  Parámetros

- `number1` (number): El primer número a sumar.
- `number2` (number): El segundo número a sumar.
- `result` (number): El número con el que se va a restar la suma anterior.

#####  Devuelve

- (string): Cadena de texto que describe los pasos realizados en las operaciones.

#####  Ejemplo de Uso

```javascript
console.log(concatLogic(5, 4, 19));
Definición de la Función
javascript
Copy code
function concatLogic(number1, number2, result) {
  let sumOperation = number1 + number2;
  let calArg = result - sumOperation;
  let calResult = sumOperation + calArg;

  return `Para calcular la concatenacion primero se debe sumar ${number1} y ${number2} y luego restar ${result} con el resultado de la suma anterior (${sumOperation}). Luego, si sumamos la suma inicial (${sumOperation}) con el resultado de la resta (${calArg}), obtenemos el resultado final (${calResult}).`;
}
````


La función **concatLogic** toma tres parámetros: n**umber1, number2 y result**, que son números utilizados en las operaciones. Luego, realiza las siguientes operaciones:

Calcula la suma de **number1 y number2** y la guarda en la variable **sumOperation.**
Calcula la diferencia entre **result y sumOperation** y la guarda en la variable **calArg.**
Calcula la suma de **sumOperation y calArg** y la guarda en la variable calResult.
Devuelve una cadena de texto que describe los pasos realizados en las operaciones, utilizando los valores de los parámetros y las variables calculadas.
El resultado de ejecutar **console.log(concatLogic(5, 4, 19))** sería:

*Para calcular la concatenacion primero se debe sumar 5 y 4 y luego restar 19 con el resultado de la suma anterior (9). Luego, si sumamos la suma inicial (9) con el resultado de la resta (10), obtenemos el resultado final (19).*

Esta cadena de texto describe los pasos realizados en las operaciones dentro de la función.
