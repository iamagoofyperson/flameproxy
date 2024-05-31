// script.js
const form = document.getElementById('proxy-form');
const urlInput = document.getElementById('url');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = urlInput.value;
  const newTab = window.open('', '_blank');
  newTab.location.href = `https://www.google.com/search?q=${encodeURIComponent(url)}`;

  // Bypassing techniques:
  // 1. Use a random User-Agent header to avoid detection
  newTab.navigator.userAgent = getRandomUserAgent();

  // 2. Use a proxy server to mask the request
  newTab.location.href = `https://cors-anywhere.herokuapp.com/${encodeURIComponent(url)}`;

  // 3. Use a caching mechanism to avoid repeated requests
  newTab.location.href = `https://cache.google.com/search?q=${encodeURIComponent(url)}`;
});

// Function to generate a random User-Agent header
function getRandomUserAgent() {
  const userAgentList = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    // Add more User-Agent headers here
  ];
  return userAgentList[Math.floor(Math.random() * userAgentList.length)];
}
