<?php

$directory = dirname(__DIR__);
require $directory . DIRECTORY_SEPARATOR . 'vendor/autoload.php';

$app = new \Tigloo\Core\Application($directory, false);
$app->run();