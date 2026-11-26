# Mapa Federal — Centro / La Pampa / Aeropuerto General Pico

- Fecha y hora de verificación: 2026-11-26T03:42:52-03:00 (ART).
- Rama: `main`.
- HEAD previo al cambio de datos: `8c0c51e5c00af56712f6bd181ccb8d6656981293`.
- Región trabajada: Centro. Próxima región de la rotación: Patagonia.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporó un punto de referencia para el Aeropuerto de General Pico (SAZG), La Pampa, categoría `Aeropuerto`.

- ID: `la-pampa-aeropuerto-general-pico-sazg`.
- ARP: `[-35.69598333, -63.75832778]`.
- Fuente de coordenadas: ANAC, Suplemento AIP AIRAC A18/2022, AD 2.2; publicado 16/06/2022 y efectivo 14/07/2022. La coordenada publicada es `354145.54S 0634529.98W`.
- CRS/datum: la fila AD 2.2 no explicita datum/CRS. Se realizó solo conversión aritmética DMS a grados decimales, sin reproyección ni transformación de datum. El plano oficial asociado de ANAC identifica coordenadas geográficas WGS84 para umbrales, pero no se usó para sustituir el ARP.
- Fuente institucional complementaria: Argentina.gob.ar identifica el aeropuerto y declara que no opera vuelos comerciales regulares de línea.
- Estado del nodo: `no_verificado`. El AIP de 2022 documenta tránsito IFR/VFR permitido y servicios/horarios de ese período; no se obtuvo confirmación primaria vigente de operación 2026. No se presenta como aeropuerto con vuelos comerciales regulares.

## Fuentes

- ANAC, Suplemento AIP AIRAC A18/2022, General Pico (SAZG), AD 2.2: https://ais.anac.gob.ar/descarga/sup-62aaa363bab62
- ANAC, plano de obstáculos de aeródromo General Pico (SAZG): https://ais.anac.gob.ar/descarga/sup-62aa40590ab98
- Argentina.gob.ar, Cómo llegar a La Pampa, sección Conectividad aérea: https://www.argentina.gob.ar/lapampa/llegar
- ANAC, portal de Publicación de Información Aeronáutica y MADHEL: https://ais.anac.gob.ar/aip

## Cobertura

- Catálogo nacional: 90 → 91 nodos.
- La Pampa: 1 → 2 nodos; ahora registra dos aeropuertos, sin agregar otras categorías.
- Centro: 11 → 12 nodos; las cuatro jurisdicciones de la región permanecen cubiertas.
- Categoría Aeropuerto: 21 → 22 nodos.
- Jurisdicciones cubiertas: 24 de 24.
- La Pampa deja de ser una de las jurisdicciones con un solo nodo; Tucumán queda como la jurisdicción menos cubierta, con un registro.

La portada sigue consumiendo `data/strategic-nodes.json` y conserva el filtro `Aeropuerto`. No se modificó `index.html`.

## Brechas y decisiones de no incorporación

- Parque Industrial General Pico: no agregado. La Ley provincial 530 acredita su creación, pero no aporta geometría. La coordenada encontrada en un directorio secundario no declara CRS/datum ni geometría parcelaria; sigue pendiente una fuente oficial con punto o perímetro atribuible.
- Aeropuerto de General Pico: queda pendiente verificar AIP/MADHEL vigente y NOTAM; la ficha nacional consultada solo confirma que no opera vuelos comerciales regulares.
- No se geocodificó el aeropuerto desde su dirección ni desde la distancia al centro urbano; se utilizó exclusivamente el ARP publicado por ANAC.

## Archivos y commits

- `data/strategic-nodes.json`: nuevo nodo, commit de datos `20ef295d05c969a92c6718302bba56c1eb054095`.
- `research/national-map-coverage.json`: matriz recalculada con 91 nodos, conteos por provincia/categoría, rotación Centro → Patagonia y `catalogCommit` apuntando al commit de datos.
- `research/runs/2026-11-26-centro-la-pampa-general-pico-airport-0342.md`: este registro.

## Validación y publicación

- Validación local previa al commit: JSON parseable; ID nuevo; nombres y coordenadas sin duplicados; categoría, jurisdicción, rangos y URLs HTTPS comprobados.
- GitHub Actions #769, ID 45769956392, commit `20ef295d05c969a92c6718302bba56c1eb054095`: falló en `Validate geographic and editorial JSON` porque la matriz todavía indicaba 90 nodos mientras el catálogo ya tenía 91. Los pasos anteriores pasaron; el job de Pages quedó omitido. La matriz se actualiza en este commit para resolver la discrepancia.
- La validación y el despliegue posteriores a la actualización de la matriz quedan pendientes de la ejecución disparada por este commit; no se declara publicación hasta verificar el job de Pages y la portada pública.

## Próxima prioridad

Región Patagonia. Mantener como brecha pendiente el Parque Industrial General Pico hasta obtener geometría oficial o coordenadas de un punto de instalación publicadas por una fuente atribuible.
