const assert=require("node:assert/strict");
const catalog=require("../data/investment-opportunities.json");
const source="https://boletinoficial.gba.gob.ar/secciones/14528/descargar";
const expected={
"opcg-licitacion-614-1241-lpu26-adquisicion-camiones":["provincial","Buenos Aires","unknown",null,null,2583295500.60],
"puerto-bahia-blanca-licitacion-11-cgpbb-2026-servicio-vigilancia-privada":["provincial","Buenos Aires","open","2026-11-25","2027-01-05",null],
"general-san-martin-licitacion-36-2026-material-descartable-suturas-textiles":["municipal","Partido de General San Martín, Provincia de Buenos Aires","open","2026-11-25","2026-12-09",1035667248.48],
"almirante-brown-licitacion-56-2026-luminarias-led-fotocelulas":["municipal","Partido de Almirante Brown, Provincia de Buenos Aires","open","2026-11-25","2026-12-11",680000000],
"almirante-brown-licitacion-57-2026-mezcla-asfaltica-caliente":["municipal","Partido de Almirante Brown, Provincia de Buenos Aires","open","2026-11-25","2026-12-11",550122576],
"avellaneda-licitacion-125-2026-guardapolvos-mochilas-zapatillas":["municipal","Partido de Avellaneda, Provincia de Buenos Aires","unknown",null,null,632781200],
"la-matanza-licitacion-129-2026-alquiler-ropa-lavado-planchado":["municipal","Partido de La Matanza, Provincia de Buenos Aires","unknown",null,null,155922000],
"banco-provincia-licitacion-ee-443-cc-mobiliario-tapizado-tandems-metalicos":["provincial","Buenos Aires","unknown",null,null,null],
"san-antonio-de-areco-licitacion-8-2026-venta-terrenos-duggan":["municipal","Partido de San Antonio de Areco, Provincia de Buenos Aires","open","2026-11-25","2026-12-22",null]
};
for(const [id,[scope,jurisdiction,status,from,until,amount]] of Object.entries(expected)){
 const x=catalog.opportunities.find(y=>y.id===id);assert.ok(x,"Falta "+id);assert.equal(x.recordType,"tender");assert.equal(x.scope,scope);assert.equal(x.jurisdiction,jurisdiction);assert.equal(x.opportunityStatus,status);assert.equal(x.validFrom,from);assert.equal(x.validUntil,until);assert.equal(x.sourceUrl,source);assert.equal(x.sourcePublishedAt,"2026-11-25");assert.equal(x.verification.status,"verified");assert.equal(x.verification.checkedAt,"2026-11-25");if(amount===null)assert.equal(x.amount,null);else assert.equal(x.amount.value,amount);assert.ok(x.sourceUrl.startsWith("https://"));
}
const port=catalog.opportunities.find(x=>x.id==="puerto-bahia-blanca-licitacion-11-cgpbb-2026-servicio-vigilancia-privada");assert.match(port.verification.scope,/portal público de licitaciones del Consorcio.*no se encontró allí el nuevo llamado/i);
const brown56=catalog.opportunities.find(x=>x.id==="almirante-brown-licitacion-56-2026-luminarias-led-fotocelulas");const brown57=catalog.opportunities.find(x=>x.id==="almirante-brown-licitacion-57-2026-mezcla-asfaltica-caliente");assert.match(brown56.period,/11\/12\/2026 a las 13:30.*14\/12\/2026 a las 10:00/i);assert.match(brown57.period,/11\/12\/2026 a las 13:30.*14\/12\/2026 a las 12:00/i);
const areco=catalog.opportunities.find(x=>x.id==="san-antonio-de-areco-licitacion-8-2026-venta-terrenos-duggan");assert.match(areco.period,/500 m².*48\.000\.000.*seis lotes.*42\.000\.000/i);assert.match(areco.verification.scope,/No se verificaron títulos, zonificación, servicios/i);
const banco=catalog.opportunities.find(x=>x.id==="banco-provincia-licitacion-ee-443-cc-mobiliario-tapizado-tandems-metalicos");assert.equal(banco.relatedSources[0].url,"https://www.bancoprovincia.com.ar/transparencia/pages/");assert.match(banco.verification.scope,/pantalla general de acceso.*no la ficha individual/i);
console.log("BOPBA 30368: nueve oportunidades nuevas, estados conservadores, importes y cronogramas comprobados.");
