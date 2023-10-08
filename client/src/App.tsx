import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./features/Auth/components/Login";
import Dashboard from "./features/Dashboard/components/Dashboard";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
