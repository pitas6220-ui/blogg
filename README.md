# Al margen

Blog personal estático en español. Usa HTML, CSS y JavaScript con Node.js para generar las páginas.

## Vista local

Desde esta carpeta, con Node.js disponible:

```powershell
node scripts/dev.js
```

Si PowerShell no encuentra `node` y usas el Node.js incluido con Codex en Windows, puedes iniciarlo así:

```powershell
& "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" scripts/dev.js
```

Abre [http://127.0.0.1:4173/](http://127.0.0.1:4173/). Reinicia el servidor después de editar el contenido o los estilos. Para generar únicamente los archivos estáticos, ejecuta `node scripts/build.js`.

## Organización MVC

- `src/models/blog.js` guarda los artículos y los datos del blog.
- `src/controllers/pages.js` ordena los artículos, prepara los datos de cada vista y define las rutas.
- `src/views/` contiene las vistas de Inicio, Historias, Sobre mí, lectura individual y página 404, junto con la plantilla común. Viajes usa la plantilla de lectura con galería y videos.
- `public/` contiene la hoja de estilos y los archivos que se copian al sitio final.

Las rutas principales son `/`, `/historias/`, `/viajes/` y `/sobre-mi/`. Cada historia tiene su propia URL en `/historias/<slug>/`. Usa un `slug` único con minúsculas, números y guiones. Si agregas una fecha de publicación, usa el formato `AAAA-MM-DD`.

## Fotos y videos

Las fotos se guardan en `public/images/` y los videos en `public/videos/`. En el modelo puedes agregar portadas con `cover: { src: '/images/portada.webp', alt: 'Descripción de la foto' }` y el retrato con el mismo formato en `site.portrait`. La portada de la historia destacada también se muestra en Inicio. La galería de Cusco está en `cuscoTrip.gallery` y los clips en `cuscoTrip.videos`.

## GitHub y Vercel

Sube el código fuente a GitHub e importa el repositorio en Vercel. El archivo `vercel.json` define la compilación con `node scripts/build.js` y publica la salida de `dist/`. Vercel genera esa carpeta a partir del código del repositorio.
