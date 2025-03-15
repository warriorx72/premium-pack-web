import { UUID } from "crypto";
import { ProductInputs } from "../productos/registrar/page";
import { axiosBaas, axiosBff } from "@/app/api/axiosInstance";
import axios from "axios";
import { Pageable } from "./suppliers";

export interface ProductResponse {
  name: string;
  uuid: UUID;
}

export interface ProductContentResponse {
  uuid: UUID;
  name: string;
  description: string;
  quantity: number;
  price: number;
  id_supplier: UUID;
  name_supplier: string;
}

export interface PageableResponse {
  size: number;
  number: number;
  total_elements: number;
  total_pages: number;
}

export interface ProductsResponse {
  content: ProductContentResponse[];
  page: PageableResponse;
}

export const postProduct = async (supplierInputs: ProductInputs, token: string): Promise<ProductResponse> => {
  try {
    const res = await axiosBaas.post(`/product`, supplierInputs, { headers: { Authorization: "Bearer " + token } });
    return await res.data as ProductResponse;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      console.error(err);
      throw new Error('Error fetching');
    }
  }
};

export const postBffProduct = async (supplierInputs: ProductInputs): Promise<ProductResponse> => {
  try {
    const res = await axiosBff.post(`/product`, supplierInputs);
    return await res.data as ProductResponse;
  } catch (err) {
    console.error(err);
    return {} as ProductResponse;
  }
};

export const getProducts = async (pageable: Pageable, token: string): Promise<ProductsResponse> => {
  try {
    const res = await axiosBaas.get(`/product`, { headers: { Authorization: "Bearer " + token }, params: pageable });
    return await res.data as ProductsResponse;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      console.error(err);
      throw new Error('Error fetching');
    }
  }
};

export const getBffProducts = async (pageable: Pageable): Promise<ProductsResponse> => {
  try {
    const res = await axiosBff.get(`/product`, { params: pageable });
    return await res.data as ProductsResponse;
  } catch (err) {
    console.error(err);
    return {} as ProductsResponse;
  }
};

export const putProduct = async (id: UUID, productInputs: ProductInputs, token: string): Promise<ProductContentResponse> => {
  try {
    const res = await axiosBaas.put(`/product/${id}`, productInputs, { headers: { Authorization: "Bearer " + token } });
    return await res.data as ProductContentResponse;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      console.error(err);
      throw new Error('Error fetching');
    }
  }
};

export const putBffProduct = async (id : UUID, productInputs: ProductInputs): Promise<ProductContentResponse> => {
  try {
    const res = await axiosBff.put(`/product/${id}`, productInputs);
    return await res.data as ProductContentResponse;
  } catch (err) {
    console.error(err);
    return {} as ProductContentResponse;
  }
};

export const deleteProduct = async (id: UUID, token: string): Promise<ProductResponse> => {
  try {
    const res = await axiosBaas.delete(`/product/${id}`, { headers: { Authorization: "Bearer " + token } });
    return await res.data as ProductResponse;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      console.error(err);
      throw new Error('Error fetching');
    }
  }
};

export const deleteBffProduct = async (id : UUID): Promise<ProductResponse> => {
  try {
    const res = await axiosBff.delete(`/product/${id}`);
    return await res.data as ProductResponse;
  } catch (err) {
    console.error(err);
    return {} as ProductResponse;
  }
};

