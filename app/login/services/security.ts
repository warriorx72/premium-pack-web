const API_BASE_URL = "http://127.0.0.1:8080/api/v1";

export interface LoginResponse {
  user_name: string;
  expiration_date: Date;
  token: string;
}

export interface LoginBffResponse {
  user_name: string;
  expiration_date: Date;
}
export const fetchLogin = async (username: string, password: string): Promise<LoginResponse> => {
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));
  const res = await fetch(`${API_BASE_URL}/security/signin`, {
    method: "POST",
    headers: headers
  });
  if (!res.ok) {
    throw new Error('Error fetching');
  }
  const response = await res.json() as LoginResponse;
  return response;
};

export const fetchBffLogin = async (username: string, password: string): Promise<LoginBffResponse> => {
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));
  const res = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: headers
  });
  if (!res.ok) {
    console.error('Error fetching todos')
    return {} as LoginBffResponse;
  }
  const response = await res.json() as LoginBffResponse;
  return response;
};