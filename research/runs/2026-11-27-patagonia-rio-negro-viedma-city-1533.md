# MAPA FEDERAL — Patagonia / Río Negro / Viedma

- Fecha y hora de investigación: 2026-11-27 15:33 ART (UTC-3).
- Base inspeccionada: `main` en `c833ce155625fa3800a49954a8d2c5c01398e9ae`.
- Región de rotación: Patagonia.
- Provincia: Río Negro.
- Localidad: Viedma.
- Categoría: Ciudad.

## Mejora principal

Se incorpora una referencia urbana de Viedma, capital provincial:

- ID: `rio-negro-ciudad-viedma-capital-provincial`.
- Nombre: Viedma — capital de Río Negro.
- Coordenadas: `[-40.8136, -62.9966]`.
- Fuente institucional y de coordenadas: [Gobierno de Río Negro — Catálogo de Locaciones Río Negro 2026, p. 22](https://rionegro.gov.ar/contenido/Filmm%20Commission/Rio%20Negro%20-%20catalogo%20locaciones.pdf).
- La ficha identifica «Casco histórico y edificios administrativos», delimitado principalmente entre Buenos Aires, Laprida, Guido y Colón en torno a Plaza Alsina; publica la coordenada como «referencia central».
- Fuente de condición de capital: [Gobierno de Río Negro — Viedma celebra sus 50 años como capital](https://salud.rionegro.gov.ar/articulo/47359/viedma-celebra-sus-50-anos-como-capital-con-una-muestra-de-cine), 19/10/2023; documenta la declaración de capital definitiva del 20/10/1973.
- Publicador: Gobierno de Río Negro.
- Coordenada ya publicada en grados decimales; no se realizó geocodificación, reproyección ni transformación.
- CRS/datum, EPSG y precisión: no declarados; no se asigna EPSG.
- Calidad: referencia central del sector del casco histórico y edificios administrativos; no representa el centroide de la ciudad, el límite del ejido ni un inmueble individual.
- Estado: `operativo` como referencia urbana y capital administrativa, no como estado de un servicio.
- Verificación: documental, consultada el 2026-11-27; no presencial.

## Cobertura antes y después

- Catálogo nacional: 120 → 121 nodos.
- Río Negro: 4 → 5 nodos; Ciudad: 0 → 1.
- Patagonia: 24 → 25 nodos; las cinco jurisdicciones continúan representadas.
- Categoría Ciudad nacional: 8 → 9.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría nueva.
- Jurisdicciones menos representadas: Santiago del Estero y Tucumán, con 2 nodos cada una.
- Próxima región de rotación: Buenos Aires Province.

## Archivos modificados

- `data/strategic-nodes.json` — nuevo registro urbano.
- `research/national-map-coverage.json` — conteos recalculados, matriz provincial y regional, `catalogCommit`, fecha y rotación Patagonia → Buenos Aires Province.
- `README.md` — total nacional y nota de la nueva referencia.
- `.github/workflows/static.yml` — conteo nacional, Patagonia, Río Negro, categoría Ciudad, rotación, SHA del catálogo y regresión específica del registro.
- Este archivo de bitácora.

`index.html` no se modifica: su función `loadPoints()` continúa leyendo `./data/strategic-nodes.json`; el filtro `Ciudad` ya existe en la portada.

## Validación previa a integración

- Catálogo JSON parseado; 121 registros.
- Unicidad por ID, nombre y par de coordenadas; coordenada dentro del rango argentino.
- Categoría `Ciudad` y jurisdicción `Río Negro` verificadas en el esquema y la interfaz.
- Matriz recalculada desde el catálogo: 24 jurisdicciones, 9 categorías y 121 nodos.
- Río Negro: 5 nodos; Ciudad: 1.
- Patagonia: 25 nodos.
- CRS/datum no declarados, documentados; sin transformación.
- Workflow actualizado para probar el nuevo registro y los conteos derivados.

## Integración y publicación

- Rama: `automation/patagonia-rio-negro-viedma-1533`.
- Commit del catálogo: `8c80feb2670e128301920b5a869af658c4708c8f`.
- Commit de matriz: `b6b068c85f160664f44cf8ac70ec21720d17fb1f`.
- Commit de README: `53ed1205eb8c574b9eed543b0e7f86f90b1d3726`.
- Commit de workflow: `71a8d11a6ac24bba79df693314e831e41d15baef`.
- PR #37 integrado: https://github.com/leandrocuellarok-netizen/mapafederal/pull/37.
- Merge commit en `main`: `158c31d1c47f9a3b019df3e5726fe1d0ab4d8606`.
- GitHub Actions #889 (run ID `46050777376`, SHA `158c31d1c47f9a3b019df3e5726fe1d0ab4d8606`): jobs `validate` y `deploy` completados con `success`; el paso `Deploy to GitHub Pages` terminó correctamente.
- GitHub Pages: despliegue confirmado por el job de publicación. La inspección independiente de la portada y del JSON publicado no fue posible desde el navegador, que devolvió error de acceso; por ello no se afirma verificación visual del marcador.

## Brechas no resueltas

- Río Negro mantiene pendientes Paso fronterizo, Logística, Recurso mineral y Estación ferroviaria.
- Santiago del Estero y Tucumán continúan como las jurisdicciones menos representadas.
- No se obtuvo un límite administrativo oficial de Viedma; el punto no se usa como ejido ni polígono.
- No se realizó verificación presencial ni de servicios en tiempo real.
