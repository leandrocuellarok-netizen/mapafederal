# Formosa — Reserva Natural Formosa (Turismo)

- Fecha y hora de verificación: 26/11/2026, 22:32 ART.
- Rama de trabajo: `automation/nea-formosa-reserva-natural-20261126`; rama base: `main`.
- HEAD de `main` inspeccionado al inicio: `473c750a124e39936035f4fe2a3da59678177f97`.
- Workflow previo: Actions #836, con jobs `validate` y `deploy` completados con éxito.
- Catálogo al inicio: 105 nodos, 24 jurisdicciones y nueve categorías. Formosa tenía dos nodos (Aeropuerto y Puerto) y no tenía Turismo.
- Alcance: catálogo nacional consumido por la portada `index.html`; no se modificó la portada ni se desvió el trabajo a módulos regionales.

## Investigación y decisión

Se incorporó un nodo en la categoría existente `Turismo`:

- Nombre: Reserva Natural Formosa.
- ID estable: `formosa-turismo-reserva-natural-formosa`.
- Provincia: Formosa.
- Departamento: Bermejo.
- Coordenadas: `[-24.27366, -61.80071]`.
- Fuente institucional y de estado: [APN — Reserva Natural Formosa](https://www.argentina.gob.ar/parquesnacionales/nea/reserva-natural-formosa), [APN — Horarios / Cómo llegar](https://www.argentina.gob.ar/parquesnacionales/nea/reserva-natural-formosa/horarios-como-llegar) y [APN — Actividades](https://www.argentina.gob.ar/parquesnacionales/nea/reserva-natural-formosa/actividades).
- Fuente de coordenadas: [SIB/APN — Reserva Natural Formosa](https://sib.gob.ar/areas-protegidas/reserva-natural-formosa).
- SIB/APN publica 24 16 25.17 S (-24.27366), 61 48 02.55 O (-61.80071), provincia, departamento, superficie de 9.005 ha y creación en 1968. La ficha no informa fecha de actualización ni semántica geométrica del punto.
- APN documenta acceso público, ingreso por la portada oeste sobre RP 9, horarios estacionales (8–18 en invierno y 7–19 en verano), acampe, servicios en el Centro Operativo Guaipo, senderos, miradores y observación de aves.
- CRS/datum: no declarados por SIB/APN; no se asignó EPSG.
- Transformación: ninguna; se copiaron las coordenadas decimales publicadas. No se geocodificó ni reproyectó.
- Calidad: referencia geográfica general del área protegida; no se presenta como portada oeste, acceso exacto, centroide certificado ni perímetro.
- Estado: `operativo` como área protegida con uso público documentado. No implica transitabilidad, condiciones meteorológicas ni disponibilidad de servicios en tiempo real.

## Cobertura resultante

- Catálogo: 106 nodos.
- Jurisdicciones: 24/24.
- Categorías: nueve.
- Formosa: pasa de 2 a 3 nodos y suma su primer registro de Turismo.
- NEA: pasa de 11 a 12 nodos; las cuatro jurisdicciones siguen representadas.
- Turismo nacional: pasa de 12 a 13.
- Jurisdicciones menos representadas: Catamarca, Jujuy, Santiago del Estero y Tucumán, con dos nodos cada una.
- Próxima región de la rotación: Cuyo.

El Parque Industrial de Formosa sigue pendiente: las fuentes consultadas confirman actividad productiva, pero no se recuperó una geometría oficial o coordenada puntual atribuible. También queda pendiente una georreferencia exacta del acceso turístico a El Vertedero del Bañado La Estrella; no se derivó una coordenada desde distancias o topónimos.

## Archivos modificados

- `data/strategic-nodes.json`: nuevo nodo.
- `research/national-map-coverage.json`: conteos provinciales, regionales y categoriales; jurisdicciones menos representadas; rotación y metodología.
- `README.md`: conteo nacional y descripción de la incorporación.
- `.github/workflows/static.yml`: pruebas de regresión del nodo, fuentes, coordenadas, Formosa, NEA y rotación.
- `research/runs/2026-11-26-nea-formosa-reserva-natural-formosa-tourism-2232.md`: esta bitácora.

`index.html` permanece intacto: continúa consumiendo `./data/strategic-nodes.json` y genera los filtros desde el catálogo.

## Validación, commits y publicación

- Deduplificación previa contra los 105 registros: ID, nombre y par de coordenadas no existentes.
- Validación local de construcción: JSON parseable; 106 IDs únicos; 106 nombres únicos; 106 pares de coordenadas únicos; 24 jurisdicciones; nueve categorías; rangos geográficos válidos; URLs HTTPS; matriz recalculada y conteos provinciales/regionales/categoriales reconciliados.
- Prueba de regresión incorporada para la coordenada, fuente, CRS no declarado, calidad de referencia, condición de acceso y cobertura de Formosa.
- Commit de catálogo: `24d355a7a872aaede07e4236dfbd6d36962f7555`.
- Commit de matriz: `1a533461615c00b9674478816dee4641083fd23e`.
- Commit de README: `a046f10c40092219a5f8d748cf3fa90f6fd30a17`.
- Commit de workflow y regresión: `6a264a44e8a6fcd5ff45b05e78c27dbbc1baf3f4`.
- PR #12 integrado en `main` mediante squash merge; commit de integración: `ecbbf4346985badb22e05839ddbef61f47e00c55`.
- Estado de Actions consultado para el commit de integración: la consulta de estados combinados devolvió una lista vacía y el endpoint disponible de ejecuciones por commit solo expone eventos `pull_request`, sin mostrar la ejecución `push` de `main`. Por ello no se pudo verificar el job `validate` ni `Deploy to GitHub Pages` desde la integración disponible.
- Inspección independiente: tanto la portada pública como el JSON publicado de GitHub Pages resultaron inaccesibles desde el entorno de verificación. La integración en `main` está confirmada; no se afirma que el nodo ya esté publicado ni visible hasta contar con evidencia de Actions/Pages.
