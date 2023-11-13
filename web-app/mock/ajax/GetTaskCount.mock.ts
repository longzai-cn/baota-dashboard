import { defineMock } from "vite-plugin-mock-dev-server";
import { BaotaUrl } from "@longzai-cn/baota-api-client/api/baota-url.enum";
import { URL_PREFIX } from "../constant";

export default defineMock({
  url: URL_PREFIX + BaotaUrl.GetTaskCount,
  body: "0",
});
