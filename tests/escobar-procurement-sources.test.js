const assert = require("node:assert/strict");
const catalog = require("../data/investment-opportunities.json");

const expected = {
  "escobar-licitacion-67-2026-servicio-desagote": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14496/descargar",
    published: "2026-11-06",
    scopePattern: /Verificado en el Boletín Oficial provincial/i
  },
  "escobar-licitacion-66-2026-polideportivo-maschwitz": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14508/ver",
    published: "2026-11-12"
  },
  "escobar-licitacion-69-2026-mobiliario-urbano": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14508/ver",
    published: "2026-11-13",
    checkedAt: "2026-11-25",
    scopePattern: /ediciones 14505 y 14508.*no se localizó circular/i
  },
  "escobar-licitacion-71-2026-piedra-partida": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14523/descargar",
    published: "2026-11-19",
    checkedAt: "2026-11-25",
    scopePattern: /Recomprobado el 25.11.2026/i
  },
  "escobar-licitacion-72-2026-cascote": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14523/descargar",
    published: "2026-11-19",
    checkedAt: "2026-11-25",
    scopePattern: /Recomprobado el 25.11.2026/i
  },
  "escobar-licitacion-74-2026-polideportivo-maschwitz-pista-atletismo": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14517/ver",
    published: "2026-11-18",
    checkedAt: "2026-11-25",
    scopePattern: /Recomprobado el 25.11.2026/i
  },
  "escobar-licitacion-75-2026-control-vectores": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14523/descargar",
    published: "2026-11-19",
    checkedAt: "2026-11-25",
    scopePattern: /Recomprobado el 25.11.2026/i
  }
};

for (const [id, expectedSource] of Object.entries(expected)) {
  const item = catalog.opportunities.find(record => record.id === id);
  assert.ok(item, "Falta el registro municipal " + id);
  assert.equal(item.scope, "municipal");
  assert.equal(item.jurisdiction, "Partido de Escobar, Provincia de Buenos Aires");
  assert.equal(item.sourceUrl, expectedSource.url, "Fuente oficial incorrecta para " + id);
  assert.equal(item.sourcePublishedAt, expectedSource.published);
  assert.equal(item.verification.status, "verified");
  assert.equal(item.verification.checkedAt, expectedSource.checkedAt || "2026-11-24");
  assert.match(item.verification.scope, expectedSource.scopePattern || /enlace de fuente corregido/i);
  assert.match(item.amount.basis, /no equivale/i);
  assert.equal(new URL(item.sourceUrl).protocol, "https:");
}

const polideportivo = catalog.opportunities.find(item => item.id === "escobar-licitacion-66-2026-polideportivo-maschwitz");
const mobiliario = catalog.opportunities.find(item => item.id === "escobar-licitacion-69-2026-mobiliario-urbano");
const polideportivo74 = catalog.opportunities.find(item => item.id === "escobar-licitacion-74-2026-polideportivo-maschwitz-pista-atletismo");
assert.ok(polideportivo74, "Falta la LP 74/2026 del Polideportivo Ingeniero Maschwitz.");
assert.equal(polideportivo74.amount.value, 793000000);
assert.match(polideportivo74.description, /valor del pliego ARS 2\.000\.000/i);
assert.match(polideportivo74.description, /consultas: 26 y 27\/11\/2026, 09:00–12:00.*H\. Yrigoyen 743/i);
assert.match(polideportivo74.description, /venta del pliego: 30\/11 y 01\/12\/2026, 09:00–12:00/i);
assert.match(polideportivo74.description, /apertura: 04\/12\/2026 a las 10:00.*Sala de Reunión.*H\. Yrigoyen 743/i);
assert.match(polideportivo74.description, /Expediente 288\.725\/26/);
assert.match(polideportivo74.verification.scope, /edición 30368.*no se encontró una modificación/i);
assert.equal(polideportivo.opportunityStatus, "unknown");
assert.equal(mobiliario.opportunityStatus, "unknown");
for (const item of [polideportivo, mobiliario]) {
  assert.equal(item.relatedSources[0].url, "https://boletinoficial.gba.gob.ar/secciones/14505/ver");
  assert.match(item.verification.scope, /venta.*18–19\/11\/2026.*no se localizó circular/i);
}

const piedra=catalog.opportunities.find(x=>x.id==="escobar-licitacion-71-2026-piedra-partida");
const cascote=catalog.opportunities.find(x=>x.id==="escobar-licitacion-72-2026-cascote");
const vectores=catalog.opportunities.find(x=>x.id==="escobar-licitacion-75-2026-control-vectores");
assert.match(piedra.period,/Consultas: 1 y 2\/12\/2026, 09:00–12:00.*H\. Yrigoyen 743/i);
assert.match(piedra.description,/IVA incluido y con carácter de precio tope/i);
assert.match(piedra.period,/Expediente 289\.566\/26/);
assert.match(cascote.period,/apertura: 11\/12\/2026 a las 10:00/i);
assert.match(cascote.description,/IVA incluido y con carácter de precio tope/i);
assert.match(cascote.period,/Expediente 289\.561\/26/);
assert.match(vectores.period,/Consultas de pliego: 26–27\/11\/2026, 09:00–13:30.*Estrada 599/i);
assert.match(vectores.description,/la fuente no aclara en el aviso si incluye IVA/i);
assert.match(vectores.period,/Expediente 293\.751\/2026/);

const desagote = catalog.opportunities.find(item => item.id === "escobar-licitacion-67-2026-servicio-desagote");
assert.ok(desagote, "Falta la LP 67/2026 de servicio de desagote.");
assert.equal(desagote.stage, "unknown", "No se debe inferir adjudicación ni ejecución.");
assert.equal(desagote.opportunityStatus, "closed", "La apertura del 20/11/2026 ya pasó.");
assert.equal(desagote.validUntil, "2026-11-20");
assert.equal(desagote.amount.value, 288950000);
assert.match(desagote.amount.basis, /no equivale al monto adjudicado/i);
assert.match(desagote.verification.scope, /No se verificaron acta de apertura, ofertas, adjudicación, contrato ni prestación/i);

console.log("Escobar procurement: siete licitaciones enlazan a sus fuentes oficiales; cronogramas y cautelas sobre presupuesto/adjudicación comprobados.");
