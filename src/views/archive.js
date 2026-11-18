import { postList } from './shared.js';

export function archiveView(posts) {
  return `
    <header class="page-heading">
      <h1>Historias</h1>
      <p class="lead">Lo que voy aprendiendo al conversar, trabajar y compartir ideas.</p>
    </header>
    ${postList(posts)}`;
}
