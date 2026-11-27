# MAPA FEDERAL — Cuyo / San Juan / Mina Veladero

- Fecha y hora de verificación: 26/11/2026, 23:40 ART.
- Rama: `ops/cuyo-san-juan-veladero-20261126-2340`.
- HEAD de `main` inspeccionado antes de la ejecución: `41b5ff5f2a8f8f0d3f8a72f87afe28e30b3dcd4a`.
- Región trabajada: Cuyo. Próxima región de la rotación: Centro.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporó un nodo a San Juan en la categoría `Recurso mineral`:

- Nombre: Mina Veladero.
- ID: `san-juan-recurso-mineral-veladero`.
- Departamento: Iglesia; distrito geológico: Valle del Cura.
- Coordenadas: `[-29.36833, -69.95222]`.
- Registro SEGEMAR: depósito 339.
- Estado: `operativo`, respaldado por la clasificación SEGEMAR «productor» y la documentación actual del operador. No se infieren volúmenes de producción, capacidad ni acceso público.

La base de datos de yacimientos minerales de SEGEMAR declara actualización al 13/07/2026 y publica localización, jurisdicción, commodities Au/Ag y estado del depósito «productor». La ficha no especifica datum/CRS ni la semántica geométrica exacta del punto. Por eso se conserva como referencia geográfica del yacimiento; no se presenta como acceso, boca de mina, centroide certificado ni perímetro.

## Fuentes

- SEGEMAR — Base de datos de yacimientos minerales, depósito 339, Veladero: https://sigam.segemar.gov.ar/segedoc/res/img/sigam_yacimientos/dp339.html (actualización declarada: 13/07/2026).
- Operador — Veladero, sitio oficial: https://veladero.com/home (consultado el 26/11/2026; la página mostraba estado del camino actualizado el 26/11/2026 a las 08:15 ART, cámaras y noticias 2026).

## Cobertura

- Catálogo nacional: 106 → 107 nodos.
- San Juan: 3 → 4 nodos; suma su primer registro `Recurso mineral`.
- Cuyo: 13 → 14 nodos; sus cuatro jurisdicciones continúan representadas.
- Categoría `Recurso mineral`: 4 → 5 nodos.
- Las jurisdicciones menos representadas siguen siendo Catamarca, Jujuy, Santiago del Estero y Tucumán, con dos nodos cada una.
- La portada continúa consumiendo `data/strategic-nodes.json` mediante `loadPoints()`; no se modificó `index.html`.

## Archivos y commits

- `data/strategic-nodes.json`: nuevo registro Veladero. Commit: `b21903a2cca2d6199c298d1b6984760598d159e8`.
- `research/national-map-coverage.json`: matriz recalculada y rotación Cuyo → Centro; fija `catalogCommit` en el commit del catálogo. Commit: `7dcbc5fe283f2d46690dcd50aa05b637079f5943`.
- `README.md`: recuento actualizado a 107 y nota metodológica. Commit: `8f1aeefe2746eb8402533035ad5084810c25a6d2`.
- `.github/workflows/static.yml`: regresión para identidad, coordenada, fuentes, estado y matriz del nodo. Commit: `313195bbc55eac7ee54fd0091e699bcc08eee69c`.
- Esta bitácora se incorpora en la misma rama.

## Validación previa a integración

- JSON del catálogo y matriz parseados correctamente.
- 107 IDs únicos, 107 nombres únicos y 107 pares de coordenadas únicos.
- 24 jurisdicciones y nueve categorías.
- Rangos de coordenadas, tipos de categoría y dimensiones de cobertura comprobados.
- San Juan: cuatro nodos, un Recurso mineral; Cuyo: 14 nodos.
- Prueba de regresión específica añadida al workflow.
- La sintaxis JavaScript de portada se comprobará mediante el workflow existente; `index.html` no fue modificado.

## Integración y publicación

- PR #13 integrado en `main`; merge commit: `327594d8270a87db2af18dba87b38eaa66ec7f82`.
- La primera ejecución sobre ese merge, Actions #842 (ID `45929975173`), falló porque el workflow aún esperaba la rotación NEA → Cuyo. La matriz ya registraba correctamente Cuyo → Centro.
- PR #14 corrigió la aserción obsoleta; merge commit: `4612917c13977fc91740ad10f83b3da25f7b9e18`.
- Actions #843 (ID `45930068797`), sobre el commit `4612917c13977fc91740ad10f83b3da25f7b9e18`: job `validate` exitoso y job `deploy` exitoso; el paso `Deploy to GitHub Pages` terminó en `success`.
- El catálogo, la matriz, README, workflow y esta bitácora quedaron integrados en `main`. La portada `index.html` no fue modificada y sigue cargando el catálogo nacional.
- La portada pública no pudo inspeccionarse independientemente desde la herramienta web; se confirma el job de Pages, no una verificación visual del marcador.

## Brechas pendientes

- San Luis: geometría oficial del Parque Industrial San Luis; se mantiene el marcador existente sin relocalización inferida.
- San Luis: reconciliar la AIP vigente y el estado operacional de Villa Reynolds antes de considerar su incorporación.
- La Rioja: completar ciudad/infraestructura con punto oficial atribuible.
- Persisten brechas de Industria, Logística, Ciudad y Estación ferroviaria en distintas jurisdicciones; se priorizarán por la matriz y no por facilidad de geocodificación.

## Próxima prioridad

Región Centro, priorizando La Pampa y Santa Fe/Córdoba según las brechas verificables de la matriz.

## Corrección posterior a la primera validación

- PR #13 integrado en `main`; merge commit: `327594d8270a87db2af18dba87b38eaa66ec7f82`.
- GitHub Actions #842 (ID `45929975173`) falló en el paso `Validate geographic and editorial JSON`: una aserción histórica todavía esperaba la rotación NEA → Cuyo. La matriz ya estaba correctamente actualizada a Cuyo → Centro. El catálogo, la matriz y la nueva aserción específica de Veladero pasaron hasta ese punto; la falla fue la expectativa desactualizada, no el registro geográfico.
- Corrección: se actualizó la aserción de rotación en `.github/workflows/static.yml` para esperar Cuyo → Centro. Commit de la corrección en rama: `979829dde6bfb9e0908258f9fb552ca457cdd710`.
- La corrección quedó validada en Actions #843 (ID `45930068797`): jobs `validate` y `deploy` exitosos, incluido `Deploy to GitHub Pages`. La actualización final de esta bitácora también pasó en Actions #844 (ID `45930166046`), con ambos jobs exitosos.
