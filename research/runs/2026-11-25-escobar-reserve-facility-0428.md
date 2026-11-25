# Escobar — Reservas naturales y ficha de la Reserva Natural Educativa

Fecha de verificación: 25/11/2026, 04:28 (Argentina)  
Ámbito: Partido de Escobar — Ingeniero Maschwitz  
Dominio: ambiente, áreas protegidas y datos abiertos

## Estado del repositorio al inicio

- Rama: `main`.
- HEAD observado: `90de64ceef5b592016bac05851df1b60b8661803`.
- El último commit anterior fue una actualización de revisión ejecutiva del ciclo GBIE; se preservaron esos cambios concurrentes.
- Se inspeccionaron el catálogo territorial, el renderizador del perfil Escobar, la prueba de transparencia, README, workflow estático, commits recientes, ramas y PR recientes.
- No se obtuvo acceso a un working tree local; la inspección de archivos se realizó mediante GitHub.
- Última ejecución de Actions observada antes del cambio: run #563, asociada a `90de64ceef5b592016bac05851df1b60b8661803`, con validación y despliegue exitosos.

## Fuentes consultadas

1. Portal de Datos Abiertos de la Municipalidad de Escobar, ficha «Reservas Naturales Municipales del Partido de Escobar». La página no informa fecha de publicación; declara creación 01/10/2025, actualización 31/03/2026, versión 1.0, periodicidad anual y licencia ODbL. Consulta: 25/11/2026. URL: https://datos.escobar.gob.ar/dataset/reservas-naturales-municipales-del-partido-de-escobar
2. Municipalidad de Escobar, «Reserva Natural Educativa». La página no informa fecha de publicación; consultada el 25/11/2026. Publica Sucre 1550 (PES), Ingeniero Maschwitz; 23 hectáreas; horario de 9 a 17 h; entrada gratuita; protección por Ordenanza 5767/19. URL: https://www.escobar.gob.ar/municipio/sostenible/reserva-natural-educativa/
3. Municipalidad de Escobar, ficha anterior «Reserva Municipal Ing. Maschwitz». La búsqueda indexada informa martes a domingos, 09 a 17 h, pero el acceso directo devolvió 403 durante esta verificación. No se adopta ese calendario como vigente. URL: https://www.escobar.gob.ar/reserva-municipal-ing-maschwitz/
4. Municipalidad de Escobar, índice de Ordenanzas Ambientales. Incluye la Ordenanza 5767/19 dentro de un conjunto de normas de protección ambiental; no se obtuvo el texto íntegro de la ordenanza desde esa página. URL: https://www.escobar.gob.ar/municipio/sostenible/ordenanzas-ambientales/

## Hallazgos y límites

- El enlace GeoJSON publicado en la ficha de Reservas Naturales respondió HTTP 404 al abrir el recurso.
- El recurso Shapefile está listado, pero la herramienta de consulta rechazó el tipo MIME `application/vnd.shp` con un error 400. Esto no se clasifica como 404 ni demuestra que el archivo esté roto; su integridad y contenido permanecen desconocidos.
- La ficha accesible no declara un CRS verificable. No se transformó ni se dibujó geometría.
- La ficha municipal actual de la Reserva Natural Educativa identifica la localidad y la dirección, superficie, horario, entrada y ordenanza. No confirma apertura en tiempo real ni días de atención.
- Una ficha municipal anterior indexada informa martes a domingos, pero no pudo abrirse directamente (403). Se conserva la discrepancia, sin trasladar ese calendario al estado actual.
- La ficha actual es evidencia documental de la información publicada por el Municipio, no una inspección presencial ni una garantía de acceso en un día concreto.

## Mejora principal

Se incorporó el dataset de Reservas Naturales al catálogo ambiental del perfil Escobar, conservando su ficha, licencia y fechas. El estado de la capa queda `pendiente`, con los dos resultados de acceso diferenciados. Se documentó por separado la Reserva Natural Educativa de Ingeniero Maschwitz; su operación en tiempo real permanece `no verificada`.

El renderizador del perfil ahora muestra los datos de la instalación y las fuentes relacionadas, y diferencia la ficha de la reserva de la disponibilidad de la geometría.

## Archivos modificados

- `data/escobar-territory.json`
- `assets/foco-escobar.js`
- `tests/escobar-transparency.test.js`
- Este registro de investigación.

## Pruebas y publicación

- Validación local: no ejecutada; no se dispuso de un working tree local en esta ejecución.
- Se prepararon aserciones para la procedencia, los resultados de acceso, la ausencia de CRS y la separación entre ficha del establecimiento y capa cartográfica.
- GitHub Actions y GitHub Pages se comprobarán después del commit.
- La verificación HTTP independiente de la página publicada queda pendiente.

## Pendientes

1. Obtener el GeoJSON corregido o una descarga completa y utilizable del Shapefile, con sidecars si corresponde.
2. Confirmar el CRS, la geometría y la parcela de las reservas antes de dibujar cualquier polígono.
3. Recuperar el texto íntegro de la Ordenanza 5767/19 desde el Concejo Deliberante.
4. Confirmar los días de visita y el estado de apertura mediante una fuente municipal actualizada; no asumir disponibilidad diaria.
