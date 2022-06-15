import { Layout, MenuProps } from "antd";
import ProductBanner from "./ProductBanner";
import HeaderRightMenu from "./HeaderRightMenu";
import "./Header.css";

export interface HeaderProps {
  companyName: string;
  productLogoUrl: string;
  productName: string;
  productLogoAlt: string;
  rightMenuItems: Required<MenuProps>["items"][number][];
}

const Header = (props: HeaderProps) => {
  return (
    <Layout.Header className="header">
      <ProductBanner
        companyName={props.companyName}
        productLogoUrl={props.productLogoUrl}
        productName={props.productName}
        productLogoAlt={props.productLogoAlt}
      />
      <HeaderRightMenu items={props.rightMenuItems} />
    </Layout.Header>
  );
};

export default Header;
