<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Tutaj można umieścić logikę weryfikacji danych logowania
    // Na przykład, porównywanie z danymi w bazie danych
    if ($username === "admin" && $password === "password") {
        echo "Zalogowano pomyślnie!";
    } else {
        echo "Błąd logowania. Sprawdź nazwę użytkownika i hasło.";
    }
}
?>
