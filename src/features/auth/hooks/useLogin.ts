import { useMutation } from "@tanstack/react-query";
import { login } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

export function useLogin() {

  const setToken = useAuthStore(
    state => state.setToken
  );

  return useMutation({
    mutationFn: login,

    onSuccess: (resutl) => {
      setToken(resutl.data.token);
    }
  });
}