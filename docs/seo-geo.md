# SEO y GEO — Mapa Federal

Fecha de implementación: 2026-11-22.

## Posicionamiento

Descripción principal: plataforma de exploración territorial y económica de Argentina. El contenido verificable incluye nodos estratégicos, perfiles provinciales basados en OPEX del INDEC, noticias curadas y un catálogo documental de oportunidades.

Públicos explícitos: empresas, inversores, consultoras, cámaras empresariales y profesionales que necesitan una primera lectura territorial y económica.

## SEO técnico implementado

- Título y descripción de página centrados en inteligencia territorial y económica de Argentina.
- URL canónica absoluta de GitHub Pages.
- Metadatos Open Graph y Twitter para compartir la página.
- Directivas de rastreo en `robots.txt`.
- `sitemap.xml` con la URL pública canónica.
- Datos estructurados Schema.org para Organization, WebSite y WebApplication.
- Emblema SVG de marca compartido por navegación, portada y metadatos sociales.

## GEO / motores de respuesta

- Sección visible de preguntas frecuentes con respuestas breves y autocontenidas.
- Las respuestas describen las funciones reales y aclaran límites: no hay actualización en tiempo real, recomendaciones automáticas ni asistente IA operativo.
- El contenido conserva términos concretos: Argentina, provincias, exportaciones, infraestructura, nodos estratégicos, perfiles económicos y fuentes.
- Las respuestas deben seguir alineadas con `data/ai-modules.json` y README cuando cambien las capacidades.

## Criterios editoriales

No agregar cifras, cobertura, alianzas, empresas, eventos, fuentes o capacidades sin evidencia pública verificable. No presentar módulos planificados como operativos. No agregar puntuaciones de autoridad, promesas de posicionamiento ni datos de tráfico sin medición.

## Pendientes externos

- Registrar el sitemap en Google Search Console y Bing Webmaster Tools requiere acceso del propietario.
- La medición de indexación, consultas, impresiones y clics requiere conectar herramientas de analítica o consolas de búsqueda; no se simula en el sitio.
- Las vistas localizadas en inglés comparten la misma URL y cambian por interfaz; no se publican URLs independientes por idioma, por lo que no se agregan etiquetas hreflang.
- La URL de GitHub Pages es la canónica actual. Si se adopta un dominio propio, actualizar canonical, sitemap, robots, Open Graph y Schema.org de forma coordinada.

## Validación automatizada

El workflow de GitHub Actions comprueba la presencia y validez del JSON-LD, la FAQ visible, el sitemap XML, las directivas robots y el emblema SVG.
