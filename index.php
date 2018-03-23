<?php

session_start();

$_SESSION['test'] = 'Тестовая запись в сессию';

?>
<a href="session.php">перейти ко второй странице</a>
