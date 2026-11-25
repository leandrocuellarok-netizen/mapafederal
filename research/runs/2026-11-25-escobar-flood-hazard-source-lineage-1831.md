# Escobar — auditoría de procedencia de cartografía de peligrosidad hídrica

Fecha de revisión: 25/11/2026, 18:31 ART  
Ámbito: Partido de Escobar, Buenos Aires, Argentina  
Dominio: ambiente, uso del suelo y gestión del riesgo hídrico  
Mejora principal: contraste documental entre el dataset municipal de peligrosidad de inundaciones y la cartografía explicativa publicada por la Autoridad del Agua (ADA).

## 1. Inspección previa del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama principal: `main`.
- HEAD inicial observado: `1511415e8bf152c84d1c08ad2d0026ba69ccf730` (25/11/2026 18:09 ART).
- Último cambio específico de movilidad de Escobar: `51e9c6c2a6c998cb8aaae2312907492663ef698b` (25/11/2026 17:37 ART).
- Los commits posteriores `847a2e7e` y `1511415e` corresponden a actualizaciones de Radar IA, Investment Finder y revisión ejecutiva; no modifican el registro ambiental de Escobar.
- Sin pull requests abiertos al momento de la inspección.
- Se identificó la rama separada `automation/escobar-flood-detection-2026-11-25`, HEAD `a549a0ec4582e8fd1443d3660b8a1c55b24fbeec`. Su copia de `data/escobar-territory.json` contiene el mismo registro de detección de anegamientos de 2025 que ya figura en `main`; no se hizo merge, cherry-pick ni modificación de esa rama.
- Se inspeccionaron `data/escobar-territory.json`, `tests/escobar-mobility.test.js`, `assets/foco-escobar.js`, `.github/workflows/static.yml` y el README.
- El conector permite inspeccionar el repositorio remoto, pero no expone un working tree local. No se afirma haber inspeccionado un árbol de trabajo local.

## 2. Dataset municipal de peligrosidad de inundaciones

La ficha del Portal de Datos Abiertos de Escobar identifica el conjunto “Peligrosidad de Inundaciones – Partido de Escobar”.

- Organismo publicador: Estrategia Ambiental y datos — Municipalidad de Escobar.
- Fuente declarada: elaboración propia a partir de cartografía de la Autoridad del Agua (ADA), Provincia de Buenos Aires.
- Descripción: mapa de áreas con distintos niveles de peligrosidad hídrica para planificación territorial y gestión del riesgo.
- Versión: 1.0.
- Periodicidad: anual.
- Creación declarada: 01/10/2025.
- Última actualización declarada: 31/03/2026.
- Licencia: Open Database License (ODbL).
- Recursos: `peligrosidad_inundaciones.geojson` (1.567 KB) y `peligrosidad_inundaciones.shp` (466 KB).
- Fecha de publicación de la ficha: no indicada por la fuente.
- Fecha de verificación: 25/11/2026.

Fuente: https://datos.escobar.gob.ar/dataset/peligrosidad-de-inundaciones-partido-de-escobar

El recurso GeoJSON se abre como `FeatureCollection`, pero la vista web disponible solo expone una porción del documento. La búsqueda del término EPSG en la vista no devolvió coincidencias. No se pudo descargar el archivo completo desde el entorno de trabajo y el visor web rechazó el recurso SHP por su tipo de contenido. Por lo tanto, no se verificaron el CRS, datum, esquema completo de atributos, clases, geometrías ni transformaciones.

## 3. Contraste con la Autoridad del Agua

La página oficial de ADA titulada “Mapa de Pendientes” describe una cartografía elaborada a partir de imágenes satelitales y modelos de elevación, con clasificación de pendientes y niveles de riesgo asociados a permanencia o torrencialidad. La explicación institucional indica que esas clases sirven para una primera priorización y que se requieren estudios a menor escala para crear mapas de inundación y cartas de riesgo hídrico.

Fuente: https://ada.gba.gov.ar/mapa-de-pendientes/

La ficha municipal no identifica el nombre, código, versión, fecha, escala, hoja o servicio geográfico específico de ADA del que deriva el recurso de Escobar. Por ello no es posible concluir que el dataset municipal sea una exportación del “Mapa de Pendientes” ni que utilice exactamente sus cinco categorías. La relación de procedencia queda atribuida a ADA por el Municipio, pero el producto cartográfico de origen permanece sin identificar.

## 4. Distinción respecto del dataset de anegamientos de 2025

El repositorio conserva por separado “Zonas de Anegamiento Detectadas a partir de Tormentas 2025 – Partido de Escobar”. Su ficha municipal describe detección retrospectiva de presencia temporal de agua superficial mediante MNDWI sobre imágenes COPERNICUS/S2_SR_HARMONIZED correspondientes a tormentas de 2025.

Fuente: https://datos.escobar.gob.ar/dataset/zonas-de-anegamiento-detectadas-a-partir-de-tormentas-2025-partido-de-escobar

Este producto no debe confundirse con la cartografía de peligrosidad hídrica atribuida a ADA. La detección de agua superficial en eventos pasados no es un pronóstico, una carta de riesgo predial ni una confirmación de peligrosidad futura. Tampoco valida por sí sola las clases del otro dataset.

## 5. Decisión de datos e interfaz

No se modificó `data/escobar-territory.json` ni `assets/foco-escobar.js`.

Se mantiene para el dataset municipal de peligrosidad:
- `sourceCrs`: no informado / pendiente de inspección técnica.
- `geometryIntegrationStatus`: `pending`.
- Estado de uso cartográfico: no transformar, no dibujar y no superponer hasta verificar la referencia espacial y la procedencia exacta.

No se agregaron puntos, polígonos, límites, coordenadas, clasificación por localidad, análisis predial ni conclusiones sobre seguridad de barrios o inmuebles. Tampoco se cambió el estado de la capa a operativa.

## 6. Evidencia necesaria para una incorporación cartográfica segura

1. Identificación inequívoca del producto o capa de ADA utilizada: nombre oficial, código de capa o servicio, URL y versión.
2. CRS, datum, unidades y método de transformación del archivo publicado.
3. Archivo completo y legible, incluyendo metadatos o archivo de proyección correspondiente al SHP.
4. Diccionario de atributos, leyenda y significado de cada clase de peligrosidad.
5. Fecha de referencia, escala, metodología, resolución y limitaciones de la cartografía de origen.
6. Confirmación del recorte territorial y de la geometría de referencia del Partido de Escobar.
7. Pruebas de validez geométrica y comparación con la fuente oficial antes de habilitar cualquier visualización.

## 7. Validación, commit y publicación

- No se modificaron datos de producción, código ni pruebas; por eso no se ejecutaron pruebas locales del módulo.
- El workflow general observado antes de esta anotación fue #698, sobre HEAD `1511415e8bf152c84d1c08ad2d0026ba69ccf730`, con los jobs `validate` y `deploy` completados con éxito.
- La inspección independiente de la página de GitHub Pages no estuvo disponible desde el entorno web; no se afirma comprobación HTTP ni visual.
- Este archivo registra la limitación y la evidencia necesaria; no representa una aprobación cartográfica ni un cambio en la capa.

## 8. Fuentes y alcance

- Municipalidad de Escobar, Portal de Datos Abiertos, ficha “Peligrosidad de Inundaciones – Partido de Escobar”; fecha de publicación no indicada; creación 01/10/2025; actualización 31/03/2026; consultada 25/11/2026. Alcance: metadatos, descripción, formatos, licencia y atribución de fuente.
- Autoridad del Agua de la Provincia de Buenos Aires, “Mapa de Pendientes”; fecha de publicación no consignada en la página consultada; verificada mediante la descripción institucional disponible el 25/11/2026. Alcance: explicación de la metodología general y de la función preliminar de la clasificación; no confirma que sea la capa específica usada por el Municipio.
- Municipalidad de Escobar, Portal de Datos Abiertos, ficha “Zonas de Anegamiento Detectadas a partir de Tormentas 2025”; fecha de publicación no indicada; creación 01/10/2025; actualización 31/03/2026; consultada 25/11/2026. Alcance: distinguir el producto histórico de detección MNDWI del dataset de peligrosidad atribuido a ADA.

Principio aplicado: conservar la información municipal como referencia documental pendiente, sin convertir una atribución general a ADA en una procedencia cartográfica completamente verificada.
