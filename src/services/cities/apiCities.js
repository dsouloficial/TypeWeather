import axios from "axios";

const { VITE_RADAR_API } = import.meta.env;

export const apiCities = axios.create({
  baseURL: "https://api.radar.io/v1/geocode",
  headers: { Authorization: VITE_RADAR_API }
});