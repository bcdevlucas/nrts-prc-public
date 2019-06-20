//
// this is the data structure as returned by Tantalis
//
export class Feature {
  id: string;
  type: string;
  geometry: {
    type: string;
    geometries: [
      {
        type: string;
        coordinates: any;
      }
    ];
  };
  properties: {
    CODE_CHR_STAGE: string;
    CROWN_LANDS_FILE: string;
    DISPOSITION_TRANSACTION_SID: number;
    FEATURE_AREA_SQM: number;
    FEATURE_CODE: string;
    FEATURE_LENGTH_M: number;
    INTRID_SID: number;
    OBJECTID: number;
    RESPONSIBLE_BUSINESS_UNIT: string;
    SW_ANNO_CAD_DATA: any; // TODO: what type is this?
    TENURE_AREA_DERIVATION: string;
    TENURE_AREA_IN_HECTARES: number;
    TENURE_DOCUMENT: string;
    TENURE_EXPIRY: string; // TODO: convert to date?
    TENURE_LEGAL_DESCRIPTION: string;
    TENURE_LOCATION: string;
    TENURE_PURPOSE: string;
    TENURE_STAGE: string;
    TENURE_STATUS: string;
    TENURE_SUBPURPOSE: string;
    TENURE_SUBTYPE: string;
    TENURE_TYPE: string;
  };

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.type = (obj && obj.type) || null;
    this.geometry = (obj && obj.geometry) || null;
    this.properties = (obj && obj.properties) || null;
  }
}
