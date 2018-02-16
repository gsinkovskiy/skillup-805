'use strict';

// Задание 3. Создайте ассоциативный массив свойство mas которое содержит массив
// чисел (любого количества), добавьте метод, который
// выводит сумму чисел содержащихся в mas.

var arr = {
    mas: [5, 6, 34, 12, 45]
};

arr.sum = function() {
    var res = 0;

    this.mas.forEach(function(value) {
        res += value;
    });

    return res;
};

alert('Sum: ' + arr.sum());
