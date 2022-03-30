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

// Get the theme toggle
const toggle = document.getElementById('toggle');
// Check prefers-color-scheme
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// Saved themes
const getSavedTheme = () => window.localStorage.getItem('theme');
const setSavedTheme = (color) => window.localStorage.setItem('theme', color);
// Body classes
const setBodyClass = (color) => document.body.classList.add(color);
const removeBodyClass = (color) => document.body.classList.remove(color);
// Set color theme
const setColors = (addClass, removeClass, save) => {
  setBodyClass(addClass);
  removeBodyClass(removeClass);
  if (save) {
    setSavedTheme(save);
  }
};

// If there's a saved theme, add the body class
// and switch the toggle
if (getSavedTheme() === 'dark') {
  setColors('dark', 'light');
  toggle.checked = false;
} else if (getSavedTheme() === 'light') {
  setColors('light', 'dark');
  toggle.checked = true;
}

// If no saved theme, check for prefers-color-scheme
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
if (!getSavedTheme() && prefersDarkScheme.matches) {
  setColors('dark', 'light', 'dark');
  toggle.checked = false;
} else if (!getSavedTheme() && !prefersDarkScheme.matches) {
  setColors('light', 'dark', 'light');
  toggle.checked = true;
}

// Listen for a toggle click, switch theme
toggle.addEventListener('click', () => {
  // Clicked while in dark mode
  if (getSavedTheme() === 'dark') {
    // switch to light
    setColors('light', 'dark', 'light');
    toggle.checked = true;
  } else if (getSavedTheme() === 'light') {
    // else switch to dark
    setColors('dark', 'light', 'dark');
    toggle.checked = false;
  }
});
