import { Layout, Tabs } from "antd";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const { TabPane } = Tabs;

function Datasets() {
  const { id } = useParams();

  return (
    <Content>
      <Tabs
        onChange={() => null}
        type="card"
        style={{ backgroundColor: "ghostwhite" }}
      >
        <TabPane tab={`Dataset ${id}`} key={id}>
          Dataset Tab Pane {id}
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default Datasets;
