import axios from "axios";

export const baseUrl = "exercisedb.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": "c2cc18463cmsh48fa7f1e49d42eep130753jsn503766f86a3d",
    },
  });

  return data;
};
