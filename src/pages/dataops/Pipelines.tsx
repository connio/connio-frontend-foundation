import { Layout, Tabs } from "antd";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const { TabPane } = Tabs;

function Pipelines() {
  const { id } = useParams();

  return (
    <Content>
      <Tabs
        onChange={() => null}
        type="card"
        style={{ backgroundColor: "ghostwhite" }}
      >
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane {id}
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane {id}
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane {id}
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default Pipelines;
