<?php
$host = 'adres_hosta'; // np. localhost
$user = 'nazwa_użytkownika'; // nazwa użytkownika bazy danych
$password = 'hasło'; // hasło użytkownika bazy danych
$database = 'nazwa_bazy_danych'; // nazwa bazy danych

// Nawiązanie połączenia z bazą danych
$connection = mysqli_connect($host, $user, $password, $database);

// Sprawdzenie połączenia
if (!$connection) {
    die('Nie udało się połączyć z bazą danych: ' . mysqli_connect_error());
}
?>

<?php
// Importuj plik connect.php
require 'connect.php';

// Przykładowe zapytanie do bazy danych
$query = "SELECT * FROM tabela";
$result = mysqli_query($connection, $query);

// Przetwarzanie wyników zapytania
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        // Dostęp do danych w wierszu
        echo $row['kolumna'];
    }
} else {
    echo 'Błąd zapytania: ' . mysqli_error($connection);
}

// Zamykanie połączenia z bazą danych
mysqli_close($connection);
?>
