# Escobar — conciliación documental del directorio de Centros de Desarrollo Infantil

- Fecha de verificación: 2026-11-25.
- Alcance: Partido de Escobar; directorio de primera infancia y fuente geográfica municipal.
- Estado de investigación: pendiente de conciliación.
- Cambio principal: incorporar al perfil las siete fichas nominales visibles en la Guía de oficinas, con una advertencia explícita sobre los conteos, las numeraciones y la geometría no recuperable.
- No se incorporan puntos ni polígonos.

## Fuentes primarias

1. [Guía de oficinas filtrada por CDI](https://www.escobar.gob.ar/municipio/oficinas/?q=cdi). Consultada el 25/11/2026; la página no informa fecha de publicación o edición. Enumera siete fichas con nombre, localidad, dirección y teléfono.
2. [Educación y deporte](https://www.escobar.gob.ar/municipio/educacion/). Consultada el 25/11/2026; informa nueve CDI y atribuye el dato a la revista de gestión 2026, sin fecha exacta de publicación.
3. [Trámite Tengo hijos/as](https://www.escobar.gob.ar/tramites/tengo-hijos/). Consultado el 25/11/2026; describe «Los 7 CDI municipales», sin fecha exacta de publicación.
4. [CONECTA — Presupuesto Participativo 2026](https://www.escobar.gob.ar/conecta/). Consultado el 25/11/2026; sus proyectos mencionan CDI Nº2 en Lambertuchi y Nº8 en La Chechela (Belén de Escobar), Nº6 en Villa Angélica (Garín) y Nº7 en Saavedra (Matheu). Son referencias de proyectos, no un directorio ni prueba de operación.
5. [Inscripción 2024 para los nueve CDI](https://www.escobar.gob.ar/abrio-la-inscripcion-2024-para-los-nueve-centros-de-desarrollo-infantil-del-partido-de-escobar/). Publicada el 23/10/2023. Enumera nueve centros para la inscripción 2024; menciona además obras de otros dos CDI en La Victoria y Los Pinos. Para Niño Jesús publica Víctor Hugo 285, frente a Víctor Hugo 265 en la guía consultada en 2026.
6. [Dataset municipal Centros de Desarrollo Infantil](https://datos.escobar.gob.ar/dataset/centros-de-desarrollo-infantil-del-partido-de-escobar). Consultado el 25/11/2026. Metadatos: creación 01/10/2025, actualización 31/03/2026, versión 1.0, licencia ODbL, GeoJSON anunciado de 4 KB. El recurso [cdis.geojson](https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/centros-de-desarrollo-infantil-del-partido-de-escobar/cdis.geojson) devolvió HTTP 404.

## Hallazgos y límites

- La Guía de oficinas y Tengo hijos/as coinciden en siete; Educación y deporte informa nueve.
- La guía actual lista siete centros en cinco localidades. No hay ficha visible para Loma Verde ni 24 de Febrero; no se infiere ausencia.
- La guía identifica CDI Nº7 como «7 de Mayo» en Matheu; CONECTA menciona CDI Nº7 en Saavedra y Nº8 en La Chechela. No se asume equivalencia ni se reasignan números.
- La noticia de 2023 incluye Beatriz Causillas de Moreyra y Rosario Vera Peñaloza, ausentes en la guía consultada en 2026. No se infiere cierre o traslado.
- La dirección de Niño Jesús difiere: 285 en la noticia de 2023 y 265 en la guía actual.
- La noticia de 2023 informó obras en La Victoria y Los Pinos; no se localizó en esta revisión una fuente posterior que confirme finalización o habilitación.
- La descarga GeoJSON no estuvo disponible; CRS, geometrías y correspondencia entre features y fichas no verificados. Sin marcadores.

## Archivos modificados

- `data/escobar-territory.json`
- `assets/foco-escobar.js`
- `tests/escobar-early-childhood.test.js`
- `.github/workflows/static.yml`
- `research/runs/2026-11-25-escobar-cdi-directory-reconciliation-0929.md`

## Validación y publicación

- JSON: parseado antes de preparar el commit.
- Prueba nueva: incorporada al workflow; ejecución pendiente.
- Commit: pendiente al momento de crear este registro.
- GitHub Actions y GitHub Pages: pendientes de ejecución.
- Inspección HTTP independiente de GitHub Pages: no disponible en esta ejecución de investigación.

## Evidencia necesaria para cerrar la conciliación

1. Nómina municipal vigente con identificación unívoca de los nueve CDI.
2. Confirmación documental del estado de los centros Beatriz Causillas de Moreyra y Rosario Vera Peñaloza.
3. Identificación y dirección de los CDI citados por CONECTA en La Chechela, Villa Angélica y Saavedra.
4. Resolución de la dirección de Niño Jesús.
5. Recuperación del GeoJSON, CRS, esquema de propiedades y relación entre geometrías y establecimientos.
