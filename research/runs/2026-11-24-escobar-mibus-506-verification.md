# Escobar — verificación del planificador Mi Bus para la línea 506

Fecha de verificación: 2026-11-24  
Repositorio: https://github.com/leandrocuellarok-netizen/mapafederal

## Inspección inicial

- Rama principal: `main`.
- HEAD inicial: `51bc495b10222b7b38fa10e072f6c811f6b4dd63`.
- Se inspeccionaron los commits recientes, el perfil territorial, el renderizador de Escobar, las pruebas de movilidad, el workflow de Pages y la documentación.
- El último commit ya tenía GitHub Actions completo: ejecución 45372129557; validación y deploy terminaron con `success`. El job `Deploy to GitHub Pages` terminó correctamente y creó un deployment `github-pages`.
- No se modificaron noticias, perfiles nacionales, catálogos federales ni archivos de otros módulos.

## Hallazgo primario

La Municipalidad de Escobar mantiene el planificador Mi Bus / Escobar 360:

- Catálogo oficial: https://mibus.escobar.gob.ar/
- Ficha de ruta: https://mibus.escobar.gob.ar/routes/21/R00005600/SH0002533
- La portada lista «506 Est. Escobar - Mercado Libre (Loma Verde)».
- La ficha identifica «Línea 506 — EST. ESCOBAR - MERCADO LIBRE» y 23 paradas, desde «TERMINAL ESCOBAR» hasta «COL. ESTE (MERCADO LIBRE)».
- La ficha no informa fecha de publicación o actualización; se verificó visible en línea el 24/11/2026.
- El planificador no identifica el ramal B. Por eso no se afirma equivalencia exacta con el anuncio municipal del 03/11/2026, no se eleva el anuncio de ramal B a operativo y no se importan horarios ni frecuencias.

## Cambio acumulativo

- `data/escobar-territory.json`: se agregó `mobilityDirectory.plannerServices` con la ficha de línea 506, sus 23 paradas publicadas (solo cantidad y extremos), URL, organismo, fecha de verificación, vigencia y límites de alcance.
- `assets/escobar-profile.js`: se añadió un bloque separado «Servicios publicados en el planificador Mi Bus», sin mezclarlo con los ramales anunciados.
- `tests/escobar-mobility.test.js`: se añadieron aserciones para procedencia, 23 paradas, URLs HTTPS, estado operativo no verificado y no equivalencia automática con el ramal B.
- `README.md`: se documentó el hallazgo y sus límites.

## Fuentes

- Municipalidad de Escobar / Escobar 360 — catálogo Mi Bus: https://mibus.escobar.gob.ar/
- Municipalidad de Escobar / Escobar 360 — ficha Línea 506: https://mibus.escobar.gob.ar/routes/21/R00005600/SH0002533
- Municipalidad de Escobar — anuncio de los ramales 503 H y 506 B, publicado el 03/11/2026: https://www.escobar.gob.ar/noticias/transporte-publico-escobar-suma-dos-nuevos-ramales-y-mas-colectivos-0-/

## Pruebas y publicación

- El JSON se parseó antes de generar el commit.
- La primera ejecución del workflow (45376228874) detectó un error de orden en el test: las aserciones del renderizador referían `profile` antes de su declaración. Se reubicaron después de la lectura del archivo; no era un fallo del dataset ni del renderizador.
- La segunda ejecución 45376370287 terminó con `validate=success` y `deploy=success`; todas las pruebas de movilidad de Escobar pasaron y el paso `Deploy to GitHub Pages` finalizó correctamente.
- La publicación queda confirmada por GitHub Actions. La lectura HTTP independiente de la URL de Pages no estuvo disponible en esta consulta.

## Pendientes

- Confirmar con Municipio u operador si la ficha de línea 506 corresponde exactamente al ramal B anunciado.
- Confirmar circulación efectiva y horarios vigentes mediante fuente primaria; la ficha dinámica no basta para afirmar operación en tiempo real.
- No se encontró en esta consulta una ficha que identifique específicamente el ramal H de la 503; no se modificó ese registro.
