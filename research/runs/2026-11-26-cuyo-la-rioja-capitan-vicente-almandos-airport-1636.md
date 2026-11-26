# MAPA FEDERAL — Cuyo / La Rioja: incorporación del Aeropuerto Capitán Vicente Almandos Almonacid

- Fecha y hora: 2026-11-26T16:36:44-03:00 (America/Argentina/Buenos_Aires).
- Jurisdicción priorizada: La Rioja.
- Región de rotación: Cuyo.
- Categoría principal: Aeropuerto.
- Resultado: 1 nodo nuevo; 0 registros corregidos.
- Commit del cambio de datos y pruebas: `803fa4515e93c23efb87a2bb4f8b07c7889ad6ed`.
- GitHub Actions #819 ([run 45885413764](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45885413764)): `validate: success`, `deploy: success`; GitHub Pages completó el despliegue del commit de datos.

## 1. Incorporación

Se añadió el nodo `la-rioja-aeropuerto-capitan-vicente-almandos-almonacid-sanl`.

| Campo | Valor |
|---|---|
| Provincia | La Rioja |
| Localidad | La Rioja |
| Categoría | Aeropuerto |
| Identificador aeronáutico | SANL |
| Coordenada | `-29.38055556, -66.79583333` |
| Estado | `operativo` como infraestructura aeroportuaria documentada; no implica vuelos comerciales vigentes |

### Coordenadas y calidad

- Fuente primaria: [ANAC — Suplemento AIP A 67/2022, SANL AD 2](https://ais.anac.gob.ar/descarga/sup-6372a0f8a6528).
- Publicación: 11/11/2022.
- Coordenada original publicada en AD 2.2: `29°22'50"S, 066°47'45"W`.
- Descripción oficial: centro geométrico de pista; calculado en gabinete.
- Conversión: DMS a grados decimales mediante conversión aritmética; sin transformación de datum ni reproyección.
- CRS/datum: no explicitado para el ARP en AD 2.2. El suplemento describe WGS84/POSGAR 2007 para el plano y coordenadas de umbrales, pero esa referencia no se extiende al ARP sin declaración expresa. No se asignó EPSG.
- Calidad: punto de referencia aeroportuario; no representa acceso, terminal ni perímetro.

ANAC documenta tránsito IFR/VFR y al operador aeroportuario en el suplemento permanente. La [AIP oficial de ANAC](https://ais.anac.gob.ar/aip) explica que la información aeronáutica se actualiza mediante enmiendas AIRAC. Como comprobación complementaria, la página de [Aerocartas para SANL](https://aerocartas.com/argentina/aeropuertos/sanl/aip/) reproduce la sección AD 2 del AIP AIRAC 01/26, vigente desde el 11/06/2026, e identifica el aeródromo como controlado IFR/VFR con horarios ATS. Aerocartas es una fuente secundaria, no la autoridad aeronáutica.

La ficha oficial [Argentina.gob.ar — Aeropuerto de La Rioja](https://www.argentina.gob.ar/node/128982) confirma la identidad del aeropuerto y su ubicación general al nordeste de la ciudad. La mención de obras de terminal en esa página no se usa para inferir el estado actual de las obras, porque la ficha no proporciona fecha de actualización verificable.

No se consultaron NOTAM ni horarios de vuelos comerciales en tiempo real.

## 2. Cobertura nacional

- Catálogo: 99 → 100 nodos.
- La Rioja: 2 → 3 nodos.
- Cuyo: 12 → 13 nodos.
- Aeropuertos: 24 → 25.
- Jurisdicciones: 24 de 24.
- Categorías: 9, sin altas ni duplicaciones.
- La brecha de Aeropuerto queda cubierta en La Rioja; continúan pendientes Ciudad, Puerto, Logística, Recurso mineral, Turismo y Estación ferroviaria.

La próxima región de rotación es Centro.

## 3. Integración y validación

- `index.html` no se modificó: la portada ya consume `data/strategic-nodes.json` y sus filtros existentes.
- Se actualizó la matriz de cobertura y los conteos por jurisdicción, región y categoría.
- Se actualizó el README para reflejar 100 nodos.
- Se incorporaron aserciones de regresión en el workflow para el ID, provincia, categoría, coordenada, fuente, CRS no declarado, calidad del ARP, fuente secundaria y conteo de La Rioja.
- Se comprobaron en la preparación del cambio: parseo JSON, IDs/nombres/coordenadas únicos, 24 jurisdicciones, categorías permitidas, URLs HTTPS, rangos geográficos y reconciliación de matriz.
- La validación completa del repositorio y el despliegue de Pages quedan sujetos a la ejecución de GitHub Actions.

## 4. Archivos tocados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- `README.md`
- `research/runs/2026-11-26-cuyo-la-rioja-capitan-vicente-almandos-airport-1636.md`

No se modificaron `index.html`, módulos regionales ni datasets de otros proyectos.

## 5. Commit y publicación

- Commit del cambio de datos y pruebas: `803fa4515e93c23efb87a2bb4f8b07c7889ad6ed`.
- Commit de alineación de `catalogCommit`: `6f20d7941b2a6f583a3057a405c536005c9a4222`.
- Workflow de validación y GitHub Pages: #819 (run `45885413764`, commit de datos) y #820 (run `45885547867`, alineación de matriz); ambos completaron `validate: success` y `deploy: success`.
- Inspección independiente de la portada pública: no disponible desde el entorno de verificación; la URL de Pages no resolvió por DNS. El despliegue sí quedó confirmado por el job `deploy`.
