# MAPA FEDERAL — Buenos Aires Province / Tigre / Terminal Fluvial Binacional

- Fecha y hora de verificación: 2026-11-26T19:31:27-03:00 (ART).
- Rama de trabajo: `automation/2026-11-26-buenos-aires-tigre-border`.
- HEAD de trabajo antes de esta bitácora: `621af6d6584aefe9ce394151208308ea8cb821c4`.
- PR #9 integrado en `main` mediante merge commit [`e915b2d`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/e915b2d5acc342d2a05cce86b84b87cbd7ec81be).
- Región trabajada: Buenos Aires Province. Próxima región de la rotación: CABA.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporó la Terminal Fluvial Binacional de Tigre como punto de ingreso y egreso internacional, categoría `Paso fronterizo`.

- ID estable: `buenos-aires-paso-fronterizo-terminal-fluvial-binacional-de-tigre`.
- Jurisdicción: Buenos Aires, partido de Tigre, localidad de Tigre.
- Coordenadas de referencia: `[-34.42121, -58.58097]` (latitud, longitud).
- Fuente institucional de estado: [Dirección Nacional de Migraciones — Pasos Internacionales](https://www.argentina.gob.ar/migraciones/pasos-internacionales).
- Fuente de coordenadas: [Mapcarta — Estación Fluvial Internacional Tigre](https://mapcarta.com/es/W269888419), basada en OpenStreetMap way 269888419.
- Fuente municipal de identidad/actividad: [Municipio de Tigre — Movilidad urbana](https://www.tigre.gob.ar/urbanismo/movilidad_urbana).
- Antecedente administrativo: [Decisión Administrativa 86/2022](https://www.argentina.gob.ar/normativa/nacional/norma-360277/texto).

## Estado y alcance operativo

La página vigente consultada de Migraciones presenta las vías de ingreso y egreso que se encuentran en funcionamiento e incluye la Terminal Fluvial Binacional de Tigre, con horario publicado de 07 a 17 para embarcaciones particulares y deportivas. El Municipio identifica la Estación Fluvial Domingo Faustino Sarmiento, en Mitre 305, y las salidas de lanchas colectivas.

La Decisión Administrativa 86/2022 autorizó la apertura de la terminal como corredor seguro internacional durante el contexto sanitario de 2022. Esa autorización histórica no se usa por sí sola para afirmar un servicio comercial internacional regular. El estado `operativo` del nodo se refiere a su inclusión en el listado actual consultado de Migraciones como vía de ingreso/egreso; no implica operación en tiempo real, frecuencia de ferry internacional ni disponibilidad para cualquier tipo de embarcación.

## Calidad geoespacial

- Mapcarta identifica OpenStreetMap way 269888419, `amenity=ferry_terminal`, y publica `-34.42121, -58.58097`.
- La coordenada es secundaria: no se recuperó una geometría puntual primaria atribuible en los geoservicios consultados de IDEBA. IDEBA documenta WMS/WFS como mecanismos de consulta de geometrías, pero el servicio WFS de Producción no respondió a la consulta de esta ejecución.
- CRS/datum: Mapcarta/OSM no declara CRS, datum, método de captura ni precisión; no se asigna EPSG.
- Transformación: se transcribieron los valores decimales publicados; sin reproyección, transformación de datum ni geocodificación.
- La coordenada se presenta solo como referencia cartográfica de la terminal. No representa un acceso, muelle específico, puesto de control migratorio ni perímetro certificado.
- No se geocodificó el domicilio municipal ni se usó un centroide de localidad.

## Cobertura

- Catálogo nacional: 102 → 103 nodos.
- Buenos Aires: 28 → 29 nodos.
- Paso fronterizo nacional: 11 → 12 nodos.
- Paso fronterizo en Buenos Aires: 0 → 1.
- La categoría Paso fronterizo deja de figurar como brecha de presencia en Buenos Aires; quedan otros pasos nombrados por fuentes oficiales pendientes de georreferenciación.
- Jurisdicciones: 24 de 24.
- Categorías: nueve; no se crearon categorías nuevas.
- Tucumán continúa como la jurisdicción menos representada, con un nodo.
- Rotación regional: Buenos Aires Province completada; próxima región CABA.

## Deduplicación y validación previa a CI

- Se comparó ID, nombre y par de coordenadas contra el catálogo completo antes de insertar.
- No se encontró ID, nombre ni par de coordenadas duplicado.
- Resultado posterior: 103 IDs únicos, 103 nombres únicos y 103 pares de coordenadas únicos.
- Se verificaron 24 jurisdicciones, nueve categorías admitidas y coordenadas dentro del rango nacional.
- La matriz quedó reconciliada en 103 nodos; Buenos Aires registra 29 y un nodo Paso fronterizo.
- Se añadió una prueba de regresión para ID, jurisdicción, categoría, coordenadas, fuentes, calidad secundaria, estado y cobertura.
- La validación automatizada y el despliegue de Pages quedan pendientes de confirmación externa; no se afirma publicación en esta etapa.

## Archivos y commits de la rama

- `data/strategic-nodes.json`: incorporación del nodo.
- `research/national-map-coverage.json`: conteos, brechas, metodología y rotación Buenos Aires Province → CABA.
- `README.md`: total actualizado a 103 y nota de calidad de coordenadas.
- `.github/workflows/static.yml`: prueba de regresión del nodo y la matriz.
- `research/runs/2026-11-26-buenos-aires-tigre-terminal-fluvial-border-1931.md`: esta bitácora.

Commits:
- Catálogo: [`496872d`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/496872d1145d1931325e486f34eecbf1ed5e6d1f).
- Matriz: [`c9a7ca2`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/c9a7ca24c1b08d684600089de90cb8d77ef451dc).
- README: [`bb61823`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/bb618237d5e471cec950382c0ac6870e85474215).
- Corrección final del segundo conteo README: [`3f552d6`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/3f552d61e11d12ecdde168021224074f9424dfed).
- Prueba de regresión inicial: [`6490c63`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/6490c638230cdabebe644e164fa33f455edd380d).
- Ajuste de aserción de regresión para coincidir con el alcance de estado documentado: [`621af6d`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/621af6d6584aefe9ce394151208308ea8cb821c4).

## Integración y publicación

- `index.html` no se modificó: la portada carga `./data/strategic-nodes.json` mediante `loadPoints()`, valida coordenadas dentro del rango nacional y genera el directorio/filtros desde el catálogo.
- PR #9: integrado en `main`; merge commit [`e915b2d`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/e915b2d5acc342d2a05cce86b84b87cbd7ec81be).
- GitHub Actions: las consultas de estados combinados y ejecuciones por commit no devolvieron resultados para el merge ni para el commit de cierre documental. No se pudo confirmar `validate` ni `Deploy to GitHub Pages`; no se declara despliegue.
- GitHub Pages: la portada y el JSON publicados no respondieron a la comprobación independiente del entorno. No se declara visualización ni publicación del nuevo marcador.

## Brechas pendientes

- CABA conserva brechas de presencia en Paso fronterizo, Logística, Industria, Recurso mineral y Turismo. La Terminal Buquebus permanece pendiente porque la fuente primaria consultada no publica una coordenada puntual atribuible.
- En Buenos Aires siguen pendientes otros pasos fluviales nombrados por fuentes oficiales sin geometría o coordenada puntual verificable.
- La coordenada de Tigre es secundaria y no apta para navegación, mensura ni identificación del puesto migratorio.
- Próxima prioridad regional: CABA; mantener vigilancia sobre Tucumán, todavía la jurisdicción menos representada.
