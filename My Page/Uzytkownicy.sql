CREATE TABLE [dbo].[Uzytkownicy]
(
  [Id] INT NOT NULL PRIMARY KEY
  
)

CREATE TABLE  [dbo].[Uzytkownicy]
(
    id INT PRIMARY KEY AUTO_INCREMENT;
    email VARCHAR(255) NOT NULL;
    haslo VARCHAR(255) NOT NULL;
    nazwa_uzytkownika VARCHAR(255) NOT NULL;
    imie VARCHAR(255) NOT NULL;
    nazwisko VARCHAR(255) NOT NULL;
);
