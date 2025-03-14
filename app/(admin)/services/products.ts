import { UUID } from "crypto";
import { ProductInputs } from "../productos/registrar/page";
import { axiosBaas, axiosBff } from "@/app/api/axiosInstance";
import axios from "axios";

export interface ProductResponse {
    name: string;
    uuid: UUID;
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