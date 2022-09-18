const { config } = require("../src/utils/config");
const { fetchLocationDetails } = require("./utils/geoCodeApiUtils");

describe("GeoCode Api", () => {
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

  test("with only key", async () => {
    try {
      const response = await fetchLocationDetails(config.API_KEY, undefined);
      expect(response.data.error).toBe("Address not present");
    } catch (error) {
      console.error(error);
    }
  });

  test("with only address", async () => {
    try {
      const response = await fetchLocationDetails(undefined, "Bombay");
      expect(response.data.error).toBe("No API Key Present");
    } catch (error) {
      console.log(error);
    }
  });
});
