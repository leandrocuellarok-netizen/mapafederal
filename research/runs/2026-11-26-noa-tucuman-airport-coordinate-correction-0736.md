# MAPA FEDERAL — NOA / Tucumán — 2026-11-26 07:36 ART

## Objetivo y brecha abordada
Región de rotación: NOA. Jurisdicción: Tucumán. Categoría trabajada: Aeropuerto (corrección de georreferencia y procedencia del registro existente).

Tucumán continúa siendo la jurisdicción menos cubierta del catálogo, con un único nodo y ocho categorías sin representación. La mejora segura de esta ejecución fue corregir la coordenada referencial del Aeropuerto Internacional Teniente Benjamín Matienzo y asignarle un ID estable. No se agregó un punto nuevo en las categorías vacantes porque no se obtuvo una geometría exacta inspeccionable para otro establecimiento.

## Revisión repository-first
- Rama: `main`.
- HEAD inspeccionado al inicio: `74aa3b9f191c4bfd18660eb4701bb2655f8e9428`.
- Catálogo: `data/strategic-nodes.json`.
- Matriz: `research/national-map-coverage.json`.
- La portada `index.html` carga `./data/strategic-nodes.json`, conserva el filtro `Aeropuerto` y filtra por provincia. No fue necesario modificar `index.html`.
- Se revisaron el flujo de validación y los últimos runs de GitHub Actions; el último HEAD previo a la ejecución tenía validación y Pages exitosos.

## Registro corregido
- ID estable: `tucuman-aeropuerto-teniente-benjamin-matienzo-sant`.
- Nombre: Aeropuerto Internacional Teniente Benjamín Matienzo (SANT).
- Jurisdicción/localidad: Tucumán / Cevil Pozo.
- Categoría: Aeropuerto.
- Coordenada anterior: `[-26.8409, -65.1049]` (referencial, sin fuente exacta).
- Coordenada corregida: `[-26.83833333, -65.10444444]`.
- Fuente de coordenadas: ANAC, Suplemento A 39/2026 de la AIP Argentina, que publica `26°50'18"S, 065°06'16"W` en la información del plano del aeródromo.
- Conversión: DMS a grados decimales por conversión aritmética; sin transformación de datum ni reproyección.
- CRS/datum: no explicitado en el suplemento; no se asignó EPSG.
- Estado: `operativo` para infraestructura/procedimientos aeroportuarios publicados. No se infieren vuelos comerciales, frecuencias ni estado NOTAM en tiempo real.

## Fuentes primarias
1. ANAC — Suplemento A 39/2026, SANT/Tucumán, publicado 09/02/2026:
   https://ais.anac.gob.ar/descarga/sup-698b2d7f7081a
   - Actualiza de forma permanente datos del AIP AD 2.8 y AD 2.14.
   - Reemplaza el plano de aeródromo por versión febrero de 2026.
   - Incluye normas de rodaje, movimiento y estacionamiento de aeronaves en plataforma comercial.
   - Publica la coordenada geográfica utilizada en el registro.
2. ANAC — portal oficial de Publicación de Información Aeronáutica:
   https://ais.anac.gob.ar/aip
   - Describe la AIP y su sistema de actualización por enmiendas AIRAC.
3. RIDES — Gobierno de Tucumán, capa «Parques industriales»:
   https://rides.producciontucuman.gob.ar/capa/parques-industriales/
   - Publica descargas KML y SHP con fecha en el nombre de archivo 11/08/2025.
   - Los archivos no pudieron inspeccionarse en esta ejecución; se registran como candidato pendiente, no como evidencia de un punto exacto.

## Deduplicación y cobertura
- Catálogo antes/después: 94 nodos.
- ID asignado: único.
- Nombre: único.
- Coordenadas: par único en el catálogo.
- Tucumán: 1 nodo; no cambia el total provincial.
- Aeropuertos: 23 nodos; no cambia el total de categoría.
- Jurisdicciones: 24 de 24.
- Categorías: se conservan las nueve categorías existentes.
- No se derivó un centroide, acceso o ubicación a partir de nombres de parques industriales.

## Archivos
- `data/strategic-nodes.json` — corregido el nodo SANT y añadida procedencia geoespacial.
- `research/national-map-coverage.json` — actualizada la referencia del catálogo, rotación regional, metodología y candidato industrial pendiente.
- `research/runs/2026-11-26-noa-tucuman-airport-coordinate-correction-0736.md` — este registro.
- `index.html` — sin cambios; el catálogo y filtro existentes mantienen la integración.

## Validación
- JSON del catálogo y de la matriz: parseados.
- Conteo del catálogo: 94.
- IDs existentes: 9 únicos; el nuevo ID es estable y no colisiona.
- Nombres: 94 únicos.
- Coordenadas: 94 pares únicos y dentro del rango geográfico validado por el workflow.
- Jurisdicción: Tucumán admitida; las 24 jurisdicciones siguen representadas.
- Categoría: Aeropuerto, admitida por la interfaz.
- Fuentes: HTTPS.
- Matriz: conteos provinciales y por categoría permanecen iguales y se mantienen reconciliados.
- JavaScript de portada: sin cambios; la ruta de carga y el filtro Aeropuerto ya existían.

## Commits y publicación
- Commit del catálogo: `0e5ce749949f8d403c98b0aadb2354a90567ba3c`.
- GitHub Actions #783 (run ID 45802997697), asociado al commit del catálogo: el job `validate` terminó correctamente; el job `deploy` estaba en curso al preparar este registro. Resultado final de Pages pendiente de consulta.
- El commit de matriz y este registro será verificado por su propia ejecución de GitHub Actions antes de declarar la publicación.

## Pendientes y próxima prioridad
- El datum/CRS de la coordenada publicada para SANT no está explicitado en el suplemento; no se atribuye EPSG ni precisión geodésica.
- No se verificaron NOTAM, programación comercial ni frecuencias de vuelos en tiempo real.
- La capa RIDES de parques industriales requiere recuperar e inspeccionar KML/SHP y sus metadatos CRS antes de añadir puntos.
- Próxima región de la rotación: NEA. Seleccionar una provincia/categoría poco cubierta y exigir fuente geométrica o coordenadas exactas.
