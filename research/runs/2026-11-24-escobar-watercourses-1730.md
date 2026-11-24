# Escobar — incorporación de referencia hidrográfica oficial

Fecha de corte: 24/11/2026, 17:30 (America/Argentina/Buenos_Aires).
Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.

## 1. Inspección previa

- HEAD inspeccionado: `c4cf6fab291bd79763a74e330b3e801f7fc5ffb4`.
- Último commit visible al inicio: `Qualify Escobar assembly date pending official confirmation`, 24/11/2026 20:07:06 UTC.
- Se revisaron el catálogo territorial, el perfil económico, la sección de transparencia, el renderizador local, la prueba de transparencia, README y workflow de GitHub Pages.
- No se encontraron pull requests abiertos.
- Se identificaron commits recientes de otros ciclos de trabajo; no se modificaron sus archivos ni sus datos.
- La automatización no dispone de un árbol de trabajo local; la inspección se realizó sobre la rama remota `main`.

## 2. Hallazgo y fuente primaria

Se identificó una capa oficial que no estaba referenciada en el perfil local: **Cursos de Agua del Partido de Escobar**.

Ficha municipal: https://datos.escobar.gob.ar/dataset/cursos-de-agua-del-partido-de-escobar

Recurso GeoJSON: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/cursos-de-agua-del-partido-de-escobar/cursos_agua.geojson

Metadatos publicados por el portal:

- Organización: Estrategia Ambiental y datos.
- Fuente declarada en la ficha: cartografía base hidrográfica utilizada por el Municipio de Escobar.
- Formatos: GeoJSON y Shapefile.
- Recurso consultado: `cursos_agua.geojson`, 267 KB.
- Versión: 1.0.
- Creación: 01/10/2025.
- Última actualización declarada: 31/03/2026.
- Periodicidad: anual.
- Licencia: Open Data Commons Open Database License (ODbL).
- Fecha de publicación: no informada por la ficha.

El GeoJSON se abrió correctamente y declara una `FeatureCollection` con CRS `EPSG:22185`. Entre los atributos publicados aparecen tipo, nombre, régimen, navegabilidad y fuente; algunos registros identifican IGN como fuente.

## 3. Mejora principal

Se incorporó un registro documental en `transparencyDirectory.environmentalDatasets` y se hizo visible en el panel de transparencia del perfil de Escobar.

El registro conserva la URL de la ficha, la descarga original, la licencia, versión, fechas del dataset y CRS declarado. Se etiqueta como pendiente de integración geográfica: el recurso conserva coordenadas proyectadas EPSG:22185 y no se dibuja directamente en el mapa.

La capa representa una red hidrográfica de referencia. No se interpreta como mapa de riesgo hídrico, medición de caudal, análisis de calidad de agua ni confirmación de navegabilidad actual.

## 4. Límite adicional observado

La descarga GeoJSON de «Reservas Naturales Municipales del Partido de Escobar» respondió HTTP 404 durante la consulta del recurso enlazado desde su ficha. No se incorporó geometría ni se presentó el enlace como recurso descargable validado. El recurso de «Áreas Verdes Urbanas» excedió el límite de vista previa de la herramienta de consulta; esto no se clasificó como URL rota.

## 5. Archivos modificados

- `data/escobar-territory.json`: nueva referencia de capa hidrográfica en el directorio ambiental.
- `assets/escobar-profile.js`: presentación de la ficha y enlaces en el panel de transparencia.
- `tests/escobar-transparency.test.js`: controles de metadatos, CRS, licencia, enlaces y límites de interpretación.
- `README.md`: documentación del nuevo recurso y de la cautela cartográfica.
- `research/runs/2026-11-24-escobar-watercourses-1730.md`: registro de esta ejecución.

No se modificó `.github/workflows/static.yml`: el workflow ya ejecuta `tests/escobar-transparency.test.js`.

## 6. Validación prevista

El test de transparencia valida que:
- el dataset y su procedencia existan;
- la fecha de publicación no se invente;
- se conserven versión, periodicidad, licencia y última actualización;
- el CRS sea EPSG:22185;
- la integración al mapa siga pendiente;
- el renderizador exponga la ficha y el GeoJSON original;
- las limitaciones sobre geometría y riesgo hídrico permanezcan visibles.

La validación y el despliegue quedan sujetos al resultado observado de GitHub Actions después del commit. No se anticipa éxito de CI ni de Pages.

## 7. Próxima evidencia necesaria

- Obtener y validar una transformación documentada de EPSG:22185 a EPSG:4326 antes de representar la geometría.
- Revisar el recurso de reservas naturales con el Municipio o una descarga corregida.
- Procesar el dataset de áreas verdes con una herramienta que admita su tamaño, sin confundir el límite de vista previa con un error HTTP.
