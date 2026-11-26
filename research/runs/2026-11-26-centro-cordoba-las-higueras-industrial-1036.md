# MAPA FEDERAL — Centro / Parque Industrial Las Higueras

- Fecha y hora de verificación: 26/11/2026, 10:36 ART.
- Rama inspeccionada: `main`.
- HEAD inicial: `bbbb131e637091fc6e672845184a140c94c09162`.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.
- Región trabajada: Centro. Próxima región de la rotación: Patagonia.

## Brecha abordada
Córdoba tenía 2 nodos, uno de ellos de Industria. Se incorpora una segunda referencia industrial, documentada como parque municipal en construcción. Córdoba pasa a 3 nodos y 2 de Industria; Centro pasa de 12 a 13 nodos. No se agrega una categoría nueva.

## Registro incorporado
- ID: `cordoba-parque-industrial-las-higueras`.
- Nombre: Parque Industrial Municipal de Las Higueras.
- Coordenadas: `-33.07885989, -64.27645770`.
- Categoría: Industria.
- Estado: `en_construccion`; no se afirma habilitación definitiva ni operación plena.
- Fuente de identificación/localización: Municipalidad de Las Higueras, Ordenanza 45/2023, aprobada el 17/10/2023: https://www3.lashigueras.gov.ar/media/ORDENANZAS/2023/45-2023_Reglamento_Interno_Parque_Industrial_Las_Higueras_17-10-2023_202_NaWYIwR.pdf
- Fuente de coordenadas: AABE, anexo de Resolución 218/2022: https://www.argentina.gob.ar/sites/default/files/infoleg/res218-372140.pdf. El croquis publica latitud/longitud para el inmueble y advierte que es ilustrativo; no contiene polígono ni datum/CRS. Se usa solo como referencia del inmueble, no como acceso, centroide certificado ni perímetro.
- Fuente primaria de estado: Municipalidad de Las Higueras, Ordenanza 216/2025, aprobada el 20/11/2025: https://www3.lashigueras.gov.ar/media/ORDENANZAS/2025/Ordenanza_N_216_-_Beneficio_Impositivo_METAGRO_-_RYMI_20260417135540.pdf
- Fuente secundaria complementaria: El Día de Higueras, 18/03/2026, reporta movimiento de suelos, calles y cerramiento ejecutados y redes internas aún en proyecto: https://eldiadehigueras.com.ar/amp/19647/parque-industrial-avanza-el-desarrollo-y-crece-el-interes-en-las-hig

## Integración en la portada
`index.html` ya consume `data/strategic-nodes.json` y dispone del filtro `Industria`. No fue necesario modificar la portada.

## Archivos
- `data/strategic-nodes.json`: alta del nodo; commit de catálogo `8b43ae5592e59eee61cc348362f8e04373452ec7`.
- `research/national-map-coverage.json`: conteos y brechas recalculados; rotación Centro → Patagonia; `catalogCommit` apunta al commit de catálogo.
- `.github/workflows/static.yml`: admite el estado explícito `en_construccion` y valida ID, categoría, coordenada, fuente y calidad del nuevo registro.
- `README.md`: ejemplo de esquema actualizado con ID estable, estado y conteo 97.
- `research/runs/2026-11-26-centro-cordoba-las-higueras-industrial-1036.md`: este registro.

## Validación previa al push
- JSON del catálogo y matriz parseados.
- 97 nodos; 24 jurisdicciones; nueve categorías.
- IDs existentes únicos; coordenadas no duplicadas.
- Coordenadas dentro del rango argentino.
- Provincia, categoría y estado del nuevo registro contrastados.
- Conteos por jurisdicción, categoría y región reconciliados.
- La portada conserva el catálogo y el filtro existente.

## Commit, workflow y Pages
- Commit de catálogo: `8b43ae5592e59eee61cc348362f8e04373452ec7`.
- Commit final de matriz, validador, README y bitácora: pendiente de creación.
- GitHub Actions: pendiente de ejecución.
- GitHub Pages: pendiente de validar el job de despliegue y la página publicada.

## Gaps pendientes
- Obtener geometría oficial del parque y CRS/datum para reemplazar la referencia puntual del inmueble por un punto de acceso o polígono verificable.
- Confirmar la aprobación definitiva del parque y el estado de las redes internas con una fuente municipal posterior al 18/03/2026.
- No se incorporaron instalaciones individuales ni empresas sin coordenadas exactas atribuibles.
