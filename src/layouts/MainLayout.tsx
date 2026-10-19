import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header>
        <h2>Payroll System</h2>
      </header>

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {" | "}
        <NavLink to="/employees">Employees</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}