export interface CountryI {
  name: Name;
  cca3: string;
  capital?: string[];
  region: Region;
  subregion?: string;
  population: number;
  flags: Flags;
  borders:string[];
  languages?:   { [key: string]: string };
  currencies?:  Currencies;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  All = "Filter by Region",
}
export interface BAM {
  name: string;
}

export interface Currencies {
  SAR?: TartuGecko;
  XAF?: TartuGecko;
  IRR?: TartuGecko;
  AED?: TartuGecko;
  UAH?: TartuGecko;
  XOF?: TartuGecko;
  XCD?: TartuGecko;
  USD?: TartuGecko;
  IDR?: TartuGecko;
  BND?: TartuGecko;
  SGD?: TartuGecko;
  CZK?: TartuGecko;
  RSD?: TartuGecko;
  PGK?: TartuGecko;
  AUD?: TartuGecko;
  BMD?: TartuGecko;
  VES?: TartuGecko;
  EUR?: TartuGecko;
  RON?: TartuGecko;
  TVD?: TartuGecko;
  EGP?: TartuGecko;
  ILS?: TartuGecko;
  JOD?: TartuGecko;
  CNY?: TartuGecko;
  LKR?: TartuGecko;
  ZAR?: TartuGecko;
  GBP?: TartuGecko;
  GGP?: TartuGecko;
  TZS?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  NZD?: TartuGecko;
  MYR?: TartuGecko;
  INR?: TartuGecko;
  GIP?: TartuGecko;
  SDG?: BAM;
  XPF?: TartuGecko;
  NPR?: TartuGecko;
  UZS?: TartuGecko;
  FJD?: TartuGecko;
  MUR?: TartuGecko;
  KID?: TartuGecko;
  PHP?: TartuGecko;
  NOK?: TartuGecko;
  MZN?: TartuGecko;
  SRD?: TartuGecko;
  SYP?: TartuGecko;
  LSL?: TartuGecko;
  CVE?: TartuGecko;
  MRU?: TartuGecko;
  SLL?: TartuGecko;
  THB?: TartuGecko;
  IQD?: TartuGecko;
  NGN?: TartuGecko;
  RWF?: TartuGecko;
  LYD?: TartuGecko;
  PYG?: TartuGecko;
  BSD?: TartuGecko;
  SHP?: TartuGecko;
  SBD?: TartuGecko;
  KMF?: TartuGecko;
  GHS?: TartuGecko;
  SEK?: TartuGecko;
  BRL?: TartuGecko;
  NAD?: TartuGecko;
  TOP?: TartuGecko;
  PKR?: TartuGecko;
  IMP?: TartuGecko;
  BOB?: TartuGecko;
  KGS?: TartuGecko;
  HNL?: TartuGecko;
  HKD?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  OMR?: TartuGecko;
  BHD?: TartuGecko;
  UYU?: TartuGecko;
  YER?: TartuGecko;
  KHR?: TartuGecko;
  MAD?: TartuGecko;
  BWP?: TartuGecko;
  ZMW?: TartuGecko;
  AMD?: TartuGecko;
  TTD?: TartuGecko;
  DZD?: TartuGecko;
  BZD?: TartuGecko;
  TWD?: TartuGecko;
  TND?: TartuGecko;
  HTG?: TartuGecko;
  ANG?: TartuGecko;
  CHF?: TartuGecko;
  DOP?: TartuGecko;
  CAD?: TartuGecko;
  AOA?: TartuGecko;
  TJS?: TartuGecko;
  SZL?: TartuGecko;
  SOS?: TartuGecko;
  GYD?: TartuGecko;
  MVR?: TartuGecko;
  SCR?: TartuGecko;
  AWG?: TartuGecko;
  MGA?: TartuGecko;
  ZWL?: TartuGecko;
  KRW?: TartuGecko;
  ERN?: TartuGecko;
  JMD?: TartuGecko;
  UGX?: TartuGecko;
  KYD?: TartuGecko;
  MNT?: TartuGecko;
  GNF?: TartuGecko;
  MKD?: TartuGecko;
  BTN?: TartuGecko;
  PEN?: TartuGecko;
  KZT?: TartuGecko;
  LRD?: TartuGecko;
  QAR?: TartuGecko;
  ARS?: TartuGecko;
  FKP?: TartuGecko;
  PAB?: TartuGecko;
  BAM?: BAM;
  AFN?: TartuGecko;
  ISK?: TartuGecko;
  BGN?: TartuGecko;
  GEL?: TartuGecko;
  BIF?: TartuGecko;
  ALL?: TartuGecko;
  COP?: TartuGecko;
  JEP?: TartuGecko;
  KWD?: TartuGecko;
  BDT?: TartuGecko;
  GMD?: TartuGecko;
  VND?: TartuGecko;
  HUF?: TartuGecko;
  ETB?: TartuGecko;
  VUV?: TartuGecko;
  KPW?: TartuGecko;
  GTQ?: TartuGecko;
  RUB?: TartuGecko;
  MXN?: TartuGecko;
  CLP?: TartuGecko;
  MOP?: TartuGecko;
  CRC?: TartuGecko;
  DJF?: TartuGecko;
  JPY?: TartuGecko;
  AZN?: TartuGecko;
  MWK?: TartuGecko;
  KES?: TartuGecko;
  CKD?: TartuGecko;
  SSP?: TartuGecko;
  PLN?: TartuGecko;
  BBD?: TartuGecko;
  TRY?: TartuGecko;
  BYN?: TartuGecko;
  NIO?: TartuGecko;
  LAK?: TartuGecko;
  MDL?: TartuGecko;
  STN?: TartuGecko;
  CDF?: TartuGecko;
  LBP?: TartuGecko;
  MMK?: TartuGecko;
  TMT?: TartuGecko;
  WST?: TartuGecko;
}
export interface TartuGecko {
  name:   string;
  symbol: string;
}

export interface GroupCountry {
  countries: CountryI[];
  regions: Region[];
}

export interface CountryDetail {
  country: CountryI;
}


