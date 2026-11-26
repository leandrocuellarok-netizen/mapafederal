# MAPA FEDERAL — Escobar: adhesión comercial al Circuito de Beneficios Turísticos

Fecha de revisión: 25/11/2026, 22:25 ART  
Jurisdicción: Partido de Escobar, Buenos Aires, Argentina  
Dominio: economía productiva, comercio local y turismo  
Mejora principal: documentar una invitación municipal vigente para que comercios locales soliciten incorporarse al Circuito de Beneficios Turísticos y mostrar sus canales oficiales de adhesión en Foco Escobar.

## 1. Inspección del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama principal: `main`.
- HEAD al inicio de la inspección: `8cc290a2520172207e2c39f7f544f0e29f58e524`.
- HEAD inmediatamente antes de la escritura: `e57d23dc1834c8d90acf00fbc1e87ef8c24fe51d`.
- Entre ambas inspecciones se incorporaron cuatro commits ajenos a este trabajo: `01401cbe` (nuevo catálogo Radar Norte), `1e839510` (reemplazo de la página Radar IA por Radar Norte), `eac0e07d` (ajuste de enlaces y rótulos de Radar Norte en la portada) y `e57d23dc` (redirección de la URL heredada Radar IA hacia Radar Norte). Se revisaron sus diffs y se conservaron sin cambios.
- Último commit específico de Escobar antes de esta ejecución: `8cc290a2520172207e2c39f7f544f0e29f58e524`, dataset turístico.
- Pull requests abiertos: ninguno en la consulta.
- La rama `automation/escobar-flood-detection-2026-11-25` no contiene commits exclusivos y está 137 commits detrás de `main`; no se modificó.
- El conector permite inspección remota de GitHub, pero no expone un working tree local. No se afirma haber inspeccionado un árbol de trabajo local.
- Se revisaron `README.md`, `data/escobar-territory.json`, `data/escobar-economic-profile.json`, `assets/foco-escobar.js`, `tests/escobar-economic-profile.test.js` y `.github/workflows/static.yml`.
- Workflow previo #721, run ID `45730292448`, sobre HEAD `8cc290a2520172207e2c39f7f544f0e29f58e524`: `validate=success` y `deploy=success`.

## 2. Fuente primaria y hallazgo

Página oficial: https://www.escobar.gob.ar/circuito-de-beneficios/

La página, atribuida a la Secretaría de Producción y Turismo de la Municipalidad, indica que quienes presenten una entrada del Teatro Seminari/Cine Italia, la Granja Educativa Don Benito o el Jardín Japonés pueden acceder a descuentos y promociones en comercios adheridos. En la misma página, el Municipio invita explícitamente a comercios a sumarse y publica los correos:

- secretariaproduccion@escobar.gob.ar
- turismo@escobar.gob.ar

La página no indica fecha editorial, fecha límite de adhesión, requisitos de elegibilidad ni un formulario público.

Noticia municipal complementaria, publicada el 08/07/2026:
https://www.escobar.gob.ar/una-entrada-muchos-beneficios-comercios-de-escobar-ofrecen-descuentos-a-quienes-visiten-atractivos-turisticos-municipales/

La noticia confirma la invitación a comercios y publica los teléfonos 11 3726-1259 y 11 3536-6096. También explica que la vigencia de cada promoción depende del comercio adherido.

## 3. Alcance y cautelas

- Se documenta una invitación pública de adhesión, no una garantía de aceptación ni una convocatoria con plazo.
- No se envió correo, mensaje ni solicitud; no se contactó a la Secretaría.
- No se atribuyen requisitos, costos, exclusividad ni beneficios fiscales que la fuente no publica.
- Las promociones individuales tienen vigencias distintas. La página muestra ofertas con plazos vencidos y otras con plazos hasta fin de año; no se presenta el conjunto de descuentos como íntegramente vigente.
- El índice visible de la página mostró un snapshot de comercios en Belén de Escobar, Ingeniero Maschwitz y Loma Verde, pero la extracción directa no expuso un listado completo y estructurado. No se importaron nombres ni conteos ni se infirió ausencia de comercios en las otras localidades.

## 4. Cambio realizado

Se añadió el programa `circuito-beneficios-turisticos` a `commercialPrograms` en `data/escobar-economic-profile.json`, separando el estado del circuito publicado del estado de la invitación a adherir, los canales institucionales, los requisitos y el plazo no especificados, la fuente municipal principal y la noticia complementaria fechada.

Se amplió el renderizador de programas comerciales en `assets/foco-escobar.js` para mostrar información de adhesión, contactos, fuentes complementarias y cronogramas solo cuando existan. El programa Mercado Popular conserva su cronograma y su estado operativo pendiente de verificación.

Se agregaron aserciones al test económico existente para comprobar la invitación, los canales de contacto, la ausencia de fecha límite y la ausencia de un cronograma inventado.

## 5. Archivos modificados

- `data/escobar-economic-profile.json`
- `assets/foco-escobar.js`
- `tests/escobar-economic-profile.test.js`
- `research/runs/2026-11-25-escobar-tourism-benefits-circuit-business-access-2225.md`

## 6. Validación y publicación

- La validación focalizada está incorporada en `tests/escobar-economic-profile.test.js`, ejecutado por el workflow existente.
- No se ejecutó un entorno Node local desde el conector.
- Workflow previo #721: `validate=success`, `deploy=success`.
- El nuevo commit dispara el workflow de GitHub Actions en `main`; sus resultados se inspeccionarán después del commit.
- La comprobación HTTP independiente de Foco Escobar no estuvo disponible en esta consulta; el acceso mediante el navegador devolvió un error de herramienta, no un HTTP status confirmado del sitio.

## 7. Fuentes y fechas

1. Municipalidad de Escobar — Secretaría de Producción y Turismo, «Circuito de Beneficios Turísticos». Fecha editorial no indicada; página consultada el 25/11/2026. Alcance: mecánica de beneficios e invitación a sumar comercios.
2. Municipalidad de Escobar, «Una entrada, muchos beneficios: comercios de Escobar ofrecen descuentos a quienes visiten atractivos turísticos municipales», 08/07/2026. Alcance: convocatoria, teléfonos, correos y vigencia individual de promociones.
3. GitHub Actions #721, run ID `45730292448`, commit `8cc290a2520172207e2c39f7f544f0e29f58e524`. Alcance: validación y despliegue previos.

Principio aplicado: registrar una invitación comercial realmente publicada y mantener separados el programa, la adhesión anunciada y la aceptación efectiva de nuevos comercios.
