// Textarea for notes
let notesElement = document.querySelector('textarea');
// Get any saved notes
const getSavedNotes = window.localStorage.getItem('notes');

const saveTyping = (e) => {
  window.localStorage.setItem('notes', e.target.value);
};
const setSavedNotes = (note) => {
  window.localStorage.setItem('notes', note);
};

// Check for saved notes
if (getSavedNotes && getSavedNotes.length > 0) {
  document.getElementsByTagName('textarea')[0].textContent = getSavedNotes;
} else {
  // If no saved notes, add today's date
  let today = new Date().toLocaleDateString('en-US');
  document.getElementsByTagName('textarea')[0].textContent = `${today}\n`;
  setSavedNotes(`${today}\n`);
}

// Save notes when typing
notesElement.addEventListener('input', saveTyping);

// Theme switching

// Get the toggle for dark & light mode
let toggle = document.getElementById('toggle');
// Check prefers-color-scheme
let prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// Check for user saved theme choice
let savedTheme = window.localStorage.getItem('theme');

// If there's a saved theme, add the body class
// and switch the toggle indicator
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggle.checked = false;
} else if (savedTheme === 'light') {
  document.body.classList.add('light');
  toggle.checked = true;
}

// If no saved theme, check for prefers-color-scheme
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
if (!savedTheme && prefersDarkScheme.matches) {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  toggle.checked = false;
  window.localStorage.setItem('theme', 'dark');
} else if (!savedTheme) {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  toggle.checked = true;
  window.localStorage.setItem('theme', 'light');
}

// Listen for a click on the toggle
toggle.addEventListener('click', () => {
  let theme = '';
  // If they prefer dark mode and they toggled to light
  if (prefersDarkScheme.matches && toggle.checked == true) {
    // switch to light
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    theme = 'light';
  } else if (!toggle.checked) {
    // if they toggle to dark
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    theme = 'dark';
  }
  // Save current theme setting
  window.localStorage.setItem('theme', theme);
});
