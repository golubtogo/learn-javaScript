/**

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
//P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.



function powNumber(x, n){
    var result = x;
    for (var i = 1; i < n; i++){
        result = result * x;
    }
    return result;
}

var x = prompt('Введите x', '');
var n = prompt('Введите n', '');

if (n <= 1){
    alert('Степень' + n +
    'не поддерживается, введите целую степень, большую 1');
}
else {
    alert( powNumber(x,n) );
}

**/

