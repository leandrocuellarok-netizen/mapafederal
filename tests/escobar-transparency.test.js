const assert = require("node:assert/strict");
const fs = require("node:fs");

const territory = JSON.parse(fs.readFileSync("data/escobar-territory.json", "utf8"));
const transparency = territory.transparencyDirectory;
assert.ok(transparency, "Falta el directorio de transparencia de Escobar");
assert.equal(territory.jurisdiction, "Partido de Escobar");
assert.equal(territory.localities.length, 7, "Debe conservar las siete localidades");
assert.equal(territory.localities.reduce((sum, item) => sum + item.officiallyRecognizedNeighborhoods, 0), 246);

assert.equal(transparency.status, "operativo");
assert.equal(transparency.dynamicContentStatus, "pendiente");
assert.equal(transparency.verification.checkedAt, "2026-11-24");
assert.equal(transparency.openDataSnapshot.publishedDatasets, 53);
assert.equal(transparency.openDataSnapshot.thematicCategories, 15);
assert.equal(transparency.openDataSnapshot.availableFormats, 8);

const categoryCounts = transparency.openDataSnapshot.categoryCounts;
assert.equal(categoryCounts.length, 15);
assert.equal(categoryCounts.reduce((sum, item) => sum + item.datasets, 0), 53);
const finance = categoryCounts.find(item => item.name === "Economía y Finanzas");
assert.ok(finance, "Debe conservar la categoría Economía y Finanzas");
assert.equal(finance.datasets, 0);
assert.match(transparency.openDataSnapshot.note, /no demuestra ausencia de información financiera/i);
assert.match(transparency.openDataSnapshot.note, /listados dinámicos/i);

for (const url of [transparency.sourceUrl, transparency.openDataUrl, transparency.informationRequestUrl]) {
  assert.equal(new URL(url).protocol, "https:");
}

assert.ok(transparency.publishedFunctions.some(item => /decretos/i.test(item)));
assert.ok(transparency.publishedFunctions.some(item => /presupuestos y ordenanzas/i.test(item)));
assert.ok(transparency.publishedFunctions.some(item => /licitaciones/i.test(item)));
assert.equal(transparency.contact.email, "datos@escobar.gob.ar");

const profile = fs.readFileSync("assets/escobar-profile.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");
assert.match(profile, /escobar-transparency/);
assert.match(profile, /transparency\.openDataSnapshot/);
assert.match(profile, /transparency\.verification/);
assert.match(html, /id="escobar-transparency"/);
assert.match(html, /Transparencia municipal y datos públicos/);

console.log("Escobar transparencia: portales oficiales, 53 datasets, 15 categorías, 8 formatos, cautela sobre Economía y Finanzas y siete localidades validados.");
