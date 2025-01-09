#!/usr/bin/env node
const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.get('*', (req, res) => {
  res.redirect('/404.html');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
