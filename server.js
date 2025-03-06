const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Set base path for IONOS hosting in /main directory
      const basePath = '/main';
      
      // Check if the request is for a static file
      if (pathname.startsWith('/_next/') || 
          pathname.startsWith('/static/') || 
          pathname.includes('.')) {
        await handle(req, res, parsedUrl);
        return;
      }

      // Handle API routes
      if (pathname.startsWith('/api/')) {
        await handle(req, res, parsedUrl);
        return;
      }

      // Handle all other routes
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
