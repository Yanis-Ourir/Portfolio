<?php

if (isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];
    header("Location: localhost:3000");
} else {
    echo "Veuillez remplir tous les champs";
}
