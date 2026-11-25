# Escobar — aviso legal de transferencia comercial

- Fecha de revisión: 25/11/2026
- Hora de corte: 01:35 (Argentina)
- Alcance: Partido de Escobar, sin expansión territorial.

## 1. Inspección del repositorio

- Rama de trabajo: `main`.
- HEAD inicial observado: `8c28ee679ab1803197fb2d4cedfc4bdd9bd97da0`.
- Último cambio funcional de Escobar previo a esta ejecución: `f3345934dc3155b818a6b568c5782bca1ea11d8e`, prueba de procedencia de contrataciones.
- Se identificaron cinco ramas y ningún pull request abierto.
- Se revisaron `README.md`, `data/news.json`, `data/escobar-economic-profile.json`, `tests/escobar-economic-profile.test.js` y `.github/workflows/static.yml`.
- El conector de GitHub no expone un working tree local; no se afirma que exista una copia local limpia.

## 2. Hallazgo documentado

La edición 14526 del Boletín Oficial de la Provincia de Buenos Aires, fechada el martes 24/11/2026, página 83, contiene un aviso «POR 5 DÍAS» referido a la transferencia de un «Fondo de Comercio de Carnicería Granja» situado en Belén de Escobar. La publicación consigna «nov. 20 v. nov. 27» y que los reclamos de ley se reciben en el domicilio indicado.

- Fuente primaria: https://boletinoficial.gba.gob.ar/secciones/14526/ver
- Publicador: Boletín Oficial de la Provincia de Buenos Aires.
- Publicación consultada: 24/11/2026, edición 14526, página 83.
- Verificación: lectura del aviso y su referencia territorial el 25/11/2026.
- Geografía: dirección comercial transcripta literalmente como «Las Orquideas1643», Belén de Escobar, partido de Escobar. No se normalizaron grafía ni espaciado.
- Hecho documentado: existe el aviso legal y el texto atribuye una transferencia del fondo de comercio.
- Desconocido: conclusión efectiva de la transferencia, identidad comercial del establecimiento, precio, empleo, habilitación y continuidad operativa.

No se reprodujeron nombres, DNI ni CUIT de particulares. El aviso no se presenta como una oportunidad abierta, una venta al público, una adjudicación ni prueba de que el comercio siga funcionando.

## 3. Mejora principal

Se incorporó un único registro en `data/news.json`, categoría «Comercio», con jurisdicción explícita Buenos Aires y evidencia territorial de Belén de Escobar. El resumen y la verificación aclaran que la publicación no acredita el cierre de la operación ni la operación actual.

No se agregó marcador al mapa: aunque el aviso contiene una dirección, no se verificó una geometría ni coordenadas en un sistema de referencia conocido. Tampoco se modificó el directorio de empresas porque el aviso no identifica una marca ni acredita una planta o establecimiento operativo.

## 4. Archivos y commits

- `data/news.json`: registro incorporado y dirección conservada según la transcripción de la fuente.
- `tests/escobar-economic-profile.test.js`: controles de fecha, fuente, geografía, estado de verificación, omisión de identificadores personales y ausencia de afirmaciones sobre cierre de la transferencia.
- `research/runs/2026-11-25-escobar-commercial-transfer-notice-0135.md`: este registro de ejecución.

Commits:
- `999b9899e4aa9d006858c6418c6f660884820c4a` — incorporación del aviso.
- `ef81b4af4d1d8a291c090ecc793e39eafa6f47da` — prueba de procedencia y privacidad.
- `23a6deb7b8056f1a33e11bcf274100f651d9bc8a` — corrección de la expresión regular de privacidad.
- `1c2e1d8adbec12d6e6d9267f67b31d3d8f8e6b6b` — conservación literal de la dirección.
- `e9446c089170f1f8946553b3919b7935a5966ddb` — prueba alineada con la transcripción literal.

## 5. Validación y publicación

- Workflow #543, run [45547182010](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45547182010), commit `999b9899`: `validate=success`, `deploy=success`.
- Workflow #544, run [45547201064](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45547201064): cancelado al ser reemplazado mientras esperaba ejecución.
- Workflow #545, run [45547264908](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45547264908), commit `23a6deb7`: `validate=success`, `deploy=success`.
- Workflow #546, run [45547421318](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45547421318), commit `1c2e1d8`: falló el test de perfil económico porque la aserción aún esperaba la dirección normalizada; el despliegue se omitió. Se corrigió la aserción en el commit siguiente.
- Workflow #547, run [45547429733](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45547429733), commit `e9446c08`: `validate=success`, `deploy=success`. La prueba de perfil económico y evidencia empresarial terminó correctamente, al igual que el resto de la validación.

La comprobación independiente de la página pública y del JSON servido no pudo completarse desde el navegador de consulta. Se confirma el resultado del job de GitHub Pages, no una inspección visual independiente del sitio.

## 6. Pendientes

1. Verificar una publicación posterior o documentación formal que confirme si la transferencia se perfeccionó.
2. Obtener evidencia institucional de habilitación y operación actual antes de incorporar el establecimiento al directorio de comercios.
3. Mantener la dirección sin geocodificar hasta contar con una fuente geográfica verificable.
4. No atribuir marca, empleo, precio, inversión ni continuidad operativa mientras no exista documentación suficiente.
