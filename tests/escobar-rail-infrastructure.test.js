const assert = require("node:assert/strict");
const fs = require("node:fs");

const territory = JSON.parse(fs.readFileSync("data/escobar-territory.json", "utf8"));
const rail = territory.mobilityDirectory.railInfrastructure;
assert.ok(rail, "Falta el directorio geográfico de estaciones ferroviarias");
assert.equal(rail.status, "pendiente");
assert.equal(rail.operationalStatus, "no verificado");
assert.equal(rail.sourceOrganization, "No disponible en la ficha del dataset");
assert.equal(rail.sourceCrs, "EPSG:22185 — POSGAR 94 / Argentina 5");
assert.equal(rail.coordinateCrs, "EPSG:4326 — WGS 84");
assert.equal(rail.lastUpdatedAt, "2026-03-31");
assert.equal(rail.license, "Open Data Commons Open Database License (ODbL)");
assert.equal(rail.verification.checkedAt, "2026-11-24");
assert.match(rail.verification.scope, /cinco entidades puntuales/i);
assert.match(rail.verification.scope, /No hubo comprobación presencial/i);

const expected = {
  "Belén de Escobar": [-34.3496035, -58.7951081],
  "Ingeniero Maschwitz": [-34.3829731, -58.7363527],
  "Garín": [-34.4214475, -58.7366306],
  "Maquinista Savio": [-34.4063030, -58.7735311],
  "Matheu": [-34.3828759, -58.8294423]
};
assert.equal(rail.stations.length, 5);
assert.deepEqual(new Set(rail.stations.map(item => item.locality)), new Set(Object.keys(expected)));
for (const station of rail.stations) {
  assert.deepEqual(station.coords, expected[station.locality], "Coordenada transformada inesperada: " + station.locality);
  assert.ok(station.id && station.stationName && station.mapNodeName);
  assert.equal(new URL(rail.sourceUrl).protocol, "https:");
  assert.equal(new URL(rail.resourceUrl).protocol, "https:");
}

const nodes = JSON.parse(fs.readFileSync("data/strategic-nodes.json", "utf8"));
const railNodes = nodes.filter(item => item.district === "Partido de Escobar" && item.type === "Estación ferroviaria");
assert.equal(railNodes.length, 5, "El mapa debe contener cinco puntos ferroviarios");
for (const station of rail.stations) {
  const node = railNodes.find(item => item.sourceRecordId === station.id);
  assert.ok(node, "Falta el punto cartográfico de " + station.locality);
  assert.equal(node.name, station.mapNodeName);
  assert.equal(node.locality, station.locality);
  assert.deepEqual(node.coords, station.coords);
  assert.equal(node.status, "pendiente");
  assert.match(node.note, /no confirma servicio de pasajeros/i);
  assert.equal(node.source, rail.sourceUrl);
  assert.equal(node.coordinateSource, rail.resourceUrl);
}

const profile = fs.readFileSync("assets/foco-escobar.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");
assert.match(profile, /mobility\.railInfrastructure/);
assert.match(profile, /railInfrastructureHtml/);
assert.match(html, /data-type="Estación ferroviaria"/);
assert.match(html, /"Estación ferroviaria":"#547FA5"/);

console.log("Escobar ferrocarril: cinco puntos municipales georreferenciados, CRS transformado, estado operativo no verificado y capa cartográfica comprobados.");
