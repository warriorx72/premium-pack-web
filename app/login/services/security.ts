import { axiosBaas, axiosBff } from "@/app/api/axiosInstance";


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
  const res = await axiosBaas.post(`/security/signin`, null, { headers: { Authorization: "Basic " + btoa(username + ":" + password) } });
  if (res.status !== 200) {
    throw new Error('Error fetching');
  }
  const loginResponse = await res.data as LoginResponse;
  return loginResponse;
};

export const fetchBffLogin = async (username: string, password: string): Promise<LoginBffResponse> => {
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));
  const res = await axiosBff.post(`/auth/login`, null, { headers: { Authorization: "Basic " + btoa(username + ":" + password) } });
  if (res.status !== 200) {
    return {} as LoginBffResponse;
  }
  const response = await res.data as LoginBffResponse;
  return response;
};