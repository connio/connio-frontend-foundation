import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import ConnectionHubs from "./pages/ConnectionHubs";
import DataMesh from "./pages/DataMesh";
import {
  Pipelines,
  Datasets,
  DataFlows,
  DataTypes,
  DataLinks,
  Triggers,
} from "./pages/dataops/DataOps";
import {
  DeviceDesigner,
  PlaceDesigner,
  AssetDesigner,
  SIMCardDesigner,
  ValueDesigner,
} from "./pages/designers/Designers";
import {
  Announcements,
  Users,
  Preferences,
  Security,
  Integrations,
} from "./pages/settings/Settings";
import { Assets, Devices, Places, SIMCards } from "./pages/assets/Assets";
import {
  Dashboards,
  ScadaHMI,
  MLModels,
  Reports,
} from "./pages/insight/Insight";
import MarketPlace from "./pages/MarketPlace";
import NotFound from "./pages/NotFound";
//
// import { ThisProduct } from "./config/DefaultAppConfig";
import { ThisProduct } from "./config/DataMeshAppConfig";
//
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout config={ThisProduct} />}>
        <Route index element={<Home />} />

        <Route path="hubs" element={<ConnectionHubs />} />
        <Route path="mesh" element={<DataMesh />} />

        <Route path="apps" element={<Apps />} />

        <Route path="assets/devices" element={<Devices />} />
        <Route path="assets/places" element={<Places />} />
        <Route path="assets/simcards" element={<SIMCards />} />
        <Route path="assets/other" element={<Assets />} />

        <Route path="dataops/pipelines" element={<Pipelines />} />
        <Route path="dataops/pipelines/:id" element={<Pipelines />} />

        <Route path="dataops/datasets" element={<Datasets />} />
        <Route path="dataops/datasets/:id" element={<Datasets />} />

        <Route path="dataops/flows" element={<DataFlows />} />
        <Route path="dataops/flows/:id" element={<DataFlows />} />

        <Route path="dataops/types" element={<DataTypes />} />
        <Route path="dataops/links" element={<DataLinks />} />
        <Route path="dataops/triggers" element={<Triggers />} />

        <Route path="insight/dashboards" element={<Dashboards />} />
        <Route path="insight/scada_hmi" element={<ScadaHMI />} />
        <Route path="insight/reports" element={<Reports />} />
        <Route path="insight/mlmodels" element={<MLModels />} />

        <Route path="designers/device" element={<DeviceDesigner />} />
        <Route path="designers/place" element={<PlaceDesigner />} />
        <Route path="designers/simcard" element={<SIMCardDesigner />} />
        <Route path="designers/asset" element={<AssetDesigner />} />
        <Route path="designers/value" element={<ValueDesigner />} />

        <Route path="marketplace" element={<MarketPlace />} />

        <Route path="settings/users" element={<Users />} />
        <Route path="settings/security" element={<Security />} />
        <Route path="settings/preferences" element={<Preferences />} />
        <Route path="settings/announcements" element={<Announcements />} />
        <Route path="settings/integrations" element={<Integrations />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
