# MAPA FEDERAL — NEA / Formosa / Puente Internacional San Ignacio de Loyola

- Fecha y hora de verificación: 2026-11-27 19:31 ART (UTC-3).
- Rama base inspeccionada: main en ab7dffe22bb29e42ccf1ee6244fe9515c7e32748.
- Preflight previo: PR #45, integrado en df775e99048ddc630b2539526e400e4ae43ea177; Actions #900 (run ID 46077370325) completó validate y deploy con éxito.
- Región priorizada: NEA. Jurisdicción: Formosa, entre las de menor cobertura nacional antes de esta incorporación.
- Categoría: Paso fronterizo.
- Registro agregado: formosa-paso-fronterizo-puente-internacional-san-ignacio-de-loyola.

## Hallazgo y decisión

Se incorporó el Puente Internacional San Ignacio de Loyola, que conecta Clorinda (Formosa, Argentina) con José Falcón (Paraguay) sobre el río Pilcomayo.

### Coordenadas y fuentes

- Coordenada publicada por el Ministerio de Seguridad: 25°15′51,4″S, 57°43′28″O.
- Conversión aritmética DMS a grados decimales: [-25.26427777777778, -57.72444444444444].
- Fuente primaria de coordenadas: Boletín de las Fronteras Argentinas N.º 2, Dirección Nacional de Control de Fronteras e Hidrovías, junio de 2021:
  https://www.argentina.gob.ar/sites/default/files/boletin_fronteras_2_15octubre2021.pdf
- Fuente oficial de identificación del paso:
  https://www.argentina.gob.ar/seguridad/pasosinternacionales/detalle/ruta/71/Clorinda-Puerto-Jos%C3%A9-Falc%C3%B3n
- Fuente oficial de estado y horario: Dirección Nacional de Migraciones, Pasos Internacionales; lista el puente entre las vías en funcionamiento y publica horario 24 h:
  https://www.argentina.gob.ar/node/289004
- La ficha de detalle informa actualización de Gendarmería Nacional del 26/11/2026 a las 17:15 y de Vialidad Nacional del 04/11/2026 a las 09:40.
- Jurisdicción departamental: Pilcomayo. Argentina.gob.ar identifica Clorinda como cabecera de ese departamento y ubica el puente a 4 km de la ciudad:
  https://www.argentina.gob.ar/node/145474

### Calidad geoespacial y estado

- El boletín oficial publica una coordenada del sitio Puente Loyola, pero no declara datum/CRS ni precisa si el punto corresponde al eje del puente, una cabecera o el puesto de control.
- No se asigna EPSG ni se realiza reproyección.
- El marcador se usa como referencia del cruce fronterizo; no representa el límite internacional certificado ni el perímetro aduanero.
- Estado operativo: la Dirección Nacional de Migraciones incluye el paso entre las vías en funcionamiento y publica horario de 24 h. No se infiere ausencia de demoras, interrupciones o cierres temporales.
- El Parque Industrial de Formosa continúa como candidato not_added: la actividad empresarial está documentada, pero no hay geometría o coordenada exacta atribuible del predio.

## Cobertura después de la incorporación

- Catálogo nacional: 125 nodos (antes 124).
- Formosa: 4 nodos (antes 3); incorpora su primer nodo Paso fronterizo.
- NEA: 16 nodos (antes 15).
- Categoría Paso fronterizo: 13 nodos (antes 12).
- Jurisdicciones: 24/24.
- Categorías existentes: 9; sin categorías nuevas.
- Mínimo nacional actualizado: 5 jurisdicciones con 3 nodos — Catamarca, Jujuy, Salta, Santiago del Estero y Tucumán. Formosa pasa a 4.
- Rotación: lastTargeted=NEA, nextTarget=Cuyo.

## Archivos modificados

- data/strategic-nodes.json: nuevo registro, sin alterar los demás nodos.
- research/national-map-coverage.json: conteos por provincia/categoría/región, mínimo nacional, nota de rotación y metodología.
- .github/workflows/static.yml: regresión para el nuevo punto y actualización de conteos/rotación.
- README.md: catálogo 125 nodos y referencia fronteriza.
- index.html no se modifica; el mapa de portada ya consume el catálogo nacional y el filtro existente Paso fronterizo.

## Validación

- JSON parseado.
- ID único y coordenadas no duplicadas.
- Provincia, departamento y categoría válidos.
- Coordenadas dentro del rango geográfico esperado.
- Matriz reconciliada con 125 nodos y 24 jurisdicciones.
- Formosa 4; NEA 16; Paso fronterizo 13.
- Mínimo nacional actualizado a cinco jurisdicciones con 3 nodos.
- Pruebas del workflow actualizadas para la nueva cobertura y la rotación NEA → Cuyo.
- GitHub Actions #901 (run ID 46077748255) falló en la aserción de coordenadas por una diferencia de una ULP entre el literal de prueba y el float serializado en JSON; el job deploy fue omitido. No fue un error del registro ni de su fuente.
- La aserción se corrigió en PR #47: https://github.com/leandrocuellarok-netizen/mapafederal/pull/47, integrado en 5cfafe8a201538d45bb4035041480d3d587c8059.
- GitHub Actions #902 (run ID 46077831456): validate = success; deploy = success. El paso Check public entry point también terminó en success. https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/46077831456
- GitHub Pages: despliegue confirmado para el catálogo de 125 nodos.

## Integración y publicación

- Rama de catálogo: automation/nea-formosa-san-ignacio-20261127.
- PR #46: https://github.com/leandrocuellarok-netizen/mapafederal/pull/46 — integrado.
- Commit de catálogo y matriz: 778bdefc05f15cd0bfec1095234b3249176ce85a.
- PR #47: https://github.com/leandrocuellarok-netizen/mapafederal/pull/47 — integrado; commit de corrección de prueba: 5cfafe8a201538d45bb4035041480d3d587c8059.
- Archivos de catálogo: data/strategic-nodes.json, research/national-map-coverage.json, .github/workflows/static.yml y README.md; bitácora de esta ejecución.
- index.html no se modificó; el nodo se conecta al catálogo JSON y al filtro Paso fronterizo existente.
- La herramienta de navegador no pudo recuperar la portada ni el JSON público; por eso no se afirma una inspección visual del marcador. El chequeo de punto de entrada del workflow sí pasó.

## Próxima prioridad

Cuyo, siguiendo la rotación. Mantener bajo seguimiento a Catamarca, Jujuy, Salta, Santiago del Estero y Tucumán, ahora empatadas en el mínimo de 3 nodos.
