<?php

function __autoload($className) {
    $className = str_replace("..", "", $className);

    require_once("classes/$className.php");
}

$member = new Member();
$member->setName('Участник', 'форума');

$shopper = new Shopper();
$shopper->setName('Покупатель', 'магазина');

$header = new PageHeader();
echo $header->render($member) . '<br>';
echo $header->render($shopper) . '<br>';
