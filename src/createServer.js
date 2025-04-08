/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, 'http://localhost:5701');
    const parts = normalizedUrl.pathname.split('/').slice(1);
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = {
  createServer,
};
