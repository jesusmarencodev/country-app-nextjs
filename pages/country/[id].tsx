import React from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button } from "@nextui-org/react";
import RootLayout from "@/components/shared/layout";
import { CountryDetail, CountryI } from "@/interfaces/country.interface";
import { countryApi } from "@/api";
import { getCountriesById } from "@/api/countryApi";
import CountryData from "@/components/country/CountryData";
import { useRouter } from "next/router";

const CountryInfo: NextPage<CountryDetail> = ({ country }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/`);
  };

  return (
    <RootLayout>
      <Button onClick={onClick} >Back</Button>
      <div className="md:grid grid-cols-12 ">
        <CountryData country={country} />
      </div>
    </RootLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const response = await countryApi.get<CountryI[]>("/all");
  const countries = response.data.map((country) => country.cca3);

  return {
    paths: countries.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const country = await getCountriesById(id);

  return {
    props: {
      country,
    },
  };
};

export default CountryInfo;
