# Federal AI Assistant — evaluación e implementación gradual

Fecha de evaluación: 2026-11-22

## Decisión

La primera versión debe ser un asistente documental de alcance acotado. No debe rastrear la web por su cuenta, actualizar los catálogos ni ejecutar acciones externas. Debe responder únicamente con registros públicos ya publicados en este repositorio y mostrar las fuentes que respaldan cada respuesta.

## Qué aporta el archivo gemini-skills-main.zip

El archivo recibido contiene el repositorio `google-gemini/gemini-skills`, distribuido bajo Apache-2.0. Incluye guías para:
- `gemini-api-dev`: SDK Python `google-genai` y JavaScript/TypeScript `@google/genai`, Interactions API, salidas estructuradas y function calling.
- `gemini-api-cli`: uso de la API desde consola.
- `gemini-live-api-dev`: experiencias bidireccionales de audio/video en tiempo real.
- `gemini-omni-flash-api`: generación y edición audiovisual.

Para el primer asistente de Mapa Federal solo es relevante `gemini-api-dev`. Las otras skills añaden complejidad sin resolver la necesidad inicial.

## Advertencia de compatibilidad

El archivo de skills incluye identificadores de modelos y versiones de SDK que deben verificarse contra el catálogo y la documentación oficial vigente antes de programar. No se deben copiar a producción sin validación. Esta guía de terceros no reemplaza la documentación oficial ni garantiza disponibilidad, cuota o precio.

Documentación oficial:
- https://ai.google.dev/gemini-api/docs
- https://ai.google.dev/gemini-api/docs/pricing
- https://ai.google.dev/gemini-api/docs/api-key

## Arquitectura recomendada

### Etapa 0 — sin API, sin credenciales y sin costos de inferencia

Crear un buscador determinista que lea los JSON públicos del repositorio:
- `data/provincial-profiles.json`
- `data/strategic-nodes.json`
- `data/news.json`
- `data/investment-opportunities.json`
- `data/events.json`

El buscador puede filtrar por provincia, sector, período, tipo de registro y texto. Debe presentar enlaces a los registros y metadatos originales. No debe denominarse IA generativa.

### Etapa 1 — Gemini opcional

Cuando el propietario decida habilitar una clave:
1. Usar un Worker o backend pequeño con variable secreta `GEMINI_API_KEY`; nunca incluirla en JavaScript, HTML, archivos JSON públicos, commits ni logs.
2. Enviar al modelo solo los fragmentos recuperados del catálogo público, no toda la base ni datos personales.
3. Construir un contexto que exija citas por identificador de registro, URL, fuente, fecha, período y estado de verificación.
4. Si no hay evidencia suficiente, responder que no se encontró información verificable.
5. Validar la respuesta y las referencias en servidor antes de devolverla.
6. Limitar longitud, frecuencia y tamaño de contexto; establecer límites de uso y manejo de errores.
7. No activar Google Search grounding, Maps grounding, File Search ni agentes gestionados en el MVP: agregan costos, cuotas o alcance externo innecesario.

La cuota gratuita de Gemini depende del modelo, región, disponibilidad y límites vigentes. Google indica que en el nivel gratuito el contenido puede utilizarse para mejorar sus productos. No enviar información confidencial o sensible bajo ese nivel. Confirmar condiciones en la consola y documentación antes de habilitar el servicio.

## Identificadores estables para noticias

Cada registro de `data/news.json` debe incluir un `id` interno y determinista: `news-` seguido del host, la ruta y la consulta de la URL canónica de la fuente, normalizados a minúsculas y separados por guiones. La canonicalización elimina fragmentos y puertos HTTPS predeterminados. El identificador no es un ID asignado por el medio: sirve para enlazar fragmentos y validar citas dentro de Mapa Federal. Si cambia la URL de origen, debe recalcularse el ID y actualizarse cualquier referencia dependiente. CI comprueba que el ID coincida con la URL y que no haya duplicados.

## Flujo de respuesta

1. El usuario formula una pregunta.
2. El backend valida longitud y aplica límites de uso.
3. El recuperador localiza registros relevantes en los JSON versionados.
4. Si no hay registros suficientes, no se invoca el modelo y se informa la limitación.
5. Si el proveedor está habilitado, se envía la pregunta y el contexto mínimo.
6. El backend comprueba que las referencias citadas existan en los registros recuperados.
7. La interfaz presenta respuesta, fuentes, fechas, períodos y estados de verificación.

## Contrato mínimo de evidencia

Cada fragmento recuperado debe conservar, cuando estén disponibles en el registro original:
- identificador estable;
- título o descripción;
- URL de fuente;
- organismo/editor;
- fecha de publicación;
- período estadístico o de vigencia;
- fecha y alcance de verificación;
- jurisdicción;
- estado de verificación.

No completar campos faltantes por inferencia. No confundir fecha de publicación con período estadístico.

## Privacidad y retención

La guía de Gemini indica que las interacciones pueden almacenarse por defecto. Revisar los parámetros de almacenamiento y retención del endpoint elegido y las condiciones del nivel gratuito. Para consultas de Mapa Federal, evitar enviar datos personales; configurar almacenamiento mínimo cuando la API y el flujo lo permitan.

## Criterios de aceptación para habilitar el piloto

- Clave de proveedor guardada únicamente como secreto del backend.
- Ninguna clave presente en los assets públicos.
- Respuestas con referencias verificables al catálogo recuperado.
- Respuesta de abstención ante falta de evidencia.
- Límites de longitud, frecuencia y contexto.
- Pruebas para prompt injection en documentos, referencias inexistentes y datos incompletos.
- Registro de errores sin almacenar preguntas sensibles ni secretos.
- Estado de `federal-ai-assistant` actualizado solo después de desplegar y probar el backend real.

## Bloqueos antes de la etapa 1

- El propietario debe crear y custodiar la clave de Google AI Studio.
- Debe aceptar expresamente las condiciones de tratamiento de datos del nivel gratuito.
- Debe elegir el proveedor y aprobar el alojamiento del backend.
- Debe revisar cuotas y límites del modelo disponible en su cuenta.

Hasta resolver estos puntos, el módulo permanece `planned`. La etapa 0 puede desarrollarse sin credenciales y sin afirmar que existe IA generativa.
