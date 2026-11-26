# Mapa Federal — Cuyo / San Luis / Aeropuertos

- Fecha y hora de verificación: 26/11/2026, 02:35 ART.
- Rama de trabajo: `ops/cuyo-san-luis-airports-20261126-0235`; promoción a `main` condicionada a que el HEAD no cambie.
- HEAD previo de `main`: `ac4189a9484391fcb01cd1f39ea6b9ebe305e6de`.
- Región trabajada: Cuyo. Próxima región de la rotación: Centro.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporaron dos puntos de referencia aeroportuarios en San Luis, categoría `Aeropuerto`:

1. Aeropuerto Brigadier Mayor César Raúl Ojeda (SAOU)
   - ID: `san-luis-aeropuerto-brigadier-mayor-cesar-raul-ojeda`
   - ARP: `[-33.2733333, -66.3563889]`
   - Fuente de coordenadas: ANAC, Suplemento A 04/2022, AD 2.2.
   - Estado: `operativo`, conforme a la transcripción secundaria del AIP AIRAC 01/26 que lo identifica como controlado IFR/VFR y publica horario ATS. No implica vuelos comerciales ni estado NOTAM en tiempo real.

2. Aeropuerto Internacional Valle del Conlara (SAOS)
   - ID: `san-luis-aeropuerto-internacional-valle-del-conlara`
   - ARP: `[-32.3844694, -65.1857722]`
   - Fuente de coordenadas: ANAC, Suplemento A 40/2022, AD 2.2.
   - Estado: `operativo`. Argentina.gob.ar documenta su incorporación al SNA y el inicio de vuelos regulares en diciembre de 2022; la transcripción secundaria del AIP AIRAC 01/26 lo identifica como controlado IFR/VFR. No se infiere frecuencia comercial vigente.

En ambos casos el marcador representa el ARP publicado por ANAC, definido como centro geométrico de pista. Los dos suplementos marcan esa coordenada con asterisco y aclaran «calculado en gabinete»; no se presenta como levantamiento geodésico independiente. No representa acceso, centroide del predio ni perímetro. Las tablas de los suplementos no explicitan datum/CRS; se realizó únicamente conversión aritmética de DMS a grados decimales, sin transformación de datum ni reproyección.

## Fuentes

- ANAC, Suplemento A 04/2022 para SAOU, efectivo 22/02/2022: https://ais.anac.gob.ar/descarga/sup-6214e8cc1dd30
- ANAC, Suplemento A 40/2022 para SAOS, publicado 04/10/2022: https://ais.anac.gob.ar/descarga/sup-633c866e96869
- Argentina.gob.ar, incorporación de Valle del Conlara al Sistema Nacional de Aeropuertos y primer vuelo regular, 05/12/2022: https://www.argentina.gob.ar/noticias/nueva-incorporacion-al-sistema-nacional-de-aeropuertos
- ANAC, portal oficial de Publicación de Información Aeronáutica y enmiendas: https://ais.anac.gob.ar/aip
- Fuente secundaria identificada: Aerocartas, transcripción de AIP AIRAC 01/26 para SAOU (https://aerocartas.com/argentina/aeropuertos/saou/aip/) y SAOS (https://aerocartas.com/argentina/aeropuertos/saos/aip/), efectiva desde 11/06/2026. Se utilizó solo para contrastar la ficha operativa más reciente disponible en esta revisión; no reemplaza AIP/NOTAM oficial.

## Brechas y decisiones de no incorporación

- Aeropuerto Nacional Villa Reynolds (SAOR): no agregado. El AIP oficial 1/2022 aporta coordenadas, pero no se obtuvo confirmación primaria vigente del estado operativo 2026. La edición de 2022 registra la pista 10/28 clausurada y una ficha secundaria reciente presenta configuración distinta. Se requiere reconciliación con la AIP oficial vigente: https://ais.anac.gob.ar/descarga/aip-631a9053a1625
- Parque Industrial San Luis: el registro preexistente conserva coordenadas redondeadas `[-33.3, -66.34]` y una URL provincial genérica; no se identificó una geometría oficial o fuente atribuible para el punto exacto. Se marcó para revisión en la matriz, sin moverlo ni eliminarlo.
- Se mantienen los pendientes previos de Parque Industrial General Pico, Parque Industrial La Isla y Nexo Capital.

## Cobertura

- Catálogo nacional: 88 → 90 nodos.
- San Luis: 1 → 3 nodos; ahora cuenta con 2 aeropuertos y 1 registro de industria.
- Cuyo: 9 → 11 nodos; las cuatro jurisdicciones siguen cubiertas.
- Categoría Aeropuerto: 19 → 21 nodos.
- Las jurisdicciones menos cubiertas pasan a ser La Pampa y Tucumán, con un nodo cada una.
- La portada sigue consumiendo `data/strategic-nodes.json` y conserva el filtro `Aeropuerto`; no se modificó `index.html`.

## Archivos y commits

- `data/strategic-nodes.json`: dos nuevos registros y precisión metodológica del ARP documentada. Commit de catálogo: `909b58a09da6419796b745b35da6727adebd9521`.
- `research/national-map-coverage.json`: matriz recalculada, rotación Cuyo → Centro y pendientes ampliados. Commit de matriz: `e6da0067ebba0d437c77a93de7a7c24d56b388da`.
- `research/runs/2026-11-26-cuyo-san-luis-airports-0235.md`: este registro de investigación.

## Validación y publicación

- Validación del primer commit: JSON, matriz y JavaScript aprobados en GitHub Actions #765 (ID 45762849612); jobs `validate` y `deploy` completados con éxito. El despliegue de Pages fue aceptado por el job, pero la portada pública y el JSON no pudieron comprobarse independientemente: el acceso web falló y el entorno de red no resolvió el dominio.
- Este seguimiento añade la advertencia metodológica «calculado en gabinete» a los dos ARP; el workflow posterior a este commit debe volver a validar el catálogo y el despliegue.
- No se declara confirmación visual de la publicación mientras la URL pública no pueda verificarse.

## Próxima prioridad

Región Centro, con prioridad de cobertura para La Pampa y Santa Fe/Córdoba según los vacíos reales de la matriz. No agregar marcadores sin coordenadas y estado respaldados.
