# Mapa Federal

**Inteligencia territorial para empresarios y ejecutivos.**

Plataforma web estática en evolución para explorar infraestructura, nodos territoriales argentinos y actualidad empresarial con trazabilidad de fuentes.

## Funcionalidades disponibles

- Mapa interactivo con Leaflet y cartografía de OpenStreetMap.
- Catálogo externo de 69 nodos estratégicos en `data/strategic-nodes.json`, con presencia en las 23 provincias y la Ciudad Autónoma de Buenos Aires, referencias de fuente y advertencias sobre coordenadas aproximadas.
- Perfiles de exportaciones provinciales 2025 en `data/provincial-profiles.json`, basados en el informe OPEX del INDEC y enlazados con las fichas oficiales 2025 del Ministerio de Economía.
- Filtros del mapa por categoría y provincia; búsqueda por varios términos sin depender de tildes.
- Buscador por nombre, provincia y tipo de nodo.
- Directorio tabular filtrable por provincia y categoría, sincronizado con los filtros del mapa; sus accesos centran el punto seleccionado y muestran su ficha.
- Degradación controlada: si Leaflet o la cartografía externa no cargan, el directorio y las noticias siguen disponibles.
- Sección editorial alimentada por `data/news.json`, con filtros por tema y búsqueda; la validación evita titulares repetidos y enlaces duplicados tras normalizar esquema, host, puerto HTTPS predeterminado, ruta raíz y fragmentos, preservando los parámetros de consulta.
- Diseño adaptable, navegación por anclas y avisos de estado.
- Fichas territoriales Markdown por jurisdicción con período, fecha de publicación y estado/alcance de verificación del dataset OPEX.
- Validación automática de los archivos JSON antes de desplegar en GitHub Pages.

## Datos geográficos: alcance y calidad

El catálogo es una selección inicial, no un registro oficial exhaustivo. Las coordenadas se usan para visualización orientativa; no deben utilizarse para navegación, seguridad, planificación operativa ni decisiones de inversión sin una verificación adicional. Los enlaces de cada ficha documentan la entidad o la infraestructura, pero no necesariamente certifican la coordenada exacta, su estado operativo o la disponibilidad de servicios.

Para pasos fronterizos, consultar siempre el estado y los horarios vigentes en Migraciones y en los organismos responsables. Las condiciones pueden cambiar por clima, temporada y decisiones bilaterales.

### Ampliaciones incorporadas

La cobertura del catálogo alcanza ahora las 24 jurisdicciones argentinas y 69 nodos estratégicos. Se incorporó el Puerto de Ibicuy, con coordenadas publicadas por ANPyN y datos técnicos del muelle continental. Se incorporó también el Puerto de San Pedro, con coordenadas oficiales de ANPyN y datos publicados para sus muelles de ultramar y carga general. Se incorporó el muelle provincial del Puerto de San Nicolás con coordenadas publicadas por ANPyN. Se incorporaron referencias para Catamarca, Formosa, Entre Ríos, La Pampa y Tucumán, además de ampliar la infraestructura fluvial y fronteriza de Formosa y Entre Ríos. Se sumó el Parque Industrial Güemes, ubicado al sur de General Güemes sobre RN 34 km 1.132; el ente provincial EGPAIS documenta su superficie activa y conexión ferroviaria. Su coordenada se toma de OpenStreetMap a través de Mapcarta y es orientativa.


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
  "title": "Titular fiel a la fuente",
  "date": "2026-11-20",
  "period": null,
  "category": "Economía",
  "summary": "Síntesis propia y breve basada en la nota original.",
  "source": "Nombre del medio u organismo",
  "url": "https://dominio-oficial-o-medio.example/noticia",
  "verification": {
    "status": "pending",
    "checkedAt": null,
    "scope": "Pendiente de revisión editorial."
  }
}
```

Categorías admitidas: Economía, Empresas, Comercio, Infraestructura, Regulación y Tecnología.

Metadatos obligatorios:
- `period`: período estadístico o temporal explícito de la fuente (por ejemplo, `2026-10`); usar `null` si la fuente no informa un período de referencia independiente de la fecha de publicación.
- `verification.status`: `editorial_reviewed`, `pending`, `not_verified` u `outdated`.
- `verification.checkedAt`: fecha ISO de la última revisión registrada; usar `null` si todavía no se revisó. Cuando existe, no puede preceder a la fecha de publicación ni ser futura.
- `verification.scope`: alcance concreto de la revisión, obligatorio para todos los estados. `editorial_reviewed` exige una fecha de revisión válida y no significa monitoreo automático, vigencia en tiempo real ni disponibilidad permanente del enlace.


Criterio editorial:
1. Confirmar que la nota exista y que el enlace original abra.
2. Registrar la fecha de publicación de la fuente, no la fecha de carga.
3. Distinguir hechos de interpretaciones y mantener las cifras ligadas a su fuente.
4. No inventar cifras, titulares ni declaraciones.
5. Priorizar relevancia para empresas, inversión, comercio, infraestructura y actividad productiva argentina.
6. No presentar contenido de prueba como actualidad periodística.

Las noticias cargadas actualmente fueron contrastadas con publicaciones oficiales de INDEC, Presidencia de la Nación, INTI, INTA y organismos nacionales vinculados con producción y comercio. Se incorporó la segunda Ronda de Negocios RIGI, prevista para el 2 de diciembre de 2026: la inscripción a reuniones de negocios cerró el 16 de noviembre, mientras que la asistencia a las demás actividades puede inscribirse hasta el 30 de noviembre según la publicación del Ministerio de Economía del 11 de noviembre. La sede figuraba pendiente de designación en esa fuente. Entre las incorporaciones recientes figuran la ronda internacional de negocios de Argentina Alimenta y las herramientas del INTA para trazabilidad y diferenciación de productos cárnicos. Se agregó la noticia del INTI sobre las jornadas EMC Days realizadas en Buenos Aires y Córdoba, con participación de Würth Elektronik y Electrocomponentes SA, publicada el 20 de noviembre de 2026. La última noticia incorporada al catálogo tiene fecha 20 de noviembre de 2026; la revisión editorial de esta versión se realizó el 21 de noviembre de 2026 sin añadir publicaciones no verificadas. Se agregó la aprobación del proyecto Argentina LNG al RIGI, con cifras atribuidas a Reuters; la aprobación regulatoria no implica que el proyecto ya esté en operación. La sección es editorial y estática: no realiza scraping ni actualización automática. Para automatizar la curación se requiere integrar fuentes RSS/API permitidas, respetar licencias y términos de uso y establecer revisión editorial.

## Exportación de datos para análisis

El directorio de nodos y los perfiles provinciales permiten descargar los resultados visibles en formato CSV desde sus respectivos botones. La exportación respeta los filtros de búsqueda, provincia, categoría o región activos.

- **Nodos:** nombre, jurisdicción, categoría, descripción, latitud, longitud, fuente institucional y fuente de coordenadas cuando está disponible.
- **Perfiles provinciales:** jurisdicción, región, período, exportaciones FOB, variación interanual, participación nacional, ficha provincial, fecha de publicación y organismo de la fuente, estado/fecha/alcance de verificación y enlace al informe estadístico.
- Los archivos se generan en el navegador, con codificación UTF-8 y separador de punto y coma para facilitar su apertura en hojas de cálculo configuradas para español.
- Las celdas de texto que comienzan con `=`, `+`, `-` o `@` (incluso después de espacios) se neutralizan con un apóstrofo para reducir el riesgo de inyección de fórmulas al abrir los CSV en hojas de cálculo; los valores numéricos, incluidas coordenadas negativas, conservan su formato.
- La exportación no añade datos nuevos ni convierte las coordenadas orientativas en ubicaciones operativas. Revisar siempre las fuentes y el período antes de utilizar los archivos en informes comerciales.

## Ficha de prospección territorial

La herramienta permite seleccionar una jurisdicción y descargar una ficha Markdown que reúne:
- Exportaciones provinciales de bienes, período y variación interanual del dataset OPEX.
- Nodos de infraestructura registrados para esa jurisdicción, con categoría, descripción y coordenadas de referencia.
- Enlaces a las fuentes estadísticas, fichas provinciales y referencias de cada nodo.

La ficha se genera en el navegador y no consulta servicios externos ni incorpora datos nuevos. Es un insumo preliminar de prospección, no una lista de empresas, un análisis de mercado completo ni una recomendación de inversión. El catálogo geográfico es selectivo y las coordenadas deben verificarse antes de cualquier uso operativo.

## Ecosistema de inteligencia

La interfaz presenta los seis módulos desde un único manifiesto: `data/ai-modules.json`. Federal Reports permanece en piloto funcional; Federal AI Assistant, Investment Finder, Territorial Monitor, Event Intelligence y Executive Travel AI permanecen planificados. Los estados, capacidades actuales, dependencias y próximos pasos se mantienen en ese archivo y no deben duplicarse como una segunda lista independiente en la interfaz.

Las funciones comprobables actuales son el mapa, el directorio de nodos, los perfiles OPEX, las noticias curadas y las exportaciones CSV/Markdown. `data/events.json` contiene únicamente el contrato de datos validado para Event Intelligence y no tiene eventos cargados; no existe una agenda integrada. El buscador no es un modelo de IA y la sección de módulos no implica integraciones en producción.

## Arquitectura

- `index.html`: interfaz y lógica cliente.
- `data/strategic-nodes.json`: catálogo geográfico.
- `data/news.json`: noticias curadas.
- `data/events.json`: contrato versionado de Event Intelligence; permanece vacío hasta disponer de eventos confirmados por sus organizadores.
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

- **Federal Reports:** piloto funcional. Genera una ficha Markdown descargable por jurisdicción con exportaciones OPEX anuales 2025, nodos territoriales, enlaces a fuentes y advertencias metodológicas. No utiliza un modelo de IA.
- **Federal AI Assistant, Investment Finder, Territorial Monitor, Event Intelligence y Executive Travel AI:** planificados. No deben ofrecerse como funciones disponibles hasta implementar y probar sus integraciones.

INDEC publicó el OPEX del primer semestre de 2026 el 2 de septiembre de 2026, con resultados regionales. Ese período parcial debe mantenerse separado del OPEX anual 2025 que alimenta las fichas provinciales. La página de INDEC anuncia el próximo informe anual 2026 para el 9 de marzo de 2027: [Origen provincial de las exportaciones](https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-2-79).

