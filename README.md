# Portfolio - Renzo Campisi

Portfolio personal de Renzo Campisi, estudiante de Ingeniería en Sistemas (UAI). Presenta quién soy, mis proyectos, mi experiencia y cómo contactarme.

- Sitio: https://renzocampisi.github.io/Campisi_Renzo_Portfolio/
- Repositorio: https://github.com/renzocampisi/Campisi_Renzo_Portfolio

## Stack

- [Astro](https://astro.build) para armar el sitio estático
- [Tailwind CSS](https://tailwindcss.com) v4 (con CSS propio para la placa de circuito)
- Tipografías autoalojadas con Fontsource: Big Shoulders Display, Hanken Grotesk y JetBrains Mono
- GitHub Actions + GitHub Pages para el deploy

## Cómo correrlo en local

Necesitás Node 22.12 o superior.

```bash
git clone https://github.com/renzocampisi/Campisi_Renzo_Portfolio.git
cd Campisi_Renzo_Portfolio
npm install
npm run dev
```

Se abre en `http://localhost:4321/Campisi_Renzo_Portfolio/`.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve el build para probarlo |

## Estructura

```
src/
  data/site.ts      todo el contenido (datos, proyectos, habilidades)
  layouts/          estructura base: navbar, footer, tema claro/oscuro
  components/       una sección por archivo
  styles/global.css paleta, tipografías y componentes de la placa
public/             favicon y CV en PDF
cv/cv.html          fuente del CV en PDF
```

Para cambiar textos, proyectos o links alcanza con editar `src/data/site.ts`.

## CV en PDF

El archivo `public/campisi_renzo_cv_2026.pdf` sale de `cv/cv.html`. Para regenerarlo, abrí ese HTML en Chrome e imprimilo a PDF (tamaño A4, sin márgenes y con "Gráficos de fondo" activado).

## Flujo de trabajo

Se trabaja en la rama `dev` y, cuando está probado, se mergea a `main`. Cada push a `main` publica el sitio con GitHub Pages.
