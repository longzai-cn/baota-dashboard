import { Card } from "antd";
import { useEffect, useState } from "react";
import { BaotaAPIClient } from "@longzai-cn/baota-api-client";
import { ServerCardProps } from "./server-card-props.type";
import { isDevelopment } from "@/utils/environment";
import * as dayjs from "dayjs";
import type {
  TaskCountResult,
  SystemTotalResult,
} from "@longzai-cn/baota-api-client";

const ServerCard: React.FC<ServerCardProps> = ({ server, polling = false }) => {
  const [refreshKey, setRefreshKey] = useState(1);
  const [taskCount, setTaskCount] = useState<TaskCountResult | undefined>();
  const [systemTotal, setSystemTotal] = useState<
    SystemTotalResult | undefined
  >();
  const [lastUpdated, setLastUpdated] = useState<Date>();
  const [errorMesssage, setErrorMessage] = useState("");

  const doRefresh = () => setRefreshKey(refreshKey + 1);

  useEffect(() => {
    const config = {
      host: server.host,
      key: server.key,
      debug: isDevelopment,
    };
    const baota = new BaotaAPIClient(config);
    baota
      .getTaskCount()
      .then((res) => {
        setTaskCount(res);
        setLastUpdated(new Date());
        setErrorMessage("");
      })
      .catch((e) => {
        setErrorMessage("发生错误");
        console.error("error", e);
      });
    baota
      .getSystemTotal()
      .then((res) => {
        setSystemTotal(res);
        setLastUpdated(new Date());
        setErrorMessage("");
      })
      .catch((e) => {
        setErrorMessage("发生错误");
        console.error("error", e);
      });
  }, [server.host, server.key, refreshKey]);

  const ShowNumber = (title: string, count: number | undefined) => {
    if (count === undefined) {
      return title;
    }
    return `${title}(${count})`;
  };

  return (
    <Card
      size="small"
      title={server.name}
      style={{ width: 400 }}
      bodyStyle={{
        fontSize: 12
      }}
      actions={[
        ShowNumber("任务", taskCount),
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            doRefresh();
          }}
        >
          刷新
        </a>,
      ]}
    >
      {systemTotal && (
        <>
          <p>操作系统信息: {systemTotal.system}</p>
          <p>面板版本: {systemTotal.version}</p>
          <p>上次开机到现在经过的时间: {systemTotal.time}</p>
          <p>CPU 核心数: {systemTotal.cpuNum}</p>
          <p>CPU 使用率 (百分比): {systemTotal.cpuRealUsed}</p>
          <p>物理内存容量 (MB): {systemTotal.memTotal}</p>
          <p>已使用的物理内存 (MB): {systemTotal.memRealUsed}</p>
          <p>可用的物理内存 (MB): {systemTotal.memFree}</p>
          <p>缓存化的内存 (MB): {systemTotal.memCached}</p>
          <p>系统缓冲 (MB): {systemTotal.memBuffers}</p>
        </>
      )}
      <p>
        最后更新:{" "}
        {errorMesssage && <span style={{ color: "red" }}>{errorMesssage}</span>}
        {!errorMesssage && lastUpdated
          ? dayjs(lastUpdated).format("YYYY-MM-DD HH:mm:ss")
          : "尚未更新"}
      </p>
    </Card>
  );
};

export default ServerCard;
