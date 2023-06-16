import { api } from "./api";

export async function getCityByNameService(name) {
  try {
    const { data } = await api.get(`/weather?q=${name}`);

    const city = {
      id: data.id,
      name: `${data.name}, ${data.sys.country}`,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    };

    return city;
  } catch (error) {
    return null;
  }
}