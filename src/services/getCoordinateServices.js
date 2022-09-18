const nodeCache = require("node-cache");
const axios = require("axios");
const cache = new nodeCache({ stdTTL: 120, checkperiod: 150 });

const getCoordinates = async (req, res) => {
  try {
    const key = req.query.key;
    //if no key present
    if (!key) {
      throw new Error("No API Key Present");
    }

    //if no address present
    const address = req.query.address;
    if (!address) {
      throw new Error("Address not present");
    }

    //finding the desired key in Cache if found return from cache,else make a network request
    if (cache.get(address) !== undefined) {
      const cacheValue = cache.get(address);
      return res.json({
        latitude: cacheValue.latitude,
        longitude: cacheValue.longitude,
      });
    } else {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address,
            key,
          },
        }
      );
      //if either key/address is invalid returns a error message as response
      if (!response.data.results[0]) {
        return res.json({ error: "Invalid API Key or Invalid Location" });
      }
      const latitude = response.data.results[0].geometry.location.lat;
      const longitude = response.data.results[0].geometry.location.lng;
      const cacheValue = { latitude, longitude };
      //updating the Cache with the fetched value
      cache.set(address, cacheValue);
      res.status(200).json({ latitude, longitude });
    }
  } catch (err) {
    // console.log(err);
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getCoordinates };
