# JOGO — Landing Page

Portafolio personal de Josué Gonzales, Full Stack Developer.

## Stack

- HTML5 + Tailwind CSS (compilado, sin CDN)
- Diseño responsive (mobile-first, breakpoints en 768px y 900px)
- Google Fonts: Poppins (títulos) + Inter (texto)

## Estructura

- `index.html` — estructura de la página
- `src/input.css` — fuente de Tailwind (`@tailwind` + clases de componentes con `@apply`)
- `output.css` — CSS compilado que consume `index.html` (se genera con el build, no editar a mano)
- `tailwind.config.js` — colores y tipografías personalizadas (paleta JOGO)
- `jogo-foto-circle.png` — foto de perfil (avatar)
- `favicon.svg`, `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` — íconos del sitio
- `og-image.png` — imagen de vista previa para redes sociales (Open Graph)

## Desarrollo local

Requiere Node.js instalado. En la carpeta del proyecto:

```bash
npm install
npm run watch
```

Esto compila `src/input.css` → `output.css` y lo recompila automáticamente cada vez que guardas cambios en `index.html` o `src/input.css`. Abre `index.html` en el navegador para ver los cambios (recarga manual).

Para compilar una sola vez (versión minificada, antes de subir a producción):

```bash
npm run build
```

## Publicar

Este sitio es estático. Después de correr `npm run build`, sube `index.html`, `output.css` y los assets (imágenes/favicons) — no hace falta subir `node_modules`. Ya está publicado en GitHub Pages: https://jogo007.github.io/
