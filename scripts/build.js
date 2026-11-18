import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { getPages } from '../src/controllers/pages.js';

export async function build() {
  const pages = getPages();
  const output = new URL('../dist/', import.meta.url);
  await rm(output, { recursive: true, force: true });
  await mkdir(output);
  await cp(new URL('../public/', import.meta.url), output, { recursive: true });

  for (const { path, html } of pages) {
    const target = new URL(path.endsWith('/') ? `.${path}index.html` : `.${path}`, output);
    await mkdir(new URL('./', target), { recursive: true });
    await writeFile(target, html);
  }

  console.log(`Sitio generado en dist/ (${pages.length} páginas).`);
}

await build();
