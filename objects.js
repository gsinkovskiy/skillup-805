var user = {};             // Создайте пустой объект user.
user.name = 'Вася';        // Добавьте свойство name со значением Вася.
user.surname = 'Петров';   // Добавьте свойство surname со значением Петров.
console.log(user);

user.name = 'Сергей';      // Поменяйте значение name на Сергей.
console.log(user);

//delete user.name;          // Удалите свойство name из объекта.
console.log(user);

for (var key in user) {
//    alert('Свойство: ' + key + ', значение: ' + user[key]);
}

var goods = [5,3,72,734,51];

//alert(goods[goods.length - 1]);


var names = ['HTML', 'CSS', 'JavaScript'];

var lowers = names.map(function(name) {
    return name.toLowerCase();
});

alert( lowers.join(', ') );
