# Escobar — contraste de economía circular y auditoría ampliada de recursos abiertos

Fecha de revisión: 25/11/2026, 20:26 ART  
Ámbito: Partido de Escobar, Buenos Aires, Argentina  
Dominios: servicios públicos, residuos, economía circular y calidad de datos abiertos  
Mejora principal: ampliar la comprobación de integridad de recursos geoespaciales y documentar una discrepancia entre la ficha de recolección diferenciada y una publicación municipal sobre el programa piloto.

## 1. Inspección previa del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama principal: `main`.
- HEAD observado al inicio: `db4aac5d89a6f0d925ce12ddd0525f21be613543` (25/11/2026 20:05 ART).
- Último commit específico de Escobar: `dc6e80453cc6dee42927f94afaeb7e9a8027a874`, que documentó tres descargas GeoJSON 404 del dataset de recolección diferenciada.
- Los commits posteriores corresponden a ciclos de revisión ejecutiva, Event Intelligence y cambios de otros módulos. No se modificaron ni revirtieron.
- Rama `main` confirmada; no se encontraron pull requests abiertos.
- El conector permite inspección remota de GitHub, pero no expone un working tree local. No se afirma haber inspeccionado un árbol de trabajo local.
- Workflow más reciente observado antes de este registro: #718, run ID `45718554516`, sobre HEAD `db4aac5d89a6f0d925ce12ddd0525f21be613543`; los jobs `validate` y `deploy` finalizaron con `success`.

## 2. Revalidación del dataset de recolección diferenciada

La ficha municipal «Recolección Diferenciada de Residuos del Partido de Escobar» continúa publicada y declara:

- Organismo: Municipalidad de Escobar — Infraestructura y Servicios Públicos.
- Fuente: relevamiento propio del Municipio.
- Descripción: rutas de recolección diferenciada organizadas por sector territorial: «El Cazador», «Las Glorias» y «Loma Verde».
- Creación: 01/10/2025.
- Última actualización declarada: 31/03/2026.
- Versión: 1.0.
- Periodicidad: anual.
- Licencia: Open Database License (ODbL).
- Recursos anunciados: tres GeoJSON y tres Shapefile.
- Fecha editorial de publicación: no indicada por la ficha.

Fuente canónica: https://datos.escobar.gob.ar/dataset/recoleccion-diferenciada-de-residuos-del-partido-de-escobar

El 25/11/2026 se volvieron a seguir los tres enlaces GeoJSON publicados en la ficha. Los tres respondieron `404 Not Found`:

1. El Cazador: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/recoleccion-diferenciada-de-residuos-del-partido-de-escobar/recoleccion_diferenciada_el_cazador.geojson
2. Las Glorias: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/recoleccion-diferenciada-de-residuos-del-partido-de-escobar/recoleccion_diferenciada_las_glorias.geojson
3. Loma Verde: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/recoleccion-diferenciada-de-residuos-del-partido-de-escobar/recoleccion_diferenciada_loma_verde.geojson

La ficha sigue enumerando los seis recursos. La persistencia del error acredita una falla de acceso en las URL publicadas al momento de la consulta; no acredita eliminación del dato fuente, cese del servicio ni inexistencia de circuitos.

## 3. Auditoría ampliada de recursos del mismo portal

Se comprobaron otros dos GeoJSON municipales alojados bajo el mismo dominio público de Cloudflare R2:

### Puntos Verdes del Partido de Escobar

- Ficha: https://datos.escobar.gob.ar/dataset/puntos-verdes-del-partido-de-escobar
- Recurso anunciado: `puntos_verdes_escobar.geojson`, tamaño publicado 1 KB.
- URL de descarga: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/puntos-verdes-del-partido-de-escobar/puntos_verdes_escobar.geojson
- Resultado al 25/11/2026: `404 Not Found`.
- Metadatos visibles: fuente de relevamiento propio municipal; versión 1.0; creación 01/10/2025; actualización 31/03/2026; licencia ODbL.

### Planta de Gestión Integral de Residuos Sólidos Urbanos (GIRSU)

- Ficha: https://datos.escobar.gob.ar/dataset/planta-de-gestion-integral-de-residuos-solidos-urbanos-del-partido-de-escobar
- Recurso anunciado: `planta_girsu_escobar.geojson`, tamaño publicado 1 KB.
- URL de descarga: https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/planta-de-gestion-integral-de-residuos-solidos-urbanos-del-partido-de-escobar/planta_girsu_escobar.geojson
- Resultado al 25/11/2026: `404 Not Found`.
- Metadatos visibles: fuente de relevamiento propio municipal; versión 1.0; creación 01/10/2025; actualización 31/03/2026; licencia ODbL.

### Alcance de la conclusión

Cinco recursos GeoJSON de tres fichas municipales distintas devolvieron 404 en esta revisión: tres de recolección diferenciada, uno de Puntos Verdes y uno de la planta GIRSU. Esto constituye una señal de integridad de publicación que afecta una muestra de datasets del portal; no demuestra que todos los recursos del portal estén rotos.

Los Shapefile no se volvieron a descargar en este ciclo. El rechazo anterior del visor por tipo MIME no se interpreta como un 404 ni como prueba de corrupción. Tampoco se inspeccionó el contenido de la API: la página de documentación enlazada desde el portal no expuso contenido legible en esta consulta.

## 4. Contraste con la publicación municipal sobre economía circular

La Municipalidad mantiene publicada la nota «Escobar procesa 800 toneladas anuales de materiales reciclables: cómo funciona su modelo de economía circular»:

https://www.escobar.gob.ar/escobar-procesa-800-toneladas-anuales-de-materiales-reciclables-como-funciona-su-modelo-de-economia-circular/

El contenido consultado atribuye al Municipio los siguientes datos y descripciones:

- La Planta de Reciclaje Municipal (GIRSU) se ubica en Ruta 25 y Güiraldes, Belén de Escobar.
- La planta es administrada por la Cooperativa de Recuperadores Urbanos 18 de Abril.
- La publicación informa una dotación de 25 personas y un procesamiento anual de 800 toneladas de materiales.
- Describe el ingreso de materiales desde Puntos Verdes y establecimientos educativos.
- Menciona un punto fijo de recepción de residuos de aparatos eléctricos y electrónicos (RAEE) en la planta.
- Informa una red de 23 Unidades de Gestión Comunitaria (UGC), con días y horarios específicos.
- Describe un programa piloto de recolección diferenciada puerta a puerta en tres barrios: El Cazador (Belén de Escobar), Santa Rita (Loma Verde) y Las Glorias (Ingeniero Maschwitz). La publicación lo caracteriza mediante un «día verde» específico para separar reciclables.

La página consultada no muestra una fecha editorial inequívoca en el contenido recuperado. Por eso la fecha de publicación se registra como «no indicada por la fuente» y las cifras de 25 personas y 800 toneladas anuales se mantienen como declaraciones atribuidas al Municipio, no como auditoría independiente, medición propia ni dato de corte confirmado al 25/11/2026.

## 5. Discrepancia territorial que debe conservarse

La ficha del dataset agrupa sus recursos bajo los sectores «El Cazador», «Las Glorias» y «Loma Verde». La nota municipal sobre el programa piloto nombra «El Cazador (Belén de Escobar)», «Santa Rita (Loma Verde)» y «Las Glorias (Ingeniero Maschwitz)».

Las dos publicaciones no usan exactamente el mismo nivel de clasificación: la ficha de datos abiertos presenta rótulos de sector; la noticia identifica barrios y agrega localidades entre paréntesis. La coincidencia temática no permite afirmar, sin metadatos de cada geometría, que el recurso llamado «Loma Verde» corresponda exactamente al barrio Santa Rita. Se preservan ambas denominaciones y la relación queda pendiente de confirmación documental.

La noticia constituye una declaración municipal sobre el programa piloto, pero no proporciona un calendario actual por domicilio, frecuencia vigente, geometrías de cobertura ni prueba de que el circuito continúe sin cambios en noviembre de 2026.

## 6. Decisión de datos e interfaz

No se modificaron los datasets productivos ni la interfaz.

No se agregaron puntos, polígonos, recorridos, horarios, ubicaciones de Puntos Verdes ni cobertura por barrio. No se cambió el estado de los servicios a `operational` basándose únicamente en la nota sin fecha editorial visible.

La información de 800 toneladas y 25 personas se conserva como declaración atribuida a la publicación municipal, no como estadística independiente. La posible cadena de valor vinculada con clasificación, logística inversa, RAEE, aceite usado, neumáticos y educación ambiental es una hipótesis analítica; no se identificó en esta revisión una convocatoria o contratación abierta para proveedores.

## 7. Archivos, pruebas y publicación

- Único archivo agregado: este registro de investigación.
- No se modificaron datos de producción, interfaz, pruebas ni workflows.
- No se requirieron pruebas funcionales específicas por tratarse de documentación sin cambios de código o datos.
- HEAD previo a este registro: `db4aac5d89a6f0d925ce12ddd0525f21be613543`.
- Workflow previo #718: `validate=success`, `deploy=success`.
- La comprobación independiente de GitHub Pages no estuvo disponible: la herramienta de navegación no pudo abrir la portada ni Foco Escobar. Esto no demuestra que el sitio esté caído.
- El nuevo archivo documental dispara el workflow habitual de `main`; el resultado de esta incorporación se comprobará después del commit.

## 8. Fuentes y alcance

1. Municipalidad de Escobar, Portal de Datos Abiertos, «Recolección Diferenciada de Residuos del Partido de Escobar». Ficha consultada 25/11/2026; creación 01/10/2025; actualización declarada 31/03/2026. Alcance: metadatos, sectores declarados, recursos y licencia.
2. Municipalidad de Escobar, Portal de Datos Abiertos, «Puntos Verdes del Partido de Escobar». Ficha consultada 25/11/2026; creación 01/10/2025; actualización declarada 31/03/2026. Alcance: metadatos y comprobación de descarga GeoJSON.
3. Municipalidad de Escobar, Portal de Datos Abiertos, «Planta de Gestión Integral de Residuos Sólidos Urbanos del Partido de Escobar». Ficha consultada 25/11/2026; creación 01/10/2025; actualización declarada 31/03/2026. Alcance: metadatos y comprobación de descarga GeoJSON.
4. Municipalidad de Escobar, «Escobar procesa 800 toneladas anuales de materiales reciclables: cómo funciona su modelo de economía circular». Fecha de publicación no indicada en el contenido consultado; verificada 25/11/2026. Alcance: descripción institucional del GIRSU, cooperativa, cifra atribuida de empleo y procesamiento, red de UGC y barrios nombrados para el programa piloto. No se verificó presencialmente la operación ni se obtuvo una medición independiente.
5. GitHub Actions, workflow #718, run ID `45718554516`, commit `db4aac5d89a6f0d925ce12ddd0525f21be613543`. Alcance: resultados de los jobs de validación y despliegue previos a este registro.

Principio aplicado: ampliar la auditoría de integridad del portal y conservar la diferencia entre rótulos de datasets y clasificaciones de una publicación institucional, sin inferir equivalencias geográficas ni operación actual.
