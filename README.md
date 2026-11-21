# Mapa Federal

**Inteligencia territorial para empresarios y ejecutivos.**

Plataforma web estática en evolución para explorar infraestructura, nodos territoriales argentinos y actualidad empresarial con trazabilidad de fuentes.

## Funcionalidades disponibles

- Mapa interactivo con Leaflet y cartografía de OpenStreetMap.
- Catálogo externo de 60 nodos estratégicos en `data/strategic-nodes.json`, con presencia en las 23 provincias y la Ciudad Autónoma de Buenos Aires, puntos de referencia y advertencias sobre coordenadas aproximadas.
- Filtros del mapa por categoría y provincia; búsqueda por varios términos sin depender de tildes.
- Buscador por nombre, provincia y tipo de nodo.
- Directorio tabular filtrable por provincia, con accesos que centran el mapa y fichas de cobertura basadas exclusivamente en los nodos registrados.
- Sección editorial alimentada por `data/news.json`, con filtros por tema y búsqueda.
- Diseño adaptable, navegación por anclas y avisos de estado.
- Validación automática de los archivos JSON antes de desplegar en GitHub Pages.

## Datos geográficos: alcance y calidad

El catálogo es una selección inicial, no un registro oficial exhaustivo. Las coordenadas se usan para visualización orientativa; no deben utilizarse para navegación, seguridad, planificación operativa ni decisiones de inversión sin una verificación adicional. Los enlaces de cada ficha documentan la entidad o la infraestructura, pero no necesariamente certifican la coordenada exacta, su estado operativo o la disponibilidad de servicios.

Para pasos fronterizos, consultar siempre el estado y los horarios vigentes en Migraciones y en los organismos responsables. Las condiciones pueden cambiar por clima, temporada y decisiones bilaterales.

### Ampliaciones incorporadas

La cobertura del catálogo alcanza ahora las 24 jurisdicciones argentinas y 60 nodos estratégicos. Se incorporaron referencias para Catamarca, Formosa, Entre Ríos, La Pampa y Tucumán, además de ampliar la infraestructura fluvial y fronteriza de Formosa y Entre Ríos. Las coordenadas de estos puntos son aproximadas y se deben verificar antes de cualquier uso operativo.


- Aeropuerto Internacional Gobernador Horacio Guzmán (Perico, Jujuy): ubicación y descripción institucional en [Argentina.gob.ar](https://www.argentina.gob.ar/transporte/obras-en-los-aeropuertos/aeropuerto-de-jujuy).
- Aeropuerto Domingo Faustino Sarmiento (Las Chacritas, San Juan): referencia institucional en [Argentina.gob.ar](https://www.argentina.gob.ar/node/118621).
- Parque de Actividades Económicas de Rafaela (PAER): descripción, infraestructura y localización general en [su sitio institucional](https://paer.rafaela.gob.ar/parque-actividades-economicas-rafaela/).

La interfaz permite filtrar el mapa y el directorio por tipo y provincia. La validación continua comprueba que las 24 jurisdicciones sigan representadas en el catálogo. La ficha provincial informa únicamente cuántos nodos del catálogo están registrados y qué tipos contiene; no debe interpretarse como un perfil socioeconómico ni como cobertura completa de la provincia.

### Fuentes institucionales de referencia

- [ANPYN — tarifarios y referencias de puertos](https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/tarifas-de-puertos).
- [Migraciones — pasos internacionales en funcionamiento](https://www.argentina.gob.ar/migraciones/pasos-internacionales).
- [Centros de frontera — Pino Hachado](https://www.argentina.gob.ar/interior/centros-de-frontera/pino-hachado), [Agua Negra](https://www.argentina.gob.ar/interior/centros-de-frontera/agua-negra) y [Pircas Negras](https://www.argentina.gob.ar/interior/centros-de-frontera/pircas-negras).
- [Puerto de Comodoro Rivadavia](https://puertocomodororivadavia.ar/), [Puerto San Antonio Este](https://www.patagonia-norte.com.ar/sae.html), [Terminal Zárate](https://www.terminalzarate.com.ar/) y [Consorcio Portuario Regional de Mar del Plata](https://puertomardelplata.net/).
- [Parque Industrial Pilar](https://www.parqueindustrialpilar.org.ar/contacto).
- [Neuquén Informa — infraestructura de Vaca Muerta y Añelo](https://www.neuqueninforma.gob.ar/noticias/2025/09/08/251191-vaca-muerta-provincia-y-operadoras-acordaron-construir-una-obra-vial-estrategica).
- [OpenStreetMap](https://www.openstreetmap.org/copyright) — cartografía base y atribución.


### Destinos turísticos y ejecutivos incorporados

Se añadieron cuatro nodos de tipo **Turismo** para ampliar la dimensión de destinos y servicios ejecutivos:

- [Puerto Iguazú](https://visitiguazu.travel/sin-categoria/informacion-de-interes/): destino Cataratas y Triple Frontera, con referencia del ente municipal de turismo.
- [Mendoza](https://www.argentina.gob.ar/node/444514): enoturismo, gastronomía, alojamiento y experiencias de naturaleza.
- [San Carlos de Bariloche](https://www.barilocheturismo.gob.ar/es/sobre-bariloche): oferta hotelera, gastronómica, de naturaleza y actividades durante todo el año.
- [El Calafate](https://turismo.santacruz.gob.ar/donde-ir/el-calafate): puerta de acceso al sector sur del Parque Nacional Los Glaciares.

Las coordenadas son puntos urbanos de referencia, no direcciones de hoteles ni validaciones de servicios. La oferta y conectividad deben confirmarse con los organismos y prestadores antes de planificar operaciones.

## Cómo actualizar el catálogo de nodos

Editar `data/strategic-nodes.json`. Cada entrada debe conservar esta estructura:

```json
{
  "name": "Nombre del nodo",
  "province": "Provincia",
  "type": "Puerto",
  "coords": [-34.60, -58.38],
  "note": "Descripción breve, precisa y no promocional.",
  "source": "https://fuente-institucional.example/"
}
```

- `coords` usa el orden latitud, longitud.
- Tipos usados: Ciudad, Puerto, Aeropuerto, Paso fronterizo, Logística, Industria y Turismo.
- Agregar una URL institucional o del administrador responsable.
- Identificar expresamente las coordenadas aproximadas y no inferir estado operativo.
- Evitar duplicados y revisar la provincia y la ubicación antes de publicar.

## Cómo publicar una noticia

Editar `data/news.json` y agregar un objeto:

```json
{
  "title": "Titular fiel a la fuente",
  "date": "2026-11-20",
  "category": "Economía",
  "summary": "Síntesis propia y breve basada en la nota original.",
  "source": "Nombre del medio u organismo",
  "url": "https://dominio-oficial-o-medio.example/noticia"
}
```

Categorías admitidas: Economía, Empresas, Comercio, Infraestructura, Regulación y Tecnología.

Criterio editorial:
1. Confirmar que la nota exista y que el enlace original abra.
2. Registrar la fecha de publicación de la fuente, no la fecha de carga.
3. Distinguir hechos de interpretaciones y mantener las cifras ligadas a su fuente.
4. No inventar cifras, titulares ni declaraciones.
5. Priorizar relevancia para empresas, inversión, comercio, infraestructura y actividad productiva argentina.
6. No presentar contenido de prueba como actualidad periodística.

Las noticias cargadas actualmente fueron contrastadas con publicaciones oficiales de INDEC, Presidencia de la Nación, INTI, INTA y organismos nacionales vinculados con producción y comercio. Entre las incorporaciones recientes figuran la ronda internacional de negocios de Argentina Alimenta y las herramientas del INTA para trazabilidad y diferenciación de productos cárnicos. La última curación de contenido de esta versión corresponde al 21 de noviembre de 2026. Se agregó la aprobación del proyecto Argentina LNG al RIGI, con cifras atribuidas a Reuters; la aprobación regulatoria no implica que el proyecto ya esté en operación. La sección es editorial y estática: no realiza scraping ni actualización automática. Para automatizar la curación se requiere integrar fuentes RSS/API permitidas, respetar licencias y términos de uso y establecer revisión editorial.

## Arquitectura

- `index.html`: interfaz y lógica cliente.
- `data/strategic-nodes.json`: catálogo geográfico.
- `data/news.json`: noticias curadas.
- Leaflet 1.9.4: visualización geográfica.
- OpenStreetMap: teselas, sujetas a disponibilidad y política de uso.
- `.github/workflows/static.yml`: validación de datos y despliegue.

## Estado de inteligencia artificial

Las interfaces de IA están planificadas, no conectadas. El buscador actual es una búsqueda local por texto y filtros; no es un modelo de IA. No se afirma que el sitio disponga de modelos, datos en vivo, autenticación ni recomendaciones automatizadas.

## Publicación y seguridad

GitHub Pages despliega el sitio estático desde la rama principal. Las funciones que requieran claves privadas, servidor, base de datos o integraciones protegidas deberán implementarse mediante un backend; nunca incluir secretos en JavaScript público.
