# MAPA FEDERAL — NEA / Formosa / Parque Industrial — preflight geoespacial

- Fecha y hora de investigación: 2026-11-27 19:31 ART (UTC-3).
- Base inspeccionada: `main` en `ab7dffe22bb29e42ccf1ee6244fe9515c7e32748`.
- Último workflow previo: Actions #899, run ID `46071991864`, `validate` y `Deploy to GitHub Pages` exitosos.
- Rotación: la matriz conserva `lastTargeted=NOA` y `nextTarget=NEA`; esta ejecución realizó preflight NEA en Formosa, pero no se considera una incorporación territorial completada.
- Jurisdicción priorizada: Formosa, empatada en el mínimo nacional con 3 nodos.
- Categoría investigada: Industria.
- Cobertura actual de Formosa: 3 nodos — Aeropuerto, Puerto y Turismo. Industria permanece ausente.

## Resultado principal

No se incorporó un nodo al catálogo geográfico. La revisión confirmó actividad industrial documentada dentro del Parque Industrial de Formosa, pero no obtuvo una coordenada o geometría apta para un marcador exacto.

### Evidencia institucional revisada

1. Gobierno de Formosa, nota del 30/09/2026: documenta a Cloronor S.A. radicada en el Parque Industrial y una ampliación de planta en instalación. La instalación proyectada no se registra como operativa.
   - https://m.formosa.gob.ar/noticia/34029/83/el_parque_industrial_de_formosa_se_posiciona_como_referente_en_el_nea_con_empresa_quimica_que_invierte_en_innovacion_y_energia_renovable
2. Gobierno de Formosa, nota del 05/09/2026: ubica una actividad de la Semana de la Industria en las instalaciones de Cloronor dentro del parque.
   - https://m.formosa.gob.ar/noticia/34729/1301/formosa_cerro_la_semana_de_la_industria_con_inversiones_innovacion_y_respaldo_al_sector_productivo
3. IDEF — servicios: publica la disponibilidad de WMS/CSW y servicios de organismos productores; no proporciona en la página consultada una feature del Parque Industrial.
   - https://idef.formosa.gob.ar/geoportal/servicios
4. IDEF — visor: informa que la cartografía es referencial y que exactitud y vigencia deben revisarse en los metadatos de cada capa y con el organismo productor.
   - https://idef.formosa.gob.ar/geoportal/visores
5. Municipalidad de Formosa — ubicación geográfica: confirma la condición de capital y describe el emplazamiento urbano, pero no publica coordenadas del parque.
   - https://www.formosatuciudad.gob.ar/tu-ciudad/ubicacion-geografica

### Decisión geoespacial

- Estado del candidato: `not_added`.
- No se geocodificó una dirección ni se derivó un punto desde la RN 11.
- No se reutilizó el centroide de la ciudad ni el punto del aeropuerto/puerto.
- Falta recuperar un polígono o feature oficial del parque con CRS, atributos y fecha de actualización, o una coordenada institucional atribuible de un acceso/instalación puntual.
- La actividad de empresas concretas no permite inferir el perímetro ni el estado operativo de todo el parque.

## Cobertura y matriz

- Catálogo nacional: 124 nodos; sin altas ni correcciones geográficas.
- Formosa: 3 nodos; Industria continúa en `missingCategories`.
- Jurisdicciones: 24/24 representadas.
- Categorías existentes: 9; sin categorías nuevas.
- La rotación queda en NEA como próximo objetivo; no se avanza a Cuyo porque el turno NEA no produjo un registro verificable.
- El candidato pendiente de Formosa se actualizó con evidencia oficial reciente y el requisito geoespacial faltante.

## Archivos modificados

- `research/national-map-coverage.json` — actualización de fecha y ampliación de la justificación/fuentes del candidato pendiente Parque Industrial de Formosa.
- Esta bitácora.
- `data/strategic-nodes.json` no se modifica.
- `index.html` no se modifica; la portada continúa consumiendo el catálogo nacional existente.

## Validación

- JSON de matriz parseado.
- `nodeCount=124`, `jurisdictionCount=24` y 9 categorías preservados.
- Candidato Formosa conservado como `not_added`.
- Rotación validada: NOA → NEA.
- No se ejecutó aún el workflow de GitHub Actions para esta actualización documental; se verificará tras integrar el PR.
- No se cambió el catálogo de puntos, por lo que los controles de IDs, coordenadas, categorías y provincia permanecen sin modificaciones en esta ejecución.

## Integración y publicación

- Rama: `automation/nea-formosa-industrial-preflight-1931`.
- Commit de matriz: `8900c435fdafd9e062ce437cc0b45209f836342d`.
- Commit inicial de bitácora: `1dbfee6a1abda1140c863ea68c67479e0a76599b`.
- PR #45: https://github.com/leandrocuellarok-netizen/mapafederal/pull/45 (abierto; merge pendiente).
- Workflow y Pages: pendientes de ejecución después de integrar.
- La inspección visual de la portada no se realizó en esta ejecución.

## Próxima prioridad

Continuar NEA y obtener la respuesta de la capa/feature oficial del Parque Industrial de Formosa. Si el servicio no entrega geometría utilizable, priorizar otra combinación provincia/categoría con coordenadas publicadas directamente por una fuente primaria.
