import { Layout } from "antd";
import SiderLogo from "@/common/SiderLogo";
import SiderMenu from "@/common/SiderMenu";
import { Outlet } from "react-router-dom";

const { Sider } = Layout;

const PageLayout: React.FC = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <SiderLogo></SiderLogo>
          <SiderMenu></SiderMenu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Outlet />
        </Layout>
      </Layout>
    </>
  );
};

export default PageLayout;
