import { Layout as AntdLayout, Collapse } from "antd";
import Icon, { AppstoreOutlined } from "@ant-design/icons";
import {  Database, Integrations1, Device} from "../svg/IconsSvg";
import { FlowNode } from "./FlowNode";

const { Content } = AntdLayout;
const { Panel } = Collapse;

const flowNodeSourcesColor = "rgb(166, 187, 207)";
const flowNodeTargetsColor = "rgb(226, 217, 110)";

const sourceNodes = (
  <div className="flow-node-container">
    <FlowNode label={"Sources"} icon={<Icon component={Database} />} color={flowNodeSourcesColor} type="input" />
    <FlowNode label={"Devices"} icon={<Icon component={Device} />} color={flowNodeSourcesColor} type="input"/>
    <FlowNode label={"Apps"} icon={<AppstoreOutlined/>} color={flowNodeSourcesColor} type="input"/>
  </div>
);

const targetNodes = (
  <div className="flow-node-container">
   <FlowNode label={"Target"} icon={<Icon component={Integrations1} />} color={flowNodeTargetsColor} type="output" />
  </div>
);

function FlowEditorPalette() {
  return (
      <Collapse className="flow-editor-palette"
        bordered={true}
        defaultActiveKey={["1"]}        
      >
        <Panel className="panel" header="Data Sources" key="1">
          {sourceNodes}
        </Panel>        
        <Panel className="panel" header="Data Targets" key="3">
          {targetNodes}
        </Panel>
        <Panel className="panel" header="Entities" key="2">
          {targetNodes}
        </Panel>
        <Panel className="panel" header="Functions" key="4">
          {targetNodes}
        </Panel>
        <Panel className="panel" header="Simulators" key="5">
          {targetNodes}
        </Panel>
      </Collapse>
  );
}

export default FlowEditorPalette;
