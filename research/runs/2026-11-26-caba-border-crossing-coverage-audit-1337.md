# MAPA FEDERAL — Auditoría CABA / aplicabilidad de pasos fronterizos

- Fecha y hora: 2026-11-26 13:37 (America/Argentina/Buenos_Aires).
- Jurisdicción priorizada: CABA; revisión de consistencia nacional de la matriz.
- Categoría: Paso fronterizo.
- Región de la rotación: CABA.
- Resultado: mejora de calidad de la matriz y de la definición de categoría; no se añadieron puntos.

## Brecha y corrección

La matriz anterior marcaba Paso fronterizo como no aplicable para CABA y Buenos Aires por no tener frontera terrestre internacional. La definición era demasiado estrecha: las fuentes oficiales documentan cruces fluviales internacionales en ambas jurisdicciones.

- CABA: la Dirección Nacional de Migraciones incluye la Terminal Portuaria de Buquebus y Colonia Express, además de la Terminal de Cruceros Quinquela Martín, entre las vías de ingreso y egreso del Área Metropolitana. Argentina.gob.ar ubica la terminal Buquebus en Puerto Madero, CABA.
- Buenos Aires: Argentina.gob.ar identifica dos pasos internacionales fluviales hacia Uruguay: Puerto Guazú-Guazucito–Carmelo y Puerto Martín García–Carmelo.

Se retiró Paso fronterizo de `notApplicableCategories` en CABA y Buenos Aires y se incorporó a `missingCategories` en ambas. Se registraron los candidatos sin añadir marcadores: las fuentes consultadas no proporcionan coordenadas puntuales o geometrías atribuibles para esas terminales/pasos.

Para esta matriz, Paso fronterizo se define como cruce terrestre o fluvial con contraparte internacional. Los aeropuertos, aunque puedan tener control migratorio internacional, se contabilizan en la categoría Aeropuerto y no se duplican como Paso fronterizo.

Se marcaron como no aplicable en Córdoba, La Pampa, San Luis, Santa Fe, Santiago del Estero y Tucumán, que no tienen frontera terrestre ni fluvial internacional según la cartografía política oficial del IGN. Las restantes jurisdicciones mantienen su estado previo.

## Candidato turístico CABA no incorporado

Se revisó la parada 07 «Reserva Ecológica (principal)» del Bus Turístico. Una vista previa GeoJSON anterior muestra la feature id=17, CRS84, con coordenadas longitud/latitud `[-58.356996687129474, -34.616277328065124]`, dirección Av. Dr. Tristán Achával Rodríguez 1500. Sin embargo, la ficha actual del recurso informa una modificación el 13/11/2026 y la vista previa/descarga vigente no permitió revalidar esa geometría. No se reutilizó una coordenada de una versión anterior no confirmada.

## Fuentes oficiales

- Dirección Nacional de Migraciones, Pasos Internacionales: https://www.argentina.gob.ar/migraciones/pasos-internacionales
- DNM, Pasos fluviales: https://www.argentina.gob.ar/migraciones/pasos-fluviales-autorizacion-de-salida-del-pais-de-ninos-ninas-y-adolescentes
- Argentina.gob.ar, Cómo llegar a la Provincia de Buenos Aires (dos pasos fluviales): https://www.argentina.gob.ar/node/216042
- Argentina.gob.ar, terminal Buquebus en Puerto Madero: https://www.argentina.gob.ar/noticias/el-gobierno-nacional-inauguro-un-centro-integral-de-documentacion-en-la-terminal-de
- IGN, ANIDA, mapa político bicontinental y límites internacionales: https://static.ign.gob.ar/anida/fasciculos/fasc_ayem_organizacion_politica.pdf
- Buenos Aires Data, Bus Turístico Paradas (GeoJSON), ficha actualizada el 13/11/2026: https://data.buenosaires.gob.ar/dataset/bus-turistico/resource/ad2915b2-9f43-4fbe-b4ec-b425e989f339
- Ente de Turismo de CABA, agenda y servicio del Bus Turístico: https://turismo.buenosaires.gob.ar/es/article/que-hacer-esta-semana

## Catálogo y cobertura

- Catálogo sin cambios: 99 nodos, 24 jurisdicciones y nueve categorías.
- Registros con ID estable: 14; 85 registros históricos siguen sin ID y no se migraron en esta ejecución.
- Puntos añadidos o corregidos: ninguno.
- Matriz: CABA y Buenos Aires pasan a tener Paso fronterizo como brecha; Córdoba, La Pampa, San Luis, Santa Fe, Santiago del Estero y Tucumán lo registran como no aplicable.
- Rotación: última región CABA; próxima región NOA.
- Los conteos por provincia y categoría se recalcularon desde el catálogo sin alterar sus registros.

## Archivos tocados

- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- `README.md`
- `research/runs/2026-11-26-caba-border-crossing-coverage-audit-1337.md`

`data/strategic-nodes.json` e `index.html` no se modificaron. La portada sigue consumiendo el mismo catálogo; no se cambió ningún filtro.

## Validación y publicación

- JSON de catálogo y matriz: pendiente de ejecución automatizada tras el commit.
- Reconciliación de conteos: se recalculó la matriz a partir de los 99 nodos.
- IDs y nombres existentes: 14 IDs únicos; 99 nombres sin duplicados.
- JavaScript de portada: sin cambios; el workflow existente mantiene la comprobación de sintaxis.
- Commit principal de matriz, validación y documentación: `523b8c1998954f0e0e59be52710ef084d89b4b62`.
- GitHub Actions: ejecución [#45861500081](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45861500081), commit `523b8c1998954f0e0e59be52710ef084d89b4b62`; jobs `validate` y `deploy` concluyeron `success`, incluido `Deploy to GitHub Pages`.
- GitHub Pages: despliegue aprobado por Actions. La apertura independiente de `https://leandrocuellarok-netizen.github.io/mapafederal/` no fue accesible desde el entorno de verificación; no se afirma inspección visual del mapa.

- Commit de finalización de esta bitácora: se registra en el historial Git al actualizar este archivo.

## Gaps no resueltos

1. Coordenadas oficiales de las terminales fluviales internacionales de CABA y de los dos pasos fluviales de Buenos Aires.
2. Geometría vigente de la parada del Bus Turístico asociada a la Reserva Ecológica.
3. Migración gradual de los 85 registros históricos sin ID, preservando procedencia.
