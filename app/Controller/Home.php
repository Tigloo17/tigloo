<?php

namespace App\Controller;


use Tigloo\Controller\AbstractController;


class Home extends AbstractController
{
    public function accueil()
    {
        return $this->render('home.twig');
    }
}