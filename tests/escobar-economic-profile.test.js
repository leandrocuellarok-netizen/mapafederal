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
assert.match(ecosan.verification.scope, /ni se interpreta como altas o vacantes/i);
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


const portProfile = economy.infrastructureProjects.find(entry => entry.id === "nuevo-puerto-multiproposito");
assert.ok(portProfile, "Falta el proyecto portuario de Escobar");
assert.equal(portProfile.status, "anunciado", "El puerto no debe figurar como operativo");
assert.equal(portProfile.verification.checkedAt, "2026-11-24");
const opportunities = JSON.parse(fs.readFileSync("data/investment-opportunities.json", "utf8")).opportunities;
const portOpportunity = opportunities.find(entry => entry.id === "escobar-puertos-tme-prefactibilidad-2026");
assert.ok(portOpportunity, "Falta el registro del proyecto portuario en Investment Finder");
assert.equal(portOpportunity.stage, "feasibility");
assert.equal(portOpportunity.stageLabel, "Prefactibilidad ambiental");
assert.equal(portOpportunity.opportunityStatus, "unknown", "No ofrecer participación a terceros sin confirmación");
const expectedParticipation = [
  { label: "Puerto Multipropósito Escobar", start: "2025-11-10", end: "2025-12-10" },
  { label: "Puerto Cerealero Escobar", start: "2025-10-30", end: "2025-11-29" }
];
for (const [index, expected] of expectedParticipation.entries()) {
  const source = portProfile.relatedSources[index];
  const finderSource = portOpportunity.relatedSources[index];
  for (const record of [source, finderSource]) {
    assert.equal(record.sourceName, "Ministerio de Ambiente de la Provincia de Buenos Aires");
    assert.equal(record.sourcePublishedAt, null, "No convertir el inicio de participación pública en fecha de publicación");
    assert.match(record.sourcePublicationNote, /no consigna una fecha de publicación/i);
    assert.deepEqual(record.participationPeriod, { start: expected.start, end: expected.end });
    assert.equal(record.status, "pendiente", "El expediente continúa en prefactibilidad");
    assert.equal(record.verification.status, "verified");
    assert.equal(record.verification.checkedAt, "2026-11-24");
    assert.match(record.verification.scope, /anteproyecto en prefactibilidad/i);
    assert.match(record.verification.scope, /no acredita DIA/i);
    assert.equal(new URL(record.url).protocol, "https:");
  }
  assert.match(source.label, new RegExp(expected.label.replace(/[.*+?^${}()|[\]\\]/g, "\\console.log("Escobar: casos Hönecker y Ecosan, fuentes y límites de verificación comprobados.");")));
}
const profileRenderer = fs.readFileSync("assets/escobar-profile.js", "utf8");
assert.match(profileRenderer, /source\.participationPeriod/);
assert.match(profileRenderer, /source\.verification\.checkedAt/);
const finderRenderer = fs.readFileSync("investment-finder/index.html", "utf8");
assert.match(finderRenderer, /opportunity\.stageLabel\|\|investmentStageLabel/);
assert.match(finderRenderer, /relatedSourcesHtml/);
assert.match(finderRenderer, /source\.participationPeriod/);

console.log("Escobar: empresas, proyecto portuario, expedientes ambientales, períodos de participación y etiquetas de prefactibilidad comprobados.");
