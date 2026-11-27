# MAPA FEDERAL — Corrección de coordenadas de Puerto Quequén

- Fecha de verificación: 2026-11-27 (Argentina).
- Región: Buenos Aires Province.
- Jurisdicción: Buenos Aires, departamento Necochea, localidad Quequén.
- Categoría: Puerto.
- Registros corregidos: 1 (sin altas ni bajas).
- ID: `buenos-aires-puerto-puerto-de-quequen`.
- Coordenada anterior: `[-38.57, -58.7]` (redondeada, sin atribución puntual).
- Coordenada corregida: `[-38.57133333, -58.71347222]`.
- Coordenada original publicada: 38°34'16.8"S, 58°42'48.5"W.
- Transformación: conversión aritmética DMS a decimal; sin reproyección ni transformación de datum.
- CRS/datum: no declarados por la ficha oficial; no se asigna EPSG.
- Fuente de localización: https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/quequen
- Fuente de estado administrativo: https://www.argentina.gob.ar/normativa/nacional/norma-427053 (Resolución 39/2026, sancionada 24/06/2026 y publicada 26/06/2026).
- Fuente previa conservada: https://www.puertoquequen.com/
- Estado: habilitación administrativa documentada; operación efectiva en tiempo real no verificada (`no_verificado`).
- Archivos: `data/strategic-nodes.json`, `.github/workflows/static.yml`, `research/national-map-coverage.json`, este registro.
- Integración homepage: `index.html` no modificado; el catálogo sigue cargándose mediante `data/strategic-nodes.json`.
- Cobertura: permanece en 109 nodos, 24 jurisdicciones y 9 categorías; solo se corrige la georreferenciación del puerto.
- Validación: se añadieron aserciones de regresión para ID, jurisdicción, categoría, coordenada oficial, fuente ANPyN, CRS no declarado y estado administrativo.
- Commits en la rama: catálogo `b1cccd51ebae7c6a2cbd56f6aa7be2e78c9b8f61`; workflow `fdb2c32d7c0bac1c40273520cca2c5f57ab2073f`; matriz `2f2d877899507efa2433e02f5890000c74c5b9e1`.
- GitHub Actions / Pages: pendiente de ejecución tras integrar el PR; se verificará el run exacto y el job de despliegue.
- Próxima prioridad regional: CABA, según la rotación nacional.
- Brechas persistentes: Catamarca, Jujuy, Santiago del Estero y Tucumán continúan con 2 nodos cada una; Buenos Aires mantiene concentración de registros en Escobar, por lo que no se agregaron puntos nuevos en esta ejecución.


## Integración y corrección de CI

- PR #17 integrado mediante squash en `main`: https://github.com/leandrocuellarok-netizen/mapafederal/pull/17.
- Merge commit: `a678d9f283690c0221a24f8f78561a484ad8a9c7`.
- GitHub Actions #852 (run ID 45946731172) falló en la aserción de rotación regional: el workflow aún esperaba Patagonia → Buenos Aires Province, aunque esta ejecución ya había avanzado correctamente a Buenos Aires Province → CABA. Las validaciones previas del catálogo, coordenadas y nuevo registro Puerto de Quequén pasaron.
- Corrección preparada en PR #18: actualizar la expectativa del validador y apuntar `catalogCommit` al merge commit real de `main`.
- Workflow correction commit: `7ede369bd6d54bfbc3836d7e890f3cd9a2c7f1ec`; coverage correction commit: `7fbcdf24182b4795e50b3d95382629fc83c5ac17`.
- Pages no se desplegó en #852 porque el job de validación falló. Se verificará el siguiente run después de integrar PR #18.
