import { Navigate } from "react-router";
import { Paths } from "@/app/router/paths.ts";

function App() {
  return <Navigate to={Paths.protected.dashboard} replace />;
}

export default App;
