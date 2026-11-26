# CABA — Parada 07 Reserva Ecológica / Auditoría de terminales internacionales

- Fecha y hora de verificación: 2026-11-26T20:33:13-03:00 (ART).
- Rama: `main`.
- HEAD inspeccionado al inicio: `5f3773f2f1d49f3528034cf148fd5d1556ebbe83`.
- Catálogo al inicio: 103 nodos; matriz de cobertura: 24 jurisdicciones y nueve categorías.
- Workflow previo: ejecución #830, commit `5f3773f2f1d49f3528034cf148fd5d1556ebbe83`, jobs `validate` y `deploy` completados con éxito.
- Alcance: mapa nacional de portada `index.html`; se verificó que carga `./data/strategic-nodes.json` mediante `loadPoints()` y genera sus filtros desde el catálogo.

## Provincia y categoría priorizadas

- Jurisdicción: CABA.
- Categoría incorporada: Turismo.
- Brecha abordada: CABA tenía cuatro nodos y no contaba con referencias de Turismo. La matriz pasa a cinco nodos; Turismo queda representado. Siguen pendientes Paso fronterizo, Logística, Industria y Recurso mineral.

## Punto incorporado

- ID: `caba-turismo-parada-07-reserva-ecologica-bus-turistico`.
- Nombre: Parada 07 — Reserva Ecológica (principal), Bus Turístico.
- Ubicación administrativa: Puerto Madero, Comuna 1, CABA.
- Coordenadas del catálogo (latitud, longitud): `[-34.616277328065124, -58.356996687129474]`.
- Fuente primaria de entidad y geometría: [Buenos Aires Data — Bus Turístico Paradas (GeoJSON)](https://data.buenosaires.gob.ar/zh_Hant_TW/dataset/bus-turistico/resource/ad2915b2-9f43-4fbe-b4ec-b425e989f339).
- Publicador: Gobierno de la Ciudad Autónoma de Buenos Aires.
- Fecha de creación del recurso: 25/09/2025; último cambio declarado: 03/11/2026.
- Registro de origen: feature GeoJSON `id=17`, “07. Reserva Ecológica (principal)”; dirección Achával Rodríguez, Dr. Av. 1500; barrio Puerto Madero; Comuna 1.
- CRS: OGC:CRS84, declarado por el GeoJSON.
- Transformación: la fuente publica [longitud, latitud]; el catálogo almacena [latitud, longitud]. Solo se reordenaron los ejes; no hubo reproyección ni transformación de datum.
- Calidad: punto oficial de parada; la fuente no declara método de captura ni precisión posicional. No es el acceso ni el perímetro de la Reserva Ecológica.
- Estado: `no_verificado`. El recurso acredita que la parada figura en el catálogo administrativo actualizado; no confirma prestación del servicio en tiempo real. No hubo verificación presencial.

## Investigación de pasos fronterizos CABA — sin incorporación

Se verificaron las dos terminales internacionales:

- [Migraciones — Pasos Internacionales](https://www.argentina.gob.ar/migraciones/pasos-internacionales) incluye Buquebus y Colonia Express entre las vías de ingreso/egreso en funcionamiento.
- [ANPyN — Puerto de Buenos Aires](https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/buenos-aires) identifica Dársena Norte 1ra/2da/7ma como muelle BUQUEBUS para pasajeros y Dársena Sur-Oeste como muelle COLONIA EXPRESS para pasajeros.
- [Colonia Express — Terminales](https://www.coloniaexpress.com/es/ar/mas-informacion/terminales/) publica para Buenos Aires la dirección Av. Elvira Rawson de Dellepiane 155, Puerto Madero Sur.
- [Certificado oficial de Migraciones 2025](https://www.argentina.gob.ar/sites/default/files/certificado_global_2025.pdf) identifica la Terminal Buquebus en Dársena Norte y Av. Antártida Argentina 821.

No se agregaron puntos de Paso fronterizo: ANPyN publica una coordenada general del Puerto de Buenos Aires, no una coordenada puntual de cada terminal. Los domicilios publicados por los operadores no se geocodificaron. Las coordenadas difundidas por [un directorio secundario para Buquebus](https://logistica.dir.ar/empresa/terminal-fluvial-buquebus-puerto-madero.html) y [otro para Colonia Express](https://argentina.worldplaces.me/es/view-place/75497846-terminal-fluviomaritima-colonia-express.html) no declaran método de captura, CRS ni precisión suficiente para incorporarlas como exactas. Ambas terminales permanecen en `pendingCandidates`.

## Cobertura resultante

- Catálogo: 104 nodos.
- Jurisdicciones: 24/24.
- Categorías: nueve.
- CABA: cinco nodos; Turismo pasa de cero a uno.
- CABA mantiene como brechas Paso fronterizo, Logística, Industria y Recurso mineral.
- Próxima región de la rotación: NOA. Tucumán continúa como la jurisdicción menos representada.

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `.github/workflows/static.yml`
- `README.md`
- `research/runs/2026-11-26-caba-reserva-ecologica-tourism-2033.md`

`index.html` no se modificó: el punto se integra mediante el catálogo y el filtro existente.

## Validación, commit y publicación

- Validación previa del repositorio: ejecución #830 aprobada; jobs `validate` y `deploy`.
- Validación de esta incorporación: pendiente de Actions.
- Commit de catálogo y documentación: `3ec915af721bafb723d9c4f35db793a3968e2630`.
- GitHub Actions #831, asociado al commit de catálogo: falló en una aserción del nuevo test por un error de mayúsculas en el literal `feature geojson id=17`; el job `deploy` fue omitido. La geometría y el registro no fueron rechazados por las validaciones generales; el fallo fue el texto de la prueba.
- Corrección del test y sincronización de `catalogCommit`: commit en curso.
- GitHub Actions y Pages posteriores a la corrección: pendientes.
- Inspección visual independiente de la portada: no disponible al momento de redactar este registro.

## Brechas no resueltas

- Geometría o coordenada oficial puntual de las terminales Buquebus y Colonia Express.
- Referencias CABA para Logística, Industria y Recurso mineral con geometría atribuible.
- Tucumán sigue siendo la jurisdicción menos cubierta; próxima prioridad regional NOA.
