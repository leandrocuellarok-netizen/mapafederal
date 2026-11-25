# Escobar — verificación de la convocatoria Red Sostenible para el Desarrollo

Fecha de consulta: 25/11/2026, 02:30 (Argentina)  
Ámbito: Partido de Escobar; la fuente municipal no asigna una localidad específica.

## Estado del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`
- Rama: `main`
- HEAD inspeccionado antes del cambio: `587327f9e96b1fd32ccd018622033e52b0ee55c6`
- Working tree local: no disponible en esta ejecución remota; se comprobó la referencia de GitHub y se usó una actualización atómica condicionada al SHA anterior.
- Pull requests recientes: los PR #2–#5 consultados están cerrados y fusionados.
- Último workflow observado antes del cambio: #553, validación y despliegue exitosos para el HEAD inspeccionado.

## Hallazgo principal

La convocatoria municipal «Red Sostenible para el Desarrollo» sigue dentro del plazo publicado: solicitudes hasta el 30/12/2026 e incorporación prevista para el primer trimestre de 2027. Está dirigida a empresas, industrias, comercios, hoteles, emprendimientos y otras organizaciones del Partido de Escobar. Los requisitos publicados son pertenecer al partido, realizar la capacitación virtual y trabajar activamente por la sostenibilidad.

El programa propone medición de huella de carbono mediante universidades y metodología ISO, determinación de Créditos Equivalentes Sostenibles (CES) y acceso al Sello S++ al completar el proceso. La comunicación municipal no anuncia subsidios, transferencias ni un monto de financiamiento.

## Fuentes consultadas

1. Municipalidad de Escobar, «Escobar abrió la convocatoria para que empresas y comercios midan, reduzcan y compensen su huella de carbono», publicada el 10/11/2026:  
   https://www.escobar.gob.ar/escobar-abrio-la-convocatoria-para-que-empresas-y-comercios-midan-reduzcan-y-compensen-su-huella-de-carbono/  
   Verificación: destinatarios, condiciones, metodología general, CES, Sello S++, fecha límite e incorporación prevista.

2. Escobar 360°, portada institucional:  
   https://www.escobar360.gob.ar/  
   Verificación: la portada lista «#Escobar Sostenible - Red Sostenible para el Desarrollo». El acceso visible inspeccionado abre una imagen institucional; no se pudo verificar desde la vista pública consultada un formulario o trámite de inscripción. La fecha de publicación de la portada no está indicada.

## Cambio realizado

- Se actualizó `verification.checkedAt` a `2026-11-25`.
- Se precisó en `verification.scope` que la convocatoria continúa abierta según el plazo publicado, pero la ruta efectiva de postulación no quedó verificada.
- Se conservó `stage=announced`, `opportunityStatus=open`, `validUntil=2026-12-30` y `amount=null`.
- No se agregó punto al mapa: la fuente solo identifica el Partido, no una dirección o geometría de instalación.
- No se creó una noticia duplicada; el registro ya existe en Investment Finder.

## Archivos modificados

- `data/investment-opportunities.json`
- `tests/escobar-economic-profile.test.js`
- `research/runs/2026-11-25-escobar-red-sostenible-verification-0230.md`

## Validación y publicación

- Commit de datos, prueba y registro: `7efdb1f9c4acb3d8618c4feda7b3016bf2516cb5`.
- Workflow #554: https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45554271142 — validación completada con éxito; el job `validate` y todos sus pasos finalizaron correctamente, incluido `Test Escobar economic profile and company evidence`.
- El job `deploy` y el paso `Deploy to GitHub Pages` finalizaron correctamente. GitHub Actions informa publicación exitosa.
- Comprobación HTTP independiente: no completada. La apertura web y `curl` no pudieron resolver `leandrocuellarok-netizen.github.io` (error DNS); por tanto, no se confirma desde este entorno la lectura del recurso ya publicado.
- La validación JSON local previa al commit y las pruebas específicas añadidas quedaron cubiertas además por la ejecución completa de CI.

## Incertidumbres y siguiente evidencia necesaria

- Encontrar el formulario directo de inscripción o una ficha de trámite accesible.
- Confirmar requisitos completos, documentación solicitada, cupos y condiciones de admisión si están publicados.
- No inferir financiamiento ni aceptación de postulaciones.
