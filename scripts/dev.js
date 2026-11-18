import { createServer } from 'node:http';
import { readFile, realpath } from 'node:fs/promises';
import { extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import './build.js';

const output = await realpath(fileURLToPath(new URL('../dist/', import.meta.url)));
const notFound = await readFile(resolve(output, '404.html'));
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
};

function serveVideo(request, response, body) {
  const headers = {
    'Content-Type': contentTypes['.mp4'],
    'Accept-Ranges': 'bytes',
  };
  const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.range ?? '');
  if (request.method === 'HEAD' || !range || (!range[1] && !range[2])) {
    return response.writeHead(200, { ...headers, 'Content-Length': body.length })
      .end(request.method === 'HEAD' ? undefined : body);
  }

  const start = range[1] ? Number(range[1]) : Math.max(0, body.length - Number(range[2]));
  const last = range[1] && range[2] ? Math.min(Number(range[2]), body.length - 1) : body.length - 1;
  if (start > last) {
    return response.writeHead(416, { ...headers, 'Content-Range': `bytes */${body.length}` }).end();
  }

  return response.writeHead(206, {
    ...headers,
    'Content-Range': `bytes ${start}-${last}/${body.length}`,
    'Content-Length': last - start + 1,
  }).end(body.subarray(start, last + 1));
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }

  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname.includes('\\') || pathname.includes('\0')) throw new URIError();
    const file = extname(pathname) ? pathname : `${pathname.replace(/\/$/, '')}/index.html`;
    const target = await realpath(resolve(output, `.${file}`));
    const location = relative(output, target);
    if (location === '..' || location.startsWith(`..${sep}`) || isAbsolute(location)) {
      throw new URIError();
    }
    const body = await readFile(target);
    const extension = extname(target).toLowerCase();
    if (extension === '.mp4') {
      serveVideo(request, response, body);
      return;
    }
    response.writeHead(200, {
      'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
    }).end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'Content-Type': contentTypes['.html'] })
      .end(request.method === 'HEAD' ? undefined : notFound);
  }
});

server.listen(Number(process.env.PORT ?? 4173), '127.0.0.1', () => {
  console.log(`Vista local en http://127.0.0.1:${server.address().port}/`);
});
