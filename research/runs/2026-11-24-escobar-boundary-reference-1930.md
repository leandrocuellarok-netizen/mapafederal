# Escobar — referencia oficial de límites municipales para contraste hidrográfico

Fecha de corte: 24/11/2026, 19:30 (America/Argentina/Buenos_Aires).  
Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.

## 1. Inspección previa

- HEAD observado: `ea4d5413809dd4391cd5de2ee215ad31e316c07f`, con árbol base `5cb78e2d0fd8ef3c8689a5f6d788b25331bdc06a`.
- Repositorio público; rama predeterminada `main`; permisos de lectura y escritura disponibles.
- No se encontraron pull requests abiertos.
- Se revisaron `data/escobar-territory.json`, `assets/escobar-profile.js`, `tests/escobar-transparency.test.js`, `README.md` y `.github/workflows/static.yml`.
- Se detectaron commits concurrentes del ciclo GBIE 19:00 en `data/news.json` y documentación ejecutiva; no se modificaron esos archivos.
- El estado combinado de checks para el último commit observado no devolvió checks; no se atribuye CI ni despliegue a ese commit.

## 2. Fuentes oficiales revisadas

### Instituto Geográfico Nacional — Unidades Territoriales

Ficha: https://datos.gob.ar/ar/dataset/ign-unidades-territoriales

El catálogo describe información geoespacial sobre límites provinciales, departamentales y municipales. Señala que los límites se construyen mediante vectorización de antecedentes cartográficos del IGN, interpretación de legislación vigente y fuentes oficiales externas. El recurso «Municipios» ofrece polígonos en Shapefile ZIP. La ficha muestra publicación 19/12/2017 y actualización 31/07/2019; la licencia no está especificada.

Descarga Shapefile: https://www.ign.gob.ar/descargas/geodatos/SHAPES/ign_municipio.zip

### Servicio Georef — descarga GeoJSON

Documentación: https://www.argentina.gob.ar/georef/georef-servicio-de-normalizacion-de-direcciones-y-unidades-territoriales-de-argentina-5

La documentación oficial indica que las geometrías pueden descargarse como GeoJSON y que las geometrías entregadas se encuentran en WGS84 (EPSG:4326). La descarga completa de municipios está documentada en:

https://apis.datos.gob.ar/georef/api/v2.0/municipios.geojson

La API también documenta filtros por nombre y provincia para el endpoint `/municipios`. El FAQ oficial describe a Georef como servicio gratuito, con datos que se actualizan periódicamente a partir de fuentes como IGN, INDEC y BAHRA.

### Fuente provincial complementaria

GeoARBA: https://www.arba.gov.ar/geoarba/inicio.asp

La página oficial declara servicios WMS y WFS y descarga de archivos vectoriales catastrales por partido. El endpoint WFS de capacidades respondió XML, formato que no pudo inspeccionarse con la herramienta disponible; no se identificó un nombre de capa ni se utilizó esa geometría.

## 3. Mejora principal

Se incorporó al directorio de transparencia una referencia diferenciada a los polígonos municipales del IGN y al servicio Georef. El perfil de Escobar muestra organismo, formato, CRS, fechas de metadatos y enlaces de origen.

La referencia queda en estado `pendiente` para integración geométrica. El GeoJSON de Georef enlazado es la base nacional completa, no un archivo filtrado exclusivamente para Escobar.

No se descargó ni procesó el polígono de Escobar en esta ejecución. No se agregaron polígonos al mapa ni se cambió el estado de integración de los cursos de agua.

## 4. Archivos modificados

- `data/escobar-territory.json`: nueva propiedad `territorialBoundaryReference`.
- `assets/escobar-profile.js`: tarjeta visible de referencia cartográfica.
- `tests/escobar-transparency.test.js`: controles de procedencia, CRS, fechas, enlaces y estado pendiente.
- `README.md`: documentación del nuevo origen cartográfico.
- `research/runs/2026-11-24-escobar-boundary-reference-1930.md`: este registro.

## 5. Validaciones

- JSON parseado antes de crear los objetos Git.
- Se comprobó que los cuatro enlaces declarados usan HTTPS.
- Se añadieron pruebas para impedir que una referencia documental se presente como geometría ya integrada.
- El workflow [45502207803](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45502207803), disparado por el commit `c90bccad8cbd7de4b9a1d41c5b5871711268835c`, terminó con fallo en el job `validate`, paso 16 (`Validate geographic and editorial JSON`). El error observado fue `AssertionError: ID de noticia no determinista` para el registro de Zscaler incorporado por el commit concurrente `10f77bb714f6ec1afdea90a8b742952aa9222ea9` en `data/news.json`. Ese archivo no forma parte de este cambio y no se modificó para respetar el alcance de Escobar.
- El paso 14 (`Test Escobar municipal transparency directory`), que incluye las nuevas aserciones de la referencia IGN/Georef, finalizó con `success`. Los pasos posteriores se omitieron y el job `deploy` quedó `skipped`; por lo tanto, este cambio no está publicado en GitHub Pages.

## 6. Límites y siguiente evidencia

1. Descargar la geometría municipal desde Georef o el Shapefile del IGN en un entorno que admita el formato.
2. Filtrar y conservar únicamente la entidad correspondiente al Partido de Escobar, verificando identificador, nombre y provincia.
3. Comprobar CRS declarado, geometría válida, coordenadas finitas, rango geográfico y topología.
4. Transformar la totalidad del GeoJSON hidrográfico EPSG:22185 a WGS84 y comparar su extensión y geometrías contra el polígono municipal.
5. No derivar límites de localidades o barrios a partir del polígono municipal: requiere cartografía oficial de mayor detalle.

Principio: la documentación de una fuente oficial permite registrarla; no equivale a haber descargado, procesado o validado su geometría.
