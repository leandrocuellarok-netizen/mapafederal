# Escobar — precisión de trazabilidad ambiental del proyecto portuario

Fecha de verificación: 24/11/2026.

## Inspección previa
- Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.
- HEAD antes de los cambios: `405d7a72de4338ff8dda8b05e48a0e599d059b78`.
- Se revisaron los commits recientes, los datasets de Escobar, el renderer local, Investment Finder, las pruebas y el workflow.
- La ejecución `45434697349` sobre el commit `405d7a72` había completado validación y deploy de GitHub Pages con éxito.

## Hallazgo documental
Las dos fichas del Ministerio de Ambiente de la Provincia de Buenos Aires muestran como tipo de trámite «Declaración de Impacto Ambiental», pero sus aclaratorias específicas indican que los Estudios de Impacto Ambiental se presentaron como anteproyectos y reciben tratamiento de **prefactibilidad**. La pre-evaluación no equivale a una DIA ni a autorización de obra. Si la factibilidad se define, debe presentarse nueva documentación ambiental y abrirse otra instancia de participación pública antes de una eventual DIA.

- Puerto multipropósito: participación pública del 10/11/2025 al 10/12/2025.
- Puerto cerealero: participación pública del 30/10/2025 al 29/11/2025.

Las páginas consultadas no indican una fecha de publicación propia. Por eso, las fechas de inicio de participación no se registran como `sourcePublishedAt`; se guardan en `participationPeriod`. La fecha de publicación queda nula y acompañada por una nota explícita.

## Fuentes primarias
- Ministerio de Ambiente PBA, Puerto Multipropósito Escobar: https://participacionpublica.ambiente.gba.gob.ar/participacion/resumen/PUERTO-MULTIPROP%C3%93SITO-ESCOBAR
- Ministerio de Ambiente PBA, Puerto Cerealero Escobar: https://participacionpublica.ambiente.gba.gob.ar/participacion/resumen/PUERTO-CEREALERO-ESCOBAR
- Municipalidad de Escobar, anuncio del 27/12/2024: https://www.escobar.gob.ar/anuncian-oficialmente-la-construccion-de-un-nuevo-puerto-exportador-en-escobar/

## Cambios de esta ejecución
- Separación explícita entre fecha de publicación no informada y período de participación pública.
- Metadatos por expediente: organismo, URL, período, estado pendiente, fecha y alcance de verificación.
- Investment Finder etiqueta la etapa como «Prefactibilidad ambiental» sin cambiar el código de etapa filtrable.
- Las dos interfaces muestran enlaces y trazabilidad de los expedientes.
- Se conserva el estado general del proyecto como anunciado; no se afirma DIA, inicio de obra, inversión desembolsada, empleos realizados ni participación de capital disponible.

## Validaciones
- JSON parseado antes de crear los blobs.
- Pruebas ampliadas para impedir que el inicio de participación se confunda con fecha de publicación y para exigir prefactibilidad, período y verificación por expediente.
- GitHub Actions debe ejecutar las pruebas en el commit resultante; no se anticipa éxito de CI ni de Pages.
