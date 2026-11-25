# Pavimentación de calle Salta — Garín, Villa Angélica

Fecha de revisión: 25/11/2026, 13:25 ART  
Ámbito: Partido de Escobar, Provincia de Buenos Aires  
Dominio: infraestructura pública, movilidad vial y peatonal, drenaje pluvial

## 1. Inspección previa del repositorio

- Rama: `main`; repositorio público `leandrocuellarok-netizen/mapafederal`.
- HEAD observado antes de la edición: `2a41c2104ff71337c9de15cba560e1d4d600af9c`.
- HEAD final de los cambios de datos y prueba: `7bbcc8b00ca0b23c327634fe3623bc6f60b518a7`.
- PR abiertos: ninguno.
- Se inspeccionaron los últimos commits, la rama principal, `data/investment-opportunities.json`, `tests/escobar-economic-profile.test.js`, `assets/foco-escobar.js` y `.github/workflows/static.yml`.
- Los commits inmediatamente anteriores de GBIE incorporaron información nacional y actualizaciones ejecutivas. No se modificaron ni revirtieron.
- El conector permite inspeccionar el HEAD remoto, pero no expone un working tree local; la edición se hizo sobre el árbol remoto confirmado y con actualización de referencia protegida por SHA esperado.

## 2. Fuentes primarias y hallazgo

### Fuente de avance — 7/10/2026

Municipalidad de Escobar, «Avanza la pavimentación de la calle Salta en el barrio Villa Angélica de Garín».  
URL canónica: https://www.escobar.gob.ar/noticias/avanza-la-pavimentacion-de-la-calle-salta-en-el-barrio-villa-angelica-/  
La publicación informa una obra de ARS 263 millones, realizada conjuntamente con el Ministerio de Infraestructura provincial. Describe 350 metros lineales entre Colectora Oeste de Panamericana e Islas Malvinas, 700 metros de veredas, zanjeo, cruces de caños peatonales y demarcación vial. Al 7/10, la base de suelo estabilizado estaba terminada y la carpeta asfáltica seguía en ejecución.

### Actualización institucional — 16/11/2026

Municipalidad de Escobar, «Sujarchuk y Katopodis visitaron importantes obras de infraestructura en Escobar».  
URL canónica: https://www.escobar.gob.ar/noticias/sujarchuk-y-katopodis-visitaron-importantes-obras-de-infraestructura-e/  
La publicación describe los trabajos de calle Salta como «en etapa final», mantiene la inversión informada de ARS 263 millones y confirma 350 metros lineales, 700 metros de veredas, demarcación vial, mejoras en el escurrimiento pluvial e instalación municipal complementaria de luminarias LED. Vincula la mejora con la circulación en Villa Angélica y el acceso de las familias que concurren a la Escuela Secundaria N.º 8.

Ambas fuentes son publicaciones institucionales municipales. La consulta del 25/11/2026 confirmó el contenido de las publicaciones, no el estado físico de la obra en esa fecha.

## 3. Decisión de clasificación

Se incorporó un registro `investment_project` municipal:

- ID: `escobar-pavimentacion-calle-salta-garin-2026`.
- Localidad: Garín.
- Referencia barrial: Villa Angélica, tal como la nombra la Municipalidad; no se infiere límite catastral.
- Etapa: `under_construction`, como estado atribuido a la publicación del 16/11/2026 («en etapa final»).
- Disponibilidad de oportunidad: `unknown`; la noticia no ofrece una convocatoria abierta a proveedores.
- Importe: ARS 263.000.000, atribuido a la Municipalidad. No se trata como adjudicación, certificación ni gasto ejecutado.
- No se agregaron coordenadas, puntos ni polígonos.

La descripción conserva el tramo, las veredas, la señalización, el drenaje, las luminarias y la vinculación con la Escuela Secundaria N.º 8. No se afirma que la obra haya sido recibida o finalizada después del 16/11.

## 4. Archivos y commits

Archivos modificados:
- `data/investment-opportunities.json`
- `tests/escobar-economic-profile.test.js`

Trazabilidad:
- `22c2ba457ccde666287fca034b88e75cbfe18379`: incorporación del registro de calle Salta.
- `7bbcc8b00ca0b23c327634fe3623bc6f60b518a7`: corrección de una aserción del test de procedencia.

El test comprueba localidad, tramo, superficies, inversión atribuida, estado de oportunidad desconocido, fecha de fuente, limitaciones y ausencia de coordenadas.

## 5. Validación y publicación

- Workflow #647, run ID 45654171470, commit `22c2ba457ccde666287fca034b88e75cbfe18379`: el job `validate` falló únicamente en una aserción de texto que esperaba la expresión «no equivale ... avance físico actual»; el texto correcto decía «no el avance físico actual». El job `deploy` fue omitido.
- Workflow #648, run ID 45654284142, commit `7bbcc8b00ca0b23c327634fe3623bc6f60b518a7`: job `validate` exitoso y job `deploy` exitoso. La prueba `Test Escobar economic profile and company evidence` pasó tras corregir la aserción.
- El workflow #646 anterior había pasado validación, pero GitHub Pages respondió HTTP 500 al crear el despliegue. El #648 completó posteriormente el despliegue.
- GitHub Pages: despliegue exitoso para el commit `7bbcc8b00ca0b23c327634fe3623bc6f60b518a7`.
- Comprobación HTTP independiente de la portada y de `/foco-escobar/`: no disponible; el navegador de consulta devolvió URL no accesible. No se afirma inspección visual.

## 6. Pendientes y evidencia necesaria

1. Publicación municipal posterior que confirme finalización, recepción o habilitación de la obra.
2. Expediente, contrato o acto de adjudicación que identifique contratista y monto contractual.
3. Certificados de avance y pagos, si se pretende informar gasto ejecutado.
4. No presentar el registro como oportunidad comercial abierta sin una convocatoria o procedimiento de contratación vigente.

La obra queda documentada como proyecto público con etapa reportada al 16/11/2026. No se extrapola el estado a una fecha posterior sin nueva evidencia.
