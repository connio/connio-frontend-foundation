import { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

export interface SidebarProps {
  items: Required<MenuProps>["items"][number][];
}

const SideBar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();
  // let { id } = useParams();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      theme="light"
    >
      <Menu
        onClick={onClick}
        // defaultOpenKeys={["sub1"]}
        defaultSelectedKeys={["1"]}
        mode={"inline"}
        theme={"light"}
        items={props.items}
      />
    </Sider>
  );
};

export default SideBar;
