import { Layout, Breadcrumb, theme } from "antd";
import config from "@/config";

const { Content, Footer } = Layout;

type Props = {
  name: string;
  children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ name, children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: config.name }, { title: name }]}
      />
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: 10
        }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>{config.copyright}</Footer>
    </>
  );
};

export default PageContainer;
