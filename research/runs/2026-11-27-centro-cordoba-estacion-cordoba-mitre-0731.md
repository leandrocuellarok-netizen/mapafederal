# MAPA FEDERAL — Córdoba / Estación Córdoba Mitre

- Fecha y hora de investigación: 2026-11-27 07:31 ART (UTC-3).
- Región objetivo: Centro.
- Provincia: Córdoba.
- Categoría: Estación ferroviaria.
- Cobertura previa: 3 nodos en Córdoba; sin estación ferroviaria catalogada.
- Mejora principal: incorporación de Estación Córdoba Mitre como terminal ferroviaria documentada.
- ID: `cordoba-estacion-ferroviaria-estacion-cordoba-mitre`.
- Coordenadas: `[-31.4204589, -64.1750774]`.
- Estado: operativo documentado en la página oficial de Trenes Argentinos para el servicio Buenos Aires–Córdoba, publicado con dos trenes por semana. No se verificó operación ni horario en tiempo real.

## Fuentes

1. Trenes Argentinos Operaciones — Buenos Aires–Córdoba, horarios, tarifas y recorridos: https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/servicios-regionales-larga-distancia/buenosaires-cordoba
   - Página oficial consultada el 2026-11-27; informa dos trenes por semana e identifica Estación Córdoba Mitre como terminal. No presenta fecha de publicación o actualización.
2. Google Maps — pin Estación Córdoba, enlazado desde la página oficial de Trenes Argentinos: https://maps.app.goo.gl/2UuuMGnCrfpDysTT7
   - El enlace redirige a una ficha con el pin -31.4204589, -64.1750774. Fuente secundaria de coordenadas; no declara precisión, datum ni CRS.

## Registro incorporado

- Se agregó un único nodo de tipo Estación ferroviaria para Córdoba.
- La coordenada se copió del pin de Google Maps enlazado desde la página oficial de Trenes Argentinos.
- No se geocodificó el topónimo, no se calculó centroide ni se reproyectó.
- CRS/datum/EPSG y precisión no declarados; no se asignó EPSG.
- El punto se representa como referencia puntual de la estación, no como andén, acceso vial, centroide certificado ni perímetro.
- El estado operativo se limita al servicio publicado por Trenes Argentinos (dos trenes semanales); no acredita salidas en tiempo real, regularidad efectiva ni estado de accesos.

## Cobertura antes y después

- Catálogo: 112 → 113 nodos.
- Córdoba: 3 → 4 nodos; Estación ferroviaria pasa de 0 a 1.
- Centro: 15 → 16 nodos en cuatro jurisdicciones.
- Estaciones ferroviarias nacionales: 6 → 7.
- Jurisdicciones representadas: 24/24.
- Córdoba deja de tener Estación ferroviaria en `missingCategories`.
- Jurisdicciones menos representadas: Catamarca, Santiago del Estero y Tucumán, con 2 nodos cada una.
- Próxima región de rotación: Patagonia.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- `README.md`
- `research/runs/2026-11-27-centro-cordoba-estacion-cordoba-mitre-0731.md`

`index.html` no se modificó. Se verificó que la portada continúa cargando `data/strategic-nodes.json` y que `Estación ferroviaria` forma parte de las categorías dinámicas existentes.

## Validación y commits

- Catálogo JSON parseado: 113 registros.
- IDs únicos: 113.
- Nombres únicos: 113.
- Pares de coordenadas únicos: 113.
- Coordenadas dentro del rango geográfico admitido por la portada.
- Categoría `Estación ferroviaria` ya existente; no se creó una categoría nueva.
- Córdoba: 4 nodos; Estación ferroviaria: 1.
- Centro: 16 nodos; estaciones ferroviarias nacionales: 7.
- Matriz reconciliada a partir del catálogo y 24 jurisdicciones.
- Rotación actualizada: Centro → Patagonia.
- Commit del catálogo: `8b0cd32b2f05f1e053ab4422834f88fcfddfd1d2`.
- Commit de matriz: `5dc4dd7ba76910a6ecb9867a0db8532bc63fbd40`.
- Commit de workflow: `cc34012a45b404745e8cfc2531b74564f97c2c4b`.
- Commit de README: `5c7ab9216244f824ad00fa9b96974d68ff21d83b`.
- Rama de trabajo: `automation/2026-11-27-centro-cordoba-mitre-0731`.
- Pull request, validación de Actions en main y despliegue de Pages: pendientes de integración; se completarán en el registro final tras verificar los resultados.

## Brechas pendientes

- Córdoba: Ciudad, Puerto, Logística, Recurso mineral y Turismo.
- La Pampa: Ciudad, Industria, Logística y Estación ferroviaria, además de otras categorías sin nodos.
- Santa Fe: Logística, Recurso mineral, Turismo y Estación ferroviaria.
- Entre Ríos: Ciudad, Aeropuerto, Logística, Industria, Recurso mineral y Estación ferroviaria.
- Mantener seguimiento de Catamarca, Santiago del Estero y Tucumán por su baja cobertura.
