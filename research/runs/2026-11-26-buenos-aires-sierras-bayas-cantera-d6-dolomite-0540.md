# MAPA FEDERAL — Buenos Aires Province / Sierras Bayas — 2026-11-26 05:40 ART

## Objetivo de la ejecución
Región: Buenos Aires Province. Provincia: Buenos Aires. Partido: Olavarría. Localidad: Sierras Bayas. Categoría: Recurso mineral.

Brecha abordada: Buenos Aires tenía 0 registros de Recurso mineral en el catálogo. Se agregó una concesión minera fiscal de dolomita con polígono legal delimitado por cuatro vértices publicados por la autoridad provincial.

## Registro incorporado
- ID: `buenos-aires-cantera-fiscal-d6-sierras-bayas`
- Nombre: Cantera fiscal D-6 — dolomita (Sierras Bayas)
- Coordenadas de catálogo: `-36.92455487, -60.14613878` (latitud, longitud)
- Categoría: Recurso mineral
- Estado: `no_verificado` para operación extractiva actual.
- La Resolución 57-SSMINMPCEITGP-2021 adjudicó a POLCECAL S.A. el permiso de explotación de la cantera fiscal D-6 para triturados pétreos de dolomita y fijó un plazo de diez años desde el otorgamiento. La resolución no acredita actividad extractiva en 2026 ni permite afirmar que el permiso siga vigente sin consultar el asiento actualizado.
- El marcador es el centroide geométrico calculado de la parcela de 4 ha 27 a 47 ca; no identifica un frente de extracción, acceso ni instalación.

## Fuente primaria
1. Boletín Oficial de la Provincia de Buenos Aires, Año CXII Nº 29007, 04/05/2021, Resolución 57-SSMINMPCEITGP-2021, páginas 46–48: https://boletinoficial.gba.gob.ar/secciones/10935/ver
2. Subsecretaría de Minería de la Provincia de Buenos Aires, página institucional del Catastro Minero Digital y registros: https://www.gba.gob.ar/produccion/areas_de_trabajo/mineria

La página institucional confirma que el Catastro Minero Digital representa derechos mineros registrados y que el Registro de Productores Mineros debe renovarse anualmente. El visor no permitió comprobar desde esta ejecución el asiento vigente de D-6; por eso no se afirma operación actual.

## Procedencia y transformación geoespacial
La resolución publica los vértices siguientes como POSGAR 07:
- SSM001: X 5913952.18, Y 5487025.23
- SSM002: X 5913912.25, Y 5487171.68
- SSM009: X 5913659.48, Y 5486899.22
- SSM010: X 5913754.05, Y 5486811.49

La resolución no declara la zona Gauss-Krüger. POSGAR 2007 / Argentina 5 (EPSG:5347) se infirió por la magnitud de los valores y la ubicación de Sierras Bayas; debe confirmarse contra los metadatos catastrales originales antes de usos legales o de mensura. Se interpretaron X como norte y Y como este, se calculó el centroide del polígono en coordenadas proyectadas y se transformó a EPSG:4326 mediante PROJ/pyproj. La geometría calculada arroja aproximadamente 42.746,4 m², coherente por redondeo con los 42.747 m² publicados. No se geocodificó el nombre del lugar.

## Cobertura resultante
- Catálogo nacional: 92 → 93 nodos.
- Buenos Aires: 26 → 27 nodos.
- Recurso mineral: 3 → 4 nodos.
- Buenos Aires deja de tener vacante la categoría Recurso mineral; Paso fronterizo permanece sin registros.
- Las 24 jurisdicciones y las nueve categorías existentes se conservan.
- Próxima región de la rotación: CABA.

## Archivos modificados
- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `README.md`
- Este registro en `research/runs/`

`index.html` no se modificó: la portada ya carga `data/strategic-nodes.json` y filtra los nodos por su campo `type`. No se creó una categoría nueva.

## Validación local de contenido
JSON parseable; ID, nombre y coordenadas sin duplicados; coordenadas dentro del rango argentino; categoría y jurisdicción admitidas; fuente HTTPS; matriz recalculada contra los 93 registros; totales regionales y por categoría conciliados. La validación automática completa, sintaxis JavaScript y publicación quedan sujetas al workflow de GitHub Actions posterior al push.

## Commits
- Catálogo: `a5a7fd3c841c08122a106a52f65c4a718eefeec7`.
- Matriz, README y registro: `b8294bc28dff4faefe4f8a44a4aeb57f709c60c7`.

## GitHub Actions y Pages
- Run #775 (`a5a7fd3c841c08122a106a52f65c4a718eefeec7`): falló la validación porque el catálogo ya tenía 93 nodos mientras la matriz todavía registraba 92; el job de despliegue fue omitido. Era el estado intermedio entre el commit del catálogo y el cierre de matriz.
- Run #776 (`b8294bc28dff4faefe4f8a44a4aeb57f709c60c7`): `validate` aprobado y `deploy` aprobado; el paso `Deploy to GitHub Pages` terminó correctamente. https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45785295221
- La portada pública no pudo abrirse independientemente desde el entorno de comprobación. Se confirma el despliegue del job de Pages, no una inspección visual independiente del mapa.

## Brechas pendientes
- Confirmar zona y metadatos del CRS con el Catastro Minero provincial.
- Verificar renovación, revocación y actividad extractiva actual de D-6.
- Buenos Aires: Paso fronterizo sigue vacío; no se fuerza un marcador si no existe un nodo compatible con la jurisdicción.
