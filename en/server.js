const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Adres URL i opcje do połączenia z bazą danych MongoDB
const url = 'mongodb://localhost:27017'; // Zmień na właściwy adres URL bazy danych
const dbName = 'mydatabase'; // Zmień na właściwą nazwę bazy danych

// Endpoint do obsługi żądania logowania
app.post('/login', (req, res) => {
  // Dane logowania otrzymane z formularza
  const username = req.body.username;
  const password = req.body.password;

  // Połącz się z bazą danych
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Błąd połączenia z bazą danych', err);
      res.status(500).send('Błąd serwera');
      return;
    }

    // Wybierz bazę danych
    const db = client.db(dbName);

    // Znajdź użytkownika w bazie danych
    db.collection('users').findOne({ username: username, password: password }, (err, result) => {
      if (err) {
        console.error('Błąd zapytania do bazy danych', err);
        res.status(500).send('Błąd serwera');
        client.close();
        return;
      }

      if (result) {
        // Użytkownik znaleziony, zalogowany pomyślnie
        res.status(200).send('Zalogowano!');
      } else {
        // Użytkownik nie znaleziony, błędne dane logowania
        res.status(401).send('Błędne dane logowania');
      }

      client.close();
    });
  });
});

// Uruchom serwer
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
