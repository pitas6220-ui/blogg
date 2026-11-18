import { escapeHtml } from './shared.js';

const navigation = [
  { href: '/', label: 'Inicio' },
  { href: '/historias/', label: 'Historias' },
  { href: '/viajes/', label: 'Viajes' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
];

export function layout({ path, title, description, content, site }) {
  const name = escapeHtml(site.name);
  const fullTitle = path === '/' ? name : `${escapeHtml(title)} · ${name}`;

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#f7f7f2">
  <title>${fullTitle}</title>
  <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
  <a class="skip" href="#contenido">Saltar al contenido</a>
  <header class="site-header">
    <div class="shell site-header-inner">
      <a class="wordmark" href="/">
        <span class="brand-mark" aria-hidden="true">✳</span>
        ${name}
      </a>
      <nav aria-label="Principal">
        ${navigation.map(({ href, label }) => {
          const current = path === href ? ' aria-current="page"' :
            href !== '/' && path.startsWith(href) ? ' aria-current="location"' : '';
          return `<a href="${href}"${current}>${label}</a>`;
        }).join('')}
      </nav>
    </div>
  </header>
  <main id="contenido" class="shell" tabindex="-1">${content}</main>
  <footer class="site-footer shell">
    <span><span class="footer-mark" aria-hidden="true">✳</span> ${name}</span>
    <a href="#contenido">Volver arriba <span aria-hidden="true">↑</span></a>
  </footer>
</body>
</html>`;
}
