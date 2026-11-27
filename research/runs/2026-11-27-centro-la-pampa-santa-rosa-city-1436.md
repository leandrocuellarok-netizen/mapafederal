# MAPA FEDERAL — Centro / La Pampa / Santa Rosa

- Fecha y hora de investigación: 2026-11-27 14:36 ART (UTC-3).
- Base inspeccionada: `main` en `09b767be9a39a12c6571d0a87d5f7b798493719a`.
- Región de rotación: Centro.
- Provincia: La Pampa.
- Localidad: Santa Rosa.
- Categoría: Ciudad.
- Cobertura previa: 119 nodos nacionales; La Pampa tenía 3 nodos (dos Aeropuerto y uno Turismo), sin Ciudad; Centro tenía 16 nodos.

## Mejora principal

Se incorpora un registro urbano:

- ID: `la-pampa-ciudad-santa-rosa-capital-provincial`.
- Nombre: Santa Rosa — capital de La Pampa.
- Coordenadas: `[-36.62027777777778, -64.29055555555556]`.
- Fuente institucional y de coordenadas: [Municipalidad de Santa Rosa — Información general](https://www.santarosa.gob.ar/municipio/).
- Fuente de condición de capital: [Municipalidad de Santa Rosa — portal institucional](https://www.santarosa.gob.ar/).
- Publicador: Municipalidad de Santa Rosa.
- Dato demográfico publicado: 116.083 habitantes para Santa Rosa y 133.712 para Gran Santa Rosa, Censo 2022. No se presenta como población 2026.
- Coordenada original: 36°37′13″S 64°17′26″O, publicada en la sección «Coordenadas» de la página municipal.
- Conversión: DMS a grados decimales mediante cálculo aritmético; sin geocodificación, reproyección ni transformación de datum.
- CRS/datum: la Municipalidad no declara CRS, datum, EPSG ni precisión. No se asigna EPSG.
- Calidad: referencia urbana general de la ciudad. No representa el límite del ejido, un polígono administrativo, centroide certificado, parcela ni instalación específica.
- Estado: `operativo` como referencia de ciudad consolidada; no es un estado de servicio o infraestructura.
- Verificación: documental, consultada el 2026-11-27; no presencial.

La coordenada se incorpora como punto de referencia de la ciudad, no como localización de una instalación. La Municipalidad identifica a Santa Rosa como capital provincial y publica población censal y coordenadas. La fuente no informa fecha de actualización de la coordenada.

## Cobertura antes y después

- Catálogo nacional: 119 → 120 nodos.
- La Pampa: 3 → 4 nodos; Ciudad: 0 → 1.
- Región Centro: 16 → 17 nodos; las cuatro jurisdicciones continúan representadas.
- Categoría Ciudad nacional: 7 → 8.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría nueva.
- Jurisdicciones menos representadas: Santiago del Estero y Tucumán, con 2 nodos cada una.
- Próxima región de rotación: Patagonia.

## Archivos modificados

- `data/strategic-nodes.json` — nuevo registro urbano.
- `research/national-map-coverage.json` — conteos recalculados, `catalogCommit`, fecha y rotación Centro → Patagonia.
- `README.md` — total nacional y nota de la nueva referencia.
- `.github/workflows/static.yml` — conteo nacional, matriz, categoría Ciudad, rotación y regresión específica del registro.
- Este archivo de bitácora.

`index.html` no se modifica: su función `loadPoints()` continúa leyendo `./data/strategic-nodes.json`; el filtro `Ciudad` ya existe en la portada y los filtros de provincia/directorio se generan desde el catálogo.

## Validación previa a integración

- Catálogo JSON parseado; 120 registros.
- Unicidad completa por ID, nombre y par de coordenadas: 120/120 sin duplicados.
- Coordenadas dentro del rango geográfico argentino.
- Categoría `Ciudad` y jurisdicción `La Pampa` verificadas en el esquema y la interfaz.
- Coordenadas convertidas desde DMS de la fuente municipal; CRS/datum no declarados y documentados.
- Fuente institucional y fuente de coordenadas HTTPS.
- Matriz recalculada desde el catálogo: 24 jurisdicciones, 9 categorías, 120 nodos; conteos por provincia, región y categoría reconciliados.
- La Pampa: 4 nodos y 1 Ciudad; Centro: 17 nodos; Ciudad nacional: 8.
- Rotación actualizada: Centro → Patagonia.
- Workflow actualizado con aserciones específicas para el nuevo nodo, fuente, coordenadas, calidad, cobertura y commit del catálogo.

## Integración y publicación

- Rama de trabajo: `automation/centro-la-pampa-santa-rosa-1436`.
- Commit del catálogo: `c098a9802a5692723c7c370eb4840f55f5600867`.
- Commit de matriz: `84ca42cb4093dd5289b1b7c23777ee8e95088109`.
- Commit de README: `fd01853cda089152db7d7cc374557e78b9edcce5`.
- Commit de workflow: `4194a91e44ef1f3fb923c2853a4cc1edf1ead2f0`.
- Pull request, merge, GitHub Actions y Pages: pendientes de ejecución.
- `index.html` conserva el blob SHA `69e72891fe28e19580f681b85699da6377912c9c`; no fue modificado y continúa cargando `data/strategic-nodes.json`.

## Brechas no resueltas

- La Pampa mantiene pendientes Puerto, Logística, Industria, Recurso mineral y Estación ferroviaria; Paso fronterizo se considera no aplicable.
- El Parque Industrial General Pico sigue sin incorporarse: la ley confirma su existencia, pero no aporta geometría; la coordenada secundaria disponible no declara CRS/datum ni semántica suficiente.
- Santiago del Estero y Tucumán siguen como las jurisdicciones menos representadas.
- No se obtuvo geometría de la IDE municipal para sustituir la referencia urbana general; no se necesita para el punto de ciudad publicado por la Municipalidad.
- No se realizó verificación presencial ni de servicios en tiempo real.
