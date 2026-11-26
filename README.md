# Mapa Federal

**Inteligencia territorial para empresarios y ejecutivos.**

Plataforma web estática en evolución para explorar infraestructura, nodos territoriales argentinos y actualidad empresarial con trazabilidad de fuentes.

## Funcionalidades disponibles

- Mapa interactivo con Leaflet y cartografía de OpenStreetMap.
- Catálogo externo de 100 nodos estratégicos en `data/strategic-nodes.json`, todos con ID estable único, presencia en las 23 provincias y la Ciudad Autónoma de Buenos Aires, referencias de fuente y advertencias sobre coordenadas aproximadas.
- Perfil local del Partido de Escobar en `data/escobar-territory.json` y `data/escobar-economic-profile.json`: siete localidades, 246 barrios reconocidos, indicadores municipales 2026, parques industriales, proyecto portuario anunciado y directorios municipales con fecha y alcance de verificación. El observatorio se publica de forma independiente en `foco-escobar/` (`/mapafederal/foco-escobar/`), con navegación y contenidos propios; la portada general conserva únicamente una tarjeta de acceso. Foco Escobar distingue los datos publicados de los estados pendientes y enlaza cada referencia con su fuente. El mapa incorpora catorce referencias en seis localidades: centros urbanos de Belén de Escobar, Garín, Ingeniero Maschwitz, Loma Verde y Matheu, un punto del sector este de Maquinista Savio, tres nodos de turismo/industria en Belén y Garín y cinco ubicaciones de estaciones ferroviarias tomadas del GeoJSON municipal. Estas cinco estaciones son puntos de infraestructura georreferenciada, no una confirmación de servicios de pasajeros vigentes. 24 de Febrero permanece sin punto propio hasta resolver una georreferencia inequívoca. El perfil económico incorpora el Mercado Popular de Escobar con sus 15 puntos/recorridos publicados para las siete localidades; la página municipal no informa fecha de actualización y la operación presencial no se da por confirmada. Fuente: [Mercado Popular de Escobar](https://www.escobar.gob.ar/municipio/mercado-popular/). La sección de servicios conserva catorce fichas nominales de establecimientos de salud en seis localidades; no es un inventario exhaustivo frente a los 8 hospitales, 4 UDP y 18 CAPS que informa el Municipio. Se incorporaron el Hospital de Salud Mental y Adicciones Papa Francisco (Pellegrini y Dr. Travi, con evaluaciones neurocognitivas publicadas) y la UDP Dr. Carlos Guevara (Cervantes 635), cuya existencia figura en Centros de salud pero cuya guardia actual permanece pendiente. El directorio también incluye el Hospital Provincial Bicentenario en Garín (Libertad 1100), con horarios diferenciados por cobertura PAMI/IOMA. No se agregan marcadores sin georreferencia exacta. Se mantienen explícitas las discrepancias sobre el CAPS Juan Carlos Selles: la Cartilla de salud indica Pablo Marín 24 y distingue guardia general 24 h, atención CAPS de lunes a viernes de 7 a 14 y vacunatorio de 8 a 13; su sección de Guardias y la página Guardias y emergencias indican B° 24 de Febrero, mientras Teléfonos útiles conserva Fonavi y Centros de salud solo consigna las calles. No se consolida un barrio ni teléfono único. También se documenta la discrepancia sobre la dirección del Hospital Horacio López (Bv. Presidente Perón 156 vs. 240). Fuentes: [Guardias y emergencias](https://www.escobar.gob.ar/municipio/guardias/), [Cartilla de salud](https://www.escobar.gob.ar/municipio/prestaciones-con-o-sin-obra-social/), [Centros de salud](https://www.escobar.gob.ar/municipio/centros-de-salud/), [Cartilla de discapacidad y desarrollo](https://www.escobar.gob.ar/municipio/cartilla-de-discapacidad-y-desarrollo/), [Teléfonos útiles](https://www.escobar.gob.ar/municipio/telefonos-utiles/), [prestaciones IOMA](https://www.escobar.gob.ar/municipio/prestaciones-ioma/) y [prestaciones PAMI](https://www.escobar.gob.ar/municipio/prestaciones-pami/). El bloque de movilidad registra las 15 paradas en las que el Municipio informó instalar QR de Mi Bus, agrupadas por las siete localidades, con enlace al planificador en línea y al dataset abierto 2026 (ODbL); la presencia física actual de los QR queda pendiente y el XLSX no se importa sin revisión. Se incorporó además el ramal Victoria–Capilla del Señor de la Línea Mitre: el PDF oficial indica un diagrama especial por obras vigente desde el 22/12/2025 y enumera estaciones en Garín, Maquinista Savio y Matheu. La operación en tiempo real queda sin verificar; el perfil enlaza la ficha y el horario oficial sin presentar ese documento como confirmación de circulación actual.
- La sección de transparencia incorpora la ficha municipal del dataset «Cursos de Agua del Partido de Escobar» y su GeoJSON original (ODbL, versión 1.0, actualización declarada 31/03/2026). El recurso declara CRS EPSG:22185: se ofrece como fuente descargable, sin dibujar coordenadas proyectadas ni inferir riesgo hídrico, caudal, calidad del agua o navegabilidad actual.
- Se documentó la referencia de polígonos municipales del [IGN](https://datos.gob.ar/ar/dataset/ign-unidades-territoriales) y la descarga GeoJSON de [Georef](https://www.argentina.gob.ar/georef/georef-servicio-de-normalizacion-de-direcciones-y-unidades-territoriales-de-argentina-5), cuyas geometrías se publican en WGS84 (EPSG:4326). El recurso Georef enlazado es la base nacional completa y debe filtrarse para Escobar; no se descargó ni validó el polígono en este ciclo, por lo que no se usa para dibujar ni para certificar la contención hidrográfica.
- Presupuesto Participativo 2026 de Escobar: el perfil documenta los 14 proyectos publicados bajo 24 de Febrero, sus tres ejes y puntajes de costo. El Municipio anunció $450 millones por localidad y hasta $45 millones para fortalecimiento institucional. La página CONECTA todavía muestra la votación abierta, pero la noticia municipal del 16/09/2026 extendió el plazo hasta el 25/09/2026; al 24/11 no se verificó una prórroga posterior ni resultados, por lo que el estado permanece pendiente. Los rótulos «Garín Centro» y «Presidente Perón» se conservan tal como aparecen en el bloque 24 de Febrero. Los puntos de costo de los proyectos no son los 100 puntos por categoría que cada votante puede distribuir. Fuentes: [CONECTA](https://www.escobar.gob.ar/conecta/), [extensión del plazo](https://www.escobar.gob.ar/noticias/el-presupuesto-participativo-2026-extiende-su-votacion-hasta-el-vierne/) y [reglas de votación](https://www.escobar.gob.ar/noticias/presupuesto-participativo-2026-un-nuevo-y-mejor-sistema-para-que-los-v/).
- Perfiles de exportaciones provinciales 2025 en `data/provincial-profiles.json`, basados en el informe OPEX del INDEC y enlazados con las fichas oficiales 2025 del Ministerio de Economía.
- Filtros del mapa por categoría y provincia; búsqueda por varios términos sin depender de tildes.
- Filtros sectoriales para los ocho sectores enumerados por el Consulado argentino en San Pablo: forestoindustria, turismo, infraestructura, minería, tecnología, siderurgia, energía y petróleo y gas. Los nodos se muestran como referencias territoriales, no como proyectos ni oportunidades de inversión confirmados; los sectores sin nodos etiquetados quedan expresamente sin resultados.
- Buscador por nombre, provincia y tipo de nodo.
- Directorio tabular filtrable por provincia y categoría, sincronizado con los filtros del mapa; sus accesos centran el punto seleccionado y muestran su ficha.
- Degradación controlada: si Leaflet o la cartografía externa no cargan, el directorio y las noticias siguen disponibles.
- Sección editorial alimentada por `data/news.json`, con filtros por tema, jurisdicciones explícitamente mencionadas y búsqueda; los registros ambiguos no reciben una provincia por inferencia. La validación evita titulares repetidos y enlaces duplicados tras normalizar esquema, host, puerto HTTPS predeterminado, ruta raíz y fragmentos, preservando los parámetros de consulta.
- Diseño adaptable, navegación por anclas y avisos de estado.
- Fichas territoriales Markdown por jurisdicción con período, fecha de publicación y estado/alcance de verificación del dataset OPEX.
- Comparador de dos jurisdicciones con exportación CSV de los tres indicadores homogéneos, diferencias A − B, unidad, período, fuente, publicación y estado/fecha/alcance de verificación.
- Investment Finder permite filtrar por disponibilidad de la oportunidad y, de forma independiente, por estado de verificación de la fuente; ambos estados no se confunden.
- Validación automática de los archivos JSON antes de desplegar en GitHub Pages.

## Sectores estratégicos de inversión

La interfaz incorpora los ocho sectores enumerados por el [Consulado General y Centro de Promoción de Argentina en San Pablo](https://cpabl.cancilleria.gob.ar/es/7-argentina-como-destino-de-inversi%C3%B3n), con fecha de actualización indicada por la fuente: 14/05/2026. Los filtros sectoriales muestran nodos geográficos que funcionan como referencias de contexto cuando la asociación es razonable a partir de la descripción disponible. No acreditan proyectos, explotaciones, inversiones, elegibilidad para el RIGI ni disponibilidad de predios. Los sectores sin nodos etiquetados se muestran sin resultados para no inventar localizaciones.

## Datos geográficos: alcance y calidad

El catálogo es una selección inicial, no un registro oficial exhaustivo. Las coordenadas se usan para visualización orientativa; no deben utilizarse para navegación, seguridad, planificación operativa ni decisiones de inversión sin una verificación adicional. Los enlaces de cada ficha documentan la entidad o la infraestructura, pero no necesariamente certifican la coordenada exacta, su estado operativo o la disponibilidad de servicios.

Para pasos fronterizos, consultar siempre el estado y los horarios vigentes en Migraciones y en los organismos responsables. Las condiciones pueden cambiar por clima, temporada y decisiones bilaterales.

### Ampliaciones incorporadas

La cobertura del catálogo alcanza ahora las 24 jurisdicciones argentinas y 100 nodos estratégicos. Se incorporó el Puerto de Ibicuy, con coordenadas publicadas por ANPyN y datos técnicos del muelle continental. Se incorporó también el Puerto de San Pedro, con coordenadas oficiales de ANPyN y datos publicados para sus muelles de ultramar y carga general. Se incorporó el muelle provincial del Puerto de San Nicolás con coordenadas publicadas por ANPyN. Se incorporaron referencias para Catamarca, Formosa, Entre Ríos, La Pampa y Tucumán, además de ampliar la infraestructura fluvial y fronteriza de Formosa y Entre Ríos. Se sumó el Parque Industrial Güemes, ubicado al sur de General Güemes sobre RN 34 km 1.132; el ente provincial EGPAIS documenta su superficie activa y conexión ferroviaria. Su coordenada se toma de OpenStreetMap a través de Mapcarta y es orientativa. Las incorporaciones posteriores incluyen la zona primaria aduanera de La Banda, el Parque Industrial Provincial Puerto Tirol, dos aeropuertos en San Luis, el Aeropuerto de General Pico (SAZG) y el Aeropuerto El Tehuelche (SAVY) y la Estación Retiro de la línea Mitre en CABA y el Parque Nacional El Leoncito en San Juan, con estado y calidad de coordenadas documentados en sus fichas y en la matriz nacional. Se incorporó el Parque Industrial de Río Grande (Tierra del Fuego), con coordenada secundaria contrastada dentro de la extensión oficial IDETDF EPSG:4326; el estado vigente de su padrón empresarial no se verificó.


- Aeropuerto Internacional Gobernador Horacio Guzmán (Perico, Jujuy): ubicación y descripción institucional en [Argentina.gob.ar](https://www.argentina.gob.ar/transporte/obras-en-los-aeropuertos/aeropuerto-de-jujuy).
- Aeropuerto Domingo Faustino Sarmiento (Las Chacritas, San Juan): referencia institucional en [Argentina.gob.ar](https://www.argentina.gob.ar/node/118621).
- Parque de Actividades Económicas de Rafaela (PAER): descripción, infraestructura y localización general en [su sitio institucional](https://paer.rafaela.gob.ar/parque-actividades-economicas-rafaela/).

La interfaz permite filtrar el mapa y el directorio por tipo y provincia. La ficha geográfica informa cuántos nodos del catálogo están registrados y qué tipos contiene; no debe interpretarse como un inventario exhaustivo. La nueva sección de perfiles económicos presenta exportaciones de bienes por jurisdicción para 2025, con variación interanual y participación nacional, según el informe OPEX del INDEC. También enlaza a la ficha provincial 2025 del Ministerio de Economía. Las exportaciones no representan el PBG ni el tamaño total de cada economía provincial. La interfaz calcula además tres señales descriptivas a partir del mismo dataset: mayor valor exportado por jurisdicción, mayor crecimiento interanual y región con mayor suma de exportaciones provinciales. Son comparaciones estadísticas, no recomendaciones de inversión ni mediciones de rentabilidad.

Se incorporó el Nuevo Puerto de Posadas — muelle 1, en Nemesio Parma (Misiones), con localización y datos técnicos publicados por ANPyN: muelle declarado de 250 m y calado de 6 m. Las coordenadas se convirtieron desde grados, minutos y segundos de la ficha institucional y se conservan también como fuente de coordenadas del marcador.

### Fuentes institucionales de referencia

- [ANPYN — tarifarios y referencias de puertos](https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/tarifas-de-puertos).
- [Migraciones — pasos internacionales en funcionamiento](https://www.argentina.gob.ar/migraciones/pasos-internacionales).
- [Centros de frontera — Pino Hachado](https://www.argentina.gob.ar/interior/centros-de-frontera/pino-hachado), [Agua Negra](https://www.argentina.gob.ar/interior/centros-de-frontera/agua-negra) y [Pircas Negras](https://www.argentina.gob.ar/interior/centros-de-frontera/pircas-negras).
- [Puerto de Comodoro Rivadavia](https://puertocomodororivadavia.ar/), [Puerto San Antonio Este](https://www.patagonia-norte.com.ar/sae.html), [Terminal Zárate](https://www.terminalzarate.com.ar/) y [Consorcio Portuario Regional de Mar del Plata](https://puertomardelplata.net/).
- [Parque Industrial Pilar](https://www.parqueindustrialpilar.org.ar/contacto).
- [Puerto de Barranqueras — muelle provincial](https://www.argentina.gob.ar/puertos-vias-navegables-y-marina-mercante/informaci%C3%B3n-portuaria/barranqueras-provincial): ficha oficial de localización y coordenadas del muelle.
- [Puerto de San Nicolás — muelle provincial](https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/san-nicolas-muelle-provincial): ficha ANPyN con latitud, longitud, localización y características técnicas del muelle fiscal.
- [Puerto de San Pedro — ANPyN](https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/san-pedro): ficha oficial con localización geográfica, coordenadas, longitudes de atraque y calados declarados de sus dos muelles.
- [Puerto de Ibicuy](https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/ibicuy): ficha ANPyN con coordenadas, localización sobre el río Ibicuy y datos del muelle continental (220 m de atraque, 12 m de calado declarado y diseño Panamax).
- [Paso Internacional San Francisco](https://www.turismofiambala.com.ar/qu%C3%A9-visitar/paso-internacional-san-francisco): referencia geográfica y datos generales de Turismo Fiambalá; consultar el estado operativo antes de viajar.
- [Parque Industrial Bahía Blanca](https://pibb.com.ar/): sitio institucional del parque y referencia de su emplazamiento; la coordenada aproximada se contrastó con la [ficha pública del registro de parques industriales](https://parquesindustriales.com.ar/parque?id=11279).
- [Parque Industrial Güemes — EGPAIS](https://www.egpais.com.ar/parques/parque-industrial-guemes/): fuente institucional para ubicación, superficie e infraestructura. La coordenada cartográfica aproximada se contrastó con [Mapcarta / OpenStreetMap](https://mapcarta.com/es/W1390977508).
- [Centro de Frontera Pehuenche](https://www.argentina.gob.ar/interior/centros-de-frontera/pehuenche): ficha oficial que identifica la conexión Malargüe–Talca y la RN 145. La coordenada del marcador se contrastó con el documento geográfico alojado en [CDI del Ministerio de Economía](https://cdi.mecon.gov.ar/bases/docelec/gr0111.pdf); sigue siendo una referencia cartográfica aproximada.
- [Neuquén Informa — infraestructura de Vaca Muerta y Añelo](https://www.neuqueninforma.gob.ar/noticias/2025/09/08/251191-vaca-muerta-provincia-y-operadoras-acordaron-construir-una-obra-vial-estrategica).
- [OpenStreetMap](https://www.openstreetmap.org/copyright) — cartografía base y atribución.


### Destinos turísticos y ejecutivos incorporados

Se añadieron cuatro nodos de tipo **Turismo** para ampliar la dimensión de destinos y servicios ejecutivos:

- [Puerto Iguazú](https://visitiguazu.travel/sin-categoria/informacion-de-interes/): destino Cataratas y Triple Frontera, con referencia del ente municipal de turismo.
- [Mendoza](https://www.argentina.gob.ar/node/444514): enoturismo, gastronomía, alojamiento y experiencias de naturaleza.
- [San Carlos de Bariloche](https://www.barilocheturismo.gob.ar/es/sobre-bariloche): oferta hotelera, gastronómica, de naturaleza y actividades durante todo el año.
- [El Calafate](https://turismo.santacruz.gob.ar/donde-ir/el-calafate): puerta de acceso al sector sur del Parque Nacional Los Glaciares.

Las coordenadas son puntos urbanos de referencia, no direcciones de hoteles ni validaciones de servicios. La oferta y conectividad deben confirmarse con los organismos y prestadores antes de planificar operaciones.

## Perfiles económicos provinciales

El archivo `data/provincial-profiles.json` reúne los datos de exportaciones de bienes atribuidas al origen provincial para el año 2025, publicados por INDEC el 10 de marzo de 2026. Incluye valor en millones de USD FOB, variación respecto de 2024, participación en el total nacional y enlace a la ficha provincial 2025 del Ministerio de Economía.

- Fuente estadística: [INDEC — Origen provincial de las exportaciones, bienes, año 2025](https://www.indec.gob.ar/uploads/informesdeprensa/opex_03_26929F77A2CA.pdf).
- Fichas complementarias: [Panel de Indicadores Provinciales](https://www.argentina.gob.ar/economia/politicaeconomica/informes-productivos-0/informes-provinciales/panel-de-indicadores-provinciales).
- El total de exportaciones provinciales no coincide necesariamente con el total país: el informe también presenta montos de origen extranjero/plataforma continental e indeterminado.
- Las cifras son nominales y describen exportaciones de bienes; no deben interpretarse como PBG, empleo, inversión total ni tamaño de mercado.
- Las fichas ministeriales tituladas 2025 combinan indicadores con distintos períodos de referencia. Consultar el año de cada indicador antes de comparar jurisdicciones.

## Cómo actualizar el catálogo de nodos

Editar `data/strategic-nodes.json`. Cada entrada debe conservar esta estructura:

```json
{
  "id": "provincia-nodo-identificador-estable",
  "name": "Nombre del nodo",
  "province": "Provincia",
  "type": "Industria",
  "coords": [-34.60, -58.38],
  "note": "Descripción breve, precisa y no promocional.",
  "source": "https://fuente-institucional.example/",
  "coordinateSource": "https://fuente-cartografica-o-institucional.example/",
  "status": "en_construccion"
}
```

- `id` es obligatorio en todos los registros y debe ser estable, único y estar en `kebab-case`. En la migración histórica del 26/11/2026, los 85 nodos sin ID recibieron un identificador determinista derivado de provincia, tipo y nombre; los 14 IDs ya existentes se preservaron. Una vez asignado, el ID no debe regenerarse si cambia el nombre descriptivo.
- `coords` usa el orden latitud, longitud.
- Tipos usados: Ciudad, Puerto, Aeropuerto, Paso fronterizo, Logística, Industria, Recurso mineral, Turismo y Estación ferroviaria.
- `Paso fronterizo` se reserva para cruces terrestres o fluviales con contraparte internacional; los aeropuertos se registran en `Aeropuerto`. La matriz usa `notApplicableCategories` solo cuando la jurisdicción no tiene frontera terrestre o fluvial internacional.
- Agregar una URL institucional o del administrador responsable.
- Cuando la coordenada provenga de una ficha distinta de la fuente descriptiva, agregar `coordinateSource`; si no existe una referencia exacta, explicitar que el marcador es aproximado.
- Identificar expresamente la calidad y semántica de la coordenada; no presentar un punto de referencia como acceso, centroide o perímetro si la fuente no lo acredita.
- `status` admite `operativo`, `en_construccion`, `anunciado`, `histórico`, `pendiente` y `no_verificado`; no inferir operación.
- Evitar duplicados y revisar la provincia y la ubicación antes de publicar.

## Cómo actualizar los perfiles provinciales

Editar `data/provincial-profiles.json`. Mantener los campos de metadatos (`period`, `unit`, `published`, `publisher`, `sourceUrl`) y un registro por cada una de las 24 jurisdicciones. Cada registro debe incluir provincia, región, exportaciones en millones de USD FOB, variación interanual, participación nacional y URL de la ficha oficial provincial 2025. No mezclar años de referencia ni completar valores faltantes con estimaciones propias. Si se actualiza el período, modificar también el texto de la interfaz y las validaciones del workflow.

## Cómo publicar una noticia

Editar `data/news.json` y agregar un objeto:

```json
{
  "id": "news-dominio-oficial-o-medio-example-noticia",
  "title": "Titular fiel a la fuente",
  "date": "2026-11-20",
  "period": "No consignado en el registro editorial",
  "category": "Economía",
  "summary": "Síntesis propia y breve basada en la nota original.",
  "source": "Nombre del medio u organismo",
  "url": "https://dominio-oficial-o-medio.example/noticia",
  "jurisdictions": ["Buenos Aires"],
  "geographyStatus": "explicit",
  "geographyEvidence": ["Zárate (provincia de Buenos Aires)"],
  "relatedSources": [
    {"label": "Norma oficial o fuente complementaria", "url": "https://organismo.gob.ar/documento"}
  ],
  "verification": {
    "status": "pending",
    "checkedAt": null,
    "scope": "Pendiente de revisión editorial."
  }
}
```

Categorías admitidas: Economía, Empresas, Comercio, Infraestructura, Regulación y Tecnología.

Metadatos obligatorios:
- `id`: identificador interno determinista: `news-` + host, ruta y consulta de la URL canónica, en minúsculas y con cada secuencia no alfanumérica reemplazada por un guion. Se eliminan el fragmento y el puerto HTTPS predeterminado. No es un ID asignado por la fuente; si cambia la URL, recalcularlo. CI valida que coincida con la URL y que sea único.
- `period`: período estadístico o temporal explícito de la fuente (por ejemplo, `2026-10`). Si no se consignó un período independiente de la fecha de publicación, usar el texto exacto `No consignado en el registro editorial`; no inferir períodos. El validador rechaza `null`, campos ausentes o cadenas vacías para las noticias.
- `jurisdictions`: lista de provincias o CABA identificadas explícitamente en la fuente enlazada. Usar los nombres normalizados del catálogo territorial; si no hay una jurisdicción provincial inequívoca, usar `[]`.
- `geographyStatus`: `explicit` cuando `jurisdictions` y `geographyEvidence` contienen referencias explícitas; `not_specified` cuando ambas listas están vacías. La clasificación es editorial: no mide impacto ni cobertura total.
- `geographyEvidence`: lugares o referencias geográficas concretas que justifican la asignación (por ejemplo, `Zárate (provincia de Buenos Aires)`). No convertir referencias ambiguas como `AMBA` en una provincia por inferencia.
- `verification.status`: `editorial_reviewed`, `pending`, `not_verified` u `outdated`.
- `verification.checkedAt`: fecha ISO de la última revisión registrada; usar `null` si todavía no se revisó. Cuando existe, no puede preceder a la fecha de publicación ni ser futura.
- `verification.scope`: alcance concreto de la revisión, obligatorio para todos los estados. `editorial_reviewed` exige una fecha de revisión válida y no significa monitoreo automático, vigencia en tiempo real ni disponibilidad permanente del enlace.
- `relatedSources`: lista opcional de fuentes complementarias, cada una con etiqueta y URL HTTPS; se muestran como enlaces adicionales y se validan automáticamente.


Criterio editorial:
1. Confirmar que la nota exista y que el enlace original abra.
2. Registrar la fecha de publicación de la fuente, no la fecha de carga.
3. Distinguir hechos de interpretaciones y mantener las cifras ligadas a su fuente.
4. No inventar cifras, titulares ni declaraciones.
5. Priorizar relevancia para empresas, inversión, comercio, infraestructura y actividad productiva argentina.
6. No presentar contenido de prueba como actualidad periodística.
7. Mantener cada síntesis en un máximo de 700 caracteres; la validación automatizada comprueba el límite y su frontera.
8. Mostrar las noticias de la más reciente a la más antigua; el workflow rechaza catálogos fuera de ese orden.

Las noticias cargadas actualmente fueron contrastadas con publicaciones oficiales de INDEC, Presidencia de la Nación, INTI, INTA y organismos nacionales vinculados con producción y comercio. Se incorporó la segunda Ronda de Negocios RIGI, prevista para el 2 de diciembre de 2026: la inscripción a reuniones de negocios cerró el 16 de noviembre, mientras que la asistencia a las demás actividades puede inscribirse hasta el 30 de noviembre según la publicación del Ministerio de Economía del 11 de noviembre. La sede figuraba pendiente de designación en esa fuente. Entre las incorporaciones recientes figuran la ronda internacional de negocios de Argentina Alimenta y las herramientas del INTA para trazabilidad y diferenciación de productos cárnicos. Se agregó la noticia del INTI sobre las jornadas EMC Days realizadas en Buenos Aires y Córdoba, con participación de Würth Elektronik y Electrocomponentes SA, publicada el 20 de noviembre de 2026. Entre las noticias del 24 de noviembre se incorporó la orientación de la FCA sobre IA agéntica en servicios financieros del Reino Unido y el reporte de Reuters sobre la caída de las acciones de Anthropic por debajo del precio de IPO. La cotización de Anthropic se conserva como un corte temporal de Reuters a las 11:17 UTC, no como precio en tiempo real; el comunicado del emisor se utiliza para distinguir los ingresos de la IPO de la colocación privada. La cobertura extranjera se documenta por separado y no se fuerza dentro de las 24 jurisdicciones argentinas del filtro territorial. La revisión editorial de esta actualización se realizó el 24 de noviembre de 2026. Se agregó la aprobación del proyecto Argentina LNG al RIGI, con cifras atribuidas a Reuters; la aprobación regulatoria no implica que el proyecto ya esté en operación. La sección es editorial y estática: no realiza scraping ni actualización automática. Para automatizar la curación se requiere integrar fuentes RSS/API permitidas, respetar licencias y términos de uso y establecer revisión editorial.

## Exportación de datos para análisis

El directorio de nodos y los perfiles provinciales permiten descargar los resultados visibles en formato CSV desde sus respectivos botones. La exportación respeta los filtros de búsqueda, provincia, categoría o región activos.

- **Nodos:** nombre, jurisdicción, categoría, descripción, latitud, longitud, fuente institucional y fuente de coordenadas cuando está disponible.
- **Perfiles provinciales:** jurisdicción, región, período, exportaciones FOB, variación interanual, participación nacional, ficha provincial, fecha de publicación y organismo de la fuente, estado/fecha/alcance de verificación y enlace al informe estadístico.
- Los archivos se generan en el navegador, con codificación UTF-8 y separador de punto y coma para facilitar su apertura en hojas de cálculo configuradas para español.
- Las celdas de texto que comienzan con `=`, `+`, `-` o `@` (incluso después de espacios) se neutralizan con un apóstrofo para reducir el riesgo de inyección de fórmulas al abrir los CSV en hojas de cálculo; los valores numéricos, incluidas coordenadas negativas, conservan su formato.
- La exportación no añade datos nuevos ni convierte las coordenadas orientativas en ubicaciones operativas. Revisar siempre las fuentes y el período antes de utilizar los archivos en informes comerciales.

### Exportación de comparaciones Federal Reports

Después de generar una comparación entre dos jurisdicciones, el botón **Exportar comparación CSV** descarga las tres métricas comparadas y sus diferencias (primera jurisdicción menos segunda). Cada fila conserva las dos jurisdicciones, valores, unidades, período OPEX, organismo publicador, fecha y URL de publicación, además del estado, fecha y alcance de verificación. Cambiar cualquiera de las jurisdicciones invalida la comparación anterior y deshabilita la exportación hasta volver a calcularla. El archivo se genera localmente con el mismo serializador CSV que neutraliza fórmulas en celdas de texto; no consulta servicios externos ni añade indicadores.

## Ficha de prospección territorial

La herramienta permite seleccionar una jurisdicción y descargar una ficha Markdown que reúne:
- Exportaciones provinciales de bienes, período y variación interanual del dataset OPEX.
- Nodos de infraestructura registrados para esa jurisdicción, con categoría, descripción y coordenadas de referencia.
- Enlaces a las fuentes estadísticas, fichas provinciales y referencias de cada nodo.

La ficha se genera en el navegador y no consulta servicios externos ni incorpora datos nuevos. Es un insumo preliminar de prospección, no una lista de empresas, un análisis de mercado completo ni una recomendación de inversión. El catálogo geográfico es selectivo y las coordenadas deben verificarse antes de cualquier uso operativo.

Investment Finder usa el esquema versionado 2 en `data/investment-opportunities.json` y reúne registros documentales nacionales y municipales, entre ellos RIMI para bienes de alta eficiencia energética y Programa KIT 4.0 para digitalización e Industria 4.0. Para el Partido de Escobar también incluye proyectos empresariales y licitaciones municipales; los presupuestos oficiales no equivalen a montos adjudicados ni a pagos, y los resultados no se presentan como confirmados cuando faltan actas o resoluciones. En RIMI, la norma está verificada, pero `opportunityStatus` permanece `unknown` porque no se confirmó la operatividad del SGI ni la elegibilidad de solicitantes. La edición 14523 del Boletín Oficial (20/11/2026) agregó convocatorias de salud, saneamiento, servicios de impresión, licencias informáticas y una concesión municipal de maricultura; los estados `open` reflejan cronogramas publicados, no elegibilidad ni adjudicación. En KIT 4.0, las bases y sus modificaciones están verificadas, pero la disponibilidad también permanece `unknown`: no se confirmó el saldo del cupo ni la disponibilidad de cada kit y de los proveedores requeridos. El portal oficial publica cobertura de hasta el 50% del valor neto del kit y topes diferenciados; el beneficio FONPEC se acredita al proveedor, no como pago directo a la PyME, que conserva a su cargo IVA, contraparte y cualquier saldo no cubierto. Las bases fijan un cupo general de ARS 9.000 millones y exigen al menos tres proveedores habilitados para que un kit figure disponible. Ninguno de los dos registros se presenta como convocatoria confirmada ni como recomendación. El campo `scope` distingue oportunidades `national` (con `jurisdiction: null`), `provincial` (con una de las 24 jurisdicciones) y `municipal` (con el partido o municipio explícitamente identificado). Cada registro exige tipo, sector, etapa, estado, vigencia, fuente HTTPS, fecha de publicación, período no vacío y estado/fecha/alcance de verificación. Si la fuente no declara un período independiente, se debe consignar explícitamente `No consignado en la fuente`; no se admite `null` ni una cadena vacía. Los montos son opcionales y solo se admiten cuando están publicados por la fuente; el valor debe ser numérico, finito y no negativo, además de conservar base y moneda. Una oportunidad no puede figurar abierta si no está verificada o si su vigencia terminó. Las exportaciones y la presencia de infraestructura no se convierten por sí solas en oportunidades. La interfaz pública permite consultar el catálogo en modo de solo lectura y filtrar localmente por texto, sector, alcance, jurisdicción, etapa, disponibilidad y estado de verificación de la fuente. Los dos últimos filtros son independientes: una norma puede estar verificada mientras la disponibilidad del trámite o programa sigue siendo desconocida. Cada ficha muestra fuente, fecha de publicación, período, vigencia y fecha/alcance de verificación. El estado del módulo continúa como planificado: la interfaz no verifica elegibilidad, no procesa trámites, no confirma fondos y no genera recomendaciones.


En las licitaciones municipales de Escobar, las LP 66/2026 y 69/2026 remiten a la edición del 13/11/2026 del [Boletín Oficial bonaerense, sección 14508](https://boletinoficial.gba.gob.ar/secciones/14508/ver), y las LP 71/2026, 72/2026 y 75/2026 a la edición del 20/11/2026 ([sección 14523](https://boletinoficial.gba.gob.ar/secciones/14523/ver)). Los registros conservan la fecha de publicación del aviso, el cronograma y el alcance de verificación. La apertura futura no garantiza que el pliego siga disponible ni que una empresa reúna los requisitos: revisar las fechas de consulta y venta antes de considerar participar. No se verificaron adjudicaciones ni ejecución para estos llamados.
La página independiente de Investment Finder permite exportar a CSV únicamente los registros que coinciden con los filtros visibles. Cada fila conserva el identificador, tipo, alcance, sector, jurisdicción, etapa, estado original (incluido `unknown`), monto publicado si existe, vigencia, fuente y fecha de publicación, URL, período, estado/fecha/alcance de verificación y fecha de actualización del catálogo. La exportación se genera localmente: no consulta nuevas fuentes ni modifica el estado de disponibilidad. El serializador CSV común neutraliza fórmulas en celdas de texto.

## Ecosistema de inteligencia

La interfaz presenta los seis módulos desde un único manifiesto: `data/ai-modules.json`. Federal Reports permanece en piloto funcional; Federal AI Assistant, Investment Finder, Territorial Monitor, Event Intelligence y Executive Travel AI permanecen planificados. Los estados, capacidades actuales, dependencias y próximos pasos se mantienen en ese archivo y no deben duplicarse como una segunda lista independiente en la interfaz.

Las funciones comprobables actuales son el mapa, el directorio de nodos, los perfiles OPEX, las noticias curadas, el catálogo documental filtrable de Investment Finder y las exportaciones CSV/Markdown. `data/events.json` contiene siete registros documentales validados: dos eventos completados, la Semana de la IA en desarrollo (25–27/11/2026) y cuatro eventos futuros confirmados. No existe una agenda integrada; los registros documentan convocatorias publicadas, pero no confirman cupos disponibles ni inscripción individual. El buscador no es un modelo de IA y la sección de módulos no implica integraciones en producción.

## Base territorial de Escobar

`data/escobar-territory.json` registra las siete localidades del partido y el número de barrios oficialmente reconocidos por la Municipalidad tras la promulgación de la Ordenanza 6515: Belén de Escobar (108), Garín (34), Ingeniero Maschwitz (33), Loma Verde (22), Matheu (21), Maquinista Savio (19) y 24 de Febrero (9). El total es 246 barrios. La fuente municipal fue publicada el 25/09/2026 y se conserva con fecha y alcance de verificación. Estos conteos describen la delimitación territorial comunicada por el Municipio; no representan población, superficie ni indicadores económicos. Las coordenadas de los centros urbanos se muestran como referencias y no como límites; el punto de Maquinista Savio corresponde solo al sector este. La división territorial también se contrasta con el Presupuesto Participativo 2026 de Escobar 360°.

Fuentes primarias: [Municipalidad de Escobar — reconocimiento oficial de los 246 barrios](https://www.escobar.gob.ar/identidad-memoria-y-futuro-con-la-firma-de-una-ordenanza-historica-escobar-reconocio-oficialmente-sus-246-barrios/) · [Escobar 360° — Presupuesto Participativo 2026](https://escobar360.escobar.gob.ar/servicio.aspx?ser_id=3032).

La ficha de servicios incorpora el CAPS Juan Carlos Selles: el directorio municipal lo ubica bajo Garín, en Pablo Marín, barrio 24 de Febrero, con guardia clínica diaria de 24 horas y teléfono 11 2150-0302. La página no informa fecha de edición. El enlace de llegada abre una búsqueda textual de Google Maps, no una coordenada oficial; por eso no se agregó un punto al mapa.

## Perfil económico de Escobar

`data/escobar-economic-profile.json` registra los indicadores que la página municipal rotula 2026: 382 establecimientos industriales y 6.438 comerciales. La misma serie publica bases 2016 de 188 y 2.405, respectivamente, y variaciones informadas de +103,2% y +167,7%; para 2024 muestra 314 establecimientos industriales y 5.284 comerciales. La fuente no informa fecha exacta de corte ni metodología del padrón.

Se conserva por separado `previousPageSnapshot`: una captura anterior del mismo URL mostraba para 2024 516 establecimientos industriales y 7.356 comerciales, y bases 2016 de 370 y 5.499. La Municipalidad no explica la diferencia entre las dos series. El snapshot se mantiene como antecedente histórico y no se combina con los indicadores actuales ni se interpreta como altas, bajas o crecimiento comprobado.

El archivo identifica el Parque Industrial Garín y el Parque Industrial de Loma Verde, y documenta sectores productivos mencionados por el Municipio. Incluye casos empresariales con estados diferenciados: Danone Specialized Nutrition (visita institucional en Garín, agosto de 2026), Grupo Addnice (traslado anunciado para 2027, aún no operativo), Ecosan (planta de construcción modular en Loma Verde; el Municipio informó más de 180 personas empleadas en noviembre de 2026, cifra atribuida a la fuente y no auditada) y Hönecker (contracción industrial reportada en Garín, proyecto de nueva planta no concretado en Belén de Escobar y planta de Ingeniero Maschwitz descrita como activa por medios, sin verificación directa actual). Para Ecosan se enlazan la publicación municipal, la página institucional de la empresa y la noticia de inauguración de 2025; no se infieren vacantes ni puestos nuevos. Para Hönecker se enlaza también su tienda online, que acredita presencia digital pero no operación fabril ni disponibilidad de locales físicos. No se infieren despidos ni vacantes.

No se publican coordenadas ni parcelas industriales porque las fuentes utilizadas no permiten validar esos datos con precisión. Tampoco se infiere disponibilidad de terrenos, naves, beneficios fiscales o vacantes laborales.

Fuentes primarias: [Municipalidad de Escobar — Escobar, tierra de inversiones](https://www.escobar.gob.ar/municipio/escobar-tierra-de-inversiones/) · [Recorrida por el Parque Industrial de Garín, 05/08/2026](https://www.escobar.gob.ar/noticias/el-municipio-y-la-provincia-destacaron-el-desarrollo-de-escobar-en-una/) · [Proyecto industrial anunciado para Garín, 04/11/2026](https://www.escobar.gob.ar/noticias/garin-sumara-una-nueva-planta-industrial-y-fortalecera-su-perfil-produ/).

## Arquitectura

- `index.html`: presentación general de Mapa Federal y acceso a herramientas independientes.
- `foco-escobar/index.html`: observatorio territorial independiente del Partido de Escobar.
- `assets/foco-escobar.js`: renderizado de los datos territoriales, económicos, de servicios, transparencia y movilidad de Escobar.
- `data/strategic-nodes.json`: catálogo geográfico.
- `data/news.json`: noticias curadas.
- `data/events.json`: catálogo versionado de Event Intelligence; contiene siete registros documentales validados: dos eventos completados, la Semana de la IA en desarrollo (25–27/11/2026) y cuatro eventos futuros confirmados. No es una agenda integrada ni confirma cupos ni el estado de la inscripción individual.
- `data/investment-opportunities.json`: catálogo documental versionado de Investment Finder; contiene registros nacionales del RIMI y del Programa KIT 4.0. Ambos conservan disponibilidad desconocida hasta confirmar sus condiciones operativas, sin presentarse como convocatorias abiertas.
- Leaflet 1.9.4: visualización geográfica.
- OpenStreetMap: teselas, sujetas a disponibilidad y política de uso.
- `.github/workflows/static.yml`: validación de datos y despliegue.

## Estado de inteligencia artificial

Las interfaces de IA están planificadas, no conectadas. El buscador actual es una búsqueda local por texto y filtros; no es un modelo de IA. No se afirma que el sitio disponga de modelos, datos en vivo, autenticación ni recomendaciones automatizadas.

## Publicación y seguridad

GitHub Pages despliega el sitio estático desde la rama principal. Las funciones que requieran claves privadas, servidor, base de datos o integraciones protegidas deberán implementarse mediante un backend; nunca incluir secretos en JavaScript público.

Si un despliegue falla después de cargar el artefacto de Pages, revisar primero los registros del job. Cuando el problema sea un artefacto duplicado, iniciar una ejecución nueva del workflow completo; no volver a ejecutar únicamente el job de despliegue dentro del mismo run, porque puede conservar el artefacto anterior.


## Ecosistema de inteligencia: estado y hoja de ruta

La sección de módulos se alimenta de `data/ai-modules.json` y sus criterios técnicos están documentados en [docs/intelligence-modules-roadmap.md](docs/intelligence-modules-roadmap.md).

- **Federal Reports:** piloto funcional. Genera fichas Markdown por jurisdicción y permite comparar dos jurisdicciones con exportaciones OPEX 2025, variación interanual y participación nacional. La comparación usa un único período y fuente INDEC, muestra publicación y verificación, y calcula diferencias descriptivas (A menos B); no es un ranking de inversión ni utiliza IA. Las fichas distinguen el período OPEX del año de edición de las fichas provinciales complementarias. La validación temporal rechaza fechas de verificación anteriores a la publicación de la fuente o posteriores al día de ejecución; no impone un umbral arbitrario de antigüedad, que requeriría una política editorial definida.
- **Federal AI Assistant, Investment Finder, Territorial Monitor, Event Intelligence y Executive Travel AI:** planificados. No deben ofrecerse como funciones disponibles hasta implementar y probar sus integraciones.

INDEC publicó el OPEX del primer semestre de 2026 el 2 de septiembre de 2026, con resultados regionales. Ese período parcial debe mantenerse separado del OPEX anual 2025 que alimenta las fichas provinciales. La página de INDEC anuncia el próximo informe anual 2026 para el 9 de marzo de 2027: [Origen provincial de las exportaciones](https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-2-79).

## Event Intelligence: actividad empresarial y territorial de Escobar

El catálogo `data/events.json` conserva dos eventos históricos documentados del partido de Escobar: la 5.ª Feria Japonesa Bazaa (15/11/2026) y la Ronda de Negocios Escobar 2026 (24/11/2026), realizada en Espacio Mendoza, Ingeniero Maschwitz. Para la Ronda, la fecha y sede se contrastaron con la agenda oficial de PBA; las cifras de participación (277 empresas y entidades, 72 de Escobar, más de 350 asistentes y 33 ramas productivas) se atribuyen a la cobertura de Zona Norte Diario. No se infieren acuerdos comerciales ni inversiones cerradas. La ficha omite la hora por discrepancia entre la agenda oficial y el portal de inscripción. Ambos registros se marcan como `completed`: no representan una agenda activa ni disponibilidad futura. También se registra la Colonia de Verano 2027, [publicada por el Municipio](https://www.escobar.gob.ar/noticias/escobar-abre-la-inscripcion-para-la-colonia-de-verano-2027-y-anuncia-l/) el 16/11/2026: actividades del 04 al 28/01/2027 e inscripción general anunciada del 24/11 al 04/12/2026. La fuente identifica polideportivos municipales, Club Italiano (Loma Verde) y YMCAHUASI (Matheu); el registro es documental y no confirma cupos ni inscripción individual.

Fuente primaria: [Municipalidad de Escobar — 5.ª Feria Japonesa](https://www.escobar.gob.ar/noticias/este-domingo-llega-a-escobar-la-5-edicion-de-la-feria-japonesa/).

Los próximos registros deben seguir el mismo criterio. No se cargan eventos futuros sin fecha, organizador y fuente pública verificables. La fecha de la 63.ª Fiesta Nacional de la Flor presenta una diferencia entre la noticia municipal de anuncio (3–12 de octubre) y la ficha actual de agenda (2–12 de octubre); no se normaliza esa discrepancia sin confirmación del organizador.

## Interfaz bilingüe (español / inglés)

La interfaz incorpora un selector ES / EN en la navegación. El idioma predeterminado es español; la preferencia elegida se conserva localmente en el navegador y el atributo `lang` del documento se actualiza al cambiar de idioma. El catálogo reutilizable está en `assets/i18n.js` y expone `window.MapaFederalI18n.setLanguage("es"|"en")` y `getLanguage()` para futuras vistas y componentes.

El módulo traduce etiquetas, navegación, textos editoriales de interfaz, controles, mensajes y elementos dinámicos reconocidos por el catálogo. Los nombres propios, topónimos, cifras, titulares originales de fuentes y datos oficiales se conservan para evitar alterar la denominación de origen. Las nuevas cadenas de interfaz deben incorporarse al catálogo inglés y probarse en ambos idiomas. La traducción de resúmenes editoriales y contenidos de datos debe prepararse como contenido localizado revisado, no mediante traducción automática indiscriminada.


### Movilidad local de Escobar: cruces documentados

- El cruce nominal entre las 15 paradas QR municipales y las estaciones del ramal Victoria–Capilla del Señor identifica tres localidades con registros de ambos modos: Garín, Maquinista Savio y Matheu. Es una coincidencia a escala de localidad, no una afirmación de proximidad, combinación ni transbordo.
- El recurso XLSX municipal de líneas y paradas 2026 figura actualizado el 31/03/2026 y bajo licencia ODbL. Su contenido y geometrías no se importaron ni validaron individualmente; por eso no se calculan distancias, rutas ni tiempos.
- El portal municipal publica además `estaciones_ferrocarril.geojson`, actualizado el 31/03/2026 bajo licencia ODbL. Se incorporaron sus cinco puntos tras transformar el CRS original EPSG:22185 (POSGAR 94 / Argentina 5) a WGS 84 (EPSG:4326). La ficha no informa organismo responsable en el campo Organización; declara como fuente el relevamiento municipal y datos base de organismos ferroviarios nacionales. Las ubicaciones se muestran como infraestructura, con estado del servicio no verificado. El diagrama horario de Victoria–Capilla del Señor enumera tres estaciones; la diferencia de alcance entre fuentes no permite inferir operación o suspensión en las otras dos.
- Se documentó el puente peatonal informado por el Municipio el 23/10/2024 entre Nuevo Obejero (Maquinista Savio) y Cri Cri (Garín). Su estado físico actual queda pendiente de comprobación presencial.
- El planificador municipal Mi Bus muestra la línea 506 como «Est. Escobar - Mercado Libre (Loma Verde)» y una ficha con 23 paradas entre Terminal Escobar y COL. ESTE (MERCADO LIBRE), consultada el 24/11/2026. Esto verifica que la ruta figura en el planificador, pero no la circulación en tiempo real ni la equivalencia exacta con el ramal B anunciado el 03/11/2026; no se incorporan horarios ni frecuencias. Fuentes: [catálogo Mi Bus](https://mibus.escobar.gob.ar/) · [ficha de la línea 506](https://mibus.escobar.gob.ar/routes/21/R00005600/SH0002533).
- En la consulta del 24/11/2026, Mi Bus también lista la línea 503 como «SAN LUIS - ESCOBAR» y su ficha enumera 29 paradas. Esa denominación no identifica el ramal H anunciado el 03/11/2026 ni su destino en la estación Matheu; por eso se registra por separado, sin asignar localidades por inferencia ni confirmar circulación efectiva. Fuentes: [catálogo Mi Bus](https://mibus.escobar.gob.ar/) · [ficha de la línea 503](https://mibus.escobar.gob.ar/routes/21/escobar_7/escobar_15) · [anuncio municipal del ramal 503 H](https://www.escobar.gob.ar/noticias/transporte-publico-escobar-suma-dos-nuevos-ramales-y-mas-colectivos-0-/).
- La Municipalidad anunció el 03/11/2026 dos ramales nuevos: 503 H entre la terminal de Belén de Escobar y la estación Matheu, y 506 B entre Belén de Escobar, el Parque Industrial de Loma Verde y el centro de almacenamiento de Mercado Libre. Se registran los recorridos publicados, pero ambos conservan estado operativo `no verificado`: el anuncio no fijó fecha exacta de inicio ni horarios. Una nota secundaria de El Diario de Escobar del 18/11/2026 informó que el 506 B ya funcionaba; al no localizarse confirmación posterior del Municipio o del operador, no se publican esos horarios como oficiales ni se eleva su estado operativo.


### Contrataciones municipales de Escobar: licitaciones y límites de verificación

El catálogo `data/investment-opportunities.json` incorpora la LP 67/2026 para el servicio de desagote en distintas dependencias: el Boletín Oficial bonaerense, edición del 06/11/2026 (sección 14496), publica un presupuesto oficial de ARS 288.950.000 IVA incluido y apertura prevista para el 20/11/2026 a las 10:00 en Belén de Escobar. Al 24/11/2026 el llamado se registra como cerrado y con etapa desconocida: no se verificaron acta de apertura, ofertas, adjudicación, contrato ni prestación. El presupuesto no se interpreta como adjudicación ni gasto ejecutado. Fuente: [Boletín Oficial — sección 14496](https://boletinoficial.gba.gob.ar/secciones/14496/descargar).

La LP 68/2026 (alquiler de servicio de riego) no se incorpora con monto u horario consolidados porque dos publicaciones oficiales consultadas discrepan: el Boletín Oficial del 04/11/2026 (sección 14490) informa ARS 286.602.960 IVA incluido y apertura a las 09:00 del 20/11; la ficha municipal del pliego informa ARS 300.010.000 IVA incluido y apertura a las 11:00 del mismo día. No se identificó una rectificación oficial que resuelva la diferencia. Fuentes: [Boletín Oficial — sección 14490](https://boletinoficial.gba.gob.ar/secciones/14490/ver) · [Municipalidad de Escobar — pliego LP 68/26](https://www.escobar.gob.ar/pliego-licitacion-publica-no68-26/).