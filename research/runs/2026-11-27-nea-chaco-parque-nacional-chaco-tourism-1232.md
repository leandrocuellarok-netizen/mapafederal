# MAPA FEDERAL — NEA / Chaco / Parque Nacional Chaco

- Fecha y hora de investigación: 2026-11-27 12:32 ART (UTC-3).
- Base inspeccionada: `main` en `c8dd38528fc90bc6a2146ac3571188a9b11eab51`.
- Región de rotación: NEA.
- Provincia: Chaco.
- Departamento: Presidencia de la Plaza.
- Categoría: Turismo.
- Cobertura previa: 117 nodos nacionales; Chaco tenía 3 nodos y ningún nodo de Turismo; NEA tenía 13 nodos.

## Mejora principal

Se incorpora un único registro:

- ID: `chaco-turismo-parque-nacional-chaco`.
- Nombre: Parque Nacional Chaco.
- Coordenadas: `[-26.82658, -59.65506]`.
- Fuente de coordenadas: [SIB/APN — Parque Nacional Chaco](https://sib.gob.ar/areas-protegidas/parque-nacional-chaco).
- Fuente institucional: [APN — Parque Nacional Chaco](https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-chaco).
- Fuente de estado y acceso: [APN — Horarios / Cómo llegar](https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-chaco/horarios-como-llegar).
- Fuente de servicios: [APN — Servicios](https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-chaco/servicios).
- Publicador: Administración de Parques Nacionales (APN/SIB).
- Estado: `operativo` como área protegida con ingreso público y servicios de visita documentados; no implica transitabilidad de caminos ni disponibilidad diaria de servicios en tiempo real.
- CRS/datum: SIB/APN publica coordenadas geográficas decimales, pero no declara datum, CRS ni EPSG. No se asigna EPSG.
- Transformación: ninguna; se conservaron las coordenadas decimales publicadas, sin geocodificación ni reproyección.
- Calidad: referencia geográfica general del parque. SIB no define si el punto corresponde a portada, acceso o punto interno; no se representa como acceso, centroide certificado ni perímetro.

SIB/APN identifica la provincia Chaco, departamento Presidencia de la Plaza, creación en 1954 por Ley 14.366/54 y superficie de 14.981 ha. APN publica ingreso al público todos los días de 7 a 19 h, acceso desde Capitán Solari por camino vecinal y servicios de visita junto al Centro de Visitantes. No se verificó transitabilidad, apertura de senderos ni disponibilidad de servicios en tiempo real.

## Cobertura antes y después

- Catálogo nacional: 117 → 118 nodos.
- Chaco: 3 → 4 nodos; Turismo: 0 → 1.
- NEA: 13 → 14 nodos; las cuatro jurisdicciones continúan representadas.
- Turismo nacional: 18 → 19.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría nueva.
- Jurisdicciones menos representadas: Santiago del Estero y Tucumán, con 2 nodos cada una.
- Próxima región de rotación: Cuyo.

## Archivos modificados

- `data/strategic-nodes.json` — nuevo nodo.
- `research/national-map-coverage.json` — conteos recalculados, `catalogCommit`, fecha y rotación NEA → Cuyo.
- `README.md` — total nacional y nota de la nueva referencia.
- `.github/workflows/static.yml` — conteo nacional, totales de Turismo, NEA, rotación y regresión específica del nodo.
- Este archivo de bitácora.

`index.html` no se modifica: su función `loadPoints()` continúa leyendo `./data/strategic-nodes.json`; los filtros de provincia y categoría se generan desde el catálogo.

## Validación previa a integración

- Catálogo JSON parseado; 118 registros.
- Deduplicación completa por ID, nombre y par de coordenadas: sin duplicados.
- Categoría `Turismo` existente en la interfaz.
- Provincia y departamento contrastados con SIB/APN.
- Coordenadas dentro del rango argentino.
- Fuente principal, fuente de coordenadas y fuente de estado HTTPS.
- Matriz recalculada desde el catálogo; conteos por jurisdicción, región y categoría reconciliados.
- Chaco: 4 nodos y 1 de Turismo; NEA: 14 nodos; Turismo: 19.
- Rotación actualizada: NEA → Cuyo.
- Workflow actualizado para comprobar el nodo, sus fuentes, coordenadas, estado y matriz.
- Validación completa de GitHub Actions y despliegue de Pages: pendientes de la integración en `main`.

## Integración y publicación

- Rama de trabajo: `automation/nea-chaco-parque-nacional-20261127-1232`.
- Commit del catálogo: `b1c6b31dc7ce4f7ded271e5fe7a70503a8662564`.
- PR #33 integrado en `main`: https://github.com/leandrocuellarok-netizen/mapafederal/pull/33.
- Merge commit de `main`: `f135d2357262671d30366d7876e8461976f4bdb1`.
- GitHub Actions #881 (run ID `46026439613`): falló en `Validate geographic and editorial JSON` porque tres aserciones del workflow todavía comparaban `coverage.catalogCommit` con el SHA anterior `f55c0e5`; el catálogo y la matriz ya apuntaban al commit nuevo `b1c6b31`. El job `deploy` fue omitido. La corrección actualiza esas tres aserciones sin alterar datos.
- PR #34 y ejecución de validación/despliegue posterior: pendientes.
- La verificación visual independiente de la portada se realizará después del despliegue, si el dominio responde.

## Brechas no resueltas

- Chaco mantiene pendientes Ciudad, Paso fronterizo, Logística, Recurso mineral y Estación ferroviaria; la ausencia de nodos no demuestra ausencia territorial.
- La coordenada SIB no declara datum/CRS ni semántica geométrica exacta.
- No se verificó transitabilidad ni disponibilidad de servicios en tiempo real.
- Corrientes y Formosa continúan con 3 nodos cada una; Santiago del Estero y Tucumán siguen como las jurisdicciones menos representadas a nivel nacional.
