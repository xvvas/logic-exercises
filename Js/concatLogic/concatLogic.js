function concatLogic(number1, number2, result,) {
    let sumOperation = number1 + number2;
    let calArg = result - sumOperation;
    let calResult = sumOperation + calArg;

    return  `Para calcular la concatenacion primero se debe sumar ${number1} y ${number2} y luego restar ${result} con el resultado de la suma anterior (${sumOperation}). luego si sumamos la suma inicial (${sumOperation}) con el resultado de la resta (${calArg}) obtenemos el resultado final (${calResult})`

}



console.log(concatLogic(5, 4, 19));