# MAPA FEDERAL — NEA / Corrientes / Parque Nacional Iberá

- Fecha y hora de investigación: 2026-11-27 17:31 ART (UTC-3).
- Base inspeccionada: `main` en `373b58318eb8e0b1e68b1d759a62b31b742cdafb`.
- Región de rotación previa: NOA; la siguiente era NEA.
- Provincia: Corrientes.
- Departamentos: Concepción, Ituzaingó, Mercedes y San Miguel.
- Categoría: Turismo.

## Mejora principal

Se incorpora el Parque Nacional Iberá al catálogo nacional consumido por la portada:

- ID: `corrientes-turismo-parque-nacional-ibera`.
- Nombre: Parque Nacional Iberá.
- Coordenadas: `[-27.93238, -56.93083]`.
- Fuente institucional descriptiva: [APN — Parque Nacional Iberá](https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-ibera).
- Fuente de coordenadas: [SIB/APN — Parque Nacional Iberá](https://sib.gob.ar/index.php/areas-protegidas/parque-nacional-ibera).
- SIB publica Corrientes, departamentos Concepción, Ituzaingó, Mercedes y San Miguel, creación 2018, superficie 195.094 ha y ubicación geográfica 27 55 56.56 S / 56 55 50.98 O.
- La ficha no declara datum/CRS, EPSG, precisión ni semántica geométrica. Se copiaron los decimales publicados; no hubo geocodificación, reproyección ni transformación. El punto se documenta como referencia geográfica general del área protegida, no como portal, acceso, centroide certificado ni perímetro.
- APN informa que está abierto todos los días, con cuatro portales y horarios estacionales. La transitabilidad de accesos depende de las condiciones meteorológicas; San Nicolás requiere 4x4. No se verificó transitabilidad ni apertura efectiva en tiempo real.
- Publicador: Administración de Parques Nacionales / SIB.
- Fecha de publicación: no indicada por las fichas; verificación documental 27/11/2026.

## Cobertura antes y después

- Catálogo nacional: 122 → 123 nodos.
- Corrientes: 3 → 4; Turismo: 0 → 1.
- NEA: 14 → 15 nodos; las cuatro jurisdicciones siguen representadas.
- Turismo nacional: 21 → 22.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría.
- Jurisdicción menos representada después de esta mejora: Tucumán, con 2 nodos.
- Próxima región en la secuencia canónica: Cuyo.

## Archivos modificados

- `data/strategic-nodes.json` — nuevo registro Iberá.
- `research/national-map-coverage.json` — conteos recalculados, matriz provincial/regional, prioridad mínima, rotación y `catalogCommit`.
- `README.md` — total nacional y nota de procedencia/calidad del nuevo punto.
- `.github/workflows/static.yml` — regresión específica de Iberá y conteo esperado de 123.
- Esta bitácora.

`index.html` no se modifica: la función `loadPoints()` sigue leyendo `./data/strategic-nodes.json`; la categoría `Turismo` ya existe en el filtro de la portada.

## Validación previa a integración

- Catálogo JSON parseado; 123 registros.
- ID, nombre y coordenadas de Iberá contrastados contra el catálogo completo; no había duplicado.
- 123 IDs únicos, 123 nombres únicos y 123 pares de coordenadas únicos.
- Coordenadas dentro del rango argentino.
- Provincia y departamentos contrastados con SIB/APN.
- Tipo `Turismo` ya admitido por la interfaz y el workflow.
- Matriz recalculada desde los 123 registros: 24 jurisdicciones, 9 categorías.
- Corrientes: 4 nodos; Turismo: 1.
- NEA: 15 nodos.
- CRS/datum no declarados, documentados sin asignar EPSG.
- La primera validación automatizada posterior a la integración (Actions #894, run ID `46064463109`) falló en «Validate geographic and editorial JSON»: el workflow conservaba expectativas históricas de Turismo=21, NEA=14 y rotación NOA→NEA. El registro Iberá y el conteo de 123 superaron sus aserciones previas; la falla se debió a expectativas de matriz obsoletas. El job `deploy` quedó omitido. Se corrigieron las cuatro aserciones de Turismo a 22, la de NEA a 15, las seis aserciones de rotación a NEA→Cuyo, las cuatro referencias de `catalogCommit` al commit real del catálogo y se añadió una regresión explícita para Corrientes (4 nodos, Turismo=1). La validación completa y el despliegue quedan pendientes de Actions #895.

## Integración y publicación

- Rama: `automation/nea-corrientes-ibera-1731`.
- Commit de catálogo: `64ec4e428eb6822ce2940285af6ba6f7cfb90572`.
- Commit de matriz: `f6594b5e1527d9944cdd15df2751b2cdf5ecc01a`.
- Commit de workflow: `e93277aa3698ed6a7e059d3d4c96dfd5b4796f74`.
- Commit de README: `905e4bde09871da58df72dc1ac84af70bfef24d1`.
- PR #41 integrado: https://github.com/leandrocuellarok-netizen/mapafederal/pull/41; merge commit `e0b3a32b495ad57d630a2102650047757b490b65`.
- Actions #894 (run ID `46064463109`, SHA `e0b3a32b495ad57d630a2102650047757b490b65`): `validate` falló en la aserción de Turismo=21, expectativa obsoleta; `deploy` fue omitido.
- PR #42 de corrección del workflow: pendiente de integración.
- Actions #895 y GitHub Pages: pendientes de la corrección; no se afirma publicación hasta verificar el job `deploy`.

## Brechas no resueltas

- Corrientes aún carece de Ciudad, Logística, Industria, Recurso mineral y Estación ferroviaria en el catálogo; no se agregaron marcadores sin evidencia geoespacial atribuible.
- Tucumán continúa como la jurisdicción menos representada, con 2 nodos.
- El punto general de Iberá no sustituye la cartografía oficial de límites ni la georreferenciación de sus cuatro portales.
- No se verificó apertura efectiva, estado de caminos ni servicios en tiempo real.
