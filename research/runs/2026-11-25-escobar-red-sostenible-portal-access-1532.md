# Escobar — verificación del acceso público a Red Sostenible para el Desarrollo

Fecha de consulta: 25/11/2026, 15:32–15:36 (Argentina)  
Ámbito: Partido de Escobar; la convocatoria no asigna una localidad específica.  
Dominio: economía productiva / gestión ambiental / convocatoria pública.

## 1. Inspección previa del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`; rama `main`.
- HEAD inspeccionado al inicio: `42eb310d5e32acdb2ac0c9f293edce3aef3cfea6`, registro de validación y despliegue del ciclo 15:04.
- Se inspeccionaron los commits recientes, `data/investment-opportunities.json`, `data/events.json`, `data/escobar-territory.json`, `data/news.json`, la prueba `tests/escobar-economic-profile.test.js` y `.github/workflows/static.yml`.
- Se observaron cambios concurrentes previos de GBIE en oportunidades, noticias, pruebas y documentación. Se conservaron sin alterarlos.
- PR abiertos: ninguno.
- La API permite inspeccionar la rama y los archivos remotos, pero no expone un working tree local; no se afirma que exista una copia local limpia.
- Última ejecución anterior al cambio: Actions #664, commit `42eb310d5e32acdb2ac0c9f293edce3aef3cfea6`, validación y Pages exitosos.

## 2. Hallazgo y cambio principal

La convocatoria municipal Red Sostenible para el Desarrollo ya existía en Investment Finder. No se creó un duplicado ni se amplió su vigencia.

La ficha oficial indica que la adhesión solicita razón social, CUIT/CUIL, nombre y DNI de la persona referente, teléfono y correo, mediante declaración jurada. La aceptación requiere revisión municipal; después se abona la Etapa 1, cuyo importe no está publicado.

En la portada pública de Escobar 360 consultada el 25/11/2026 aparece un acceso destacado a «#Escobar Sostenible - Red Sostenible para el Desarrollo». El botón «Solicitar adhesión» de la ficha municipal abre el contenedor institucional de Escobar 360. La portada confirma que el servicio está listado públicamente, pero no permite verificar el formulario individual, autenticación, recepción de solicitudes ni aceptación. No se envió ni completó ningún formulario.

Se mantuvo `opportunityStatus: open` porque la convocatoria municipal fija el 30/12/2026 como fecha límite. Ese estado representa el plazo documental publicado, no confirma que un formulario individual funcione ni que una organización reúna los requisitos.

La ficha municipal también menciona una «ventaja en licitaciones municipales», pero no detalla mecanismo, ponderación ni efecto jurídico. No se presenta como adjudicación preferencial.

## 3. Fuentes y alcance de verificación

1. Municipalidad de Escobar, convocatoria «Escobar abrió la convocatoria para que empresas y comercios midan, reduzcan y compensen su huella de carbono», publicada el 10/11/2026:  
   https://www.escobar.gob.ar/noticias/escobar-abrio-la-convocatoria-para-que-empresas-y-comercios-midan-redu/

2. Municipalidad de Escobar, ficha «Red Sostenible para el Desarrollo», sin fecha de publicación indicada:  
   https://www.escobar.gob.ar/municipio/sostenible/redsostenible/  
   Se verificaron la Ordenanza 18498/25, destinatarios, cuatro etapas y diez pasos, datos requeridos para la adhesión, revisión municipal, abono de la Etapa 1, participación de la UNGS, alternativas de compensación FORESE/proyecto propio y reconocimientos S/S+/S++.

3. Escobar 360, portada pública consultada el 25/11/2026:  
   https://www.escobar360.escobar.gob.ar/  
   Se observó el acceso público a Red Sostenible. La ficha individual no quedó expuesta en la vista consultada; no se infiere que el formulario acepte solicitudes.

## 4. Archivos y commit

Archivos modificados en el cambio principal:
- `data/investment-opportunities.json`: se amplió la descripción con los datos requeridos para adherir, se añadió Escobar 360 como fuente relacionada y se documentó el alcance real de la verificación.
- `tests/escobar-economic-profile.test.js`: se añadieron aserciones sobre la nueva fuente, los campos declarados y la limitación del formulario.

Commit principal: `6df9a3f9faa88f341cae09b7b7f9284612cf303c`.

## 5. Pruebas, Actions y despliegue

- Workflow #665: https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45676624345
- SHA validado: `6df9a3f9faa88f341cae09b7b7f9284612cf303c`.
- Job `validate`: éxito. Incluyó la prueba `Test Escobar economic profile and company evidence`, validación de JSON, fuentes de licitaciones, filtros, exportaciones y control de entrada pública.
- Job `deploy`: éxito. GitHub Pages completó la publicación.
- Comprobación HTTP independiente de `/foco-escobar/`: no disponible desde el entorno de consulta; la herramienta web no pudo abrir la URL. El éxito del job de Pages no se presenta como inspección visual independiente.

## 6. Discrepancias y pendientes

- La convocatoria informa solicitudes hasta el 30/12/2026 e incorporación prevista para el primer trimestre de 2027.
- El portal público muestra el acceso al programa, pero no se verificó el formulario individual ni la recepción de solicitudes.
- No se publica el importe de la Etapa 1.
- No se detalla el alcance jurídico de la «ventaja en licitaciones municipales».
- No se confirmó elegibilidad de una organización particular ni se realizó ninguna adhesión.
- No se agregaron coordenadas ni marcadores: la convocatoria alcanza al Partido de Escobar y no identifica una sede física.

Próxima evidencia necesaria: formulario individual accesible, requisitos completos de admisión, importe de la Etapa 1 y normativa o criterio escrito que precise la ventaja mencionada para licitaciones.
