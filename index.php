<?php
// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов этого массива.

$arr = [5, -30, 7, 23, -4, -6];
$sum = 0;

foreach ($arr as $item) {
    if ($item > 0) {
        $sum += $item;
    }
}

echo $sum . '<br>';

$contSum = 0;

foreach ($arr as $item) {
    if ($item <= 0) {
        continue;
    }

    $contSum += $item;
}

echo $contSum;
