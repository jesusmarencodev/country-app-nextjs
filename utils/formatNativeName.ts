import { CountryI } from "@/interfaces/country.interface";


export const getOfficialName = (country: CountryI): string => {
    const nativeName = country.name.nativeName;
    const nativeNameKeys = nativeName ? Object.keys(nativeName) : [];
  
    if (nativeNameKeys.length === 0) {
      return "Hola Mundo";
    }
  
    const firstKey = nativeNameKeys[0];
    return (nativeName && nativeName[firstKey]?.official) || country.name.common;
  };