// Load dark or light mode

const darkModeToggle = document.getElementById('dark-mode-switch');
const htmlElement = document.documentElement;

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    htmlElement.classList.add('dark-mode');
    htmlElement.classList.remove('light-mode');
  } else {
    htmlElement.classList.add('light-mode');
    htmlElement.classList.remove('dark-mode');
  }
});