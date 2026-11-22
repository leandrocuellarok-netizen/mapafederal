# Hoja de ruta del ecosistema de inteligencia

Actualizada: 21 de noviembre de 2026.

## Estado real

El estado de cada módulo está versionado en `data/ai-modules.json` y se presenta en la sección "Ecosistema de inteligencia". La interfaz lee ese archivo; no duplica estados dentro del HTML.

| Módulo | Estado | Capacidad comprobable |
|---|---|---|
| Federal AI Assistant | Planificado | No consulta un modelo. Requiere modelo y backend. |
| Investment Finder | Planificado | Hay nodos territoriales y OPEX, pero no un inventario validado de oportunidades. |
| Territorial Monitor | Planificado | Las noticias se cargan manualmente; no hay monitoreo RSS/API. |
| Event Intelligence | Planificado | No existe agenda integrada de eventos verificados. |
| Federal Reports | Piloto funcional | Genera una ficha Markdown por jurisdicción con OPEX anual 2025, nodos y enlaces a fuentes. No usa IA. |
| Executive Travel AI | Planificado | Hay destinos de referencia, pero no disponibilidad, reservas ni recomendaciones en vivo. |

## Secuencia de implementación

### Fase 1 — Federal Reports (piloto operativo)
- Mantener período, unidad, fecha de publicación y fuente junto a cada indicador.
- Añadir comparativas de dos o más jurisdicciones sin mezclar períodos.
- Incorporar un resumen ejecutivo que distinga observaciones descriptivas de inferencias.
- Exportar Markdown y CSV con referencias a las fuentes.
- No etiquetar el piloto como informe generado por IA.

Fuentes iniciales:
- [INDEC — OPEX anual 2025](https://www.indec.gob.ar/uploads/informesdeprensa/opex_03_26929F77A2CA.pdf), publicado el 10/03/2026.
- [Ministerio de Economía — Panel de Indicadores Provinciales](https://www.argentina.gob.ar/economia/politicaeconomica/informes-productivos-0/informes-provinciales/panel-de-indicadores-provinciales).

INDEC también publica OPEX del primer semestre 2026 (02/09/2026), con variaciones regionales. Ese corte semestral debe mantenerse como una serie separada, no combinarse con los datos anuales 2025. La página oficial informa que el próximo OPEX anual 2026 está programado para el 09/03/2027:
- [INDEC — Origen provincial de las exportaciones](https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-2-79).

### Fase 2 — Investment Finder
1. Diseñar un esquema de proyectos y oportunidades: identificador, nombre, sector, jurisdicción, ubicación, etapa, monto si está publicado, fecha de vigencia, organismo responsable, fuente y estado de verificación.
2. Incorporar primero datos oficiales públicos y programas de promoción que permitan reutilización.
3. No derivar "oportunidades" únicamente de exportaciones o presencia de infraestructura.
4. No publicar recomendaciones de inversión automáticas sin criterios y revisión.

### Fase 3 — Territorial Monitor
1. Seleccionar fuentes RSS/API de organismos públicos y entidades sectoriales.
2. Registrar fuente, fecha de publicación, fecha de consulta, URL canónica y jurisdicciones/sectores mencionados.
3. Deduplicar por URL canónica y similitud de titular.
4. Mantener revisión editorial antes de publicar noticias.
5. Respetar licencias, condiciones de uso y límites de frecuencia.

### Fase 4 — Event Intelligence
1. Fuentes oficiales de organizadores, cámaras, parques industriales y recintos.
2. Campos obligatorios: nombre, fecha/hora y zona horaria, sede, organizador, sector, URL oficial y fecha de última verificación.
3. Estados: confirmado, reprogramado, cancelado, finalizado.
4. Excluir eventos vencidos de recomendaciones futuras.

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
