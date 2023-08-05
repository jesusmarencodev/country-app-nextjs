import { CountryI, TartuGecko } from "@/interfaces/country.interface";

export const checkLanguages = (country: CountryI): string => {
  const languages = country.languages ?? {};

  const keysCount = Object.keys(languages).length;
  if (keysCount > 1) {
    return "be";
  }

  return "1 lang";
};

export const getSpokenLanguages = (country: CountryI): string[] => {
  const languages = country.languages ?? {};
  return Object.values(languages);
};

export const getCurrenciesNames = (country: CountryI): string[] => {
  const currencies = country.currencies ?? {};
  return Object.values(currencies).map((currency: TartuGecko) => currency.name);
};
