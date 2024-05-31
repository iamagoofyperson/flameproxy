const form = document.getElementById('proxy-form');
const urlInput = document.getElementById('url');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = urlInput.value;
  const newTab = window.open('', '_blank');
  newTab.location.href = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
});
