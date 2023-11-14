import http from 'http';

const port = process.env.PING_LISTEN_PORT || 2000;

const server = http.createServer((req, res) => {
  if (req.url == '/ping' && req.method == 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/JSON');
    res.end(JSON.stringify(req.headers));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://0.0.0.0:${port}/`);
});
