const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav =document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(imgColor) {
  image1.src = `img/undraw_proud_coder_${imgColor}.svg`;
  image2.src = `img/undraw_proud_coder_${imgColor}.svg`;
  image3.src = `img/undraw_proud_coder_${imgColor}.svg`;
}

function mode(iconImgRemove, iconImgAdd, navBackgroundColor, textBackgroundColor, modeText) {
  nav.style.backgroundColor = navBackgroundColor;
  textBox.style.backgroundColor = textBackgroundColor;
  toggleIcon.children[0].textContent = modeText;
  toggleIcon.children[1].classList.remove(iconImgRemove);
  toggleIcon.children[1].classList.add(iconImgAdd);
}

function toggleDarkLightMode(isLight) {
  nav.style.backgroundColor = isLight ? 'rgb(255 255 255/ 50%)' : 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255/ 50%)';
  toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
  isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : 
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  isLight ? imageMode('light') : imageMode('dark');
}

//Swithch theme dynamically
function switchTheme(event) {
  let checked = event.target.checked;

  if (checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(false);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(true);
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme == 'dark') {
    toggleSwitch.checked = true;
    mode('fa-sun', 'fa-moon', 'rgb(0 0 0 / 50%)', 'rgb(255 255 255 / 50%)', 'Dark Mode');
  }
}
