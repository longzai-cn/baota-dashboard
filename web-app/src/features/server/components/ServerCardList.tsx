import config from "@/config";
import ServerCard from "@/features/server/components/ServerCard";
import { Space } from "antd";
import { VIRTUAL_MOCK_SERVER } from "./ServerCard/virtual-mock-server.config";
import { getServerStore } from "@/features/server/common/server.store";

export default function ServerCardList() {
  const { servers } = getServerStore()!;
  return (
    <Space direction="horizontal" wrap={true} size={16}>
      {config.showMockServer && <ServerCard server={VIRTUAL_MOCK_SERVER} />}
      {config.showDefaultServer && <ServerCard server={config.defaultServer} />}
      {servers.map((server) => (
        <ServerCard key={server.id} server={server} polling={false} />
      ))}
    </Space>
  );
}
