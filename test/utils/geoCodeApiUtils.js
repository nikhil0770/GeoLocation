const axios = require("axios");
const { config } = require("../../src/utils/config");

const fetchLocationDetails = async (key, address) => {
  //making a path for network request based on available params
  try {
    let path = "/api/geoCode";
    if (address && key) {
      path += `?address=${address}&key=${key}`;
    } else if (address) {
      path += `?address=${address}`;
    } else if (key) {
      path += `?key=${key}`;
    }
    const response = await axios.get(`${config.HOST}${path}`);
    return response;
  } catch (error) {
    return { error: error.response.data.error };
  }
};

module.exports = { fetchLocationDetails };
