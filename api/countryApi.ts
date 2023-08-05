import { CountryI } from "@/interfaces/country.interface";
import { formatResponseCountry } from "@/utils/formatResponse";
import axios from "axios";

const countryAll = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getCountriesById = async(id:string) => {
  try {
    const {data} = await countryAll.get<CountryI[]>(`/alpha/${id}`);
    return  formatResponseCountry(data)[0];  

  } catch (error) {
    return null;
  }
}

export default countryAll;
