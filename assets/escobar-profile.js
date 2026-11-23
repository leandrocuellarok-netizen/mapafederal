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
