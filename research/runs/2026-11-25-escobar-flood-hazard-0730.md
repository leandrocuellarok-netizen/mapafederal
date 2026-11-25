# Escobar — incorporación documental de la capa municipal de peligrosidad de inundaciones

- Fecha de consulta: 25/11/2026, 07:30 ART.
- Alcance: Partido de Escobar; ambiente, cartografía de peligrosidad hídrica y trazabilidad de datos.
- Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.

## Inspección previa del repositorio

- HEAD inspeccionado: `61a28dace45a738f6c46ce7037298b4cea654fe8` (ciclo concurrente GBIE de las 06:57 ART).
- Se revisaron README, `data/escobar-territory.json`, `tests/escobar-transparency.test.js`, `assets/foco-escobar.js` y `.github/workflows/static.yml`.
- No había pull requests abiertos.
- Workflow previo #588: validación y despliegue exitosos sobre `61a28dace45a738f6c46ce7037298b4cea654fe8`.
- La conexión GitHub no expone un working tree local; se utilizaron lecturas de archivos y commits de la rama.

## Hallazgo y fuentes

La ficha oficial del Municipio publica el dataset **“Peligrosidad de Inundaciones – Partido de Escobar”**. La descripción municipal indica que identifica áreas con distintos niveles de peligrosidad hídrica y que fue elaborado a partir de cartografía oficial de la Autoridad del Agua (ADA) de la Provincia de Buenos Aires.

Fuente primaria: [ficha del dataset municipal](https://datos.escobar.gob.ar/dataset/peligrosidad-de-inundaciones-partido-de-escobar).

- Organismo que publica la ficha: Estrategia Ambiental y datos — Municipalidad de Escobar.
- Fecha de publicación: no indicada por la fuente.
- Creación declarada: 01/10/2025.
- Última actualización declarada: 31/03/2026.
- Versión: 1.0; periodicidad: anual.
- Licencia declarada: Open Data Commons Open Database License (ODbL).
- Recursos declarados: GeoJSON (1.567 KB) y SHP (466 KB).
- Alcance geográfico que declara la ficha: Partido de Escobar; no asigna cada entidad a una localidad.

Recurso: [peligrosidad_inundaciones.geojson](https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/peligrosidad-de-inundaciones-partido-de-escobar/peligrosidad_inundaciones.geojson).

## Verificación y límites

- El recurso GeoJSON pudo abrirse parcialmente y se comprobó la cabecera `FeatureCollection`; la herramienta no permitió inspeccionar el esquema y todas las geometrías.
- El endpoint SHP respondió HTTP 400 por tipo de contenido `application/vnd.shp`. Es una limitación del visor, no evidencia de que el archivo esté roto.
- La ficha municipal atribuye la cartografía de base a ADA. Esa atribución se conserva como declaración de la fuente municipal; no se inspeccionó el dataset original de ADA.
- No se confirmó CRS, fecha de referencia de la cartografía ADA, clasificación de atributos, método de recorte ni transformación.
- La fecha de publicación del dataset no está indicada.
- La capa se distingue del registro MNDWI de tormentas de 2025: la ficha la describe como cartografía de peligrosidad; el otro dataset registra presencia temporal de agua superficial detectada en imágenes de eventos de tormenta.
- No se asignaron barrios o localidades, no se añadieron coordenadas, no se transformaron geometrías y no se dibujaron polígonos.
- La capa no se presenta como pronóstico, alerta en tiempo real ni evaluación del riesgo de un inmueble.

## Cambio realizado

Se añadió un registro documental a `transparencyDirectory.environmentalDatasets` y pruebas focalizadas para su procedencia, fechas, licencia, recursos, estado pendiente y ausencia de coordenadas. La interfaz existente de Foco Escobar ya representa de forma genérica las entradas de `environmentalDatasets`; no se necesitó modificar HTML o JavaScript.

## Archivos y commit

- `data/escobar-territory.json`
- `tests/escobar-transparency.test.js`
- Commit: [932d23fbbf4816d63335db7c7b4a68238cee2afc](https://github.com/leandrocuellarok-netizen/mapafederal/commit/932d23fbbf4816d63335db7c7b4a68238cee2afc)

## Pruebas y publicación

- Preflight: JSON parseado y nuevo registro validado antes del commit.
- GitHub Actions [workflow #589](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45596062784): job `validate` exitoso; incluyó las pruebas del directorio de transparencia municipal y la validación de JSON geográfico/editorial.
- GitHub Pages: job `deploy` exitoso; el log de despliegue informó “Reported success!” para el commit `932d23f`.
- Verificación HTTP independiente: no completada. El visor web no pudo abrir la página publicada; no se hizo inspección visual independiente.

## Próxima evidencia necesaria

1. Obtener el dataset fuente de ADA y sus metadatos completos.
2. Obtener el CRS declarado en el archivo o su archivo de proyección (.prj), sin inferirlo por magnitud de coordenadas.
3. Identificar los campos y la leyenda que definen cada clase de peligrosidad.
4. Confirmar fecha de referencia y método de recorte/transformación utilizado por el Municipio.
5. Validar la geometría contra límites oficiales de Escobar antes de cualquier representación.

Resultado: mejora documental segura; integración cartográfica pendiente.
