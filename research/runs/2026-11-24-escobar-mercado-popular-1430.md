# Escobar — Mercado Popular: cronograma municipal por localidad

Fecha de consulta y verificación documental: 24/11/2026.

## Inspección previa

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama principal: `main`.
- HEAD inspeccionado antes del cambio: `231b74085d7674007b3efd22a4ffa640b932f9de`.
- Se revisaron metadatos del repositorio, ramas, commits recientes, PR abiertos, estructura de datos, perfil local, renderizador, pruebas y workflow de GitHub Pages.
- No había PR abiertos. Se conservaron las ramas existentes y no se modificaron.
- El último despliegue anterior observado, run `45447618781`, había terminado con éxito.

## Hallazgo documental

La Municipalidad de Escobar mantiene una página institucional del Mercado Popular que describe un mercado itinerante de venta directa y publica días, puntos de encuentro y franjas horarias para las siete localidades.

Fuente primaria:
- Municipalidad de Escobar — Mercado Popular de Escobar: https://www.escobar.gob.ar/municipio/mercado-popular/
- Fecha de publicación/actualización: no indicada por la página.
- Consulta: 24/11/2026.

El cronograma contiene 15 registros por día y punto de atención. Para 24 de Febrero, la página publica los martes de 09:00 a 14:00 en Pablo Marín e Islas Malvinas. La ficha municipal no acredita por sí sola que el puesto funcione efectivamente en cada fecha; no se realizó comprobación presencial.

## Cambio acumulativo

Se incorporó un registro `commercialPrograms` en `data/escobar-economic-profile.json` con:
- Cobertura de las siete localidades.
- 15 puntos/recorridos, con día, ubicación y horario publicado.
- Fuente municipal, fecha de consulta, vigencia y alcance de verificación.
- Fecha de publicación conservada como nula porque la fuente no la informa.
- Estado del listado: publicado en el directorio municipal.
- Estado de operación efectiva: no verificado.
- Sin coordenadas ni marcadores cartográficos para un recorrido itinerante.

Se actualizó `assets/escobar-profile.js` para mostrar el programa y un cronograma desplegable. Se amplió `tests/escobar-economic-profile.test.js` y se documentó el alcance en `README.md`.

## Validaciones y publicación

- JSON: parseado antes de crear el commit.
- Control interno: 15 registros, siete localidades y registro de 24 de Febrero comprobados.
- Commit: `bd5eae285df30e4b04a64604fe3315eef155eda1`.
- GitHub Actions run: `45450207453`.
- Job `validate`: success. Incluyó validación del perfil local, prueba económica de Escobar, pruebas de movilidad, infraestructura ferroviaria, transparencia, sintaxis JavaScript y validaciones generales.
- Job `deploy`: success. El paso `Deploy to GitHub Pages` terminó correctamente.
- Comprobación HTTP independiente del sitio publicado: no disponible en esta consulta; por eso no se afirma una verificación visual del renderizado en producción.

## Pendientes

- Confirmar con el Municipio la fecha de actualización y vigencia formal del cronograma.
- Verificar presencialmente o mediante confirmación institucional la operación efectiva de cada punto.
- No inferir coordenadas exactas a partir de intersecciones o nombres de barrios.
- Actualizar el registro si el Municipio modifica días, ubicaciones u horarios.

## Resultado

Se amplió la cobertura de comercio y abastecimiento del perfil económico de Escobar, con especial inclusión de 24 de Febrero, sin convertir un cronograma publicado en una garantía de operación.
