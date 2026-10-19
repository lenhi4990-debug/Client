// authApi.ts

import {infrastructureApi} from "@/lib/axios"; "@/lib/axios";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export async function login(
  request: LoginRequest
): Promise<LoginResponse> {

  const response = await infrastructureApi.post<LoginResponse>(
    "/us/account/auth/paytime",
    request
  );

  return response.data;
}