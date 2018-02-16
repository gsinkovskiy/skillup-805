// Задание 4. Создайте массив, ключами которого служат артикулы товара (любое пятизначное число),
// а значениями – ассоциативный массив, который содержит название товара, стоимость, вес единицы товара,
// ссылку на изображение, отметку о доступности товара на складе.
//
// Выведите массив в консоль. Выведите на страницу HTML описание первого товара.

var results = document.getElementById('results'),
    products = {
    '12345': {
        name: 'Товар 1',
        price: 2000,
        weight: 3,
        image: 'http://placehold.it/300x300',
        isAvailable: true
    },
    '12346': {
        name: 'Товар 2',
        price: 1000,
        weight: 5,
        image: 'http://placehold.it/350x300',
        isAvailable: false
    },
    '12348': {
        name: 'Товар 4',
        price: 2050,
        weight: 1,
        image: 'http://placehold.it/100x300',
        isAvailable: true
    }
};

console.log(products);
for ( art in products ) {
    results.innerHTML += 'Название: ' + products[art].name + '<br>';
    results.innerHTML += 'Стоимость: ' + products[art].price + '<br>';
    results.innerHTML += 'Вес: ' + products[art].weight + '<br>';
    results.innerHTML += 'Фото: <img src="' + products[art].image + '"><br>';
    results.innerHTML += 'Есть в наличии: ' + (products[art].isAvailable ? 'Да' : 'Нет') + '<br>';
    results.innerHTML += '<hr>';
}
