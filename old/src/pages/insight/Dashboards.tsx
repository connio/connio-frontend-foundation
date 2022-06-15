import { Layout, PageHeader } from "antd";

const { Content } = Layout;

const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];

function Dashboards() {
  const config = {
    data,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  // see https://dev.to/maneetgoyal/using-apache-echarts-with-react-and-typescript-353k

  return (
    <Content>
      <PageHeader onBack={() => null} title="Dashboards" />
      {/* <Line {...config} /> */}
    </Content>
  );
}

export default Dashboards;
