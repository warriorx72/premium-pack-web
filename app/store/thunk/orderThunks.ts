import { OrderInputs } from "@/app/(admin)/pedidos/[id]/page";
import { getBffOrders, getBffSales, putBffOrder } from "@/app/(admin)/services/orders";
import { Pageable } from "@/app/(admin)/services/suppliers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UUID } from "crypto";

const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

export const fetchGetOrders = createAsyncThunk(
    'order/fetchGetOrders/:loading',
    async (pageable: Pageable) => {
        const response = await getBffOrders(pageable)
        await wait(1000);
        return response
    },
)

export const fetchGetSales = createAsyncThunk(
    'order/fetchGetSales/:loading',
    async (pageable: Pageable) => {
        const response = await getBffSales(pageable)
        await wait(1000);
        return response
    },
)

export const fetchUpdateOrder = createAsyncThunk(
    'order/fetchUpdateOrder/:loading',
    async ({ id, orderInputs } :{ id: UUID, orderInputs: OrderInputs }) => {
        const response = await putBffOrder(id, orderInputs)
        await wait(1000);
        return response
    },
)

