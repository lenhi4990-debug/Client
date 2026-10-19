import { useAuth } from "../../auth/hooks/useAuth";

export default function DashboardPage() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Payroll Dashboard</h1>

      <p>Welcome to the Payroll System.</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}