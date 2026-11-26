# Mapa Federal — Centro / La Pampa / Parque Nacional Lihué Calel

- Fecha y hora de verificación: 2026-11-26T17:39:08-03:00 (ART).
- Rama: `main`.
- HEAD previo al cambio: `c947d5b54de7f57aa604daf862d3df9f97f25e4a`.
- Región trabajada: Centro. Próxima región de la rotación: Patagonia.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporó el Parque Nacional Lihué Calel, La Pampa, en la categoría `Turismo`.

- ID: `la-pampa-parque-nacional-lihue-calel`.
- Coordenadas: `[-37.93488, -65.60471]`.
- Fuente de coordenadas: [SIB/APN — ficha del Parque Nacional Lihué Calel](https://sib.gob.ar/areas-protegidas/parque-nacional-lihue-calel).
- La ficha publica 37°56'05.56"S (-37.93488), 65°36'16.96"O (-65.60471), y declara provincia La Pampa, departamento Lihuel Calel, creación 1976 y superficie 32.514 ha.
- CRS/datum: la ficha publica coordenadas geográficas decimales, pero no declara datum ni CRS. No se asigna EPSG ni se realiza reproyección.
- Calidad: punto de referencia geográfica oficial SIB/APN. La ficha no define si representa acceso, centroide o punto interno; no se presenta como acceso ni perímetro.
- Fuente institucional complementaria: [APN — Parque Nacional Lihué Calel](https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-lihue-calel), que confirma provincia, superficie aproximada y acceso gratuito.
- Uso turístico: [APN — Recorrer el Parque](https://www.argentina.gob.ar/node/471952) documenta recorridos a pie, bicicleta y vehículo, senderos, centro de visitantes y área de acampe. [APN — Servicios](https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-lihue-calel/servicios) informa que el uso de instalaciones de acampe requiere reserva y que la proveeduría puede no estar disponible.
- Estado: `operativo` como área protegida con oferta de visita documentada por APN; no implica disponibilidad de servicios, senderos o acceso en tiempo real.

## Cobertura

- Catálogo nacional: 100 → 101 nodos.
- La Pampa: 2 → 3 nodos.
- Turismo: 8 → 9 nodos.
- Turismo en La Pampa: 0 → 1.
- Región Centro: 13 → 14 nodos.
- Jurisdicciones: 24 de 24.
- Categorías: 9, sin altas ni duplicaciones.
- La Pampa deja de figurar entre las cinco jurisdicciones menos cubiertas del resumen; Tucumán continúa con un nodo. La próxima región de rotación es Patagonia.

## Deduplicación y validación

- ID, nombre por jurisdicción y par de coordenadas comparados contra el catálogo completo de 100 nodos antes de insertar.
- Sin duplicados de ID, nombre/jurisdicción ni coordenadas.
- Coordenadas dentro del rango nacional y jurisdicción La Pampa.
- URLs HTTPS para fuente institucional, coordenadas y fuentes de estado.
- CRS no inferido; punto no presentado como acceso ni perímetro.
- Se incorporaron aserciones de regresión para ID, provincia, departamento, categoría, coordenada, fuente, CRS no declarado, calidad cartográfica y reserva de instalaciones.
- Se actualizó la matriz para reconciliar 101 nodos, 24 jurisdicciones y nueve categorías.
- La validación completa y el despliegue quedan sujetos a las ejecuciones de GitHub Actions posteriores a los commits.

## Integración y archivos

- `data/strategic-nodes.json`: incorporación del nodo.
- `research/national-map-coverage.json`: conteos, brechas y rotación Centro → Patagonia.
- `.github/workflows/static.yml`: prueba de regresión y conteo de La Pampa.
- `README.md`: total nacional actualizado.
- `research/runs/2026-11-26-centro-la-pampa-lihue-calel-national-park-tourism-1739.md`: esta bitácora.

`index.html` no se modificó: la portada ya consume `data/strategic-nodes.json` y conserva el filtro `Turismo`.

## Commits y publicación

- Commit del catálogo: `c947d5b54de7f57aa604daf862d3df9f97f25e4a`.
- Commit de matriz, validador, README y bitácora: se registra en el historial de GitHub al finalizar esta actualización.
- Workflow de datos #822: ejecución disparada por el commit de catálogo; su resultado se documentará tras completarse.
- Workflow de integración: pendiente de ejecución y comprobación de los jobs `validate` y `deploy`.
- Inspección independiente de la portada pública: no disponible desde el entorno de verificación; la URL de Pages no respondió. No se declara inspección visual.

## Brechas pendientes

- Parque Industrial General Pico: continúa sin incorporarse; la Ley provincial acredita su creación, pero no aporta geometría y la coordenada secundaria no define CRS/datum ni un punto exacto del predio.
- No se infieren accesos ni límites del Parque Nacional desde la ubicación geográfica SIB/APN.
