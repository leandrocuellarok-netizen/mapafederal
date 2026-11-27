# MAPA FEDERAL — Jujuy / Parque Nacional Calilegua

- Fecha y hora de investigación: 2026-11-27 04:34 ART (UTC-3).
- Región objetivo: NOA.
- Provincia: Jujuy.
- Categoría: Turismo.
- Cobertura previa: 2 nodos en Jujuy (Aeropuerto y Paso fronterizo); sin nodo Turismo.
- Mejora principal: incorporación del Centro de Visitantes Aguas Negras — Parque Nacional Calilegua.
- ID: `jujuy-turismo-centro-visitantes-aguas-negras-calilegua`.
- Coordenadas: `[-23.7597349, -64.8504986]`.
- Estado: operativo documentado por APN para el centro de visitantes; no se comprobó transitabilidad de la RP 83 en tiempo real.

## Fuentes

1. APN — Horarios / Cómo llegar: https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-calilegua/horarios-como-llegar
   - Documenta acceso por RP 83, oficina de informes en Centro de Visitantes Aguas Negras y atención diaria de 8 a 19 h.
2. SIB/APN — ficha del Parque Nacional Calilegua: https://sib.gob.ar/index.php/areas-protegidas/parque-nacional-calilegua
   - Confirma Jujuy, departamento Ledesma, creación en 1979, superficie de 76.306 ha y ubicación general.
3. Google Maps — pin del Centro de Visitantes Aguas Negras: https://maps.app.goo.gl/yDz2i2xoGBvbDsgt8
   - Fuente secundaria de coordenadas, enlazada desde el «Ver mapa» de APN. El destino identifica el Centro de Visitantes y expone el pin `-23.7597349, -64.8504986`. No declara CRS/datum ni precisión geodésica.

## Registro incorporado

- Se agregó un único nodo Turismo a Jujuy.
- El punto representa el Centro de Visitantes Aguas Negras; no representa el perímetro ni el centroide del parque.
- No se geocodificó el nombre ni se calculó un centroide.
- CRS/datum no declarados por la fuente de coordenadas; no se asignó EPSG ni se realizó reproyección.

## Cobertura

- Catálogo: 110 nodos.
- Jujuy: 3 nodos; Turismo pasa de 0 a 1.
- NOA: 12 nodos.
- Turismo nacional: 16 nodos.
- Jurisdicciones: 24/24.
- Menos representadas después de la incorporación: Catamarca, Santiago del Estero y Tucumán (2 nodos cada una).

## Candidato no incorporado — Catamarca

La Reserva Natural Provincial Laguna Blanca fue revisada pero no agregada. SIB/APN confirma su existencia y jurisdicción, pero la ubicación publicada es solo 26°21'S, 66°48'O (precisión de minuto), sin punto de acceso ni geometría exacta. El WFS de IDECat anunciado en su portal respondió 403 al solicitar GetCapabilities. Tampoco se verificó acceso público para visitantes. Se requiere geometría oficial o coordenada puntual atribuible y evidencia de acceso antes de agregar un marcador.

Fuentes:
- https://sib.gob.ar/index.php/areas-protegidas/reserva-natural-provincial-laguna-blanca-catamarca
- https://nodoide.catamarca.gob.ar/geoservicios.php
- https://nodoide.catamarca.gob.ar/geoserver/idecat/ows?service=wfs&version=2.0.0&request=GetCapabilities

## Archivos modificados

- `data/strategic-nodes.json`
- `research/national-map-coverage.json`
- `README.md`
- `research/runs/2026-11-27-noa-jujuy-calilegua-0434.md`

## Validación

- Preflight local del contenido: JSON parseable; ID, nombre y coordenadas no duplicados; jurisdicción Jujuy; categoría Turismo permitida; coordenadas dentro del rango argentino; URLs HTTPS.
- Validación completa del repositorio y GitHub Actions: pendiente de integración en `main`.
- Commit de catálogo en rama de trabajo: `176c0e9012ea0253b93bfdb2eeb156482fd4b443`.
- Pull request / commit de integración: pendiente.
- Workflow run: pendiente.
- GitHub Pages: pendiente de confirmación.

## Próxima prioridad

NEA, según rotación federal. Mantener como alerta de baja cobertura a Catamarca, Santiago del Estero y Tucumán.