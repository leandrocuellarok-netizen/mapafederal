# MAPA FEDERAL — Patagonia / Chubut / Parque Nacional Los Alerces

- Fecha y hora de verificación: 2026-11-26T18:32:00-03:00 (ART).
- Rama publicada: `main`.
- HEAD previo: `0dd5b91f5f2213ff83ff73925bf1a503d5f60228`.
- Commit final de esta actualización: `34181b50a9932fc16557659291bf970a936e3625`.
- Región trabajada: Patagonia. Próxima región de la rotación: Buenos Aires Province.
- Alcance: mapa nacional de portada `index.html`, catálogo `data/strategic-nodes.json`, 24 jurisdicciones y nueve categorías existentes.

## Mejora principal

Se incorporó el Parque Nacional Los Alerces, Chubut, categoría `Turismo`.

- ID estable: `chubut-turismo-parque-nacional-los-alerces`.
- Jurisdicción: Chubut.
- Departamento: Futaleufú.
- Coordenadas publicadas por SIB/APN: `[-42.84453, -71.83818]`.
- Fuente de coordenadas: [SIB/APN — Parque Nacional Los Alerces](https://sib.gob.ar/areas-protegidas/parque-nacional-los-alerces).
- Fuente institucional principal: [APN — Parque Nacional Los Alerces](https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-los-alerces).
- Estado de uso público: `operativo`, referido al área protegida y a su oferta documentada; no implica disponibilidad en tiempo real de senderos, rutas, servicios ni prestadores.

### Calidad geoespacial

- SIB/APN publica 42°50'40.31''S, 71°50'17.46''O y sus equivalentes decimales.
- CRS/datum: la ficha no declara datum ni CRS; no se asigna EPSG.
- Transformación: ninguna; se transcribieron los valores decimales publicados por SIB/APN.
- La ficha no define si la coordenada representa un acceso, centroide o punto interno. El nodo se identifica como referencia geográfica general; no se presenta como portada, acceso ni perímetro.
- No se calculó centroide ni se infirió ubicación desde un topónimo o domicilio.

### Verificación del estado

- [APN — Horarios / Cómo llegar](https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-los-alerces/horarios-como-llegar) documenta horarios estacionales, tres portadas de acceso, centro de visitantes, estacionamiento y transporte.
- [APN — Actividad institucional del 13/11/2026](https://www.argentina.gob.ar/noticias/el-parque-nacional-los-alerces-realizo-la-presentacion-institucional-del-proceso-de-conformacion-de-su-comision-asesora-local) confirma actividad de gestión reciente en el área protegida.
- [APN — Incendio Puerto Café declarado extinguido el 13/04/2026](https://www.argentina.gob.ar/node/497937) aporta contexto de la emergencia anterior; no se usa como prueba de disponibilidad actual de cada sector.
- No se verificaron NOTAM, alertas meteorológicas, estado de rutas ni disponibilidad de prestadores en tiempo real.

## Cobertura

- Catálogo nacional: 101 → 102 nodos.
- Chubut: 5 → 6 nodos.
- Turismo nacional: 9 → 10 nodos.
- Turismo en Chubut: 0 → 1.
- Patagonia: 21 → 22 nodos.
- Jurisdicciones: 24 de 24.
- Categorías: nueve; no se crearon categorías nuevas.
- Chubut conserva brechas en Ciudad, Paso fronterizo, Logística, Industria y Estación ferroviaria.
- Tucumán continúa como la jurisdicción menos representada, con un nodo. La rotación regional, sin embargo, continúa hacia Buenos Aires Province.

## Deduplicación y validación

- Se comparó ID, nombre y par de coordenadas contra el catálogo completo antes de insertar.
- Resultado posterior: 102 IDs únicos, 102 nombres únicos y 102 pares de coordenadas únicos.
- Se verificaron 24 jurisdicciones, categorías admitidas y coordenadas dentro del rango nacional.
- La matriz se recalculó por jurisdicción, categoría y región; quedó reconciliada en 102 nodos.
- Se añadió una prueba de regresión específica para ID, provincia, departamento, categoría, coordenadas, fuente, CRS no declarado, calidad cartográfica, estado y fecha de verificación.
- El validador existente comprobó JSON geográfico/editorial, catálogo, matriz, filtros, interfaz bilingüe, comparación provincial, CSV, SEO/GEO, módulos y sintaxis JavaScript.

## Archivos y commits

- `data/strategic-nodes.json`: incorporación del nodo.
- `research/national-map-coverage.json`: conteos, brechas y rotación Patagonia → Buenos Aires Province.
- `README.md`: total actualizado a 102 nodos.
- `.github/workflows/static.yml`: prueba de regresión y cobertura de Chubut.
- `research/runs/2026-11-26-patagonia-chubut-los-alerces-tourism-1832.md`: esta bitácora.

Commits:
- Catálogo: [`98419b6`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/98419b6433357748ed2afea437dfc606cf0f7d6f).
- Matriz: [`4ad78a9`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/4ad78a9e4efddcfb1fbb6cab2fc911623e9d731b).
- README: [`3bd5b45`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/3bd5b4559307cb2d002248563c04c2ce2981337b).
- Prueba de regresión: [`064cfad`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/064cfad1955e30e250e3e89c9380db8033ede78f).
- Corrección final del conteo README y HEAD de `main`: [`34181b5`](https://github.com/leandrocuellarok-netizen/mapafederal/commit/34181b50a9932fc16557659291bf970a936e3625).

## Integración, validación y publicación

- `index.html` no se modificó: la portada ya carga `./data/strategic-nodes.json` mediante `loadPoints()` y conserva el filtro `Turismo`.
- GitHub Actions #826, run `45899092672`, commit `34181b50a9932fc16557659291bf970a936e3625`: `validate: success`, `deploy: success`.
- [Consultar ejecución #826](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45899092672).
- GitHub Pages confirmó el job `Deploy to GitHub Pages`.
- Inspección independiente de la portada pública: no disponible desde el entorno de verificación; la URL de Pages no respondió. No se declara comprobación visual independiente.

## Brechas pendientes

- La coordenada SIB/APN del parque es una referencia general; no se conoce el rol espacial exacto del punto y no debe usarse para navegación.
- No se agregó Punta Tombo: la ficha SIB publica una referencia redondeada a minuto y no ubica una portada o centro de visitantes con precisión suficiente para un marcador puntual. La Provincia documenta la temporada y el uso turístico, pero falta una geometría o coordenada de acceso atribuible.
- Siguen pendientes para Chubut las categorías Ciudad, Paso fronterizo, Logística, Industria y Estación ferroviaria. No se agregan nodos sin evidencia geoespacial suficiente.
- Próxima prioridad regional: Buenos Aires Province; mantener en paralelo la vigilancia de las jurisdicciones menos cubiertas, especialmente Tucumán.
