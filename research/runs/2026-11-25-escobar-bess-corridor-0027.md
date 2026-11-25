# Escobar — precisión del corredor de localización declarado para BESS Maschwitz

- Corte: 2026-11-25 00:27 (America/Argentina/Buenos_Aires).
- Alcance: Partido de Escobar; Ingeniero Maschwitz; infraestructura energética y expediente BESS Maschwitz 33 kV.
- Mejora principal: incorporación explícita de la referencia territorial publicada por el Municipio —calle Brasil, entre La Pista y la Ruta 26— sin convertirla en domicilio exacto, parcela ni punto cartográfico.

## Estado del repositorio antes del cambio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama inspeccionada: `main`; rama predeterminada confirmada por GitHub.
- HEAD previo: `56b4ddb8bfc643403ff4f08278fb83d155f4f629` — “Record successful Nov 25 validation and Pages deployment”.
- Los últimos commits, ramas y PR fueron revisados. Los PR #2–#5 están cerrados y fusionados; no se observó un PR abierto en la consulta.
- La rama remota contiene cinco ramas: `main` y cuatro ramas de corrección anteriores. La API no proporciona un árbol de trabajo local; no se afirma que exista un working tree local limpio.
- Workflow anterior: run `45537842705`, asociado al HEAD previo; `validate` y `deploy` finalizaron en `success`.

## Fuente y hallazgo

Fuente primaria: Municipalidad de Escobar, “Ingeniero Maschwitz suma una nueva planta de almacenamiento eléctrico para estabilizar la tensión y mejorar el servicio local”, publicada el 03/11/2026.

URL: https://www.escobar.gob.ar/noticias/ingeniero-maschwitz-suma-una-nueva-planta-de-almacenamiento-electrico-/

Reconsulta: 25/11/2026. En el texto, el Municipio ubica la planta sobre calle Brasil, entre La Pista y la Ruta 26, en Ingeniero Maschwitz. La misma publicación informa trabajos preliminares, potencia declarada de 40 MW, hasta cinco horas de refuerzo y conexión subterránea en 33 kV. También señala que la obra civil y la puesta en marcha están sujetas a licencia municipal de construcción y habilitación de funcionamiento.

La referencia de calle es una declaración municipal. No se obtuvo número de puerta, parcela catastral ni geometría oficial que permita fijar el predio. La contradicción previa sigue abierta: el EIAS BESS MAS 022/25 (16/09/2025) identifica Dique Luján/Tigre en portada, resumen y sección socioeconómica, mientras su Mapa 9 menciona Ingeniero Maschwitz/Escobar; la ficha provincial de participación 2026 clasifica el expediente como Partido de Escobar. La referencia vial no resuelve esa contradicción.

## Cambio realizado

- `data/investment-opportunities.json`: se precisó el campo de localización con la referencia municipal a calle Brasil y se conservó explícitamente la referencia Tigre/Escobar y la jurisdicción parcelaria sin resolver.
- Se aclaró en la descripción y el alcance de verificación que calle Brasil es un corredor atribuido al Municipio, no una dirección parcelaria ni una coordenada.
- Se mantuvieron `scope: provincial`, `stage: preparation`, `opportunityStatus: unknown`, `amount: null` y ausencia de coordenadas.
- `tests/escobar-economic-profile.test.js`: se añadieron aserciones para la referencia de corredor y su atribución.
- No se agregó marcador, no se modificó la cartografía, no se afirmó operación, DIA final, licencia de construcción, habilitación, inversión ni fecha de puesta en servicio.

## Validación, commit y publicación

- Validación previa: JSON parseado; ID único; URL HTTPS; alcance provincial, etapa de preparación, disponibilidad desconocida, monto nulo y ausencia de coordenadas comprobados; prueba dirigida revisada.
- Commit: pendiente al crear este registro.
- GitHub Actions y GitHub Pages: pendientes de la ejecución disparada por el commit.
- Comprobación HTTP independiente de la página: pendiente.

## Pendientes

1. Obtener el PDF adjunto al expediente provincial de participación 2026 y verificar si identifica la misma parcela.
2. Conseguir aclaración catastral o administrativa sobre partido, circunscripción, sección, parcela y partida.
3. Verificar la Declaración de Impacto Ambiental final, la licencia municipal de construcción y la habilitación de funcionamiento por separado.
4. Mantener el registro en alcance provincial y sin marcador mientras no se resuelva la jurisdicción parcelaria.
