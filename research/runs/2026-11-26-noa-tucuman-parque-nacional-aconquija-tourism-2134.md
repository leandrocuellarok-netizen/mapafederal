# Tucumán — Parque Nacional Aconquija (Turismo)

- Fecha y hora de verificación: 26/11/2026, 21:34 ART.
- Rama de trabajo: `automation/noa-tucuman-aconquija-20261126`; rama base: `main`.
- HEAD de `main` inspeccionado al inicio: `1902f3dd3c7fd73c9e95c044e346bfc8b1aa0123`.
- Workflow previo: Actions #833, commit `1902f3dd3c7fd73c9e95c044e346bfc8b1aa0123`, conclusión `success`; jobs de validación y Deploy to GitHub Pages aprobados.
- Catálogo al inicio: 104 nodos, 24 jurisdicciones y nueve categorías. Tucumán tenía un único nodo (Aeropuerto Teniente Benjamín Matienzo) y no tenía Turismo.
- Alcance: catálogo nacional consumido por la portada `index.html`, sin desviar el trabajo a módulos regionales.

## Investigación y decisión

Se incorporó un nodo en la categoría existente `Turismo`:

- Nombre: Parque Nacional Aconquija.
- ID estable: `tucuman-turismo-parque-nacional-aconquija`.
- Provincia: Tucumán.
- Departamentos según SIB/APN: Alberdi, Chicligasta, Monteros, Río Chico y Tafí del Valle.
- Coordenadas: `[-27.19383, -65.95758]`.
- Fuente institucional: [APN — Parque Nacional Aconquija](https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-aconquija).
- Fuente de coordenadas: [SIB/APN — Parque Nacional Aconquija](https://sib.gob.ar/index.php/areas-protegidas/parque-nacional-Aconquija).
- El SIB publica 27 11 37.77 S (-27.19383), 65 57 27.27 O (-65.95758), la provincia, los cinco departamentos y la fecha de creación 22/08/2018. No declara datum/CRS ni si el punto es acceso, centroide o punto interno.
- Contraste primario: [APN — Información para visitantes, versión actualizada septiembre de 2022](https://www.argentina.gob.ar/sites/default/files/2019/05/informacion_y_recomendaciones_pn_aconquija_actualizado_septiembre_2022.pdf), página 1, reproduce la misma coordenada en DMS y documenta la jurisdicción de APN.
- Estado/uso público: [APN — Horarios / Cómo llegar](https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-aconquija/horarios-como-llegar) documenta tres sectores de acceso y advierte que el parque está abierto siempre que el acceso esté habilitado. No se verificó apertura, transitabilidad ni disponibilidad de servicios en tiempo real.
- CRS: no explicitado; no se asignó EPSG ni datum.
- Transformación: ninguna; se copiaron las coordenadas decimales del SIB/APN.
- Calidad: referencia geográfica general del área protegida; no se presenta como portal, acceso, centroide certificado ni perímetro.
- Estado de catálogo: `operativo` como área protegida administrada y con uso público documentado; no implica apertura en tiempo real.

## Cobertura resultante

- Catálogo: 105 nodos.
- Jurisdicciones: 24/24.
- Categorías: nueve.
- Tucumán: pasa de 1 a 2 nodos; Turismo pasa de 0 a 1.
- NOA: pasa de 10 a 11 nodos; las cinco jurisdicciones siguen representadas.
- Turismo nacional: pasa de 11 a 12.
- Próxima región de la rotación: NEA.

No se agregaron parques industriales, Casa Histórica ni terminales de transporte: para esos candidatos siguen faltando geometrías o coordenadas puntuales atribuibles, según la matriz de pendientes existente. No se geocodificaron direcciones ni se derivaron centroides.

## Archivos modificados

- `data/strategic-nodes.json`: nuevo nodo.
- `research/national-map-coverage.json`: conteos provinciales/regionales/categoriales, `catalogCommit`, rotación y metodología.
- `README.md`: conteo nacional y resumen de incorporación.
- `.github/workflows/static.yml`: prueba de regresión para Aconquija, Tucumán, NOA y total Turismo.
- `research/runs/2026-11-26-noa-tucuman-parque-nacional-aconquija-tourism-2134.md`: este registro.

`index.html` no se modificó: continúa consumiendo `data/strategic-nodes.json` y generando los filtros desde el catálogo.

## Validación, commit y publicación

- Deduplificación previa contra los 104 registros: ID, nombre y par de coordenadas no existentes.
- Validación local de construcción: JSON parseable; 105 IDs únicos; 105 nombres únicos; 105 pares de coordenadas únicos; jurisdicción, categoría, rango argentino y URLs HTTPS válidos; matriz recalculada.
- Se añadió una aserción para verificar coordenadas, fuente, CRS no declarado, calidad de punto de referencia, condición de acceso y conteo de Tucumán.
- Commit de catálogo: `2b41d8699be9447dd62651ca56f3b42dfe9c0ab4`.
- Commit de matriz, README, workflow y bitácora: `4eab5e9dfc30fbd4518d70eca61fb2b2951bd9cc`.
- PR #10 integrado en `main`; merge commit `ef5886947095aa8f2d62eabf0bc3aac200356192`.
- GitHub Actions #834 (run ID `45917772563`): `validate` falló en `Validate geographic and editorial JSON`; `deploy` fue omitido. La causa no fue el nodo ni la matriz: el runner usa fecha UTC `2026-11-27`, mientras que en Buenos Aires todavía era `2026-11-26`; el validador interpretó como vencida una oportunidad municipal vigente hasta el 26/11/2026. No se modificó `data/investment-opportunities.json`.
- Corrección aplicada en el workflow: commit `b160ca41858c3e8544185f0127802136bb8bf247`; PR #11 integrado mediante merge commit `20cdcb0140127602da05d00d6afdd525595adcb8`. Las validaciones date-only usan la fecha civil de `America/Argentina/Buenos_Aires` y se agregó un fixture que acepta una oportunidad vigente hasta el día local actual. No se modificó `data/investment-opportunities.json`.
- GitHub Actions #835 (run ID `45917903005`), asociado al merge commit `20cdcb0140127602da05d00d6afdd525595adcb8`: job `validate` completado con éxito; job `deploy` completado con éxito. [Ejecución #835](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45917903005).
- GitHub Pages: despliegue confirmado por el job `Deploy to GitHub Pages` de #835.
- Inspección independiente: se intentó abrir la portada pública y el JSON publicado, pero el entorno de verificación no pudo acceder al dominio de GitHub Pages. No se afirma inspección visual independiente.

## Brechas pendientes

- Parque Industrial Tucumán y otros parques industriales: obtener geometría/feature oficial atribuible y estado vigente; no calcular centroides de polígonos aún no recuperados.
- Casa Histórica de la Independencia: obtener punto catastral o feature oficial, no geocodificar la dirección.
- Terminal de ómnibus de Tucumán: la licitación fue adjudicada y la concesionaria asumió la operación en abril de 2026, pero no se incorporó como Logística porque es infraestructura de transporte de pasajeros y falta definir una correspondencia justificada con una categoría nacional existente; además, no se usó una dirección como coordenada.
- Portales Campo de Los Alisos, Cochuna/Laguna del Tesoro y Piedra Labrada: puntos individuales pendientes de coordenadas/geom oficiales si se decide representarlos por separado.
