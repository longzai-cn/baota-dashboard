import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BaotaAPIClient } from "../index";
import { BaotaUrl } from "./baota-url.enum";

jest.mock("axios", () => {
  return {
    ...(jest.requireActual("axios") as object),
    create: jest.fn().mockReturnValue(jest.requireActual("axios")),
  };
});

const mockAdapter = new MockAdapter(axios);
const baotaApiClient = new BaotaAPIClient();

describe("BaotaAPIClient", () => {

  afterEach(() => {
    mockAdapter.reset();
    jest.restoreAllMocks();
  });

  describe("httpGet", () => {
    it("should make a GET request to the specified URL with optional parameters", async () => {
      // Arrange
      const url = "/hello-world";
      const params = {};
      const returnData = {
        result: "hello-world",
      };
      mockAdapter.onGet(url).reply(200, returnData);

      // Act
      const result = await baotaApiClient.httpGet(url, params);

      // Assert
      expect(result).toEqual(returnData);
    });

    it("should log debug information when debug flag is enabled", async () => {
      // Arrange
      const url = "/hello-world";
      const params = {};
      const returnData = {
        result: "hello-world",
      };
      mockAdapter.onGet(url).reply(200, returnData);
      jest.spyOn(console, "debug");

      // Act
      await baotaApiClient.httpGet(url, params);

      // Assert
      expect(console.debug).toHaveBeenCalledWith("httpGet", { url, params });
      expect(console.debug).toHaveBeenCalledWith(
        "httpGet -> result",
        returnData
      );
    });

    it("should handle error when an exception is thrown", async () => {
      // Arrange
      const url = "/hello-world";
      const params = {};
      mockAdapter.onGet(url).networkError();
      jest.spyOn(console, "error");

      // Act
      await baotaApiClient.httpGet(url, params);

      // Assert
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe("httpPost", () => {
    it("should make a POST request to the specified URL with optional parameters", async () => {
      // Arrange
      const url = "/hello-world";
      const data = {
        key: "data-key",
      };
      const returnData = {
        result: "hello-world",
      };
      mockAdapter.onPost(url).reply(200, returnData);

      // Act
      const result = await baotaApiClient.httpPost(url, data);

      // Assert
      expect(result).toEqual(returnData);
    });

    it("should log debug information when debug flag is enabled", async () => {
      // Arrange
      const url = "/hello-world";
      const data = {
        key: "data-key",
      };
      const returnData = {
        result: "hello-world",
      };
      mockAdapter.onPost(url).reply(200, returnData);
      jest.spyOn(console, "debug");

      // Act
      await baotaApiClient.httpPost(url, data);

      // Assert
      expect(console.debug).toHaveBeenCalledWith("httpPost", { url, data });
      expect(console.debug).toHaveBeenCalledWith(
        "httpPost -> result",
        returnData
      );
    });

    it("should handle error when an exception is thrown", async () => {
      // Arrange
      const url = "/hello-world";
      const params = {};
      mockAdapter.onPost(url).networkError();
      jest.spyOn(console, "error");

      // Act
      await baotaApiClient.httpPost(url, params);

      // Assert
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe("getTaskCount", ()=>{
    it("should return task count", async()=>{
      // Arrange
      const returnData = 0;
      mockAdapter.onAny(BaotaUrl.GetTaskCount).reply(200, returnData);

      // Act
      const result = await baotaApiClient.getTaskCount();

      // Assert
      expect(result).toBe(returnData)
    })
  })
});
