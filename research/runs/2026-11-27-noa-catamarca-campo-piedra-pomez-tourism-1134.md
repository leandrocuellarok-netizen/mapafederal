# MAPA FEDERAL — NOA / Catamarca / Campo de Piedra Pómez

- Fecha y hora de investigación: 2026-11-27 11:34 ART (UTC-3).
- Región objetivo: NOA.
- Jurisdicción: Catamarca.
- Departamento: Antofagasta de la Sierra.
- Categoría: Turismo.
- Base inspeccionada: `main` en `051225e572bbc7e212302a2a5a13fdbeb2f56d75`.
- Cobertura previa: 116 nodos nacionales; Catamarca tenía 2 nodos y ningún nodo de Turismo; NOA tenía 12 nodos.
- Mejora principal: incorporación del Campo de Piedra Pómez como referencia turística general.
- ID: `catamarca-turismo-campo-de-piedra-pomez`.
- Coordenadas: `[-26.480508, -67.337452]`.
- Estado: `operativo` como destino turístico documentado en portales oficiales; no se afirma apertura diaria, disponibilidad de guías, tarifas actuales ni transitabilidad en tiempo real.

## Fuentes

1. Ministerio de Cultura, Turismo y Deporte de Catamarca — Visit Catamarca:
   https://www.visitcatamarca.com/imperdibles/campo-de-piedra-pomez
   - Identifica el Campo de Piedra Pómez en El Peñón, departamento Antofagasta de la Sierra.
   - Describe el atractivo, el acceso arancelado, el puesto de guardaparques y la circulación en 4x4 con guía habilitado.
   - Publica accesos desde El Peñón, la Villa de Antofagasta de la Sierra y una alternativa estacional desde Fiambalá.
   - No informa fecha de publicación o actualización; consulta: 2026-11-27.

2. Presidencia de la Nación — Argentina.gob.ar, “Caminar en el Campo de Piedra Pómez”:
   https://www.argentina.gob.ar/jefatura/turismo/viaja-por-argentina/caminar-en-el-campo-de-piedra-pomez
   - Confirma que el acceso principal es desde El Peñón y recomienda vehículos 4x4 y guías locales o excursiones organizadas.
   - Consulta: 2026-11-27.

3. Honorable Cámara de Diputados de la Nación — Proyecto 6541-D-2024, fundamentos:
   https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6541-D-2024.pdf
   - Publica literalmente “Coordenadas / ubicación GPS: -26.480508, -67.337452”.
   - El PDF corresponde a un proyecto legislativo del período 2024, no a una ley sancionada. Se utiliza únicamente como fuente atribuible del par GPS; no se lo presenta como declaración nacional vigente.
   - No informa método de captura, datum/CRS, precisión ni semántica geométrica.

4. Candidatura industrial no incorporada — Parque Industrial El Pantanillo:
   - Asociación de Parques Industriales Argentinos (APIA): https://apia.ar/parque-industrial/parque-industrial-el-pantanillo/
   - Directorio sectorial con coordenada secundaria: https://parquesindustriales.com.ar/parque?id=57765
   - Digesto Legislativo de Catamarca, Ley 5148: https://digesto.catamarca.gob.ar/ley/ley_detail/2846
   - Geoportal oficial IDECAT y geoservicios: https://nodoide.catamarca.gob.ar/geoservicios.php
   - WFS GetCapabilities: https://nodoide.catamarca.gob.ar/geoserver/idecat/ows?service=WFS&version=2.0.0&request=GetCapabilities
   - APIA identifica el parque y publica 342 ha; el Digesto confirma la existencia del Área Industrial El Pantanillo. El directorio secundario publica -28.537018, -65.803251 sin CRS/datum, método, precisión ni semántica geométrica. El WFS oficial no fue accesible (403) en esta revisión y no se recuperó geometría. No se incorporó un marcador.

## Registro incorporado

- Se agregó un único nodo de tipo `Turismo` en Catamarca.
- El nombre y la jurisdicción se contrastaron con el portal provincial de turismo.
- Las coordenadas se copiaron del par GPS publicado en el proyecto HCDN 6541-D-2024; no se geocodificó el topónimo ni se realizó reproyección.
- CRS/datum: no declarados. No se asigna EPSG.
- El punto se conserva como referencia general del atractivo natural; no representa acceso, punto de ingreso, centroide certificado ni perímetro.
- El estado `operativo` refiere a la visita turística documentada por los portales oficiales; no acredita apertura diaria ni condiciones viales en tiempo real.

## Cobertura antes y después

- Catálogo nacional: 116 → 117 nodos.
- Catamarca: 2 → 3 nodos.
- Catamarca / Turismo: 0 → 1.
- NOA: 12 → 13 nodos; las cinco jurisdicciones regionales siguen representadas.
- Turismo nacional: 17 → 18.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría nueva.
- Jurisdicciones menos representadas: Santiago del Estero y Tucumán, con 2 nodos cada una.
- Catamarca mantiene pendientes Ciudad, Puerto, Logística, Industria, Recurso mineral y Estación ferroviaria.
- La Reserva Natural Provincial Laguna Blanca continúa pendiente: SIB publica coordenadas con precisión de minuto y no se recuperó geometría o acceso puntual oficial.
- El Parque Industrial El Pantanillo queda como candidato no incorporado hasta obtener geometría oficial o coordenada institucional atribuible.
- Próxima región de rotación: NEA.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `README.md`
- `.github/workflows/static.yml`
- `research/runs/2026-11-27-noa-catamarca-campo-piedra-pomez-tourism-1134.md`

`index.html` no se modificó. La inspección del HEAD base confirmó que la portada carga `data/strategic-nodes.json` y aplica los filtros existentes sobre los tipos del catálogo.

## Validación previa a merge

- Deduplicación contra el catálogo completo: ID, nombre y par de coordenadas no existentes.
- Catálogo JSON: 117 registros.
- IDs, nombres y pares de coordenadas: 117 únicos.
- Coordenadas dentro del rango geográfico admitido por el validador.
- Fuentes del nodo en HTTPS.
- 24 jurisdicciones y nueve categorías existentes.
- Matriz provincial y regional recalculada desde el catálogo; conteos reconciliados.
- Catamarca: 3 nodos, 1 de Turismo; NOA: 13.
- README actualizado a 117 nodos.
- Workflow actualizado para 117 nodos, 18 nodos de Turismo, NOA → NEA y el nuevo registro.
- Validación automatizada del contenido y del esquema: pendiente de confirmación por GitHub Actions tras integrar el PR.
- GitHub Pages: pendiente de ejecución posterior al merge.

## Commits y publicación

- Commit de catálogo: `f55c0e50178721fcd7dfc1320245d7f192e06960`.
- Commit de matriz: `a89d82b3cbf7407d97f7deb721190b5f3dd56ab6`.
- Commit de README: `f9a435721d2c229fc5b59cc44c458ca182203d0b`.
- Commit de workflow: `b80950ee1295f85c09ce4da1c035eebbd6c11b3e`.
- Rama de trabajo: `automation/noa-catamarca-campo-piedra-pomez-20261127-1134`.
- PR #32: https://github.com/leandrocuellarok-netizen/mapafederal/pull/32, integrado el 2026-11-27 11:38 ART (UTC-3).
- Merge commit y HEAD de main tras la integración de datos: `0fc75cc1d58ccd7bbac82baa906c8044aa5ae135`.
- GitHub Actions #879: https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/46017798982 — ejecución completada con `success` sobre el SHA de merge.
- Job `validate`: `success`; las pruebas del catálogo, matriz, geografía, JSON y sintaxis de JavaScript finalizaron correctamente.
- Job `deploy`: `success`; el paso `Deploy to GitHub Pages` terminó correctamente.
- `index.html` conserva el blob SHA `69e72891fe28e19580f681b85699da6377912c9c`; no fue modificado y sigue cargando el catálogo nacional.
- Inspección independiente posterior al despliegue: se intentó abrir https://leandrocuellarok-netizen.github.io/mapafederal/, pero el navegador devolvió que la URL no era accesible. Se confirma el job de Pages, pero no se afirma verificación visual del marcador.

## Gaps no resueltos

- Campo de Piedra Pómez: coordenada GPS atribuida a un proyecto legislativo, sin CRS/datum ni precisión; se documenta como referencia general.
- Reserva Natural Provincial Laguna Blanca: falta geometría o coordenada de acceso con precisión suficiente y evidencia de uso público.
- Parque Industrial El Pantanillo: falta geometría oficial del IDECAT o coordenada institucional puntual; la coordenada disponible es secundaria.
- Santiago del Estero y Tucumán siguen siendo las jurisdicciones menos representadas.
