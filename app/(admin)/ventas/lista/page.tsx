'use client'
import PaginationComponent from "@/app/components/PaginationComponent";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import React, { useEffect } from "react";
import { OrderResponse, PageableResponse } from "../../services/orders";
import { fetchGetSales } from "@/app/store/thunk/orderThunks";
import { Pageable, SortEnum } from "../../services/suppliers";

const ListaPage = () => {

    const dispatch = useAppDispatch();
    const saleState = useAppSelector((state) => state.order);
    const [sales, setSales] = React.useState<OrderResponse[]>([]);
    const [paging, setPaging] = React.useState<PageableResponse>({} as PageableResponse);
  
    useEffect(() => {
      setSales(saleState.saleList.content);
      setPaging(saleState.saleList.page);
    }, [saleState.saleList]);
  
    const handleFetchSales = (paging: Pageable) => {
      dispatch(fetchGetSales(paging));
    };
  
    const dateTimeFormatter = (date: Date) => {
      const dateFormat: string = date.toString().split('T')[0];
      const timeFormat: string = date.toString().split('T')[1].split('.')[0];
      return `${dateFormat} ${timeFormat}`;
    }

  return (
    <div
      className="container p-5 mx-auto mt-5 flex-column justify-content-center rounded shadow container-fluid justify-content-center align-items-center"
      style={{ maxWidth: "1800px", width: "100%" }}
    >
      <div className="row">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody id="myTable">
              {sales?.map((sale) => (
                <tr key={sale.uuid}>
                  <td>{sale.uuid}</td>
                  <td>{dateTimeFormatter(sale.date)}</td>
                  <td>{sale.customer_name}</td>
                  <td>{sale.total}</td>
                  <td>{sale.description}</td>
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
          fetchData={handleFetchSales}
          sort={SortEnum.date}
        />
      </div>
    </div>
  );
};
export default ListaPage;
