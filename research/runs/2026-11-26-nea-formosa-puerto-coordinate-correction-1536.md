# MAPA FEDERAL — NEA / Formosa: corrección de coordenadas del puerto

- Fecha y hora: 2026-11-26T15:36:03-03:00 (America/Argentina/Buenos_Aires).
- Jurisdicción priorizada: Formosa.
- Región de rotación: NEA.
- Categoría principal: Puerto.
- Categoría investigada sin incorporación: Industria.
- Resultado: 0 nodos nuevos; 1 registro geográfico corregido.

## 1. Corrección del catálogo

Se conservó el ID estable `formosa-puerto-puerto-de-formosa` y se reemplazó la coordenada aproximada previa por la coordenada puntual publicada por la Agencia Nacional de Puertos y Navegación (ANPyN).

| Campo | Antes | Corregido |
|---|---:|---:|
| Latitud | -26.184 | -26.19861111 |
| Longitud | -58.177 | -58.14736111 |

- Fuente de coordenadas: [ANPyN — Puerto Formosa](https://www.argentina.gob.ar/economia/agencia-nacional-de-puertos-y-navegacion/puertos/formosa).
- Coordenadas originales publicadas: 26°11'55.0"S, 58°08'50.5"W.
- Transformación: conversión aritmética de grados, minutos y segundos a grados decimales; sin transformación de datum ni reproyección.
- CRS/datum: no declarados por la ficha; no se atribuyó EPSG.
- Calidad: la ficha no precisa si la coordenada es el punto medio del puerto o del muelle; no se presenta como acceso ni perímetro.
- Dato técnico: ANPyN informa 232 m lineales de atraque.
- Habilitación histórica: el [Decreto 768/2003](https://www.argentina.gob.ar/normativa/nacional/norma-88513/texto) habilitó el Puerto Nuevo de la Ciudad de Formosa como provincial, de uso público y destino comercial.
- Estado registrado: `no_verificado`. La habilitación histórica y la ficha técnica no bastan para confirmar operación efectiva actual.

La coordenada anterior estaba aproximadamente a 3,37 km de la posición publicada por ANPyN. Se preservó la procedencia de la corrección en `verification.scope`; no se modificaron el ID, la jurisdicción ni la categoría.

## 2. Investigación de Industria: candidato no incorporado

El Gobierno de Formosa documentó actividad empresarial en el Parque Industrial de la ciudad:
- [30/09/2026 — empresa química radicada en el Parque Industrial](https://m.formosa.gob.ar/noticia/34029/83/el_parque_industrial_de_formosa_se_posiciona_como_referente_en_el_nea_con_empresa_quimica_que_invierte_en_innovacion_y_energia_renovable).
- [05/09/2026 — Semana de la Industria en el Parque Industrial](https://m.formosa.gob.ar/noticia/34729/1301/formosa_cerro_la_semana_de_la_industria_con_inversiones_innovacion_y_respaldo_al_sector_productivo).
- [IDEF — servicios geoespaciales](https://idef.formosa.gob.ar/geoportal/servicios).

No se recuperó geometría del perímetro ni coordenada puntual atribuible del predio. IDEF informa disponibilidad de servicios WMS, pero en esta ejecución no se obtuvo la feature o polígono correspondiente. No se geocodificó un domicilio ni se usó el centroide urbano. El parque queda en `pendingCandidates`, sin marcador.

## 3. Cobertura y rotación

- Catálogo nacional: 99 nodos; 24 jurisdicciones; 9 categorías.
- Formosa: 2 nodos (1 Puerto y 1 Aeropuerto).
- Totales por categoría: sin cambios.
- Matriz: reconciliada con el catálogo; se conserva la brecha de Industria en Formosa.
- Última región investigada: NEA.
- Próxima región: Cuyo, comenzando por La Rioja según la cobertura actual.

## 4. Validación y publicación

- JSON del catálogo y de la matriz: parseo correcto.
- IDs: 99/99 únicos.
- Nombres: 99/99 únicos.
- Coordenadas: 99/99 pares únicos; la coordenada corregida está dentro del rango nacional.
- Conteos por provincia y categoría: matriz reconciliada; Formosa coincide (Puerto 1, Aeropuerto 1).
- Categorías: las nueve categorías existentes, sin altas ni duplicaciones.
- Portada: `index.html` no se modificó; sigue cargando `./data/strategic-nodes.json` y los filtros actuales.
- Se añadió al workflow una aserción específica para proteger la coordenada, fuente, CRS no declarado y estado de verificación del Puerto de Formosa.

Commits:
- Catálogo: `7344ab7816de54198eeff0979a056e6a283ef594`.
- Matriz: `00eff7cde676e20d4de5d0d64f6c4a3a7f1611ce`.

GitHub Actions:
- [#815 — run 45877231649](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45877231649), sobre el commit de catálogo: `validate: success`, `deploy: success`; Pages completó.
- [#816 — run 45877263223](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45877263223), sobre un commit intermedio de matriz: cancelado al ser reemplazado por la reconciliación final; no fue un fallo de validación.
- [#817 — run 45877293767](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45877293767), sobre el commit de matriz final: `validate: success`, `deploy: success`; Pages completó.

La portada pública se intentó abrir en `https://leandrocuellarok-netizen.github.io/mapafederal/`, pero el entorno de verificación no pudo acceder a la URL. Se confirma el job de despliegue de Pages, no una inspección visual independiente del marcador.

## 5. Archivos tocados

- `data/strategic-nodes.json`: corrección de un nodo existente y metadatos de procedencia.
- `research/national-map-coverage.json`: nota de rotación, candidato industrial pendiente y referencia al commit del catálogo.
- `.github/workflows/static.yml`: aserción de regresión para el Puerto de Formosa.
- `research/runs/2026-11-26-nea-formosa-puerto-coordinate-correction-1536.md`: este registro.

No se modificaron `index.html`, módulos regionales ni datasets de otros proyectos.
