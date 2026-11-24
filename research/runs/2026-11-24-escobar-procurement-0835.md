# Escobar — registro de contratación municipal (24/11/2026)

## Alcance de esta ejecución

Se inspeccionaron primero la rama principal, los commits recientes, los archivos de datos, las pruebas y las ejecuciones de GitHub Actions del repositorio `leandrocuellarok-netizen/mapafederal`. El catálogo de oportunidades tenía 19 registros; se incorporó uno nuevo, sin alterar los demás.

## Dato incorporado

- LP 67/2026: servicio de desagote en distintas dependencias.
- Organismo: Municipalidad de Escobar; publicación en el Boletín Oficial de la Provincia de Buenos Aires.
- Publicación: 06/11/2026, sección 14496.
- Presupuesto oficial publicado: ARS 288.950.000, IVA incluido.
- Apertura anunciada: 20/11/2026, 10:00, en Belén de Escobar.
- Estado del registro: cerrado por fecha de apertura; etapa desconocida.
- Verificación: 24/11/2026. Se contrastaron objeto, presupuesto, valor del pliego y cronograma. No se verificaron acta de apertura, ofertas, adjudicación, contrato ni prestación.

Fuente primaria: https://boletinoficial.gba.gob.ar/secciones/14496/descargar

El presupuesto oficial no se interpreta como monto adjudicado ni gasto ejecutado.

## Discrepancia documentada: LP 68/2026

No se incorporó un monto ni horario consolidado para la LP 68/2026 (alquiler de servicio de riego). El Boletín Oficial del 04/11/2026, sección 14490, informa ARS 286.602.960 IVA incluido y apertura a las 09:00 del 20/11; la ficha municipal del pliego informa ARS 300.010.000 IVA incluido y apertura a las 11:00 del mismo día. No se identificó una rectificación que resuelva la diferencia.

Fuentes:
- https://boletinoficial.gba.gob.ar/secciones/14490/ver
- https://www.escobar.gob.ar/pliego-licitacion-publica-no68-26/

## Cambios y pruebas

- `data/investment-opportunities.json`: LP 67 agregada como `tender`, alcance municipal, presupuesto oficial y estado `closed`; etapa `unknown`.
- `tests/escobar-procurement-sources.test.js`: prueba ampliada para verificar fuente, fecha, presupuesto, estado y límites de la LP 67; conteo de seis licitaciones contrastadas.
- `README.md`: documenta la LP 67 y la discrepancia de LP 68.

La validación de GitHub Actions para el commit `4215cdc70dfdc3736cebec43ce4612f81aa2d814` terminó correctamente, incluida la prueba de fuentes de contrataciones de Escobar. El job de despliegue falló después de subir el artefacto: `actions/deploy-pages` informó que no encontraba metadatos del artefacto `github-pages` (0 artefactos encontrados). No se declara publicada esta actualización. Se inicia una ejecución completa nueva mediante este registro para volver a validar y desplegar, siguiendo la pauta del README; no se reejecuta únicamente el job de despliegue.

Último despliegue exitoso anterior: ejecución 45353814469, commit `8f92e19ddef960fe452225bf5eba97d446f54a22`. No equivale a la publicación de la actualización de LP 67.
