/**
 * Created by nata on 1/31/17.
 */

var arr = [];

function f(n) {
    var result;

    if ( arr[n] != undefined ) {
        result = arr[n];
    } else {
        result =  n < 2 ? n : f(n-1) + f(n-2);
        arr[n] = result;
    }

    return result;
}

f(100);
