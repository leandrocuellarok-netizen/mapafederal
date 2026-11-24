# Escobar — Hospital Provincial Bicentenario: incorporación al directorio de salud

Fecha de consulta y verificación documental: 24/11/2026.

## Inspección previa del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama: `main`.
- HEAD inspeccionado antes del cambio: `deb8cc6002fe814b20fe926f599178021a0553c6` (actualización del ciclo GBIE de las 15:00).
- Se revisaron los metadatos del repositorio, la rama principal, los cinco commits recientes, el árbol de datos, el perfil territorial de Escobar, el renderizador, las pruebas, el workflow `.github/workflows/static.yml`, los PR abiertos y las ejecuciones recientes de Actions.
- No se encontraron PR abiertos.
- La ejecución previa del workflow, run `45456120438`, terminó con éxito.
- No se dispuso de un árbol de trabajo local; la inspección se realizó sobre la rama remota `main`.

## Hallazgo y fuentes

Se identificó una ficha municipal del Hospital Provincial Bicentenario que no estaba incorporada en el inventario nominal de establecimientos de salud de Escobar.

Fuentes primarias municipales:

1. [Centros de salud](https://www.escobar.gob.ar/municipio/centros-de-salud/): identifica el Hospital Provincial Bicentenario, en Libertad 1100, Garín. No indica fecha de publicación o actualización.
2. [Prestaciones para afiliados a PAMI](https://www.escobar.gob.ar/municipio/prestaciones-pami/): identifica el Hospital Bicentenario en Libertad 1100, Garín; publica hospital abierto las 24 horas, imágenes las 24 horas y consultorios de lunes a viernes de 8 a 18.
3. [Prestaciones para afiliados a IOMA](https://www.escobar.gob.ar/municipio/prestaciones-ioma/): identifica el Hospital Provincial Bicentenario en Libertad 1100, Garín; publica especialidades y turnos presenciales de lunes a sábados de 8 a 16.

Las tres páginas coinciden en la localidad y la dirección. Los horarios se conservan atribuidos a cada cartilla y no se generalizan a todas las coberturas. Las páginas no informan fecha de publicación o actualización, por lo que `sourcePublishedAt` permanece nulo. No se encontró teléfono específico en estas fichas. No se realizó comprobación presencial.

## Cambio principal

Se agregó el Hospital Provincial Bicentenario al directorio de salud en `data/escobar-territory.json`, elevando de 11 a 12 las fichas nominales de establecimientos. El registro conserva:

- Localidad: Garín.
- Dirección publicada: Libertad 1100.
- Estado: operativo, atribuido a los directorios municipales vigentes consultados.
- Horarios diferenciados entre cartillas PAMI e IOMA.
- Fuentes y alcance de verificación.
- Teléfono no informado.
- Sin coordenadas ni marcador cartográfico, porque no se verificó una georreferencia exacta.

Se modificó `assets/escobar-profile.js` para mostrar el estado individual de cada establecimiento y los enlaces a sus fuentes particulares. Se agregó `tests/escobar-health-facilities.test.js`, se incorporó su ejecución al workflow y se actualizó el resumen del directorio en `README.md`.

## Archivos modificados

- `data/escobar-territory.json`
- `assets/escobar-profile.js`
- `tests/escobar-health-facilities.test.js` (nuevo)
- `.github/workflows/static.yml`
- `README.md`

## Commit y validación

- Commit de la mejora: `a29e171849f3e72015443c5092405e1e76ca010b`.
- [Ver commit](https://github.com/leandrocuellarok-netizen/mapafederal/commit/a29e171849f3e72015443c5092405e1e76ca010b).
- GitHub Actions: [run 45460911907](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45460911907).
- Validación del perfil local y procedencia: success.
- Nueva prueba del directorio sanitario: success.
- Pruebas y validaciones restantes del workflow: success.
- Job de despliegue a GitHub Pages: success.
- Comprobación HTTP independiente de la página publicada: no disponible en esta consulta; no se afirma verificación visual en producción.

## Limitaciones y próximos pasos

- Solicitar o localizar una fecha oficial de actualización de las cartillas.
- Confirmar si existen cambios de horarios o prestaciones posteriores a la consulta.
- Mantener separados los horarios publicados para PAMI e IOMA.
- No incorporar teléfono ni coordenadas hasta contar con fuente verificable.
- El directorio sigue siendo una selección documentada, no un inventario exhaustivo de los 8 hospitales, 4 UDP y 18 CAPS que informa el Municipio.

## Resultado

Se amplió el directorio sanitario de Escobar con una ficha contrastada en tres fuentes municipales, preservando la atribución de horarios por cobertura y sin inventar datos de contacto o georreferencia.
