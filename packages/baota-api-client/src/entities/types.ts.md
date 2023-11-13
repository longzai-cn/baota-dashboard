```ts
interface ITableString {
  [key: string]: any;
}
declare type baotaConfig = {
  host: string;
  key: string;
  proxy?: string;
};
declare type sitesQuery = {
  p?: number;
  limit?: number;
  type?: number;
  order?: 'id desc' | 'id asc' | 'name desc' | 'name asc' | 'status desc' | 'status asc' | 'edate desc' | 'edate asc';
  tojs?: string;
  search?: string;
};
declare type WebName = {
  domain: string;
  domainlist: string[];
};
declare type NewSite = {
  webname: WebName;
  path: string;
  type: 'PHP';
  type_id: number;
  version: string;
  port: number;
  ps: string;
  ftp: boolean;
  ftp_username?: string;
  ftp_password?: string;
  sql: boolean;
  codeing?: string;
  datauser?: string;
  datapassword?: string;
};
declare type DelSite = {
  id: number;
  webname: string;
  ftp?: 1;
  database?: 1;
  path?: 1;
};
declare type Site = {
  id: number;
  name: string;
};
declare type FtpQuery = {
  limit?: number;
  p?: number;
  search?: string;
};
declare type Ftp = {
  username: string;
  password: string;
  path: string;
  ps?: string;
};
declare type NewFpt = {
  ftp_username: string;
  ftp_password: string;
  path: string;
  ps: string;
};
declare type SoftQuery = {
  p?: number;
  type?: number;
  query?: string;
};
```