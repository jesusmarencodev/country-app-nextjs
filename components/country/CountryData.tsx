import { CountryDetail } from "@/interfaces/country.interface";
import { getOfficialName } from "@/utils/formatNativeName";
import { Image } from "@nextui-org/react";
import { NextPage } from "next";
import React from "react";
import CountryBorders from "./CountryBorders";
import { checkLanguages, getCurrenciesNames, getSpokenLanguages } from "@/utils/formatData";

const CountryData: NextPage<CountryDetail> = ({ country }) => {
  return (
    <>
      <div className="sm:col-span-12 md:col-span-7 pt-4">
        <Image
          src={country.flags.svg}
          alt={country.name.common}
          className="sm:h-96"
        />
      </div>
      <div className="sm:col-span-12 md:col-span-5  pt-12">
        <h1 className="font-bold text-xl pb-5">{country.name.common}</h1>
        <div className="md:grid grid-cols-12">
          <div className="sm:col-span-12 md:col-span-7 ">
            <p>
              <span className="font-bold">Native Name: </span>
              {getOfficialName(country)}
            </p>
            <p>
              <span className="font-bold">Population: </span>
              {country.population}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              {country?.subregion || "Nothing"}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {country.capital}
            </p>
          </div>
          <div className="pt-7 md:pt-0 sm:col-span-12 md:col-span-5 ">
            <p>
              <span className="font-bold pt-7">Top Level Domain: </span>
              {checkLanguages(country)}
            </p>
            <p>
              <span className="font-bold">languages: </span>
              {getSpokenLanguages(country).join(', ')}
            </p>
            <p>
              <span className="font-bold">currencies: </span>
              {getCurrenciesNames(country).join(', ')}
            </p>

            
          </div>
        </div>
        {country && <CountryBorders country={country} />}
      </div>
    </>
  );
};

export default CountryData;
