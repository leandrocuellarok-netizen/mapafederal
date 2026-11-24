(function(){
"use strict";
const root=document.getElementById("escobar");
if(!root)return;
const el=id=>document.getElementById(id);
const escapeHtml=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl=value=>{try{const url=new URL(value);return url.protocol==="https:"?url.href:"#";}catch{return "#";}};
const number=value=>new Intl.NumberFormat("es-AR").format(value);
const date=value=>value?new Date(value+"T12:00:00").toLocaleDateString("es-AR"):"No indicada por la fuente";
const statusLabel=value=>({"operativo":"Operativo","anunciado":"Anunciado","histórico":"Histórico","pendiente":"Pendiente","no verificado":"No verificado"}[value]||value||"No verificado");
const sourceLink=(url,label)=>{const safe=safeUrl(url);return safe==="#"?"":'<a href="'+escapeHtml(safe)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(label||"Ver fuente oficial ↗")+'</a>';};
function metric(value,label,detail){return '<article class="escobar-metric"><strong>'+escapeHtml(number(value))+'</strong><span>'+escapeHtml(label)+'</span><small>'+escapeHtml(detail)+'</small></article>';}
function renderProfile(territory,economy){
 const localities=territory.localities||[];
 const neighborhoodTotal=localities.reduce((sum,item)=>sum+Number(item.officiallyRecognizedNeighborhoods||0),0);
 const indicators=economy.indicators||{};
 const industry=indicators.industrialEstablishments||{};
 const commerce=indicators.commercialEstablishments||{};
 const year=indicators.referenceYear||"";
 el("escobar-metrics").innerHTML=[
  metric(localities.length,"localidades","Municipalidad de Escobar"),
  metric(neighborhoodTotal,"barrios reconocidos","Ordenanza 6515 · "+date(territory.sourcePublishedAt)),
  metric(industry.value??0,"establecimientos industriales","Indicadores municipales "+year),
  metric(commerce.value??0,"establecimientos comerciales","Indicadores municipales "+year)
 ].join("");
 el("escobar-localities").innerHTML=localities.map(item=>'<article class="escobar-locality"><h4>'+escapeHtml(item.name)+'</h4><strong>'+escapeHtml(number(item.officiallyRecognizedNeighborhoods))+'</strong><span>barrios reconocidos</span></article>').join("");
 const parks=(economy.industrialAreas||[]).map(item=>'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(item.status))+'</span><h4>'+escapeHtml(item.name)+'</h4><p>'+escapeHtml(item.description)+'</p><p class="escobar-meta">Localidad: '+escapeHtml(item.locality)+' · Vigencia: '+escapeHtml(item.validityPeriod||"No indicada")+'</p>'+sourceLink(item.sourceUrl,"Fuente municipal ↗")+'</div>').join("");
 const projects=(economy.infrastructureProjects||[]).map(item=>'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(item.status))+'</span><h4>'+escapeHtml(item.name)+'</h4><p>'+escapeHtml(item.description)+'</p><p><strong>'+escapeHtml(item.investmentLabel||"Inversión no informada")+'</strong></p><p>'+escapeHtml(item.employmentLabel||"Empleo estimado no informado")+'</p><p class="escobar-meta">Vigencia: '+escapeHtml(item.validityPeriod||"No indicada")+'</p><p class="escobar-meta">Verificación: '+escapeHtml(date(item.verification&&item.verification.checkedAt))+' · '+escapeHtml(item.verification&&item.verification.scope||"Alcance no informado")+'</p>'+sourceLink(item.sourceUrl,"Fuente municipal ↗")+'</div>').join("");
 const cases=(economy.companyCases||[]).map(item=>'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(item.status))+'</span><h4>'+escapeHtml(item.name)+'</h4><p>'+escapeHtml(item.description)+'</p><p class="escobar-meta">Localidad: '+escapeHtml(item.locality)+' · Evidencia: '+escapeHtml(date(item.evidenceDate))+'</p><p class="escobar-meta">Vigencia: '+escapeHtml(item.validityPeriod||"No indicada")+'</p>'+sourceLink(item.sourceUrl,"Evidencia municipal ↗")+'</div>').join("");
 const directory=economy.companyDirectory;
 const directoryHtml=directory?'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(directory.status))+'</span><h4>'+escapeHtml(directory.name)+'</h4><p>'+escapeHtml(directory.description)+'</p><p class="escobar-meta">Publicación: '+escapeHtml(date(directory.sourcePublishedAt))+' · Vigencia: '+escapeHtml(directory.validityPeriod||"No indicada")+' · Verificación: '+escapeHtml(date(directory.verification&&directory.verification.checkedAt))+'</p>'+sourceLink(directory.sourceUrl,"Consultar listado ↗")+'</div>':"";
 el("escobar-economy").innerHTML='<div class="escobar-item"><h4>Indicadores municipales '+escapeHtml(year)+'</h4><p>'+escapeHtml(number(industry.value||0))+' establecimientos industriales y '+escapeHtml(number(commerce.value||0))+' comerciales.</p><p class="escobar-meta">Comparación industrial: '+escapeHtml(number(industry.comparison&&industry.comparison.value||0))+' en '+escapeHtml(industry.comparison&&industry.comparison.year||"")+' y '+escapeHtml(number(industry.previousYearComparison&&industry.previousYearComparison.value||0))+' en '+escapeHtml(industry.previousYearComparison&&industry.previousYearComparison.year||"")+'. Comparación comercial: '+escapeHtml(number(commerce.comparison&&commerce.comparison.value||0))+' y '+escapeHtml(number(commerce.previousYearComparison&&commerce.previousYearComparison.value||0))+'.</p><p class="escobar-meta">La fuente no informa fecha exacta de corte ni metodología del padrón.</p>'+sourceLink(industry.sourceUrl,"Indicadores municipales ↗")+'</div><h4>Parques industriales</h4>'+parks+'<h4>Proyecto logístico</h4>'+projects+'<h4>Casos y directorios empresariales</h4>'+cases+directoryHtml;
 const health=territory.healthFacilitiesDirectory;
 const healthIds=new Set((health&&Array.isArray(health.facilities)?health.facilities:[]).map(item=>item.id));
 const services=(territory.serviceDirectories||[]).filter(item=>!healthIds.has(item.id)).map(item=>{
  const details=[item.address?("Ubicación: "+item.address):"",item.serviceHours?("Horario: "+item.serviceHours):"",item.phone?("Teléfono: "+item.phone):""].filter(Boolean).join(" · ");
  const links=(item.mapUrl?sourceLink(item.mapUrl,"Cómo llegar ↗"):"")+(item.sourceUrl?sourceLink(item.sourceUrl,"Consultar directorio ↗"):"");
  return '<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(item.status))+'</span><h4>'+escapeHtml(item.name)+'</h4><p>'+escapeHtml(item.summary)+'</p>'
   +(details?'<p class="escobar-meta">'+escapeHtml(details)+'</p>':"")
   +'<p class="escobar-meta">Publicación: '+escapeHtml(date(item.sourcePublishedAt))+' · Vigencia: '+escapeHtml(item.validityPeriod||"No indicada")+' · Verificación: '+escapeHtml(date(item.verification&&item.verification.checkedAt))+'</p><p class="escobar-meta">Alcance: '+escapeHtml(item.verification&&item.verification.scope||"No informado")+'</p>'
   +(links?'<p>'+links+'</p>':"")+'</div>';
 }).join("");
 const facilities=(health&&Array.isArray(health.facilities)?health.facilities:[]).map(item=>{
  const place=item.locality+(item.neighborhood?" · B° "+item.neighborhood:"");
  const servicesList=Array.isArray(item.services)?item.services.join(" · "):"";
  return '<div class="escobar-item escobar-health-facility"><span class="escobar-status">'+escapeHtml(statusLabel(health.status))+'</span><h4>'+escapeHtml(item.name)+'</h4><p class="escobar-meta">'+escapeHtml(place)+' · '+escapeHtml(item.category)+'</p>'
   +(item.address?'<p>Ubicación publicada: '+escapeHtml(item.address)+'</p>':"")
   +(item.addressNote?'<p class="escobar-meta">'+escapeHtml(item.addressNote)+' '+sourceLink(item.addressSourceUrl,"Directorio complementario ↗")+'</p>':"")
   +'<p><strong>'+escapeHtml(item.serviceHours||"Horario no publicado")+'</strong></p>'
   +(servicesList?'<p>'+escapeHtml(servicesList)+'</p>':"")
   +(item.phone?'<p class="escobar-meta">Teléfono: '+escapeHtml(item.phone)+'</p>':"")
   +(item.serviceNote?'<p class="escobar-meta">'+escapeHtml(item.serviceNote)+' '+sourceLink(item.serviceNoteSourceUrl,"Ficha municipal complementaria ↗")+'</p>':"")
   +'</div>';
 }).join("");
 const healthHtml=health?'<h4>'+escapeHtml(health.name)+'</h4><p>'+escapeHtml(health.summary)+'</p><p class="escobar-meta">'+escapeHtml(health.localityCoverageNote)+'</p>'+facilities+'<p class="escobar-meta">Publicación: '+escapeHtml(date(health.sourcePublishedAt))+' · Vigencia: '+escapeHtml(health.validityPeriod)+' · Verificación: '+escapeHtml(date(health.verification&&health.verification.checkedAt))+' · '+escapeHtml(health.verification&&health.verification.scope||"")+'</p><p>'+sourceLink(health.sourceUrl,"Guardias y emergencias ↗")+' '+sourceLink(health.additionalDirectoryUrl,"Directorio completo de centros de salud ↗")+'</p>':"";
 el("escobar-services").innerHTML=(services||'<p class="escobar-meta">No hay directorios municipales cargados.</p>')+healthHtml;
 const transparency=territory.transparencyDirectory;
 const transparencyTarget=el("escobar-transparency");
 if(transparency&&transparencyTarget){
  const snapshot=transparency.openDataSnapshot||{};
  const categories=(snapshot.categoryCounts||[]).slice().sort((a,b)=>b.datasets-a.datasets).filter(item=>item.datasets>0).slice(0,5);
  const categorySummary=categories.map(item=>escapeHtml(item.name)+" ("+escapeHtml(number(item.datasets))+")").join(" · ");
  const functions=(transparency.publishedFunctions||[]).map(item=>"<li>"+escapeHtml(item)+"</li>").join("");
  transparencyTarget.innerHTML='<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(transparency.status))+'</span><h4>'+escapeHtml(transparency.name)+'</h4><p>'+escapeHtml(transparency.summary)+'</p>'
   +'<p class="escobar-meta">Portal de datos abiertos: '+escapeHtml(number(snapshot.publishedDatasets||0))+' datasets · '+escapeHtml(number(snapshot.thematicCategories||0))+' categorías · '+escapeHtml(number(snapshot.availableFormats||0))+' formatos · Consulta: '+escapeHtml(date(snapshot.checkedAt))+'</p>'
   +'<p class="escobar-meta">Categorías con más registros: '+categorySummary+'</p>'
   +'<p class="escobar-meta">'+escapeHtml(snapshot.note||"")+'</p>'
   +'<details><summary>Secciones institucionales publicadas</summary><ul>'+functions+'</ul></details>'
   +'<p class="escobar-meta">Publicación: '+escapeHtml(date(transparency.sourcePublishedAt))+' · Vigencia: '+escapeHtml(transparency.validityPeriod)+' · Verificación: '+escapeHtml(date(transparency.verification&&transparency.verification.checkedAt))+'</p>'
   +'<p class="escobar-meta">Alcance: '+escapeHtml(transparency.verification&&transparency.verification.scope||"")+'</p>'
   +'<p>'+sourceLink(transparency.sourceUrl,"Transparencia municipal ↗")+' '+sourceLink(transparency.openDataUrl,"Datos abiertos ↗")+' '+sourceLink(transparency.informationRequestUrl,"Solicitar información pública ↗")+'</p>'
   +'<p class="escobar-meta">Contacto de datos abiertos: '+escapeHtml(transparency.contact&&transparency.contact.email||"No indicado")+' · '+escapeHtml(transparency.contact&&transparency.contact.address||"")+'</p></div>';
 }
 const mobility=territory.mobilityDirectory;
 if(mobility){
  const stops=Array.isArray(mobility.stops)?mobility.stops:[];
  const stopGroups=(territory.localities||[]).map(locality=>{
   const entries=stops.filter(item=>item.locality===locality.name);
   if(!entries.length)return "";
   return '<section class="escobar-mobility-locality"><h4>'+escapeHtml(locality.name)+' <span>'+escapeHtml(number(entries.length))+' paradas</span></h4><ul>'+entries.map(item=>'<li>'+escapeHtml(item.intersection)+'</li>').join("")+'</ul></section>';
  }).join("");
  const planner=mobility.planner||{};
  const dataset=mobility.openDataDataset||{};
  const rail=mobility.railService||{};
  const announcedRoutes=Array.isArray(mobility.announcedRoutes)?mobility.announcedRoutes:[];
  const plannerServices=Array.isArray(mobility.plannerServices)?mobility.plannerServices:[];
  const plannerServicesHtml=plannerServices.length
   ?'<div class="escobar-item"><h4>Servicios publicados en el planificador Mi Bus</h4><p>La ficha oficial acredita que la ruta figura en el planificador municipal; no confirma circulación en tiempo real ni la equivalencia con un ramal anunciado.</p></div>'+plannerServices.map(item=>'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(item.status))+'</span><h4>'+escapeHtml(item.name||"")+'</h4><p>'+escapeHtml(item.summary||"")+'</p><p class="escobar-meta">Ámbito: '+escapeHtml((item.localities||[]).length?(item.localities||[]).join(", "):(item.localityScopeNote||"No determinado en la ficha"))+' · Paradas listadas: '+escapeHtml(number(item.listedStopsCount||0))+' · Desde: '+escapeHtml(item.firstListedStop||"No indicado")+' · Hasta: '+escapeHtml(item.lastListedStop||"No indicado")+'</p><p class="escobar-meta">Estado de circulación efectiva: '+escapeHtml(statusLabel(item.operationalStatus))+' · Publicación: '+escapeHtml(date(item.sourcePublishedAt))+' · Vigencia: '+escapeHtml(item.validityPeriod||"No indicada")+'</p><p class="escobar-meta">'+escapeHtml(item.announcementRelation||"")+'</p><p class="escobar-meta">Verificación: '+escapeHtml(date(item.verification&&item.verification.checkedAt))+' · '+escapeHtml(item.verification&&item.verification.scope||"")+'</p><p>'+sourceLink(item.sourceUrl,"Ficha de la línea en Mi Bus ↗")+' '+sourceLink(item.catalogUrl,"Catálogo Mi Bus ↗")+'</p></div>').join("")
   :"";

  const announcedRoutesHtml=announcedRoutes.length
   ?'<div class="escobar-item"><h4>Ramales de colectivos anunciados</h4><p>Los trazados reflejan la comunicación municipal. No se presume operación vigente sin confirmación primaria posterior.</p></div>'+announcedRoutes.map(item=>{
     const outbound=Array.isArray(item.routeOutbound)?item.routeOutbound.join(" → "):"No publicado";
     const inbound=Array.isArray(item.routeReturn)?item.routeReturn.join(" → "):"No publicado";
     const secondary=(Array.isArray(item.secondaryReports)?item.secondaryReports:[]).map(report=>sourceLink(report.sourceUrl,report.sourceName+" · "+date(report.sourcePublishedAt)+" ↗")).join(" ");
     return '<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(item.status))+'</span><h4>'+escapeHtml(item.name||"")+'</h4><p>'+escapeHtml(item.summary||"")+'</p><p class="escobar-meta">Operador: '+escapeHtml(item.operator||"No indicado")+' · Origen: '+escapeHtml(item.origin||"No indicado")+' · Destino: '+escapeHtml(item.destination||"No indicado")+'</p><p class="escobar-meta">Localidades: '+escapeHtml((item.localities||[]).join(", "))+'</p><details><summary>Recorrido anunciado</summary><p>Ida: '+escapeHtml(outbound)+'</p><p>Vuelta: '+escapeHtml(inbound)+'</p></details><p class="escobar-meta">Publicación: '+escapeHtml(date(item.sourcePublishedAt))+' · Período: '+escapeHtml(item.period||"No indicado")+' · Vigencia: '+escapeHtml(item.validityPeriod||"No indicada")+'</p><p class="escobar-meta">Estado operativo: '+escapeHtml(statusLabel(item.operationalStatus))+' · Verificación: '+escapeHtml(date(item.verification&&item.verification.checkedAt))+' · '+escapeHtml(item.verification&&item.verification.scope||"")+'</p><p>'+sourceLink(item.sourceUrl,"Anuncio municipal ↗")+'</p>'+(secondary?'<p class="escobar-meta">Reportes secundarios, no oficiales: '+secondary+'</p>':"")+'</div>';
    }).join("")
   :"";

  const railStations=(Array.isArray(rail.stations)?rail.stations:[]).map(item=>'<li>'+escapeHtml(item.stationName)+' · '+escapeHtml(item.locality)+'</li>').join("");
  const infrastructure=mobility.railInfrastructure||{};
  const infrastructureStations=Array.isArray(infrastructure.stations)?infrastructure.stations:[];
  const infrastructureList=infrastructureStations.map(item=>{
   const coords=Array.isArray(item.coords)?item.coords.map(value=>Number(value).toFixed(6)).join(", "):"No publicadas";
   return '<li><strong>'+escapeHtml(item.stationName)+'</strong> · '+escapeHtml(item.locality)+' · Coordenadas WGS 84 (lat., long.): '+escapeHtml(coords)+'</li>';
  }).join("");
  const railInfrastructureHtml=infrastructure.name?'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(infrastructure.status))+'</span><h4>'+escapeHtml(infrastructure.name)+'</h4><p>'+escapeHtml(infrastructure.summary||"")+'</p><ul>'+infrastructureList+'</ul><p class="escobar-meta">'+escapeHtml(infrastructure.coverageNote||"")+'</p><p class="escobar-meta">Actualización del dataset: '+escapeHtml(date(infrastructure.lastUpdatedAt))+' · CRS original: '+escapeHtml(infrastructure.sourceCrs||"No indicado")+' · CRS del mapa: '+escapeHtml(infrastructure.coordinateCrs||"No indicado")+' · Licencia: '+escapeHtml(infrastructure.license||"No indicada")+'</p><p class="escobar-meta">Estado del servicio: '+escapeHtml(statusLabel(infrastructure.operationalStatus))+' · Verificación: '+escapeHtml(date(infrastructure.verification&&infrastructure.verification.checkedAt))+' · '+escapeHtml(infrastructure.verification&&infrastructure.verification.scope||"")+'</p><p>'+sourceLink(infrastructure.sourceUrl,"Ficha del dataset municipal ↗")+' '+sourceLink(infrastructure.resourceUrl,"GeoJSON original ↗")+'</p></div>':"";
  const railHtml=rail.name?'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(rail.status))+'</span><h4>'+escapeHtml(rail.name)+'</h4><p>'+escapeHtml(rail.summary||"")+'</p><ul>'+railStations+'</ul><p class="escobar-meta">'+escapeHtml(rail.coverageNote||"")+'</p><p class="escobar-meta">Publicación: '+escapeHtml(date(rail.sourcePublishedAt))+' · '+escapeHtml(rail.sourcePublicationNote||"")+' · Vigencia indicada: '+escapeHtml(date(rail.effectiveFrom))+'</p><p class="escobar-meta">Estado de circulación: '+escapeHtml(statusLabel(rail.operationalStatus))+' · Verificación: '+escapeHtml(date(rail.verification&&rail.verification.checkedAt))+' · '+escapeHtml(rail.verification&&rail.verification.scope||"")+'</p><p>'+sourceLink(rail.sourceUrl,"Ficha oficial de horarios ↗")+' '+sourceLink(rail.timetableUrl,"Consultar diagrama publicado ↗")+'</p></div>':"";
  const connections=Array.isArray(mobility.interlocalConnections)?mobility.interlocalConnections:[];
  const connectionsHtml=connections.map(item=>'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(item.status))+'</span><h4>'+escapeHtml(item.name||"")+'</h4><p>'+escapeHtml(item.summary||"")+'</p><p class="escobar-meta">Ubicación publicada: '+escapeHtml(item.location||"No indicada")+' · '+escapeHtml(item.fromNeighborhood||"")+' ('+escapeHtml(item.fromLocality||"")+') — '+escapeHtml(item.toNeighborhood||"")+' ('+escapeHtml(item.toLocality||"")+')</p><p class="escobar-meta">Publicación: '+escapeHtml(date(item.sourcePublishedAt))+' · Estado actual: '+escapeHtml(statusLabel(item.operationalStatus))+' · Verificación: '+escapeHtml(date(item.verification&&item.verification.checkedAt))+' · '+escapeHtml(item.verification&&item.verification.scope||"")+'</p><p>'+sourceLink(item.sourceUrl,"Nota municipal sobre el puente ↗")+'</p></div>').join("");
  const assessment=mobility.intermodalAssessment||{};
  const sharedLocalities=Array.isArray(assessment.sharedLocalities)?assessment.sharedLocalities:[];
  const intermodalHtml=assessment.name?'<div class="escobar-item"><span class="escobar-status">'+escapeHtml(statusLabel(assessment.status))+'</span><h4>'+escapeHtml(assessment.name)+'</h4><p>'+escapeHtml(assessment.summary||"")+'</p><p class="escobar-meta">Localidades con registros de ambos modos: '+escapeHtml(sharedLocalities.join(", ")||"No identificadas")+'. Coincidencia territorial; no confirma proximidad ni transbordo.</p><p class="escobar-meta">Publicación de datos: '+escapeHtml(assessment.sourcePublicationNote||"No informada")+' · Verificación: '+escapeHtml(date(assessment.verification&&assessment.verification.checkedAt))+' · '+escapeHtml(assessment.verification&&assessment.verification.scope||"")+'</p><p>'+sourceLink(assessment.sourceUrl,"Datos abiertos de colectivos ↗")+' '+sourceLink(assessment.relatedSourceUrl,"Diagrama ferroviario ↗")+'</p></div>':"";
  el("escobar-mobility").innerHTML=
   '<p>'+escapeHtml(mobility.summary||"")+'</p>'
   +'<div class="escobar-mobility-stops">'+stopGroups+'</div>'
   +'<p class="escobar-meta">Listado publicado: '+escapeHtml(date(mobility.sourcePublishedAt))+' · Estado: '+escapeHtml(statusLabel(mobility.status))+' · Verificación web: '+escapeHtml(date(mobility.verification&&mobility.verification.checkedAt))+'. '+escapeHtml(mobility.verification&&mobility.verification.scope||"")+'</p>'
   +'<p>'+sourceLink(mobility.sourceUrl,"Noticia municipal y listado de paradas ↗")+' '+sourceLink(planner.sourceUrl,"Abrir planificador Mi Bus ↗")+'</p>'
   +'<div class="escobar-item"><h4>Datos abiertos de transporte</h4><p>'+escapeHtml(dataset.name||"")+'</p><p class="escobar-meta">Actualización del conjunto: '+escapeHtml(date(dataset.lastUpdatedAt))+' · Periodicidad: '+escapeHtml(dataset.periodicity||"No informada")+' · Licencia: '+escapeHtml(dataset.license||"No informada")+' · Estado de integración: '+escapeHtml(statusLabel(dataset.status))+'</p><p class="escobar-meta">'+escapeHtml(dataset.verification&&dataset.verification.scope||"")+'</p>'+sourceLink(dataset.sourceUrl,"Consultar dataset y descargar recurso XLSX ↗")+'</div>'
   +plannerServicesHtml+announcedRoutesHtml+railHtml+railInfrastructureHtml+connectionsHtml+intermodalHtml;
 }else{
  el("escobar-mobility").innerHTML='<p class="escobar-meta">No hay datos de movilidad cargados.</p>';
 }
 const snapshot=economy.previousPageSnapshot;
 el("escobar-provenance").innerHTML=
  '<p><strong>Barrios:</strong> '+escapeHtml(territory.sourceName)+' · Publicación: '+escapeHtml(date(territory.sourcePublishedAt))+' · Vigencia: '+escapeHtml(territory.validityPeriod||"No indicada")+' · Estado: '+escapeHtml(statusLabel(territory.status))+' · Verificación: '+escapeHtml(date(territory.verification&&territory.verification.checkedAt))+'. '+escapeHtml(territory.verification&&territory.verification.scope||"")+' '+sourceLink(territory.sourceUrl,"Fuente territorial ↗")+'</p>'+
  '<p><strong>Economía:</strong> '+escapeHtml(economy.sourcePublisher)+' · Publicación: '+escapeHtml(date(economy.sourcePublishedAt))+' · Período: '+escapeHtml(economy.validityPeriod||"No informado")+' · Estado: '+escapeHtml(statusLabel(economy.status))+' · Verificación: '+escapeHtml(date(economy.verification&&economy.verification.checkedAt))+'. '+escapeHtml(economy.verification&&economy.verification.scope||"")+' '+sourceLink(economy.indicators&&economy.indicators.industrialEstablishments&&economy.indicators.industrialEstablishments.sourceUrl,"Fuente económica ↗")+'</p>'+
  (snapshot?'<p><strong>Control de consistencia:</strong> '+escapeHtml(snapshot.note)+'</p>':"")+
  '<p><strong>Servicios:</strong> las páginas municipales consultadas no indican fecha de publicación; se registra fecha de consulta y alcance. La verificación fue web, no presencial. Horarios, recorridos y prestaciones pueden cambiar.</p>';
}
function renderNodes(nodes){
 const local=(Array.isArray(nodes)?nodes:[]).filter(item=>item&&item.district==="Partido de Escobar");
 const localities=Array.from(new Set(local.map(item=>item.locality).filter(Boolean)));
 el("escobar-map-coverage").innerHTML='<strong>'+escapeHtml(number(local.length))+'</strong> referencias cartográficas · <strong>'+escapeHtml(number(localities.length))+'</strong> de 7 localidades con puntos propios. El catálogo actual se concentra en '+escapeHtml(localities.join(" y ")||"ninguna localidad")+'; no se inventan coordenadas para las restantes.';
 el("escobar-map-nodes").innerHTML=local.map(item=>'<article class="escobar-node"><div><strong>'+escapeHtml(item.name)+'</strong><small>'+escapeHtml(item.locality)+' · '+escapeHtml(item.type)+' · '+escapeHtml(statusLabel(item.status))+' · verificado '+escapeHtml(date(item.verification&&item.verification.checkedAt))+'</small><small>'+escapeHtml(item.validityPeriod||"Vigencia no informada")+'</small><small>'+escapeHtml(item.sourceName||"Fuente no informada")+' · '+escapeHtml(item.sourcePublicationNote||date(item.sourcePublishedAt))+'</small></div><button type="button" data-escobar-node="'+escapeHtml(item.name)+'">Ver en mapa ↗</button></article>').join("")||'<p class="escobar-meta">No hay referencias cartográficas locales cargadas.</p>';
}
root.addEventListener("click",event=>{
 const button=event.target.closest("[data-escobar-node]");
 if(!button)return;
 const focus=window.MapaFederalMap&&window.MapaFederalMap.focusPoint;
 if(typeof focus==="function")focus(button.getAttribute("data-escobar-node"));
});
window.MapaFederalEscobar={setNodes:renderNodes};
if(window.MapaFederalMap&&typeof window.MapaFederalMap.getPoints==="function")renderNodes(window.MapaFederalMap.getPoints());
async function load(){
 try{
  const responses=await Promise.all([
   fetch("./data/escobar-territory.json",{cache:"no-store"}),
   fetch("./data/escobar-economic-profile.json",{cache:"no-store"})
  ]);
  if(responses.some(response=>!response.ok))throw new Error("No se pudieron cargar los datasets locales");
  const data=await Promise.all(responses.map(response=>response.json()));
  if(!Array.isArray(data[0].localities)||!data[0].verification||!data[1].indicators)throw new Error("Estructura del perfil local inválida");
  renderProfile(data[0],data[1]);
 }catch(error){
  el("escobar-metrics").innerHTML='<div class="empty">No se pudo cargar el perfil local. Consultá los datasets oficiales enlazados en el repositorio.</div>';
  el("escobar-localities").innerHTML="";
  el("escobar-economy").innerHTML="";
  el("escobar-services").innerHTML="";
  el("escobar-provenance").textContent="Los datos locales no están disponibles en este momento.";
 }
}
load();
})();
