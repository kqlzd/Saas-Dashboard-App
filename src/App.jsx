import { useRoutes } from "react-router-dom";
import { dashboardRoutes } from "./routes/dashboard-routes";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return <AuthProvider>{useRoutes(dashboardRoutes)}</AuthProvider>;
}

export default App;
