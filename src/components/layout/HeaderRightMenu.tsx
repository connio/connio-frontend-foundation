import { useState } from "react";
import { Button, Menu, MenuProps, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  GlobalOutlined,
  SearchOutlined,
  BellOutlined,
  AppstoreAddOutlined,
  QuestionOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { AddNewEntity } from "../svg/IconsSvg";

export interface HeaderRightMenuProps {
  items: Required<MenuProps>["items"][number][];
}

const HeaderRightMenu = (props: HeaderRightMenuProps) => {
  let navigate = useNavigate();

  const onMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  const menu = (
    <Menu
      onClick={onMenuClick}
      mode={"inline"}
      theme={"light"}
      items={props.items}
    />
  );

  const [ddState, setDDState] = useState({
    selection: [false, false, false, false, false],
    position: 0,
  });

  const removeDropDown = () => {
    let selection = [false, false, false, false, false];
    let position: number = 0;
    setDDState({ selection, position });
  };

  const setDropDown = (index: number, position: number) => {
    /* user, help, notif, feedback, addnew, search*/
    let selection = [false, false, false, false, false];
    if (!ddState.selection[index]) {
      selection[index] = true;
      setDDState({ selection, position });
    }
    selection[index] = !ddState.selection[index];
    setDDState({ selection, position });
  };

  const onClicked = (idx: number) => {
    setDropDown(idx, idx * 32);
  };

  const onSearch = () => {
    console.log("search...");
  };

  const onBlur = () => {
    console.log("blur");
    removeDropDown();
  };

  const setClasses = () => {
    return ddState.selection.filter((i) => i).length > 0
      ? "header-nav-dropdown active"
      : "header-nav-dropdown";
  };

  return (
    <nav className="header-nav">
      <Button className="header-nav-button" type="link">
        <SearchOutlined style={{ fontSize: "large" }} onClick={onSearch} />
      </Button>
      <Button className="header-nav-button" type="link">
        <Dropdown overlay={menu} placement="bottomRight">
          <PlusOutlined style={{ fontSize: "large" }} />
        </Dropdown>
      </Button>
      {/* <Button className="header-nav-button" type="link">
        <MessageOutlined
          style={{ fontSize: "large" }}
          onClick={(_) => onClicked(3)}
        />
      </Button> */}
      <Button className="header-nav-button" type="link">
        <BellOutlined
          style={{ fontSize: "large" }}
          onClick={(_) => onClicked(2)}
        />
      </Button>
      <Button className="header-nav-button" type="link">
        <QuestionOutlined
          style={{ fontSize: "large" }}
          onClick={(_) => onClicked(1)}
        />
      </Button>
      <Button className="header-nav-button" type="link">
        <UserOutlined
          style={{ fontSize: "large" }}
          onClick={(_) => onClicked(0)}
        />
      </Button>
      <Button className="header-nav-button" type="link" hidden>
        <GlobalOutlined
          style={{ fontSize: "large" }}
          onClick={(_) => onClicked(-1)}
        />
      </Button>
      <div
        className={setClasses()}
        style={{ right: ddState.position }}
        onBlur={onBlur}
      />
    </nav>
  );
};

export default HeaderRightMenu;
