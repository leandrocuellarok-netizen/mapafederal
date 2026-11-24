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

const profile = fs.readFileSync("assets/escobar-profile.js", "utf8");
assert.match(profile, /mobility\.interlocalConnections/);
assert.match(profile, /mobility\.intermodalAssessment/);
assert.match(profile, /connectionsHtml\+intermodalHtml/);

console.log("Escobar movilidad: 15 paradas, 3 estaciones, 3 coincidencias territoriales sin inferir transbordos y 1 conexión peatonal con estado actual no verificado.");
