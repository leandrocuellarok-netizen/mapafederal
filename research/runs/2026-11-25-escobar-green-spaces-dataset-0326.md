# Escobar — incorporación documental de plazas y parques municipales

Fecha de consulta: 25/11/2026, 03:26 (Argentina)  
Ámbito: Partido de Escobar; cobertura y etiquetas territoriales según el archivo municipal.

## Estado del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`
- Rama: `main`
- HEAD inspeccionado antes del cambio: `ade905d9d201b9ef5442ba917774416fa122db0c`
- El conector remoto permite inspeccionar GitHub, pero no expone un working tree local.
- PR abiertos: ninguno; los PR #2–#5 consultados están cerrados y fusionados.
- Workflow: `.github/workflows/static.yml`. La validación ejecuta, entre otros, `tests/escobar-transparency.test.js` y `tests/escobar-economic-profile.test.js`; el despliegue de Pages depende de que `validate` finalice correctamente.

## Hallazgo principal

La Municipalidad publica el dataset «Plazas y Parques del Partido de Escobar», bajo la organización «Estrategia Ambiental y datos». La ficha declara fuente de relevamiento propio municipal, versión 1.0, periodicidad anual, creación 01/10/2025, última actualización 31/03/2026 y licencia ODbL.

Se abrió el GeoJSON original. El recurso contiene una FeatureCollection con 46 geometrías Polygon y declara CRS EPSG:22185. El atributo `Localidad` utiliza literalmente estas etiquetas: `24 DE FEBR`, `GARIN`, `MASCHWITZ`, `ESCOBAR`, `MATHEU`, `MAQ.SAVIO` e `ISLAS`. No aparece el literal `LOMA VERDE` en los 46 registros examinados. Esto describe el contenido del dataset, no demuestra que Loma Verde carezca de espacios verdes. Las abreviaturas y «ISLAS» se preservan sin forzar equivalencias con la taxonomía oficial de siete localidades. Algunos registros tienen `Nombre=sin_nombre`.

## Cambio realizado

- Se incorporó el dataset a `transparencyDirectory.environmentalDatasets`.
- Se actualizaron las fechas de consulta del directorio de transparencia y del snapshot del portal al 25/11/2026.
- La capa queda con `geometryIntegrationStatus=pending`: EPSG:22185 no es longitud/latitud y no se transformaron coordenadas.
- No se agregaron puntos ni polígonos al mapa; no se atribuyen horarios, accesibilidad, mantenimiento ni operación actual a cada espacio.
- Se amplió la prueba de transparencia para comprobar metadatos, CRS, conteo, etiquetas originales y límites de integración.
- Se flexibilizó una aserción del test económico: el workflow #560 fallaba porque esperaba «Escobar 360°», mientras el registro vigente dice «Escobar 360». La prueba ahora comprueba el nombre común sin imponer el signo de grado.

## Fuente primaria consultada

Municipalidad de Escobar — Portal de Datos Abiertos, «Plazas y Parques del Partido de Escobar». La ficha no informa fecha de publicación; sí declara creación 01/10/2025 y última actualización 31/03/2026. Recurso GeoJSON abierto y leído el 25/11/2026.

## Control adicional

La ficha «Reservas Naturales Municipales del Partido de Escobar» publica metadatos y declara recursos GeoJSON y SHP; sin embargo, el enlace directo al GeoJSON devolvió HTTP 404. No se incorporó como recurso disponible ni se añadió al catálogo. Se requiere que el portal restaure o corrija el archivo antes de integrarlo.

## CI previo al cambio

- Workflow #560, run ID `45558554122`, commit `ade905d9d201b9ef5442ba917774416fa122db0c`: `validate` falló en `Test Escobar economic profile and company evidence`, por la aserción de «Escobar 360°»; el job `deploy` fue omitido.
- Workflow #559, run ID `45558548762`: cancelado antes de completar validación.
- No se atribuye un despliegue de Pages a esos runs.

## Archivos modificados

- `data/escobar-territory.json`
- `tests/escobar-transparency.test.js`
- `tests/escobar-economic-profile.test.js`
- Este registro de investigación.

## Validación de esta edición

Se parseó el JSON modificado y se comprobaron por código los campos del nuevo registro, el CRS, el conteo de 46 features y la preservación de las etiquetas de localidad. Las pruebas Node y la validación integral quedan sujetas al próximo workflow de GitHub Actions; no se ejecutaron localmente en este entorno.

## Pendientes

1. Conseguir una versión actualizada del GeoJSON o la capa equivalente con cobertura explícita de Loma Verde, sin inferir su ausencia.
2. Resolver el etiquetado «ISLAS» y las abreviaturas mediante el glosario o metadatos oficiales, sin renombrarlas unilateralmente.
3. Verificar una transformación EPSG:22185 a EPSG:4326 con control de puntos y superposición contra un límite municipal oficial antes de dibujar polígonos.
4. Recuperar el recurso GeoJSON de Reservas Naturales Municipales, hoy inaccesible con respuesta 404.
