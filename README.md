# Mapa Federal

**Inteligencia territorial para empresarios y ejecutivos.**

Plataforma web estática en evolución para explorar nodos territoriales argentinos, consultar referencias institucionales y organizar actualidad empresarial.

## Funcionalidades disponibles
- Mapa interactivo con Leaflet y cartografía OpenStreetMap.
- Filtros por tipo de nodo: ciudades, puertos, aeropuertos, pasos fronterizos e industria.
- Directorio de puntos de interés con búsqueda y enlaces de referencia.
- Sección editorial de noticias, alimentada desde `data/news.json`.
- Diseño adaptable y optimizado para GitHub Pages.

## Nodos y calidad de datos
El mapa contiene una selección inicial orientativa de nodos estratégicos. No es un registro oficial ni exhaustivo. Antes de usar un dato para una decisión comercial, verificar coordenadas, operación, servicios y vigencia con el organismo responsable. Los enlaces son puntos de partida de consulta y no certifican por sí solos cada atributo de la ficha.

## Cómo publicar una noticia
Editar `data/news.json` y agregar un objeto con esta estructura:

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

Categorías admitidas: Economía, Empresas, Comercio, Infraestructura, Regulación, Tecnología.

Criterio editorial:
1. Confirmar que la nota exista y que el enlace abra.
2. Registrar la fecha de publicación de la fuente, no la fecha de carga.
3. Distinguir hechos de interpretaciones.
4. No inventar cifras ni titulares.
5. Priorizar relevancia para empresas y ejecutivos argentinos.
6. No presentar contenido de prueba como actualidad periodística.

La carga estática no es una automatización de noticias. Para curación automática se necesita conectar un RSS/API permitido, respetar licencias y términos de uso y establecer revisión editorial.

## Arquitectura
- `index.html`: interfaz y lógica cliente.
- `data/news.json`: contenido editorial curado.
- Leaflet 1.9.4: visualización geográfica.
- OpenStreetMap: teselas, sujetas a disponibilidad y política de uso.

## Estado de inteligencia artificial
Las interfaces de IA están planificadas, no conectadas. No se afirma que el sitio disponga de modelos, datos en vivo, autenticación ni recomendaciones automatizadas.

## Publicación
GitHub Pages despliega el sitio estático desde la rama principal. Las funciones que requieran claves privadas, servidor o base de datos deberán implementarse mediante un backend y nunca exponer secretos en JavaScript público.
