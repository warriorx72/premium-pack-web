'use client'
import PaginationComponent from "@/app/components/PaginationComponent";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import React, { useEffect } from "react";
import { OrderResponse, PageableResponse } from "../../services/orders";
import { UUID } from "crypto";
import { Pageable, SortEnum } from "../../services/suppliers";
import { fetchGetOrders } from "@/app/store/thunk/orderThunks";
import { useRouter } from "next/navigation";

const ListaPage = () => {

  const dispatch = useAppDispatch();
  const orderState = useAppSelector((state) => state.order);
  const router = useRouter();
  const [orders, setOrders] = React.useState<OrderResponse[]>([]);
  const [paging, setPaging] = React.useState<PageableResponse>({} as PageableResponse);

  useEffect(() => {
    setOrders(orderState.orderList.content);
    setPaging(orderState.orderList.page);
  }, [orderState.orderList]);

  const handleFetchOrders = (paging: Pageable) => {
    dispatch(fetchGetOrders(paging));
  };

  const handleUpdateOrder = (id: UUID) => {
    router.push(`/pedidos/${id}`);
  }

  const dateTimeFormatter = (date: Date) => {
    const dateFormat: string = date.toString().split('T')[0];
    const timeFormat: string = date.toString().split('T')[1].split('.')[0];
    return `${dateFormat} ${timeFormat}`;
  }

  return (
    <div className="container p-5 mx-auto mt-5 flex-column justify-content-center rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%' }}>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>No. Pedido</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Teléfono</th>
                <th>Estado</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="myTable">
              {orders?.map((order) => (
                <tr key={order.uuid}>
                  <td>{order.uuid}</td>
                  <td>{dateTimeFormatter(order.date)}</td>
                  <td>{order.customer_name}</td>
                  <td>{order.phone}</td>
                  <td>{order.status}</td>
                  <td>{order.total}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleUpdateOrder(order.uuid)}>Actualizar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PaginationComponent
          size={paging?.size}
          number={paging?.number}
          total_elements={paging?.total_elements}
          total_pages={paging?.total_pages}
          fetchData={handleFetchOrders}
          sort={SortEnum.date}
        />
      </div>
    </div>
  )
}
export default ListaPage
