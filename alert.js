"use strict";
// Объявите две переменные: admin и name.
//     Запишите в name строку "Василий".
//     Скопируйте значение из name в admin.
//     Выведите admin (должно вывести «Василий»).

/*  Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. */
function sqr(number)
{
    return number * number;
}

/* результат в консоль браузера */
console.log('Квадрат 9 = ' + sqr(9));

/* Сделайте функцию, которая возвращает сумму двух чисел.  */
function sum(number1, number2)
{
    return number1 + number2;
}

/* результат в элемент на странице */
var resultP = document.getElementById('results');

resultP.innerHTML = '2 + 15 = ' + sum(2, 15);


/* Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке. */
function dayOfWeek(day)
{
    switch (day) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
    }

    return 'Wrong day!';
}

resultP.innerHTML += '<br>';
resultP.innerHTML += 'День недели (2): ' + dayOfWeek(2);
resultP.innerHTML += '<br>';
resultP.innerHTML += 'День недели (-20): ' + dayOfWeek(-20);

function factorial(value) {
    var ret;

    if (value < 1) {
        ret = null;
    } else if (value == 1) {
        ret = 1;
    } else {
        ret = value * factorial(value - 1)
    }

    return ret;
}

resultP.innerHTML += '<br>';
resultP.innerHTML += 'Факториал 5: ' + factorial(prompt('Введите число'));
