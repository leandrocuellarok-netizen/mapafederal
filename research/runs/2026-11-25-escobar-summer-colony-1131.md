# Colonia de Verano 2027 — registro documental de Escobar

Fecha de revisión: 25/11/2026, 11:31 ART  
Ámbito: Partido de Escobar, Provincia de Buenos Aires  
Dominio: cultura, deporte, recreación e inclusión

## 1. Inspección previa del repositorio

- Rama observada: `main`.
- HEAD antes de editar: `85d694d085ec60dde85d2275c03f8a57a1c79fea` — registro de validación y despliegue exitosos del ciclo anterior.
- Repositorio público: `leandrocuellarok-netizen/mapafederal`.
- Se revisaron los diez commits recientes, la rama principal, los PR abiertos (ninguno), `data/events.json`, `README.md`, `docs/intelligence-modules-roadmap.md`, `.github/workflows/static.yml` y los tests de Escobar.
- El workflow #629, sobre el HEAD anterior, terminó con los jobs `validate` y `deploy` exitosos. La inspección de working tree local no está disponible mediante el conector; se trabajó sobre el HEAD remoto confirmado.

## 2. Fuente y hallazgo

Fuente primaria: Municipalidad de Escobar.  
Publicación: 16/11/2026.  
Título: «Escobar abre la inscripción para la Colonia de Verano 2027 y anuncia los horarios de las piletas municipales».  
URL canónica: https://www.escobar.gob.ar/noticias/escobar-abre-la-inscripcion-para-la-colonia-de-verano-2027-y-anuncia-l/

La publicación anuncia una colonia gratuita del 04/01/2027 al 28/01/2027. Para chicos de 5 a 13 años y adolescentes de 14 a 17 años indica dos turnos (08:00–12:00 y 13:00–17:00) en todos los polideportivos municipales. La colonia para adultos mayores se anuncia de 09:00 a 12:00 en el Club Italiano, Loma Verde. Para personas con discapacidad de 5 a 13 años, la modalidad integrada se desarrolla en todos los polideportivos; para personas de 14 años en adelante, la sede anunciada es YMCAHUASI, España 177, Matheu.

La inscripción prioritaria para socios fue anunciada del 17/11 al 23/11/2026. La inscripción general para chicos y adolescentes fue anunciada del 24/11 al 04/12/2026, con preinscripción en Escobar 360, verificación biométrica y confirmación presencial en el polideportivo seleccionado. Para adultos mayores, la fuente indica inscripción presencial en cualquiera de las sedes deportivas; para ambas modalidades integradas, en el Polideportivo Luis Monti. El bono contribución de ARS 5.000 se describe como voluntario.

## 3. Alcance y límites de verificación

- Se abrió directamente el enlace canónico de la publicación municipal y se comprobaron el título, fecha 16/11/2026, modalidades, sedes, horarios, plazos y carácter voluntario del bono.
- El índice oficial de noticias también muestra el mismo título y fecha: https://www.escobar.gob.ar/noticias-columnas/.
- La apertura general anunciada (24/11–04/12) está dentro de su período al 25/11/2026.
- Una variante antigua de la URL, sin el segmento `/noticias/`, devolvió HTTP 403; no se interpreta como enlace roto porque el enlace canónico sí abrió correctamente.
- No se verificó el estado actual del formulario de Escobar 360, los cupos por sede, la disponibilidad individual ni una inscripción particular.
- La fuente no publica una nómina completa de todos los polideportivos ni cupos por establecimiento.
- La sede de inscripción Polideportivo Luis Monti se identifica en Belén de Escobar, Av. Tapia de Cruz 1280, mediante el directorio oficial Escobar 360 consultado el 25/11/2026. Esta fuente complementaria documenta la ubicación del establecimiento, no la disponibilidad del evento.
- No se añadieron puntos ni polígonos: las sedes y la cobertura general no equivalen a una geometría oficial de las instalaciones.

## 4. Cambio incorporado

Se agregó un único registro documental a `data/events.json`:

- ID: `colonia-verano-escobar-2027`.
- Estado del evento: `confirmed`, según el contrato Event Intelligence.
- Verificación: `verified`, con fecha y alcance explícitos.
- Inicio y fin: 04/01/2027–28/01/2027.
- Alcance: local; jurisdicción: Buenos Aires.
- Sin hora única, porque hay modalidades y turnos diferentes.
- Sin coordenadas ni afirmaciones de cupos disponibles.

Se actualizó la fecha y nota del catálogo. Se corrigieron los recuentos del README y la descripción desactualizada de la hoja de ruta. Se agregó un test específico y su ejecución al workflow de GitHub Actions. El catálogo sigue siendo documental; no es una agenda integrada ni un sistema de inscripción.

## 5. Archivos previstos

- `data/events.json`
- `tests/escobar-summer-colony.test.js`
- `.github/workflows/static.yml`
- `README.md`
- `docs/intelligence-modules-roadmap.md`
- Este registro de investigación.

## 6. Validación y publicación

- Workflow #630 (run ID 45635849312), commit `5dd963baafca88976d3a35e609d363633f357feb`: validación, test específico y despliegue de Pages exitosos.
- Workflow #631 (run ID 45636127088), commit `6653320a32e7a0324aaa1c0ffa8baf913a72c2d6`: validación y despliegue exitosos, incluida la prueba de ubicación de Luis Monti.
- Workflow #632 (run ID 45636590745), commit `d4e942e80b4e7f168550fdc62e0d601031af30af`: falló únicamente el test nuevo por una aserción que esperaba las palabras «enlace canónico» antes de «verificó directamente»; los datos y la URL canónica no fallaron. El despliegue fue omitido.
- Workflow #633 (run ID 45636669506), commit `98850aeec827f02a5c5fe1e9b479421e22c2ab05`: test corregido; job `validate` y job `deploy` finalizaron con success.
- La comprobación HTTP independiente de `https://leandrocuellarok-netizen.github.io/mapafederal/` no pudo completarse: el navegador no accedió y el entorno de red devolvió fallo DNS. No se afirma inspección visual.

## 7. Pendientes

1. Confirmar que el formulario de Escobar 360 sigue habilitado y cuáles son los requisitos actuales, sin realizar una inscripción.
2. Obtener el listado nominal de polideportivos y cupos por sede, si el Municipio los publica.
3. Mantener diferenciadas las actividades de colonia y el acceso estacional a piletas, que tienen requisitos y períodos propios.


## Actualización de procedencia geográfica — 25/11/2026

Se añadió como fuente complementaria el directorio oficial Escobar 360, que identifica el Polideportivo Luis Monti en Belén de Escobar y publica Av. Tapia de Cruz 1280. La dirección se incorpora como dato de ubicación del establecimiento; no se extrapola a cupos, funcionamiento de la colonia ni horarios del evento. El test específico ahora comprueba esta referencia y la segunda fuente oficial.


## Corrección de URL canónica — 25/11/2026

La publicación municipal fue abierta correctamente en su ruta canónica bajo `/noticias/`. Se reemplazó la variante anterior del enlace por la URL canónica, se ajustó el test y se actualizó el enlace de referencia en README. La respuesta HTTP 403 observada correspondía a la variante sin `/noticias/`, no al artículo canónico.


## Trazabilidad de commits

- `5dd963baafca88976d3a35e609d363633f357feb`: registro de evento, test específico, workflow y actualización documental.
- `6653320a32e7a0324aaa1c0ffa8baf913a72c2d6`: fuente oficial complementaria para la ubicación del Polideportivo Luis Monti.
- `d4e942e80b4e7f168550fdc62e0d601031af30af`: sustitución por la URL canónica de la publicación municipal.
- `98850aeec827f02a5c5fe1e9b479421e22c2ab05`: corrección de la aserción del test de procedencia.
