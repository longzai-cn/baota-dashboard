import { Menu } from "antd";
import {
  HomeOutlined,
  DesktopOutlined,
  ApartmentOutlined,
  TeamOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const SiderMenu: React.FC = () => {
  const getItem = (
    label: React.ReactNode,
    url: string,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label: <Link to={url}>{label}</Link>,
    } as MenuItem;
  };

  const items: MenuItem[] = [
    getItem("概览", "/", "0", <HomeOutlined />),
    getItem("服务器", "/servers", "1", <ApartmentOutlined />),
    getItem("网站", "/websites", "2", <DesktopOutlined />),
    getItem("域名", "/domains", "3", <TeamOutlined />),
    getItem("日志", "/logs", "4", <BarsOutlined />),
  ];

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["0"]}
      mode="inline"
      items={items}
    />
  );
};

export default SiderMenu;
