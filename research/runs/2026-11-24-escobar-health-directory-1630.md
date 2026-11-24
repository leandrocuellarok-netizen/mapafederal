# Escobar — actualización del directorio sanitario y conciliación de fuentes

Fecha de corte: 24/11/2026, 16:30 (America/Argentina/Buenos_Aires).  
Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.

## 1. Inspección previa del repositorio

- HEAD inicial: `c526d1935ca96456be980fc87493c10e9ae7390c`, registro del ciclo GBIE de las 16:00.
- Se inspeccionaron los commits recientes, `data/escobar-territory.json`, el directorio sanitario, el renderizador `assets/escobar-profile.js`, las pruebas `tests/escobar-health-facilities.test.js`, el README y el workflow `.github/workflows/static.yml`.
- No se encontraron pull requests abiertos.
- La ejecución anterior de GitHub Actions, run `45467055387`, había finalizado correctamente.
- No se dispuso de un árbol de trabajo local; la inspección se realizó sobre la rama remota `main`.

## 2. Fuentes primarias consultadas

Todas las páginas consultadas pertenecen a la Municipalidad de Escobar. Ninguna informa fecha de publicación o edición; se conserva esa ausencia y no se inventa una fecha.

1. [Centros de salud](https://www.escobar.gob.ar/municipio/centros-de-salud/). Informa un total distrital de 8 hospitales, 4 UDP y 18 CAPS. En Belén de Escobar incluye el Hospital de Salud Mental y Adicciones Papa Francisco, en Pellegrini y Dr. Travi, y la UDP Dr. Carlos Guevara, en Cervantes 635.
2. [Cartilla de discapacidad y desarrollo](https://www.escobar.gob.ar/municipio/cartilla-de-discapacidad-y-desarrollo/). Para el Hospital Papa Francisco publica evaluaciones neurocognitivas a través del área de psicopedagogía, en casos de necesidad específica; lunes a viernes de 8 a 18; teléfono 3484 430-544.
3. [Guardias y emergencias](https://www.escobar.gob.ar/municipio/guardias/). Publica 11 fichas de guardia distribuidas en seis localidades. Ubica el CAPS Juan Carlos Selles en B° 24 de Febrero, Garín, con teléfono 11 2150-0302. Ubica el Hospital Dr. Horacio López en Bv. Presidente Perón 156.
4. [Guardias y farmacias](https://www.escobar.gob.ar/municipio/guardias-y-farmacias/). Una ficha anterior incluye la UDP Dr. Carlos Guevara con guardia clínica y pediátrica de 24 horas, pero no informa fecha de edición.
5. [Teléfonos útiles](https://www.escobar.gob.ar/municipio/telefonos-utiles/). Ubica el CAPS Juan Carlos Selles en Fonavi, Garín, y publica el teléfono (0348) 449-3444. Para el Hospital Horacio López indica Bv. Presidente Perón 240 y 11 2150-0371.
6. [Prestaciones IOMA](https://www.escobar.gob.ar/municipio/prestaciones-ioma/). Coincide con B° 24 de Febrero y 11 2150-0302 para el CAPS Selles. La página muestra dos alturas para el Hospital Horacio López en secciones distintas: 156 en la lista de guardias y 240 en la sección de hospitales.
7. [Prestaciones PAMI](https://www.escobar.gob.ar/municipio/prestaciones-pami/). Coincide con B° 24 de Febrero y 11 2150-0302 para Selles; para Horacio López indica Bv. Presidente Perón 240 y 11 2150-0371.

## 3. Mejora principal

Se actualizó el directorio sanitario con dos registros nominales y se trasladó una discrepancia pendiente a la ficha del establecimiento correspondiente.

### Hospital de Salud Mental y Adicciones Papa Francisco

- Incorporado en Belén de Escobar.
- Dirección publicada: Pellegrini y Dr. Travi.
- Prestación documentada: evaluaciones neurocognitivas por el área de psicopedagogía, en casos de necesidad específica.
- Horario publicado para esa prestación: lunes a viernes de 8 a 18.
- Teléfono publicado: 3484 430-544.
- Estado del registro: `operativo`, limitado a la prestación que publica la fuente.
- No se infieren guardias, cobertura general ni otras prestaciones.
- No se agrega marcador: no se verificó una coordenada exacta.

### UDP Dr. Carlos Guevara

- Se incorporó al directorio nominal en Belén de Escobar, con dirección Cervantes 635, según Centros de salud.
- La página anterior Guardias y farmacias publicaba una guardia de 24 horas, pero la página actual Guardias y emergencias no incluye esta UDP entre sus 11 fichas; tampoco aparece en las listas de guardias de Teléfonos útiles, IOMA y PAMI.
- El establecimiento queda documentado como listado por el Municipio, pero su guardia y operación actual permanecen `pendiente`.
- No se inventa teléfono, horario vigente ni coordenada.
- La discrepancia dejó de duplicarse en `pendingDirectoryDiscrepancies` y pasó a la ficha individual, donde se conserva su estado pendiente.

### Discrepancias preservadas

- CAPS Juan Carlos Selles: Teléfonos útiles indica Fonavi y (0348) 449-3444; Guardias y emergencias, IOMA y PAMI indican B° 24 de Febrero y 11 2150-0302; Centros de salud solo consigna las calles. Se conserva Garín como localidad, se atribuye la dirección publicada a su fuente y no se asignan barrio ni teléfono únicos.
- Hospital Municipal Dr. Horacio López: Guardias y emergencias y una ficha de guardia de IOMA indican Bv. Presidente Perón 156; Centros de salud, Teléfonos útiles, PAMI y otra sección de IOMA indican 240. Se mantiene la dirección sin consolidar. El teléfono 11 2150-0371 coincide en las fichas consultadas.
- No se promedian ni se seleccionan arbitrariamente los datos contradictorios.

El directorio pasa a 14 fichas nominales en seis localidades. No constituye un inventario exhaustivo frente a los 8 hospitales, 4 UDP y 18 CAPS informados por el Municipio.

## 4. Archivos modificados

- `data/escobar-territory.json`: dos incorporaciones, actualización de procedencia y notas de discrepancias.
- `tests/escobar-health-facilities.test.js`: pruebas para las dos fichas, estados, fuentes y datos no consolidados.
- `README.md`: actualización del alcance y cantidad de fichas sanitarias.
- `.github/workflows/static.yml`: actualización de las aserciones de regresión para reflejar 14 fichas y la nueva ubicación de la discrepancia de la UDP.

## 5. Commits y validación

- Primer commit de datos y pruebas: `dead8dd34af49341e599546e1fd38fcbbd8b37ed`.
- La primera ejecución, [GitHub Actions run 45471701505](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45471701505), falló antes del despliegue porque el workflow todavía exigía 12 fichas y la discrepancia de la UDP fuera del directorio principal. No se publicó esa versión.
- Se corrigieron las aserciones de regresión y se preservó en la ficha de Selles la referencia Fonavi atribuida a Teléfonos útiles, sin ocultar las fuentes discrepantes.
- Commit final de datos y validación: `5ba77f70c623839224b1fbbe26bdbfe1b429ebde`.
- [GitHub Actions run 45471898784](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45471898784): conclusión `success`.
- Job `validate`: success.
- Paso `Validate Escobar local profile and provenance`: success.
- Paso `Test Escobar health facility directory`: success.
- Paso `Test Escobar procurement source links`: success.
- Job `deploy`: success. Los logs de `actions/deploy-pages` informaron “Reported success” para el commit `5ba77f70c623839224b1fbbe26bdbfe1b429ebde`.
- URL publicada por GitHub Pages: https://leandrocuellarok-netizen.github.io/mapafederal/
- La comprobación HTTP independiente de la URL pública no estuvo disponible desde esta consulta; no se afirma una verificación independiente del contenido servido.

## 6. Limitaciones y evidencia pendiente

- Confirmación municipal unificada del barrio y teléfono del CAPS Juan Carlos Selles.
- Confirmación de la dirección definitiva del Hospital Horacio López.
- Confirmación actual de la guardia y operación de la UDP Dr. Carlos Guevara.
- Revisión presencial o fuente oficial con coordenadas verificables antes de incorporar marcadores.
- Ampliación progresiva del inventario: las 14 fichas actuales son una selección documentada, no el universo de hospitales, UDP y CAPS.

## Resultado

Se amplió el directorio sanitario de Escobar con dos fichas respaldadas por fuentes municipales y se documentaron, sin resolver por inferencia, las discrepancias de ubicación y contacto que siguen abiertas. La validación y el despliegue de GitHub Pages finalizaron correctamente en el run `45471898784`.
