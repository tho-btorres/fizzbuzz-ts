# FizzBuzz TDD Kata

## Descripción

## Reglas de FizzBuzz

1. Escribir una función que tome un número del 1 al 100.
2. Para múltiplos de 3, la función debe devolver "Fizz".
3. Para múltiplos de 5, la función debe devolver "Buzz".
4. Para múltiplos de 3 y 5, la función debe devolver "FizzBuzz".
5. Para todos los demás números, la función debe devolver el número mismo.

Por ejemplo, dados los números del 1 al 15 en orden, la función devolvería:
```shell
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

## Pasos para la Kata

1. **Escribir una prueba fallida**: Comienza escribiendo una prueba que falle, describiendo el comportamiento que deseas implementar.
2. **Hacer pasar la prueba**: Escribe el código mínimo necesario para que la prueba pase.
3. **Refactorizar**: Limpia el código, asegurándote de que todas las pruebas continúen pasando.
4. **Repetir**: Continúa con el siguiente comportamiento, siguiendo el ciclo de TDD.



### Extensión opcional
Una versión del juego FizzBuzz en la vida real agrega un Fizz o Buzz adicional cada vez que uno de los dígitos ('3' o '5') aparece en el número mismo 

Entonces, '3' se convertiría en FizzFizz, '5' se convertiría en BuzzBuzz, '15' sería FizzBuzzBuzz.

Modifique su programa para reflejar este requisito mientras mantiene su disciplina en el uso de ciclos de refactorización rojo-verde.