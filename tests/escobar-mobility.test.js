const assert = require("node:assert/strict");
const fs = require("node:fs");

const territory = JSON.parse(fs.readFileSync("data/escobar-territory.json", "utf8"));
const mobility = territory.mobilityDirectory;
assert.ok(mobility, "Falta el directorio de movilidad");
assert.equal(mobility.stops.length, 15, "Debe conservar las 15 paradas QR municipales");
assert.equal(mobility.railService.stations.length, 3, "Debe conservar las tres estaciones del ramal");

const stopLocalities = [...new Set(mobility.stops.map(item => item.locality))];
const railLocalities = [...new Set(mobility.railService.stations.map(item => item.locality))];
const sharedLocalities = railLocalities.filter(locality => stopLocalities.includes(locality));
assert.deepEqual(sharedLocalities, ["Garín", "Maquinista Savio", "Matheu"]);

const assessment = mobility.intermodalAssessment;
assert.equal(assessment.status, "pendiente");
assert.deepEqual(assessment.sharedLocalities, sharedLocalities);
assert.equal(assessment.sourceUrl, mobility.openDataDataset.sourceUrl);
assert.equal(assessment.relatedSourceUrl, mobility.railService.timetableUrl);
assert.equal(assessment.verification.checkedAt, "2026-11-23");
assert.match(assessment.verification.scope, /no se calcularon distancias, rutas ni tiempos/i);
assert.match(assessment.summary, /no demuestra proximidad/i);
for (const url of [assessment.sourceUrl, assessment.relatedSourceUrl]) {
  assert.equal(new URL(url).protocol, "https:");
}

const bridge = mobility.interlocalConnections.find(item => item.id === "puente-peatonal-garin-maquinista-savio");
assert.ok(bridge, "Falta la conexión peatonal documentada");
assert.equal(bridge.sourcePublishedAt, "2024-10-23");
assert.equal(bridge.fromLocality, "Maquinista Savio");
assert.equal(bridge.fromNeighborhood, "Nuevo Obejero");
assert.equal(bridge.toLocality, "Garín");
assert.equal(bridge.toNeighborhood, "Cri Cri");
assert.equal(bridge.status, "pendiente");
assert.equal(bridge.operationalStatus, "no verificado");
assert.equal(bridge.verification.checkedAt, "2026-11-23");
assert.match(bridge.verification.scope, /No se realizó comprobación presencial/i);
assert.equal(new URL(bridge.sourceUrl).protocol, "https:");

const announcedRoutes = mobility.announcedRoutes;
assert.ok(Array.isArray(announcedRoutes), "Falta el registro de ramales anunciados");
assert.equal(announcedRoutes.length, 2, "Deben registrarse los dos ramales anunciados en noviembre de 2026");

const route503 = announcedRoutes.find(item => item.id === "linea-503-ramal-h-escobar-matheu-2026");
assert.ok(route503, "Falta la línea 503, ramal H");
assert.equal(route503.line, "503");
assert.equal(route503.branch, "H");
assert.equal(route503.operator, "Línea Sesenta S.A.");
assert.deepEqual(route503.localities, ["Belén de Escobar", "Matheu"]);
assert.equal(route503.sourcePublishedAt, "2026-11-03");
assert.equal(route503.status, "anunciado");
assert.equal(route503.operationalStatus, "no verificado");
assert.ok(route503.routeOutbound.includes("Estación ferroviaria de Matheu"));
assert.ok(route503.routeReturn.includes("Terminal de colectivos de Belén de Escobar"));
assert.match(route503.verification.scope, /sin fecha exacta/i);
assert.match(route503.verification.scope, /no se encontró confirmación municipal o del operador/i);
assert.equal(new URL(route503.sourceUrl).protocol, "https:");
assert.equal(route503.schedule, undefined, "No se deben inventar horarios");

const route506 = announcedRoutes.find(item => item.id === "linea-506-ramal-b-escobar-loma-verde-2026");
assert.ok(route506, "Falta la línea 506, ramal B");
assert.equal(route506.line, "506");
assert.equal(route506.branch, "B");
assert.equal(route506.operator, "Micro Ómnibus Tigre S.A. (M.O.T.S.A.)");
assert.deepEqual(route506.localities, ["Belén de Escobar", "Loma Verde"]);
assert.equal(route506.sourcePublishedAt, "2026-11-03");
assert.equal(route506.status, "anunciado");
assert.equal(route506.operationalStatus, "no verificado");
assert.ok(route506.destination.includes("Mercado Libre"));
assert.ok(route506.routeOutbound.includes("Km 59 de Panamericana"));
assert.ok(route506.routeReturn.includes("Puente Loma Verde"));
assert.match(route506.verification.scope, /no se localizó una confirmación posterior del Municipio o de M\.O\.T\.S\.A\./i);
assert.equal(route506.schedule, undefined, "No se deben importar horarios de fuentes secundarias como oficiales");
assert.equal(route506.secondaryReports.length, 1);
assert.equal(route506.secondaryReports[0].sourceName, "El Diario de Escobar");
assert.equal(route506.secondaryReports[0].sourcePublishedAt, "2026-11-18");
assert.match(route506.secondaryReports[0].claim, /no sustituye una confirmación/i);
for (const url of [route506.sourceUrl, ...route506.secondaryReports.map(item => item.sourceUrl)]) {
  assert.equal(new URL(url).protocol, "https:");
}

const profile = fs.readFileSync("assets/escobar-profile.js", "utf8");
assert.match(profile, /mobility\.interlocalConnections/);
assert.match(profile, /mobility\.intermodalAssessment/);
assert.match(profile, /connectionsHtml\+intermodalHtml/);

console.log("Escobar movilidad: 15 paradas, 3 estaciones, 3 coincidencias sin inferir transbordos, 1 puente con estado actual no verificado y 2 ramales anunciados sin confirmar como operativos.");
