# MAPA FEDERAL — NOA / Tucumán / Estación Tucumán (Mitre)

- Fecha y hora de investigación: 2026-11-27 18:36 ART (UTC-3).
- Base inspeccionada: `main` en `705186b66a29bc77d896f1096bca8d8b9628aa3e`.
- Último workflow anterior: Actions #897, run ID `46064814329`, validación y `Deploy to GitHub Pages` exitosos.
- Región de rotación anterior: NEA; la siguiente era Cuyo. Se aplicó una prioridad excepcional a Tucumán porque era la jurisdicción con menor cobertura (2 nodos) y no tenía estación ferroviaria.
- Provincia: Tucumán.
- Departamento: Capital.
- Localidad: San Miguel de Tucumán.
- Categoría: Estación ferroviaria.

## Mejora principal

Se incorpora Estación Tucumán (Mitre) al catálogo nacional consumido por la portada:

- ID: `tucuman-estacion-ferroviaria-estacion-mitre-san-miguel`.
- Nombre: Estación Tucumán (Mitre).
- Coordenadas: `[-26.8210207, -65.2109874]`.
- Fuente institucional de entidad y estado: [Trenes Argentinos — Buenos Aires–Tucumán](https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/servicios-regionales-larga-distancia/buenosaires-tucuman). La página consultada el 27/11/2026 identifica la Estación Tucumán y publica trenes dos veces por semana.
- Fuente de coordenadas: [Google Maps — Estación de Trenes Mitre](https://maps.app.goo.gl/7wrLkDmdmxdffjjy5), pin enlazado directamente desde la ficha oficial de Trenes Argentinos. Se identifica como fuente secundaria.
- Google Maps no declara datum/CRS, EPSG, precisión ni fecha de captura. No se asigna EPSG ni se realiza transformación; se copian las coordenadas decimales del destino del pin.
- El marcador es una referencia puntual de la estación; no representa andén, acceso ferroviario específico, centroide certificado ni perímetro.
- El estado `operativo` se refiere al servicio publicado por Trenes Argentinos (dos veces por semana), no a una verificación de circulación en tiempo real. No se verificaron calendario puntual ni cancelaciones.
- Publicador de la fuente principal: Trenes Argentinos / Argentina.gob.ar.
- Fecha de publicación: no indicada en la página; verificación documental 27/11/2026.

## Cobertura antes y después

- Catálogo nacional: 123 → 124 nodos.
- Tucumán: 2 → 3; Estación ferroviaria: 0 → 1.
- NOA: 14 → 15 nodos; las cinco jurisdicciones siguen representadas.
- Estaciones ferroviarias nacionales: 7 → 8.
- Jurisdicciones representadas: 24/24.
- Categorías existentes: 9; no se creó ninguna categoría.
- Mínimo de cobertura posterior: seis jurisdicciones empatadas con 3 nodos: Catamarca, Formosa, Jujuy, Salta, Santiago del Estero y Tucumán.
- La próxima región de la secuencia queda en NEA para retomar la rotación después de priorizar el mínimo de cobertura de Tucumán.

## Archivos modificados

- `data/strategic-nodes.json` — nuevo registro de la Estación Tucumán (Mitre).
- `research/national-map-coverage.json` — conteos, categorías, brechas mínimas, rotación, metodología y procedencia del catálogo.
- `README.md` — total nacional y advertencias de calidad del nuevo punto.
- `.github/workflows/static.yml` — regresiones para el nuevo registro, conteos y matriz.
- Esta bitácora.

`index.html` no se modifica: la función `loadPoints()` sigue leyendo `./data/strategic-nodes.json` y la categoría `Estación ferroviaria` ya existe en los filtros de la portada.

## Validación previa a integración

- Catálogo JSON parseado; 124 registros previstos.
- ID, nombre y par de coordenadas comprobados contra el catálogo completo; no había duplicado.
- 124 IDs únicos, 124 nombres únicos y 124 pares de coordenadas únicos.
- Coordenadas dentro del rango argentino.
- Provincia, departamento y localidad declarados por el punto de referencia y la ficha de Trenes Argentinos.
- Tipo `Estación ferroviaria` ya admitido por la interfaz y el workflow.
- Fuente principal HTTPS y fuente secundaria de coordenadas documentadas.
- CRS/datum/precisión no declarados por Google Maps; limitación registrada.
- Matriz recalculada desde el catálogo: 24 jurisdicciones y 9 categorías.
- Tucumán: 3 nodos; Estación ferroviaria: 1.
- NOA: 15 nodos.
- No se añadió un marcador de Ciudad para San Miguel de Tucumán: el punto RAGA del IGN es una estación gravimétrica dentro de la UNT, no un centroide urbano; se mantiene como posible referencia geodésica documental, no como centro de ciudad.

## Integración y publicación

- Rama: `automation/noa-tucuman-mitre-station-1836`.
- Commit de catálogo: `3edcf80d95eb223df3fe67a2af5a3a1290202dd0`.
- Commit de matriz: `0ad2ff6537a9f97377c37731cc2ee371f42c3ef9`.
- Commit de README: `63a3bba88d98d37b1c4d327f210d710204d4110b`.
- Commit de workflow: `2fc30c560f00c1061251eb934f986e1672b9c8d8`.
- PR #44: https://github.com/leandrocuellarok-netizen/mapafederal/pull/44.
- Merge, SHA final, Actions y GitHub Pages: pendientes de integración y verificación.

## Brechas no resueltas

- Tucumán sigue sin nodos en Ciudad, Puerto, Logística, Industria y Recurso mineral. No se usó el punto de estación como centroide urbano ni se inventaron ubicaciones industriales.
- La capa IDET de localidades sigue pendiente: la estación ferroviaria no reemplaza una geometría oficial de San Miguel de Tucumán.
- El estado de circulación ferroviaria no se verificó en tiempo real.
