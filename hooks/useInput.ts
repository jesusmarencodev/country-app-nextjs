import { CountryI, GroupCountry } from "@/interfaces/country.interface";
import { useState, ChangeEvent, useEffect } from "react";
export const useInput = (countries: CountryI[]) => {
  const [inputText, setInputText] = useState("");
  const [option, setOption] = useState("");
  const [copyCountries, setCopyCountries] = useState(countries);

  const handlerChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputText(ev.target.value);
  };

  useEffect(() => {
    const filterCountry = () => {
      if (option === "Filter by Region" && inputText === "") {
        setCopyCountries(countries);
        return;
      }
      if (inputText !== "" && option === "Filter by Region") {
        const filteredCountries = copyCountries.filter((country) => {
          return country.name.common.toLowerCase().includes(inputText);
        });
        setCopyCountries(filteredCountries);
      } else {
        const filteredCountries = countries.filter((country) => {
          const nameMatches = country.name.common
            .toLowerCase()
            .includes(inputText.toLowerCase());

          const regionMatches =
            option && country.region.toLowerCase() === option.toLowerCase();

          return (nameMatches && !option) || (nameMatches && regionMatches);
        });
        setCopyCountries(filteredCountries);
      }
    };

    filterCountry();
  }, [inputText, option, countries]);

  return {
    inputText,
    handlerChange,
    setOption,
    copyCountries,
  };
};
