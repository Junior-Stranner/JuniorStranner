// Toggle menu
function toggleMenu () {
  document.getElementById('nav-secondary').classList.toggle('active');
  document.getElementById('close-menu').classList.toggle('active');
  document.getElementById('line1').classList.toggle('change');
  document.getElementById('line2').classList.toggle('change');
  document.getElementById('line3').classList.toggle('change');
}

// Scroll and change top button and change theme
window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("totop").style.display ='inherit';
    
  } else {
      document.getElementById("totop").style.display ='none';
      
  }
}

// Open and close card
function opencard(id) {
  const card = document.getElementById(id);
  card.classList.toggle('activecard')
  
  if (card.classList.contains('activecard')) {
      card.style.height = "390px";
  } else {
      card.style.height = "110px";
  }
  
}

// Dark mode
const changeMode = document.getElementById('change-theme');

function toogleDarkMode() {
  document.body.classList.toggle('dark')
  document.getElementById("pointer").classList.toggle('dark');
}

// Load dark or light mode

function loadTheme() {
  const darkmode = localStorage.getItem('dark')
  

  if (darkmode) {
      toogleDarkMode();
  }
}

loadTheme();

changeMode.addEventListener('change', function (){
  toogleDarkMode();

  // Save or remove dark mode
  localStorage.removeItem('dark');

  if(document.body.classList.contains('dark')) {
      localStorage.setItem('dark', 1)
  }

})

