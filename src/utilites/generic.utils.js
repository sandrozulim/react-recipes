import { BASE_API_URL, API_KEY } from "../constants/api.constants";

export const apiUrlBuilder = (url) => {
  return `${BASE_API_URL}${url}&apiKey=${API_KEY}`;
};

export const numToTwoDecimals = (num) => {
  return +Number(num).toFixed(2);
};
