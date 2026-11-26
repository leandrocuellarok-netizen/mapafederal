# MAPA FEDERAL — Buenos Aires Province / Parque Nacional Ciervo de los Pantanos

- Fecha y hora de investigación: 2026-11-26 12:37–12:41 (America/Argentina/Buenos_Aires).
- Jurisdicción: Buenos Aires, partido de Campana.
- Categoría priorizada: Turismo.
- Región: Buenos Aires Province.
- Resultado: una incorporación verificada documentalmente; sin modificación de la geometría ni de los filtros de la portada.

## Brecha abordada

La matriz previa registraba 27 nodos en Buenos Aires y dos de Turismo, concentrados en el partido de Escobar. Se incorporó un área protegida nacional en Campana para ampliar la cobertura territorial de la categoría. La provincia queda con 28 nodos y tres de Turismo.

La matriz anterior mostraba «Paso fronterizo» como categoría vacante en Buenos Aires y CABA. Se añadió `notApplicableCategories: ["Paso fronterizo"]` a ambas jurisdicciones y se retiró esa categoría de `missingCategories`: ninguna tiene frontera terrestre internacional. Esta aclaración evita presentar una categoría territorialmente improcedente como una brecha de datos.

## Registro incorporado

- ID estable: `buenos-aires-parque-nacional-ciervo-de-los-pantanos`.
- Nombre: Parque Nacional Ciervo de los Pantanos.
- Provincia / partido: Buenos Aires / Campana.
- Categoría existente: Turismo.
- Coordenadas `[latitud, longitud]`: `[-34.23450, -58.87724]`.
- Fuente de identificación y jurisdicción: APN, ficha del Parque Nacional Ciervo de los Pantanos: https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-ciervo-de-los-pantanos
- Fuente primaria de coordenadas: Sistema de Información de Biodiversidad de APN (SIB), ficha del parque: https://sib.gob.ar/index.php/areas-protegidas/reserva-natural-otamendi
- Evidencia de coordenadas: el SIB publica «Ubicación Geográfica: 34 14 4.19 S (-34.23450), 58 52 38.06 O (-58.87724)». La ficha identifica Campana como departamento/partido.
- CRS/datum: la ficha no declara datum ni CRS. Se conserva la coordenada geográfica publicada, sin asignar EPSG.
- Transformación: ninguna; se copiaron los valores decimales publicados. No hubo geocodificación ni reproyección.
- Calidad posicional: la ficha denomina el dato «Ubicación Geográfica», pero no define si es acceso, centroide o punto interno. Se registra exclusivamente como referencia cartográfica del área protegida; no representa acceso ni perímetro.
- Estado: `operativo` como área protegida. APN publica apertura diaria de 10 a 18 h y senderos de 10:30 a 17 h: https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-ciervo-de-los-pantanos/horarios-como-llegar. No se verificó disponibilidad en tiempo real ni cierres temporales.
- Publicación de fuentes: las fichas consultadas no indican fecha de publicación o actualización.
- Verificación documental: 2026-11-26; no presencial.

## Candidato investigado y no incorporado

- Parque Nacional Campos del Tuyú, General Lavalle.
- El SIB/APN publica una coordenada geográfica de referencia: https://sib.gob.ar/areas-protegidas/parque-nacional-campos-del-tuyu
- La noticia oficial de APN del 25/09/2024 informaba que se preparaba la apertura al uso público: https://www.argentina.gob.ar/noticias/larsen-recorrio-el-parque-nacional-campos-del-tuyu-que-prepara-la-apertura-de-uso-publico
- No se encontró en esta revisión una confirmación institucional posterior de acceso turístico regular. Se mantiene como candidato no incorporado; no se lo presenta como destino visitable operativo.

## Cobertura después del cambio

- Catálogo: 99 nodos.
- Jurisdicciones representadas: 24 de 24.
- Categorías existentes: 9.
- Buenos Aires: 28 nodos; Turismo: 3; categorías faltantes: ninguna, con Paso fronterizo marcado como no aplicable.
- Total nacional por categoría: Ciudad 7; Puerto 22; Aeropuerto 24; Paso fronterizo 11; Logística 3; Industria 14; Recurso mineral 4; Turismo 8; Estación ferroviaria 6.
- Próxima región de la rotación: CABA.

## Archivos y commits

- `data/strategic-nodes.json`: nuevo nodo. Commit de catálogo: `78aee6ba74d51adfd342ddc6a152a0f91b7b2759`.
- `research/national-map-coverage.json`: conteos recalculados, rotación Buenos Aires Province → CABA y categorías no aplicables para Buenos Aires/CABA.
- `README.md`: conteo nacional actualizado de 98 a 99 nodos.
- `.github/workflows/static.yml`: aserciones específicas del nodo, coordenadas, estado, cobertura de Buenos Aires y aplicabilidad de Paso fronterizo.
- `index.html`: sin cambios; ya carga `data/strategic-nodes.json` y construye los filtros desde las categorías presentes.
- Commit final de catálogo, matriz, documentación y validador: `0c2a6dfa88b5f5cf9cef0ce647e999207bb06b2b`.

## Validación y publicación

- JSON de catálogo y matriz: parseo correcto.
- Catálogo: 99 registros; 24 jurisdicciones; nueve categorías.
- Nombres y coordenadas: sin duplicados.
- IDs presentes: 14 IDs únicos; los registros históricos restantes todavía no tienen campo `id`. La nueva incorporación sí cuenta con ID estable. Se registra esta deuda de migración sin modificar los registros heredados en esta ejecución.
- Matriz: conteos por provincia/categoría reconciliados con el catálogo.
- Workflow GitHub Actions: ejecución [#45851465337](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45851465337), commit `0c2a6dfa88b5f5cf9cef0ce647e999207bb06b2b`; validación `success`, job `Deploy to GitHub Pages` `success`, conclusión global `success`.
- GitHub Pages: job de despliegue aprobado. La inspección HTTP independiente de la portada y del JSON publicado no estuvo disponible desde el entorno de verificación; no se afirma inspección visual independiente.

## Pendientes

1. Conseguir de APN/SIB metadatos que aclaren la semántica geométrica y datum/CRS de la coordenada del parque.
2. Verificar el acceso y uso público vigente de Campos del Tuyú antes de incorporarlo.
3. Planificar una migración gradual de IDs estables para los registros históricos sin ID, con validación y preservación de procedencia.
4. Revisar la aplicabilidad de «Paso fronterizo» en las restantes jurisdicciones sin frontera terrestre internacional.
