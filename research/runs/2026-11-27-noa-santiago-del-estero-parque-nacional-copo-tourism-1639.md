# MAPA FEDERAL — NOA / Santiago del Estero / Parque Nacional Copo

- Fecha y hora de investigación: 2026-11-27 16:39 ART (UTC-3).
- Base inspeccionada: `main` en `8ac4c9a630e1792a47172afd82299f0552a61bce`.
- Región de rotación previa: Patagonia; la siguiente era Buenos Aires Province.
- Desvío de prioridad: se priorizó Santiago del Estero porque tenía 2 nodos, empatada como jurisdicción menos representada, mientras Buenos Aires Province tenía 30.
- Provincia: Santiago del Estero.
- Departamento: Copo.
- Categoría: Turismo.

## Mejora principal

Se incorpora el Parque Nacional Copo al catálogo nacional de la portada:

- ID: `santiago-del-estero-turismo-parque-nacional-copo`.
- Nombre: Parque Nacional Copo.
- Coordenadas: `[-25.82089, -61.88005]`.
- Fuente descriptiva: [Administración de Parques Nacionales — Parque Nacional Copo](https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-copo).
- Fuente de coordenadas: [SIB/APN — Parque Nacional Copo](https://sib.gob.ar/areas-protegidas/parque-nacional-copo).
- El SIB publica provincia Santiago del Estero, departamento Copo, creación 2000, superficie 118.119 ha y ubicación geográfica 25 49 15.22 S / 61 52 48.19 O.
- La ficha no declara datum/CRS, EPSG, precisión ni semántica geométrica del punto. Se copiaron los decimales publicados; no hubo geocodificación, reproyección ni transformación. El marcador se documenta como referencia geográfica general del área protegida, no como acceso, centroide certificado ni perímetro.
- Estado de visita: APN publica apertura diaria de 7 a 15 h y servicios de acampe 24 h. Se registra `operativo` en el sentido de uso público publicado; no se verificó apertura efectiva, transitabilidad ni servicios en tiempo real.
- Publicador: Administración de Parques Nacionales / SIB.
- Fecha de publicación: no indicada por la ficha; verificación documental 27/11/2026.

## Cobertura antes y después

- Catálogo nacional: 121 → 122 nodos.
- Santiago del Estero: 2 → 3; Turismo: 0 → 1.
- NOA: 13 → 14 nodos; las cinco jurisdicciones siguen representadas.
- Turismo nacional: 20 → 21.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría.
- Jurisdicción menos representada después de esta mejora: Tucumán, con 2 nodos.
- Próxima región en la secuencia canónica: NEA.

## Archivos modificados

- `data/strategic-nodes.json` — nuevo registro Copo.
- `research/national-map-coverage.json` — conteos recalculados, matriz provincial/regional, prioridad mínima, rotación y `catalogCommit`.
- `README.md` — total nacional y nota de procedencia/calidad del nuevo punto.
- `.github/workflows/static.yml` — regresión específica de Copo, conteos 122/NOA 14/Turismo 21 y nueva rotación.
- Este archivo de bitácora.

`index.html` no se modifica: su función de carga sigue leyendo `data/strategic-nodes.json`; la categoría `Turismo` ya existe en el filtro de la portada.

## Validación previa a integración

- Catálogo JSON parseado; 122 registros.
- ID, nombre y coordenadas de Copo contrastados contra el catálogo completo; no había duplicado.
- Coordenadas dentro del rango argentino.
- Provincia y departamento contrastados con SIB/APN.
- Tipo `Turismo` ya admitido por la interfaz y el workflow.
- Matriz recalculada desde los 122 registros: 24 jurisdicciones, 9 categorías.
- Santiago del Estero: 3 nodos; Turismo: 1.
- NOA: 14 nodos.
- CRS/datum no declarados, documentados sin asignar EPSG.
- La validación CI y el despliegue de Pages quedan pendientes de ejecución en `main`.

## Integración y publicación

- Rama: `automation/noa-santiago-del-estero-copo-1639`.
- Commit del catálogo: `12bbf7ce6febf92bd362d8f15991a5740b7f0d6d`.
- Commit de matriz: `925493a31c4eb37d4fa3903686c8e9185b9a3ad6`.
- Commit de README: `1c61a59631bd50654bf4e90018377441cc3d505f`.
- Commit de workflow: `a2fc19b603e685513d08a7e8b36758b84f24c686`.
- Pull request, Actions y Pages: pendientes.

## Brechas no resueltas

- Tucumán sigue con 2 nodos y es ahora la jurisdicción menos representada.
- Santiago del Estero aún carece de Ciudad, Industria, Recurso mineral y Estación ferroviaria en el catálogo; no se agregaron marcadores sin geometría/coordenada atribuible.
- El punto general de Copo no sustituye el perímetro ni los accesos oficiales.
- No se verificó apertura, transitabilidad ni servicios en tiempo real.
