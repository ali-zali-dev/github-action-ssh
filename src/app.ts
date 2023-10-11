// Import the HTTP module
import * as http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, TypeScript Node.js Server!\n');
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});