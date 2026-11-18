import { articleUrl, escapeHtml, photo } from './shared.js';

export function homeView(featured) {
  return `
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-intro">
        <p class="eyebrow">Blog personal</p>
        <h1 id="home-title">Qué gusto<br>tenerte aquí.</h1>
        <p class="lead">Soy estudiante de la UNS, alegre y conversador. Me gusta conocer gente, descubrir lugares y compartir ideas con mis amistades.</p>
        <a class="button" href="/sobre-mi/">Conóceme un poco más <span aria-hidden="true">↗</span></a>
      </div>
      ${featured ? `
        <a class="feature" href="${articleUrl(featured)}">
          ${photo(featured.cover, 'feature-photo')}
          <div class="feature-heading">
            <span class="eyebrow">Lectura destacada</span>
            <span class="feature-arrow" aria-hidden="true">↗</span>
          </div>
          <span class="feature-mark" aria-hidden="true">✳</span>
          <div class="feature-copy">
            <h2>${escapeHtml(featured.title)}</h2>
            <p>${escapeHtml(featured.summary)}</p>
          </div>
        </a>` : ''}
    </section>`;
}
