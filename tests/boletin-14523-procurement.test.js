const assert=require("node:assert/strict");
const catalog=require("../data/investment-opportunities.json");
const source="https://boletinoficial.gba.gob.ar/secciones/14523/descargar";
const expected={
"general-alvarado-licitacion-6-2026-puesta-en-valor-frente-maritimo-miramar":["Partido de General Alvarado, Provincia de Buenos Aires","open","2026-12-03",386017911.12],
"general-alvear-licitacion-4-2026-polideportivo-municipal":["Partido de General Alvear, Provincia de Buenos Aires","unknown",null,287276345.61],
"general-la-madrid-licitacion-9-2026-compra-combi-0km":["Partido de General La Madrid, Provincia de Buenos Aires","open","2026-12-09",146000000],
"malvinas-argentinas-licitacion-50-2026-porticos-metalicos":["Partido de Malvinas Argentinas, Provincia de Buenos Aires","open","2026-11-30",1282839360],
"presidente-peron-licitacion-14-2026-recoleccion-residuos":["Partido de Presidente Perón, Provincia de Buenos Aires","unknown","2026-11-26",124000000],
"san-fernando-licitacion-43-2026-puesta-en-valor-escuela-primaria-22-secundaria-27":["Partido de San Fernando, Provincia de Buenos Aires","unknown",null,1900000000],
"san-fernando-licitacion-44-2026-puesta-en-valor-escuela-primaria-32":["Partido de San Fernando, Provincia de Buenos Aires","unknown",null,1150000000],
"san-fernando-licitacion-45-2026-puesta-en-valor-jardin-infantil-907":["Partido de San Fernando, Provincia de Buenos Aires","unknown",null,820000000],
"san-isidro-licitacion-43-2026-ropa-esteril-descartable-hospitales":["Partido de San Isidro, Provincia de Buenos Aires","unknown",null,229980000],
"vicente-lopez-licitacion-53-2026-servicio-hemodialisis-hospital-houssay":["Partido de Vicente López, Provincia de Buenos Aires","open","2026-12-11",234031896],
"vicente-lopez-licitacion-67-2026-puesta-en-valor-natatorio-florida-oeste":["Partido de Vicente López, Provincia de Buenos Aires","open","2026-12-15",1550000000],
"vicente-lopez-licitacion-69-2026-antisepticos-desinfectantes-2027":["Partido de Vicente López, Provincia de Buenos Aires","open","2026-12-16",224333205.40]};
for(const [id,[jurisdiction,status,until,amount]] of Object.entries(expected)){
const x=catalog.opportunities.find(y=>y.id===id);assert.ok(x,"Falta "+id);assert.equal(x.recordType,"tender");assert.equal(x.scope,"municipal");assert.equal(x.jurisdiction,jurisdiction);assert.equal(x.opportunityStatus,status);assert.equal(x.validFrom,"2026-11-20");assert.equal(x.validUntil,until);assert.equal(x.amount.value,amount);assert.equal(x.sourceUrl,source);assert.equal(x.sourcePublishedAt,"2026-11-20");assert.equal(x.verification.status,id==="presidente-peron-licitacion-14-2026-recoleccion-residuos"?"outdated":"verified");assert.equal(x.verification.checkedAt,"2026-11-25");assert.match(x.verification.scope,/edición 30366.*sección oficial.*página/i);assert.match(x.amount.basis,/no equivale al monto adjudicado/i);}
const p=catalog.opportunities.find(x=>x.id==="presidente-peron-licitacion-14-2026-recoleccion-residuos");assert.equal(p.opportunityStatus,"unknown");assert.equal(p.verification.status,"outdated");assert.match(p.verification.scope,/no se verificó prórroga.*ni adjudicación/i);assert.match(p.period,/presentación de ofertas hasta el 26\/11\/2026 a las 09:00/i);
const m=catalog.opportunities.find(x=>x.id==="malvinas-argentinas-licitacion-50-2026-porticos-metalicos");assert.match(m.period,/recepción de ofertas hasta 30\/11\/2026 a las 11:00/i);
assert.ok(["43","44","45"].every(n=>{const x=catalog.opportunities.find(y=>y.id.startsWith("san-fernando-licitacion-"+n+"-"));return x&&x.opportunityStatus==="unknown"&&x.validUntil===null;}));
console.log("Boletín bonaerense 30366: 12 licitaciones nuevas, jurisdicciones, montos, plazos y estados desconocidos verificados.");
