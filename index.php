<?php

try {
    $pdo = new PDO('mysql:host=localhost;dbname=gleb;charset=utf8', 'gleb', 'gleb');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Подключение успешно.';
} catch (PDOException $exception) {
    echo $exception->getMessage();
}

$sql = "SELECT id, username FROM slim_users ORDER BY username DESC";
$result = $pdo->query($sql);

while ($row = $result->fetch(PDO::FETCH_OBJ)) {
    var_dump($row);
//    echo "<p>".$row['id']." | ".$row['username']."</p>";
}

$users = ['user13', 'user14', 'user15'];
$sql = "INSERT INTO slim_users (username) VALUES (:user)";
$query = $pdo->prepare($sql);

foreach ($users as $user) {
    $query->bindParam('user', $user);
    $query->execute();
    $lastId = $pdo->lastInsertId();
    echo 'Пользователь '.$user.' вставлен с id = '.$lastId.'<br>';
}

