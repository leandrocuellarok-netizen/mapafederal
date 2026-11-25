# Escobar — integridad de recursos de recolección diferenciada de residuos

Fecha de revisión: 25/11/2026, 19:31 ART  
Ámbito: Partido de Escobar, Buenos Aires, Argentina  
Dominio: servicios públicos, residuos y calidad de datos geoespaciales  
Mejora principal: detección y documentación de enlaces de descarga GeoJSON que devuelven 404 en el dataset municipal de recolección diferenciada.

## 1. Inspección previa del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama principal: `main`.
- HEAD observado al inicio: `969b147acb12675f5ffcf808776fe00f552b392c`.
- Último cambio específico de Escobar observado: `808a81973f9c930125df1ba56b57769ece6c926b` (documentación de procedencia cartográfica hídrica, 18:33 ART).
- HEAD recibió después commits de otros procesos, incluidos ciclos GBIE y una revisión ejecutiva. Se inspeccionaron los mensajes y se preservaron esos cambios; no se modificaron datasets nacionales, Radar IA, Investment Finder ni archivos de otros territorios.
- Rama `main` confirmada; no se encontraron PR abiertos.
- El conector permite inspección remota de GitHub, pero no expone un working tree local. No se afirma haber inspeccionado un árbol de trabajo local.
- Workflow más reciente antes de este registro: #706, sobre `969b147acb12675f5ffcf808776fe00f552b392c`. Los jobs `validate` y `deploy` finalizaron con `success`.

## 2. Dataset municipal

La ficha oficial “Recolección Diferenciada de Residuos del Partido de Escobar” describe rutas de recolección diferenciada de residuos sólidos urbanos organizadas por sector territorial: “El Cazador”, “Las Glorias” y “Loma Verde”.

Metadatos visibles en la ficha:
- Organismo: Municipalidad de Escobar.
- Área/categoría: Infraestructura y Servicios Públicos.
- Fuente declarada: relevamiento propio del Municipio.
- Versión: 1.0.
- Periodicidad: anual.
- Creación declarada: 01/10/2025.
- Última actualización declarada: 31/03/2026.
- Licencia: Open Database License (ODbL).
- Recursos anunciados: tres GeoJSON y tres Shapefile.
- Fecha de publicación de la ficha: no indicada por la fuente.
- Fecha de verificación: 25/11/2026.

Fuente canónica: https://datos.escobar.gob.ar/dataset/recoleccion-diferenciada-de-residuos-del-partido-de-escobar

## 3. Comprobación de recursos GeoJSON

Los tres enlaces de descarga publicados en la ficha devolvieron `404 Not Found` al intentar abrirlos el 25/11/2026:

1. El Cazador: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/recoleccion-diferenciada-de-residuos-del-partido-de-escobar/recoleccion_diferenciada_el_cazador.geojson
2. Las Glorias: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/recoleccion-diferenciada-de-residuos-del-partido-de-escobar/recoleccion_diferenciada_las_glorias.geojson
3. Loma Verde: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/recoleccion-diferenciada-de-residuos-del-partido-de-escobar/recoleccion_diferenciada_loma_verde.geojson

La respuesta de error se obtuvo al seguir los enlaces de descarga de la propia ficha. Se registra como fallo de recurso en la URL publicada al momento de la comprobación; no se infiere que el Municipio haya eliminado los datos de origen ni que el servicio de recolección haya cesado.

## 4. Recursos Shapefile y límites de verificación

La ficha también publica:
- `recoleccion_diferenciada_el_cazador.shp`
- `recoleccion_diferenciada_las_glorias.shp`
- `recoleccion_diferenciada_loma_verde.shp`

El visor de consulta rechazó el tipo de contenido `application/vnd.shp` con un error 400 de tipo no soportado. Esto es una limitación del mecanismo de consulta utilizado y **no** demuestra que los archivos Shapefile estén rotos o ausentes. No se obtuvo el conjunto completo de archivos auxiliares ni se verificaron CRS, datum, campos, geometrías o topología.

## 5. Decisión de datos e interfaz

No se incorporaron rutas, polígonos, puntos ni horarios al módulo de Escobar.

Razones:
- Los tres recursos GeoJSON publicados devolvieron 404.
- Los Shapefile no pudieron inspeccionarse con el mecanismo disponible.
- La ficha tiene última actualización declarada 31/03/2026 y periodicidad anual; no acredita por sí sola la operación actual en noviembre de 2026.
- La descripción no publica días, frecuencias, horarios, calendario ni condiciones actuales del servicio.

No se clasifica el servicio como `operational` a partir de esta ficha. La existencia de un dataset y su descripción se consideran hechos documentados; la operación actual y la geometría quedan desconocidas o pendientes de evidencia.

La mención “Loma Verde” se conserva exactamente como sector territorial indicado por la fuente. “El Cazador” y “Las Glorias” no se reasignan a una localidad ni a un barrio del catálogo oficial sin una fuente administrativa que establezca esa relación.

## 6. Evidencia necesaria para una incorporación segura

1. Restauración de los tres GeoJSON o publicación de URL canónicas vigentes.
2. Acceso a los Shapefile completos, incluyendo archivos auxiliares necesarios.
3. Metadatos de CRS, datum, unidades y transformación, si la hubiera.
4. Diccionario de atributos y explicación de los trazados.
5. Confirmación de vigencia y calendario del servicio por sector.
6. Aclaración de si los nombres de sector corresponden a polígonos oficiales, áreas operativas o simples rótulos de circuito.

## 7. Archivos, pruebas y publicación

- Único archivo agregado: este registro de investigación.
- No se modificaron datos de producción, interfaz, pruebas ni workflows.
- No se ejecutaron pruebas funcionales porque no hubo cambios de código o datos.
- El workflow #706, previo a este registro, tuvo los jobs `validate` y `deploy` completados con éxito sobre el HEAD anterior.
- La inspección independiente de GitHub Pages no estuvo disponible: la herramienta web no pudo abrir la portada ni Foco Escobar. Esto no demuestra que el sitio esté caído.
- El nuevo archivo documental dispara el workflow habitual de `main`; su resultado se comprobará después del commit.

## 8. Fuentes y alcance

- Municipalidad de Escobar, Portal de Datos Abiertos, “Recolección Diferenciada de Residuos del Partido de Escobar”. Fecha de publicación no indicada; creación 01/10/2025; última actualización declarada 31/03/2026; consultada 25/11/2026. Alcance: descripción del conjunto, sectores territoriales, recursos publicados, organización, periodicidad y licencia.
- Recursos GeoJSON del mismo portal, alojados en Cloudflare R2. Consultados mediante los enlaces de la ficha el 25/11/2026. Alcance: respuesta 404 de las tres URL de descarga; no se obtuvo el contenido de los archivos.
- Recursos Shapefile del mismo portal. La herramienta de consulta rechazó el tipo MIME `application/vnd.shp`; no se considera un 404 ni una prueba de indisponibilidad del archivo.

Principio aplicado: documentar un defecto verificable de publicación de datos sin convertirlo en una afirmación sobre la prestación efectiva del servicio ni fabricar geometrías para el mapa.
