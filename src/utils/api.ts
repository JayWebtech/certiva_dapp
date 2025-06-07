export interface AdminLoginResponse {
  token?: string;
  message?: string;
  [key: string]: any;
}

export async function adminLogin(
  email: string,
  password: string,
): Promise<AdminLoginResponse> {
  const endpoint =
    process.env.NEXT_PUBLIC_ADMIN_LOGIN_ENDPOINT || "/auth/admin/login";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    return data;
  } catch (error: any) {
    return { message: error.message || "Network error" };
  }
}
