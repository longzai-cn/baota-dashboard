import { AxiosError } from "axios";
import { handleError } from "./error-handling";

describe("handleError", () => {
  it("should handle Axios error", () => {
    const axiosError = new AxiosError(
      "test error",
      "",
      undefined,
      undefined,
      "test response" as any
    );
    const spy = jest.spyOn(console, "error");

    handleError(axiosError);

    expect(spy).toHaveBeenCalledWith(
      "Axios error:",
      "test error",
      "test response"
    );
    spy.mockRestore();
  });

  it("should handle non-Axios error", () => {
    const error = new Error("test error");
    const spy = jest.spyOn(console, "error");

    handleError(error);

    expect(spy).toHaveBeenCalledWith("Non-Axios error:", "test error");
    spy.mockRestore();
  });
});
