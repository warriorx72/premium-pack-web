import { UUID } from "crypto";
import { SupplierInputs } from "../proveedores/registrar/page";
import { axiosBaas, axiosBff } from "@/app/api/axiosInstance";


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

export interface Pageable  {
  page: number;
  size: number;
  sort: SortEnum;
}

export const postSupplier = async (supplierInputs: SupplierInputs, token: string): Promise<SupplierResponse> => {
  const res = await axiosBaas.post(`/supplier`, supplierInputs, { headers: { Authorization: "Bearer " + token } });
  if (res.status !== 200) {
    throw new Error('Error fetching');
  }
  return await res.data as SupplierResponse;
};

export const postBffSupplier = async (supplierInputs: SupplierInputs): Promise<SupplierResponse> => {
  const res = await axiosBff.post(`/supplier`, supplierInputs);
  if (res.status !== 200) {
    return {} as SupplierResponse;
  }
  return await res.data as SupplierResponse;
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