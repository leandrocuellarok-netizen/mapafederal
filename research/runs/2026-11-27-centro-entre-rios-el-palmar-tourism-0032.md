# MAPA FEDERAL — Centro / Entre Ríos / Parque Nacional El Palmar

- Fecha y hora de verificación: 2026-11-27T00:32:08-03:00 (ART).
- Rama: `ops/centro-entre-rios-el-palmar-20261127-0032`.
- HEAD de `main` inspeccionado antes de la ejecución: `47bd412b0de4ae69159b9a00edca6445fcabfac8`.
- Región trabajada: Centro. Próxima región: Patagonia.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporó un nodo a Entre Ríos en la categoría `Turismo`:

- Nombre: Parque Nacional El Palmar.
- ID: `entre-rios-turismo-parque-nacional-el-palmar`.
- Departamento: Colón.
- Coordenadas: `[-31.88216, -58.25668]`.
- Estado: `operativo` como área protegida y destino documentado por APN; no implica transitabilidad en tiempo real.
- Calidad: referencia geográfica general publicada por SIB/APN. No se presenta como acceso, centroide certificado ni perímetro.

SIB/APN publica las coordenadas geográficas decimales, departamento, superficie de 8.213 ha, creación y categoría Ramsar. La ficha no declara datum/CRS ni fecha de publicación/actualización de las coordenadas; se conservaron sin transformación. APN documenta la portada en RN 14 km 198, horarios estacionales, senderos y condiciones de acceso. La Ley 16.802/65 crea el parque.

## Fuentes

- SIB/APN — ficha del Parque Nacional El Palmar: https://sib.gob.ar/index.php/areas-protegidas/parque-nacional-el-palmar
- APN — Parque Nacional El Palmar: https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-palmar
- APN — Horarios / Cómo llegar: https://www.argentina.gob.ar/node/152864
- Argentina.gob.ar — Ley Nacional 16.802: https://www.argentina.gob.ar/normativa/nacional/ley-16802-46365/texto

## Cobertura

- Catálogo nacional: 107 → 108 nodos.
- Entre Ríos: 3 → 4 nodos; suma su primer registro `Turismo`.
- Centro: 14 → 15 nodos; sus cuatro jurisdicciones continúan representadas.
- Categoría `Turismo`: 13 → 14 nodos.
- Las jurisdicciones menos representadas siguen siendo Catamarca, Jujuy, Santiago del Estero y Tucumán, con dos nodos cada una.
- La portada continúa consumiendo `data/strategic-nodes.json` mediante `loadPoints()`; no se modificó `index.html`.

## Archivos y commits

- `data/strategic-nodes.json`: nuevo registro El Palmar. Commit: `357269bb6edab9343bf8f9ca0c3b667dfaec85db`.
- `research/national-map-coverage.json`: matriz recalculada, `catalogCommit` actualizado y rotación Centro → Patagonia.
- `README.md`: total actualizado a 108 y nota de calidad del punto.
- `.github/workflows/static.yml`: prueba de regresión para identidad, jurisdicción, coordenadas, fuentes, estado, matriz y rotación.
- `research/runs/2026-11-27-centro-entre-rios-el-palmar-tourism-0032.md`: esta bitácora.

## Validación previa a integración

- JSON del catálogo y matriz parseados correctamente.
- 108 IDs únicos, 108 nombres únicos y 108 pares de coordenadas únicos.
- 24 jurisdicciones y nueve categorías.
- Coordenadas dentro del rango argentino; fuente y coordinateSource HTTPS.
- Matriz por provincia/categoría recalculada desde el catálogo.
- Entre Ríos: cuatro nodos y uno de Turismo; Centro: 15 nodos.
- Prueba específica del nuevo registro agregada al workflow.
- `index.html` permanece sin cambios y continúa consumiendo el catálogo nacional.

## Integración y publicación

- Commit de catálogo: `357269bb6edab9343bf8f9ca0c3b667dfaec85db`.
- Matriz, README, workflow y bitácora se incorporan en el commit posterior de esta rama.
- PR, merge, GitHub Actions y Pages: pendientes al momento de crear esta bitácora. Se actualizará el cierre con el SHA final y el resultado verificable de validación y despliegue.

## Brechas pendientes

- Entre Ríos: aeropuerto, logística, industria, recurso mineral y estación ferroviaria siguen sin nodos catalogados; la ausencia en el catálogo no demuestra ausencia territorial.
- La Pampa: industria y logística continúan pendientes; el Parque Industrial General Pico no se agrega sin geometría verificable.
- Córdoba y Santa Fe: turismo, logística y estación ferroviaria requieren fuentes puntuales atribuibles.
- Persisten las jurisdicciones menos representadas de NOA: Catamarca, Jujuy, Santiago del Estero y Tucumán, con dos nodos cada una.

## Próxima prioridad

Región Patagonia, con prioridad para la provincia y categoría menos cubiertas según la matriz actualizada. Se mantienen las brechas de NOA como alerta de cobertura y se evita agregar puntos con coordenadas inferidas.
