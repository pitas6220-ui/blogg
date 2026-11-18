const dateFormat = new Intl.DateTimeFormat('es-PE', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function escapeHtml(value) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(value).replace(/[&<>"']/g, character => entities[character]);
}

export function dateLabel(date) {
  return `<time datetime="${escapeHtml(date)}">${dateFormat.format(new Date(date))}</time>`;
}

export function articleUrl(post) {
  return `/historias/${encodeURIComponent(post.slug)}/`;
}

export function postList(posts) {
  if (!posts.length) return '<p>Aún no hay historias en esta sección.</p>';

  return `<ul class="post-list">${posts.map(post => `
    <li>
      <a class="post-row" href="${articleUrl(post)}">
        ${post.date ? `<span class="post-date">${dateLabel(post.date)}</span>` : ''}
        <div>
          <h2>${escapeHtml(post.title)}</h2>
          <p>${escapeHtml(post.summary)}</p>
        </div>
        <span class="post-category">${escapeHtml(post.category)}</span>
        <span class="row-arrow" aria-hidden="true">↗</span>
      </a>
    </li>`).join('')}</ul>`;
}

export function photo(image, className, lazy = false) {
  if (!image) return '';
  return `<img class="${className}" src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}"${lazy ? ' loading="lazy"' : ''}>`;
}
