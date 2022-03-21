import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
const options = {
  method: "GET",

  params: {
    latitude: "51.507351",
    longitude: "-0.127758",
    limit: "30",
    currency: "USD",
    distance: "2",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "a08682b17amshecd1d074f41b1a6p13d36ejsn8a036953df4c",
  },
};

export const getPlacesData = async (lat, lng) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      method: "GET",

      params: {
        latitude: "12.91285",
        longitude: "100.87808",
        limit: "30",
        currency: "USD",
        distance: "2",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "a08682b17amshecd1d074f41b1a6p13d36ejsn8a036953df4c",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
