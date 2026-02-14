import { useRoutes } from "react-router-dom";
import { dashboardRoutes } from "./routes/dashboard-routes";

function App() {
  return useRoutes(dashboardRoutes);
}

export default App;
