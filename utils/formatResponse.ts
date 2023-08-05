import { CountryI } from "@/interfaces/country.interface";

export const formatResponseCountry = (payload: CountryI[]) => {
  return payload.map((country) => ({
    name: country.name,
    cca3: country.cca3,
    population: country.population,
    flags: country.flags,
    region: country.region,
    subregion: country.subregion ?? "",
    capital: country.capital ?? ["nothing"],
    borders: country.borders ?? [],
    languages: country.languages ?? {},
    currencies: country.currencies ?? {},
  }));
};
