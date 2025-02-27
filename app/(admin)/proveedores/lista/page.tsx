'use client'
import React, { useEffect } from "react";
import { Pageable, PageableResponse, SuppliersContentResponse } from "../../services/suppliers";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchGetSuppliers } from "@/app/store/thunk/supplierThunk";
import PaginationComponent from "@/app/components/PaginationComponent";

const ListaPage = () => {
  const dispatch = useAppDispatch();
  const supplierState = useAppSelector((state) => state.supplier);
  const [suppliers, setSuppliers] = React.useState<SuppliersContentResponse[]>([]);
  const [paging, setPaging] = React.useState<PageableResponse>({} as PageableResponse);

  useEffect(() => {  
    setSuppliers(supplierState.supplierList.content);
    setPaging(supplierState.supplierList.page);
  }, [supplierState.supplierList]);
  
  const handleFetchSuppliers = (paging: Pageable) => {
    dispatch(fetchGetSuppliers( paging ));
  };

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
                <th>Nombre</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Dirección</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="myTable">
              {suppliers &&
                suppliers.map((supplier) => (
                  <tr key={supplier.uuid}>
                    <td>{supplier.name}</td>
                    <td>{supplier.email}</td>
                    <td>{supplier.phone}</td>
                    <td>{supplier.address}</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger mx-2">
                        Eliminar
                      </button>
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
          fetchData={handleFetchSuppliers}
        />
      </div>
    </div>
  );
}
export default ListaPage;
