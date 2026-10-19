export const getHeaderGlobal = (): Record<string, string> => {
  const accessToken = localStorage.getItem("accessToken");

  const loginRaw = localStorage.getItem("login");
  const adminRaw = localStorage.getItem("adminLogin");

  let login = loginRaw ? JSON.parse(loginRaw) : null;

  if (login == null) {
    login = adminRaw ? JSON.parse(adminRaw) : null;
  }

  return {
    Accept: "application/json;odata=verbose",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=utf-8",
    AuthToken: accessToken || "",
    Mode: String(login?.mode ?? ""),
    CompanyId: String(login?.companyId ?? ""),
  };
};