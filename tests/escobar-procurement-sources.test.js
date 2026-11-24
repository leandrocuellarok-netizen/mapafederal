const assert = require("node:assert/strict");
const catalog = require("../data/investment-opportunities.json");

const expected = {
  "escobar-licitacion-66-2026-polideportivo-maschwitz": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14508/ver",
    published: "2026-11-12"
  },
  "escobar-licitacion-69-2026-mobiliario-urbano": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14508/ver",
    published: "2026-11-12"
  },
  "escobar-licitacion-71-2026-piedra-partida": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14523/ver",
    published: "2026-11-19"
  },
  "escobar-licitacion-72-2026-cascote": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14523/ver",
    published: "2026-11-19"
  },
  "escobar-licitacion-75-2026-control-vectores": {
    url: "https://boletinoficial.gba.gob.ar/secciones/14523/ver",
    published: "2026-11-19"
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
  assert.equal(item.verification.checkedAt, "2026-11-24");
  assert.match(item.verification.scope, /enlace de fuente corregido/i);
  assert.match(item.amount.basis, /no equivale/i);
  assert.equal(new URL(item.sourceUrl).protocol, "https:");
}

const polideportivo = catalog.opportunities.find(item => item.id === "escobar-licitacion-66-2026-polideportivo-maschwitz");
const mobiliario = catalog.opportunities.find(item => item.id === "escobar-licitacion-69-2026-mobiliario-urbano");
assert.equal(polideportivo.opportunityStatus, "unknown");
assert.equal(mobiliario.opportunityStatus, "unknown");

console.log("Escobar procurement: cinco licitaciones enlazan a las ediciones oficiales correctas; publicación, verificación y cautela sobre presupuesto/adjudicación comprobadas.");
