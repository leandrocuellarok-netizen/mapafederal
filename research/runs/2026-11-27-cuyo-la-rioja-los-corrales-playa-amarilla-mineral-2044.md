# MAPA FEDERAL — Cuyo / La Rioja / Los Corrales - Playa Amarilla

- Fecha y hora de verificación: 2026-11-27 20:44 ART (UTC-3).
- Rama base inspeccionada: `main` en `09b6036304c07dff7de8f7275df36c78b3953217`.
- Último workflow previo: Actions #903, validate = success y deploy = success.
- Región priorizada: Cuyo, siguiente región en la rotación después de NEA.
- Jurisdicción: La Rioja, departamento/localidad Famatina.
- Categoría: Recurso mineral.
- Brecha abordada: La Rioja tenía 4 nodos y 0 referencias de Recurso mineral; Cuyo tenía 16 nodos y 5 referencias minerales en el catálogo.

## Hallazgo y decisión

Se incorporó el depósito Los Corrales - Playa Amarilla, registro 11278 de SEGEMAR, como referencia geográfica de un depósito pequeño de oro (Au) de tipo placer.

### Fuente primaria y coordenadas

- Fuente primaria: SEGEMAR, Base de datos de yacimientos minerales de la República Argentina, depósito 11278:
  https://sigam.segemar.gov.ar/segedoc/res/img/sigam_yacimientos/dp11278.html
- La ficha informa actualización de la base: 13/07/2026.
- Jurisdicción publicada: provincia de La Rioja; subprovincia/localidad Famatina.
- Localización publicada: `-28.82805, -67.65972`.
- Commodity: Au; tipo: depósito de placer; categoría de tamaño: pequeño.
- Estado del depósito en SEGEMAR: «productor».
- Se copiaron los valores decimales publicados, sin geocodificación, reproyección ni transformación de datum.
- La ficha no declara datum, CRS/EPSG, precisión ni semántica geométrica exacta del punto.
- El marcador representa la localización del depósito, no un acceso, frente de explotación, centroide certificado ni perímetro.

### Estado operativo

SEGEMAR clasifica el registro como «productor», pero esa etiqueta no demuestra extracción vigente. No se localizó evidencia primaria reciente de operador o autoridad que confirme actividad extractiva actual. Por prudencia, el catálogo conserva `status: no_verificado`; no se presenta como mina actualmente operativa.

## Cobertura después de la incorporación

- Catálogo nacional: 126 nodos (antes 125).
- La Rioja: 5 nodos (antes 4); incorpora 1 Recurso mineral.
- Cuyo: 17 nodos (antes 16).
- Recurso mineral: 6 nodos (antes 5).
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se crearon categorías nuevas.
- Las jurisdicciones menos representadas permanecen en 3 nodos: Catamarca, Jujuy, Salta, Santiago del Estero y Tucumán.
- Rotación: `lastTargeted=Cuyo`, `nextTarget=Centro`.

## Archivos modificados

- `data/strategic-nodes.json`: nuevo registro `la-rioja-recurso-mineral-los-corrales-playa-amarilla-au-11278`.
- `research/national-map-coverage.json`: conteos provinciales, regionales y por categoría; rotación; metodología y referencia al commit del catálogo.
- `.github/workflows/static.yml`: regresiones para el registro, estado no verificado, coordenadas, fuente, conteos de La Rioja/Cuyo, categoría Recurso mineral y rotación.
- `README.md`: conteo actualizado a 126 y descripción de la nueva referencia.
- `index.html` no se modificó: la portada carga `./data/strategic-nodes.json` y el filtro existente `Recurso mineral` ya está integrado.

## Validación y publicación

- JSON parseado; 126 IDs únicos, 126 nombres únicos y 126 pares de coordenadas únicos.
- Se verificaron categorías admitidas, 24 jurisdicciones, rangos de coordenadas argentinos, URLs HTTPS y reconciliación de cada fila provincial con el catálogo.
- La matriz registra La Rioja = 5, Cuyo = 17 y Recurso mineral = 6.
- PR #49: https://github.com/leandrocuellarok-netizen/mapafederal/pull/49 — integrado.
- Commit del registro: `9cd645e7a8734eac0c281231bfada19f6ec083b1`.
- Commit de matriz: `dc89c40b06047a2b24c4a53caf2d5ebfe7cbc713`.
- Commit de validaciones: `62330c4633be37c0dbdc1e1ee56aacf8550c67b8`.
- Commit de README: `c47353d4ec69d001319d9f856ae6c82551ace4e6`.
- Merge en `main`: `d37a8aa615641f2c2fb3c9dac776dc3a9d15e631`.
- GitHub Actions #904 (run ID 46084015515): validate = success; deploy = success. El job de validación incluyó el control geográfico nacional y el chequeo de punto de entrada; el job de publicación completó `Deploy to GitHub Pages` con éxito.
- URL de Pages informada por el entorno de despliegue: https://leandrocuellarok-netizen.github.io/mapafederal/
- La inspección visual independiente de la portada y del JSON público no pudo completarse: el navegador devolvió un error de acceso. No se afirma haber visto el marcador en pantalla.

## Gaps y próxima prioridad

- La Rioja sigue sin nodos en Ciudad, Puerto, Logística y Estación ferroviaria; requiere coordenadas o geometrías atribuibles.
- Cuyo conserva candidatos pendientes en San Juan y San Luis; no se añadieron marcadores aproximados.
- Se mantiene prioridad de cobertura para Catamarca, Jujuy, Salta, Santiago del Estero y Tucumán.
- Próxima región de la rotación: Centro (Córdoba, Entre Ríos, La Pampa y Santa Fe), priorizando la combinación provincia/categoría menos cubierta con evidencia verificable.
