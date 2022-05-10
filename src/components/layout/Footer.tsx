import { Typography, Space, Divider, Layout } from "antd";

const { Text, Link } = Typography;

const Footer = () => {
  const COMPANY_WEBSITE_URL = "https://connio.com";
  const COPYRIGHT = `© ${new Date().getFullYear()} Connio Inc.`;

  const VERSION = "4.0.0-alpha1";
  const SNAPSHOT = "e32112601";
  const TERMS_URL = "https://connio.com/legal/internet-of-things-tos.html";
  const PP_LINK_URL =
    "https://connio.com/legal/internet-of-things-privacy.html";
  const BLOG_URL = "https://www.connio.com/blog";
  const PRICING_URL = "https://www.connio.com/cloud-internet-of-things.html";
  const CAREERS_URL = "https://www.connio.com/company/iot-m2m-jobs.html";
  const STATUS_URL = "https://www.connio.com/status";
  const DOCS_URL = "https://docs.connio.com";
  const TUTOR_URL = "https://docs.connio.com/docs";

  const release = `UI version: ${VERSION} (snapshot; ${SNAPSHOT})`;

  const copyright = () => (
    <Link
      style={{ fontWeight: 100 }}
      href={COMPANY_WEBSITE_URL}
      target="_blank"
    >
      {COPYRIGHT}
    </Link>
  );

  const softwareRelease = () => (
    <Text style={{ fontSize: ".6rem" }} type="secondary">
      {release}
    </Text>
  );

  const footerInfo1 = () => (
    <Space direction="vertical" size={2}>
      <Space size={0} split={<Divider type="vertical" />}>
        {copyright()}
      </Space>
      {softwareRelease()}
    </Space>
  );

  const footerInfo2 = () => (
    <Space direction="vertical" size={2}>
      <Space size={0} split={<Divider type="vertical" />}>
        <Link style={{ fontWeight: 100 }} href={BLOG_URL} target="_blank">
          Blog
        </Link>

        <Link style={{ fontWeight: 100 }} href={PRICING_URL} target="_blank">
          Pricing
        </Link>

        <Link style={{ fontWeight: 100 }} href={CAREERS_URL} target="_blank">
          Careers
        </Link>

        <Link style={{ fontWeight: 100 }} href={STATUS_URL} target="_blank">
          Status
        </Link>

        <Link style={{ fontWeight: 100 }} href={DOCS_URL} target="_blank">
          Docs
        </Link>

        <Link style={{ fontWeight: 100 }} href={TUTOR_URL} target="_blank">
          Tutorials
        </Link>

        <Link style={{ fontWeight: 100 }} href={TERMS_URL} target="_blank">
          Terms
        </Link>

        <Link style={{ fontWeight: 100 }} href={PP_LINK_URL} target="_blank">
          Privacy Policy
        </Link>
      </Space>
    </Space>
  );

  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        lineHeight: "0.6rem",
        height: "35px",
        padding: "5px",
        fontSize: "0.65rem",
        borderTop: "1px solid ghostwhite",
      }}
    >
      {footerInfo2()}
    </Layout.Footer>
  );
};

export default Footer;
