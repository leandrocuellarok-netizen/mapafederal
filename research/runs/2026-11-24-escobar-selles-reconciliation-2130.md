# Escobar — conciliación documental del CAPS Juan Carlos Selles

Fecha de corte: 24/11/2026, 21:30 (America/Argentina/Buenos_Aires).  
Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.

## Inspección previa

- HEAD observado antes de editar: `15b5069f9c9c5485ecbcd800ee070f3dc5fa739d` (ciclo GBIE concurrente).
- Se revisaron `data/escobar-territory.json`, `tests/escobar-health-facilities.test.js`, `assets/escobar-profile.js`, `README.md` y el workflow estático.
- La última ejecución global observada, [45515700376](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45515700376), falló en la validación de `data/investment-opportunities.json`: `general-alvarado-concesion-ebomar-maricultura-ras-2026` fue rechazada por una jurisdicción municipal no admitida. El test específico de directorio sanitario de Escobar pasó antes de esa falla. No se modificó el catálogo nacional de oportunidades porque queda fuera del alcance de esta tarea.

## Hallazgo principal

La página municipal [Cartilla de salud](https://www.escobar.gob.ar/municipio/prestaciones-con-o-sin-obra-social/) identifica al CAPS Juan Carlos Selles en Pablo Marín, B° 24 de Febrero, Garín; publica guardia general todos los días, las 24 horas, y teléfono 11 2150-0302. La página [Guardias y emergencias](https://www.escobar.gob.ar/municipio/guardias/) coincide en la referencia barrial y teléfono.

La página municipal [Centros de salud](https://www.escobar.gob.ar/municipio/centros-de-salud/) identifica la intersección de Pablo Marín entre Islas Malvinas e Hipólito Yrigoyen, Garín, pero no indica barrio ni teléfono. [Teléfonos útiles](https://www.escobar.gob.ar/municipio/telefonos-utiles/) conserva la referencia Fonavi y publica (0348) 449-3444. Las cartillas IOMA/PAMI también publican B° 24 de Febrero y 11 2150-0302.

La evidencia actual refuerza la referencia B° 24 de Febrero en varias páginas municipales, pero persiste una contradicción documental con Teléfonos útiles y una ficha general que solo indica calles. Por disciplina geográfica, se conserva Garín como localidad, se omite el barrio del campo principal y no se consolida un teléfono único. La fecha de publicación/edición de la Cartilla de salud no está indicada; se registra la fecha de consulta.

## Mejora incorporada

- Se añadió la Cartilla de salud como fuente relacionada, con fecha de publicación desconocida y verificación del 24/11/2026.
- Se retiró “(Fonavi)” del campo de dirección principal y de la consulta cartográfica; se conserva Fonavi en la nota de discrepancia.
- Se precisó el resumen y el alcance de verificación sin cambiar la localidad Garín ni el estado del establecimiento.
- Se amplió la prueba específica para exigir la nueva fuente y evitar que el mapa sugiera un barrio controvertido.

## Archivos modificados

- `data/escobar-territory.json`
- `tests/escobar-health-facilities.test.js`
- `README.md`
- `research/runs/2026-11-24-escobar-selles-reconciliation-2130.md`

## Validación y límites

- JSON parseado; 14 fichas sanitarias conservadas; IDs únicos.
- Se comprobó la presencia de la nueva fuente, la fecha de publicación nula, la fecha de verificación, la ausencia de “Fonavi” en el campo de dirección/mapa y la conservación de ambas referencias en la nota.
- El test específico del directorio sanitario había pasado en el workflow anterior; el nuevo test se ejecutará en el workflow de este commit.
- El workflow global tiene un bloqueo preexistente fuera del módulo Escobar, documentado arriba. No se declara despliegue hasta observar una ejecución exitosa.
- No se realizó comprobación presencial ni se asignaron coordenadas exactas.

## Siguiente evidencia necesaria

Una ficha municipal única y corregida que unifique la referencia barrial, el teléfono y la ubicación del CAPS. Hasta entonces se conserva la discrepancia.


## Precisión adicional de la Cartilla de salud y corrección del test

La lectura completa de la [Cartilla de salud](https://www.escobar.gob.ar/municipio/prestaciones-con-o-sin-obra-social/) mostró que la misma página tiene dos bloques distintos: en «Guardias» publica B° 24 de Febrero, guardia general las 24 horas y teléfono 11 2150-0302; en la ficha CAPS publica la dirección Pablo Marín 24, Garín, atención de lunes a viernes de 7 a 14 y vacunatorio de 8 a 13. Se separan esos horarios para no confundir guardia con atención regular. La referencia barrial queda sin consolidar porque el mismo portal no repite el barrio en la ficha CAPS y otras páginas municipales conservan Fonavi.

La primera ejecución asociada al commit `15f5ac63e73a09638f2ff47d482d7dddfde0d70d`, [45518927772](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45518927772), detectó una aserción heredada en `.github/workflows/static.yml` que todavía exigía «Fonavi» dentro del campo de dirección. La aserción era incompatible con la mejora de trazabilidad: Fonavi debe permanecer en la nota de discrepancia, no en la dirección principal. Se actualizan las pruebas para exigir Pablo Marín 24, los tres horarios diferenciados y la conservación de la referencia Fonavi únicamente como discrepancia documental.


La segunda ejecución de validación, [45519127776](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45519127776), confirmó que la dirección y los horarios nuevos pasaban las aserciones previas, pero detectó una segunda expectativa textual heredada: exigía la palabra «discrepancia» en `serviceNote`. El dato ya explicaba la falta de teléfono único; se ajustó el test para comprobar ese significado concreto en lugar de exigir una palabra específica. La siguiente ejecución debe confirmar el test de perfil y el directorio sanitario antes de evaluar el validador general.


## Sincronización del directorio heredado

La inspección del segundo fallo mostró que `serviceDirectories` conservaba una segunda ficha de Selles distinta de `healthFacilitiesDirectory.facilities`. Se sincronizaron ambas representaciones para evitar que la interfaz presente direcciones u horarios incompatibles: Pablo Marín 24, Garín; guardia general 24 h; atención CAPS lunes a viernes 7–14; vacunatorio lunes a viernes 8–13; teléfono sin consolidar. Se añadieron aserciones para impedir futuras divergencias entre ambos directorios.


La tercera ejecución de validación, [45519316593](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45519316593), avanzó más allá de las aserciones de dirección y horarios, y detectó que la nota había omitido los paréntesis del teléfono publicado por Teléfonos útiles. Se restauró la grafía exacta «(0348) 449-3444» en ambas representaciones del CAPS; no se modifica el campo telefónico consolidado, que permanece nulo por la contradicción con 11 2150-0302.


La ejecución [45519388887](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45519388887) avanzó con la grafía exacta del teléfono, pero la validación heredada también requiere la frase «No se asigna barrio ni teléfono único» en el alcance de verificación. Se normalizó esa formulación en las dos fichas del CAPS y se agregó una aserción equivalente al test sanitario. La precisión documental no cambia: Garín queda como localidad y el barrio permanece sin consolidar.
