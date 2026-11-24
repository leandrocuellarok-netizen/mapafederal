# MAPA FEDERAL — Escobar: Presupuesto Participativo 2026 (20:30, 24/11/2026)

## Inspección previa
- Repositorio: `leandrocuellarok-netizen/mapafederal`, rama `main`.
- HEAD observado antes de editar: `b380fcecde4e4c5836bf54dce81e2f41f41aea51` — registro del ciclo GBIE 20:00.
- No se encontraron pull requests abiertos.
- Se inspeccionaron README, dataset territorial, render del perfil Escobar, prueba de transparencia y workflow `.github/workflows/static.yml`.
- La última ejecución observada antes de este cambio fue [45506923789](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45506923789), con validación y despliegue exitosos para el commit anterior.

## Hallazgo principal
Se incorporó al perfil de Escobar el catálogo municipal de 14 proyectos publicados bajo el encabezado de 24 de Febrero en el Presupuesto Participativo 2026:
- 6 de Infraestructura.
- 2 de Espacio Público y Deportes.
- 6 de Fortalecimiento Institucional.

La página [CONECTA](https://www.escobar.gob.ar/conecta/) informa 219 proyectos habilitados en las siete localidades, $450.000.000 anunciados por localidad y hasta $45.000.000 para entidades sin fines de lucro. Los importes se documentan como presupuesto anunciado, no como gasto ejecutado.

## Discrepancia de estado
La página CONECTA consultada el 24/11/2026 todavía muestra etapa 4 de 5 y «votación abierta». Sin embargo, la noticia municipal del [16/09/2026](https://www.escobar.gob.ar/noticias/el-presupuesto-participativo-2026-extiende-su-votacion-hasta-el-vierne/) informó que el plazo se extendía hasta el 25/09/2026. No se localizó una prórroga posterior ni resultados finales en las páginas municipales consultadas. Por eso, el estado se conserva como **pendiente de conciliación**: no se anuncia una convocatoria abierta ni se presentan los proyectos como adjudicados o ejecutados.

La noticia municipal del [03/09/2026](https://www.escobar.gob.ar/noticias/presupuesto-participativo-2026-un-nuevo-y-mejor-sistema-para-que-los-v/) aclara que cada votante dispone de hasta 100 puntos por categoría. El puntaje que CONECTA asigna a cada proyecto se describe como referencia de costo; ambos valores no se confunden. La ficha de votación de [Escobar 360°](https://escobar360.escobar.gob.ar/servicio.aspx?ser_id=3028) requiere iniciar sesión; no se inició sesión ni se emitió voto.

Los rótulos «Garín Centro» y «Presidente Perón» se conservaron exactamente como aparecen dentro del bloque municipal de 24 de Febrero, sin inferir equivalencias territoriales ni modificar límites.

## Archivos modificados
- `data/escobar-territory.json`: nuevo objeto `participatoryBudget2026` con los 14 proyectos, puntajes, fuentes, plazo publicado y discrepancia de estado.
- `assets/escobar-profile.js`: visualización desplegable agrupada por categoría dentro del panel de transparencia y participación.
- `tests/escobar-transparency.test.js`: controles de cantidad, IDs únicos, categorías, importes, fecha límite, estados y procedencia.
- `README.md`: alcance y limitaciones documentados.

## Prevalidación realizada
- JSON parseado y serialización de dos espacios comprobada.
- 14 IDs únicos.
- Distribución de categorías 6/2/6.
- URLs de fuente en HTTPS.
- Se comprobó que el render del perfil consume el nuevo dataset y que la prueba incluye las nuevas aserciones.
- La validación integral y el despliegue de GitHub Actions quedan pendientes de la ejecución asociada al commit de esta corrida.

## Commit de datos e interfaz
`f9b19b917b1ccd964e0ca7b12f3f60440135dab7` — Document Escobar 2026 participatory budget projects and status conflict.

## Pendientes
1. Obtener confirmación oficial posterior al 25/09/2026 sobre cierre de votación y resultados.
2. Verificar qué proyectos fueron seleccionados, financiados, contratados o ejecutados, manteniendo esos hitos separados.
3. No agregar marcadores cartográficos: la página no proporciona coordenadas verificadas de cada intervención.


## Cierre de validación y publicación
- El primer workflow del commit de datos `f9b19b917b1ccd964e0ca7b12f3f60440135dab7` falló en la comprobación sintáctica de `assets/escobar-profile.js`. No se publicó esa versión.
- Se corrigió el render en `7dbe74516fb45161872ea96f509817138a00a28e`; el cambio reemplaza el bloque de salida defectuoso y conecta el módulo al panel de transparencia.
- Workflow final: [45511171522](https://github.com/leandrocuellarok-netizen/mapafederal/actions/runs/45511171522), commit `7dbe74516fb45161872ea96f509817138a00a28e`.
- Validación: **success**. Pasaron la validación del perfil local, el test de transparencia municipal, la comprobación de sintaxis JavaScript y el resto de controles del workflow.
- GitHub Pages: job de despliegue **success**. La apertura independiente de la URL publicada no fue posible desde la herramienta de consulta web; no se afirma verificación HTTP independiente del renderizado.
- Estado final del módulo: datos y visualización validados por CI y despliegue de Pages informado como exitoso. La discrepancia administrativa sobre la votación y los resultados de los proyectos continúa pendiente.
