# MAPA FEDERAL — Corrección de georreferenciación del Puerto de Buenos Aires

- Fecha y hora de verificación: 2026-11-27 03:39 (America/Argentina/Buenos_Aires).
- Región priorizada: CABA.
- Jurisdicción: Ciudad Autónoma de Buenos Aires; departamento y localidad Ciudad de Buenos Aires.
- Categoría: Puerto.
- Registros corregidos: 1; altas y bajas: 0.
- ID estable: `caba-puerto-puerto-de-buenos-aires`.

## Brecha abordada

El nodo existente Puerto de Buenos Aires utilizaba `[-34.576, -58.369]`, una coordenada redondeada sin una localización puntual atribuible en el registro previo. Se reemplazó por la localización general publicada por la Agencia Nacional de Puertos y Navegación (ANPyN). No se creó un segundo marcador para el mismo puerto.

## Coordenada y procedencia

- Coordenada anterior: `[-34.576, -58.369]`.
- Coordenada corregida (latitud, longitud): `[-34.59552777777778, -58.36405555555556]`.
- Coordenada original publicada: latitud `34°35'43.9"S`; longitud `58°21'50.6"W`.
- Transformación: conversión aritmética DMS a grados decimales; sin reproyección ni transformación de datum.
- CRS/datum: no declarados por ANPyN; no se asigna EPSG.
- Calidad: localización general del puerto. La fuente no define precisión ni semántica geométrica; el marcador no representa un muelle, acceso, terminal individual, centroide certificado ni perímetro.
- Estado: `no_verificado` para operación efectiva en tiempo real. La ficha administrativa documenta muelles para pasajeros y carga, pero no se infiere disponibilidad operativa de cada muelle.

## Fuentes primarias

1. ANPyN — Puerto Buenos Aires: https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/buenos-aires
   - Publica la localización general, provincia, departamento y localidad.
   - En la misma ficha enumera muelles y terminales, incluidos atraques para pasajeros y carga.
   - Consultada el 2026-11-27; no declara fecha de publicación o actualización de la coordenada.
2. Dirección Nacional de Migraciones — Pasos Internacionales: https://www.argentina.gob.ar/migraciones/pasos-internacionales
   - Mantiene identificadas las terminales portuarias de Buquebus y Colonia Express entre las vías de ingreso y egreso del AMBA.
   - Esta fuente respalda la relevancia fronteriza de las terminales, pero no aporta geometría puntual para cada una.

## Candidatos no incorporados

CABA conserva la categoría Paso fronterizo como brecha de catálogo. No se añadieron Buquebus ni Colonia Express como nodos separados: aunque Migraciones confirma ambas terminales y ANPyN identifica los muelles de pasajeros, no se recuperó una geometría puntual oficial atribuible a cada terminal. La localización general del puerto no se reutiliza para representar terminales individuales.

## Catálogo y cobertura

- Catálogo nacional: 109 nodos; 24 jurisdicciones; nueve categorías.
- CABA: cinco nodos; un Puerto. Los conteos por provincia y categoría no cambian.
- Puerto Buenos Aires: un registro existente corregido; sin duplicación de puerto.
- La matriz mantiene Paso fronterizo, Logística, Industria y Recurso mineral como categorías sin nodo en CABA; esto describe el catálogo, no la ausencia de actividad o infraestructura.
- Rotación: última región CABA; próxima región NOA.
- `index.html` no se modificó. La portada sigue consumiendo `data/strategic-nodes.json` y conserva sus filtros actuales.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- Este registro en `research/runs/`

## Commits de la rama de trabajo

- Catálogo: `ed9bfefa0e416c12d1b0a4d7f58fc9b4f984b4d0`.
- Matriz: `fc6ba1c45d4a342a10f795b74f0a7feca6d3ce95`.
- Workflow / pruebas de regresión: `2783af12db922b8fc02da2cbf04ad81e628352f7`.
- Integración en `main`, ejecución de GitHub Actions y despliegue de Pages: pendientes al redactar esta bitácora; se agregarán al cierre tras la verificación.

## Validación prevista

- Parseo JSON de catálogo y matriz.
- Esquema del nodo, ID y nombre únicos, coordenadas dentro del rango argentino y sin duplicados.
- Provincia, departamento, categoría y URLs HTTPS.
- Conversión DMS, CRS no declarado, calidad del punto, estado no verificado y conservación de la coordenada anterior.
- Reconciliación de 109 nodos, 24 jurisdicciones, nueve categorías, totales y rotación CABA → NOA.
- Pruebas del workflow y sintaxis JavaScript existente.
- Verificación del job `Deploy to GitHub Pages`; la aprobación de validación por sí sola no se considerará prueba de publicación.

## Brechas pendientes

1. Geometrías oficiales individuales para las terminales internacionales Buquebus y Colonia Express en CABA.
2. Geometrías oficiales de nodos logísticos e industriales de CABA, si se identifican instalaciones con punto inequívoco.
3. Catamarca, Jujuy, Santiago del Estero y Tucumán siguen entre las jurisdicciones con menor cobertura; la próxima rotación prioriza NOA, sin perder de vista esas brechas.


## Resultado de la primera ejecución de CI y corrección

- PR #19 integrado en `main`: https://github.com/leandrocuellarok-netizen/mapafederal/pull/19.
- Commit de integración: `1120c4278002be0bb2193aa0a2b0c13f2f830880`.
- GitHub Actions #855 (run ID `45953649302`) ejecutó las validaciones iniciales y falló en «Validate geographic and editorial JSON», línea 145 del bloque Python: una aserción comparaba la frase `conversión aritmética DMS` contra un texto convertido a minúsculas. La diferencia de mayúsculas/minúsculas era un defecto del test, no de la coordenada ni del registro.
- Las comprobaciones previas del nodo y del resto de los datasets avanzaron; el job de despliegue fue omitido por la política del workflow al fallar la validación.
- Corrección preparada en PR #20: se normalizó también el literal esperado a minúsculas (`conversión aritmética dms`). Commit de corrección del workflow: `c7fdbc53354f3b93e9b43106aafd37dbaabe2b57`.
- La ejecución posterior de validación y Pages queda pendiente hasta integrar la corrección.


## Integración final, validación y publicación

- PR #20 integrado mediante squash: https://github.com/leandrocuellarok-netizen/mapafederal/pull/20.
- Commit de corrección del workflow: `c367b2603fda5202ddad3ee9d315224ca5946b6c`.
- GitHub Actions #856 (run ID `45953747499`, commit `c367b2603fda5202ddad3ee9d315224ca5946b6c`): job `validate` = `success`; job `deploy` = `success`, incluido `Deploy to GitHub Pages`.
- La ejecución #855 (run ID `45953649302`) permanece registrada como fallida por el literal de prueba sensible a mayúsculas/minúsculas; la corrección se integró en PR #20 y la ejecución #856 pasó.
- La portada pública y el JSON publicado no pudieron abrirse desde el entorno de verificación. Por tanto, el despliegue de Pages está confirmado por Actions, pero no se afirma inspección visual independiente del marcador ni lectura directa del archivo servido.
- Integración de homepage: `index.html` no cambió; sigue solicitando `./data/strategic-nodes.json`, y el registro corregido permanece dentro del catálogo conectado a sus filtros.


## Ajuste de trazabilidad del SHA de catálogo

Tras la integración squash de PR #19, el cambio de catálogo quedó contenido en el commit de `main` `1120c4278002be0bb2193aa0a2b0c13f2f830880`. Se actualiza `research/national-map-coverage.json` para que `catalogCommit` apunte a ese commit integrado, en lugar del commit de catálogo de la rama de trabajo previo al squash (`ed9bfefa0e416c12d1b0a4d7f58fc9b4f984b4d0`). El workflow se ajusta para validar el SHA de `main`. No cambian datos, coordenadas, conteos ni filtros.
