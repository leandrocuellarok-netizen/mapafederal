# Foco Escobar — cierre de arquitectura y validación

Fecha de trabajo: 2026-11-24 (Argentina)  
Alcance: arquitectura de interfaz, documentación y validación del módulo Escobar. No se incorporaron nuevos hechos territoriales ni se alteraron datasets.

## Estado del repositorio

- Repositorio: `leandrocuellarok-netizen/mapafederal`
- Rama: `main`
- Commit de cierre validado: `edab8b4d36dec433549bbe5f1d763613e30e9954`
- Arquitectura de Foco Escobar creada en los commits `79fe74a5581ea4914c33be56c599dbe7a3853e6c`, `521fa121a8f429107206d4ee733da9617528297e`, `c648ce27e6ea6d3d1265ced08f128f1bb53fa67f` y `2b71af1f348efdf203b4f9b13c9597b34ce3e457`.
- Documentación y sitemap: `296818789c4f27e9ae688bda6360f47aee2d5157`, `84fde21c73837d2dfb70756c14f73d61bcc956f0` y `e8d37b8dbe206a936e713c27aadc73318462bdec`.

## Mejora principal

El perfil local de Escobar quedó separado de la portada federal y publicado como página independiente:

- `foco-escobar/index.html`
- `assets/foco-escobar.js`
- URL prevista: https://leandrocuellarok-netizen.github.io/mapafederal/foco-escobar/

La portada general conserva navegación y una tarjeta de acceso. El observatorio organiza territorio, economía, servicios, salud, transparencia, movilidad, cartografía y referencias ambientales. El renderer carga los datasets desde `data/` y no depende del mapa federal para renderizar su contenido.

## Ajuste de calidad

Se retargetearon las pruebas de Escobar que todavía buscaban el bloque local en `index.html` o inspeccionaban el renderer anterior. Los tests ahora validan el renderer independiente y la página Foco Escobar; las comprobaciones de categorías y puntos del mapa federal permanecen sobre la portada general.

Archivos ajustados en el commit de cierre:
- `.github/workflows/static.yml`
- `tests/escobar-transparency.test.js`
- `tests/escobar-economic-profile.test.js`
- `tests/escobar-health-facilities.test.js`
- `tests/escobar-mobility.test.js`
- `tests/escobar-rail-infrastructure.test.js`

## Validación y publicación

- GitHub Actions run [#507](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45526051680): `validate=success`, `deploy=success`.
- Commit probado: `edab8b4d36dec433549bbe5f1d763613e30e9954`.
- La tarea de GitHub Pages terminó correctamente.
- La comprobación HTTP independiente de la URL publicada no pudo completarse desde el navegador disponible; no se afirma una verificación visual independiente.

## Datos y límites

- No se modificaron `data/escobar-territory.json`, `data/escobar-economic-profile.json` ni `data/strategic-nodes.json`.
- Se conservan las 14 referencias cartográficas de Escobar distribuidas en seis localidades; 24 de Febrero sigue sin punto propio hasta contar con georreferencia inequívoca.
- La página muestra un directorio de referencias cartográficas, no un mapa local independiente. No se dibujaron polígonos ni se agregaron coordenadas nuevas.
- No se realizó investigación externa de hechos territoriales en este ciclo.

## Próximos pasos

1. Evaluar un mapa local de Foco Escobar cuando la geometría y las coordenadas de las capas estén verificadas.
2. Ampliar educación y otros dominios solo con fuentes primarias y alcance geográfico comprobable.
3. Mantener separados los estados anunciados, operativos, históricos, pendientes y no verificados.
