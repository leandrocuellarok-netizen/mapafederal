# Balance ejecutivo acumulativo — revisión 25/11/2026 20:00

**Estado:** borrador provisional, actualizado el 24/11/2026 a las 19:00 (Argentina). Se actualizará con las verificaciones posteriores antes de la revisión final.

## Resumen ejecutivo
Mapa Federal mantiene una arquitectura documental nacional con prioridad operativa en Escobar. Los catálogos se apoyan en fuentes oficiales y periodísticas identificadas, distinguen hechos, anuncios, estimaciones y estados desconocidos, y conservan fechas de publicación y verificación. La plataforma no debe presentarse como un sistema predictivo ni como una ingesta automática integral.

## Indicadores comprobables al corte
| Indicador | Estado |
|---|---:|
| Radar IA | 40 registros |
| Investment Finder | 51 registros |
| Oportunidades abiertas | 20 |
| Disponibilidad desconocida | 28 |
| Cerradas | 3 |
| Event Intelligence | 3 registros |
| Nodos estratégicos | 86 |
| Módulos documentados | 6 |
| Módulos en piloto | 1 |
| Módulos planificados | 5 |

El catálogo de oportunidades conserva cinco registros abiertos de Escobar: LP 71, LP 72, LP 74, LP 75 y Red Sostenible. El estado `open` significa que el cronograma oficial de consulta/venta y apertura no venció; no garantiza elegibilidad técnica ni disponibilidad de cupos.

## Actualización del ciclo 17:00 — 24/11/2026

- Radar IA: se añadió la Resolución SIGEN 197/2026 como referencia regulatoria previamente ausente. Fue sancionada el 16/06 y publicada el 22/06; el artículo 2 limita la aplicación de la Guía al Sector Público Nacional definido en el artículo 8 de la Ley 24.156. No se presenta como obligación para provincias o municipios. No se identificó en este corte una nueva noticia tecnológica o regulatoria argentina publicada el 24/11 que justificara otra incorporación.
- Investment Finder: se añadieron ocho llamados de la edición 24/11/2026 del Boletín Oficial bonaerense: Avellaneda LP 122 (kits escolares, ARS 240,28 M); Esteban Echeverría LP 33 (obra escolar, ARS 367,74 M); Mercedes LP 16 (ómnibus, ARS 320 M); Patagones LP 13 (edificio escolar, ARS 3.157,50 M); Rivadavia LP 3 (concesión de kiosco-bar, sin presupuesto publicado); San Andrés de Giles LP 6 (dos camionetas, ARS 68,11 M); Tandil LP 21-01-26 (excavadora, ARS 294,12 M); y Tres Arroyos LP 18 (carros gastronómicos, sin canon base publicado). Los montos son presupuestos oficiales cuando están informados, no adjudicaciones ni gastos ejecutados. Los ocho estados `open` reflejan cronogramas publicados, no elegibilidad del proveedor.
- Escobar: la edición 14526 del Boletín Oficial (24/11) no incorpora un nuevo llamado municipal. LP 74 mantiene consultas 26–27/11, venta 30/11–01/12 y apertura 04/12. La LP 75 queda corroborada en la edición 14523 (20/11): consultas 26–27/11, venta 01–02/12, apertura 09/12 a las 12:00 y valor del pliego ARS 30 millones. La venta futura no se considera ya iniciada.
- Directorio sanitario de Escobar: el trabajo paralelo documentado en el commit `5ba77f70` elevó a 14 las fichas nominales. Se incorporaron el Hospital Papa Francisco y la UDP Dr. Carlos Guevara; la operación actual de la UDP y discrepancias de dirección/teléfono de otros establecimientos permanecen pendientes. No se agregaron coordenadas sin evidencia exacta.

## Actualización del ciclo 18:00 — 24/11/2026

- Radar IA: se incorporó la publicación primaria de Ethereum Foundation del 23/11/2026, “PQAI #0: Preparing Ethereum for a post-quantum, post-AI world”. La Fundación describe la detección acelerada de vulnerabilidades por modelos de IA como un factor de riesgo para el mantenimiento de software y la seguridad criptográfica. Propone firmas basadas en hash para validadores, migración de cuentas, compromisos de datos basados en hash y verificación formal. Las especificaciones iniciales y un primer devnet están en desarrollo; diciembre de 2028 y 2029 son objetivos de planificación, no fechas garantizadas. No se afirma que la IA pueda romper hoy la criptografía de Ethereum ni que la migración esté desplegada. Fuente: https://blog.ethereum.org/2026/11/23/pqai-0.
- No se incorporaron otras noticias de IA/regulación: las señales recientes ya catalogadas no mostraron cambios verificables adicionales en este corte.
- Investment Finder: sin nuevas oportunidades añadidas. Se conservan 51 registros (20 abiertas, 28 con disponibilidad desconocida y 3 cerradas). La LP 74/2026 de Escobar fue contrastada en el Boletín Oficial bonaerense, edición 18/11/2026, sección 14517: consultas 26–27/11, venta de pliegos 30/11–01/12, apertura 04/12 a las 10:00 y presupuesto oficial ARS 793.000.000 IVA incluido. No se revisó el pliego completo ni se infiere elegibilidad. Fuente: https://boletinoficial.gba.gob.ar/secciones/14517/ver. La LP 75 permanece en el catálogo con el cronograma ya documentado; la consulta de la edición 14523 presentó timeout y no se atribuye una circular nueva.
- Red Sostenible para el Desarrollo sigue admitiendo solicitudes hasta el 30/12/2026, según la página municipal consultada; ya estaba registrada y no se duplicó. Fuente: https://www.escobar.gob.ar/noticias/escobar-abrio-la-convocatoria-para-que-empresas-y-comercios-midan-redu/.
- Actualización territorial concurrente: otro ciclo incorporó al directorio de transparencia de Escobar el dataset municipal “Cursos de Agua del Partido de Escobar”. La ficha declara GeoJSON de 267 KB, versión 1.0, última actualización 31/03/2026, periodicidad anual, licencia ODbL y CRS EPSG:22185. La integración geométrica sigue pendiente; no se dibuja como latitud/longitud ni se interpreta como mapa de riesgo hídrico, caudal o calidad del agua. Commits: `b33b990bc9b0076c6333985792f7011a4676ed3c` (dataset) y `2c815704a303b4570b869fcdbf2672ed79197a89` (registro y estado del ciclo concurrente).

## Actualización del ciclo 19:00 — 24/11/2026

- Radar IA: se añadió un registro sobre el comunicado de Zscaler del 20/11/2026, que anuncia colaboraciones con Anthropic y Mistral para seguridad de IA empresarial. La empresa declara una integración de Claude Mythos 5.1 en Endpoint AI Security con vista previa limitada prevista y una integración de Mistral en Security for AI para Europa. Se atribuyen las afirmaciones al proveedor; no se infieren resultados independientes, despliegue generalizado ni disponibilidad en Argentina. Fuente: https://zscaler.gcs-web.com/news-releases/news-release-details/zscaler-partners-frontier-model-providers-help-enterprises.
- Investment Finder: sin nuevas oportunidades incorporadas. Se conservan 51 registros (20 abiertas, 28 con disponibilidad desconocida y 3 cerradas). La edición 14517 del Boletín Oficial bonaerense confirma la apertura de LP 74 de Escobar el 04/12/2026 a las 10:00; la edición 14523 no pudo abrirse por timeout y la consulta directa de 14527 no fue accesible. No se atribuye una circular nueva ni se afirma ausencia exhaustiva de llamados. Fuente LP 74: https://boletinoficial.gba.gob.ar/secciones/14517/ver.
- La publicación municipal del 16/11 sobre obras de calle Salta en Garín, El Dorado en Ingeniero Maschwitz, Feria de la Familia y Ecosan en Loma Verde fue revisada; los proyectos ya están reflejados o corresponden a obras en ejecución, por lo que no se duplicaron como nuevas oportunidades. Fuente: https://www.escobar.gob.ar/noticias/sujarchuk-y-katopodis-visitaron-importantes-obras-de-infraestructura-e/.
- Cambio concurrente de infraestructura: el commit `a72467e6cef5362119c34be61882254414a06528` incorporó un preflight reproducible de EPSG:22185 para una coordenada de muestra del GeoJSON de cursos de agua. Valida parámetros y transformación ida/vuelta de esa muestra, no la totalidad de geometrías, topología o contención municipal. No se integró la capa al mapa. El estado combinado consultado no devolvió checks; no se afirma CI exitoso.
- Catálogos al corte: Radar IA 40; Investment Finder 51; Event Intelligence 3; nodos estratégicos 86. Contrato enterprise sin cambios.

## Avances verificables
### Escobar
- LP 71/2026 y LP 72/2026: provisión de piedra partida y cascote; consultas 01–02/12, venta 03–04/12, apertura 11/12.
- LP 74/2026: cancha de fútbol y pista de atletismo del Polideportivo de Ingeniero Maschwitz; consultas 26–27/11, venta 30/11–01/12, apertura 04/12.
- LP 75/2026: fumigación y control de vectores; consultas 26–27/11, venta 01–02/12, apertura 09/12.
- Red Sostenible para el Desarrollo: solicitudes hasta 30/12/2026; no se registra como subsidio ni transferencia monetaria.
- Mercado Libre/Plaza Logística: primera etapa del centro logístico inaugurada el 28/10; ampliaciones futuras y empleo proyectado no se confunden con puestos actuales.
- Terminal Marítima Escobar: dos expedientes portuarios en prefactibilidad ambiental; no hay DIA ni inicio de obra acreditados. La cifra municipal superior a USD 600 millones es anunciada, no desembolsada.
- BESS Maschwitz: potencia y características técnicas publicadas; la localización presenta discrepancia entre el anuncio municipal (Ingeniero Maschwitz/Escobar) y el EIAS (Dique Luján/Tigre). No georreferenciar como resuelto.
- Proyectos comerciales e industriales de Loma Verde, Ingeniero Maschwitz y Garín se mantienen como anunciados o en construcción, sin inferir apertura, empleo ejecutado ni disponibilidad de capital a terceros.

### Provincia y escala nacional
- Pampa AI S.A.U. (Pampa Energía): constitución societaria publicada el 17/11/2026, con objeto de centros de datos, cómputo de alto rendimiento e infraestructura energética. Se incorpora a Investment Finder en etapa de preparación y disponibilidad desconocida. Los ARS 30 millones son capital social, no capex; no se informan ubicación del centro, clientes, contratos ni decisión final de inversión.
- Resolución 264/2026: la actualización del régimen XDEM alcanza grandes demandas, incluidas instalaciones de procesamiento de datos e IA; para XDEM-Datos exige cobertura contractual de al menos 80% del consumo mensual con nueva generación y potencia firme equivalente al 115% de la demanda máxima. Es regulación nacional, no una inversión anunciada.
- Se incorporaron cinco licitaciones de Lomas de Zamora, Quilmes y Banco Provincia desde el Boletín Oficial bonaerense del 18/11. Tres están abiertas según sus cronogramas; dos permanecen desconocidas por fecha futura o inicio de disponibilidad no informado.
- Argentina LNG, Toyota Zárate, RIMI, KIT 4.0 y proyectos industriales permanecen diferenciados entre anuncio, norma, programa y ejecución. No se presentan montos anunciados como inversión desembolsada.
- Event Intelligence conserva la Ronda RIGI del 02/12 y agrega la Ronda de Negocios de Energía y Minería PBA del 01/12. En ambas se documentan plazos de inscripción cerrados cuando corresponde.

### Radar IA y gobernanza
- El catálogo registra infraestructura de cómputo, operaciones empresariales, comercio agéntico, IA industrial y señales regulatorias.
- La Resolución 469/2026 creó una mesa de coordinación para elaborar una estrategia de IA en la Justicia; no crea un régimen general de IA.
- La Resolución PGN 64/2026 tiene alcance institucional propio del Ministerio Público Fiscal y no se extiende automáticamente a todo el Estado.
- El Decreto bonaerense 742/2026 y los lineamientos del MPF deben leerse según sus ámbitos de competencia, sin extrapolación.
- El curso bonaerense de IA para pymes tiene un último encuentro anunciado para el 26/11 a las 14:00; la página no confirma inscripción vigente.
- La FCA del Reino Unido publicó el 24/11 expectativas para agentes de IA en servicios financieros: pagos, promociones, intermediación crediticia y asesoramiento pueden requerir autorización; las firmas reguladas mantienen responsabilidad, controles y supervisión. Es una referencia británica, no una obligación argentina. Fuente: https://www.fca.org.uk/firms/innovation/ai-approach/agentic-ai.

## Estado de producto y contrato enterprise
- Se documentan seis módulos: Federal AI Assistant, Investment Finder, Territorial Monitor, Event Intelligence, Federal Reports y Executive Travel AI.
- Federal Reports es un piloto descriptivo con indicadores OPEX/INDEC 2025; no es un pronosticador.
- Los otros cinco módulos siguen planificados y no deben anunciarse como sistemas operativos.
- `publicMode.freeFormReports=false`: no hay generación libre de informes en la web pública.
- `customAnalyses=by_request`: análisis personalizados bajo solicitud y alcance acordado.
- `predictiveClaimsRequireValidation=true`: todo pronóstico exige datos suficientes, backtesting temporal, validación rolling-origin, métricas y cuantificación de incertidumbre.
- `clientDataPublic=false`: los datos de clientes no se publican.

## Pendientes críticos para la revisión final
1. Verificar circulares y pliegos de LP 74 y LP 75 de Escobar los días 26–27/11; para LP 75, revisar además el valor del pliego ARS 30 millones y su venta 01–02/12.
2. Confirmar venta de pliegos, recepción y aperturas de LP 71/72, las tres licitaciones de Quilmes y los ocho nuevos llamados del Boletín Oficial 14526; revisar el requisito RUP de Lomas.
3. Consultar el resultado de LP 61/62/67 y de LP 66/69; no inferir adjudicación.
4. Seguir la Asamblea de Mayores Contribuyentes de Escobar, reportada para el 27/11 a las 18:00. Al corte del 24/11 no se localizó una convocatoria oficial del HCD que confirme esa fecha y hora; mantenerlas como pendientes de corroboración. El proyecto Fiscal-Tributario 2027 no es norma vigente hasta completar el procedimiento.
5. Confirmar si QUO Loma Verde abrió efectivamente; las fuentes previas discrepan en la fecha.
6. Seguir los expedientes ambientales del puerto de Escobar y la discrepancia de ubicación de BESS Maschwitz.
7. Verificar hitos físicos, permisos y empleo real de los proyectos industriales y comerciales; evitar cifras de anuncios como ejecución.
8. Seguir el cierre de inscripción de la Ronda RIGI (30/11 para otras actividades) y registrar el evento del 02/12 sin afirmar acceso B2B.
9. Verificar la presentación de la estrategia de IA en Justicia sólo cuando exista fuente oficial y fecha comprobable.

## Riesgos
- Confundir presupuesto oficial, inversión anunciada, capital desembolsado, monto adjudicado y gasto ejecutado.
- Presentar como abierta una convocatoria cuyo pliego o inscripción ya cerró.
- Omitir requisitos de registro, garantías, costo de pliegos o elegibilidad técnica.
- Georreferenciar proyectos con jurisdicción o parcela no conciliada.
- Confundir coordinación institucional o lineamientos internos con una ley general de IA.
- Exponer datos de clientes, licencias o material protegido sin autorización.
- Presentar modelos predictivos como operativos sin dataset, backtesting, validación, métricas y documentación.
- GitHub Pages: el commit `64852c8` superó `validate`, pero `deploy` falló por metadatos del artefacto (0 artefactos en el primer intento y 2 duplicados al reintentar). Se elevó la espera de propagación a 15 segundos; el run `45447213242` completó `validate` y `deploy` con success. Mantener la comprobación en futuras publicaciones.

## Próximos pasos
- Mantener el ciclo de verificación con prioridad en Escobar y cobertura nacional.
- Registrar cambios de estado como eventos de trazabilidad, sin sobrescribir el historial.
- Revisar fuentes primarias y pliegos completos antes de recomendar participación.
- Ejecutar validaciones JSON, enlaces, pruebas funcionales, CI y despliegue en cada publicación; confirmar el nuevo run de Pages después del ajuste de espera.
- Cerrar este documento con el corte definitivo del 25/11/2026 a las 20:00, consignando avances, pendientes, riesgos y bloqueos comprobados.
