import { escapeHtml, photo } from './shared.js';

export function aboutView(site) {
  return `
    <header class="page-heading">
      <h1>Sobre mí</h1>
    </header>
    <div class="about-content">
      <div class="prose">
        ${site.about.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
        <a class="text-link" href="/historias/">Leer mis historias <span aria-hidden="true">→</span></a>
      </div>
      ${photo(site.portrait, 'portrait')}
    </div>`;
}
