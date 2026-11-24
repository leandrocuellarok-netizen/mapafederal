# Escobar — prevalidación reproducible del CRS hidrográfico

Fecha de corte: 24/11/2026, 18:30 (America/Argentina/Buenos_Aires).
Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.

## 1. Inspección previa

- HEAD observado: `2cb23200f41ee3eb72a3e4c5567f5c0d99e4e8a1` (ciclo GBIE 18:00).
- Repositorio público, rama predeterminada `main`; permisos de lectura y escritura disponibles.
- No se encontraron pull requests abiertos.
- Se revisaron `README.md`, `data/escobar-territory.json`, `assets/escobar-profile.js`, `tests/escobar-transparency.test.js` y `.github/workflows/static.yml`.
- El workflow existente ya ejecuta `node tests/escobar-transparency.test.js`; no se modificó su definición.
- El último run observado antes de este cambio fue [45487041241](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45487041241), sobre el commit `2cb23200f41ee3eb72a3e4c5567f5c0d99e4e8a1`: jobs `validate` y `deploy` completados con `success`.
- La consulta de la URL pública de GitHub Pages no pudo completarse desde la herramienta de navegación; se distingue ese límite de la confirmación del job de despliegue.

## 2. Fuentes revisadas

### Cursos de agua

Ficha municipal: https://datos.escobar.gob.ar/dataset/cursos-de-agua-del-partido-de-escobar

GeoJSON original: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/cursos-de-agua-del-partido-de-escobar/cursos_agua.geojson

La ficha informa versión 1.0, creación 01/10/2025, última actualización 31/03/2026, periodicidad anual y licencia ODbL. No informa fecha de publicación. El recurso GeoJSON se abrió durante esta ejecución y declara `FeatureCollection`, `EPSG:22185` y coordenadas proyectadas. El primer registro identificado como «Correntino» contiene la coordenada [5618351.79, 6209937.59].

### Definición oficial del CRS

Instituto Geográfico Nacional, Dirección de Geodesia, *Definición de sistemas de coordenadas y proyecciones oficiales en la República Argentina (EPSG)*, 2017:

https://ramsac.ign.gob.ar/posgar07_pg_web/documentos/informe_sobre_codigos_oficiales_epsg.pdf

El documento identifica EPSG:22185 como Gauss-Krüger Faja 5, POSGAR 94, y publica estos parámetros: latitud de origen -90°, meridiano central -60°, falso norte 0 m, falso este 5.500.000 m, factor de escala 1 y elipsoide WGS84.

### Comprobación independiente de parámetros y orden XY

Referencia de conversión publicada por GISGP para EPSG:22185:

https://gisgp.com/epsg/22185

Ejemplo publicado: WGS84 (-31.215, -60.005) → (5.499.523,55; 6.547.154,06) metros. La implementación de la proyección en la prueba reproduce ambos valores con diferencia inferior a 0,01 m. Esto respalda los parámetros de la transformación y la convención GIS X=easting, Y=northing utilizada para el preflight; no reemplaza la validación espacial completa del recurso municipal.

## 3. Mejora principal

Se agregó a `tests/escobar-transparency.test.js` una prueba reproducible de prevalidación Gauss-Krüger Faja 5:

- Implementa proyección directa e inversa con el elipsoide WGS84 y los parámetros publicados por IGN.
- Contrasta la proyección directa contra el ejemplo independiente de GISGP.
- Transforma una coordenada real del primer registro del GeoJSON: [5618351.79, 6209937.59] → latitud -34.2489963, longitud -58.7152043.
- Comprueba el retorno de esa coordenada al sistema proyectado con tolerancia inferior a 1 cm.

El resultado es una comprobación matemática de muestra, no una certificación de que el punto se encuentre dentro del límite municipal ni de que todas las geometrías estén correctamente ordenadas. No se agregó ninguna geometría al mapa y el estado `geometryIntegrationStatus` permanece `pending`.

## 4. Límites y recursos no disponibles

- El recurso GeoJSON de «Reservas Naturales Municipales del Partido de Escobar» continúa listado en la ficha oficial, pero su descarga respondió 404:
  https://datos.escobar.gob.ar/dataset/reservas-naturales-municipales-del-partido-de-escobar
- La ficha también ofrece un Shapefile; la herramienta de consulta no admite su tipo de contenido. Eso no demuestra que el archivo esté roto y no se lo clasifica como 404.
- El GeoJSON de «Localidades del Partido de Escobar — Censo 2022» también está listado, pero la descarga enlazada respondió 404:
  https://datos.escobar.gob.ar/dataset/localidades-del-partido-de-escobar-censo-2022
- Sin un polígono oficial descargable y sin procesar la totalidad del GeoJSON hidrográfico, no se puede validar la contención municipal, la cobertura completa, la topología ni la posición de cada tramo.

## 5. Archivos modificados

- `tests/escobar-transparency.test.js`: prueba de referencia, transformación inversa de muestra y control de ida y vuelta.
- `research/runs/2026-11-24-escobar-crs-preflight-1830.md`: fuentes, parámetros, método, resultados y límites.

No se modificaron los datos productivos, la interfaz, los marcadores ni el estado de integración cartográfica.

## 6. Validación pendiente de este commit

El cambio se publicará únicamente si el workflow existente completa los tests y el job de GitHub Pages. El resultado del run se consignará después de observarlo; no se anticipa éxito.

## 7. Próxima evidencia necesaria

1. Obtener el polígono oficial de Escobar o de sus localidades en un recurso descargable y con CRS conocido.
2. Procesar la totalidad del GeoJSON hidrográfico y comprobar geometrías, coordenadas, rangos, valores nulos y topología.
3. Comparar una muestra espacial contra cartografía oficial independiente.
4. Solo entonces decidir si la capa puede transformarse e incorporarse al mapa.

Principio: una transformación matemáticamente reproducible es necesaria, pero no suficiente para publicar una capa territorial como verificada.
