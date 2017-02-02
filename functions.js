/**
 * Created by nata on 2/2/17.
 */

//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
//1. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
function sumToRec(n) {
   if (n > 0) {
        return n + sumToRec(n-1)
    }
    else {
        return n;
   }
}

//sumToRec(4);


//2. С использованием цикла.

function sumToFor(n) {
var sum = 0;
    for (i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
//sumToFor(4);


//3. С использованием формулы для суммы арифметической прогрессии.

function sumToPr(n) {
    var a = 1;
 if (n > 1) {
    var sum = ( ( a + n ) / 2 ) * n
 }
    return sum;
}

//sumToPr(4);