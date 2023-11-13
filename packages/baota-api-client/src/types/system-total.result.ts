/**
 * 响应内容示例：
 * {
 *  "cpuRealUsed": 0.85,
 *  "memTotal": 1741,
 *  "system": "CentOS Linux 7.5.1804 (Core)",
 *  "memRealUsed": 691,
 *  "cpuNum": 6,
 *  "memFree": 189,
 *  "version": "6.8.1",
 *  "time": "0\u592923\u5c0f\u65f657\u5206\u949f",
 *  "memCached": 722,
 *  "memBuffers": 139,
 *  "isuser": 0
 * }
 */
export type SystemTotalResult = {
  cpuRealUsed: number;
  memTotal: number;
  system: string;
  memRealUsed: number;
  cpuNum: number;
  memFree: number;
  version: string;
  time: string;
  memCached: number;
  memBuffers: number;
  isuser: number;
};
