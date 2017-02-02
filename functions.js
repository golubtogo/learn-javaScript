/**
 * Created by nata on 2/2/17.
 */
//Задача 1
//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
//Вариант 1. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
function sumToRec(n) {
   if (n > 0) {
        return n + sumToRec(n-1)
    }
    else {
        return n;
   }
}

//sumToRec(4);


//Вариант 2. С использованием цикла.

function sumToFor(n) {
var sum = 0;
    for (i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
//sumToFor(4);


//Вариант 3. С использованием формулы для суммы арифметической прогрессии.

function sumToPr(n) {
    var a = 1;
 if (n > 1) {
    var sum = ( ( a + n ) / 2 ) * n
 }
    return sum;
}

//sumToPr(4);


// Задача 2. Написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
function factorial(n) {
    if ( n > 1 ) {
        return n * factorial( n - 1 );
    } else {
        return n;
    }
}

//factorial(5);

// Задача 3. Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
//Вариант 1. Стандартный
function fib(n) {
    if ( n > 1 ){
        return fib( n - 1 ) + fib( n - 2 );
    }
    else {
        return n;
    }
}

//fib(7);

// Вариант 2. С запоминаем значений в масив

var arr = [];

function fibArr(n) {
    var result;
    if ( arr[n] != undefined ) {
        result = arr[n];
    }
    else {
        result = n < 2? n : fibArr( n - 1 ) + fibArr( n - 2 );
        arr[n] = result;
    }
    return result;
}

//fibArr(7);



















