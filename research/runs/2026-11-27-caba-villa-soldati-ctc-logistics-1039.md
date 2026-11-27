# MAPA FEDERAL — CABA / Centro de Transferencia de Cargas Villa Soldati

- Fecha y hora de investigación: 2026-11-27 10:39 ART (UTC-3).
- Región objetivo: CABA.
- Jurisdicción: Ciudad Autónoma de Buenos Aires.
- Barrio / comuna: Villa Soldati / Comuna 8.
- Categoría: Logística.
- Base inspeccionada: `main` en `9f5c404277ebd1cb83e76e40bcafdb82d6958a8d`.
- Cobertura previa: 115 nodos nacionales; CABA tenía 5 nodos y ningún nodo de Logística. La categoría Logística tenía 3 nodos nacionales.
- Mejora principal: incorporación del Centro de Transferencia de Cargas CTC Villa Soldati como referencia logística de CABA.
- ID: `caba-logistica-centro-transferencia-de-cargas-villa-soldati`.
- Coordenadas decimales publicadas: `[-34.668449, -58.436462]`.
- Estado: `operativo`, documentado por el operador en su sitio institucional; no se afirma verificación de operaciones en tiempo real ni de cada empresa.

## Fuentes

1. Gobierno de la Ciudad Autónoma de Buenos Aires — CTC Villa Soldati:
   https://buenosaires.gob.ar/gcaba_historico/infraestructura/ctc-villa-soldati
   - Identifica el CTC en Villa Soldati, su función logística y la inauguración en septiembre de 2016.
   - Informa un predio de 37 hectáreas.
   - La página no declara fecha de publicación o actualización. Consulta: 2026-11-27.

2. CTC Administradora S.A. — Servicios:
   https://www.ctcadministradora.com.ar/servicios
   - El operador informa más de 67 empresas de transporte y servicios de carga y descarga.
   - No declara fecha de publicación o actualización. Consulta: 2026-11-27.

3. CTC Administradora S.A. — Contacto:
   https://www.ctcadministradora.com.ar/contacto
   - Publica dirección Av. Coronel Roca 3450 y horario de lunes a viernes de 07:00 a 18:00.
   - La página contiene un mapa embebido, pero el centro de la vista del mapa no se utilizó como coordenada del predio.

4. Parques Industriales — ficha sectorial CTC Villa Soldati:
   https://parquesindustriales.com.ar/parques/78000
   - Publica expresamente la localización decimal `-34.668449, -58.436462`, identifica el predio como plaza logística y consigna 37 ha.
   - Fuente secundaria. No informa fecha de publicación, CRS/datum, método de captura, precisión ni semántica geométrica. Se utiliza únicamente como referencia general del predio.

5. Ministerio de Trabajo y AFIP — fiscalización en un centro de transferencia de cargas:
   https://www.argentina.gob.ar/noticias/el-ministerio-de-trabajo-y-la-afip-detectaron-un-40-de-informalidad-laboral-en-un-centro-de-transferencia-de-cargas
   - Publicación: 2021-11-18.
   - Documenta empresas que operaban en el centro en 2021. La cifra es histórica y no se presenta como padrón actual.

## Registro incorporado

- Se agregó un único nodo de tipo `Logística` en CABA, barrio Villa Soldati, Comuna 8.
- La coordenada se transcribió de la ficha sectorial secundaria; no se geocodificó el nombre ni la dirección.
- No se asignó EPSG porque la fuente de coordenadas no declara CRS/datum.
- No hubo reproyección ni transformación de datum.
- El punto se conserva como referencia general del predio; no representa acceso, centroide certificado, parcela ni perímetro.
- El estado `operativo` se apoya en la página vigente del operador, que publica servicios, horario y empresas usuarias. No se verificó la operación en tiempo real ni la actividad individual de las empresas.

## Cobertura antes y después

- Catálogo nacional: 115 → 116 nodos.
- CABA: 5 → 6 nodos.
- CABA / Logística: 0 → 1.
- Logística nacional: 3 → 4.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría nueva.
- CABA mantiene pendientes Paso fronterizo, Industria y Recurso mineral. Para Buquebus y Colonia Express continúa faltando geometría o coordenada institucional puntual atribuible.
- Jurisdicciones menos representadas: Catamarca, Santiago del Estero y Tucumán, con 2 nodos cada una.
- Próxima región de rotación: NOA.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `README.md`
- `.github/workflows/static.yml`
- `research/runs/2026-11-27-caba-villa-soldati-ctc-logistics-1039.md`

`index.html` no se modificó. En el HEAD base se verificó que la portada carga `data/strategic-nodes.json` y aplica filtros dinámicos a partir de los tipos existentes.

## Validación previa a merge

- Deduplicación contra el catálogo completo: ID, nombre y par de coordenadas no existentes.
- Catálogo JSON: 116 registros.
- IDs, nombres y pares de coordenadas: 116 únicos.
- Coordenadas dentro del rango geográfico admitido.
- Fuentes principales y de coordenadas en HTTPS.
- 24 jurisdicciones representadas y nueve categorías válidas.
- Matriz provincial y regional recalculada; todos los conteos por jurisdicción y categoría coinciden con el catálogo.
- CABA: 6 nodos; Logística: 1.
- Rotación actualizada: Buenos Aires Province → CABA → NOA.
- README: referencias al conteo 114 reemplazadas por 116.
- Workflow: aserciones actualizadas para 116 nodos, 4 nodos de Logística, 6 nodos en CABA, el registro CTC y la rotación CABA → NOA.
- Validación automatizada local sobre los contenidos recuperados de la rama: aprobada.
- Validación GitHub Actions y despliegue de Pages: pendientes de la integración en `main`.

## Commits y publicación

- Commit de catálogo: `e96ff7d060311c75856f030271ec0637230ecc23`.
- Commit de matriz: `53341893fd7ea244fa4902d84be89dc2f0e3afc1`.
- Commit de workflow: `e26900dec363eee98416c4f5b0d034e92ac4b903`.
- Commit de actualización final del README: `2982a59c99b1f48580bab5b594c5cbf36894d371`.
- Rama de trabajo: `automation/caba-ctc-villa-soldati-20261127-1039`.
- PR #31: https://github.com/leandrocuellarok-netizen/mapafederal/pull/31, integrado el 2026-11-27 10:44 ART (UTC-3).
- Merge commit en `main`: `feb521c5f36124f03cf0a61018402635783783c3`.
- HEAD de `main` al finalizar la integración de datos: `feb521c5f36124f03cf0a61018402635783783c3`.
- GitHub Actions #877: https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/46009697761 — validación y despliegue completados con `success`.
- GitHub Pages: el job `deploy` y el paso `Deploy to GitHub Pages` finalizaron con `success`.
- `index.html` conserva el blob SHA `69e72891fe28e19580f681b85699da6377912c9c`; no fue modificado y continúa conectado al catálogo nacional.
- Inspección independiente posterior al despliegue: se intentó abrir la portada y el JSON público de Pages, pero el entorno de navegación devolvió que ambas URL no eran accesibles. Se confirma el despliegue del workflow, pero no se afirma verificación visual del marcador.

## Gaps no resueltos

- Terminales Buquebus y Colonia Express: las fuentes oficiales identifican terminales y pasos, pero no se recuperó geometría puntual oficial para cada muelle; no se geocodificaron domicilios.
- CABA / Industria: no se incorporó un parque industrial adicional; el CTC se clasifica como Logística, no se duplicó en Industria.
- CABA / Recurso mineral: permanece como brecha de aplicabilidad por evaluar.
- Catamarca, Santiago del Estero y Tucumán continúan con la menor cobertura total.
