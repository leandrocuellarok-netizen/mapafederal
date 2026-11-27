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

- PR y commit de merge: pendientes.
- GitHub Actions `validate` y `Deploy to GitHub Pages`: pendientes de integración.
- No se afirma publicación hasta verificar ambos jobs.

## Brechas pendientes

- San Luis: geometría oficial del Parque Industrial San Luis; se mantiene el marcador existente sin relocalización inferida.
- San Luis: reconciliar la AIP vigente y el estado operacional de Villa Reynolds antes de considerar su incorporación.
- La Rioja: completar ciudad/infraestructura con punto oficial atribuible.
- Persisten brechas de Industria, Logística, Ciudad y Estación ferroviaria en distintas jurisdicciones; se priorizarán por la matriz y no por facilidad de geocodificación.

## Próxima prioridad

Región Centro, priorizando La Pampa y Santa Fe/Córdoba según las brechas verificables de la matriz.
