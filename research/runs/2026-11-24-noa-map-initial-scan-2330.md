# MAPA FEDERAL — NOA | Exploración cartográfica inicial

- Corte: 2026-11-24 23:30 (America/Argentina/Buenos_Aires)
- Alcance inicial: Jujuy, Salta, Tucumán, Catamarca, Santiago del Estero y La Rioja.
- Objetivo: ampliar la cobertura territorial de todas las categorías del mapa con datos verificables y geometrías WGS84.
- Estado: exploración de fuentes; no se incorporaron puntos nuevos sin verificación de coordenadas.

## 1. Diagnóstico del catálogo vigente

Fuente interna: `data/strategic-nodes.json`, inspeccionada el 2026-11-24.

- Catálogo total: 86 nodos, distribuidos en las 23 provincias y CABA.
- Cobertura NOA: 11 nodos.
- Distribución NOA: Jujuy 2; Salta 3; Tucumán 1; Catamarca 2; Santiago del Estero 1; La Rioja 2.
- Tipos presentes en NOA: pasos fronterizos (3), industria (3) y aeropuertos (5).
- No hay todavía nodos NOA de turismo, puertos, logística, ciudades, estaciones ferroviarias, recursos minerales, salud, educación, energía, agua/saneamiento, ambiente o equipamiento institucional.
- La taxonomía actual del catálogo incluye Ciudad, Puerto, Aeropuerto, Industria, Paso fronterizo, Logística, Turismo, Recurso mineral y Estación ferroviaria. La interfaz principal no ofrecía un botón para «Recurso mineral» ni un color propio.

## 2. Mejora de interfaz aplicada

Se incorporó el filtro visible «Recursos minerales», un color violeta propio (#8B5CF6) y su entrada en la leyenda. La modificación permite acceder desde los filtros principales a los registros de esa categoría que ya existan en el catálogo; no agrega ni presupone nuevos yacimientos.

Archivo: `index.html`.
Commit: `e45880ea9cd5222d535bbc5cf5d94560bb9e2d3e`.
Pendiente: validar el workflow y confirmar publicación en GitHub Pages.

## 3. Fuentes oficiales y geoespaciales identificadas

### Marco regional
- Cancillería define el NOA con seis provincias: Jujuy, Salta, Tucumán, Catamarca, La Rioja y Santiago del Estero.
  https://www.cancilleria.gob.ar/es/consejo-federal-de-relaciones-exteriores-y-comercio-internacional/noa

### Cartografía e IDE provinciales
- Jujuy — DiPEC: mapas físicos, topográficos, de ecorregiones, municipios e infraestructura censal, disponibles en PDF. Son fuentes de contexto; no deben convertirse en puntos sin extracción y georreferenciación verificable.
  https://dipec.jujuy.gob.ar/cartografia-y-sig/cartografia-provincial/
- Salta — Portal de Datos Inteligente: 107 datasets públicos, con organismos de economía, educación, producción y minería, salud, seguridad y turismo.
  https://datospublicos.salta.gob.ar/dataset
- Salta — Padrón Georreferenciado de Obras Públicas 2020–2026: dataset oficial de 2.947 obras, 18 columnas, con coordenadas, municipio, departamento, tipología, etapa, avance, contrato y financiamiento. Publicado y actualizado el 17/11/2026; licencia CC BY 4.0; actualización anual. El recurso CSV fue localizado, pero no se pudo descargar en esta sesión para inspeccionar y validar sus filas.
  https://datospublicos.salta.gob.ar/dataset/padron-georreferenciado-obras-publicas-salta
- Tucumán — RIDES publica servicios WFS vectoriales para actividades agropecuarias; actividades industriales, fábricas, parques y minería; infraestructura y redes de transporte; medio ambiente; turismo; y recursos hídricos. Es la fuente prioritaria para construir capas temáticas con geometría nativa.
  https://rides.producciontucuman.gob.ar/servicios-wfs/
- Tucumán — Portal de datos abiertos informa 518 recursos georreferenciados.
  https://datos.tucuman.gov.ar/
- La Rioja — IDERioja ofrece descargas cartográficas, geovisores, servicios OGC y GNSS. Actualización de direcciones OGC publicada el 22/10/2026. Servicios identificados: base topográfica, ortofotos, LiDAR, toponimia, callejero, cartografía temática, biodiversidad, equipamientos locales y tomas de agua.
  https://iderioja.larioja.org/
- Catamarca — servicio WMS de IDE Catamarca identificado en el monitor de geoservicios IDERA-CONICET como activo; última comprobación indicada por ese monitor: 24/11/2026 01:43:54 UTC. El servicio requiere consultar capacidades y capas antes de utilizarlo.
  http://nodoide.catamarca.gob.ar/geoserver/idecat/ows
- Santiago del Estero — IDESantiago dispone de catálogo de capas SIG y visor cartográfico; la portada respondió por búsqueda, pero el acceso directo tuvo timeout en esta sesión.
  https://www.idesantiago.gob.ar/
- Directorio de geoportales IDERA para descubrir las IDE provinciales y servicios asociados:
  https://www.idera.gob.ar/index.php?Itemid=132&id=17&option=com_content&view=article

### Fuentes nacionales transversales
- APN — listado oficial de áreas protegidas de la región Noroeste: Baritú, El Nogalar de Los Toldos, El Rey, Los Cardones, Pizarro, Aconquija, Calilegua, Laguna de los Pozuelos y Copo. La fuente lista además Formosa en el conjunto regional ampliado; no se debe incluir Formosa en el alcance NOA acordado para esta etapa.
  https://www.argentina.gob.ar/parquesnacionales/region-noroeste
- Seguridad — mapa oficial de pasos internacionales, con búsqueda por nombre, provincia y país limítrofe; debe consultarse para actualizar el estado de Jama, Sico, San Francisco y Pircas Negras. El estado operativo es variable y no debe inferirse del nombre o de una ficha estática.
  https://www.argentina.gob.ar/seguridad/pasosinternacionales
- Trenes Argentinos Cargas — mapas de red Belgrano, San Martín y Urquiza; fuente para inventariar corredores y distinguir infraestructura de operación efectiva.
  https://www.argentina.gob.ar/transporte/trenes-argentinos-cargas/mapas
- GEOMOP / MapaInversiones — obras y proyectos públicos geolocalizados; permite filtrar por provincia y sector. Se debe conservar el estado de obra y la fecha de corte.
  https://geoportal.obraspublicas.gob.ar/
  https://mapainversiones.obraspublicas.gob.ar/
- ONDaT — inventarios de infraestructura vial, TMDA, infraestructura aeroportuaria y datos ferroviarios; revisar fecha y cobertura antes de reutilizar.
  https://ondat.c3t-utn.ar/

## 4. Prioridad de trabajo por categoría

1. Obras públicas y equipamiento: explotar primero el padrón de Salta y GEOMOP, separando terminadas, en ejecución, a iniciar y rescindidas.
2. Transporte: rutas nacionales/provinciales, pasos fronterizos, aeropuertos, red Belgrano Cargas, estaciones y nodos logísticos. Distinguir infraestructura de servicio operativo.
3. Actividad económica: parques industriales, ingenios, agroindustria, minería, litio, cobre y centros productivos. Requiere fuentes provinciales y nacionales, permisos y estado del proyecto.
4. Energía: generación, transmisión, gasoductos, subestaciones y renovables; usar Secretaría de Energía, CAMMESA y organismos provinciales.
5. Ambiente y agua: áreas protegidas, humedales, cuencas, diques, embalses, tomas de agua y restricciones de uso del suelo.
6. Salud y educación: establecimientos con ubicación institucional verificable, distinguiendo inventario, prestación y operación.
7. Turismo y patrimonio: parques, reservas, sitios patrimoniales, atractivos y servicios turísticos.
8. Conectividad digital, seguridad y administración: antenas/redes cuando haya datos públicos, establecimientos, organismos y equipamiento público.

## 5. Reglas de incorporación

- Geometrías en WGS84 (EPSG:4326), con procedencia explícita.
- No usar centroide provincial, localidad aproximada o resultado de geocodificación automática como ubicación exacta de una instalación.
- No crear marcadores para polígonos, rutas o redes si el modelo de punto no los representa adecuadamente; proponer capas GeoJSON separadas cuando corresponda.
- Estados controlados: operational, announced, historical, pending, unverified.
- Registrar URL canónica, emisor, fecha de publicación o «not stated», período/fecha del hecho, chequeo, vigencia, licencia, método de georreferencia y limitaciones.
- Deduplicar instalaciones y distinguir sedes, complejos, yacimientos, obras y proyectos.
- No presentar anuncios, licitaciones o contratos como infraestructura operativa.

## 6. Bloqueos y próximos pasos

- Se intentó programar una tarea horaria de 24 horas (23:30 del 24/11 al 23:30 del 25/11, hora Argentina), pero la cuenta alcanzó el límite de tres automatizaciones activas. No se modificó ni pausó ninguna tarea existente sin autorización.
- Próximo ciclo: descargar e inspeccionar el CSV de 2.947 obras de Salta; obtener GetCapabilities/DescribeFeatureType de WFS RIDES Tucumán, IDERioja y WMS/WFS de Catamarca; extraer capas de IDESantiago y localizar catálogo de IDE Jujuy; construir matriz de cobertura provincia × categoría.
- No se agregaron registros territoriales nuevos en este corte porque no se logró verificar aún geometría individual y metadatos de publicación de las capas descubiertas.
