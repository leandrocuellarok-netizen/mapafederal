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


const ecosan = economy.companyCases.find(entry => entry.name === "Ecosan");
assert.ok(ecosan, "Falta el caso empresarial de Ecosan en Loma Verde");
assert.equal(ecosan.locality, "Loma Verde");
assert.deepEqual(ecosan.localities, ["Loma Verde"]);
assert.equal(ecosan.status, "operativo", "La planta está documentada como inaugurada y visitada institucionalmente");
assert.equal(ecosan.evidenceDate, "2026-11-16");
assert.equal(ecosan.sourceName, "Municipalidad de Escobar");
assert.equal(ecosan.sourcePublishedAt, "2026-11-16");
assert.equal(new URL(ecosan.sourceUrl).protocol, "https:");
assert.equal(ecosan.verification.checkedAt, "2026-11-24");
assert.match(ecosan.verification.scope, /sin inspección presencial/i);
assert.match(ecosan.verification.scope, /no se interpreta como altas o vacantes/i);
assert.match(ecosan.description, /más de 180 personas/);
assert.match(ecosan.description, /no una auditoría de nómina/i);
assert.match(ecosan.description, /No se infieren vacantes/i);
assert.equal(ecosan.amount, undefined, "No inventar monto de inversión");
assert.equal(ecosan.jobCount, undefined, "No convertir la cifra publicada en una nómina auditada");
assert.equal(ecosan.vacancies, undefined, "No inferir vacantes");
assert.equal(ecosan.coords, undefined, "No inventar coordenadas de la planta");
const ecosanOfficial = ecosan.officialSources.find(source => source.sourceName === "ECOSAN S.A.");
assert.ok(ecosanOfficial, "Falta la fuente institucional de ECOSAN");
assert.equal(ecosanOfficial.sourcePublishedAt, "2026-08-25");
assert.match(ecosanOfficial.sourcePublicationNote, /ruta.*2026\/08\/25/i, "La fecha de la fuente corporativa debe quedar atribuida al permalink");
assert.equal(new URL(ecosanOfficial.url).protocol, "https:");
assert.match(ecosanOfficial.verification.scope, /no acredita por sí sola operación diaria/i);
const ecosanOpening = ecosan.relatedSources.find(source => source.sourceName === "LA NACION");
assert.ok(ecosanOpening, "Falta el antecedente de inauguración");
assert.equal(ecosanOpening.sourcePublishedAt, "2025-04-18");
assert.equal(new URL(ecosanOpening.url).protocol, "https:");

console.log("Escobar: casos Hönecker y Ecosan, fuentes y límites de verificación comprobados.");
