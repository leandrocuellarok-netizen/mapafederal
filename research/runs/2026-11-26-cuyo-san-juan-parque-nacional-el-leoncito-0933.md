# MAPA FEDERAL — Cuyo / San Juan — 2026-11-26 09:35 ART

## Objetivo y brecha abordada

Región de rotación: Cuyo. Jurisdicción: San Juan. Categoría: Turismo.

La matriz registraba dos nodos en San Juan: Aeropuerto y Paso fronterizo. No había un nodo turístico, pese a que la provincia cuenta con áreas protegidas nacionales de interés territorial. Se incorporó el Parque Nacional El Leoncito como referencia cartográfica del área protegida, sin confundir la coordenada publicada con el acceso o el perímetro.

## Revisión repository-first

- Rama inspeccionada: `main`.
- HEAD inicial: `e2568b2bd496a9c67c19967288822aaa07276679`.
- Último commit antes de esta ejecución: `Normalize PJ political labels`.
- Catálogo: `data/strategic-nodes.json` (95 nodos antes del cambio).
- Matriz: `research/national-map-coverage.json`.
- Portada: `index.html`, que carga `./data/strategic-nodes.json` y conserva el filtro `Turismo`.
- Categorías admitidas: las nueve existentes; no se creó ninguna categoría.
- Workflow: `.github/workflows/static.yml`, con validación de JSON, catálogo, matriz, coordenadas, fuentes y sintaxis JavaScript.

## Registro incorporado

- ID: `san-juan-parque-nacional-el-leoncito`.
- Nombre: Parque Nacional El Leoncito.
- Jurisdicción: San Juan; departamento Calingasta.
- Categoría: Turismo.
- Coordenadas: `[-31.88944444, -69.265]`.
- Coordenada original: 31°53'22''S, 69°15'54''O.
- Punto: coordenada de referencia publicada por IGN para el área protegida; no se atribuye a acceso, centroide certificado, instalación ni perímetro.
- Calidad: la tabla de IGN no define la semántica geométrica del punto ni la fecha de actualización de la fila.
- CRS/datum: no declarado para la fila. No se asignó EPSG.
- Conversión: DMS a grados decimales por conversión aritmética; sin transformación de datum ni reproyección.
- Estado: `operativo` como área protegida con información oficial vigente de ingreso y actividades para visitantes. No se afirma acceso en tiempo real ni ausencia de cierres temporales.

## Fuentes

1. Instituto Geográfico Nacional — Áreas Protegidas de Jurisdicción Nacional. La fila de El Leoncito publica superficie, año de creación y coordenada:
   https://www.ign.gob.ar/NuestrasActividades/Geografia/DatosArgentina/ParquesNacionales2
2. Administración de Parques Nacionales — ficha institucional del Parque Nacional El Leoncito:
   https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-leoncito
3. APN — Horarios / Cómo llegar. Publica horarios estacionales, accesos y condiciones de visita:
   https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-leoncito/horarios-como-llegar
4. APN — Actividades. Documenta senderos, observatorios y actividades turísticas:
   https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-leoncito/actividades
5. Gobierno de San Juan — Plan Estratégico 2023. Documenta el Parque Industrial de Chimbas y obras de infraestructura, sin geometría:
   https://planestrategico.sanjuan.gob.ar/wp-content/uploads/2023/12/PESJ-Actualizacion-2023-digital.pdf
6. Gobierno de San Juan — Boletín Oficial, mayo de 2026. Registra una instalación empresarial en lote 62 del Parque Industrial de Chimbas, sin coordenadas:
   https://contenido.sanjuan.gob.ar/media/k2/attachments/%2805%29_%28MAYO%29_08-05-2026__%28P._36_Internet.pdf

## Cobertura antes y después

- Catálogo nacional: 95 → 96 nodos.
- San Juan: 2 → 3 nodos.
- Cuyo: 11 → 12 nodos.
- Turismo: 6 → 7 nodos.
- Jurisdicciones: 24 de 24.
- Categorías: nueve, sin cambios.
- San Juan queda representada en Aeropuerto, Paso fronterizo y Turismo.
- Categorías aún sin nodos en San Juan: Ciudad, Puerto, Logística, Industria, Recurso mineral y Estación ferroviaria.

La matriz cuenta solo registros del catálogo; una celda vacía no demuestra ausencia real de infraestructura.

## Brechas investigadas y no incorporadas

- Parque Industrial de Chimbas: fuentes provinciales documentan el parque, obras y una empresa en el lote 62, pero no publican coordenadas o geometría. No se geocodificó desde dirección o lote.
- Centro Ambiental Anchipurac: la web oficial confirma actividades y visitas, pero el iframe de Google Maps solo aporta centro de vista y no una coordenada exacta atribuible del edificio. No se utilizó ese centro como punto.
- Se conserva como pendiente la revisión de coordenadas y geometría del Parque Industrial de San Luis, registrada en la matriz anterior.

## Archivos y commits

- `data/strategic-nodes.json`: nuevo nodo. Commit `8f9ba8c73fc147e1406d533fade3ac5abae544e1`.
- `research/national-map-coverage.json`: conteos, Cuyo → Centro, pendientes y referencia al commit del catálogo. Commit de documentación/matriz: se registrará en la actualización final del log.
- `README.md`: conteo nacional actualizado de 95 a 96 nodos.
- `research/runs/2026-11-26-cuyo-san-juan-parque-nacional-el-leoncito-0933.md`: este registro.
- `index.html`: sin cambios; la integración con el catálogo y el filtro Turismo ya existían.
- `.github/workflows/static.yml`: sin cambios.

## Validación y publicación

- JSON del catálogo y de la matriz: parseados.
- IDs estables: sin colisiones.
- Nombres: únicos.
- Pares de coordenadas: únicos.
- Tipos: dentro de las nueve categorías admitidas.
- Jurisdicciones: las 24 admitidas y representadas.
- Coordenadas: dentro del rango geográfico configurado.
- Fuentes principales y fuentes de coordenadas: HTTPS.
- Matriz provincial, regional y por categoría: reconciliada con el catálogo.
- Portada: se confirmó en el código que sigue cargando el catálogo y conserva el filtro Turismo.
- GitHub Actions #792 (commit del catálogo): falló en la aserción de sincronización del nodeCount porque la matriz aún reflejaba 95 nodos; el despliegue quedó omitido. Esta inconsistencia intermedia se resuelve en el commit de matriz/documentación.
- El workflow #793, disparado por el commit de matriz/documentación, queda pendiente de consulta en el cierre final.
- No se declara publicación hasta verificar el job de Pages y el estado final de la portada.

## Próxima prioridad

La rotación continúa por Centro. Priorizar las jurisdicciones y categorías menos cubiertas, especialmente La Pampa y Córdoba, con geometría o coordenadas oficiales atribuibles.
