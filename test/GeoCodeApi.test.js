const { config } = require("../src/utils/config");
const { fetchLocationDetails } = require("./utils/geoCodeApiUtils");

describe("GeoCode Api", () => {
  //making a network request with params having valid values
  test("with all params", async () => {
    try {
      const response = await fetchLocationDetails(config.API_KEY, "Bombay");
      const expectedResponse = {
        latitude: 19.0759837,
        longitude: 72.8776559,
      };
      expect(response.data).toStrictEqual(expectedResponse);
    } catch (error) {
      console.error(error);
    }
  });

  //making a network request with params having values but are not valid
  test("with all params but invalid values", async () => {
    try {
      const response = await fetchLocationDetails("random_key", "random_city");
      expect(response.error).toBe("Invalid API Key or Invalid Location");
    } catch (error) {
      console.log(error);
    }
  });

  //network request with only key
  test("with only key", async () => {
    try {
      const response = await fetchLocationDetails(config.API_KEY, undefined);
      expect(response.error).toBe("Address not present");
    } catch (error) {
      console.log(error);
    }
  });

  //network request with only address
  test("with only address", async () => {
    try {
      const response = await fetchLocationDetails(undefined, "Bombay");
      expect(response.error).toBe("No API Key Present");
    } catch (error) {
      console.log(error);
    }
  });
});
