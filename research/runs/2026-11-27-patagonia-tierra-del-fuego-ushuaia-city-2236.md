# MAPA FEDERAL — Patagonia / Tierra del Fuego / Ushuaia (Ciudad)

- Fecha y hora de verificación: 2026-11-27 22:36 ART (UTC-3).
- Rama base inspeccionada: `main` en `b6f8d3bc73ba1f83d9eb163cfe63330c7f018d19`.
- Último workflow previo inspeccionado: Actions #907, run ID `46088853158`, `validate=success` y `deploy=success`; se comprobaron los pasos `Check public entry point` y `Deploy to GitHub Pages`.
- Rama de trabajo: `automation/patagonia-tierra-del-fuego-ushuaia-city-20261127-2236`.
- PR #51: https://github.com/leandrocuellarok-netizen/mapafederal/pull/51 — integrado.
- Región priorizada: Patagonia; próxima región de la rotación: Buenos Aires Province.
- Jurisdicción: Tierra del Fuego, departamento/localidad Ushuaia.
- Categoría: Ciudad.
- Brecha abordada: Tierra del Fuego tenía 4 nodos y 0 referencias de tipo Ciudad. La categoría Ciudad tenía 9 nodos en el catálogo nacional.

## Hallazgo y decisión

Se incorporó **Ushuaia — capital de Tierra del Fuego** como referencia urbana general. No se geocodificó el topónimo ni se infirió un centroide o límite administrativo.

### Fuentes primarias y coordenadas

- Fuente primaria de coordenadas: Municipalidad de Ushuaia, publicación municipal del 18/06/2014:
  https://www.ushuaia.gob.ar/eventos/muestra-fotografica-54-48-26-s-68-18-16-o-de-lujan-agusti
- La publicación expresa las coordenadas de la ciudad como 54°48′26″S, 68°18′16″O.
- Conversión aritmética DMS a decimal: `[-54.80722222222222, -68.30444444444444]`. Sin reproyección ni transformación de datum.
- La fuente no declara datum, CRS/EPSG ni precisión métrica; el marcador se usa como referencia urbana general, no como centroide certificado, ejido, acceso, instalación ni perímetro.
- Fuente institucional complementaria: CONAE identifica Ushuaia como capital provincial y publica otra referencia general de la ciudad (54°48′30″S, 68°18′30″O) en la ficha de imagen ALOS fechada el 23/01/2008:
  https://www.argentina.gob.ar/ciencia/conae/educacion-y-formacion-masiva/materiales-educativos/ciudad-de-ushuaia-tierra-del-fuego-alos-avnir2-23-de-enero-de-2008
- La Municipalidad mantiene un mapa interactivo ambiental de la ciudad:
  https://www.ushuaia.gob.ar/mapa-ushuaia
- La diferencia entre ambas coordenadas refleja distinta resolución de publicación; no se interpreta como validación de precisión métrica.

### Estado

Se conserva `status: operativo` en el sentido de entidad urbana/administrativa vigente. No se infiere un polígono urbano ni la precisión métrica del punto.

## Cobertura después de la incorporación

- Catálogo nacional: 128 nodos (antes 127).
- Tierra del Fuego: 5 nodos (antes 4); incorpora 1 Ciudad.
- Patagonia: 26 nodos (antes 25).
- Ciudad: 10 nodos nacionales (antes 9).
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se crearon categorías nuevas.
- Las jurisdicciones menos representadas permanecen en 3 nodos: Catamarca, Jujuy, Salta, Santiago del Estero y Tucumán.
- Rotación: `lastTargeted=Patagonia`, `nextTarget=Buenos Aires Province`.

## Archivos modificados

- `data/strategic-nodes.json`: nuevo registro `tierra-del-fuego-ciudad-ushuaia-capital-provincial`.
- `research/national-map-coverage.json`: conteos provinciales, regionales y por categoría; rotación y procedencia de la última ejecución.
- `.github/workflows/static.yml`: regresiones para el registro, coordenadas, fuente, CRS no declarado, calidad de referencia, conteos y rotación.
- `README.md`: conteo nacional actualizado a 128 y nota metodológica.
- `research/runs/2026-11-27-patagonia-tierra-del-fuego-ushuaia-city-2236.md`: esta bitácora.
- `index.html` no se modificó: la portada continúa consumiendo `./data/strategic-nodes.json` y el filtro existente `Ciudad`.

## Commits y validación

- Commit del catálogo: `c2f89810f0694978cf26d30d646ff3d853647733`.
- Commit de matriz: `0d19caaf067e8adfe3e29d32c9564a2c881bba4d`.
- Commit de validaciones: `525ac1d7547879ecf90721bb8f54bc64b612d836`.
- Commit de README: `0042048c3efe1519e069ee61b828d12a0bf0782e`.
- PR #51: https://github.com/leandrocuellarok-netizen/mapafederal/pull/51 — squash integrado.
- Merge en `main`: `7bbf3d0931b58c8d8bc1242b5533a74d8ef5e280`.
- Prevalidación sobre contenidos recuperados de GitHub: JSON parseado; 128 IDs únicos, 128 nombres únicos y 128 pares de coordenadas únicos; 24 jurisdicciones; nueve categorías; coordenadas dentro de rangos válidos; URLs HTTPS; matriz recalculada y reconciliada.
- Regresiones añadidas para Ushuaia y expectativas nacionales actualizadas: nodoCount 128; Tierra del Fuego 5; Patagonia 26; Ciudad 10; rotación Patagonia → Buenos Aires Province; `catalogCommit` sincronizado con el commit de catálogo.
- El workflow de Pages del repositorio se ejecuta al hacer push a `main`. Al redactar esta bitácora, el conector de GitHub no había devuelto un identificador de ejecución para el push del merge; por ello, **la validación post-merge y el despliegue de esta versión quedan pendientes de confirmación**. No se afirma publicación.
- URL de Pages: https://leandrocuellarok-netizen.github.io/mapafederal/
- La inspección visual independiente de la portada y del JSON público no pudo completarse porque el navegador no pudo acceder al dominio.

## Gaps y próxima prioridad

- Tierra del Fuego permanece sin nodos en Paso fronterizo, Logística, Recurso mineral y Estación ferroviaria; la ausencia en el catálogo no implica ausencia territorial.
- Cinco jurisdicciones del NOA siguen en el mínimo nacional de 3 nodos: Catamarca, Jujuy, Salta, Santiago del Estero y Tucumán.
- Próxima región de la rotación: Buenos Aires Province. Revisar localidades e infraestructura fuera del corredor norte y no sumar puntos si la fuente no publica geometría o coordenada atribuible.
