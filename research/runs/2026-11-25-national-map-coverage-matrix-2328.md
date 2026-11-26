# National map coverage matrix — La Pampa / Industria

- Fecha de verificación: 25/11/2026, 23:28 ART.
- Alcance: portada nacional `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y las nueve categorías que ya existen en el filtro.
- Rama inspeccionada: `main`.
- HEAD inspeccionado antes del cambio: `e2ec24ea2fea6c6fabd5514fbfa8450b3e01989c`.
- Estado del repositorio: sin PR abiertos; se inspeccionaron catálogo, portada, README, workflow y ejecuciones recientes.

## Mejora principal

Se creó una matriz persistente de cobertura por provincia y categoría, derivada del catálogo real: 86 nodos, 24 jurisdicciones y nueve categorías. La matriz distingue cero registros catalogados de ausencia real de infraestructura y documenta una rotación regional para las siguientes ejecuciones.

La cobertura más baja es de un nodo en cada una de estas jurisdicciones: La Pampa, San Luis, Santiago del Estero y Tucumán. La Pampa tiene un único nodo de tipo Aeropuerto y cero nodos de tipo Industria.

## Investigación de la brecha: La Pampa / Industria

Candidato examinado: Parque Industrial General Pico, en General Pico.

- La Ley provincial 530 fue publicada en el Boletín Oficial N.º 1021 el 12/07/1974 y el Digesto del Tribunal de Cuentas la indica vigente. La norma crea el Parque Industrial Provincial de General Pico, pero no incorpora coordenadas ni geometría.
- Un directorio sectorial secundario publica el punto `-35.684207, -63.780490`, identifica la ubicación como Ruta Provincial 101 y José Caridi y lo clasifica como habilitado.
- La ficha secundaria no declara datum, CRS, fecha del levantamiento ni si la coordenada representa acceso, centro aproximado o referencia del predio. La página municipal que también menciona el parque no pudo abrirse directamente en esta consulta (HTTP 502).

Decisión: no agregar el punto al mapa. La coordenada publicada no alcanza para presentarla como ubicación exacta y no existe una geometría oficial verificable en las fuentes consultadas. La brecha queda registrada para una futura incorporación cuando se obtenga un polígono oficial, una ficha geográfica municipal o una coordenada de acceso confirmada por el administrador.

## Matriz y rotación

Archivo creado: `research/national-map-coverage.json`.

La Pampa se revisó como parte del bloque operativo Centro por su baja cobertura. El siguiente bloque de rotación es NOA, con prioridad inicial para Santiago del Estero y Tucumán, ambas con un solo nodo catalogado. La agrupación regional es operativa y no pretende reemplazar una regionalización oficial.

## Fuentes

1. Tribunal de Cuentas de La Pampa, Digesto, Ley 530. Publicación en Boletín Oficial: 12/07/1974. Estado normativo mostrado: vigente. https://digesto.tcuentaslp.gob.ar/digesto%20tribunal/Leyes/Ley%20530.html
2. Parques Industriales, ficha secundaria del Parque Industrial General Pico. Fecha de publicación no indicada; consultada el 25/11/2026. Coordenada publicada: -35.684207, -63.780490; CRS/datum no informado. https://parquesindustriales.com.ar/parque?id=50881
3. Municipalidad de General Pico, ficha de Generalidades. La búsqueda indexada menciona parque industrial y zona franca; la apertura directa devolvió HTTP 502. https://www.generalpico.gov.ar/ciudad/generalidades

## Archivos modificados

- `research/national-map-coverage.json` — nueva matriz.
- `README.md` — corrección de la lista de categorías: el catálogo usa nueve tipos, no siete.
- `.github/workflows/static.yml` — validación automática de consistencia de la matriz con el catálogo.
- `research/runs/2026-11-25-national-map-coverage-matrix-2328.md` — este registro.

No se modificó `data/strategic-nodes.json` ni `index.html`: no hubo evidencia suficiente para agregar un marcador geográfico exacto. El filtro nacional existente permanece conectado al catálogo.

## Validación, commit y publicación

- Validación JSON y conteos de la matriz: incluida en GitHub Actions.
- Sintaxis del workflow: pendiente de ejecución en Actions.
- Commit SHA: se completa tras crear el commit.
- GitHub Actions / Pages: se completa tras observar la ejecución posterior al commit.
- Comprobación HTTP independiente de la portada: pendiente.

## Pendientes

- Obtener geometría oficial o coordenada de acceso confirmada del Parque Industrial General Pico.
- Verificar directamente el portal municipal cuando vuelva a responder.
- En el próximo ciclo NOA, priorizar un nodo industrial/logístico en Santiago del Estero o Tucumán solo si una fuente primaria y coordenadas verificables lo permiten.
