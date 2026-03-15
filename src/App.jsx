import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { AuthContext } from "./context/AuthContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Dashboard Pages
import DashboardHome from "./dashboard/DashboardHome";
import MyHosting from "./dashboard/MyHosting";
import Domains from "./dashboard/Domains";
import Billing from "./dashboard/Billing";

function App() {

  return (

    <AuthContext.Provider value={{}}>

      <BrowserRouter>

        <Routes>

          {/* Landing Website */}
          <Route path="/" element={<Home />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Layout */}
          <Route path="/dashboard" element={<Dashboard />}>

            <Route index element={<DashboardHome />} />

            <Route path="hosting" element={<MyHosting />} />

            <Route path="domains" element={<Domains />} />

            <Route path="billing" element={<Billing />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </AuthContext.Provider>

  );

}

export default App;