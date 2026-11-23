/* Deterministic, source-aware comparison for Federal Reports. */
(function(root,factory){
  const api=factory();
  if(typeof module==="object"&&module.exports)module.exports=api;
  if(root)root.MapaFederalProfileComparison=api;
})(typeof globalThis!=="undefined"?globalThis:this,function(){
  "use strict";
  const isIsoDate=value=>{
    if(typeof value!=="string"||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
    const parsed=new Date(value+"T00:00:00Z");
    return !Number.isNaN(parsed.getTime())&&parsed.toISOString().slice(0,10)===value;
  };
  function compareProfiles(first,second,metadata){
    if(!first||!second)throw new TypeError("Se requieren dos perfiles provinciales.");
    if(typeof first.province!=="string"||!first.province.trim()||typeof second.province!=="string"||!second.province.trim())throw new TypeError("Cada perfil debe identificar su jurisdicción.");
    if(first.province===second.province)throw new Error("La comparación requiere dos jurisdicciones diferentes.");
    if(!metadata||!["period","unit","publisher","published","sourceUrl"].every(key=>typeof metadata[key]==="string"&&metadata[key].trim()))throw new TypeError("Faltan metadatos de período, unidad o fuente.");
    if(!isIsoDate(metadata.published))throw new TypeError("La fecha de publicación debe ser ISO.");
    let source;
    try{source=new URL(metadata.sourceUrl);}catch(_){throw new TypeError("La fuente estadística no es una URL válida.");}
    if(source.protocol!=="https:"||!source.hostname)throw new TypeError("La fuente estadística debe usar HTTPS.");
    const verification=metadata.verification;
    if(!verification||verification.status!=="verified"||!isIsoDate(verification.checkedAt)||typeof verification.scope!=="string"||!verification.scope.trim())throw new Error("La comparación requiere una fuente verificada con fecha y alcance documentados.");
    if(verification.checkedAt<metadata.published)throw new Error("La fecha de verificación no puede preceder a la publicación de la fuente.");
    if(verification.checkedAt>new Date().toISOString().slice(0,10))throw new Error("La fecha de verificación no puede ser futura.");
    const fields=["exportsUsdMillions","yearOnYearPct","nationalSharePct"];
    for(const profile of [first,second]){
      for(const field of fields){
        if(typeof profile[field]!=="number"||!Number.isFinite(profile[field]))throw new TypeError("Indicador no numérico o no finito: "+field);
      }
      if(profile.exportsUsdMillions<0||profile.nationalSharePct<0||profile.nationalSharePct>100)throw new RangeError("Indicador fuera de su rango permitido.");
    }
    const pick=profile=>({province:profile.province,exportsUsdMillions:profile.exportsUsdMillions,yearOnYearPct:profile.yearOnYearPct,nationalSharePct:profile.nationalSharePct});
    const a=pick(first),b=pick(second);
    return {
      period:metadata.period,
      unit:metadata.unit,
      publisher:metadata.publisher,
      published:metadata.published,
      sourceUrl:source.toString(),
      verification:{status:verification.status,checkedAt:verification.checkedAt,scope:verification.scope},
      first:a,
      second:b,
      differences:{
        exportsUsdMillions:a.exportsUsdMillions-b.exportsUsdMillions,
        yearOnYearPct:a.yearOnYearPct-b.yearOnYearPct,
        nationalSharePct:a.nationalSharePct-b.nationalSharePct
      }
    };
  }
  function toExportTable(comparison){
    if(!comparison||!comparison.first||!comparison.second||!comparison.differences||!comparison.verification)throw new TypeError("No hay una comparación completa para exportar.");
    for(const key of ["period","unit","publisher","published","sourceUrl"]){
      if(typeof comparison[key]!=="string"||!comparison[key].trim())throw new TypeError("Falta la procedencia de la comparación: "+key);
    }
    if(!isIsoDate(comparison.published))throw new TypeError("La fecha de publicación debe ser ISO.");
    let source;
    try{source=new URL(comparison.sourceUrl);}catch(_){throw new TypeError("La fuente estadística no es una URL válida.");}
    if(source.protocol!=="https:"||!source.hostname)throw new TypeError("La fuente estadística debe usar HTTPS.");
    const verification=comparison.verification;
    if(verification.status!=="verified"||!isIsoDate(verification.checkedAt)||typeof verification.scope!=="string"||!verification.scope.trim())throw new Error("La exportación requiere una verificación fechada y con alcance documentado.");
    if(verification.checkedAt<comparison.published||verification.checkedAt>new Date().toISOString().slice(0,10))throw new Error("La fecha de verificación no es coherente con la publicación.");
    const metrics=[
      {label:"Exportaciones de bienes",field:"exportsUsdMillions",valueUnit:comparison.unit,differenceUnit:comparison.unit},
      {label:"Variación interanual",field:"yearOnYearPct",valueUnit:"%",differenceUnit:"puntos porcentuales"},
      {label:"Participación nacional",field:"nationalSharePct",valueUnit:"%",differenceUnit:"puntos porcentuales"}
    ];
    for(const metric of metrics){
      const a=comparison.first[metric.field],b=comparison.second[metric.field],difference=comparison.differences[metric.field];
      if(![a,b,difference].every(value=>typeof value==="number"&&Number.isFinite(value)))throw new TypeError("Indicador no numérico o no finito: "+metric.field);
      if(difference!==a-b)throw new Error("La diferencia exportada no coincide con los valores comparados: "+metric.field);
    }
    if(typeof comparison.first.province!=="string"||!comparison.first.province.trim()||typeof comparison.second.province!=="string"||!comparison.second.province.trim())throw new TypeError("La comparación debe identificar ambas jurisdicciones.");
    const headers=["Indicador","Jurisdicción A","Valor A","Jurisdicción B","Valor B","Diferencia (A - B)","Unidad de valores","Unidad de diferencia","Período","Fuente","Fecha de publicación","URL de fuente","Estado de verificación","Fecha de verificación","Alcance de verificación"];
    const rows=metrics.map(metric=>[
      metric.label,comparison.first.province,comparison.first[metric.field],comparison.second.province,comparison.second[metric.field],comparison.differences[metric.field],metric.valueUnit,metric.differenceUnit,comparison.period,comparison.publisher,comparison.published,source.toString(),verification.status,verification.checkedAt,verification.scope
    ]);
    return {headers,rows};
  }
  return {compareProfiles,toExportTable};
});
