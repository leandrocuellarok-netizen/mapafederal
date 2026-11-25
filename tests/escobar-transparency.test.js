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

const profile = fs.readFileSync("assets/foco-escobar.js", "utf8");
const html = fs.readFileSync("foco-escobar/index.html", "utf8");
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

const boundaryReferenceRecord = transparency.territorialBoundaryReference;
assert.ok(boundaryReferenceRecord, "Falta la referencia oficial de límites municipales");
assert.equal(boundaryReferenceRecord.status, "pendiente");
assert.equal(boundaryReferenceRecord.geometryIntegrationStatus, "pending");
assert.equal(boundaryReferenceRecord.sourceCrs, "EPSG:4326");
assert.equal(boundaryReferenceRecord.metadataPublishedAt, "2017-12-19");
assert.equal(boundaryReferenceRecord.metadataLastUpdatedAt, "2019-07-31");
assert.match(boundaryReferenceRecord.geometryNote, /no se descargó ni verificó/i);
assert.match(boundaryReferenceRecord.geometryNote, /base nacional completa/i);
for (const url of [boundaryReferenceRecord.sourceUrl, boundaryReferenceRecord.ignDownloadUrl, boundaryReferenceRecord.resourceUrl, boundaryReferenceRecord.apiDocsUrl]) {
  assert.equal(new URL(url).protocol, "https:");
}
assert.match(profile, /territorialBoundaryReference/);
assert.match(profile, /boundaryReferenceHtml/);
assert.match(profile, /GeoJSON Georef/);
assert.match(profile, /escobar-boundary-reference/);
assert.match(profile, /environmentalDatasets/);
assert.match(profile, /escobar-environmental-dataset/);
assert.match(profile, /GeoJSON original/);


// EPSG:22185 preflight: Gauss-Kruger Faja 5, POSGAR 94, WGS84 ellipsoid.
// The municipal GeoJSON is read as conventional GIS XY: easting, northing.
// This test validates the projection math and one source sample; it does not
// certify every feature or authorize map integration without a boundary overlay.
const crsA = 6378137;
const crsF = 1 / 298.257223563;
const crsE2 = crsF * (2 - crsF);
const crsEp2 = crsE2 / (1 - crsE2);
function crsMeridionalArc(phi) {
  const e4 = crsE2 * crsE2;
  const e6 = e4 * crsE2;
  return crsA * (
    (1 - crsE2 / 4 - 3 * e4 / 64 - 5 * e6 / 256) * phi
    - (3 * crsE2 / 8 + 3 * e4 / 32 + 45 * e6 / 1024) * Math.sin(2 * phi)
    + (15 * e4 / 256 + 45 * e6 / 1024) * Math.sin(4 * phi)
    - (35 * e6 / 3072) * Math.sin(6 * phi)
  );
}
function forwardFaja5(latitude, longitude) {
  const phi = latitude * Math.PI / 180;
  const lambda = longitude * Math.PI / 180;
  const lambda0 = -60 * Math.PI / 180;
  const n = crsA / Math.sqrt(1 - crsE2 * Math.sin(phi) ** 2);
  const t = Math.tan(phi) ** 2;
  const c = crsEp2 * Math.cos(phi) ** 2;
  const aa = (lambda - lambda0) * Math.cos(phi);
  const easting = 5500000 + n * (
    aa + (1 - t + c) * aa ** 3 / 6
    + (5 - 18 * t + t ** 2 + 72 * c - 58 * crsEp2) * aa ** 5 / 120
  );
  const northing = crsMeridionalArc(phi) - crsMeridionalArc(-Math.PI / 2)
    + n * Math.tan(phi) * (
      aa ** 2 / 2
      + (5 - t + 9 * c + 4 * c ** 2) * aa ** 4 / 24
      + (61 - 58 * t + t ** 2 + 600 * c - 330 * crsEp2) * aa ** 6 / 720
    );
  return [easting, northing];
}
function inverseFaja5(easting, northing) {
  const m = crsMeridionalArc(-Math.PI / 2) + northing;
  const e1 = (1 - Math.sqrt(1 - crsE2)) / (1 + Math.sqrt(1 - crsE2));
  const mu = m / (crsA * (1 - crsE2 / 4 - 3 * crsE2 ** 2 / 64 - 5 * crsE2 ** 3 / 256));
  const j1 = 3 * e1 / 2 - 27 * e1 ** 3 / 32;
  const j2 = 21 * e1 ** 2 / 16 - 55 * e1 ** 4 / 32;
  const j3 = 151 * e1 ** 3 / 96;
  const j4 = 1097 * e1 ** 4 / 512;
  const phi1 = mu + j1 * Math.sin(2 * mu) + j2 * Math.sin(4 * mu)
    + j3 * Math.sin(6 * mu) + j4 * Math.sin(8 * mu);
  const n1 = crsA / Math.sqrt(1 - crsE2 * Math.sin(phi1) ** 2);
  const r1 = crsA * (1 - crsE2) / (1 - crsE2 * Math.sin(phi1) ** 2) ** 1.5;
  const t1 = Math.tan(phi1) ** 2;
  const c1 = crsEp2 * Math.cos(phi1) ** 2;
  const d = (easting - 5500000) / n1;
  const latitude = phi1 - (n1 * Math.tan(phi1) / r1) * (
    d ** 2 / 2
    - (5 + 3 * t1 + 10 * c1 - 4 * c1 ** 2 - 9 * crsEp2) * d ** 4 / 24
    + (61 + 90 * t1 + 298 * c1 + 45 * t1 ** 2 - 252 * crsEp2 - 3 * c1 ** 2) * d ** 6 / 720
  );
  const longitude = -60 * Math.PI / 180 + (
    d - (1 + 2 * t1 + c1) * d ** 3 / 6
    + (5 - 2 * c1 + 28 * t1 - 3 * c1 ** 2 + 8 * crsEp2 + 24 * t1 ** 2) * d ** 5 / 120
  ) / Math.cos(phi1);
  return [latitude * 180 / Math.PI, longitude * 180 / Math.PI];
}
const independentCrsReference = forwardFaja5(-31.215, -60.005);
assert.ok(Math.abs(independentCrsReference[0] - 5499523.55) < 0.01);
assert.ok(Math.abs(independentCrsReference[1] - 6547154.06) < 0.01);
const firstWatercourseCoordinate = [5618351.79, 6209937.59];
const firstWatercourseWgs84 = inverseFaja5(...firstWatercourseCoordinate);
assert.ok(Math.abs(firstWatercourseWgs84[0] - (-34.2489963047)) < 1e-7);
assert.ok(Math.abs(firstWatercourseWgs84[1] - (-58.7152043478)) < 1e-7);
const roundTripWatercourse = forwardFaja5(...firstWatercourseWgs84);
assert.ok(Math.abs(roundTripWatercourse[0] - firstWatercourseCoordinate[0]) < 0.01);
assert.ok(Math.abs(roundTripWatercourse[1] - firstWatercourseCoordinate[1]) < 0.01);


const participatoryBudget = territory.participatoryBudget2026;
assert.ok(participatoryBudget, "Falta el registro del Presupuesto Participativo 2026");
assert.equal(participatoryBudget.locality, "24 de Febrero");
assert.equal(participatoryBudget.status, "pendiente", "La discrepancia entre CONECTA y el plazo publicado debe quedar pendiente");
assert.equal(participatoryBudget.announcedVotingDeadline, "2026-09-25");
assert.equal(participatoryBudget.localityProjectCount, 14);
assert.equal(participatoryBudget.districtProjectCount, 219);
assert.equal(participatoryBudget.budgetPerLocality.value, 450000000);
assert.equal(participatoryBudget.institutionalFundCapPerLocality.value, 45000000);
assert.equal(participatoryBudget.voterPointsPerCategory, 100);
assert.equal(participatoryBudget.projects.length, 14);
assert.equal(new Set(participatoryBudget.projects.map(item => item.id)).size, 14);
assert.equal(participatoryBudget.projects.filter(item => item.category === "Infraestructura").length, 6);
assert.equal(participatoryBudget.projects.filter(item => item.category === "Espacio Público y Deportes").length, 2);
assert.equal(participatoryBudget.projects.filter(item => item.category === "Fortalecimiento Institucional").length, 6);
assert.ok(participatoryBudget.projects.every(item => item.costPoints > 0 && item.selectionStatus === "pendiente" && item.description));
assert.ok(participatoryBudget.projects.some(item => item.sourceArea === "Garín Centro"));
assert.ok(participatoryBudget.projects.some(item => item.sourceArea === "Presidente Perón"));
assert.match(participatoryBudget.statusNote, /votación abierta/i);
assert.match(participatoryBudget.statusNote, /25\/09\/2026/);
assert.match(participatoryBudget.statusNote, /no se presenta como convocatoria abierta/i);
assert.match(participatoryBudget.projectPointNote, /100 puntos por categoría/i);
assert.match(participatoryBudget.localityClassificationNote, /no se infiere equivalencia territorial/i);
assert.equal(participatoryBudget.sourcePublishedAt, null);
assert.equal(participatoryBudget.verification.checkedAt, "2026-11-24");
for (const url of [participatoryBudget.sourceUrl, participatoryBudget.votingPortalUrl, ...participatoryBudget.relatedSources.map(item => item.url)]) {
  assert.equal(new URL(url).protocol, "https:");
}
assert.match(profile, /participatoryBudget2026/);
assert.match(profile, /costPoints/);
assert.match(profile, /puntos de costo/);
assert.match(profile, /pendiente de conciliación/);

console.log("Escobar transparencia: fuentes, siete localidades, directorios, metadatos ambientales y preflight reproducible EPSG:22185 validados; integración geométrica completa sigue pendiente.");
