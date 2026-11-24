const assert = require("node:assert/strict");
const fs = require("node:fs");

const economy = JSON.parse(fs.readFileSync("data/escobar-economic-profile.json", "utf8"));
const item = economy.companyCases.find(entry => entry.name === "Hönecker Chocolates");

assert.ok(item, "Falta el caso empresarial de Hönecker");
assert.equal(item.status, "histórico", "El hecho debe conservar su fecha documental");
assert.equal(item.currentStatus, "no verificado", "No se debe afirmar el estado operativo actual");
assert.deepEqual(item.localities, ["Garín", "Ingeniero Maschwitz", "Belén de Escobar"]);
assert.equal(item.evidenceDate, "2026-11-18");
assert.equal(item.sourceName, "El Día de Escobar");
assert.equal(item.sourcePublishedAt, "2026-11-18");
assert.equal(new URL(item.sourceUrl).protocol, "https:");
assert.equal(item.verification.checkedAt, "2026-11-24");
assert.match(item.verification.scope, /no constituye auditoría/i);
assert.match(item.verification.scope, /no se infieren despidos/i);
assert.match(item.validityPeriod, /no constituye un monitoreo/i);

const official = item.officialSources.find(source => source.sourceName === "Hönecker Chocolates");
assert.ok(official, "Falta el canal online de la empresa");
assert.equal(official.sourcePublishedAt, null, "No inventar fecha de publicación del catálogo");
assert.equal(official.verification.checkedAt, "2026-11-24");
assert.match(official.verification.scope, /no acredita operación de plantas/i);
assert.equal(new URL(official.url).protocol, "https:");

assert.equal(item.relatedSources.length, 2);
for (const source of item.relatedSources) {
  assert.ok(source.sourceName && source.sourcePublishedAt && source.verification.scope);
  assert.equal(new URL(source.url).protocol, "https:");
}
assert.equal(item.amount, undefined, "No atribuir inversión no publicada");
assert.equal(item.jobCount, undefined, "No inferir puestos o despidos");
assert.equal(item.coords, undefined, "No inventar coordenadas empresariales");

console.log("Escobar: caso Hönecker, fuentes periodísticas, canal online y límites de verificación comprobados.");
