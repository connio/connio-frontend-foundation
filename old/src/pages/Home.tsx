import { Layout, PageHeader } from "antd";
import FlowEditor from "../components/floweditor/FlowEditor";

const { Content } = Layout;

function Home() {
  return (
    <Content>
      <FlowEditor />
    </Content>
  );
}

export default Home;
