import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Example of using path.join to create a file path
const filePath = path.join(__dirname, 'config', 'server.js');
console.log('File Path:', filePath);    

//basename()
console.log('Base Name:', path.basename(filePath)); 

//dirname()
console.log('Dir Name:', path.dirname(filePath));

//extname()
console.log('Extension:', path.extname(filePath));

//parse()
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);