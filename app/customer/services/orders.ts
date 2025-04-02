import { OrderResponse } from "@/app/(admin)/services/orders";
import { axiosBaas, axiosBff } from "@/app/api/axiosInstance";
import axios from "axios";

export interface OrderRequest {
    customer_name: string;
    phone: string;
    description: string;
}

export const postOrders = async (rq: OrderRequest): Promise<OrderResponse> => {
    try {
        const res = await axiosBaas.post(`/order`, rq);
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

export const postBffOrders = async (rq: OrderRequest): Promise<OrderResponse> => {
    try {
        const res = await axiosBff.post(`/order`, rq);
        return await res.data as OrderResponse;
    } catch (err) {
        console.error(err);
        return {} as OrderResponse;
    }
};