# MAPA FEDERAL — Patagonia / Parque Industrial de Río Grande

- Fecha y hora de verificación: 26/11/2026, 11:33 ART.
- Rama inspeccionada: `main`.
- HEAD inicial: `06ebed42a32dac69a3173b960cabb59c36a45112`.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.
- Región trabajada: Patagonia. Próxima región de la rotación: Buenos Aires Province.

## Brecha abordada
Tierra del Fuego tenía 2 nodos y no tenía representación de Industria. Se incorpora el Parque Industrial de Río Grande como referencia industrial provincial. La jurisdicción pasa a 3 nodos; Patagonia pasa de 20 a 21; Industria pasa de 13 a 14. No se crea una categoría nueva.

## Registro incorporado
- ID: `tierra-del-fuego-parque-industrial-rio-grande`.
- Nombre: Parque Industrial de Río Grande.
- Provincia/localidad: Tierra del Fuego / Río Grande.
- Coordenadas: `-53.801118, -67.741510` (catálogo: [latitud, longitud]).
- Categoría: Industria.
- Estado: `no_verificado` para la situación vigente al 26/11/2026.
- Fuente primaria de identificación y actividad: Municipalidad de Río Grande, Turismo RGA, “Río Grande es historia”, sección “Río Grande, Ley 19640 y su Industria”: https://turismo.riogrande.gob.ar/historia/. La Municipalidad informa que durante 2024 el parque inscripto en RENPI tenía alrededor de 102 empresas en operación y 15 en construcción.
- Fuente secundaria de coordenadas: Parques Industriales, ficha “Parque Industrial de Río Grande”: https://parquesindustriales.com.ar/parque?id=53955. Publica -53.801118, -67.741510 como “Localización - Coordenadas”; no declara método de captura, precisión, datum ni CRS.
- Contraste geoespacial primario: IDETDF, metadatos “Parque Industrial”, edición 2025, fecha de publicación 01/08/2025: https://tiles.tierradelfuego.gob.ar/metadatos/metadata/c12b60bb-583b-49c9-9d49-3ebdf8d29b3b/. Declara representación vectorial, EPSG:4326, linaje extraído de la base IGN y complementado por IDETDF, y extensión oeste -67.74924058, este -67.72373435, sur -53.80682039, norte -53.79380794. La coordenada secundaria cae dentro de ese bounding box.
- Descarga de la capa: el WFS GetFeature SHAPE-ZIP y la descarga ZIP de GeoNode agotaron el tiempo de espera. No se inspeccionó la geometría ni se afirma que el punto coincida con un acceso, centroide, perímetro o lote. No se asigna EPSG al punto secundario.
- Fuente complementaria de contexto operativo: Municipalidad de Río Grande, lineamientos del Presupuesto 2026, actualización 18/11/2025: https://info.riogrande.gob.ar/en-un-contexto-restrictivo-definimos-un-plan-de-obras-responsable-para-acompanar-el-crecimiento-de-rio-grande. Indica que los programas FAMP para obras de modernización del parque estaban inactivos por falta de respuesta nacional; esto no acredita cierre del parque. No se obtuvo padrón RENPI 2026.
- La portada `index.html` ya consume `data/strategic-nodes.json` y dispone del filtro Industria; no fue necesario modificarla.

## Archivos
- `data/strategic-nodes.json`: alta del nodo; commit de catálogo `549ad6601bb56d114691c70e720845370dd993f1`.
- `research/national-map-coverage.json`: conteos recalculados, rotación Patagonia → Buenos Aires Province, brecha de Tierra del Fuego y metodología.
- `.github/workflows/static.yml`: prueba específica del nodo, del estado no verificado y de la inclusión de la coordenada dentro de la extensión oficial IDETDF.
- `README.md`: conteo nacional actualizado y nota de procedencia.
- `research/runs/2026-11-26-patagonia-tierra-del-fuego-rio-grande-industrial-1133.md`: esta bitácora.

## Validación previa al push
- JSON del catálogo y matriz parseados.
- 98 nodos; 24 jurisdicciones; nueve categorías.
- IDs, nombres y coordenadas sin duplicados.
- Coordenadas dentro del rango argentino.
- Coordenada de Río Grande dentro del bounding box oficial IDETDF EPSG:4326.
- Conteos por jurisdicción, categoría y región reconciliados.
- La portada conserva el catálogo y el filtro Industria.
- La prueba de workflow valida explícitamente el nuevo nodo y su calidad geoespacial.

## Commit, workflow y Pages
- Commit de catálogo: `549ad6601bb56d114691c70e720845370dd993f1`.
- Commit de matriz, validador, README y bitácora: pendiente de creación.
- GitHub Actions: pendiente de ejecución sobre el commit final.
- GitHub Pages: pendiente de validar el job de despliegue y la página publicada.

## Gaps pendientes
- Recuperar el WFS/ZIP de IDETDF para inspeccionar la geometría del parque y, si corresponde, reemplazar la referencia secundaria por un punto oficial o publicar el polígono.
- Obtener un padrón RENPI o confirmación municipal vigente para 2026; las cifras empresariales disponibles corresponden a 2024.
- No se agregó un nodo separado para el Nodo Logístico del Parque Industrial: la fuente municipal identifica su ubicación dentro del parque, pero no aporta coordenadas o geometría propias y no se reutiliza la coordenada general del parque.
