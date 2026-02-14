// import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { dashboardRoutes } from "./routes/dashboard-routes";

function AppRoutes() {
  return useRoutes(dashboardRoutes);
}

function App() {
  return <AppRoutes />;
}

export default App;
