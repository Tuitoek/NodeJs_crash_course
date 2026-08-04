import crypto from 'crypto';

// Create hashes for passwords using the crypto module in Node.js(You basically hash- update and digest)
// Create hash
const hash = crypto.createHash('sha256').update('myPassword').digest('hex');
console.log('\nHash:', hash);

// Generate a random salt
const salt = crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(`\nRandom Bytes: ${buf.toString('hex')}`);
});

// Encrypt data using AES-256-CBC
// Create cipher & cretae decipher
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hi, this is a secret message!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(`\nEncrypted: ${encrypted}`);


// Decrypt data
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(`\nDecrypted: ${decrypted}`);