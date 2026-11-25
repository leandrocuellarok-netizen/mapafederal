# MAPA FEDERAL — Escobar: zonas de anegamiento detectadas en tormentas de 2025

- Fecha de consulta: 2026-11-25, 06:30 ART.
- Jurisdicción: Partido de Escobar.
- Dominio: ambiente, riesgo climático y gestión de emergencias.
- Rama inspeccionada: `main`.
- HEAD observado antes del cambio: `c167c42b9d9814ebb0890ec2172e7adc8f9d60fd`.
- Working tree local: no disponible mediante el conector; se inspeccionaron la rama, los commits recientes, los archivos y el workflow publicado.
- PR abiertos: ninguno en la consulta.
- Workflow de publicación: `.github/workflows/static.yml`.

## Hallazgo

El Portal de Datos Abiertos de la Municipalidad de Escobar publica el conjunto «Zonas de Anegamiento Detectadas a partir de Tormentas 2025 – Partido de Escobar». La ficha identifica a Estrategia Ambiental y datos como organización, describe una detección mediante MNDWI sobre imágenes COPERNICUS/S2_SR_HARMONIZED de tormentas ocurridas durante 2025 y declara versión 1.0, creación 01/10/2025, última actualización 31/03/2026, periodicidad anual y licencia ODbL.

La ficha ofrece el archivo `zonas_anegamientos_2025.geojson` (806 KB). El enlace se abrió y el contenido se presentó como `application/json`, tipo `FeatureCollection`. En los objetos inspeccionados se observan geometrías Polygon y atributos `Id` y `gridcode`.

## Limitaciones geográficas y semánticas

- El encabezado del GeoJSON no declara un CRS.
- Las coordenadas visibles tienen magnitudes incompatibles con longitud/latitud WGS84 en grados; no se asigna EPSG por inferencia.
- La ficha no especifica localidad por entidad.
- No se publican, en los atributos observados, fecha individual del evento, profundidad, duración ni severidad.
- La detección de agua superficial en imágenes de 2025 no es un pronóstico, una probabilidad de inundación, una delimitación de riesgo predial actual ni una garantía sobre el comportamiento futuro.

## Cambio realizado

Se agregó un registro documental a `transparencyDirectory.environmentalDatasets`, con alcance Partido de Escobar, período de observación histórico y estado pendiente de integración geográfica. No se transformaron coordenadas ni se agregaron puntos o polígonos al mapa.

## Archivos

- `data/escobar-territory.json`
- `tests/escobar-transparency.test.js`
- `research/runs/2026-11-25-escobar-flood-detection-dataset-0630.md`

## Validaciones

- JSON: parseado después de la inserción.
- Pruebas específicas: se añadieron aserciones para procedencia, metadatos, CRS no declarado, ausencia de asignación local y prohibición de geometría cartográfica sin verificación.
- Node test, sintaxis y workflow completo: pendientes de ejecución en GitHub Actions después del commit.
- GitHub Pages y comprobación HTTP independiente: pendientes.

## Próxima evidencia necesaria

1. Declaración del CRS y datum por el publicador municipal.
2. Metadatos de las escenas Sentinel-2 y fechas de observación por evento.
3. Definición oficial de `gridcode` y criterios MNDWI.
4. Validación de geometrías contra una capa oficial de límites del Partido antes de cualquier representación.
5. Separación explícita entre detección satelital histórica y cartografía oficial de peligrosidad de inundaciones.
