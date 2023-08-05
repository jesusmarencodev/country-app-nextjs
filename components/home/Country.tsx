import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CountryI } from "@/interfaces/country.interface";
import ThemeContext from "@/context/themeContext";

const Country: FC<CountryI> = ({
  cca3,
  name,
  flags,
  population,
  region,
  capital,
}) => {
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  const onClick = () => {
    router.push(`/country/${cca3}`);
  };

  return (
    <Card className="m-1" shadow="sm" key={cca3} isPressable onPress={onClick}>
      <CardBody className={`overflow-visible p-0 theme-${theme}-own`}>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={name.common}
          className="w-full object-cover h-[140px]"
          src={flags.svg}
        />
      </CardBody>
      <CardFooter className={`colum align-left theme-${theme}-own`}>
        <p className="strong-custom align-items pb-1">{name.common}</p>
        <p className="text-sm">
          <span className="strong-custom">Population:</span> {population}
        </p>
        <p className="text-sm">
          <span className="strong-custom">Region:</span> {region}
        </p>
        <p className="text-sm">
          <span className="strong-custom">Capital:</span> {capital}
        </p>
      </CardFooter>
    </Card>
  );
};

export default Country;
