const form = document.getElementById('proxy-form');
const urlInput = document.getElementById('url');
const proxyContent = document.getElementById('proxy-content');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = urlInput.value;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.google.com/about:blank?q=${encodeURIComponent(url)}`;
  iframe.style.height = '100vh';
  iframe.style.width = '100vw';
  proxyContent.innerHTML = '';
  proxyContent.appendChild(iframe);
});
