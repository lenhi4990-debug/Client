import { useAuthStore } from "../store/authStore";

export function useAuth() {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const accessToken = useAuthStore(
    (state) => state.accessToken
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  return {
    isAuthenticated,
    accessToken,
    logout,
  };
}