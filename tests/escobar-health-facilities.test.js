const assert = require("node:assert/strict");
const fs = require("node:fs");

const territory = JSON.parse(fs.readFileSync("data/escobar-territory.json", "utf8"));
const health = territory.healthFacilitiesDirectory;
const hospital = health.facilities.find(item => item.id === "hospital-provincial-bicentenario");

assert.ok(hospital, "Falta el Hospital Provincial Bicentenario en el directorio de Escobar");
assert.equal(health.facilities.length, 12);
assert.equal(hospital.name, "Hospital Provincial Bicentenario");
assert.equal(hospital.locality, "Garín");
assert.equal(hospital.category, "Hospital provincial");
assert.equal(hospital.address, "Libertad 1100");
assert.equal(hospital.status, "operativo");
assert.equal(hospital.phone, null, "No inventar un teléfono");
assert.equal(hospital.sourcePublishedAt, null, "No inventar fecha de publicación");
assert.equal(hospital.sourceUrl, "https://www.escobar.gob.ar/municipio/centros-de-salud/");
assert.equal(hospital.verification.checkedAt, "2026-11-24");
assert.match(hospital.verification.scope, /tres páginas municipales/i);
assert.match(hospital.verification.scope, /sin comprobación presencial/i);
assert.match(hospital.serviceHours, /PAMI/);
assert.match(hospital.serviceHours, /IOMA/);
assert.match(hospital.serviceNote, /no deben generalizarse/i);
assert.deepEqual(hospital.relatedSources.map(source => source.url), [
  "https://www.escobar.gob.ar/municipio/prestaciones-pami/",
  "https://www.escobar.gob.ar/municipio/prestaciones-ioma/"
]);
for (const source of [{url:hospital.sourceUrl}, ...hospital.relatedSources]) {
  assert.equal(new URL(source.url).protocol, "https:");
}
const renderer = fs.readFileSync("assets/escobar-profile.js", "utf8");
assert.match(renderer, /statusLabel\(item\.status\|\|health\.status\)/);
assert.match(renderer, /facilitySources/);
assert.match(renderer, /sourceLink\(source\.url/);
console.log("Escobar health directory: Hospital Provincial Bicentenario, source attribution, coverage-specific schedules and per-record links validated.");
