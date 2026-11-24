const assert = require("node:assert/strict");
const fs = require("node:fs");

const territory = JSON.parse(fs.readFileSync("data/escobar-territory.json", "utf8"));
const health = territory.healthFacilitiesDirectory;
const hospital = health.facilities.find(item => item.id === "hospital-provincial-bicentenario");

assert.ok(hospital, "Falta el Hospital Provincial Bicentenario en el directorio de Escobar");
assert.equal(health.facilities.length, 14);
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

const papaFrancisco = health.facilities.find(item => item.id === "hospital-salud-mental-papa-francisco");
assert.ok(papaFrancisco, "Falta el Hospital de Salud Mental y Adicciones Papa Francisco");
assert.equal(papaFrancisco.locality, "Belén de Escobar");
assert.equal(papaFrancisco.address, "Pellegrini y Dr. Travi");
assert.equal(papaFrancisco.serviceHours, "Lunes a viernes de 8 a 18 h para las evaluaciones neurocognitivas publicadas");
assert.equal(papaFrancisco.phone, "3484 430-544");
assert.equal(papaFrancisco.status, "operativo");
assert.equal(papaFrancisco.sourcePublishedAt, null, "No inventar fecha de publicación");
assert.equal(papaFrancisco.sourceUrl, "https://www.escobar.gob.ar/municipio/cartilla-de-discapacidad-y-desarrollo/");
assert.match(papaFrancisco.verification.scope, /sin comprobación presencial/i);
assert.equal(papaFrancisco.mapUrl, undefined, "No inventar una georreferencia");

const guevara = health.facilities.find(item => item.id === "udp-carlos-guevara");
assert.ok(guevara, "La UDP Dr. Carlos Guevara debe figurar como establecimiento listado");
assert.equal(guevara.address, "Cervantes 635");
assert.equal(guevara.status, "pendiente", "La guardia actual no está confirmada");
assert.equal(guevara.phone, null, "No inventar un teléfono");
assert.equal(guevara.sourcePublishedAt, null, "No inventar fecha de publicación");
assert.match(guevara.summary, /guardia y operación actual permanecen pendientes/i);
assert.equal(health.pendingDirectoryDiscrepancies.length, 0, "La discrepancia de Guevara se documenta ahora en su ficha individual");

const selles = health.facilities.find(item => item.id === "caps-juan-carlos-selles");
assert.equal(selles.phone, null, "No consolidar teléfonos oficiales contradictorios");
assert.match(selles.addressNote, /Fonavi/);
assert.match(selles.addressNote, /24 de Febrero/);
assert.match(selles.serviceNote, /11 2150-0302/);
assert.match(selles.serviceNote, /449-3444/);

const lopez = health.facilities.find(item => item.id === "hospital-horacio-lopez");
assert.equal(lopez.address, null, "No seleccionar una dirección entre las fuentes municipales contradictorias");
assert.match(lopez.addressNote, /156/);
assert.match(lopez.addressNote, /240/);
assert.equal(lopez.phone, "11 2150-0371");

for (const item of [papaFrancisco, guevara, selles, lopez]) {
  for (const source of item.relatedSources || []) {
    assert.equal(new URL(source.url).protocol, "https:");
  }
}

const renderer = fs.readFileSync("assets/escobar-profile.js", "utf8");
assert.match(renderer, /statusLabel\(item\.status\|\|health\.status\)/);
assert.match(renderer, /facilitySources/);
assert.match(renderer, /sourceLink\(source\.url/);
console.log("Escobar health directory: Hospital Provincial Bicentenario, source attribution, coverage-specific schedules and per-record links validated.");
