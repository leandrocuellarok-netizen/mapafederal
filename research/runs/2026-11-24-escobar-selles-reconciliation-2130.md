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
