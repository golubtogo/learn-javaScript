/**

alert( 'Я – JavaScript!' );

var admin = "Василий";
var name = "Василий";

alert(admin);

__________________

var planet = "Земля";
var client ="Петя";

alert(8 % 3);
------------------

var name = prompt("Введите ваше имя");
alert(name);

-----------------

var questionJavaScript = prompt("«Каково «официальное» название JavaScript?");
    if (questionJavaScript == "ECMAScript") {
        alert("Верно!");
        }
    else {
        alert("Не знаете ? 'ECMAScript'!");
        }

-------------------

var questionNamber = prompt("Введите число");
    if (questionNamber > 0) {
        alert("1");
    }
    else if (questionNamber < 0){
        alert("-1");
    }
    else if (questionNamber == 0) {
        alert('0');
    }
    else
        alert('Это не число!');

---------------------------

var login = prompt("Введите Ваш логин", "админ");
var password

    if (login == null) {
            alert("Отмена входа");
    }else {
        if (login != "админ") {
            alert('Я вас не знаю!')
        }
        else{
        password = prompt("Введите пароль")
        }
    }
    if (password == '1234'){
        alert('Добро пожаловть!')
    }

-------------------------


if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}


result = (a + b < 4) ? 'Мало' : 'Много';

-----------------

var message;

if (login == 'Вася') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}



message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор' ) ? 'Здравствуйте' :
        (login == '')    ? 'Нет логина' :
        '';

-------------------



if (age >= 14 && age <= 90);

_____

if (!( age >= 14 && age <= 90 ));
if (age < 14 || age > 90);

------


for (var i = 2; i <= 10; ++i){
    if (i % 2 == 0) continue;
    alert(i);
}

-------


var i = 0;
while (i<3) {
    alert("Номер " + i + '!');
    i++;
}

-----

var number = prompt("Введите число больше 100");
do {
    if (!number) break;
    else if ( number > 100)
    {
        alert(prompt("Введите еще раз"));
    }
}while (number < 100);

-------


for ( var number = 1; number < 100 && number !=null; ) {
    number = prompt("Ведите число больше 100:");
}

 if (num % num && num % 1);
----

for (var i = 1; i <= 10; ++i){
    if (i % 2 == 0) continue;
    alert(i);
}
------

SimpleNumber: for (var i = 2; i < 10; i++){
      for (var j = 2; j < i; j++) {
          if (i % j == 0) continue SimpleNumber;
      }
    alert(i);
}

------

var browser = prompt("Какой у вас браузер?");
    if (browser == 'IE') {
        alert("О, да у вас IE!")
    }
    else if (browser == 'Chrome' ||
 browser == 'Firefox' ||
 browser == 'Safari' ||
 browser == 'Opera'){
        alert( 'Да, и эти браузеры мы поддерживаем' );
    }
    else {
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
    }


------------

var a = prompt('a?', '');

switch(a){
    case '0':
        alert(0);
        break;
    case '1':
        alert(1);
        break;
    case '2':
    case '3':
        alert('2,3');
        break;
}

-------------


var num = 11;
var simple = true;

for (var div = 2; div < num; div++) {
    if (num % div === 0) {
        simple = false;
        break;
    }
}
alert(simple);
 
 ________

function isSimple(num) {
    var result = true;
    for ( var div = 2; div < num; div++ ) {
        if ( num % div === 0) {
            result = false;
            break;
        }
    }

    return result;
}

for ( var num = 1; num < 10; num++ ) {
  if ( isSimple(num) ) {
      alert(num);
  }
}

 -------

function checkAge(age){
    return (age > 18) ? true : confirm("Родители разрешили?");
}
alert ( checkAge() );


 ------


function checkAge(age){
    return (age > 18) || confirm("Родители разрешили?");
}
alert ( checkAge() );


**/

function showMin( a,b ) {
    if ( a < b ) {
        return (a);
    }
    else {
        return (b);
    }

}

alert ( showMin(34,5) );


























