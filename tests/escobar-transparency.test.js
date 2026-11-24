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


const watercourses = transparency.environmentalDatasets.find(item => item.id === "cursos-de-agua-partido-escobar");
assert.ok(watercourses, "Falta la capa oficial de cursos de agua de Escobar");
assert.equal(watercourses.status, "pendiente", "La publicación del dataset no equivale a una capa ya integrada al mapa");
assert.equal(watercourses.sourcePublishedAt, null, "No inventar fecha de publicación");
assert.equal(watercourses.createdAt, "2025-10-01");
assert.equal(watercourses.lastUpdatedAt, "2026-03-31");
assert.equal(watercourses.version, "1.0");
assert.equal(watercourses.periodicity, "Anual");
assert.equal(watercourses.license, "Open Data Commons Open Database License (ODbL)");
assert.equal(watercourses.sourceCrs, "EPSG:22185");
assert.equal(watercourses.geometryIntegrationStatus, "pending");
assert.equal(watercourses.verification.status, "verified");
assert.equal(watercourses.verification.checkedAt, "2026-11-24");
assert.match(watercourses.verification.scope, /FeatureCollection/i);
assert.match(watercourses.verification.scope, /EPSG:22185/);
assert.match(watercourses.geometryNote, /no deben interpretarse como longitud\/latitud/i);
assert.match(watercourses.geometryNote, /no constituye por sí sola un mapa de riesgo hídrico/i);
for (const url of [watercourses.sourceUrl, watercourses.resourceUrl]) {
  assert.equal(new URL(url).protocol, "https:");
}
assert.match(profile, /environmentalDatasets/);
assert.match(profile, /escobar-environmental-dataset/);
assert.match(profile, /GeoJSON original/);

console.log("Escobar transparencia: portales oficiales, 53 datasets, 15 categorías, 8 formatos y referencia ambiental con CRS explícito, cautela sobre Economía y Finanzas y siete localidades validados.");
