# Licitación Pública 74/2026 — Polideportivo Ingeniero Maschwitz

Fecha de revisión: 25/11/2026, 14:29 ART  
Ámbito: Partido de Escobar, Provincia de Buenos Aires  
Dominio: administración pública, contratación municipal, infraestructura deportiva

## 1. Inspección previa del repositorio

- Repositorio público: `leandrocuellarok-netizen/mapafederal`; rama `main`.
- HEAD inspeccionado: `153db5fcf662bfc806f20163cfed6c49a337972b`.
- HEAD de la última incorporación territorial de Escobar: `38e6e6268bde92b763e6a6c298dfb78c50e405aa` (calle Salta, Garín).
- Los diez commits posteriores se compararon con el último registro territorial. Los cambios concurrentes fueron actualizaciones de Investment Finder, Radar IA y documentación ejecutiva GBIE. El commit `4f4e7fb028be1a136cb8d0fd02c54443118c0a5f` añadió avisos nacionales; su diff no contiene IDs de Escobar. No se revirtieron ni modificaron esos cambios.
- PR abiertos: ninguno.
- El conector permite inspeccionar el árbol remoto, pero no expone un working tree local.
- Se revisaron `data/investment-opportunities.json`, `tests/escobar-procurement-sources.test.js`, la plantilla de tarjetas de `investment-finder/index.html` y `.github/workflows/static.yml`. La descripción y el período se muestran en la ficha de Investment Finder; la prueba específica de fuentes de contratación se ejecuta en CI.

## 2. Fuente primaria y hallazgo

Boletín Oficial de la Provincia de Buenos Aires, edición 30364, La Plata, miércoles 18/11/2026, Sección Oficial, página 68.  
URL canónica: https://boletinoficial.gba.gob.ar/secciones/14517/ver

La Municipalidad de Escobar, Secretaría de Planificación e Infraestructura, publicó el llamado a Licitación Pública N.º 74/2026 para la construcción de una cancha de fútbol y una pista de atletismo en el Polideportivo Ingeniero Maschwitz.

El aviso fija:
- Presupuesto oficial: ARS 793.000.000, IVA incluido.
- Valor del pliego: ARS 2.000.000.
- Consultas: 26 y 27/11/2026, de 09:00 a 12:00.
- Venta del pliego: 30/11 y 01/12/2026, de 09:00 a 12:00.
- Consultas y venta: Secretaría de Planificación e Infraestructura, H. Yrigoyen N.º 743, Belén de Escobar.
- Apertura: 04/12/2026 a las 10:00, en la Sala de Reunión de la Secretaría, H. Yrigoyen N.º 743, Belén de Escobar.
- Expediente: 288.725/26.

La edición 30368 del Boletín Oficial, publicada el 25/11/2026, fue consultada buscando el nombre de la obra, el número de licitación y el expediente. No se encontró una modificación o circular que mencione esta licitación en esa edición. Esta comprobación no descarta circulares posteriores ni documentos disponibles por otros canales.

## 3. Decisión de actualización

Se enriqueció el registro existente `escobar-licitacion-74-2026-polideportivo-maschwitz-pista-atletismo`; no se creó una segunda oportunidad.

- Se conservó `recordType=tender`, `scope=municipal`, `stage=announced` y `opportunityStatus=open`.
- Se mantuvo la localidad Ingeniero Maschwitz y el presupuesto oficial de ARS 793.000.000 con IVA incluido.
- Se incorporó el valor del pliego, la dirección y horario de consultas y venta, el lugar y horario de apertura y el expediente.
- Se reforzó la advertencia de que el presupuesto oficial no equivale a monto adjudicado ni gasto ejecutado.
- No se identificó contratista, adjudicatario, oferta, contrato ni ejecución.
- No se agregaron coordenadas, puntos ni polígonos: el establecimiento no fue georreferenciado en este ciclo.
- El pliego completo no fue revisado. La oportunidad se conserva como abierta según el cronograma publicado, pero la elegibilidad técnica y comercial de cualquier proveedor no fue evaluada.

## 4. Archivos modificados

- `data/investment-opportunities.json`: descripción, período y alcance de verificación del registro LP 74/2026.
- `tests/escobar-procurement-sources.test.js`: aserciones sobre valor del pliego, consultas, venta, apertura, dirección, expediente y búsqueda de modificaciones en la edición 30368.
- `research/runs/2026-11-25-escobar-lp74-polideportivo-maschwitz-procurement-detail-1429.md`: este registro.

No se modificaron interfaz, catálogos nacionales, Radar IA ni otros municipios.

## 5. Validación y publicación

- JSON: parseo y lectura del registro comprobados antes del commit.
- Test específico: se añadieron aserciones de los detalles operativos y de procedencia; la ejecución automatizada queda a cargo del workflow de GitHub Actions.
- Workflow de referencia previo al cambio: #659, asociado al HEAD `153db5fcf662bfc806f20163cfed6c49a337972b`, con `validate: success` y `deploy: success`. Incluyó la prueba existente de fuentes de contratación de Escobar.
- El resultado de CI y el despliegue del nuevo commit deben confirmarse después de la actualización de `main`; no se anticipa éxito.
- Comprobación HTTP independiente posterior al nuevo despliegue: pendiente.

## 6. Pendientes

1. Revisar el pliego completo para requisitos técnicos, capacidad, garantías, visitas, seguros y elegibilidad.
2. Consultar eventuales circulares posteriores antes de participar.
3. Comprobar acta de apertura, ofertas, adjudicación, contrato y ejecución por separado.
4. No presentar el presupuesto oficial como gasto, inversión efectivamente desembolsada ni monto adjudicado.

La mejora vuelve más accionable el aviso para proveedores y empresas de infraestructura deportiva sin transformar el llamado en una oportunidad garantizada ni inferir adjudicaciones.
