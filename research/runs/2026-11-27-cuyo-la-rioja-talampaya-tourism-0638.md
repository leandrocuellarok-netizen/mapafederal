# MAPA FEDERAL — La Rioja / Parque Nacional Talampaya

- Fecha y hora de investigación: 2026-11-27 06:38 ART (UTC-3).
- Región objetivo: Cuyo.
- Provincia: La Rioja.
- Categoría: Turismo.
- Cobertura previa: 3 nodos en La Rioja (Aeropuerto, Paso fronterizo e Industria); sin nodo Turismo.
- Mejora principal: incorporación del Parque Nacional Talampaya como referencia turística de área protegida.
- ID: `la-rioja-turismo-parque-nacional-talampaya`.
- Coordenadas: `[-29.85015, -67.87759]`.
- Estado: operativo documentado para uso público; no se verificaron transitabilidad, cupos ni disponibilidad de servicios en tiempo real.

## Fuentes

1. SIB/APN — Parque Nacional Talampaya: https://sib.gob.ar/areas-protegidas/parque-nacional-talampaya
   - Publica provincia La Rioja, departamentos Coronel Felipe Varela e Independencia, creación en 1997, superficie 213.800 ha, categoría internacional Sitio de Patrimonio Mundial y ubicación geográfica 29 51 0.55 S (-29.85015), 67 52 39.34 O (-67.87759).
   - La ficha no declara datum/CRS, fecha de actualización de la coordenada ni semántica geométrica del punto.
2. APN — Horarios / Cómo llegar: https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-talampaya/horarios-como-llegar
   - Publica horarios estacionales de visita, acceso por RN 76 y RN 40, estacionamiento en sectores de visita y servicios de acampe.
3. APN — Tarifas: https://www.argentina.gob.ar/node/138506
   - Informa valores vigentes desde el 01/06/2026 y venta anticipada de entradas.

## Registro incorporado

- Se agregó un único nodo de tipo Turismo para La Rioja.
- Las coordenadas se copiaron literalmente de la ubicación geográfica decimal publicada por SIB/APN.
- No se geocodificó el topónimo, no se calculó centroide ni se reproyectó.
- CRS/datum/EPSG no declarados; no se asignó EPSG.
- El punto se representa solo como referencia general del área protegida. No se presenta como acceso, centroide certificado, punto de visita, portal ni perímetro.
- El estado operativo se limita al uso público documentado por APN. No acredita apertura diaria, transitabilidad, disponibilidad de excursiones ni servicios en tiempo real.

## Cobertura antes y después

- Catálogo: 111 → 112 nodos.
- La Rioja: 3 → 4 nodos; Turismo pasa de 0 a 1.
- Cuyo: 14 → 15 nodos en cuatro jurisdicciones.
- Turismo nacional: 16 → 17 nodos.
- Jurisdicciones representadas: 24/24.
- Menos representadas: Catamarca, Santiago del Estero y Tucumán, con 2 nodos cada una.
- Próxima región de rotación: Centro.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- `README.md`
- `research/runs/2026-11-27-cuyo-la-rioja-talampaya-tourism-0638.md`

`index.html` no se modificó. Se confirmó en el código que la portada continúa cargando `data/strategic-nodes.json` y conserva el filtro Turismo.

## Validación y commits

- JSON del catálogo parseado; 112 registros.
- 112 IDs únicos, 112 nombres únicos y 112 pares de coordenadas únicos.
- Coordenada dentro de los rangos geográficos admitidos para Argentina.
- Categoría `Turismo` admitida por el esquema existente.
- Jurisdicción La Rioja y conteos de matriz recalculados desde el catálogo.
- La Rioja: 4 nodos; Turismo: 1; la categoría se elimina de `missingCategories`.
- Cuyo: 15 nodos; Turismo nacional: 17; 24 jurisdicciones.
- Se agregaron aserciones de regresión para Talampaya y se actualizaron conteos, rotación y `catalogCommit`.
- Commit de catálogo: `974425cebd5ae86b624fb580c9ec31683adb98b1`.
- Commit de matriz: `9c25d479dfce7f894199228d3ed68a862b2703a1`.
- Commit de workflow: `3a5287e9814b48c244f40464a5e08285dbade83f`.
- Commit de README: `6b16ef3ee047d7635110f7d97edb47f9474a49a7`.
- PR #25 integrado en `main`: https://github.com/leandrocuellarok-netizen/mapafederal/pull/25.
- Commit de integración (squash): `3d4261d1d9523d3fd314368938dac8cf7b301b87`.
- GitHub Actions #867 (`45975789607`), SHA `3d4261d1d9523d3fd314368938dac8cf7b301b87`: job `validate` exitoso; job `deploy` exitoso; resultado final `success`.
- GitHub Pages: despliegue confirmado por el paso `Deploy to GitHub Pages` de Actions #867.
- URL configurada: https://leandrocuellarok-netizen.github.io/mapafederal/.
- Inspección independiente de la portada y del JSON publicado: intentada, pero el entorno de navegación no pudo acceder al dominio de GitHub Pages. No se afirma verificación visual independiente.

## Brechas pendientes

- La Rioja: Ciudad, Puerto, Logística, Recurso mineral y Estación ferroviaria.
- Cuyo: faltan referencias industriales y logísticas mejor georreferenciadas en Mendoza, San Juan y San Luis.
- Mantener seguimiento de Catamarca, Santiago del Estero y Tucumán por su baja cobertura.
