# Escobar — dataset municipal de atractivos turísticos y calidad de geometría

Fecha de verificación: 25/11/2026, 21:35 ART  
Ámbito: Partido de Escobar, Buenos Aires, Argentina  
Dominio: cultura, turismo, patrimonio y datos abiertos  
Mejora principal: incorporar al perfil de Foco Escobar una ficha documental verificable del GeoJSON municipal de atractivos turísticos, sin presentar el inventario como vigente ni dibujar puntos no clasificados territorialmente.

## 1. Inspección del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`.
- Rama: `main`.
- HEAD al inicio: `7f0f892735514be38d9d642f35de8201b39b6aeb`.
- Último commit relevante previo: auditoría de economía circular y recursos abiertos.
- No se encontraron pull requests abiertos en la inspección remota.
- El conector permite inspeccionar archivos y commits remotos; no expone un working tree local. No se afirma haber inspeccionado un árbol de trabajo local.
- Se revisaron `README.md`, `.github/workflows/static.yml`, `data/escobar-territory.json`, `assets/foco-escobar.js` y `tests/escobar-transparency.test.js`.
- Workflow previo #719, run ID `45721580213`, sobre HEAD `7f0f892735514be38d9d642f35de8201b39b6aeb`: los jobs `validate` y `deploy` finalizaron con `success`.

## 2. Fuente municipal incorporada

Ficha: https://datos.escobar.gob.ar/dataset/atractivos-turisticos-del-partido-de-escobar

La ficha municipal declara:

- Nombre: «Atractivos Turísticos del Partido de Escobar».
- Categoría: Cultura.
- Organismo responsable: no especificado en el campo Organización.
- Fuente: relevamiento propio del Municipio de Escobar.
- Archivo: `atractivos_turisticos.geojson`.
- Tamaño publicado: 15 KB.
- Versión: 1.0.
- Periodicidad: anual.
- Creación declarada: 01/10/2025.
- Última actualización declarada: 31/03/2026.
- Licencia: Open Data Commons Open Database License (ODbL).
- Fecha editorial de publicación: no indicada por la ficha.

La fecha de actualización corresponde al metadato del dataset; no acredita una actualización posterior ni la vigencia operativa de los sitios.

## 3. Recurso y estructura verificados

Recurso original:  
https://pub-1ccab06e6b6746d4aac8bb00ba00c54c.r2.dev/datasets/atractivos-turisticos-del-partido-de-escobar/atractivos_turisticos.geojson

El enlace «Descargar» se abrió y devolvió contenido JSON legible. La estructura observada es:

- `FeatureCollection`.
- 18 entidades de geometría `Point`.
- CRS declarado: `urn:ogc:def:crs:OGC:1.3:CRS84`.
- Orden de coordenadas GeoJSON: longitud, latitud.
- Las propiedades incluyen `name`, `geometry_t`, `lon`, `lat`, `coordinate` y `wkt`, además de una propiedad descriptiva escrita literalmente como `descriptio`.

No se realizó reproyección: CRS84 ya declara coordenadas geográficas en orden longitud/latitud. No se agregaron coordenadas al mapa ni se generaron puntos derivados.

## 4. Observaciones de calidad y límites

1. La clave `descriptio` aparece truncada y varias entidades contienen marcado HTML de imagen en lugar de descripciones textuales estructuradas.
2. El archivo no presenta un atributo uniforme de localidad. Una descripción menciona «Ingeniero Maschwitz - UGC 12»; esa mención no se extrapola al resto de las entidades.
3. «Temaikèn» y «Munchi's» comparten exactamente la coordenada publicada `(-58.8008499, -34.3599347)`. Se conserva la coincidencia; no se fusionan registros ni se infiere identidad o acceso compartido.
4. La ficha no acredita que el inventario sea exhaustivo, ni informa horarios, accesibilidad, días de atención o funcionamiento vigente de cada atractivo.
5. Las coordenadas se conservan como parte del recurso original. La integración cartográfica permanece pendiente por la clasificación territorial incompleta y la falta de verificación de vigencia.

La fuente es útil como inventario geográfico municipal de referencia, no como directorio operativo ni como prueba de que cada establecimiento esté abierto.

## 5. Cambio realizado

Se añadió `transparencyDirectory.culturalDatasets` en `data/escobar-territory.json`, con ficha, URL canónica, recurso original, fechas, licencia, CRS, conteo de entidades, control de acceso, observaciones y alcance de verificación.

La interfaz existente de Foco Escobar ahora muestra el dataset en el panel de transparencia, con estado «Pendiente», enlaces de origen y observaciones de calidad. No se incorporó al mapa ni se asignaron localidades no presentes en el archivo.

Se agregaron pruebas focalizadas para metadatos, CRS, cantidad de entidades, estado pendiente, URLs, observaciones y renderizado de la nueva colección.

## 6. Archivos y commits

Archivos modificados:
- `data/escobar-territory.json`
- `assets/foco-escobar.js`
- `tests/escobar-transparency.test.js`

Commit de datos, interfaz y pruebas:  
`67e19a0b296d2f3a3000232f713272b09e7e7675`

## 7. Validación y despliegue

GitHub Actions #720, run ID `45730148989`, sobre commit `67e19a0b296d2f3a3000232f713272b09e7e7675`:

- Job `validate`: `success`.
- Job `deploy`: `success`.
- Pasaron las pruebas de perfil territorial, directorio de transparencia, sintaxis JavaScript y validación de JSON, junto con el resto de los controles del workflow.
- La comprobación independiente de la página publicada no estuvo disponible: el navegador de verificación no pudo abrir `https://leandrocuellarok-netizen.github.io/mapafederal/foco-escobar/`. El éxito del job de Pages no se presenta como inspección visual independiente.

## 8. Próxima evidencia necesaria

- Una versión posterior o confirmación municipal de vigencia del inventario.
- Un atributo territorial oficial por entidad o una fuente de georreferenciación independiente.
- Confirmación individual de horarios, acceso y operación antes de presentar sitios como servicios activos.
- Revisión de la coincidencia exacta de coordenadas entre Temaikèn y Munchi's sin deduplicar hasta conocer su significado.

Principio aplicado: aprovechar una fuente municipal accesible sin convertir un inventario geográfico de marzo de 2026 en un directorio operativo de noviembre de 2026.
