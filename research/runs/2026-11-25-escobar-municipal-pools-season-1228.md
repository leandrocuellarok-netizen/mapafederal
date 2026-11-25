# Registro de investigación — temporada de piletas municipales 2027

- Fecha de ejecución: 2026-11-25, 12:28 ART.
- Alcance: Partido de Escobar; servicios recreativos y deportivos municipales.
- Rama: `main`.
- HEAD inspeccionado al inicio: `a153319976d915a41afd73698008128331ec4e1b`.
- Último commit específico de Escobar antes de este ciclo: `87b24730c8e47a46ae087ccc6d5ed011ca282001`.
- PR abiertos al inicio: ninguno. El conector de GitHub no expuso un árbol de trabajo local; la revisión se hizo sobre la rama remota.
- Cambios concurrentes observados: commits GBIE posteriores al último registro de Escobar, sin cambios sobre `data/events.json` ni sobre la prueba de la colonia.

## Hallazgo y decisión

La publicación municipal del 16/11/2026 contiene dos servicios distintos: la Colonia de Verano (04–28/01/2027) y la habilitación de piletas municipales durante dos períodos con horarios diferentes. Se creó un registro de evento separado para las piletas para no confundir el calendario de la colonia con el de acceso a natatorios.

Fuente primaria:
- Municipalidad de Escobar, “Escobar abre la inscripción para la Colonia de Verano 2027 y anuncia los horarios de las piletas municipales”.
- Publicación: 2026-11-16.
- Consulta directa: 2026-11-25.
- URL canónica: https://www.escobar.gob.ar/noticias/escobar-abre-la-inscripcion-para-la-colonia-de-verano-2027-y-anuncia-l/

Hechos atribuidos a la publicación:
- Del 04/01/2027 al 28/01/2027: lunes a viernes 17:30–20:00; sábados 12:00–20:00; domingos 10:00–20:00.
- Del 01/02/2027 al 28/02/2027: lunes a sábados 12:00–20:00; domingos 10:00–20:00.
- La publicación indica cupos limitados y exige ser socio de un polideportivo municipal y tener al día la verificación biométrica en Escobar 360.
- Anuncia clases de natación de 12:00 a 14:00, con días a informar próximamente.
- No consigna horarios para el 29–31/01/2027; este registro no interpreta ese silencio como cierre.

Geografía: Partido de Escobar. La fuente no individualiza cada pileta, no publica sus direcciones ni las asigna a localidades. No se agregaron coordenadas ni marcadores.

Estado epistemológico: cronograma anunciado por fuente municipal y verificado documentalmente; no equivale a comprobación de apertura efectiva, cupos disponibles por sede ni clases de natación programadas.

## Cambios realizados

- `data/events.json`: nuevo registro `piletas-municipales-escobar-temporada-2027`; el catálogo pasa de cinco a seis registros documentales (dos completados y cuatro futuros confirmados).
- `tests/escobar-summer-colony.test.js`: assertions para fechas, dos períodos, horarios, condiciones de acceso, fuente y ausencia de georreferencias.
- `README.md`: actualización del conteo del catálogo.
- `docs/intelligence-modules-roadmap.md`: actualización de fecha y conteo de Event Intelligence.

Commits:
- Incorporación de datos, prueba y documentación: `a238bfc6b9579129254a6cd3526e003c5d136fa9`.
- Corrección de escapes en tres expresiones regulares de fechas: `3dcdab9080280b743e986f4ecfdecbad56f36132`.

## Pruebas y publicación

- Workflow #641, run ID `45646336662`, commit `a238bfc6b9579129254a6cd3526e003c5d136fa9`: falló únicamente en la prueba de Event Intelligence por escapes duplicados en expresiones regulares; el log de Node informó `SyntaxError: Invalid regular expression flags`. Los controles previos de Escobar pasaron. No fue un fallo del dato fuente.
- Workflow #642, run ID `45646484192`, commit `3dcdab9080280b743e986f4ecfdecbad56f36132`: `validate=success` y `deploy=success`. La validación completa, incluida la prueba de eventos, pasó.
- GitHub Pages informó despliegue exitoso. El job registró como URL del entorno: https://leandrocuellarok-netizen.github.io/mapafederal/
- Comprobación HTTP independiente de Foco Escobar: no completada; el entorno de consulta devolvió fallo de resolución DNS. El éxito del job de Pages no se presenta como inspección visual independiente.
- Este registro se incorpora después del workflow #642; su propio commit tendrá una ejecución de validación separada.

## Pendientes

1. Obtener una nómina oficial de piletas municipales con dirección y localidad.
2. Confirmar cupos por sede y condiciones operativas vigentes antes de la temporada.
3. Incorporar los días de clases de natación cuando el Municipio los publique.
4. No georreferenciar hasta contar con una dirección o geometría oficial verificable.
