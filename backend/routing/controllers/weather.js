var axios = require("axios");

const pathAPI = "https://api.open-meteo.com/v1/forecast";

exports.getWeatherDaily = async function (req, res) {
  try {
    let data = await axios.get(pathAPI, {
      params: {
        latitude: Number(req.query.latitude),
        longitude: Number(req.query.longitude),
        timezone: "auto",
        daily: [
          "temperature_2m_max",
          "temperature_2m_min",
          "apparent_temperature_max",
          "apparent_temperature_min",
          "precipitation_sum",
          "rain_sum",
          "showers_sum",
          "snowfall_sum",
          "precipitation_hours",
          "weathercode",
          "sunrise",
          "sunset",
          "windspeed_10m_max",
          "windgusts_10m_max",
          "winddirection_10m_dominant",
          "shortwave_radiation_sum",
          "et0_fao_evapotranspiration",
        ],
      },
    });
    res.send(data.data);
  } catch (error) {
    console.log({ error });
    res.send({ error });
  }
};

exports.getWeatherCurrent = async function (req, res) {
  try {
    let data = await axios.get(pathAPI, {
      params: {
        latitude: Number(req.query.latitude),
        longitude: Number(req.query.longitude),
        timezone: "auto",
        current_weather: true,
      },
    });
    res.send(data.data);
  } catch (error) {
    console.log({ error });
    res.send({ error });
  }
};
