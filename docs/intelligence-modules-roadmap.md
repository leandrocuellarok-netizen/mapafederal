# Hoja de ruta del ecosistema de inteligencia

Actualizada: 22 de noviembre de 2026.

## Estado real

El estado de cada módulo está versionado en `data/ai-modules.json` y se presenta en la sección "Ecosistema de inteligencia". La interfaz lee ese archivo; no duplica estados dentro del HTML.

| Módulo | Estado | Capacidad comprobable |
|---|---|---|
| Federal AI Assistant | Planificado | No consulta un modelo. Requiere modelo y backend. |
| Investment Finder | Planificado | Una interfaz documental de solo lectura con filtros por texto, sector, alcance, jurisdicción y estado; un registro nacional del RIMI con fuente normativa verificada. La disponibilidad del trámite y la elegibilidad permanecen desconocidas; no hay recomendaciones ni evaluación de solicitantes. |
| Territorial Monitor | Planificado | Las noticias se cargan manualmente; no hay monitoreo RSS/API. |
| Event Intelligence | Planificado | No existe agenda integrada de eventos verificados. |
| Federal Reports | Piloto funcional | Genera fichas Markdown por jurisdicción y compara dos jurisdicciones con los tres indicadores homogéneos del OPEX anual 2025, mostrando fuente y verificación. No usa IA. |
| Executive Travel AI | Planificado | Hay destinos de referencia, pero no disponibilidad, reservas ni recomendaciones en vivo. |

## Secuencia de implementación

### Fase 1 — Federal Reports (piloto operativo)
- Mantener período, unidad, fecha de publicación y fuente junto a cada indicador.
- Exponer en cada ficha la fecha, el estado y el alcance de la verificación de la fuente estadística; la verificación del OPEX no certifica los nodos geográficos ni las fichas provinciales complementarias.
- Incorporado un comparador descriptivo de dos jurisdicciones para exportaciones, variación interanual y participación nacional del mismo OPEX anual 2025; diferencia calculada como jurisdicción A menos B. No mezclar períodos ni presentar el resultado como ranking de inversión.
- Ampliar la comparación a otros indicadores solo cuando período, unidad, cobertura y metodología sean homogéneos para las 24 jurisdicciones.
- Incorporar un resumen ejecutivo que distinga observaciones descriptivas de inferencias.
- Exportar Markdown y CSV con referencias a las fuentes.
- En las fichas Markdown y CSV, separar explícitamente el período estadístico OPEX del año de edición de las fichas provinciales complementarias. El año del título de una ficha no debe interpretarse como período de todos sus indicadores; cada indicador debe contrastarse con su período publicado.
- No etiquetar el piloto como informe generado por IA.

Fuentes iniciales:
- [INDEC — OPEX anual 2025](https://www.indec.gob.ar/uploads/informesdeprensa/opex_03_26929F77A2CA.pdf), publicado el 10/03/2026.
- [Ministerio de Economía — Panel de Indicadores Provinciales](https://www.argentina.gob.ar/economia/politicaeconomica/informes-productivos-0/informes-provinciales/panel-de-indicadores-provinciales).

INDEC también publica OPEX del primer semestre 2026 (02/09/2026), con variaciones regionales. Ese corte semestral debe mantenerse como una serie separada, no combinarse con los datos anuales 2025. La página oficial informa que el próximo OPEX anual 2026 está programado para el 09/03/2027:
- [INDEC — Origen provincial de las exportaciones](https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-2-79).

### Fase 2 — Investment Finder
1. El esquema 2 está versionado en `data/investment-opportunities.json` y se consulta desde una interfaz pública de solo lectura, con filtros locales por texto, sector, alcance, jurisdicción, etapa y estado. Incluye un registro documental nacional del RIMI para bienes de alta eficiencia energética; la fuente normativa está verificada, pero `opportunityStatus` se mantiene `unknown` porque no se confirmó la operatividad del trámite SGI ni la elegibilidad de solicitantes. No representa una convocatoria abierta ni ofrece recomendaciones.
2. Cada registro requiere identificador, nombre, tipo de registro, alcance (`national` o `provincial`), sector, etapa, estado de oportunidad, vigencia, fuente HTTPS, fecha de publicación, período (o `null`) y estado/fecha/alcance de verificación. Para alcance nacional, `jurisdiction` debe ser `null`; para alcance provincial, debe corresponder a una de las 24 jurisdicciones admitidas. La ubicación y el monto son opcionales; el monto solo se incorpora si la fuente lo publica, se conserva su base y moneda y el valor es numérico, finito y no negativo; la moneda debe expresarse con tres letras ASCII mayúsculas (forma de código ISO 4217, sin afirmar que se valida contra el catálogo completo de códigos). La validación rechaza infinitos, monedas con caracteres no ASCII y otros valores monetarios no válidos.
3. Una oportunidad solo puede figurar como abierta si la fuente está verificada, la vigencia comenzó y no terminó, y el proyecto no está completado ni cancelado.
4. Incorporar primero datos oficiales públicos y programas de promoción que permitan reutilización.

Fuentes del registro semilla RIMI (publicadas el 04/11/2026):
- [Boletín Oficial — Resolución SE 311/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/350021/20261104): aprueba el listado de bienes de alta eficiencia energética y establece su vigencia desde la publicación.
- [Argentina.gob.ar — incentivos RIMI para eficiencia energética](https://www.argentina.gob.ar/noticias/el-gobierno-nacional-amplia-los-incentivos-del-rimi-para-que-las-pymes-inviertan-en): resumen institucional de los bienes y criterios técnicos.
- [Resolución General Conjunta 5849/2026](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-5849-2026-425917/texto): documenta el procedimiento y la referencia al Sistema de Gestión de Inversiones que ARCA debía implementar. Su disponibilidad operativa no se confirmó en esta revisión; por eso el estado de oportunidad no se marca como abierto.
5. No derivar "oportunidades" únicamente de exportaciones o presencia de infraestructura.
6. No publicar recomendaciones de inversión automáticas sin criterios y revisión.

### Fase 3 — Territorial Monitor
1. Seleccionar fuentes RSS/API de organismos públicos y entidades sectoriales.
2. Registrar fuente, fecha de publicación, fecha de consulta, URL canónica y jurisdicciones/sectores mencionados.
3. Deduplicar por URL canónica: host y esquema sin distinción de mayúsculas, puerto HTTPS predeterminado y ruta raíz normalizados, fragmentos excluidos y parámetros de consulta preservados. Rechazar URLs con credenciales.
4. Mantener revisión editorial antes de publicar noticias.
5. Respetar licencias, condiciones de uso y límites de frecuencia.
6. En cada noticia conservar `period` (o `null` si la fuente no informa uno), estado de verificación, fecha de revisión y alcance; la revisión editorial no equivale a monitoreo en tiempo real.

### Fase 4 — Event Intelligence
1. El contrato inicial está versionado en `data/events.json`; el catálogo permanece vacío y no representa una agenda activa.
2. Seleccionar fuentes oficiales de organizadores, cámaras, parques industriales y recintos, comprobando permisos de reutilización y condiciones de uso antes de automatizar la ingesta.
3. Cada registro debe conservar identificador, nombre, fecha de inicio y fin, hora local si está publicada, zona horaria IANA, alcance, jurisdicción cuando corresponda, sede, organizador, sector, nombre y URL de la fuente oficial, fecha de publicación de la fuente, período (o `null` si no está informado), estado del evento y estado/fecha/alcance de verificación.
4. Los estados del evento son `confirmed`, `rescheduled`, `cancelled` y `completed`. Los eventos confirmados o reprogramados solo se admiten si la fuente oficial está verificada; los registros desactualizados no deben presentarse como próximos. Un evento marcado como completado no puede tener una fecha de finalización futura.
5. La validación rechaza fechas incoherentes, zonas horarias no reconocidas, jurisdicciones inválidas, URLs que no sean HTTPS y registros sin trazabilidad.
6. No publicar eventos no verificados ni inferir fechas, sedes o disponibilidad a partir de anuncios incompletos.

### Fase 5 — Executive Travel AI
1. Separar destinos de referencia de servicios reservables.
2. Obtener horarios, conectividad, disponibilidad y servicios desde proveedores autorizados.
3. Mostrar fuente y hora de consulta de información dinámica.
4. No simular disponibilidad ni reservas.

### Fase 6 — Federal AI Assistant
1. Elegir modelo y proveedor después de definir presupuesto, privacidad y volumen esperado.
2. Ejecutar el modelo desde un backend; nunca exponer claves en el JavaScript público.
3. Usar recuperación documental (RAG) sobre fuentes del proyecto con citas.
4. Restringir respuestas a evidencia disponible y admitir explícitamente "no hay datos".
5. Incorporar límites de uso, telemetría mínima, controles de seguridad y evaluación de calidad.

## Arquitectura recomendada

- Frontend estático: presentación, filtros y visualizaciones.
- Datos editoriales versionados: JSON con esquema y validaciones.
- Ingesta programada: GitHub Actions para descargar fuentes públicas permitidas, validar cambios y abrir un PR; no publicar automáticamente registros no revisados.
- Backend futuro: secretos, autenticación, modelo IA, API privada y almacenamiento.
- Trazabilidad: fuente, fecha de publicación, fecha de consulta, período estadístico, licencia y estado de verificación.

## Reglas de calidad

- Nunca mezclar un dato anual con un semestre o mes como si fueran comparables.
- No inferir PBG, empleo, rentabilidad ni tamaño de mercado a partir de exportaciones.
- Cada registro dinámico debe llevar fuente y fecha.
- Si una fuente deja de estar disponible, marcar el dato como no verificado; no inventar reemplazos.
- Los módulos solo pasan a "Piloto funcional" cuando existe una prueba reproducible; pasan a "Operativo" cuando cubren sus criterios de aceptación.
