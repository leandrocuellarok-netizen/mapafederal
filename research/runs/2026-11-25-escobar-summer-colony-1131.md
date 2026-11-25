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
URL: https://www.escobar.gob.ar/escobar-abre-la-inscripcion-para-la-colonia-de-verano-2027-y-anuncia-los-horarios-de-las-piletas-municipales/

La publicación anuncia una colonia gratuita del 04/01/2027 al 28/01/2027. Para chicos de 5 a 13 años y adolescentes de 14 a 17 años indica dos turnos (08:00–12:00 y 13:00–17:00) en todos los polideportivos municipales. La colonia para adultos mayores se anuncia de 09:00 a 12:00 en el Club Italiano, Loma Verde. Para personas con discapacidad de 5 a 13 años, la modalidad integrada se desarrolla en todos los polideportivos; para personas de 14 años en adelante, la sede anunciada es YMCAHUASI, España 177, Matheu.

La inscripción prioritaria para socios fue anunciada del 17/11 al 23/11/2026. La inscripción general para chicos y adolescentes fue anunciada del 24/11 al 04/12/2026, con preinscripción en Escobar 360, verificación biométrica y confirmación presencial en el polideportivo seleccionado. Para adultos mayores, la fuente indica inscripción presencial en cualquiera de las sedes deportivas; para ambas modalidades integradas, en el Polideportivo Luis Monti. El bono contribución de ARS 5.000 se describe como voluntario.

## 3. Alcance y límites de verificación

- El resultado indexado de la publicación municipal contiene el texto y la fecha 16/11/2026.
- El índice oficial de noticias también muestra el mismo título y fecha: https://www.escobar.gob.ar/noticias-columnas/
- La apertura general anunciada (24/11–04/12) está dentro de su período al 25/11/2026.
- La consulta directa del artículo devolvió HTTP 403. Se trata de una restricción de acceso del sitio al navegador de verificación, no de una prueba de enlace roto.
- No se verificó el estado actual del formulario de Escobar 360, los cupos por sede, la disponibilidad individual ni una inscripción particular.
- La fuente no publica una nómina completa de todos los polideportivos ni cupos por establecimiento.
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

- El test específico y el workflow global se ejecutarán después del commit.
- El resultado de GitHub Actions y el despliegue de Pages se consignarán una vez observados.
- La comprobación HTTP independiente del sitio publicado se intentará por separado; un job de Pages exitoso no equivale a inspección visual independiente.

## 7. Pendientes

1. Confirmar que el formulario de Escobar 360 sigue habilitado y cuáles son los requisitos actuales, sin realizar una inscripción.
2. Obtener el listado nominal de polideportivos y cupos por sede, si el Municipio los publica.
3. Mantener diferenciadas las actividades de colonia y el acceso estacional a piletas, que tienen requisitos y períodos propios.
