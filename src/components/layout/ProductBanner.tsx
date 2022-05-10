import { Typography } from "antd";

const { Title } = Typography;

export interface ProductBannerProps {
  companyName: string;
  productLogoUrl: string;
  productName: string;
  productLogoAlt: string;
}

const ProductBanner = (props: ProductBannerProps) => {
  return (
    <div style={{ display: "flex" }}>
      <a href="/">
        <div style={{ display: "flex", gap: 0 }}>
          <img
            style={{ width: "2rem", height: "2rem" }}
            src={props.productLogoUrl}
            alt={props.productLogoAlt}
          />
          <Title
            style={{
              color: "white",
              fontWeight: "lighter",
              height: "2rem",
              padding: ".1rem .3rem .1rem 0",
              borderRight: "1px dotted grey",
            }}
            level={4}
          >
            {props.companyName}
          </Title>
        </div>
      </a>
      <Title
        style={{
          color: "white",
          fontWeight: "lighter",
          height: "2rem",
          padding: ".1rem .4rem",
        }}
        level={4}
      >
        {props.productName}
      </Title>
    </div>
  );
};

export default ProductBanner;
