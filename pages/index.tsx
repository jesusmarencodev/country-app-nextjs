import React, { useState, ChangeEvent, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import { Input } from "@nextui-org/react";
import Country from "@/components/home/Country";
import RootLayout from "@/components/shared/layout";
import { CountryI, GroupCountry, Region } from "@/interfaces/country.interface";
import { countryApi } from "@/api";
import { SearchIcon } from "@/components/shared/icons";
import { DropdownCountry } from "@/components/home/DropdownCountry";
import { useInput } from "@/hooks/useInput";
import { formatResponseCountry } from "@/utils/formatResponse";

export const HomePage: NextPage<GroupCountry> = ({ countries, regions }) => {
  const { inputText, handlerChange, setOption, copyCountries } =
    useInput(countries);

  return (
    <RootLayout>
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-wrap sm:flex-nowrap mb-6 md:mb-0 gap-4 justify-between">
          <div className="w-80">
            <Input
              value={inputText}
              onChange={handlerChange}
              type="text"
              placeholder="Search for a country..."
              labelPlacement="inside"
              startContent={
                <SearchIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          {regions.length && (
            <DropdownCountry
              inputText={inputText}
              regions={regions}
              setOption={setOption}
            />
          )}
        </div>
      </div>

      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-9">
        {copyCountries.map((country) => (
          <Country key={country.cca3} {...country} />
        ))}
      </div>
    </RootLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await countryApi.get<CountryI[]>("/all");
  const countries = formatResponseCountry(response.data);


  const regions = response.data.map((country) => country.region);
  const options = regions.filter(
    (region, index) => regions.indexOf(region) === index
  );

  options.unshift(Region.All);

  return {
    props: {
      countries: countries,
      regions: options,
    },
  };
};

export default HomePage;
