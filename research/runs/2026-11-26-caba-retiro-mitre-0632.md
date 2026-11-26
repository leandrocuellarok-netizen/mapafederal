# MAPA FEDERAL — CABA / Estación Retiro Mitre — 2026-11-26 06:32 ART

## Objetivo
Región de rotación: CABA. Jurisdicción: Ciudad Autónoma de Buenos Aires. Categoría: Estación ferroviaria.

Brecha abordada: CABA tenía 3 nodos (Ciudad, Puerto y Aeropuerto) y cero registros de Estación ferroviaria. Se agregó un punto oficial de la terminal Retiro de la línea Mitre para ampliar la cobertura de infraestructura ferroviaria de la jurisdicción.

## Registro incorporado
- ID: `caba-estacion-retiro-mitre`
- Nombre: Estación Retiro — línea Mitre.
- Coordenadas de catálogo (latitud, longitud): `-34.59081198548558, -58.37512288514201`.
- Categoría: Estación ferroviaria.
- Estado: `operativo`, limitado a la prestación de los ramales Retiro de la línea Mitre documentada por Trenes Argentinos al 24/11/2026. No representa una verificación en tiempo real.
- La coordenada corresponde a la feature 33 del GeoJSON oficial del GCBA: Retiro, línea Mitre, ramal Retiro–Tigre, barrio Retiro, Comuna 1. El punto no es un acceso ni un perímetro de estación.

## Fuentes primarias
1. Buenos Aires Data — Gobierno de la Ciudad Autónoma de Buenos Aires, recurso «Estaciones de Ferrocarril (GeoJSON)»: https://data.buenosaires.gob.ar/ca/dataset/juqdkmgo-102/resource/78bcd320-544f-453c-ac15-110571855a8c
   - CRS declarado: OGC:CRS84.
   - Feature: id 33, idecaba 35, nombre Retiro, línea Mitre, ramal Retiro - Tigre.
   - Coordenadas GeoJSON [longitud, latitud]: `[-58.37512288514201, -34.59081198548558]`.
   - Creación del recurso: 17/09/2019; último cambio informado: 03/07/2026.
2. Trenes Argentinos / Argentina.gob.ar, «La línea Mitre retoma sus servicios habituales tras la renovación de vías en el ramal Tigre», publicado 24/11/2026:
   https://www.argentina.gob.ar/noticias/la-linea-mitre-retoma-sus-servicios-habituales-tras-la-renovacion-de-vias-en-el-ramal-tigre
   - Informa que desde el 24/11/2026 los ramales Retiro–Tigre, Retiro–J. L. Suárez y Retiro–Bmé Mitre funcionan de acuerdo con sus frecuencias habituales.

## Procedencia geoespacial y transformación
El GeoJSON declara `urn:ogc:def:crs:OGC:1.3:CRS84`. Se conservaron los valores publicados y únicamente se reordenaron los ejes de [longitud, latitud] a [latitud, longitud], que es el orden usado por el catálogo de la portada. No hubo reproyección ni transformación de datum. El recurso no informa método de captura ni precisión posicional; el punto se describe como geometría de estación publicada, no como levantamiento catastral.

## Deduplicación y cobertura
- Catálogo revisado antes de insertar: 93 nodos.
- ID, nombre y par de coordenadas: sin duplicados.
- Catálogo resultante: 94 nodos.
- CABA: 3 → 4 nodos.
- Estaciones ferroviarias: 5 → 6.
- Las 24 jurisdicciones y las nueve categorías existentes se conservan.
- CABA sigue sin registros de Paso fronterizo, Logística, Industria, Recurso mineral y Turismo; esto describe el catálogo, no la ausencia de esas actividades en la jurisdicción.

## Integración en la portada
No se modificó `index.html`: la portada ya carga `data/strategic-nodes.json`, contiene el filtro «Estaciones ferroviarias» y filtra por jurisdicción. El nuevo registro queda conectado al mapa y a los filtros existentes.

## Archivos
- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `README.md`
- Este registro en `research/runs/`

## Validación y publicación
- JSON del catálogo y de la matriz: parseados.
- Esquema de nodo: campos requeridos presentes; categoría existente; provincia admitida.
- Coordenadas: dentro del rango argentino y únicas en el catálogo.
- ID y nombre: únicos.
- URL de fuente y de coordenadas: HTTPS.
- Matriz: conteos por jurisdicción, categoría, región y total reconciliados con el catálogo.
- Integración de portada: ruta de carga y filtro Estación ferroviaria existentes.
- Commit de catálogo: `51016bb52645eacb2b17710124906745a5064d66`.
- Actions #780 se encontraba en cola tras el commit de catálogo, cuando la matriz todavía reflejaba el estado anterior. El resultado final de validación y Pages se verificará sobre el commit que incorpora la matriz y este registro.

## Pendientes y próxima prioridad
CABA mantiene vacantes en el catálogo las categorías Paso fronterizo, Logística, Industria, Recurso mineral y Turismo. No se agregan puntos sin coordenadas atribuibles. La rotación continúa por NOA; comenzar por Tucumán, actualmente la jurisdicción menos cubierta, y priorizar una categoría con fuente oficial de geometría o coordenadas.
