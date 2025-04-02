import { axiosBaas, axiosBff } from "@/app/api/axiosInstance";
import { Pageable } from "./suppliers";
import { UUID } from "crypto";
import axios from "axios";
import { OrderInputs } from "../pedidos/[id]/page";

export enum OrderStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
    COMPLETED = 'COMPLETED',
}

export interface OrderResponse {
    uuid: UUID;
    id_text: string;
    date: Date;
    customer_name: string;
    phone: string;
    description: string;
    status: OrderStatus;
    total: number;
}

export interface PageableResponse {
    size: number;
    number: number;
    total_elements: number;
    total_pages: number;
}


export interface OrdersResponse {
    content: OrderResponse[];
    page: PageableResponse;
}

export const getOrders = async (pageable: Pageable, token: string): Promise<OrdersResponse> => {
    try {
        const res = await axiosBaas.get(`/order`, { headers: { Authorization: "Bearer " + token }, params: pageable });
        return await res.data as OrdersResponse;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw err;
        } else {
            console.error(err);
            throw new Error('Error fetching');
        }
    }
};

export const getBffOrders = async (pageable: Pageable): Promise<OrdersResponse> => {
    try {
        const res = await axiosBff.get(`/order`, { params: pageable });
        return await res.data as OrdersResponse;
    } catch (err) {
        console.error(err);
        return {} as OrdersResponse;
    }
};

export const getSales = async (pageable: Pageable, token: string): Promise<OrdersResponse> => {
    try {
        const res = await axiosBaas.get(`/order/sales`, { headers: { Authorization: "Bearer " + token }, params: pageable });
        return await res.data as OrdersResponse;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw err;
        } else {
            console.error(err);
            throw new Error('Error fetching');
        }
    }
};

export const getBffSales = async (pageable: Pageable): Promise<OrdersResponse> => {
    try {
        const res = await axiosBff.get(`/order/sales`, { params: pageable });
        return await res.data as OrdersResponse;
    } catch (err) {
        console.error(err);
        return {} as OrdersResponse;
    }
};

export const putOrder = async (id: UUID, orderInputs: OrderInputs, token: string): Promise<OrderResponse> => {
    try {
      const res = await axiosBaas.put(`/order/${id}`, orderInputs, { headers: { Authorization: "Bearer " + token } });
      return await res.data as OrderResponse;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw err;
      } else {
        console.error(err);
        throw new Error('Error fetching');
      }
    }
  };
  
  export const putBffOrder = async (id: UUID, orderInputs: OrderInputs): Promise<OrderInputs> => {
    try {
      const res = await axiosBff.put(`/order/${id}`, orderInputs);
      return await res.data as OrderInputs;
    } catch (err) {
      console.error(err);
      return {} as OrderInputs;
    }
  };