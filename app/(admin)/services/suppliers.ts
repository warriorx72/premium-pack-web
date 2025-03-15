import { UUID } from "crypto";
import { SupplierInputs } from "../proveedores/registrar/page";
import { axiosBaas, axiosBff } from "@/app/api/axiosInstance";
import axios from "axios";


export interface SupplierResponse {
    name: string;
    uuid: UUID;
}

export interface SuppliersContentResponse {
  uuid: UUID;
  name: string;
  address: string;
  email: string;
  phone: string;
}

export interface PageableResponse {
  size: number;
  number: number;
  total_elements: number;
  total_pages: number;
}

export interface SuppliersResponse {
  content: SuppliersContentResponse[];
  page: PageableResponse;
}

export enum SortEnum {
  name = "name",
  address = "address",
  email = "email",
  phone = "phone",
}

export interface Pageable {
  page: number;
  size: number;
  sort: SortEnum;
}

export interface ErrorResponse {
  code: string;
  uuid: UUID;
  path: string;
  timestamp: string;
}

export const postSupplier = async (supplierInputs: SupplierInputs, token: string): Promise<SupplierResponse> => {
  try {
    const res = await axiosBaas.post(`/supplier`, supplierInputs, { headers: { Authorization: "Bearer " + token } });
    return await res.data as SupplierResponse;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      console.error(err);
      throw new Error('Error fetching');
    }
  }
};

export const postBffSupplier = async (supplierInputs: SupplierInputs): Promise<SupplierResponse> => {
  try {
    const res = await axiosBff.post(`/supplier`, supplierInputs);
    return await res.data as SupplierResponse;
  } catch (err) {
    console.error(err);
    return {} as SupplierResponse;
  }
};

export const getSuppliers = async (pageable: Pageable, token: string): Promise<SuppliersResponse> => {
  const res = await axiosBaas.get(`/supplier`, { headers: { Authorization: "Bearer " + token }, params: pageable });
  if (res.status !== 200) {
    throw new Error('Error fetching');
  }
  return await res.data as SuppliersResponse;
};

export const getBffSuppliers = async (pageable: Pageable): Promise<SuppliersResponse> => {
  const res = await axiosBff.get(`/supplier`, { params: pageable });
  if (res.status !== 200) {
    throw new Error('Error fetching');
  }
  return await res.data as SuppliersResponse;
};

export const deleteSupplier = async (id: UUID, token: string): Promise<SupplierResponse> => {
  try {
    const res = await axiosBaas.delete(`/supplier/${id}`, { headers: { Authorization: "Bearer " + token } });
    return await res.data as SupplierResponse;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      throw new Error('Error fetching');
    }
  }
};

export const deleteBffSupplier = async (id: UUID): Promise<SupplierResponse> => {
  try {
    const res = await axiosBff.delete(`/supplier/${id}`);
    return await res.data as SupplierResponse;
  } catch (err) {
    console.error(err);
    return {} as SupplierResponse;
  }
};

export const putSupplier = async (id: UUID, supplierInputs: SupplierInputs, token: string): Promise<SupplierResponse> => {
  try {
    const res = await axiosBaas.put(`/supplier/${id}`, supplierInputs, { headers: { Authorization: "Bearer " + token } });
    return await res.data as SupplierResponse;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      console.error(err);
      throw new Error('Error fetching');
    }
  }
};

export const putBffSupplier = async (id: UUID, supplierInputs: SupplierInputs): Promise<SupplierResponse> => {
  try {
    const res = await axiosBff.put(`/supplier/${id}`, supplierInputs);
    return await res.data as SupplierResponse;
  } catch (err) {
    console.error(err);
    return {} as SupplierResponse;
  }
};

export const getSuppliersByName = async (name: string, token: string): Promise<SuppliersContentResponse[]> => {
  const res = await axiosBaas.get(`/supplier/find`, { headers: { Authorization: "Bearer " + token }, params: { name } });
  if (res.status !== 200) {
    throw new Error('Error fetching');
  }
  return await res.data as SuppliersContentResponse[];
};

export const getBffSuppliersByName = async (name: string): Promise<SuppliersContentResponse[]> => {
  const res = await axiosBff.get(`/supplier/find`, { params: { name } });
  if (res.status !== 200) {
    throw new Error('Error fetching');
  }
  return await res.data as SuppliersContentResponse[];
};

