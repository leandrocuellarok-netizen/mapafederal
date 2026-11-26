# MAPA FEDERAL — NEA / Corrientes — 2026-11-26 08:33 ART

## Objetivo y brecha abordada

Región de rotación: NEA. Jurisdicción: Corrientes. Categoría: Aeropuerto.

La matriz registraba dos nodos en Corrientes: un puerto y un paso fronterizo. No había representación de la infraestructura aeroportuaria, aunque la provincia cuenta con el Aeropuerto Internacional Doctor Fernando Piragine Niveyro. Se incorporó un punto de referencia ARP documentado por ANAC, sin presentarlo como acceso, terminal ni perímetro.

## Revisión repository-first

- Rama inspeccionada: `main`.
- HEAD inicial: `45860ae8d8efdac9558475bab10c1616adc3b397`.
- Catálogo: `data/strategic-nodes.json` (94 nodos antes del cambio).
- Matriz: `research/national-map-coverage.json`.
- Portada: `index.html`, que carga `./data/strategic-nodes.json` y conserva el filtro `Aeropuerto`.
- Categorías admitidas: las nueve existentes; no se creó ninguna categoría nueva.
- Se inspeccionó `.github/workflows/static.yml`, que valida catálogo, matriz, JSON y sintaxis JavaScript.

## Registro incorporado

- ID: `corrientes-aeropuerto-internacional-doctor-fernando-piragine-niveyro-sarc`.
- Nombre: Aeropuerto Internacional Doctor Fernando Piragine Niveyro (SARC).
- Jurisdicción: Corrientes.
- Categoría: Aeropuerto.
- Coordenadas: `[-27.445, -58.76166667]`.
- Coordenada original: 27°26'42"S, 058°45'42"W.
- Punto: ARP del aeródromo, no acceso, terminal ni perímetro.
- Calidad: el AIP vigente transcrito por fuente secundaria lo identifica como centro geométrico de pista y señala que fue calculado en gabinete; no se presenta como levantamiento geodésico independiente.
- CRS/datum: el suplemento oficial no explicita datum/CRS para el campo ARP. No se asignó EPSG ni se infirió una transformación.
- Conversión: DMS a grados decimales por conversión aritmética; sin transformación de datum ni reproyección.
- Estado: `operativo` como infraestructura aeroportuaria publicada. No se infieren frecuencias comerciales, programación de vuelos ni NOTAM en tiempo real.

## Fuentes

1. ANAC — Suplemento AIP A 30/2024, AD Corrientes (CRR/SARC), publicado el 12/03/2024. Fuente primaria de la coordenada ARP:
   https://ais.anac.gob.ar/descarga/sup-65f10716957fb
2. Argentina.gob.ar — Cómo llegar a Corrientes, sección Conectividad aérea. Identifica al Piragine Niveyro como el aeropuerto que centraliza el tráfico aéreo provincial:
   https://www.argentina.gob.ar/corrientes/llegar
3. Aerocartas — transcripción secundaria del AIP ANAC AIRAC 01/26, vigente desde el 11/06/2026. Registra el ARP, condición controlada, tránsito IFR/VFR y horarios ATS; no sustituye la AIP oficial:
   https://aerocartas.com/argentina/aeropuertos/sarc/aip/
4. Vialidad Nacional — obra de la Travesía Urbana de Corrientes, 23/09/2026. Documenta trabajos viales en inmediaciones del aeropuerto; no se utiliza como fuente de coordenadas:
   https://www.argentina.gob.ar/noticias/vialidad-nacional-avanza-en-la-construccion-de-la-travesia-urbana-de-corrientes-en-la-ruta

## Cobertura antes y después

- Catálogo nacional: 94 → 95 nodos.
- Corrientes: 2 → 3 nodos.
- NEA: 10 → 11 nodos.
- Aeropuertos: 23 → 24.
- Jurisdicciones: 24 de 24.
- Categorías: nueve, sin cambios.
- Corrientes queda representada en Puerto, Paso fronterizo y Aeropuerto.
- Categorías aún sin nodos en Corrientes: Ciudad, Logística, Industria, Recurso mineral, Turismo y Estación ferroviaria.

La matriz sigue contando solo registros del catálogo; una celda vacía no significa ausencia real de infraestructura.

## Archivos y commits

- `data/strategic-nodes.json`: nuevo nodo. Commit `22272548d09d715793386afdeecaa635652b062f`.
- `research/national-map-coverage.json`: conteos recalculados, rotación NEA → Cuyo y referencia al commit del catálogo. Commit `13a0d79bd44a43638ae8a47e28ec90824cfb37f5`.
- `README.md`: referencias nacionales actualizadas de 94 a 95 nodos. Commit `9269e1ef17bdda9e3ee15081f442acb1cf440d50`.
- `index.html`: sin cambios; la integración con el catálogo y el filtro Aeropuerto ya existían.
- `.github/workflows/static.yml`: sin cambios.
- HEAD antes de crear este registro: `9269e1ef17bdda9e3ee15081f442acb1cf440d50`.

## Validación estructural

- JSON del catálogo y de la matriz: parseados.
- Total del catálogo: 95.
- IDs estables existentes: sin colisiones.
- Nombres: únicos.
- Pares de coordenadas: únicos.
- Tipos: todos pertenecen a las nueve categorías admitidas.
- Jurisdicciones: las 24 admitidas y representadas.
- Coordenadas: dentro del rango geográfico configurado.
- Fuentes principales y fuentes de coordenadas: HTTPS.
- Matriz: conteos provinciales, por categoría y regionales reconciliados con el catálogo.
- Portada: se confirmó en el código que sigue cargando el catálogo y conserva el filtro Aeropuerto.
- JavaScript de portada: no se modificó.

## GitHub Actions y Pages

Se consultó el estado combinado de los commits, pero el conector no devolvió checks ni un identificador de ejecución de GitHub Actions. La consulta de la portada pública y del JSON publicado tampoco fue accesible desde el entorno de verificación. Por lo tanto, validación local/estructural completada; CI, job de Pages y publicación pública quedan pendientes de confirmación. No se declara despliegue exitoso.

## Próxima prioridad

La rotación continúa por Cuyo. Priorizar San Juan, La Rioja o una combinación provincial/categoría con cobertura baja. Mantener la exigencia de coordenadas atribuibles y estado documentado; no reutilizar puntos aproximados ni geocodificar por topónimo.
