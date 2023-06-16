import { apiCities } from "./apiCities";

export async function searchCityByName(city) {
  const query = city.trim().replace(" ", "+").toLocaleLowerCase();

  const response = await apiCities.get(`forward?query=${query}`);

  return response.data.addresses;
}