module.exports = {
  database: process.env.MONGO_URI || 'localhost/marvel',
  publicKey: process.env.MARVEL_API_PUBLIC_KEY || '48ff5bb51a3a1df3c117ffc3f5a16e46',
  privateKey: process.env.MARVEL_API_PRIVATE_KEY || '261603db356926a10cd2cddde064b08a8c9c2a52'
};
