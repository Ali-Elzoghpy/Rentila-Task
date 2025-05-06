import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/Shared/NotFound/NotFound";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Properties from "./Components/Properties/Properties";
import ProtectedRoute from "./Components/Shared/ProtectedRoute/ProtectedRoute";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider";
import Tenant from "./Components/Tenant/Tenant";
import TenantDetails from "./Components/TenantDetails/TenantDetails";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      errorElement: <NotFound />,
      element: <WelcomePage />,
    },

    {
      path: "landlord",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "properties", element: <Properties /> },
        { path: "tenants", element: <Tenant /> },
      ],
    },
    {
      path: "tenantDetails/:id",
      element: (
        <ProtectedRoute>
          <TenantDetails />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
