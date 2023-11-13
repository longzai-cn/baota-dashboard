```ts

// 获取磁盘分区信息
getDiskInfo(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/system?action=GetDiskInfo', callback);
}
// 获取实时状态信息(CPU、内存、网络、负载)
getNetWork(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/system?action=GetNetWork', callback);
}

// 检查面板更新
updatePanel(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/ajax?action=UpdatePanel', callback);
}
// 安全风险列表
getRiskList(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/warning?action=get_list', callback);
}
// 网站
// 获取网站列表
getSitesList(formData, callback) {
  let queryData = formData;
  queryData.table = 'sites';
  // queryData.search = queryData.search || '';
  queryData.p = queryData.p || 1;
  queryData.limit = queryData.limit || 20;
  console.log(queryData);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/data?action=getData', { queryData }, callback);
  // this.#request('/data?action=getData&table=sites&search=b',postData,callback)
}
// 获取网站分类
getSiteTypes(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=get_site_types', callback);
}
// 新建网站分类
addSiteTypes(name, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=get_site_types', { name }, callback);
}
// 删除网站分类
delSiteTypes(id, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=get_site_types', { id }, callback);
}
// 获取已安装的 PHP 版本列表
getPHPVersion(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=GetPHPVersion', callback);
}
// 创建网站
addSite(site, callback) {
  var _a;
  let newSite = site;
  let webname = newSite.webname;
  webname.count = ((_a = webname.domainlist) === null || _a === void 0 ? void 0 : _a.length) || 0;
  newSite.webname = JSON.stringify(webname);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=AddSite', { queryData: newSite }, callback);
}
// 删除网站
delSite(site, callback) {
  // console.log(site);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=DeleteSite', { queryData: site }, callback);
}
// 停用网站
siteStop(site, callback) {
  console.log(site);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=SiteStop', { queryData: site }, callback);
}
// 启用网站
siteStart(site, callback) {
  console.log(site);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=SiteStart', { queryData: site }, callback);
}
// 网站到期时间
setSiteEndDate(postData, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/site?action=SetEdate', { queryData: postData }, callback);
}
// 修改网站备注
setSitePs(postData, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/data?action=setPs&table=sites', { queryData: postData }, callback);
}
// 获取网站备份列表
// getSiteBackup(formData:sitesQuery,callback:Function){
// }
// // 上传文件
// upload(src,targetDir,callback){
// 	let stat = statSync(src);
// 	if (stat.isFile()) {
// 	}
// 	let fileBlob = readFileSync(src);
// 	this.#request('/files?action=upload',data,callback)
// }
// { status: false, msg: '不能通过API接口配置API' } // 不能通过API接口配置API，请使用宝塔面板配置
// 设置token和ip
// setToken(ip,callback){ // ip白名单，每行一个
// 	const data = {
// 		t_type:3,
// 		limit_addr:ip,
// 	}
// 	this.#request('/config?action=set_token',data,callback)
// }
// FTP
// 获取FTP列表 search:搜索关键字
getFtpList(formData, callback) {
  let postData = {
      table: 'ftps',
      limit: formData.limit || 20,
      p: formData.p || 1,
      search: formData.search || '',
  };
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/data?action=getData', { queryData: postData }, callback);
}
// 修改FTP端口
setFtpPort(port, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/ftp?action=setPort', { queryData: { port } }, callback);
}
// 添加FTP
addFtp(ftp, callback) {
  let newFpt = {
      ftp_username: ftp.username,
      ftp_password: ftp.password,
      path: ftp.path,
      ps: ftp.ps || '',
  };
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/ftp?action=AddUser', { queryData: newFpt }, callback);
}
// 修改FTP备注
setFtpPs(fptPs, callback) {
  let newFtpPs = {
      id: fptPs.id,
      ps: fptPs.ps,
      table: 'ftps',
  };
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/data?action=setPs', { queryData: newFtpPs }, callback);
}
// 设置FTP容量
setFtpQuota(ftpSpace, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/project/quota/modify_path_quota', ftpSpace, callback);
}
// 设置FTP状态，停用/启用
setFtpStatus(ftpStatus, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/ftp?action=SetStatus', { queryData: ftpStatus }, callback);
}
// 修改FTP密码
setFtpPassword(ftpPassword, callback) {
  let newFtpPassword = {
      id: ftpPassword.id,
      ftp_username: ftpPassword.username,
      new_password: ftpPassword.newPassword,
  };
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/ftp?action=SetUserPassword', { queryData: newFtpPassword }, callback);
}
// 删除FTP
delFtp(ftp, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/ftp?action=DeleteUser', { queryData: ftp }, callback);
}
// 监控
// 获取监控状态
getMonitorStatus(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/config?action=SetControl', { type: -1 }, callback);
}
// 设置监控状态、保存时间
setMonitorStatus(formData, callback) {
  let postData = {
      type: formData.status,
      day: formData.day || 30,
  };
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/config?action=SetControl', postData, callback);
}
// 平均负载
getLoadAvg(range, callback) {
  let url = `/ajax?action=get_load_average`;
  url = __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_urlAddTimeRange).call(this, url, range);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_get).call(this, url, callback);
}
// CPU及内存使用率
getCPUIO(range, callback) {
  let url = `/ajax?action=GetCpuIo`;
  url = __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_urlAddTimeRange).call(this, url, range);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_get).call(this, url, callback);
}
// 磁盘IO
getDiskIO(range, callback) {
  let url = `/ajax?action=GetDiskIo`;
  url = __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_urlAddTimeRange).call(this, url, range);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_get).call(this, url, callback);
}
// 网络IO
getNetIO(range, callback) {
  let url = `/ajax?action=GetNetWorkIo`;
  url = __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_urlAddTimeRange).call(this, url, range);
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_get).call(this, url, callback);
}
// 终端
// 获取终端列表
getSSHList(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/xterm?action=get_host_list', callback);
}
// 添加/修改终端  修改时，直接在原基础上修改后传入数据
addSSH(newHost, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/xterm?action=create_host', newHost, callback);
}
// 删除终端
delSSH(host, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/xterm?action=delete_host', { host }, callback);
}
// 获取常用命令 
getCommandList(callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/xterm?action=get_command_list', callback);
}
// 添加常用命令
createCommand(command, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/xterm?action=create_command', command, callback);
}
// {
// 	"status": true,
// 	"msg": "添加成功"
// }
// 修改常用命令
modifyCommand(command, callback) {
  let postData = {
      shell: command.shell,
      title: command.title,
      new_title: command.newTitle || command.title,
  };
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/xterm?action=modify_command', postData, callback);
}
// 删除常用命令
delCommand(command, callback) {
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/xterm?action=remove_command', command, callback);
}
// 软件相关操作
// 获取软件列表，可搜索
getSoftList(formData, callback) {
  let postData = {
      p: formData.p || 1,
      type: formData.type || 0,
      query: formData.query || '',
      force: 0,
      tojs: 'soft.get_list'
  };
  __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request).call(this, '/plugin?action=get_soft_list', postData, callback);
}
}
_BaoTa_host = new WeakMap(), _BaoTa_api_sk = new WeakMap(), _BaoTa_proxy = new WeakMap(), _BaoTa_instances = new WeakSet(), _BaoTa_queryToUrl = function _BaoTa_queryToUrl(url, query) {
let queryStr = '';
for (let key in query) {
  queryStr += `${key}=${query[key]}&`;
}
if (/\?$/.test(url)) {
  url += `${queryStr}`;
}
else {
  url += `?${queryStr}`;
}
return url;
}, _BaoTa_getToken = function _BaoTa_getToken() {
let request_time = new Date().getTime();
let request_token = md5(String(request_time) + md5(__classPrivateFieldGet(this, _BaoTa_api_sk, "f")));
return { request_time, request_token };
}, _BaoTa_request2 = function _BaoTa_request2(...params) {
let path = params[0];
let callback = arguments[arguments.length - 1];
let q = __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_getToken).call(this);
// let token = q;
let url = __classPrivateFieldGet(this, _BaoTa_host, "f") + path;
let postData = {};
if (typeof (arguments[1]) === 'object') {
  let temp = arguments[1];
  if (temp.queryData || temp.postData) {
      if (temp.queryData) {
          q = Object.assign(q, temp.queryData);
      }
      if (temp.postData) {
          postData = temp.postData;
      }
  }
  else { // 默认是queryData
      // postData = temp;
      q = Object.assign(q, temp);
  }
}
superagent.post(url).query(q).proxy(__classPrivateFieldGet(this, _BaoTa_proxy, "f")).send(postData).end((err, res) => {
  // superagent.post(url).proxy(this.#proxy).send(token).end((err:any,res:any)=>{ // https://www.bt.cn/api-doc.pdf 签名参数其实是作为query拼接到url后面的
  if (err) {
      console.log(err);
      callback(err);
  }
  else {
      console.log(res.text);
      callback(null, res.body);
  }
});
}, _BaoTa_request = function _BaoTa_request(...params) {
let args = Array.from(params);
if (args.length < 1) {
  throw new Error('参数不足');
}
let callback = args[args.length - 1];
if (typeof (callback) === 'function') { // 有回调函数
  // args.pop()
  // this.#request2(...args,(err:any,data:any)=>{
  // 	callback(err,data);
  // });
  return __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_request2).call(this, ...args);
}
else { // 没有回调函数
}
}, _BaoTa_get2 = function _BaoTa_get2(...params) {
let path = params[0];
let callback = arguments[arguments.length - 1];
let token = __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_getToken).call(this);
let url = __classPrivateFieldGet(this, _BaoTa_host, "f") + path;
let q = {};
if (typeof (arguments[1]) === 'object') {
  q = arguments[1];
}
const query = Object.assign(token, q);
superagent.get(url).query(query).proxy(__classPrivateFieldGet(this, _BaoTa_proxy, "f")).end((err, res) => {
  if (err) {
      console.log(err);
      callback(err);
  }
  else {
      // console.log(res);
      callback(null, res.body);
  }
});
}, _BaoTa_get = function _BaoTa_get(...params) {
let args = Array.from(params);
if (args.length < 1) {
  throw new Error('参数不足');
}
let callback = args[args.length - 1];
if (typeof (callback) === 'function') { // 有回调函数
  return __classPrivateFieldGet(this, _BaoTa_instances, "m", _BaoTa_get2).call(this, ...args);
}
else { // 没有回调函数
}
}, _BaoTa_urlAddTimeRange = function _BaoTa_urlAddTimeRange(url, range) {
if ((range === null || range === void 0 ? void 0 : range.start) && (range === null || range === void 0 ? void 0 : range.end)) {
  url += `&start=${range.start}&end=${range.end}`;
}
else {
  const start = parseInt(String(new Date().getTime() / 1000)) - 86400;
  const end = parseInt(String(new Date().getTime() / 1000));
  url += `&start=${start}&end=${end}`;
}
return url;
};
```