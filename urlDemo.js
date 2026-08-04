import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world'; 

// URL object
const urlObject = new URL(urlString);
console.log('URL Object:', urlObject);

// Formatted URL
console.log('Formatted URL:', url.format(urlObject));

// import.meta.url - file URL
console.log('Meta URL:', import.meta.url);

// fileURLToPath() - convert file URL to path
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObject.search);
// Get query parameters
console.log('Query Parameters:', params.get('q')); // Output: hello world
params.append('limit', '5');
console.log(params.toString()); // Output: q=hello+world&limit=5