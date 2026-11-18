import { dateLabel, escapeHtml, photo } from './shared.js';

export function articleView(post, { travel = false } = {}) {
  return `
    <article class="article">
      ${travel ? '' : '<a class="text-link back-link" href="/historias/"><span aria-hidden="true">←</span> Todas las historias</a>'}
      <header class="article-heading">
        <p class="article-meta"><span>${escapeHtml(post.category)}</span>${post.date ? dateLabel(post.date) : ''}</p>
        <h1>${escapeHtml(post.title)}</h1>
        <p class="lead">${escapeHtml(post.summary)}</p>
      </header>
      ${photo(post.cover, 'article-cover')}
      <div class="prose">
        ${post.body.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </div>
      ${post.gallery?.length ? `
        <section class="travel-media" aria-labelledby="travel-photos">
          <h2 id="travel-photos">Fotos del viaje</h2>
          ${post.gallery.map(group => `
            <div class="gallery-group">
              <h3>${escapeHtml(group.title)}</h3>
              <div class="travel-gallery">
                ${group.photos.map(image => `<figure>
                  <a href="${escapeHtml(image.src)}">${photo(image, 'gallery-photo', true)}</a>
                  <figcaption>${escapeHtml(image.caption)}</figcaption>
                </figure>`).join('')}
              </div>
            </div>`).join('')}
        </section>` : ''}
      ${post.videos?.length ? `
        <section class="travel-media" aria-labelledby="travel-videos">
          <h2 id="travel-videos">Videos del viaje</h2>
          <div class="travel-videos">
            ${post.videos.map(video => `<figure>
              <video controls playsinline preload="none" poster="${escapeHtml(video.poster)}" aria-label="${escapeHtml(video.caption)}">
                <source src="${escapeHtml(video.src)}" type="video/mp4">
                <a href="${escapeHtml(video.src)}">Abrir video</a>
              </video>
              <figcaption>${escapeHtml(video.caption)}</figcaption>
            </figure>`).join('')}
          </div>
        </section>` : ''}
    </article>`;
}
