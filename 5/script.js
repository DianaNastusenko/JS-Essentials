// a() => 5
function a() {
    return 5;
}

//b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10
function b(a, c) {
    return a + c;
}

//c(2,2) => 4, c(3,3) => 27, b(4,5) => 1024
function c(a, b) {
    return Math.pow(a, b);
}

//d(1) => {a:1}, b(123) => {a:123}
function d(prop) {
    var Obj = {
        a: prop
    };
    return Obj;
}


//e(55)() => 55, e(123)() => 123
function e(a) {
    return function() {
        return a;
    }
}

/*f(1,3) => [1,1,1], b('x',5) => ['x','x','x','x','x'], b(-1,2) => [-1,-1], typeof a() => object (array)*/
function f(a, b) {
    var arr = [];
    if (b > 0) {
        for (var i = 0; i < b; i++) {
            arr.push(a);
        }
    } else alert('Error! b must be more then 0');
    return arr;
}

//g() => 99, b(1) => 1, b(2) => 2, b(3) => 3, b(99) => 99, typeof a() => number
function g(a) {
    if (a) {
        return a;
    } else {
        return 99;
    }
}

//h(function(){return 5}) => 5, h(function(){return 123}) => 123, typeof a() => number
function h(func) {
    return func();
}

//j([1,2,3]) => 6, j([12,34,56]) => 102, typeof a() => number
function j(array = []) {
    return array[0] + array[1] + array[2];
}

//k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137, typeof a() => number
function k(obj) {
    var summ = 0;
    for (var prop in obj) {
        summ += obj[prop];
    }
    return summ;
}

//m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2], typeof a() => object (array)
function m(arr1, arr2) {
    var resultArr = [];
    for (var i = 0; i < arr1.length; i++) {
        resultArr[i] = arr1[i] + arr2[i];
    }
    return resultArr;
}


//n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2, typeof a() => number
function n(x) {
    return function x(y) {
        return funtion y(z) {
            return x + y + z;
        };
    };
}