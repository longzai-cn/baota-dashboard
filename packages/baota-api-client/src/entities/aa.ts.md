```ts
declare class Baota {
  private readonly baotaInstance;

  /**
   * 获取磁盘分区信息
   * ```
   * baota.create(Baota.getDiskInfo).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getDiskInfo: string;
  /**
   * 获取实时状态信息(CPU、内存、网络、负载)
   * ```js
   * baota.create(Baota.getNetWork).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getNetWork: string;
  
  /**
   * 检查面板更新
   *
   * ```js
   * baota.create(Baota.updatePanel).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static updatePanel: string;
  /**
   * 安全风险扫描
   *
   * ```js
   * baota.create(Baota.getRiskList).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getRiskList: string;
  /**
   * 获取网站分类列表
   *
   * ```js
   * baota.create(Baota.getSiteTypes).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getSiteTypes: string;
  /**
   * 新建网站分类
   *
   * ```js
   * const name = '分类三';    // 分类名称
   * baota.create(Baota.addSiteTypes, name).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static addSiteTypes: string;
  /**
   * 删除网站分类
   *
   * ```js
   * const id = 3;          // 分类id
   * baota.create(Baota.delSiteTypes, id).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static delSiteTypes: string;
  /**
   * 获取已安装的 PHP 版本列表
   *
   * ```js
   * baota.create(Baota.getPHPVersion).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getPHPVersion: string;
  /**
   * 获取网站列表
   *
   * ```typescript
   * const sitesQuery = {
   *     p? : number,        // 页数，默认为1
   *     limit? : number,    // 每页数量，默认20
   *     type? : number,     // 网站分类 -1全部  0默认分类
   *     order? : 'id desc' | 'id asc' | 'name desc' | 'name asc' | 'status desc' | 'status asc' | 'edate desc' | 'edate asc',
   *     // 排序：id降序|升序，网站名、状态、到期时间
   *     tojs? : string,     // 分页 JS 回调,若不传则构造 URI 分页连接
   *     search? : string,   // 搜索网站名
   * }
   *
   * baota.create(Baota.getSitesList, sitesQuery).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getSitesList: string;
  /**
   * 创建网站
   *
   * ```typescript
   * const webName = {
   *     domain: string,         // 主域名 如：www.test.com
   *     domainlist: string[],   // 除了主域名外的其他域名 如：['aa.test.com','www.aaa.com']
   * }
   * const newSite = {
   *     webname: webName,       // 网站主域名和域名列表
   *     path: string,           // 网站根目录
   *     type: 'PHP',            // 项目类型，请传 PHP
   *     type_id: number,        // 网站分类id
   *     version: string,        // PHP版本 请从 PHP 版本列表中选择；00为纯静态
   *     port: number,           // 端口，如：80
   *     ps: string,             // 网站备注
   *     ftp: boolean,           // 是否开启FTP
   *     ftp_username? : string,  // FTP用户名, 在开启FTP时必填
   *     ftp_password? : string,  // FTP密码, 在开启FTP时必填
   *     sql: boolean,           // 是否创建数据库
   *     codeing? : string,       // 数据库字符集 在要创建数据库时必传,如：utf8
   *     datauser? : string,      // 数据库用户名 在要创建数据库时必传
   *     datapassword? : string,  // 数据库密码 在要创建数据库时必传
   * }
   *
   * baota.create(Baota.addSite, newSite).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static addSite: string;
  /**
   * 删除网站
   *
   * ```typescript
   * const options = {
   *     id: number,      // 网站id
   *     webname: string, // 网站主域名
   *     ftp? : 1,         // 删除ftp，如不需要删除，请不要传该参数
   *     database? : 1,    // 删除数据库，如不需要删除，请不要传该参数
   *     path? : 1,        // 删除网站根目录，如不需要删除，请不要传该参数
   * }
   *
   * baota.create(Baota.delSite, options).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static delSite: string;
  /**
   * 停用网站
   *
   * ```typescript
   * const site = {
   *     id: number,      // 网站id
   *     name: string,    // 网站主域名
   * }
   *
   * baota.create(Baota.siteStop, site).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static siteStop: string;
  /**
   * 启用网站
   *
   * ```typescript
   * const site = {
   *     id: number,      // 网站id
   *     name: string,    // 网站主域名
   * }
   *
   * baota.create(Baota.siteStart, site).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static siteStart: string;
  /**
   * 设置网站到期时间
   *
   * ```typescript
   * const formData = {
   *     id: number,       // 网站id
   *     edate: string,    // 到期日期，格式: '2023-05-17'；永久：'0000-00-00'
   * }
   *
   * baota.create(Baota.setSiteEndDate, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setSiteEndDate: string;
  /**
   * 修改网站备注
   *
   * ```typescript
   * const formData = {
   *     id: number,       // 网站id
   *     ps: string,       // 备注
   * }
   *
   * baota.create(Baota.setSitePs, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setSitePs: string;
  /**
   * 获取FTP列表（可搜索）
   *
   * ```typescript
   * let formData = {
   *     p? : 1,              // 分页，可选，默认为1
   *     limit? : 20,        // 每页数量，可选，默认为20
   *     search? : 'abc',   // 搜索ftp的username，可选，默认为空
   * }
   *
   * baota.create(Baota.getFtpList, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getFtpList: string;
  /**
   * 添加FTP
   *
   * ```typescript
   * let formData = {
   *     username: string,  // FTP用户名
   *     password: string,  // FTP密码
   *     path: string,      // FTP路径
   *     ps? : string,       // 备注，可选
   * }
   *
   * baota.create(Baota.addFtp, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static addFtp: string;
  /**
   * 设置FTP状态，停用/启用
   *
   * ```typescript
   * let formData = {
   *     id: number,        // FTP id
   *     username: string,  // FTP 用户名
   *     status: 0 | 1,      // 设置FTP状态，0:停用，1:启用
   * }
   *
   * baota.create(Baota.setFtpStatus, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setFtpStatus: string;
  /**
   * 删除FTP
   *
   * ```typescript
   * let formData = {
   *     id: number,        // FTP id
   *     username: string,  // FTP 用户名
   * }
   *
   * baota.create(Baota.delFtp, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static delFtp: string;
  /**
   * 修改FTP密码
   *
   * ```typescript
   * let formData = {
   *     id: number,           // FTP id
   *     username: string,     // FTP 用户名
   *     newPassword: string,  // 新密码，可使用baota.randomPassword()生成
   * }
   *
   * baota.create(Baota.setFtpPassword, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setFtpPassword: string;
  /**
   * 修改FTP端口
   * 注意：该操作会影响所有FTP
   *
   * ```js
   * let port = 21;   // 新的FTP端口
   * baota.create(Baota.setFtpPort, port).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setFtpPort: string;
  /**
   * 修改FTP备注
   *
   * ```js
   * let formData = {
   *     id: number,        // FTP id
   *     ps: string         // 备注
   * }
   *
   * baota.create(Baota.setFtpPs, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setFtpPs: string;
  /**
   * FTP容量
   * 注：此功能为企业版专享功能； 如需取消容量配额，请设为“0”。
   *
   * ```js
   * let formData = {
   *     size: number,     // 容量，单位为 MB
   *     path: string      // 路径
   * }
   *
   * baota.create(Baota.setFtpQuota, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setFtpQuota: string;
  /**
   * 获取监控状态
   *
   * ```js
   * baota.create(Baota.getMonitorStatus).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getMonitorStatus: string;
  /**
   * 设置监控状态、保存时间
   *
   * ```typescript
   * let formData = {
   *     status: 0 | 1,      // 0:开启  1:关闭
   *     day? : number      // 保存天数，可选，默认为30天
   * }
   *
   * baota.create(Baota.setMonitorStatus, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static setMonitorStatus: string;
  /**
   * 平均负载
   *
   * ```typescript
   * let range = {
   *     start? : number,      // 时间戳，精确到秒，如：1652500800
   *     end? : number         // 时间戳，精确到秒，如：1652587200
   * }
   * // start和end需同时传入，如都留空，则默认为： start：当前时间-1天；end:当前时间
   * baota.create(Baota.getLoadAvg, range).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getLoadAvg: string;
  /**
   * CPU及内存使用率
   *
   * ```js
   * baota.create(Baota.getCPUIO).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getCPUIO: string;
  /**
   * 磁盘IO
   *
   * ```typescript
   * let range = {
   *     start? : number,      // 时间戳，精确到秒，如：1652500800
   *     end? : number         // 时间戳，精确到秒，如：1652587200
   * }
   * // start和end需同时传入，如都留空，则默认为： start：当前时间-1天；end:当前时间
   * baota.create(Baota.getDiskIO, range).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getDiskIO: string;
  /**
   * 网络IO
   *
   * ```typescript
   * let range = {
   *     start? : number,      // 时间戳，精确到秒，如：1652500800
   *     end? : number         // 时间戳，精确到秒，如：1652587200
   * }
   * // start和end需同时传入，如都留空，则默认为： start：当前时间-1天；end:当前时间
   * baota.create(Baota.getNetIO, range).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getNetIO: string;
  /**
   * 获取SSH终端列表
   *
   * ```js
   * baota.create(Baota.getSSHList).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getSSHList: string;
  /**
   * 添加/修改SSH
   *
   * ```typescript
   * let formData = {
   *     host: string,           // host，如: 127.0.0.1
   *     port: number,           // 端口，通常为 21
   *     username: string,       // 用户名，如：root
   *     password? : string,      // 密码：可选，密码和私钥二选一
   *     pkey? : string,          // 私钥：可选，密码和私钥二选一
   *     ps? : string             // 备注，可选
   * }
   *
   * baota.create(Baota.addSSH, formData).then(res => {
   *     console.log(res)   // { "status": true, "msg": "添加成功" }
   * })
   * ```
   */
  static addSSH: string;
  /**
   * 删除SSH
   *
   * ```typescript
   * let formData = {
   *     host: string,           // host，如: 127.0.0.1
   * }
   *
   * baota.create(Baota.delSSH, formData).then(res => {
   *     console.log(res)     // { "status": true, "msg": "删除成功" }
   * })
   * ```
   */
  static delSSH: string;
  /**
   * 获取常用命令
   *
   * ```js
   * baota.create(Baota.getCommandList).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getCommandList: string;
  /**
   * 添加常用命令
   *
   * ```typescript
   * const command = {
   *     shell: string,        // ssh语句
   *     title: string,        // title
   * }
   *
   * baota.create(Baota.createCommand, command).then(res => {
   *     console.log(res)    // { "status": true, "msg": "添加成功" }
   * })
   * ```
   */
  static createCommand: string;
  /**
   * 修改常用命令
   *
   * ```typescript
   * const command = {
   *     shell: string,       // ssh语句，如不需修改，则传入原来的语句；如需修改，请传入修改后的语句
   *     title: string,       // 原title
   *     newTitle? : string，  // 新title，如不需修改，不填或传入原title
   * }
   *
   * baota.create(Baota.modifyCommand, command).then(res => {
   *     console.log(res)  // { "status": true, "msg": "修改成功" }
   * })
   * ```
   */
  static modifyCommand: string;
  /**
   * 删除常用命令
   *
   * ```typescript
   * const command = {
   *     title: string,       // title
   * }
   *
   * baota.create(Baota.getSystemTotal, command).then(res => {
   *     console.log(res) // { "status": true, "msg": "删除成功" }
   * })
   * ```
   */
  static delCommand: string;
  /**
   * 获取软件列表 (可搜索)
   *
   * ```typescript
   * let formData = {
   *     p? : number,       // 页码，可选，默认为1；每页数量为15
   *     type? : number     // 分类，可选，默认为0；0:全部 -1:已安装 5:运行环境 6:系统工具 7:宝塔插件 8:专业版插件 10:第三方应用 11: 一键部署 12:企业版插件
   *     query? : string,   // 搜索内容，可选
   * }
   *
   * baota.create(Baota.getSoftList, formData).then(res => {
   *     console.log(res)
   * })
   * ```
   */
  static getSoftList: string;
  constructor(config: Config);
  create(funcName: string, params?: any): Promise<unknown>;
}

export default Baota;
```