# MAPA FEDERAL — Patagonia / Chubut — 2026-11-26 04:37 ART

## Objetivo de la ejecución
Región: Patagonia. Provincia: Chubut. Categoría: Aeropuerto.

Brecha abordada: Chubut tenía un único nodo aeroportuario. Se incorporó el Aeropuerto El Tehuelche de Puerto Madryn con ARP publicado por ANAC y estado documental explícito.

## Registro incorporado
- ID: `chubut-aeropuerto-el-tehuelche-savy`
- Nombre: Aeropuerto El Tehuelche (SAVY)
- Coordenadas ARP: `-42.75916667, -65.10277778`
- Categoría: Aeropuerto
- Estado: `operativo` para la infraestructura aeroportuaria según horarios AIP publicados; no se afirma una frecuencia comercial vigente.
- El ARP corresponde al centro geométrico de pista, no al acceso, terminal ni perímetro.
- La fila AIP no declara datum/CRS. Solo se convirtió DMS a grados decimales; no hubo reproyección ni transformación de datum.

## Fuentes primarias
1. ANAC, AIP Suplemento A 65/2024, AD 2.2: https://ais.anac.gob.ar/descarga/sup-663d2d7f10036
2. ANAC, AIP Suplemento A 192/2025: https://ais.anac.gob.ar/descarga/sup-68e66bc4cf3d8
3. ANAC, AIC A 13/2026: https://ais.anac.gob.ar/descarga/aic-6a1986a33b972
4. Argentina.gob.ar, renovación de pista y terminal, 28/07/2024: https://www.argentina.gob.ar/node/434180

## Cobertura resultante
- Catálogo: 91 → 92 nodos.
- Chubut: 4 → 5 nodos; Aeropuertos: 1 → 2.
- Patagonia: 19 → 20 nodos.
- Categoría Aeropuerto: 22 → 23.
- Jurisdicciones: 24; categorías existentes: 9.
- Próxima región de la rotación: Buenos Aires Province.

## Candidato no incorporado
Área Natural Protegida Cabo Dos Bahías, Camarones (Turismo). Las fuentes oficiales confirman el área, la infraestructura de uso público y el acceso, pero no publican una coordenada exacta atribuible para la entrada o una instalación de visitantes. No se geocodificó el topónimo ni se derivó un punto desde distancias viales. El candidato quedó registrado en la matriz.

## Archivos modificados
- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `README.md`
- `.github/workflows/static.yml`
- Este registro en `research/runs/`

`index.html` no se modificó: la portada ya consume `data/strategic-nodes.json` y mantiene el filtro Aeropuerto.

## Commits de la rama de trabajo
- Catálogo: `fbf0391450277efd5116425f7bf9b1e1b75c40c0`
- Matriz: `10f6658d7bc7cb553f9c56a6a9b080a1b921a24d`
- README: `8037a9ab2a5f7f466019b1642614dae8f2136ae5`
- Validación del workflow: `867e975e3bac35f849dce327db3b0d5308c10e62`

## Validación previa al push
JSON parseable; ID, nombre y coordenadas sin duplicados; coordenadas dentro del rango argentino; categoría y jurisdicción permitidas; fuentes HTTPS; matriz recalculada y conciliada con los 92 registros; filtro de portada confirmado en el archivo existente.

## GitHub Actions y Pages
Pendiente de inspección posterior a la actualización de `main`. No se declara despliegue ni publicación hasta comprobar la ejecución y el job de Pages.

## Próxima prioridad
Buenos Aires Province. Mantener la búsqueda de nodos en provincias y categorías subrepresentadas; no agregar marcadores sin coordenadas exactas y atribuibles.
