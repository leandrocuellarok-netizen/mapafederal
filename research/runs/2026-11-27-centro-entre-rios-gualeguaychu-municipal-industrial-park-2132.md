# MAPA FEDERAL — Centro / Entre Ríos / Parque Industrial Gualeguaychú (Municipal)

- Fecha y hora de verificación: 2026-11-27 21:32 ART (UTC-3).
- Rama base inspeccionada: `main` en `4ebc24a0a00f411f5238d270cc7f58f22ca89e2b`.
- Último workflow previo inspeccionado: Actions #905, `validate=success` y `deploy=success`.
- Rama de trabajo: `automation/centro-entre-rios-gualeguaychu-industrial-20261127-2132`.
- Región priorizada: Centro; próxima región de la rotación: Patagonia.
- Jurisdicción: Entre Ríos, departamento/localidad Gualeguaychú.
- Categoría: Industria.
- Brecha abordada: Entre Ríos tenía 4 nodos y 0 referencias de Industria; Centro tenía 17 nodos. Se priorizó una categoría vacía dentro de la región siguiente de la rotación.

## Hallazgo y decisión

Se incorporó el Parque Industrial Gualeguaychú (Municipal), ficha provincial id=37, como referencia general de infraestructura industrial.

### Fuente primaria y coordenadas

- Fuente primaria: Gobierno de Entre Ríos, Dirección de Industria y Parques Industriales, ficha oficial:
  https://portal.entrerios.gov.ar/parquesindustriales/parque.html?id=37
- La ficha identifica el establecimiento como «Parque Industrial Gualeguaychú (Municipal)», en Gualeguaychú - Gualeguaychú.
- Superficie total declarada en la ficha: 23 ha.
- Coordenadas publicadas en la sección «Ubicación»: `-33.0267144514673, -58.6065778299143`.
- Los valores se copiaron sin geocodificación, reproyección ni transformación de datum.
- La fuente no declara datum, CRS/EPSG, precisión, método de captura ni semántica geométrica exacta.
- El marcador se usa como referencia general del parque; no representa acceso, centroide certificado, lote ni perímetro.

### Estado operativo

La ficha provincial confirma la identificación administrativa del parque y publica una superficie declarada, pero no informa fecha de actualización ni evidencia suficiente para afirmar operación vigente, actividad actual de cada empresa o disponibilidad efectiva de lotes. Se conserva `status: no_verificado`; no se presenta como parque plenamente operativo ni como oferta comercial disponible.

### Distinción con otro parque de Gualeguaychú

La ficha provincial id=2 corresponde a Parque Industrial Gualeguaychú - CODEGU, una instalación distinta. Aunque documenta infraestructura y empresas, la coordenada que aparece en su sección «Información y contacto del municipio» no está atribuida expresamente al parque. No se reutilizó ese punto; queda pendiente una geometría oficial o coordenada explícita del predio CODEGU.

## Cobertura después de la incorporación

- Catálogo nacional: 127 nodos (antes 126).
- Entre Ríos: 5 nodos (antes 4); incorpora 1 Industria.
- Centro: 18 nodos (antes 17).
- Industria: 18 nodos (antes 17).
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se crearon categorías nuevas.
- Las jurisdicciones menos representadas permanecen en 3 nodos: Catamarca, Jujuy, Salta, Santiago del Estero y Tucumán.
- Rotación: `lastTargeted=Centro`, `nextTarget=Patagonia`.

## Archivos modificados

- `data/strategic-nodes.json`: nuevo registro `entre-rios-industria-parque-industrial-gualeguaychu-municipal`.
- `research/national-map-coverage.json`: conteos provinciales, regionales y por categoría; rotación; metodología y candidato CODEGU pendiente.
- `.github/workflows/static.yml`: regresiones para el registro, coordenadas, estado no verificado, conteos de Entre Ríos/Centro/Industria y rotación.
- `README.md`: conteo nacional actualizado a 127 y nota metodológica.
- `index.html` no se modificó: la portada carga `./data/strategic-nodes.json` y el filtro existente `Industria` ya está integrado.

## Validación y publicación

- Prevalidación local sobre los contenidos recuperados de GitHub: JSON parseado; 127 IDs únicos, 127 nombres únicos y 127 pares de coordenadas únicos; coordenadas dentro del rango nacional; categorías y jurisdicciones admitidas.
- Matriz recalculada desde el catálogo: Entre Ríos = 5, Centro = 18, Industria = 18; filas provinciales reconciliadas con el catálogo.
- Regresión de GitHub Actions añadida para el ID, coordenadas, fuente, CRS no declarado, calidad de referencia y estado `no_verificado`.
- Commit del catálogo: `3782b4fa8b403557cc9701e74f91fc86ecc75058`.
- Commit de matriz: `248c4f396ea4200af8121562063c32ed4d78b646`.
- Commit de validaciones: `138d11e8756dc4631b842c3c8eeb6d542e873828`.
- Commit de README: `22f137b083a1e9668a2fe31e9e7e817fe45f70ec`.
- PR, merge, SHA final, workflow y Pages: pendientes de integración y ejecución al momento de crear esta bitácora.

## Gaps y próxima prioridad

- La coordenada del Parque Industrial Gualeguaychú (Municipal) no declara datum/CRS, precisión ni semántica geométrica; el marcador no debe tratarse como acceso ni perímetro.
- La operación vigente y disponibilidad de lotes del parque municipal no están verificadas.
- Parque Industrial Gualeguaychú - CODEGU (ficha id=2) permanece sin marcador hasta obtener coordenada explícita del predio o geometría oficial.
- Entre Ríos continúa sin nodos catalogados en Ciudad, Aeropuerto, Logística, Recurso mineral y Estación ferroviaria; cero no significa ausencia territorial.
- Próxima región de la rotación: Patagonia, priorizando la provincia/categoría menos cubierta con coordenadas atribuibles.
