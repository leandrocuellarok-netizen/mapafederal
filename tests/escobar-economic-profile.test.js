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
  assert.ok(source.label.includes(expected.label), "El enlace ambiental debe identificar el expediente esperado");
}
const profileRenderer = fs.readFileSync("assets/foco-escobar.js", "utf8");
assert.match(profileRenderer, /source\.participationPeriod/);
assert.match(profileRenderer, /source\.verification\.checkedAt/);
const finderRenderer = fs.readFileSync("investment-finder/index.html", "utf8");
assert.match(finderRenderer, /opportunity\.stageLabel\|\|investmentStageLabel/);
assert.match(finderRenderer, /relatedSourcesHtml/);
assert.match(finderRenderer, /source\.participationPeriod/);


const market = economy.commercialPrograms.find(entry => entry.id === "mercado-popular-escobar");
assert.ok(market, "Falta el Mercado Popular de Escobar");
assert.equal(market.status, "pendiente");
assert.equal(market.publicationStatus, "Publicado en el directorio municipal");
assert.equal(market.operationalStatus, "no verificado");
assert.equal(market.sourcePublishedAt, null, "No inventar fecha de publicación del directorio");
assert.equal(market.verification.status, "verified");
assert.equal(market.verification.checkedAt, "2026-11-24");
assert.equal(market.schedule.length, 15);
assert.deepEqual(market.localityCoverage, ["Belén de Escobar", "Garín", "Ingeniero Maschwitz", "Maquinista Savio", "Matheu", "Loma Verde", "24 de Febrero"]);
for (const entry of market.schedule) {
  assert.ok(market.localityCoverage.includes(entry.locality));
  assert.ok(entry.day && entry.location && entry.hours);
  assert.equal(new URL(market.sourceUrl).protocol, "https:");
}
const market24 = market.schedule.find(entry => entry.locality === "24 de Febrero");
assert.ok(market24, "Falta el recorrido publicado para 24 de Febrero");
assert.equal(market24.day, "Martes");
assert.equal(market24.location, "Pablo Marín e Islas Malvinas");
assert.equal(market24.hours, "09:00–14:00");
assert.match(market.sourcePublicationNote, /no indica fecha de publicación/i);
assert.match(market.validityPeriod, /confirmar antes de concurrir/i);
assert.match(market.verification.scope, /no se realizó verificación presencial/i);
assert.equal(market.coords, undefined, "No inventar coordenadas de las paradas itinerantes");
const marketRenderer = fs.readFileSync("assets/foco-escobar.js", "utf8");
assert.match(marketRenderer, /economy\.commercialPrograms/);
assert.match(marketRenderer, /Ver cronograma municipal por localidad/);

const bess = opportunities.find(entry => entry.id === "bess-maschwitz-genneia-edenor-2026");
assert.ok(bess, "Falta el registro del proyecto BESS Maschwitz");
assert.equal(bess.scope, "provincial", "La discrepancia parcelaria impide asignarlo a un municipio");
assert.equal(bess.stage, "preparation");
assert.equal(bess.opportunityStatus, "unknown");
assert.equal(bess.amount, null, "No inventar inversión");
assert.equal(bess.coords, undefined, "No georreferenciar mientras la localización parcelaria siga en contradicción");
assert.match(bess.location, /localización parcelaria permanece en contradicción documental/i);
assert.match(bess.location, /referencia municipal: calle Brasil.*La Pista.*Ruta 26/i);
assert.match(bess.description, /corredor de calle Brasil entre La Pista y la Ruta 26/i);
assert.match(bess.verification.scope, /referencia territorial atribuida a la Municipalidad/i);
assert.match(bess.description, /clasifica el expediente como Partido de Escobar/i);
assert.match(bess.description, /no se interpreta como aprobación ni como ausencia de observaciones/i);
assert.match(bess.verification.scope, /PDF adjunto de ese registro 2026 devolvió timeout/i);
const bessPba = bess.relatedSources.find(source => source.sourceName === "Ministerio de Ambiente de la Provincia de Buenos Aires" && source.url.includes("/participacion/resumen/"));
assert.ok(bessPba, "Falta el expediente provincial de participación pública");
assert.equal(bessPba.sourcePublishedAt, null, "No inventar fecha de publicación de la ficha");
assert.deepEqual(bessPba.participationPeriod, { start: "2026-07-21", end: "2026-08-11" });
assert.equal(bessPba.status, "pendiente", "La participación pública no equivale a una DIA");
assert.equal(bessPba.verification.status, "verified");
assert.equal(bessPba.verification.checkedAt, "2026-11-24");
assert.match(bessPba.verification.scope, /clasifica el expediente.*Partido de Escobar/i);
assert.match(bessPba.verification.scope, /no resuelve la contradicción/i);
assert.equal(new URL(bessPba.url).protocol, "https:");

console.log("Escobar: empresas, proyecto portuario, expedientes ambientales, períodos de participación y etiquetas de prefactibilidad comprobados.");


assert.match(bess.description, /Mapa 9 topográfico.*Ingeniero Maschwitz.*Partido de Escobar/i);
assert.match(bess.verification.scope, /contradicción interna/i);
assert.equal(bess.verification.checkedAt, "2026-11-25");
const bessEias = bess.relatedSources.find(source => source.url.includes("/adjunto/viewpdf/"));
assert.ok(bessEias, "Falta el EIAS completo de BESS Maschwitz");
assert.equal(bessEias.sourcePublishedAt, "2025-09-16");
assert.equal(bessEias.verification.status, "verified");
assert.equal(bessEias.verification.checkedAt, "2026-11-25");
assert.match(bessEias.verification.scope, /Mapa 9.*Partido de Escobar/i);
assert.match(bessEias.verification.scope, /Parcela 279a.*Tigre/i);
assert.equal(new URL(bessEias.url).protocol, "https:");

const radarNews = JSON.parse(fs.readFileSync("data/news.json", "utf8"));
const bisRule = radarNews.find(entry => entry.id === "news-public-inspection-federalregister-gov-2026-23999-pdf");
assert.ok(bisRule, "Falta la regla BIS 2026-23999");
assert.equal(bisRule.date, "2026-11-23");
assert.equal(bisRule.category, "Regulación");
assert.equal(bisRule.verification.status, "editorial_reviewed");
assert.equal(bisRule.verification.checkedAt, "2026-11-25");
assert.deepEqual(bisRule.jurisdictions, []);
assert.equal(bisRule.geographyStatus, "not_specified");
assert.match(bisRule.verification.scope, /siete entidades/i);
assert.match(bisRule.verification.scope, /ni se fija una fecha efectiva exacta/i);
assert.equal(new URL(bisRule.url).protocol, "https:");

const nestleAi = radarNews.find(entry => entry.id === "news-www-nestle-com-media-news-deep-tech-center-orbe-ai-robotics");
assert.ok(nestleAi, "Falta el centro Deep Tech de Nestlé");
assert.equal(nestleAi.date, "2026-11-20");
assert.equal(nestleAi.source, "Nestlé Global");
assert.equal(nestleAi.verification.status, "editorial_reviewed");
assert.deepEqual(nestleAi.jurisdictions, []);
assert.equal(nestleAi.geographyStatus, "not_specified");
assert.match(nestleAi.verification.scope, /pruebas piloto/i);
assert.equal(new URL(nestleAi.url).protocol, "https:");

const escobarNotice = radarNews.find(entry => entry.id === "news-boletinoficial-gba-gob-ar-secciones-14526-ver");
assert.ok(escobarNotice, "Falta el aviso oficial de transferencia comercial en Belén de Escobar");
assert.equal(escobarNotice.date, "2026-11-24");
assert.equal(escobarNotice.category, "Comercio");
assert.equal(escobarNotice.source, "Boletín Oficial de la Provincia de Buenos Aires");
assert.equal(escobarNotice.url, "https://boletinoficial.gba.gob.ar/secciones/14526/ver");
assert.deepEqual(escobarNotice.jurisdictions, ["Buenos Aires"]);
assert.equal(escobarNotice.geographyStatus, "explicit");
assert.match(escobarNotice.geographyEvidence[0], /Las Orquideas1643, Belén de Escobar/);
assert.equal(escobarNotice.verification.status, "editorial_reviewed");
assert.equal(escobarNotice.verification.checkedAt, "2026-11-25");
assert.match(escobarNotice.summary, /no acredita que la transferencia se haya completado/i);
assert.match(escobarNotice.verification.scope, /se omiten nombres, DNI y CUIT de particulares/i);
assert.doesNotMatch(JSON.stringify(escobarNotice), /\b(?:DNI|CUIT)\s*[:#]?\s*\d/i);
assert.doesNotMatch(JSON.stringify(escobarNotice), /hernandez|chapapi/i);
assert.equal(new URL(escobarNotice.url).protocol, "https:");

const redSostenible = opportunities.find(entry => entry.id === "escobar-red-sostenible-desarrollo-2026");
assert.ok(redSostenible, "Falta la convocatoria municipal Red Sostenible para el Desarrollo");
assert.equal(redSostenible.recordType, "public_program");
assert.equal(redSostenible.scope, "municipal");
assert.equal(redSostenible.stage, "announced");
assert.equal(redSostenible.opportunityStatus, "open");
assert.equal(redSostenible.validUntil, "2026-12-30");
assert.equal(redSostenible.amount, null, "La convocatoria no anuncia financiamiento monetario");
assert.equal(redSostenible.verification.status, "verified");
assert.equal(redSostenible.verification.checkedAt, "2026-11-25");
assert.match(redSostenible.verification.scope, /Escobar 360°/);
assert.match(redSostenible.verification.scope, /no permite verificar un formulario o trámite de inscripción/i);
assert.equal(new URL(redSostenible.sourceUrl).protocol, "https:");
