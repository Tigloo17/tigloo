<?php

$directory = dirname(__DIR__);
require $directory . DIRECTORY_SEPARATOR . 'vendor/autoload.php';

$app = new \Tigloo\Base\Application($directory);
$app->run();