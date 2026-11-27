# MAPA FEDERAL — Río Negro / Parque Industrial Allen Norte

- Fecha y hora de investigación: 2026-11-27 08:33 ART (UTC-3).
- Región objetivo: Patagonia.
- Provincia: Río Negro.
- Categoría: Industria.
- Base inspeccionada: `main` en `7288b46648fe649a67d93f152c524bea5c7f0798`.
- Cobertura previa: 3 nodos en Río Negro; sin nodo de Industria.
- Mejora principal: incorporación del Parque Industrial Allen Norte, con la coordenada oficial publicada para su acceso Martín Fierro.
- ID: `rio-negro-industria-parque-industrial-allen-norte`.
- Coordenadas decimales: `[-38.92551388888889, -67.86676388888888]`.
- Coordenadas de origen: `38°55'31.85"S / 67°52'0.35"O`.
- Estado en el catálogo: `no_verificado`. El REPPIL clasifica el parque como «En desarrollo»; el estado del acceso y la operación integral no se verificaron en tiempo real.

## Fuentes

1. Gobierno de Río Negro — Registro Provincial de Parques Industriales y Logísticos (REPPIL): https://parquesindustriales.rionegro.gov.ar/programa/557/registro-provincial-de-parques-industriales-y-logisticos
   - Ficha «Parque Industrial Allen Norte / Parque Industrial Norte», Región Alto Valle. Publica ubicación «Acceso Martín Fierro (acceso Autódromo Gral Enrique Mosconi)» y coordenadas 38°55'31.85"S / 67°52'0.35"O.
   - Clasifica el parque como público, creado en 2012, en desarrollo, con 437 ha, 95 lotes, 50 disponibles, 1 empresa operativa, 9 en proyecto y 0 en construcción.
   - Consulta: 2026-11-27. El portal no indica fecha de publicación o actualización de la ficha.

## Registro incorporado

- Se agregó un único nodo de tipo `Industria` en Río Negro.
- La coordenada se transcribió de la ficha provincial y se convirtió aritméticamente de DMS a grados decimales.
- No se geocodificó el nombre, no se estimó un centroide, no se realizó reproyección ni transformación de datum.
- El REPPIL no declara datum/CRS, EPSG, precisión ni método de captura; no se asignó EPSG.
- La ubicación publicada corresponde al acceso Martín Fierro; el marcador no representa centroide, parcela, lote ni perímetro del parque.
- El estado «En desarrollo» y los conteos empresariales se conservan como información administrativa de la ficha, sin inferir operación integral ni disponibilidad comercial actual. El campo `status` queda `no_verificado` por no haberse verificado el acceso ni la situación operativa completa al momento de consulta.

## Cobertura antes y después

- Catálogo nacional: 113 → 114 nodos.
- Río Negro: 3 → 4 nodos.
- Río Negro / Industria: 0 → 1.
- Patagonia: 23 → 24 nodos en cinco jurisdicciones.
- Industria nacional: 15 → 16 nodos.
- Jurisdicciones representadas: 24/24.
- Próxima región de rotación: Buenos Aires Province.
- Jurisdicciones menos representadas: Catamarca, Santiago del Estero y Tucumán, con 2 nodos cada una.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- `README.md`
- `research/runs/2026-11-27-patagonia-rio-negro-allen-norte-0833.md`

`index.html` no se modificó. Se verificó en el HEAD de base que la portada carga `data/strategic-nodes.json` y utiliza las categorías dinámicas existentes.

## Validación y commits

- Deduplicación previa contra el catálogo completo: ID, nombre y par de coordenadas no existentes.
- Coordenadas convertidas: latitud -38.92551388888889, longitud -67.86676388888888; dentro de rango geográfico y jurisdicción Río Negro.
- Catálogo JSON: 114 registros tras la incorporación.
- IDs, nombres y coordenadas: 114 IDs únicos, 114 nombres únicos y 114 pares de coordenadas únicos; 24 jurisdicciones, nueve categorías válidas y coordenadas dentro de rangos geográficos.
- Matriz provincial recalculada para 24 jurisdicciones y nueve categorías.
- Rotación actualizada: Patagonia → Buenos Aires Province.
- Commit de catálogo: `31f7ab4064a42a64d22f8f41bbe2f3685cb6bb0d`.
- Commit de matriz: `f6846fbf9df3c22860776c1935374cc5bbffa8ba`.
- Commit de README: `25f05c092d2c69a2652cdfe3aa4551fbc8c9ecf9`.
- Commit de workflow: `69c101d287b461ce9310c5fbfad06e3b39b682d3`.
- Rama: `automation/2026-11-27-patagonia-rio-negro-allen-norte-0833`.
- PR #27 integrado en `main`: https://github.com/leandrocuellarok-netizen/mapafederal/pull/27; merge commit `052d5b8b10757443d8d51935d8387725b1d35cbb`.
- PR #28 integrado: https://github.com/leandrocuellarok-netizen/mapafederal/pull/28; merge commit `47627578a38ba5847e0a0b491b4fcbd553be9adc`.
- PR #29 integrado: https://github.com/leandrocuellarok-netizen/mapafederal/pull/29; merge commit `338ea389e604f13a0a4ffd0a92f688572fea9c4d`.
- GitHub Actions #873 (run ID `45992143373`, commit `338ea389e604f13a0a4ffd0a92f688572fea9c4d`): workflow `Deploy static content to Pages` completado con conclusión `success`; jobs `validate` y `deploy` completados con `success`.
- Validación final: JSON geográfico/editorial, 114 nodos, IDs/nombres/coordenadas únicas, matriz de 24 jurisdicciones y nueve categorías, sintaxis JavaScript inline, directorio escalable, filtros territoriales, informes federales, exportaciones CSV, SEO/GEO, assets y pruebas de procurement: todos los pasos del job `validate` aprobados.
- GitHub Pages: job `Deploy to GitHub Pages` completado con `success` en Actions #873. La comprobación visual independiente de la portada y del JSON publicado no pudo completarse: el entorno de verificación no resolvió el DNS de `leandrocuellarok-netizen.github.io`. No se afirma que el marcador haya sido inspeccionado visualmente.
- `index.html` no se modificó; conserva su referencia a `data/strategic-nodes.json` y los filtros existentes.

## Brechas pendientes

- Río Negro: Ciudad, Paso fronterizo, Logística, Recurso mineral y Estación ferroviaria siguen sin nodos.
- Parque Industrial II de General Roca: fuentes oficiales documentan ubicación en RP 6 km 93 y actividad empresarial, pero no aportan coordenada puntual o geometría; no se geocodificó el kilometraje ni se incorporó un punto aproximado.
- Catamarca, Santiago del Estero y Tucumán continúan como las jurisdicciones menos representadas.

## Incidencia de validación y corrección

- GitHub Actions #871 (run ID `45991925263`, commit `052d5b8b10757443d8d51935d8387725b1d35cbb`) falló en el paso «Validate geographic and editorial JSON» por una aserción sensible a mayúsculas/minúsculas: el metadato correcto decía «No se asigna EPSG» y la prueba esperaba «no se asigna EPSG».
- No se modificó el dato geográfico. Se corrigió la prueba para comparar el texto normalizado con `.lower()` en la rama de reparación.
- Commit de corrección del workflow: `ea4d6f82f79bd6fd452704100938374d080a1ef2`.
- La primera corrección se integró mediante PR #28 y fue seguida por una segunda incidencia de texto normalizado, corregida en PR #29.

- GitHub Actions #872 (run ID `45992043475`, commit `47627578a38ba5847e0a0b491b4fcbd553be9adc`) volvió a detenerse en la validación geográfica por una segunda comparación textual sensible a mayúsculas/minúsculas («Acceso Martín Fierro» / «No representa»). Se normalizó también esa aserción con `.lower()`; no se modificó el registro ni las coordenadas.
- Commit de esta segunda corrección del workflow: `711a46c8a0a40982369c9188e05902f6ba6a406e`.
- La validación definitiva y el despliegue de Pages quedaron aprobados en Actions #873 (run ID `45992143373`).

## Estado final de publicación

- HEAD de integración del catálogo y la matriz: `338ea389e604f13a0a4ffd0a92f688572fea9c4d`.
- GitHub Actions #873: https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45992143373 — `validate: success`, `deploy: success`.
- Pages: despliegue confirmado por el job oficial; inspección independiente de la URL pública pendiente por fallo de resolución DNS desde el entorno de verificación.
- El commit que actualiza esta bitácora incorpora únicamente el estado final de la ejecución; no cambia catálogo, matriz ni homepage.
