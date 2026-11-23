/* Traceable CSV export for the currently filtered Investment Finder records. */
(function(root,factory){
  const api=factory();
  if(typeof module==="object"&&module.exports)module.exports=api;
  if(root)root.MapaFederalInvestmentExport=api;
})(typeof globalThis!=="undefined"?globalThis:this,function(){
  "use strict";
  const today=()=>new Date().toISOString().slice(0,10);
  function isIsoDate(value){
    if(typeof value!=="string"||!/^\\d{4}-\\d{2}-\\d{2}$/.test(value))return false;
    const parsed=new Date(value+"T00:00:00Z");
    return !Number.isNaN(parsed.getTime())&&parsed.toISOString().slice(0,10)===value;
  }
  const opportunityLabels={
    open:"Abierta según fuente",
    closed:"Cerrada",
    suspended:"Suspendida",
    unknown:"Disponibilidad no confirmada"
  };
  const verificationLabels={
    verified:"Verificada",
    not_verified:"No verificada",
    outdated:"Desactualizada"
  };
  function toExportTable(records,catalog){
    if(!Array.isArray(records))throw new TypeError("Los registros filtrados deben ser una lista.");
    if(!catalog||!isIsoDate(catalog.updatedAt)||catalog.updatedAt>today())throw new TypeError("La fecha de actualización del catálogo no es válida.");
    const headers=[
      "ID","Nombre","Tipo de registro","Alcance","Sector","Jurisdicción","Ubicación",
      "Etapa","Estado de oportunidad (código)","Estado de oportunidad",
      "Monto publicado","Moneda","Base del monto","Vigencia desde","Vigencia hasta",
      "Fuente","Fecha de publicación de la fuente","URL de la fuente","Período",
      "Estado de verificación (código)","Estado de verificación","Fecha de verificación",
      "Alcance de verificación","Descripción","Fecha de actualización del catálogo"
    ];
    const rows=records.map((item,index)=>{
      if(!item||typeof item!=="object")throw new TypeError("Registro inválido en la posición "+index+".");
      for(const field of ["id","name","recordType","scope","sector","stage","opportunityStatus","sourceName","sourceUrl","sourcePublishedAt","period","description"]){
        if(typeof item[field]!=="string"||!item[field].trim())throw new TypeError("Falta "+field+" en el registro "+(item.id||index)+".");
      }
      if(!["project","public_program","tender","incentive"].includes(item.recordType))throw new TypeError("Tipo de registro no admitido: "+item.id);
      if(!["national","provincial"].includes(item.scope))throw new TypeError("Alcance no admitido: "+item.id);
      if(!Object.prototype.hasOwnProperty.call(opportunityLabels,item.opportunityStatus))throw new TypeError("Estado de oportunidad no admitido: "+item.id);
      if(!isIsoDate(item.sourcePublishedAt)||item.sourcePublishedAt>today())throw new TypeError("Fecha de publicación inválida: "+item.id);
      let source;
      try{source=new URL(item.sourceUrl);}catch(_){throw new TypeError("URL de fuente inválida: "+item.id);}
      if(source.protocol!=="https:"||!source.hostname||source.username||source.password)throw new TypeError("La fuente debe usar HTTPS y no incluir credenciales: "+item.id);
      if(item.scope==="national"&&item.jurisdiction!==null)throw new TypeError("Un registro nacional no debe asignarse a una jurisdicción: "+item.id);
      if(item.scope==="provincial"&&(typeof item.jurisdiction!=="string"||!item.jurisdiction.trim()))throw new TypeError("Falta la jurisdicción provincial: "+item.id);
      for(const field of ["validFrom","validUntil"]){
        if(item[field]!==null&&item[field]!==undefined&&(!isIsoDate(item[field])||item[field]>today()&&field==="validFrom"))throw new TypeError("Fecha de vigencia inválida ("+field+"): "+item.id);
      }
      const verification=item.verification;
      if(!verification||!Object.prototype.hasOwnProperty.call(verificationLabels,verification.status)||typeof verification.scope!=="string"||!verification.scope.trim())throw new TypeError("Verificación incompleta: "+item.id);
      if(verification.status==="verified"&&!isIsoDate(verification.checkedAt))throw new TypeError("Falta fecha de verificación: "+item.id);
      if(verification.checkedAt!==null&&verification.checkedAt!==undefined){
        if(!isIsoDate(verification.checkedAt)||verification.checkedAt<item.sourcePublishedAt||verification.checkedAt>today())throw new TypeError("Fecha de verificación incoherente: "+item.id);
      }
      const amount=item.amount;
      if(amount!==null&&amount!==undefined){
        if(typeof amount!=="object"||typeof amount.value!=="number"||!Number.isFinite(amount.value)||amount.value<0||typeof amount.currency!=="string"||typeof amount.basis!=="string"||!amount.basis.trim())throw new TypeError("Monto publicado inválido: "+item.id);
      }
      return [
        item.id,item.name,item.recordType,item.scope,item.sector,
        item.scope==="national"?"Nacional":item.jurisdiction,item.location||"",
        item.stage,item.opportunityStatus,opportunityLabels[item.opportunityStatus],
        amount?amount.value:"",amount?amount.currency:"",amount?amount.basis:"",
        item.validFrom||"",item.validUntil||"",item.sourceName,item.sourcePublishedAt,
        source.toString(),item.period,verification.status,verificationLabels[verification.status],
        verification.checkedAt||"",verification.scope,item.description,catalog.updatedAt
      ];
    });
    return {headers,rows};
  }
  return {toExportTable};
});
