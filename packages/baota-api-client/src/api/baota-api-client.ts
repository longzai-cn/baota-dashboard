import axios, { AxiosInstance } from "axios";
import { handleError } from "../utils/error-handling";
import {
  BaotaAPIClientConfig,
  baotaAPIClientDefaultConfig,
} from "./baota-api-client-config";
import { TaskCountResult } from "../types/task-count.result";
import { BaotaUrl } from "./baota-url.enum";
import SparkMD5 from "spark-md5";
import { SystemTotalResult } from "../types/system-total.result";

export class BaotaAPIClient {
  private api: AxiosInstance;
  private config: BaotaAPIClientConfig;

  constructor(config: BaotaAPIClientConfig = baotaAPIClientDefaultConfig) {
    this.api = axios.create({ baseURL: config.host, withCredentials: false });
    this.config = { ...baotaAPIClientDefaultConfig, ...config };
  }

  getRequestParams() {
    const request_time = Math.floor(Date.now() / 1000);
    const md5 = (text: string) => text ? SparkMD5.hash(text) : "";
    const request_token = md5(String(request_time) + md5(this.config.key));
    return {
      request_time,
      request_token,
    };
  }

  async httpGet<T>(url = "/hello-world", params = {}) {
    // Add Request Params
    Object.assign(params, this.getRequestParams());
    // Debug
    if (this.config.debug) {
      console.debug("httpGet", { url, params });
    }
    try {
      const response = await this.api.get<T>(url, {
        params,
      });
      if (this.config.debug) {
        console.debug("httpGet -> result", response.data);
      }
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  async httpPost<T>(url = "/hello-world", data = {}) {
    // Request Params
    const params = this.getRequestParams();
    // Debug
    if (this.config.debug) {
      console.debug("httpPost", { url, data });
    }
    try {
      const response = await this.api.post<T>(url, data, {
        params,
      });
      if (this.config.debug) {
        console.debug("httpPost -> result", response.data);
      }
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  //#region 系统状态相关接口

  /**
   * 获取系统基础统计
   */
  async getSystemTotal() {
    return this.httpGet<SystemTotalResult>(BaotaUrl.GetSystemTotal);
  }

  /**
   * 检查是否有安装任务
   */
  async getTaskCount() {
    return this.httpPost<TaskCountResult>(BaotaUrl.GetTaskCount);
  }

  //#endregion

  //#region 网站管理
  //#endregion
}
