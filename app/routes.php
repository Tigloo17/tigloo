<?php

$route = new \Tigloo\Routing\RouteCollection();

// use Controller
// $route->get('/', \App\Controller\Home::class.'#accueil')->withName('home');

$route->get('/', function () {
    return 'Welcome home';
});