import { cuscoTrip, posts, site } from '../models/blog.js';
import { homeView } from '../views/home.js';
import { archiveView } from '../views/archive.js';
import { aboutView } from '../views/about.js';
import { articleView } from '../views/article.js';
import { notFoundView } from '../views/not-found.js';
import { layout } from '../views/layout.js';
import { articleUrl } from '../views/shared.js';

const stories = [...posts].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
const featured = stories.find(post => post.featured) ?? stories[0];

export function getPages() {
  const pages = [
    {
      path: '/',
      title: 'Inicio',
      description: site.description,
      content: homeView(featured),
    },
    {
      path: '/historias/',
      title: 'Historias',
      description: 'Mis ideas, conversaciones y experiencias.',
      content: archiveView(stories),
    },
    {
      path: '/sobre-mi/',
      title: 'Sobre mí',
      description: 'Quién soy, qué me gusta y cómo disfruto compartir ideas.',
      content: aboutView(site),
    },
    {
      path: '/viajes/',
      title: 'Viajes',
      description: cuscoTrip.summary,
      content: articleView(cuscoTrip, { travel: true }),
    },
    ...stories.map(post => ({
      path: articleUrl(post),
      title: post.title,
      description: post.summary,
      content: articleView(post),
    })),
    {
      path: '/404.html',
      title: 'Página no encontrada',
      description: 'Esta página no está disponible.',
      content: notFoundView(),
    },
  ];

  return pages.map(page => ({ path: page.path, html: layout({ ...page, site }) }));
}
