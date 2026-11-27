# MAPA FEDERAL — Patagonia / Tierra del Fuego: Parque Nacional Tierra del Fuego

- Fecha y hora de investigación: 2026-11-27 01:37 (America/Argentina/Buenos_Aires).
- Jurisdicción: Tierra del Fuego, departamento Ushuaia.
- Región de rotación: Patagonia.
- Categoría: Turismo.
- Objetivo: cubrir una combinación provincia/categoría vacía en una de las jurisdicciones patagónicas menos representadas.

## Mejora principal

Se agregó `tierra-del-fuego-turismo-parque-nacional-tierra-del-fuego` — Parque Nacional Tierra del Fuego.

- Coordenadas: `[-54.64226, -68.48597]`.
- Fuente de coordenadas: [SIB/APN — Parque Nacional Tierra del Fuego](https://sib.gob.ar/index.php/areas-protegidas/parque-nacional-tierra-del-fuego).
- Fuente institucional: [Administración de Parques Nacionales — Parque Nacional Tierra del Fuego](https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-tierra-del-fuego).
- Estado: `operativo` como área protegida con oferta de visita documentada; no implica apertura diaria ni transitabilidad en tiempo real.
- Publicador: Administración de Parques Nacionales (APN).
- Fecha de publicación de la ficha/coordenada: no indicada por SIB/APN; consultada el 2026-11-27.
- Fuente de estado y acceso: [APN — Horarios / Cómo llegar](https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-tierra-del-fuego/horarios-como-llegar), consultada el 2026-11-27.
- Fuente normativa adicional: [Resolución APN 132/2026](https://www.argentina.gob.ar/normativa/nacional/norma-425804/actualizacion), publicada el 2026-05-15 y con vigencia del régimen de acceso desde el 2026-06-01.
- CRS/datum: no declarados por SIB/APN. No se asigna EPSG.
- Transformación: ninguna; se conservaron las coordenadas decimales publicadas.
- Calidad: referencia geográfica general del área protegida. La fuente no define si el punto es acceso, centroide o punto interno; no se presenta como portada, acceso, centroide certificado ni perímetro.

APN publica horarios de ingreso por temporada, acceso vehicular desde RN 3 y sectores de estacionamiento en la portada, Río Pipo, Ensenada Zaratiegui, Centro de Visitantes Alakush, Lago Acigami y Bahía Lapataia. No se verificaron condiciones operativas diarias ni transitabilidad en tiempo real.

## Cobertura

- Catálogo nacional: 108 → 109 nodos.
- Tierra del Fuego: 3 → 4 nodos; suma su primer nodo Turismo.
- Patagonia: 22 → 23 nodos; cinco jurisdicciones representadas.
- Turismo: 14 → 15 nodos.
- Jurisdicciones: 24/24.
- Categorías: 9.
- Jurisdicciones menos representadas: Catamarca, Jujuy, Santiago del Estero y Tucumán, con 2 nodos cada una.
- Brechas pendientes en Tierra del Fuego: Ciudad, Paso fronterizo, Logística, Recurso mineral y Estación ferroviaria.

## Corrección de bloqueo de validación compartida

Las ejecuciones #847 y #848 fallaron en la validación geográfica/editorial, antes del despliegue, por una licitación de Presidente Perón (LP 14/2026) que conservaba `opportunityStatus: open` pese a tener `validUntil: 2026-11-26`. El registro fue revisado: el plazo publicado ya transcurrió, pero no se verificaron prórroga, apertura efectiva, ofertas ni adjudicación. Para no afirmar un cierre contractual, se cambió el estado de oportunidad a `unknown` y la verificación a `outdated`, conservando el plazo, el presupuesto publicado y la etapa `announced`. Es una corrección mínima de calidad de datos que desbloquea la validación compartida; no se modificaron otros módulos.

Fuente del registro: [Boletín Oficial de la Provincia de Buenos Aires — edición 30366](https://boletinoficial.gba.gob.ar/secciones/14523/descargar), consultado previamente el 2026-11-25.

## Archivos modificados

- `data/strategic-nodes.json` — alta del parque.
- `research/national-map-coverage.json` — conteos por jurisdicción, región y categoría; rotación Patagonia → Buenos Aires Province.
- `README.md` — conteo nacional y descripción del nuevo punto.
- `.github/workflows/static.yml` — regresión del nuevo nodo, matriz, rotación y estado no abierto de la licitación vencida.
- `data/investment-opportunities.json` — corrección del estado vencido que bloqueaba la validación compartida.
- Este archivo de bitácora.

`index.html` no se modificó: su función `loadPoints()` continúa leyendo `./data/strategic-nodes.json`; los filtros de provincia y categoría se generan a partir del catálogo, por lo que el nuevo punto queda integrado en el mapa y el directorio existentes.

## Commits de la rama

- Catálogo: `fc1f057dfb8e491f6584ab1adc5306d5aced0acb`.
- Estado de oportunidad vencida: `d67e9aa37b13ade8bb5e900ab880b14787158191`.
- Matriz federal: `dc3122e500feace67cda68516361c3eea8bd43dd`.
- README: `9407ca1b44af6d87f3a49dc864e61bec09deaf02`.
- Workflow: `da1e9a1eccb6e76c6dd97e0135425428b304c6d1`.
- Integración a `main`, ejecución de Actions y Pages: pendientes de PR y validación final al momento de esta bitácora.

## Validación previa a PR

- JSON de catálogo, matriz y oportunidades: parseados.
- IDs únicos: 109/109.
- Nombres únicos: 109/109.
- Pares de coordenadas únicos: 109/109.
- Jurisdicciones: 24/24.
- Categorías admitidas: 9/9.
- Coordenadas dentro del rango nacional: todas.
- Fuentes principales y fuente de coordenadas HTTPS: comprobadas.
- Matriz: 109 nodos, Patagonia 23, Tierra del Fuego 4, Turismo 15; reconciliada con el catálogo.
- Estado de la licitación vencida: `unknown`, verificación `outdated`.
- Validación completa de GitHub Actions y despliegue de Pages: pendientes.

## Pendientes y siguiente prioridad

- No se verificó apertura diaria, estado de rutas ni servicios en tiempo real del Parque Nacional Tierra del Fuego.
- SIB/APN no declara datum/CRS ni semántica geométrica del punto.
- Investigar las brechas restantes de Tierra del Fuego sin inferir coordenadas desde topónimos.
- Próxima región de rotación: Buenos Aires Province; mantener en alerta las cuatro jurisdicciones con dos nodos.
