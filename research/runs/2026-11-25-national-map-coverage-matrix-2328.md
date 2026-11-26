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

- Commit de la matriz y documentación: `2fbcca81425b6e9a5cebb610477761d37fe37472`.
- Corrección del validador: `cbd0677a65cde7899efbf1f3d854208a914e29dc` (se agregó la importación de `pathlib.Path`, requerida para leer la matriz).
- GitHub Actions #757, sobre `2fbcca8`: falló por el `NameError: Path is not defined` en el nuevo bloque de validación. No fue un error de los datos; se corrigió en el commit siguiente.
- GitHub Actions #758, sobre `cbd0677`: `validate` aprobado y `deploy` aprobado. El workflow terminó con conclusión `success`.
- Verificación independiente de la portada: intentada en `https://leandrocuellarok-netizen.github.io/mapafederal/`; el cliente HTTP/web devolvió que la URL no era accesible. El despliegue de Pages está confirmado por el job, pero no se pudo verificar la respuesta independiente de la página.
- HEAD de `main` al preparar este cierre: `cbd0677a65cde7899efbf1f3d854208a914e29dc`.

La validación de matriz comprobó que sus 24 filas, los nueve tipos y los conteos por provincia coinciden con `data/strategic-nodes.json`. El siguiente commit actualiza únicamente este registro de investigación y volverá a disparar el workflow de Pages.
