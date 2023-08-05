import React, { useContext, FC } from "react";
import { CountryDetail } from "@/interfaces/country.interface";
import ThemeContext from "@/context/themeContext";

const CountryBorders: FC<CountryDetail> = ({ country }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex-col md:col-span-12 pt-10">
      <p className="sm:inline md:inline-block ml-1">Border Countries : </p>
      {country.borders.map((border) => (
        <label
        style={{width:'70px'}}
          className={`text-center inline-block  mx-1 my-0.5 leading-10 theme-${theme}-own shadow-${theme}-own`}
          key={border}
        >
          {border}{" "}
        </label>
      ))}
    </div>
  );
};

export default CountryBorders;
