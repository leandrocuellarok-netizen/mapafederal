# Escobar — corrección de regresión de validación CI

- Fecha de revisión: 2026-11-25, 10:27 ART.
- Alcance: calidad de validación del módulo Escobar y su pipeline de publicación.
- Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.
- HEAD inspeccionado: `a17ba90d74804f4e03cab5aab1e0dde90bbb3c25`.
- Estado del working tree local: no expuesto por la conexión GitHub; no se afirma una inspección local.
- Pull requests abiertos: ninguno observado.

## Cambios concurrentes desde el último ciclo de Escobar

Después del commit CDI `e9d0da07094109068851009dc7d79e01afb814b2`, los procesos GBIE actualizaron `data/news.json` y `data/investment-opportunities.json`, además de sus registros de investigación y documentación. El informe GBIE 09:56 confirma que el dataset territorial de Escobar no fue modificado en ese ciclo. Se preservaron esos cambios.

## Hallazgo y mejora principal

El workflow #619 (`45619948546`), asociado al HEAD anterior, falló en el paso `Test Escobar economic profile and company evidence`, línea 186 de `tests/escobar-economic-profile.test.js`. La prueba todavía exigía que la regla BIS 2026-23999 no fijara una fecha efectiva, pero el registro editorial vigente ya indicaba vigencia desde el 23/11/2026. El job `deploy` quedó omitido.

Se corrigió únicamente esa aserción para que compruebe la fecha documentada, manteniendo los controles sobre las siete entidades, la jurisdicción no especificada y la URL de la fuente. No se modificó `data/news.json`, ningún otro registro editorial ni ningún dataset territorial.

## Evidencia primaria consultada

1. [Federal Register — Additions to the Entity List, FR Doc. 2026-23999](https://www.federalregister.gov/public-inspection/2026-23999/additions-to-the-entity-list), publicado el 25/11/2026. La página publicada indica vigencia desde el 23/11/2026 y enumera siete entidades en Malasia, Singapur y Tailandia.
2. [PDF de inspección pública](https://public-inspection.federalregister.gov/2026-23999.pdf). El pie del documento registra presentación el 23/11/2026 a las 16:15 y publicación programada para el 25/11/2026. La copia previa conservaba marcadores de fecha en el cuerpo; la página publicada ya muestra la fecha efectiva.
3. La página FederalRegister.gov advierte que su representación HTML es informativa y que el PDF de govinfo constituye la edición electrónica oficial. Se conserva esa limitación; la verificación de este ciclo se usa para corregir la coherencia de la prueba, no para incorporar una nueva noticia.

## Hallazgo local adicional, no incorporado en este ciclo

La Municipalidad publicó el 16/11/2026 la convocatoria a la Colonia de Verano 2027. La inscripción general se extiende del 24/11 al 04/12/2026; la colonia está prevista del 04/01 al 28/01/2027 y las piletas del 04/01 al 28/02/2027. La fuente identifica actividades en polideportivos municipales, Club Italiano en Loma Verde y Club de Amigos YMCAHUASI en Matheu. Se reserva su incorporación a un ciclo posterior para mantener una sola mejora principal en esta ejecución y evitar presentarla como agenda integrada.

Fuente: [Municipalidad de Escobar — Colonia de Verano 2027](https://www.escobar.gob.ar/noticias/escobar-abre-la-inscripcion-para-la-colonia-de-verano-2027-y-anuncia-l/).

## Archivos y validación

- Archivo modificado: `tests/escobar-economic-profile.test.js`.
- Archivo de registro: este informe.
- Prueba local: no ejecutada; no hay working tree local disponible.
- Workflow de validación del commit: pendiente al momento de crear este registro.
- GitHub Pages: pendiente; no se afirma despliegue hasta observar el job correspondiente.
- Verificación HTTP independiente de la página publicada: pendiente.

## Límites y siguiente paso

La corrección no cambia la noticia BIS ni amplía el alcance territorial. El siguiente trabajo de datos para Escobar puede incorporar la Colonia de Verano 2027 como evento documental confirmado, con el plazo de inscripción y las sedes expresamente atribuidas a la fuente municipal. No debe describirse como agenda integrada ni como confirmación de cupos.

## Resultado observado de CI después de la corrección

- Commit de la corrección y del registro inicial: `9df1a34344dbad06b97a65a048d17dd49fec189f`.
- Workflow #620: [run 45624602855](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45624602855).
- Los pasos de perfil local de Escobar, perfil económico, movilidad, ferrocarril, transparencia, salud y directorio CDI finalizaron correctamente. En particular, `Test Escobar economic profile and company evidence` pasó después de corregir la aserción obsoleta.
- El job `validate` volvió a fallar en el paso 17, `Validate geographic and editorial JSON`, por un ID no determinista en la noticia BIS 2026-23999 de `data/news.json`. El job `deploy` quedó omitido.
- No se corrigió ese registro editorial porque queda fuera del alcance exclusivo de Escobar. No se alteraron `data/news.json` ni otros catálogos nacionales.
- Último despliegue exitoso observado: workflow #613, sobre el commit `e9d0da07094109068851009dc7d79e01afb814b2`; no incluye la corrección de este ciclo.
- La inspección HTTP independiente del sitio publicado no pudo completarse en este entorno.

## Segunda ejecución del workflow

- Workflow #621: [run 45624720087](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45624720087), sobre el commit `3a25de2025584543b27011eb667eb862e3c14d25`.
- Los pasos de validación específicos de Escobar volvieron a pasar. El mismo control general falló por el mismo ID no determinista de la noticia BIS en `data/news.json`; `deploy` quedó omitido.
- La corrección de este ciclo permanece limitada al test y a su registro. El bloqueo editorial global requiere un ajuste fuera de este alcance y no se modificó.
