# Escobar — conciliación del expediente ambiental BESS Maschwitz

- Corte: 2026-11-24 23:30 (America/Argentina/Buenos_Aires)
- Alcance: Partido de Escobar; Ingeniero Maschwitz / expediente BESS Maschwitz 33 kV.
- Mejora principal: incorporación de la ficha oficial de participación pública del Ministerio de Ambiente bonaerense al registro existente de BESS Maschwitz.
- Resultado cartográfico: no se agregó marcador ni se asignó el proyecto a un municipio en el mapa; persiste una contradicción documental sobre la parcela.

## 1. Estado del repositorio

- Repositorio público: `leandrocuellarok-netizen/mapafederal`.
- Rama: `main`; sin protección de rama según GitHub.
- HEAD previo a esta intervención: `09b2003e2fdade66f2b100fdc7ba66a0788ec73f` — `Document initial NOA cartographic research and source inventory`.
- Se preservó ese trabajo concurrente de NOA y el commit anterior `e45880ea9cd5222d535bbc5cf5d94560bb9e2d3e` que incorporó el filtro de recursos minerales.
- PR recientes revisados: #5, #4, #3 y #2, todos cerrados y fusionados.
- La API de GitHub permitió inspeccionar rama, commits, árbol, archivos y acciones; no expone un working tree local, por lo que no se afirma un estado local limpio.

## 2. Hallazgo y evidencia

La ficha del Ministerio de Ambiente de la Provincia de Buenos Aires identifica el expediente “Planta de Almacenamiento de Energía Maschwitz 33 kV y Línea de Media Tensión (LMT) de vinculación” como **Partido: Escobar**. Registra participación pública entre el 21/07/2026 y el 11/08/2026. La ficha no informa fecha de publicación.

Fuente oficial:
https://participacionpublica.ambiente.gba.gob.ar/participacion/resumen/Planta-de-Almacenamiento-de-Energ%C3%ADa-Maschwitz-33-kV-y-L%C3%ADnea-de-Media-Tensi%C3%B3n-(LMT)-de-vinculaci%C3%B3n---Proponente--GENNEIA-SA

La ficha muestra “0” comentarios y la leyenda “no tiene observaciones o aún no han sido validadas”. No se interpreta esa leyenda como aprobación, ausencia definitiva de observaciones ni emisión de una Declaración de Impacto Ambiental. El PDF adjunto al registro 2026 devolvió timeout y no pudo inspeccionarse.

La contradicción física sigue abierta:
- Municipalidad de Escobar, 03/11/2026: ubica la planta en Ingeniero Maschwitz, Partido de Escobar; informa trabajos preliminares, 40 MW y hasta cinco horas de refuerzo.
  https://www.escobar.gob.ar/noticias/ingeniero-maschwitz-suma-una-nueva-planta-de-almacenamiento-electrico-/
- EIAS BESS MAS 022/25, fechado 16/09/2025: su resumen identifica el predio como Dique Luján, Partido de Tigre, con nomenclatura catastral y coordenadas.
  https://participacionpublica.ambiente.gba.gob.ar/adjunto/viewpdf/Planta-almacenamiento-BESS-MASCHWITZ-33-kV-y-LMT-de-vinculaci%C3%B3n.pdf
- Genneia, página del proyecto consultada el 24/11/2026: presenta información del proponente sobre ambiente, seguridad, monitoreo y obras. Sus afirmaciones técnicas se mantienen atribuidas a la empresa y no se tratan como verificación independiente.
  https://www.genneia.com.ar/baterias-maschwitz

La clasificación provincial del expediente 2026 aporta evidencia administrativa a favor de Escobar, pero no permite conciliar por sí sola la localización parcelaria con el EIAS 2025. No se incorporó coordenada ni marcador.

## 3. Cambio realizado

Se actualizó únicamente el registro existente `bess-maschwitz-genneia-edenor-2026` en `data/investment-opportunities.json`:
- se agregó la ficha provincial y el período de participación pública;
- se documentó que la fecha de publicación no está indicada;
- se conservó el estado de oportunidad `unknown`, la etapa `preparation`, el monto nulo y el alcance `provincial`;
- se mantuvo explícita la discrepancia Tigre/Escobar;
- no se añadió coordenada, inversión, autorización final ni fecha de puesta en servicio.

Se añadieron aserciones específicas a `tests/escobar-economic-profile.test.js` para la fuente provincial, el período, el estado pendiente, el alcance provincial y la prohibición de georreferenciar mientras siga la contradicción.

No se modificaron `data/strategic-nodes.json`, capas geométricas ni la interfaz del mapa.

## 4. Commits y validación

- Datos y prueba inicial: `4f588cc01e3c633475b56181bbca019b3185f0df` — `Add provincial EIA participation evidence for BESS Maschwitz`.
- Corrección puntual de la expresión regular de la prueba: `3d2a057666d4a4a4b3d6ae0a9249f372bf6a6b37` — `Align BESS EIA timeout regression assertion`.
- El primer workflow, `45533249351`, falló únicamente porque la aserción buscaba una formulación distinta de la que figuraba en el registro. Se alineó la prueba con el texto real; no se relajó el control de jurisdicción ni de evidencia.
- Workflow final: `45533298738`, asociado al commit `3d2a057666d4a4a4b3d6ae0a9249f372bf6a6b37`.
- Job `validate`: éxito. Incluyó la prueba `Test Escobar economic profile and company evidence`, movilidad, infraestructura ferroviaria, transparencia, salud, JSON, JavaScript, Investment Finder, SEO/GEO y enlaces de contratación.
- Job `deploy`: éxito. Los pasos Setup Pages, Upload artifact y Deploy to GitHub Pages finalizaron correctamente.
- Comprobación HTTP independiente de la página publicada: no disponible en esta ejecución; el acceso web a GitHub Pages no respondió y la resolución DNS del entorno de ejecución falló. Por eso no se afirma verificación independiente del renderizado.

## 5. Pendientes y evidencia necesaria

1. Recuperar el PDF adjunto al expediente provincial 2026 y cotejar su parcela, coordenadas, nomenclatura catastral y partido.
2. Obtener confirmación catastral o administrativa de la jurisdicción del predio y del trazado de la LMT.
3. Verificar si existe DIA final, licencia municipal de construcción y habilitación de funcionamiento; no confundir autorización de trabajos preliminares con esas decisiones.
4. Mantener el registro en alcance provincial y sin marcador hasta resolver la ubicación parcelaria.
5. Seguir las respuestas oficiales de Municipio, Ministerio de Ambiente y Genneia a las inquietudes vecinales, sin convertir reclamos en conclusiones técnicas.
