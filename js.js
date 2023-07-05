const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Sprawdź preferencje przeglądarki i ustaw tryb odpowiednio
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Tryb jasny';
} else {
  body.classList.remove('dark-mode');
  darkModeToggle.textContent = 'Tryb ciemny';
}

// Przełącz tryb po kliknięciu przycisku
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Tryb jasny';
  } else {
    darkModeToggle.textContent = 'Tryb ciemny';
  }
});
