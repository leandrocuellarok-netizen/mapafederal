# Mapa Federal

**Inteligencia territorial para empresarios y ejecutivos.**

Plataforma web estática en evolución para explorar infraestructura, nodos territoriales argentinos y actualidad empresarial con trazabilidad de fuentes.

## Funcionalidades disponibles

- Mapa interactivo con Leaflet y cartografía de OpenStreetMap.
- Catálogo externo de 77 nodos estratégicos en `data/strategic-nodes.json`, con presencia en las 23 provincias y la Ciudad Autónoma de Buenos Aires, referencias de fuente y advertencias sobre coordenadas aproximadas.
- Perfil local del Partido de Escobar en `data/escobar-territory.json` y `data/escobar-economic-profile.json`: siete localidades, 246 barrios reconocidos, indicadores municipales 2026, parques industriales, proyecto portuario anunciado y directorios municipales con fecha y alcance de verificación. La sección local de la portada distingue los datos publicados de los estados pendientes y enlaza cada referencia con su fuente.
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

La cobertura del catálogo alcanza ahora las 24 jurisdicciones argentinas y 77 nodos estratégicos. Se incorporó el Puerto de Ibicuy, con coordenadas publicadas por ANPyN y datos técnicos del muelle continental. Se incorporó también el Puerto de San Pedro, con coordenadas oficiales de ANPyN y datos publicados para sus muelles de ultramar y carga general. Se incorporó el muelle provincial del Puerto de San Nicolás con coordenadas publicadas por ANPyN. Se incorporaron referencias para Catamarca, Formosa, Entre Ríos, La Pampa y Tucumán, además de ampliar la infraestructura fluvial y fronteriza de Formosa y Entre Ríos. Se sumó el Parque Industrial Güemes, ubicado al sur de General Güemes sobre RN 34 km 1.132; el ente provincial EGPAIS documenta su superficie activa y conexión ferroviaria. Su coordenada se toma de OpenStreetMap a través de Mapcarta y es orientativa.


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
  "name": "Nombre del nodo",
  "province": "Provincia",
  "type": "Puerto",
  "coords": [-34.60, -58.38],
  "note": "Descripción breve, precisa y no promocional.",
  "source": "https://fuente-institucional.example/",
  "coordinateSource": "https://fuente-cartografica-o-institucional.example/"
}
```

- `coords` usa el orden latitud, longitud.
- Tipos usados: Ciudad, Puerto, Aeropuerto, Paso fronterizo, Logística, Industria y Turismo.
- Agregar una URL institucional o del administrador responsable.
- Cuando la coordenada provenga de una ficha distinta de la fuente descriptiva, agregar `coordinateSource`; si no existe una referencia exacta, explicitar que el marcador es aproximado.
- Identificar expresamente las coordenadas aproximadas y no inferir estado operativo.
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

Las noticias cargadas actualmente fueron contrastadas con publicaciones oficiales de INDEC, Presidencia de la Nación, INTI, INTA y organismos nacionales vinculados con producción y comercio. Se incorporó la segunda Ronda de Negocios RIGI, prevista para el 2 de diciembre de 2026: la inscripción a reuniones de negocios cerró el 16 de noviembre, mientras que la asistencia a las demás actividades puede inscribirse hasta el 30 de noviembre según la publicación del Ministerio de Economía del 11 de noviembre. La sede figuraba pendiente de designación en esa fuente. Entre las incorporaciones recientes figuran la ronda internacional de negocios de Argentina Alimenta y las herramientas del INTA para trazabilidad y diferenciación de productos cárnicos. Se agregó la noticia del INTI sobre las jornadas EMC Days realizadas en Buenos Aires y Córdoba, con participación de Würth Elektronik y Electrocomponentes SA, publicada el 20 de noviembre de 2026. La última noticia incorporada al catálogo tiene fecha 20 de noviembre de 2026; la revisión editorial de esta versión se realizó el 21 de noviembre de 2026 sin añadir publicaciones no verificadas. Se agregó la aprobación del proyecto Argentina LNG al RIGI, con cifras atribuidas a Reuters; la aprobación regulatoria no implica que el proyecto ya esté en operación. La sección es editorial y estática: no realiza scraping ni actualización automática. Para automatizar la curación se requiere integrar fuentes RSS/API permitidas, respetar licencias y términos de uso y establecer revisión editorial.

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

Investment Finder usa el esquema versionado 2 en `data/investment-opportunities.json` y contiene dos registros documentales nacionales: RIMI para bienes de alta eficiencia energética y Programa KIT 4.0 para digitalización e Industria 4.0. En RIMI, la norma está verificada, pero `opportunityStatus` permanece `unknown` porque no se confirmó la operatividad del SGI ni la elegibilidad de solicitantes. En KIT 4.0, las bases y sus modificaciones están verificadas, pero la disponibilidad también permanece `unknown`: no se confirmó el saldo del cupo ni la disponibilidad de cada kit y de los proveedores requeridos. El portal oficial publica cobertura de hasta el 50% del valor neto del kit y topes diferenciados; el beneficio FONPEC se acredita al proveedor, no como pago directo a la PyME, que conserva a su cargo IVA, contraparte y cualquier saldo no cubierto. Las bases fijan un cupo general de ARS 9.000 millones y exigen al menos tres proveedores habilitados para que un kit figure disponible. Ninguno de los dos registros se presenta como convocatoria confirmada ni como recomendación. El campo `scope` distingue oportunidades `national` (con `jurisdiction: null`) de oportunidades `provincial` (con una de las 24 jurisdicciones). Cada registro exige tipo, sector, etapa, estado, vigencia, fuente HTTPS, fecha de publicación, período no vacío y estado/fecha/alcance de verificación. Si la fuente no declara un período independiente, se debe consignar explícitamente `No consignado en la fuente`; no se admite `null` ni una cadena vacía. Los montos son opcionales y solo se admiten cuando están publicados por la fuente; el valor debe ser numérico, finito y no negativo, además de conservar base y moneda. Una oportunidad no puede figurar abierta si no está verificada o si su vigencia terminó. Las exportaciones y la presencia de infraestructura no se convierten por sí solas en oportunidades. La interfaz pública permite consultar el catálogo en modo de solo lectura y filtrar localmente por texto, sector, alcance, jurisdicción, etapa, disponibilidad y estado de verificación de la fuente. Los dos últimos filtros son independientes: una norma puede estar verificada mientras la disponibilidad del trámite o programa sigue siendo desconocida. Cada ficha muestra fuente, fecha de publicación, período, vigencia y fecha/alcance de verificación. El estado del módulo continúa como planificado: la interfaz no verifica elegibilidad, no procesa trámites, no confirma fondos y no genera recomendaciones.

La página independiente de Investment Finder permite exportar a CSV únicamente los registros que coinciden con los filtros visibles. Cada fila conserva el identificador, tipo, alcance, sector, jurisdicción, etapa, estado original (incluido `unknown`), monto publicado si existe, vigencia, fuente y fecha de publicación, URL, período, estado/fecha/alcance de verificación y fecha de actualización del catálogo. La exportación se genera localmente: no consulta nuevas fuentes ni modifica el estado de disponibilidad. El serializador CSV común neutraliza fórmulas en celdas de texto.

## Ecosistema de inteligencia

La interfaz presenta los seis módulos desde un único manifiesto: `data/ai-modules.json`. Federal Reports permanece en piloto funcional; Federal AI Assistant, Investment Finder, Territorial Monitor, Event Intelligence y Executive Travel AI permanecen planificados. Los estados, capacidades actuales, dependencias y próximos pasos se mantienen en ese archivo y no deben duplicarse como una segunda lista independiente en la interfaz.

Las funciones comprobables actuales son el mapa, el directorio de nodos, los perfiles OPEX, las noticias curadas, el catálogo documental filtrable de Investment Finder y las exportaciones CSV/Markdown. `data/events.json` contiene únicamente el contrato de datos validado para Event Intelligence y no tiene eventos cargados; no existe una agenda integrada. El buscador no es un modelo de IA y la sección de módulos no implica integraciones en producción.

## Base territorial de Escobar

`data/escobar-territory.json` registra las siete localidades del partido y el número de barrios oficialmente reconocidos por la Municipalidad tras la promulgación de la Ordenanza 6515: Belén de Escobar (108), Garín (34), Ingeniero Maschwitz (33), Loma Verde (22), Matheu (21), Maquinista Savio (19) y 24 de Febrero (9). El total es 246 barrios. La fuente municipal fue publicada el 25/09/2026 y se conserva con fecha y alcance de verificación. Estos conteos describen la delimitación territorial comunicada por el Municipio; no representan población, superficie ni indicadores económicos. La división territorial también se contrasta con el Presupuesto Participativo 2026 de Escobar 360°.

Fuentes primarias: [Municipalidad de Escobar — reconocimiento oficial de los 246 barrios](https://www.escobar.gob.ar/identidad-memoria-y-futuro-con-la-firma-de-una-ordenanza-historica-escobar-reconocio-oficialmente-sus-246-barrios/) · [Escobar 360° — Presupuesto Participativo 2026](https://escobar360.escobar.gob.ar/servicio.aspx?ser_id=3032).

## Perfil económico de Escobar

`data/escobar-economic-profile.json` reúne un perfil económico distrital con indicadores de referencia 2024 publicados por la Municipalidad: 516 establecimientos industriales y 7.356 comerciales. El Municipio informa variaciones del padrón de +39,4% y +33,7%, respectivamente, respecto de 2016. Estos valores se presentan como cifras institucionales de referencia, no como un relevamiento actualizado a 2026.

El archivo identifica el Parque Industrial Garín y el Parque Industrial de Loma Verde, y documenta sectores productivos mencionados por el Municipio. Incluye dos casos empresariales con distinto estado: Danone Specialized Nutrition, cuya planta en Garín fue visitada por autoridades en agosto de 2026, y Grupo Addnice, cuyo traslado de planta a Garín fue anunciado como proyecto para 2027. Un anuncio no equivale a una instalación ya operativa.

No se publican coordenadas ni parcelas industriales porque las fuentes utilizadas no permiten validar esos datos con precisión. Tampoco se infiere disponibilidad de terrenos, naves, beneficios fiscales o vacantes laborales.

Fuentes primarias: [Municipalidad de Escobar — Escobar, tierra de inversiones](https://www.escobar.gob.ar/municipio/escobar-tierra-de-inversiones/) · [Recorrida por el Parque Industrial de Garín, 05/08/2026](https://www.escobar.gob.ar/noticias/el-municipio-y-la-provincia-destacaron-el-desarrollo-de-escobar-en-una/) · [Proyecto industrial anunciado para Garín, 04/11/2026](https://www.escobar.gob.ar/noticias/garin-sumara-una-nueva-planta-industrial-y-fortalecera-su-perfil-produ/).

## Arquitectura

- `index.html`: interfaz y lógica cliente.
- `data/strategic-nodes.json`: catálogo geográfico.
- `data/news.json`: noticias curadas.
- `data/events.json`: catálogo versionado de Event Intelligence; contiene un registro histórico verificado (5.ª Feria Japonesa Bazaa, 15/11/2026, Ingeniero Maschwitz), marcado como completado. No es una agenda integrada ni confirma eventos futuros.
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

## Event Intelligence: primer registro territorial de Escobar

El catálogo `data/events.json` incorpora un primer evento histórico documentado del partido de Escobar: la 5.ª Feria Japonesa Bazaa, realizada el 15 de noviembre de 2026 en el Polo de Educación Superior de Escobar, Ingeniero Maschwitz. La ficha conserva la publicación municipal del 16/11/2026, horario anunciado, sede, período y verificación del 23/11/2026. Se marca como `completed`: no representa una agenda activa ni disponibilidad futura.

Fuente primaria: [Municipalidad de Escobar — 5.ª Feria Japonesa](https://www.escobar.gob.ar/noticias/este-domingo-llega-a-escobar-la-5-edicion-de-la-feria-japonesa/).

Los próximos registros deben seguir el mismo criterio. No se cargan eventos futuros sin fecha, organizador y fuente pública verificables. La fecha de la 63.ª Fiesta Nacional de la Flor presenta una diferencia entre la noticia municipal de anuncio (3–12 de octubre) y la ficha actual de agenda (2–12 de octubre); no se normaliza esa discrepancia sin confirmación del organizador.

## Interfaz bilingüe (español / inglés)

La interfaz incorpora un selector ES / EN en la navegación. El idioma predeterminado es español; la preferencia elegida se conserva localmente en el navegador y el atributo `lang` del documento se actualiza al cambiar de idioma. El catálogo reutilizable está en `assets/i18n.js` y expone `window.MapaFederalI18n.setLanguage("es"|"en")` y `getLanguage()` para futuras vistas y componentes.

El módulo traduce etiquetas, navegación, textos editoriales de interfaz, controles, mensajes y elementos dinámicos reconocidos por el catálogo. Los nombres propios, topónimos, cifras, titulares originales de fuentes y datos oficiales se conservan para evitar alterar la denominación de origen. Las nuevas cadenas de interfaz deben incorporarse al catálogo inglés y probarse en ambos idiomas. La traducción de resúmenes editoriales y contenidos de datos debe prepararse como contenido localizado revisado, no mediante traducción automática indiscriminada.
