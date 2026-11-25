# Escobar — conciliación documental de la Reserva Natural Educativa

Fecha de verificación: 25/11/2026, 05:28 (Argentina)  
Ámbito: Ingeniero Maschwitz, Partido de Escobar  
Dominio: ambiente, áreas protegidas, normativa y cartografía

## Estado del repositorio al inicio

- Rama principal: `main`; HEAD observado: `784c903ca4b6bf575ccd60e1d4a34548a66eb989`.
- Repositorio público; no se encontraron PR abiertos.
- El conector permitió inspeccionar archivos de GitHub, commits, workflow y ejecuciones; no expuso un working tree local.
- El workflow `.github/workflows/static.yml` valida y luego despliega Pages desde `main`.
- Último despliegue exitoso observado antes de esta actualización: run #565, commit `98834ef851886c67b8873369dede6a28b45f971c`; ambos jobs, `validate` y `deploy`, finalizaron correctamente.
- El run #569, sobre HEAD `784c903ca4b6bf575ccd60e1d4a34548a66eb989`, falló en la prueba nacional de Investment Finder: la búsqueda `boletin oficial` no devolvió los dos registros esperados. El job `deploy` quedó omitido. El run #568 presenta el mismo fallo. No se modificó esa lógica porque queda fuera del alcance Escobar.

## Fuentes consultadas

1. Municipalidad de Escobar, ficha actual «Reserva Natural Educativa». Sin fecha de publicación indicada; consultada el 25/11/2026. Publica 23 ha, Sucre 1550 (PES), horario de 9 a 17 h, entrada gratuita y Ordenanza 5767/19. No publica días de visita.  
   https://www.escobar.gob.ar/municipio/sostenible/reserva-natural-educativa/

2. Estudio de Impacto Ambiental «Saneamiento Pluvial Cuenca Baja Arroyo Bedoya — Etapa I», enero de 2022, alojado por el Ministerio de Ambiente bonaerense. Anexo I, página 151: la matriz legal reproduce una síntesis de la Ordenanza 5767/19 y consigna 230.000 m², Partido 118 (Escobar), Circunscripción IV, parcela 426a, desde el límite norte (Arroyo Escobar). No es el texto íntegro de la ordenanza ni un plano parcelario.  
   https://www.ambiente.gba.gob.ar/ParticipacionCiudadana/EIA_SANEAMIENTO%20PLUVIAL%20CUENCA%20BAJA%20ARROYO%20BEDOYA.pdf

3. Comité de Cuenca del Río Luján (ComiLu), Ministerio de Infraestructura y Servicios Públicos de la Provincia de Buenos Aires, «Términos de referencia — Áreas Naturales Protegidas en la cuenca del río Luján», julio de 2024. Tabla 1, página 5: consigna 42,124 ha para la Reserva Natural Educativa Ing. Maschwitz y la Ordenanza 5767/19. El documento no explica el método de medición ni delimita el polígono.  
   https://normas.gba.gob.ar/anexos/descargar/Y0ZrO10L.pdf

4. Municipalidad de Escobar, «Boletín de noticias» de Escobar Sostenible. La propia página aclara que las notas son de un boletín anterior, sin fecha, y que los horarios pueden haber cambiado. La ficha incluida señala miércoles a domingos, de 9 a 17 h.  
   https://www.escobar.gob.ar/municipio/sostenible/agenda-verde/

5. Municipalidad de Escobar, ficha municipal anterior «Reserva Municipal Ing. Maschwitz». La búsqueda indexada indica martes a domingos, de 9 a 17 h; la consulta directa no permitió abrir la página. No se la toma como calendario vigente.  
   https://www.escobar.gob.ar/reserva-municipal-ing-maschwitz/

## Hallazgos y límites

- Hay dos cifras atribuidas a la misma reserva: 23 ha (230.000 m²) en la ficha municipal y en la síntesis de la Ordenanza 5767/19 reproducida por el EIA de 2022; y 42,124 ha en el TDR ComiLu de julio de 2024.
- La diferencia no está explicada. No se presume que una cifra sea correcta ni se infiere que la segunda sea un área de amortiguación o un polígono distinto.
- La referencia catastral 426a y el Arroyo Escobar como límite norte se incorporan como cita documental atribuida al resumen de la ordenanza en el EIA; no equivalen a una geometría catastral validada.
- No se obtuvo el texto íntegro de la Ordenanza 5767/19 ni el plano oficial de mensura.
- La ficha municipal actual publica 9–17 h pero no especifica días. Dos páginas municipales antiguas discrepan entre martes-domingo y miércoles-domingo. No se fija calendario vigente ni apertura en tiempo real.
- El GeoJSON municipal de reservas había devuelto 404 y el recurso Shapefile no pudo inspeccionarse por limitación de tipo MIME. No se obtuvo CRS ni geometría; no se dibujó ni transformó ninguna capa.

## Mejora principal

Se documentó el contraste de superficies, la referencia catastral citada y la discrepancia de días. El perfil muestra las dos superficies como afirmaciones atribuidas, enlaza las fuentes y advierte que ninguna cifra debe usarse como límite cartográfico. La capa de reservas permanece `pendiente` y la operación de la reserva `no verificada`.

## Archivos modificados

- `data/escobar-territory.json`
- `assets/foco-escobar.js`
- `tests/escobar-transparency.test.js`
- Este registro de investigación.

## Pruebas y publicación

- No se ejecutó un working tree local desde esta conexión.
- Se agregaron aserciones específicas para ambas superficies, la nomenclatura catastral, las discrepancias de días y el renderizado de las fuentes.
- Workflow #570: la validación de Escobar llegó a la prueba de transparencia y falló por una diferencia textual: el nuevo resumen decía «ni confirma apertura» mientras una aserción existente exigía «no confirma apertura». Se corrigió la redacción sin alterar el estado de operación. Las pruebas Escobar anteriores a ese punto finalizaron correctamente; los pasos posteriores quedaron omitidos por la falla.
- Verificación HTTP independiente de GitHub Pages: el sitio no pudo abrirse desde el entorno de consulta; no se afirma una comprobación visual.

## Evidencia necesaria para resolver

1. Texto íntegro y plano anexo de la Ordenanza 5767/19.
2. Polígono oficial con CRS declarado, metadatos y parcela catastral de origen.
3. Aclaración institucional de por qué el TDR ComiLu consigna 42,124 ha frente a los 230.000 m² citados por la norma.
4. Calendario de visita vigente publicado por el Municipio.
