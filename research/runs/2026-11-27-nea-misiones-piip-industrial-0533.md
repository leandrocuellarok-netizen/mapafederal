# MAPA FEDERAL — Misiones / Parque Industrial y de la Innovación Posadas

- Fecha y hora de investigación: 2026-11-27 05:33 ART (UTC-3).
- Región objetivo: NEA.
- Provincia: Misiones.
- Categoría: Industria.
- Cobertura previa: 3 nodos en Misiones (Puerto, Aeropuerto y Turismo); sin nodo Industria.
- Mejora principal: incorporación del Parque Industrial y de la Innovación Posadas (PIIP).
- ID: `misiones-industria-parque-industrial-y-de-la-innovacion-posadas`.
- Coordenadas: `[-27.369429, -55.991358]`.
- Estado: operativo documentado a escala del predio; la evidencia confirma actividad industrial en mayo de 2026, no el estado de todas las empresas ni disponibilidad de lotes.

## Fuentes

1. PIIP — sitio institucional oficial: https://piip.misiones.gob.ar/
   - Documenta el parque en Posadas, Paraje Nemesio Parma, 112 ha, infraestructura y registro RENPI 20130080. La página no informa fecha de publicación o actualización.
2. Gobierno de Misiones — Acción Cooperativa: jornada de packaging estratégico en Posadas (22/05/2026): https://misiones.gob.ar/accion-cooperativa-jornada-de-packaging-estrategico-en-posadas/
   - Documenta actividad de la planta de Plastimi SRL dentro del PIIP.
3. Municipalidad de Posadas — Capacitación en IA aplicada a la moda en el Parque Industrial (11/05/2026): https://posadas.gov.ar/28DD9032AE0AA5C89D03C94DC20BB81F/noticiashow
   - Documenta una actividad realizada en el espacio MiDi del parque.
4. Parques Industriales — ficha PIIP, ID 74378 (fuente secundaria de coordenadas): https://parquesindustriales.com.ar/parques/74378
   - Publica `-27.369429, -55.991358`. No informa fecha de captura, precisión, datum/CRS ni semántica geométrica.

## Registro incorporado

- Se agregó un único nodo de tipo Industria para Misiones.
- La coordenada se transcribió del directorio sectorial secundario; no se geocodificó el topónimo ni se calculó centroide.
- CRS/datum/EPSG no declarados; no se realizó reproyección ni transformación.
- El punto se usa como referencia general del predio, no como acceso, centroide certificado, lote ni perímetro.
- La actividad operativa se sustenta en fuentes oficiales de mayo de 2026; no se verificó padrón empresarial actualizado ni disponibilidad de lotes.

## Cobertura

- Catálogo: 111 nodos.
- Misiones: 4 nodos; Industria pasa de 0 a 1.
- NEA: 13 nodos en cuatro jurisdicciones.
- Industria nacional: 15 nodos.
- Jurisdicciones: 24/24.
- Menos representadas: Catamarca, Santiago del Estero y Tucumán (2 nodos cada una).
- Próxima región de rotación: Cuyo.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `README.md`
- `.github/workflows/static.yml`
- `research/runs/2026-11-27-nea-misiones-piip-industrial-0533.md`

`index.html` no se modificó; la portada continúa consumiendo `data/strategic-nodes.json` mediante su integración existente.

## Validación previa y commits

- JSON del catálogo parseado; 111 registros.
- ID, nombre y par de coordenadas del nuevo registro no duplicados.
- Categoría `Industria` admitida por el esquema actual.
- Coordenadas dentro del rango geográfico argentino.
- Jurisdicción Misiones y conteos de matriz recalculados desde el catálogo.
- Misiones: 4 nodos; Industria: 1; la categoría se elimina de `missingCategories`.
- NEA: 13 nodos; Industria nacional: 15; 24 jurisdicciones.
- Se añadieron aserciones específicas del PIIP y se actualizaron las regresiones de conteo, rotación y `catalogCommit`.
- Commit de catálogo: `955c31b67b138731391f45a297cc532a17ab0ec2`.
- Commit de matriz: `5792f11f6055807227422bcd1789400db669bde5`.
- Commit de README: `049d8daaf45646d285a2f59cac83a447e4e07623`.
- Commit de workflow: `200f77220ad023381e8be6a8e56f58c29ca2a162`.
- Rama de trabajo: `automation/2026-11-27-nea-misiones-piip`.
- PR, ejecución de GitHub Actions y despliegue de Pages: pendientes de integración y verificación.

## Próxima prioridad

Cuyo, con revisión de brechas industriales y logísticas en La Rioja, Mendoza, San Juan y San Luis. Mantener en alerta a Catamarca, Santiago del Estero y Tucumán por su menor cobertura nacional.
