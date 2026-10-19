// import { useState } from "react";
// import { useLogin } from "../hooks/useLogin";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const loginMutation = useLogin();

//   const handleLogin = () => {
//     loginMutation.mutate({
//       username,
//       password
//     });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />

//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />

//       <button
//         onClick={handleLogin}
//         disabled={loginMutation.isPending}
//       >
//         {loginMutation.isPending ? "Logging in..." : "Login"}
//       </button>
//     </div>
//   );
// }

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLogin();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname ?? "/dashboard";

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      await loginMutation.mutateAsync({
        username,
        password,
      });

      // Chỉ chuyển trang khi đăng nhập thành công.
      navigate(from, { replace: true });
    } catch {
      // Lỗi được hiển thị bên dưới form.
      // Không chuyển trang khi đăng nhập thất bại.
    }
  }

  return (
    <div>
      <h1>Payroll Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />
        </div>

        {loginMutation.isError && (
          <p role="alert">
            Đăng nhập thất bại. Vui lòng kiểm tra tài khoản
            hoặc kết nối API.
          </p>
        )}

        <button
          type="submit"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending
            ? "Đang đăng nhập..."
            : "Login"}
        </button>
      </form>
    </div>
  );
}