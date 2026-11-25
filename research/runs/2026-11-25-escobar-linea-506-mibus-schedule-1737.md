# Escobar — verificación de horarios oficiales de la línea 506

Fecha de revisión: 25/11/2026, 17:37 ART  
Ámbito: Partido de Escobar — Belén de Escobar y Loma Verde  
Dominio: movilidad y conectividad — transporte público municipal  
Mejora principal: incorporar la programación publicada por Mi Bus para la línea 506 Est. Escobar–Mercado Libre, manteniendo separada la identificación del ramal B anunciado.

## 1. Inspección previa del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama: `main`.
- HEAD inicial observado: `f28e1150095170c1bbeab2d36885588deecd6d2e`.
- Último commit relevante previo de movilidad: `17b2176b6a8b334c276a3df3b23d667f56614c75` (ficha oficial Mi Bus de la línea 506).
- Prueba de movilidad previa: `28d1352d7d753aa7c957a82942c3bad70457b8a5`.
- Sin pull requests abiertos en la consulta.
- Se inspeccionaron los datos territoriales, la prueba de movilidad, el renderizado de Foco Escobar, el workflow `.github/workflows/static.yml` y las últimas ejecuciones de Actions.
- El conector permite inspeccionar el repositorio remoto; no expone un working tree local. No se afirma haber inspeccionado un árbol de trabajo local.
- Última ejecución anterior observada: workflow #691, con validación y despliegue exitosos sobre `f28e115`.

## 2. Fuentes y hallazgos

### Anuncio municipal — 3 de noviembre de 2026

La Municipalidad anunció dos nuevos ramales:
- Línea 503, ramal H, operado por Línea Sesenta S.A., entre la terminal de Belén de Escobar y la estación de Matheu.
- Línea 506, ramal B, operado por M.O.T.S.A., entre la terminal de Belén de Escobar y el sector del Parque Industrial de Loma Verde / centro de almacenamiento de Mercado Libre.

La publicación informó que comenzarían a funcionar durante la semana siguiente, pero no indicó fecha exacta, horarios ni frecuencias.  
Fuente: https://www.escobar.gob.ar/noticias/transporte-publico-escobar-suma-dos-nuevos-ramales-y-mas-colectivos-0-/

### Planificador oficial Mi Bus — consulta del 25 de noviembre de 2026

La portada de Mi Bus lista:
- Línea 506: “Est. Escobar - Mercado Libre (Loma Verde)”.
- Línea 503: “Escobar”, con ficha específica “SAN LUIS - ESCOBAR”.

Ficha de la línea 506:
- 23 paradas.
- Primera parada: TERMINAL ESCOBAR.
- Última parada: COL. ESTE (MERCADO LIBRE).
- Fuente: https://mibus.escobar.gob.ar/routes/21/R00005600/SH0002533

Horarios publicados para las paradas consultadas:

| Parada | Lunes a viernes | Domingo |
|---|---|---|
| TERMINAL ESCOBAR | 09:00, 12:00, 17:00 | 12:00, 17:00 |
| COL. ESTE (MERCADO LIBRE) | 09:30, 12:30, 17:30 | 12:30, 17:30 |

Fuentes de horarios:
- Terminal Escobar: https://mibus.escobar.gob.ar/stop_times/21/SH0002533/escobar_462
- Parada Mercado Libre: https://mibus.escobar.gob.ar/stop_times/21/SH0002533/S00192098

Las fichas dinámicas no informan fecha de publicación o actualización; se registró la fecha de consulta. La interfaz mostró opciones de lunes a viernes y domingo. No se infiere que no haya servicio los sábados. Los horarios se conservan como programación publicada para las paradas consultadas: no se infieren frecuencias intermedias, horarios de retorno ni circulación en tiempo real.

### Control de la línea 503

Mi Bus muestra la línea 503 “SAN LUIS - ESCOBAR”, con 29 paradas, pero la ficha no identifica el ramal H ni el destino estación Matheu.  
Fuente: https://mibus.escobar.gob.ar/routes/21/escobar_7/escobar_15

Por eso el ramal H permanece `anunciado` y sin equivalencia confirmada con la ficha genérica 503.

### Fuente secundaria

El Diario de Escobar publicó el 18/11/2026 que el ramal 506 ya funcionaba y difundió horarios. Se conserva como corroboración periodística secundaria; sus horarios no se importaron como si fueran una fuente oficial.  
Fuente: https://eldiariodeescobar.com.ar/article/ya-funciona-el-ramal-de-la-506-que-conecta-escobar-con-mercado-libre-y-el-parque-industrial-de-loma-verde

## 3. Decisión y cambio realizado

- La ficha Mi Bus de la línea 506 se clasifica como `operativo` en el sentido acotado de servicio programado y horarios publicados oficialmente.
- El campo de estado operativo aclara: “programado en Mi Bus; circulación efectiva no verificada en terreno”.
- El anuncio del ramal B conserva su registro independiente como `anunciado`; se vincula con la ficha Mi Bus por línea y destino, sin afirmar que el planificador rotule explícitamente la letra B.
- La línea 503, ramal H, permanece anunciada; no se equipara con la ficha “SAN LUIS - ESCOBAR”.
- No se agregaron coordenadas, paradas geográficas, tiempos de viaje, transbordos ni frecuencias no publicadas.

## 4. Archivos modificados

- `data/escobar-territory.json`: horarios de la línea 506, fuentes directas, fecha de verificación y límites de alcance.
- `assets/foco-escobar.js`: visualización de horarios y enlaces directos a las dos fichas de paradas.
- `tests/escobar-mobility.test.js`: pruebas de horarios, fuentes, estado y límites de inferencia.

## 5. Commits

- Incorporación principal de datos, prueba e interfaz: `1633c1653396326aba4222a61992b99fa1b96129`.
- Restauración del alcance de verificación general de movilidad, para no extender una comprobación focal al resto del directorio: `de772fcf7b452bbdc69c1a6e72628fa27576048e`.
- Ajuste de aserciones de la prueba de movilidad: `b2f1df52399078367a0f06d62c15d73e2e52d70c`.
- Precisión de la nota sobre ausencia de verificación en tiempo real: `006f7367f7b823ce8794c6d4530f968d239baccf`.

## 6. Pruebas y validación

Las ejecuciones intermedias #692, #693 y #694 fallaron por aserciones de alcance o texto durante la incorporación. Se corrigieron sin alterar fuentes ni introducir datos adicionales:
- #692: una fecha de verificación general se había ampliado indebidamente por una revisión focal; se restauró el alcance original.
- #693: una aserción esperaba una formulación anterior sobre la identificación del ramal B.
- #694: una aserción textual no coincidía con la redacción de la nota sobre circulación en tiempo real.

Workflow #695:
- Validación general: `success`.
- Prueba de movilidad intermodal e interlocal: `success`.
- Prueba económica de Escobar: `success`.
- Prueba de infraestructura ferroviaria: `success`.
- Pruebas de salud, transparencia, primera infancia y colonia de verano: `success`.
- Validación geográfica y editorial, sintaxis JavaScript y controles de Investment Finder: `success`.
- Despliegue de GitHub Pages: `success`.

Ejecución: https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45696537342

## 7. Despliegue y comprobación independiente

El job de despliegue de GitHub Pages finalizó con `success` para el commit `006f7367f7b823ce8794c6d4530f968d239baccf`. La apertura independiente de la URL pública de Foco Escobar no estuvo disponible en este entorno; por ello no se afirma inspección visual ni HTTP independiente.

## 8. Pendientes y evidencia necesaria

1. Confirmación primaria del operador o del Municipio que identifique expresamente el ramal B y su correspondencia con la ficha Mi Bus.
2. Horarios y paradas intermedias adicionales, si se publican oficialmente.
3. Verificación primaria del inicio efectivo del ramal 503 H y una ficha Mi Bus que identifique el destino estación Matheu.
4. Confirmación de circulación en terreno o comunicación operativa del prestador.
5. No se calcularán frecuencias, tiempos de viaje, transferencias ni coordenadas a partir de esta información.

Principio aplicado: el horario publicado acredita programación oficial; no equivale a seguimiento en tiempo real ni a comprobación presencial del servicio.
