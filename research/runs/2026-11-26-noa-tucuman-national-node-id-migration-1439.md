# MAPA FEDERAL — NOA / Tucumán: migración de IDs y auditoría de geometrías

- Fecha y hora: 2026-11-26T14:40:39.162-03:00 (America/Argentina/Buenos_Aires).
- Jurisdicción priorizada: Tucumán, la menos cubierta del catálogo (1 nodo).
- Región de rotación: NOA.
- Categorías investigadas: Industria, Ciudad y Turismo.
- Resultado geográfico: no se incorporaron ni corrigieron puntos; faltó recuperar geometría exacta atribuible para los candidatos.
- Mejora principal: migración de identificadores estables en los 99 registros del catálogo nacional.

## 1. Mejora de integridad del catálogo

Antes de la ejecución, 14 de 99 nodos tenían `id` y 85 carecían de identificador estable. Se asignó a cada registro histórico faltante un ID determinista en `kebab-case`, derivado de provincia + tipo + nombre. Los 14 IDs existentes se preservaron.

- Registros totales: 99.
- IDs existentes preservados: 14.
- IDs nuevos asignados: 85.
- Cobertura final de IDs: 99/99.
- IDs únicos: 99/99.
- Coordenadas, nombres, jurisdicciones, categorías, notas, fuentes y demás campos: sin cambios.
- No se alteró el orden del catálogo.

La comparación del JSON antes/después, retirando el campo `id`, confirmó igualdad exacta de todos los demás campos.

## 2. Investigación geoespacial de Tucumán: candidatos no incorporados

### Industria

RIDES describe un servicio WFS de Actividades Industriales con información espacial sobre industrias, parques y actividad minera. El servicio ArcGIS oficial publica `Parques_Industriales` (layer ID 2), con geometría poligonal y EPSG:5345 (POSGAR 2007 / Argentina 3). El metadato enumera nueve denominaciones, entre ellas Parque Industrial Tucumán, Parque Industrial El Bracho, Parque Industrial San Isidro de Lules, Parque Industrial Kanamico y Parque Industrial Agropecuario y Tecnológico Famaillá.

No se recuperó la geometría de las entidades en la consulta REST y el endpoint WFS GetCapabilities no entregó contenido procesable desde el entorno. No se calculó centroide desde la extensión general de la capa ni se utilizó un nombre o domicilio como geocodificación. Sigue pendiente obtener la geometría de cada polígono, sus atributos y una fuente vigente para el estado de cada parque.

### Ciudad

IDET/Secretaría de Producción publica una capa `Localidad` (ID 0), con campos `Depto`, `Nombre` y `Fuente`; el servicio declara referencia espacial 22173. No se recuperó la geometría de la entidad San Miguel de Tucumán. No se usó centroide de localidad ni coordenada de referencia de la ciudad.

### Turismo

La Secretaría de Cultura de la Nación identifica el Museo Casa Histórica de la Independencia como Monumento Histórico Nacional y publica la dirección Congreso de Tucumán 141; una noticia oficial del 06/07/2026 confirma su actividad cultural. Las fuentes consultadas no aportan coordenadas o geometría del inmueble. No se geocodificó la dirección.

## 3. Cobertura y rotación

- Catálogo: 99 nodos; 24 jurisdicciones; 9 categorías.
- Tucumán: permanece con 1 nodo, un Aeropuerto.
- Brechas de Tucumán: Ciudad, Puerto, Logística, Industria, Recurso mineral, Turismo y Estación ferroviaria; Paso fronterizo no aplicable.
- Sin cambios en los conteos geográficos.
- Última región investigada: NOA.
- Próxima región: NEA.

## 4. Fuentes primarias consultadas

- IDET / Secretaría de Producción — servicio Tucumán MapServer: https://gis.producciontucuman.gob.ar/ArcGIS/rest/services/Tucuman/MapServer
- IDET — capa Localidad, layer 0: https://gis.producciontucuman.gob.ar/ArcGIS/rest/services/Tucuman/MapServer/0
- RIDES — servicios WFS: https://rides.producciontucuman.gob.ar/servicios-wfs/
- Secretaría de Producción — Actividades Industriales, MapServer: https://gis.producciontucuman.gob.ar/ArcGIS/rest/services/Actividades_Industriales_WMS/MapServer
- Secretaría de Producción — Parques_Industriales, layer 2: https://gis.producciontucuman.gob.ar/ArcGIS/rest/services/Actividades_Industriales_WMS/MapServer/2
- Cultura de la Nación — Museo Casa Histórica: https://www.argentina.gob.ar/capital-humano/cultura/monumentos/museo-casa-historica-de-la-independencia
- Argentina.gob.ar — actividad oficial del Museo Casa Histórica, 06/07/2026: https://www.argentina.gob.ar/noticias/el-dia-de-la-independencia-en-la-casa-historica-de-tucuman
- Georef — preguntas frecuentes y linaje de datos: https://www.argentina.gob.ar/georef/georef-servicio-de-normalizacion-de-direcciones-y-unidades-territoriales-de-argentina-6

## 5. Archivos, validación y publicación

- `data/strategic-nodes.json`: 85 IDs añadidos; 14 IDs preservados; sin otros cambios.
- `.github/workflows/static.yml`: el validador ahora exige ID válido y único en cada nodo, en vez de aceptar registros históricos sin ID.
- `README.md`: documenta la obligación de IDs estables para todos los registros y la regla de no regenerarlos.
- `research/national-map-coverage.json`: referencia de catálogo y rotación actualizadas; se detallaron los candidatos de Tucumán sin coordenadas suficientes.
- `index.html`: sin cambios; sigue consumiendo el mismo catálogo y filtros.

Commit principal de catálogo/validador/README: `fa89cd1e08fdea57e69b22b74daf0ba57cad0a55`.

GitHub Actions #811 (run ID 45869511904), sobre ese commit: validación aprobada; job de GitHub Pages aprobado y despliegue completado. URL: https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45869511904.

La inspección independiente de la portada pública fue intentada, pero el cliente web devolvió que la URL de GitHub Pages no era accesible. Se confirma el job de despliegue; no se afirma inspección visual independiente del mapa.

## 6. Próxima prioridad

NEA, comenzando por Formosa o Misiones según la matriz vigente. Priorizar una combinación provincia/categoría vacante y exigir la geometría o coordenada puntual de la fuente antes de insertar.

## 7. Incidencia de validación y corrección

GitHub Actions #812 (run ID 45869759176), sobre el commit `374ddbdc36352dd4fd5618ff59dab0171c72b056`, falló en `Validate geographic and editorial JSON`. La causa fue una aserción histórica que fijaba la rotación en `CABA → NOA`, aunque el propio validador ya comprobaba dinámicamente el orden regional y la matriz se había actualizado correctamente a `NOA → NEA`. No fallaron las comprobaciones de IDs, JSON ni coordenadas; el despliegue de Pages fue omitido por la dependencia del job.

Se eliminó la aserción duplicada y obsoleta. La prueba dinámica existente sigue verificando que `nextTarget` sea la región siguiente a `lastTargeted` según el orden declarado. La validación y el despliegue del commit correctivo quedan sujetos a la nueva ejecución de Actions.
