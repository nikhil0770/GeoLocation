const nodeCache = require("node-cache");
const axios = require("axios");
const cache = new nodeCache({ stdTTL: 120, checkperiod: 150 });

const getCoordinates = async (req, res) => {
  try {
    const key = req.query.key;
    if (!key) {
      throw new Error("No API Key Present");
    }

    const address = req.query.address;
    if (!address) {
      throw new Error("Address not present");
    }

    if (cache.get(address) !== undefined) {
      const cacheValue = cache.get(address);
      return res.json({
        latitude: cacheValue.latitude,
        longitude: cacheValue.longitude,
      });
    } else {
      try {
        const response = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address,
              key,
            },
          }
        );
        const latitude = response.data.results[0].geometry.location.lat;
        const longitude = response.data.results[0].geometry.location.lng;
        const cacheValue = { latitude, longitude };
        cache.set(address, cacheValue);
        res.status(200).json({ latitude, longitude });
      } catch (error) {
        res.status(400).json({ error: "Invalid Credentials/Parameters" });
      }
    }
  } catch (err) {
    // console.log(err);
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getCoordinates };
