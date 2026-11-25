const assert = require("node:assert/strict");
const fs = require("node:fs");

const territory = JSON.parse(fs.readFileSync("data/escobar-territory.json", "utf8"));
const directory = territory.earlyChildhoodDirectory;

assert.ok(directory, "Falta el directorio de Centros de Desarrollo Infantil");
assert.equal(directory.name, "Centros de Desarrollo Infantil (CDI)");
assert.equal(directory.status, "pendiente", "La discrepancia de inventario y la operación efectiva siguen pendientes");
assert.equal(directory.operationalStatus, "unknown");
assert.equal(directory.mapIntegrationStatus, "pending");
assert.equal(directory.sourcePublishedAt, null, "No inventar fecha de publicación de la Guía de oficinas");
assert.equal(directory.verification.status, "verified");
assert.equal(directory.verification.checkedAt, "2026-11-25");
assert.match(directory.summary, /nueve CDI/i);
assert.match(directory.summary, /siete/i);
assert.match(directory.summary, /no están conciliados/i);

const expected = [
  ["cdi-01-nino-jesus","CDI Nº1 «Niño Jesús»","Belén de Escobar","Víctor Hugo 265","(0348) 443-0553"],
  ["cdi-02-sagrado-corazon","CDI Nº2 «Sagrado Corazón de Jesús»","Belén de Escobar","Callao 2542","(0348) 443-0554"],
  ["cdi-03-san-antonio","CDI Nº3 «San Antonio de Padua»","Ingeniero Maschwitz","Muñiz 232","(0348) 444-6209"],
  ["cdi-04-santa-teresa","CDI Nº4 «Santa Teresa»","Garín","Pablo Marín s/n, entre Islas Malvinas y Scalabrini Ortiz","(02320) 620-940"],
  ["cdi-05-virgen-de-lujan","CDI Nº5 «Virgen de Luján»","Maquinista Savio","Sarmiento s/n, entre San Martín y Chaco","(0348) 446-8590"],
  ["cdi-06-evita","CDI Nº6 «Evita»","Garín","Santa Fe 877","(0348) 447-6544"],
  ["cdi-07-siete-de-mayo","CDI Nº7 «7 de Mayo»","Matheu","Pavón 173","(0348) 446-1122"]
];
assert.equal(directory.listedFacilities.length, 7);
assert.deepEqual(directory.listedFacilities.map(item => [item.id,item.name,item.locality,item.address,item.phone]), expected);
assert.equal(new Set(directory.listedFacilities.map(item => item.id)).size, 7);
assert.deepEqual(
  [...new Set(directory.listedFacilities.map(item => item.locality))].sort(),
  ["Belén de Escobar","Garín","Ingeniero Maschwitz","Maquinista Savio","Matheu"].sort()
);
for (const item of directory.listedFacilities) {
  assert.equal(item.listingStatus, "listed");
  assert.ok(item.address);
  assert.ok(item.phone);
  assert.equal(item.mapUrl, undefined, "No inventar enlaces cartográficos ni georreferencias");
  assert.equal(item.lat, undefined);
  assert.equal(item.long, undefined);
  assert.equal(item.geometry, undefined);
}

const guide = directory.sourceUrl;
assert.equal(guide, "https://www.escobar.gob.ar/municipio/oficinas/?q=cdi");
const education = directory.relatedSources.find(item => /9 CDI/.test(item.label));
const children = directory.relatedSources.find(item => /7 CDI/.test(item.label));
const conecta = directory.relatedSources.find(item => /CONECTA/.test(item.label));
const historic = directory.relatedSources.find(item => /Inscripción 2024/.test(item.label));
const dataset = directory.relatedSources.find(item => /Dataset municipal/.test(item.label));
assert.ok(education && children && conecta && historic && dataset);
assert.match(education.note, /nueve/i);
assert.match(children.note, /siete/i);
assert.match(conecta.note, /N°8/);
assert.match(conecta.note, /N°7/);
assert.equal(historic.sourcePublishedAt, "2023-10-23");
assert.match(historic.note, /Víctor Hugo 285/);
assert.match(historic.note, /La Victoria y Los Pinos/);
for (const source of [{url:guide},...directory.relatedSources]) {
  assert.equal(new URL(source.url).protocol, "https:");
}

assert.equal(directory.datasetResource.createdAt, "2025-10-01");
assert.equal(directory.datasetResource.lastUpdatedAt, "2026-03-31");
assert.equal(directory.datasetResource.version, "1.0");
assert.equal(directory.datasetResource.license, "Open Data Commons Open Database License (ODbL)");
assert.equal(directory.datasetResource.httpStatus, 404);
assert.equal(directory.datasetResource.checkedAt, "2026-11-25");
assert.equal(directory.datasetResource.sourceCrs, null);
assert.equal(directory.datasetResource.geometryIntegrationStatus, "pending");
assert.match(directory.datasetResource.note, /HTTP 404/);
assert.match(directory.coverageNote, /Loma Verde/);
assert.match(directory.coverageNote, /24 de Febrero/);
assert.ok(directory.discrepancies.some(item => /Dirección de Niño Jesús/.test(item.topic) && /285/.test(item.note) && /265/.test(item.note)));
assert.ok(directory.discrepancies.some(item => /Numeración/.test(item.topic) && /Saavedra/.test(item.note)));
assert.ok(directory.discrepancies.some(item => /Registros de 2023/.test(item.topic) && /Rosario Vera Peñaloza/.test(item.note)));

const renderer = fs.readFileSync("assets/foco-escobar.js", "utf8");
assert.match(renderer, /earlyChildhoodDirectory/);
assert.match(renderer, /listedFacilities/);
assert.match(renderer, /earlyChildhoodDiscrepancies/);
assert.match(renderer, /earlyChildhoodSources/);
assert.match(renderer, /Integración cartográfica pendiente/);
const workflow = fs.readFileSync(".github/workflows/static.yml", "utf8");
assert.match(workflow, /Test Escobar early-childhood directory and source reconciliation/);
assert.match(workflow, /node tests\/escobar-early-childhood\.test\.js/);

console.log("Escobar CDI: siete fichas municipales, contradicciones de conteo/numeración, descarga geográfica 404 y ausencia de georreferencias validadas comprobadas.");
