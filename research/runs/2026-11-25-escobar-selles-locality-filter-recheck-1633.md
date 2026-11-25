# Escobar — revalidación de clasificación del CAPS Juan Carlos Selles

Fecha de revisión: 25/11/2026, 16:33 ART  
Ámbito: Partido de Escobar — Garín y referencia barrial «B° 24 de Febrero»  
Dominio: salud pública, directorio de establecimientos, clasificación territorial

## 1. Inspección previa del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama observada: `main`.
- HEAD inicial observado: `201031de69787dab1712597ef485f6efadc9b679`.
- Último commit general previo: `201031de69787dab1712597ef485f6efadc9b679`, control de generación pública de informes.
- Últimos cambios relevantes de Escobar: `90714e655af20175bc5b20e3770c4fbe967a5500` (procedencia LP 66/69) y `767e64135e88a682c6c78a788b9d9efa71c26581` (pruebas de contratación y cambios del catálogo).
- Rama `main` confirmada; búsqueda de PR abiertos sin resultados.
- El conector permite leer archivos y commits remotos, pero no expone un working tree local; no se afirma haber inspeccionado uno.
- El estado combinado de checks de `201031de69787dab1712597ef485f6efadc9b679` no devolvió checks. El último ciclo GBIE consultado tampoco confirmó un run CI/Pages para `767e641`; el éxito #665 corresponde a un commit anterior.

## 2. Mejora principal

Se revalidó el directorio municipal de salud y se documentó una discrepancia nueva de clasificación en el CAPS Juan Carlos Selles:

- La Cartilla de salud y la página Centros de salud muestran filtros para seis localidades: Belén de Escobar, Garín, Ingeniero Maschwitz, Maquinista Savio, Matheu y Loma Verde; omiten 24 de Febrero.
- En el bloque «Guardias», la Cartilla identifica el CAPS como «B° 24 de Febrero, Garín», con guardia general las 24 horas y teléfono 11 2150-0302.
- En el listado de Centros de salud, el establecimiento figura bajo Garín como «Ing. Pablo Marín entre Islas Malvinas e Hipólito Yrigoyen» y con vacunatorio de lunes a viernes de 8 a 13.
- La ficha CAPS de la Cartilla publica Pablo Marín 24, Garín, atención CAPS de lunes a viernes de 7 a 14 y vacunatorio de 8 a 13.
- La omisión de 24 de Febrero en los filtros no demuestra ausencia de servicios en esa localidad.
- Se conserva `locality: Garín`, no se agrega barrio definitivo ni se crea un segundo registro para 24 de Febrero. No se agregan coordenadas.

## 3. Fuentes y alcance

1. Municipalidad de Escobar — Cartilla de salud: https://www.escobar.gob.ar/municipio/prestaciones-con-o-sin-obra-social/
   - Fecha de publicación/edición: no indicada por la fuente.
   - Consultada el 25/11/2026.
   - Se revisaron filtros territoriales, bloque Guardias y ficha CAPS.
2. Municipalidad de Escobar — Centros de salud: https://www.escobar.gob.ar/municipio/centros-de-salud/
   - Fecha de publicación/edición: no indicada por la fuente.
   - Consultada el 25/11/2026.
   - Se revisaron filtros y listado de Garín.
3. Municipalidad de Escobar — Guardias y emergencias: https://www.escobar.gob.ar/municipio/guardias/
   - Fecha de publicación/edición: no indicada por la fuente.
   - Consultada el 25/11/2026.
   - Se confirmó la referencia «B° 24 de Febrero, Garín», guardia diaria 24 h y teléfono 11 2150-0302.
4. Teléfonos útiles, IOMA y PAMI permanecen como contrastes del corte documental 24/11; no se reabrieron en esta ejecución. Se conserva la discrepancia de Fonavi y el teléfono alternativo, sin consolidar un único dato.

## 4. Archivos modificados

- `data/escobar-territory.json`: se actualizaron fecha de consulta, vigencia, nota de dirección, resumen y alcance de verificación en las dos representaciones existentes del CAPS Selles; se actualizó la trazabilidad de Cartilla de salud y Centros de salud.
- `tests/escobar-health-facilities.test.js`: se añadieron aserciones para la omisión del filtro de 24 de Febrero, la conservación de Garín y la fecha de reconsulta.
- No se agregaron registros ni puntos cartográficos.

## 5. Commits

- Datos: `c0104b47b880fd9a18a302ac53193991624c270f`
- Prueba: `47f454b4244236daf688cafb1ec385da25211c70`

## 6. Validación

- El JSON fue parseado antes de guardar.
- Se comprobó que las dos representaciones de Selles existen y fueron actualizadas.
- Se agregaron aserciones sobre clasificación, discrepancia de filtros y procedencia.
- No se ejecutó Node localmente desde el conector; la prueba queda pendiente de GitHub Actions.

## 7. CI y despliegue

- No se declara aún un workflow exitoso ni un despliegue de GitHub Pages.
- Se consultará el estado combinado de checks del HEAD resultante.
- La inspección HTTP independiente de Foco Escobar queda pendiente.

## 8. Pendientes

- El Municipio no publica una explicación de por qué 24 de Febrero está ausente de los filtros de salud.
- No se resuelve si la referencia «B° 24 de Febrero, Garín» debe corresponder a la localidad oficial 24 de Febrero o a un barrio bajo Garín; se conserva la formulación fuente.
- No se hizo comprobación presencial.
- No se infiere que no existan otros servicios de salud en 24 de Febrero.
