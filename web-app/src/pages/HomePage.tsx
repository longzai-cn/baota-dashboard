import PageContainer from "@/common/PageContainer";
import ServerCardList from "@/features/server/components/ServerCardList";
import { HomeOutlined, GithubOutlined } from "@ant-design/icons";
import { Button, Typography, Divider, Space } from "antd";

const { Title } = Typography;

const HomePage: React.FC = () => {
  return (
    <PageContainer name="概览">
      <Title level={3}>LZ·宝塔群控面板 - Baota Dashboard</Title>
      <Typography.Paragraph>
        基于 React + Ant Design + Hox
        的宝塔面板，纯静态项目，支持多节点，数据存储在本地浏览器，不依赖于第三方服务。
      </Typography.Paragraph>
      <Space size="small">
        <Button type="text" size="small" icon={<HomeOutlined />}>在线演示</Button>
        <Button type="text" size="small" icon={<GithubOutlined />} onClick={()=>{
          window.open('https://github.com/longzai-cn/baota-dashboard', '_blank');
        }}>代码仓库</Button>
      </Space>
      <Divider />
      <ServerCardList />
    </PageContainer>
  );
};

export default HomePage;
