// app/router.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";

import LoginPage from "@/features/auth/pages/loginPage";
 import DashboardPage from "@/features/dashboard/pages/DashboardPage";
// import EmployeePage from "../features/employee/pages/EmployeePage";
import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "@/features/auth/components/protectedRoute";
import { employeeRoutes } from "@/features/employee/employee.routes";
export const router = createBrowserRouter([
    {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
         ...employeeRoutes
        ]
      }
    ]
  }
]);