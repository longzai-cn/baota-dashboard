/**
 * 签名算法
 * api_sk = 接口密钥 (在面板设置页面 - API 接口中获取)
 * request_time = 当前请求时间的 uinx 时间戳 ( php: time() / python: time.time() )
 * request_token = md5(string(request_time) + md5(api_sk))
 */
export type RequestParams = {
  request_time: number;
  request_token: string;
};
