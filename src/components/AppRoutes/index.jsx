import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Settings from "../../pages/Settings";
import Dashboard from "../../pages/Dashboard";
import Users from "../../pages/Users";
import NotFound from "../../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* DefaultLayout */}
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
        </Route>

        {/* AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* Handle 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
