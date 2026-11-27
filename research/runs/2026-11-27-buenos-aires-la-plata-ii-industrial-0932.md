# MAPA FEDERAL — Buenos Aires Province / Parque Industrial La Plata II

- Fecha y hora de investigación: 2026-11-27 09:32 ART (UTC-3).
- Región objetivo: Buenos Aires Province.
- Provincia: Buenos Aires.
- Partido / localidad: La Plata / Abasto.
- Categoría: Industria.
- Base inspeccionada: `main` en `3ffaf7cfd459b30a861a916783afcd3ca5a0d73f`.
- Cobertura previa: 29 nodos en Buenos Aires; 4 en Industria. La categoría ya estaba representada, pero la cobertura industrial estaba concentrada en pocos corredores y el catálogo tenía alta presencia de localidades de Escobar.
- Mejora principal: incorporación del Parque Industrial La Plata II, con la coordenada oficial de la entrada al predio publicada en el estudio de impacto ambiental municipal.
- ID: `buenos-aires-industria-parque-industrial-la-plata-ii`.
- Coordenadas decimales: `[-34.97873888888889, -58.15296944444444]`.
- Coordenadas de origen: `34°58'43.46"S, 58°9'10.69"O`.
- Estado en el catálogo: `no_verificado`. La Provincia informó en 2025 la escrituración de la primera fase y más de 100 empresas de la zona; no se verificó el padrón ni la operación actual de cada parcela.

## Fuentes

1. Municipalidad de La Plata — Resumen del Estudio de Impacto Ambiental del Parque Industrial La Plata II, documento alojado en el portal de Ambiente de la Provincia de Buenos Aires:
   https://www.ambiente.gba.gob.ar/sites/default/files/PCAbstract/PC_RESUMEN%20Estudio%20de%20Impacto%20Ambiental%20-%20Parque%20Industrial%20La%20Plata%202.pdf
   - Página 3: identifica el predio en Abasto, partido de La Plata, y publica explícitamente las coordenadas geográficas de la entrada.
   - Expediente OPDS 2145-40596/2013. El PDF no declara fecha formal de publicación, datum/CRS, precisión ni método de captura. Incluye planos fechados en abril de 2019.
   - Consulta: 2026-11-27.

2. Gobierno de la Provincia de Buenos Aires — La Provincia y la Municipalidad de La Plata escrituraron el Parque Industrial II:
   https://www.gba.gob.ar/escribaniageneral/noticias/la_provincia_y_la_municipalidad_de_la_plata_escrituraron_el_parque
   - Publicación: 2025-04-04.
   - Informa la escrituración de la primera fase, que el parque fue construido en 2006 y que más de 100 empresas de la zona cuentan con seguridad jurídica para su espacio productivo. No aporta padrón actualizado ni acredita la operación de cada parcela.

## Registro incorporado

- Se agregó un único nodo de tipo `Industria` en Buenos Aires, partido de La Plata, localidad Abasto.
- La coordenada se transcribió de la entrada al predio publicada en el EIA municipal y se convirtió aritméticamente de DMS a grados decimales.
- No se geocodificó el nombre, no se estimó un centroide, no se realizó reproyección ni transformación de datum.
- El EIA no declara datum/CRS, EPSG, precisión ni método de captura; no se asignó EPSG.
- El marcador identifica la entrada al predio, no el centroide, una parcela, un lote ni el perímetro.
- La noticia provincial de 2025 se utiliza como evidencia administrativa e histórica de radicación/regularización; no se infiere disponibilidad comercial ni estado actual de cada empresa. El campo `status` queda `no_verificado`.

## Cobertura antes y después

- Catálogo nacional: 114 → 115 nodos.
- Buenos Aires: 29 → 30 nodos.
- Buenos Aires / Industria: 4 → 5.
- Región Buenos Aires Province: 29 → 30 nodos.
- Industria nacional: 16 → 17.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría nueva.
- Próxima región de rotación: CABA.
- Jurisdicciones menos representadas: Catamarca, Santiago del Estero y Tucumán, con 2 nodos cada una.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- `research/runs/2026-11-27-buenos-aires-la-plata-ii-industrial-0932.md`

`index.html` no se modificó. En el HEAD de base se verificó que la portada carga `data/strategic-nodes.json` y utiliza las categorías dinámicas existentes.

## Validación previa a merge

- Deduplicación previa contra el catálogo completo: ID, nombre y par de coordenadas no existentes.
- Coordenadas convertidas: latitud -34.97873888888889, longitud -58.15296944444444; dentro de rango geográfico y jurisdicción La Plata.
- Catálogo JSON: 115 registros tras la incorporación.
- IDs, nombres y coordenadas: 115 IDs únicos, 115 nombres únicos y 115 pares de coordenadas únicos; 24 jurisdicciones y nueve categorías válidas.
- Matriz provincial recalculada para 24 jurisdicciones y nueve categorías.
- Buenos Aires: 30 nodos; Industria: 5.
- Rotación actualizada: Patagonia → Buenos Aires Province; después de esta ejecución, Buenos Aires Province → CABA.
- Workflow: aserciones actualizadas para 115 nodos, 17 nodos de Industria, 30 nodos en Buenos Aires y la nueva referencia.
- Sintaxis y validación final de GitHub Actions: pendiente de ejecución tras integrar en `main`.

## Commits y publicación

- Commit de catálogo: `130f38aa104ab3779f3c7d2e56796197e481f90b`.
- Commit de matriz, workflow y bitácora inicial: se incorpora en el commit posterior al catálogo de esta rama; el SHA final se asentará al cierre.
- Pull request: #30 — https://github.com/leandrocuellarok-netizen/mapafederal/pull/30.
- Workflow y GitHub Pages: pendientes de verificación tras el merge.
- Inspección visual de la portada pública: pendiente.
