# Mapa Federal — NEA / Chaco / Industria

- Fecha y hora de verificación: 26/11/2026, 01:33 ART.
- Rama: `main`.
- HEAD previo: `a348683e0095a85e8535293858e6326919a88688`.
- Región trabajada: NEA. Próxima región según la rotación: Cuyo.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporó un nodo de tipo `Industria`:

- Nombre: Parque Industrial Provincial Puerto Tirol.
- ID estable: `chaco-parque-industrial-puerto-tirol`.
- Provincia/localidad: Chaco / Puerto Tirol.
- Coordenadas (latitud, longitud): `[-27.368669, -59.060592]`.
- Coordenadas originales de la fuente: 27°22'07.21"S, 59°03'38.13"O.
- Estado: `operativo`, respaldado por la apertura de una fábrica dentro del parque informada por el Gobierno del Chaco el 25/03/2026.
- Naturaleza del marcador: referencia puntual publicada para la ubicación del parque; no representa el perímetro parcelario, un acceso ni un centroide certificado.

La coordenada procede de la Figura 1 de una tesis de especialización de la Universidad Nacional del Nordeste, fechada el 15/10/2020, que cita Google Earth Pro. Es una fuente secundaria académica, no un catastro ni un geoportal oficial. La tesis no especifica CRS/datum; se convirtió DMS a grados decimales sin transformación de datum ni reproyección. La limitación queda expresamente registrada en el catálogo.

## Fuentes

1. Gobierno de la Provincia del Chaco, 25/03/2026: informa la apertura de la fábrica Mood dentro del Parque Industrial de Puerto Tirol. Respalda la actividad industrial reciente, pero no aporta coordenadas.  
   https://chaco.gob.ar/noticia-chaco-suma-una-nueva-industria-abrio-sus-puertas-la-fabrica-de-alfajores-mood-en-puerto-tirol-2026-03-25-14-38
2. Universidad Nacional del Nordeste, Facultad de Ingeniería, María Alejandra Capay, tesis de especialización, 15/10/2020, Figura 1: identifica la ubicación del Parque Industrial Puerto Tirol y publica las coordenadas tomadas de Google Earth Pro. Fuente secundaria para la coordenada.  
   https://repositorio.unne.edu.ar/server/api/core/bitstreams/fa655680-00df-4519-91a3-2400e58ee1e6/content
3. Gobierno de la Provincia del Chaco, 11/06/2024: documenta la conexión de fibra óptica del Parque Industrial de Puerto Tirol y servicio a empresas radicadas.  
   https://chaco.gob.ar/noticia-zdero-inauguro-la-conexion-de-fibra-optica-para-el-parque-industrial-de-puerto-tirol-2024-06-11-17-50

## Brecha abordada y cobertura

- Chaco: 2 → 3 nodos; categoría Industria: 0 → 1.
- NEA: 9 → 10 nodos; las cuatro jurisdicciones de la región continúan cubiertas.
- Catálogo nacional: 87 → 88 nodos.
- Total de nodos Industria: 11 → 12.
- La matriz mantiene a La Pampa, San Luis y Tucumán como las jurisdicciones con menor cantidad de nodos.

## Candidato no incorporado

Nexo Capital — Centro Logístico Industrial, Puerto Tirol. El Gobierno del Chaco informa su inauguración y lo ubica sobre RN 16, km 24, pero las fuentes consultadas no publican coordenadas ni geometría del predio. No se derivó una ubicación a partir del kilometraje ni se reutilizó el punto general del parque. Se agregó como pendiente en la matriz.

## Archivos y commits

- `data/strategic-nodes.json`: nuevo registro; commit `2b4947d7e1a431a6a609ca9900c0e4aa46577e2a`.
- `research/national-map-coverage.json`: matriz recalculada, rotación NEA → Cuyo y brecha de Nexo Capital documentada; commit `630a2e5476ad29e2aedfb39736b1661103678759`.
- `index.html`: sin cambios; la portada ya carga `data/strategic-nodes.json` y conserva el filtro `Industria`.
- Este registro se incorpora en `research/runs/`.

## Validación y publicación

- JSON: catálogo y matriz parseados correctamente.
- Catálogo: 88 registros; 24 jurisdicciones; nueve categorías.
- Duplicados: nombres y coordenadas exactas únicos; los IDs estables existentes son únicos y el nuevo registro tiene ID estable propio.
- Geografía: provincia y categoría admitidas; coordenadas dentro del rango nacional; coordenada de fuente HTTPS y limitación CRS/datum documentada.
- Matriz: conteos por provincia/categoría y totales contrastados contra el catálogo; `catalogCommit` coincide con el commit de datos.
- JavaScript: no se modificó el código de la portada; la comprobación de sintaxis queda a cargo del workflow existente.
- Workflow `.github/workflows/static.yml`: se verificó que se dispara con cada push a `main`. La consulta de estado combinado para los commits de datos y matriz devolvió listas de estados vacías; no se pudo recuperar el ID ni el resultado de ejecución de GitHub Actions desde las funciones disponibles. No se declara validación CI aprobada.
- GitHub Pages: la URL pública no pudo comprobarse independientemente desde este entorno por un fallo de resolución de red. No se declara despliegue confirmado.

## Próxima prioridad

Rotación Cuyo, con prioridad de cobertura para San Luis. Investigar nodos de logística, aeropuertos, turismo o recursos minerales, sin agregar marcadores hasta contar con coordenadas atribuibles y estado documentado.
