# MAPA FEDERAL — Cuyo / San Luis / Parque Nacional Sierra de las Quijadas

- Fecha y hora de investigación: 2026-11-27 13:37 ART (UTC-3).
- Base inspeccionada: `main` en `a1e7cb3890a824a43c3a3c5239457034f949889c`.
- Región de rotación: Cuyo.
- Provincia: San Luis.
- Departamento: Belgrano.
- Categoría: Turismo.
- Cobertura previa: 118 nodos nacionales; San Luis tenía 3 nodos y ningún nodo de Turismo; Cuyo tenía 15 nodos.

## Mejora principal

Se incorpora un único registro:

- ID: `san-luis-turismo-parque-nacional-sierra-de-las-quijadas`.
- Nombre: Parque Nacional Sierra de las Quijadas.
- Coordenadas: `[-32.55677, -67.13459]`.
- Fuente institucional: [APN — Parque Nacional Sierra de las Quijadas](https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-sierra-de-las-quijadas).
- Fuente de coordenadas: [SIB/APN — Parque Nacional Sierra de las Quijadas](https://sib.gob.ar/index.php/areas-protegidas/parque-nacional-sierra-de-las-quijadas).
- Fuente de estado/uso público: [APN — Actividades, senderos y áreas recreativas](https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-sierra-de-las-quijadas/actividades).
- Fuente complementaria: [APN — Aniversario 34.º, 17/12/2025](https://www.argentina.gob.ar/node/487863).
- Publicador: Administración de Parques Nacionales (APN/SIB).
- Estado: `operativo` como área protegida con actividades y uso público documentados por APN; no implica disponibilidad diaria de senderos, cupos ni transitabilidad de rutas.
- CRS/datum: SIB/APN publica coordenadas geográficas decimales, pero no declara datum, CRS ni EPSG. No se asigna EPSG.
- Transformación: ninguna; se conservaron las coordenadas decimales publicadas, sin geocodificación ni reproyección.
- Calidad: referencia geográfica general del parque. SIB no define si el punto corresponde a acceso, centroide o punto interno; no se representa como acceso, centroide certificado ni perímetro.

SIB/APN identifica la provincia San Luis, departamento Belgrano, creación en 1991 por Ley Nacional 24.015/91, superficie de 73.785 ha y categoría internacional Sitio Ramsar. APN documenta senderos autoguiados y guiados, horarios estacionales, área de acampe con sanitarios y estacionamiento. La noticia institucional del 17/12/2025 confirma actividad administrativa y articulación nacional-provincial en el área. No se verificó transitabilidad, cupos ni disponibilidad de servicios en tiempo real.

## Cobertura antes y después

- Catálogo nacional: 118 → 119 nodos.
- San Luis: 3 → 4 nodos; Turismo: 0 → 1.
- Cuyo: 15 → 16 nodos; las cuatro jurisdicciones continúan representadas.
- Turismo nacional: 19 → 20.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría nueva.
- Jurisdicciones menos representadas: Santiago del Estero y Tucumán, con 2 nodos cada una.
- Próxima región de rotación: Centro.

## Archivos modificados

- `data/strategic-nodes.json` — nuevo nodo.
- `research/national-map-coverage.json` — conteos recalculados, `catalogCommit`, fecha y rotación Cuyo → Centro.
- `README.md` — total nacional y nota de la nueva referencia.
- `.github/workflows/static.yml` — conteo nacional, total Turismo, Cuyo, rotación y regresión específica del nodo.
- Este archivo de bitácora.

`index.html` no se modifica: su función `loadPoints()` continúa leyendo `./data/strategic-nodes.json`; los filtros de provincia y categoría se generan desde el catálogo.

## Validación previa a integración

- Catálogo JSON parseado; 119 registros.
- Deduplicación completa por ID, nombre y par de coordenadas: sin duplicados.
- Categoría `Turismo` existente en la interfaz.
- Provincia y departamento contrastados con SIB/APN.
- Coordenadas dentro del rango geográfico argentino.
- Fuente institucional, fuente de coordenadas y fuente de estado HTTPS.
- Matriz recalculada desde el catálogo; conteos por jurisdicción, región y categoría reconciliados.
- San Luis: 4 nodos y 1 de Turismo; Cuyo: 16 nodos; Turismo nacional: 20.
- Rotación actualizada: Cuyo → Centro.
- Workflow actualizado para comprobar el nodo, sus fuentes, coordenadas, estado y matriz.
- Validación completa de GitHub Actions y despliegue de Pages: pendientes de la integración en `main`.

## Integración y publicación

- Rama de trabajo: `automation/cuyo-san-luis-sierra-quijadas-1337`.
- Commit del catálogo: `9d307921eb03817df3f7ef1856a9203856a2a951`.
- PR, merge commit, ejecuciones de GitHub Actions y despliegue: se completarán tras la revisión e integración.

## Brechas no resueltas

- San Luis mantiene pendiente la revisión del marcador existente del Parque Industrial San Luis: el registro anterior conserva coordenadas redondeadas y una página provincial genérica; no se relocalizó sin geometría oficial.
- San Luis no tiene todavía nodos de Ciudad ni Logística; no se agregaron puntos a partir de topónimos o centroides urbanos.
- Santiago del Estero y Tucumán siguen como las jurisdicciones menos representadas a nivel nacional.
- La coordenada SIB del parque no declara datum/CRS ni semántica geométrica exacta.
- No se verificó transitabilidad, cupos ni disponibilidad de servicios en tiempo real.
