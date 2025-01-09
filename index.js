#!/usr/bin/env node
const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.redirect('/404.html');
});

// const server = http.createServer((req, res) => {
//   // console.log('req.url: ' + req.url);
//   // if (req.url === '/' || req.url === '/index.html') {
//   //   fs.readFile(
//   //     path.join(__dirname, 'public', 'index.html'),
//   //     (err, content) => {
//   //       if (err) throw err;
//   //       res.writeHead(200, { 'Content-Type': 'text/html' });
//   //       res.end(content);
//   //     }
//   //   );
//   // }

//   // if (req.url === '/about.html') {
//   //   fs.readFile(
//   //     path.join(__dirname, 'public', 'about.html'),
//   //     (err, content) => {
//   //       if (err) throw err;
//   //       res.writeHead(200, { 'Content-Type': 'text/html' });
//   //       res.end(content);
//   //     }
//   //   );
//   // }

//   // Build file path
//   let filePath = path.join(
//     __dirname,
//     'public',
//     req.url === '/' ? 'index.html' : req.url
//   );

//   // Extension of file
//   let extname = path.extname(filePath);

//   // Initial content type
//   let contentType = 'text/html';

//   // Check ext and set content type
//   switch (extname) {
//     case '.js':
//       contentType = 'text/javascript';
//       break;
//     case '.css':
//       contentType = 'text/css';
//       break;
//     case '.json':
//       contentType = 'application/json';
//       break;
//     case '.png':
//       contentType = 'image/png';
//       break;
//     case '.jpg':
//       contentType = 'image/jpg';
//       break;
//   }

//   // Read file
//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if (err.code == 'ENOENT') {
//         // Page not found
//         fs.readFile(
//           path.join(__dirname, 'public', '404.html'),
//           (err, content) => {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content, 'utf-8');
//           }
//         );
//       } else {
//         // Some server error
//         res.writeHead(500);
//         res.end(`Server Error: ${err.code}`);
//       }
//     }
//     // Success
//     else {
//       res.writeHead(200, { 'Content-Type': contentType });
//       res.end(content, 'utf-8');
//     }
//   });
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
