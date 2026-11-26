# Mapa Federal — NOA / La Banda / Logística

- Fecha y hora de verificación: 26/11/2026, 00:36 ART.
- Alcance: mapa nacional de la portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.
- Rama: `main`.
- HEAD previo: `d8d5d693ab7988651eb422390d546dce78fe333c`.
- Región trabajada: NOA. Próxima región según rotación: NEA.

## Mejora principal

Se agregó un nodo de tipo `Logística`:

- Nombre: Zona Primaria Aduanera La Banda — Parque Industrial La Isla.
- ID estable: `sde-la-banda-zona-primaria-aduanera-la-isla`.
- Jurisdicción: La Banda, departamento Banda, provincia de Santiago del Estero.
- Coordenadas en el catálogo (latitud, longitud): `[-27.758108, -64.255669]`.
- Estado: `no_verificado` respecto de la operación aduanera actual.
- Naturaleza del marcador: vértice A del perímetro legal, no acceso ni centro del predio.

La Resolución General AFIP 3783/2015 delimita una zona primaria aduanera de 8.186,89 m² y publica cuatro vértices geosatelitales. El vértice A figura como 27° 45’ 29,19” S, 64° 15’ 20,41” O. Se convirtió de grados/minutos/segundos a grados decimales; no se aplicó transformación de datum.

Limitación geodésica: la resolución no declara CRS ni datum. Ese dato queda expresamente registrado como no especificado; por eso el marcador se describe como el vértice de la fuente y no como una ubicación de acceso o centroide. La habilitación administrativa de 2015 no se presenta como prueba de operación aduanera en 2026.

## Fuentes

1. AFIP, Resolución General 3783/2015, publicada el 06/07/2015. Sus artículos 1 y 2 delimitan y habilitan la zona primaria aduanera; el Anexo aporta las coordenadas del perímetro.  
   https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-3783-2015-248900/texto
2. Casa de Santiago del Estero, representación oficial provincial: identifica el Parque Industrial La Isla en La Banda, sus accesos cercanos y su inscripción en el RENPI. La página no informa fecha de publicación.  
   https://www.casadesantiago.gob.ar/comercio-exterior-parques-zonas-industriales
3. Gobierno de Santiago del Estero, 26/07/2023: informa la inauguración de un centro logístico del BCRA dentro del parque. Es evidencia de infraestructura logística en el predio, no de la operación aduanera actual.  
   https://sde.gob.ar/2023/07/26/el-banco-central-inauguro-en-santiago-un-centro-de-logistica-para-el-norte-y-el-centro-de-nuestro-pais/
4. Gobierno de Santiago del Estero, 02/09/2024: informa la puesta en marcha de una planta industrial dentro del parque.  
   https://sde.gob.ar/2024/09/02/el-gobernador-zamora-participo-de-la-inauguracion-de-dos-plantas-de-produccion-en-capital-y-banda/

## Brecha que permanece abierta

El Parque Industrial La Isla completo sigue pendiente como nodo de tipo `Industria`. La fuente provincial identifica el parque y su superficie urbanizada, pero no publica en esa ficha un polígono georreferenciado del parque. La RG 3783/2015 solo aporta el perímetro de la zona aduanera, que es una instalación distinta y más pequeña. Un directorio secundario ofrece una coordenada para el parque, pero no declara CRS/datum ni geometría; no se reutilizó como centro exacto del parque.

## Cobertura

- Catálogo nacional: 86 → 87 nodos.
- Santiago del Estero: 1 → 2 nodos; incorpora su primer nodo de tipo Logística.
- Total de nodos Logística: 2 → 3.
- Santiago del Estero deja de estar entre las jurisdicciones con menor cobertura.
- Jurisdicciones con un solo nodo: La Pampa, San Luis y Tucumán.
- Próxima región de rotación: NEA.

## Archivos modificados

- `data/strategic-nodes.json`: nuevo registro con ID estable, fuente, fecha, estado, trazabilidad geodésica y verificación.
- `research/national-map-coverage.json`: matriz recalculada, brecha industrial pendiente documentada y rotación avanzada a NEA.
- `.github/workflows/static.yml`: validación de IDs estables y coordenadas duplicadas; la prueba de rotación ahora valida el orden declarado en vez de fijar NOA como próximo destino.

## Validación, commit y publicación

- JSON: catálogo y matriz parseados; 87 registros, 24 jurisdicciones y nueve categorías.
- Duplicados: sin nombre duplicado, sin coordenada exacta duplicada y sin ID duplicado.
- Coordenadas: orden latitud/longitud, rango argentino válido; provincia y categoría admitidas.
- Integración: se conserva la conexión existente de `index.html` con `data/strategic-nodes.json`; `Logística` ya es una categoría del filtro nacional.
- Commit del catálogo, matriz y validador: `026e9bfbe1cf412441dd725a1bc11065b2a7f04a`.
- GitHub Actions #760 (run ID `45750050456`): `validate` aprobado y `deploy` aprobado; conclusión global `success`.
- GitHub Pages: el job `Deploy to GitHub Pages` terminó correctamente. La comprobación independiente de la URL pública no estuvo disponible desde el cliente de consulta, por lo que no se afirma una inspección visual independiente.
