'use client'
import React, { useEffect } from "react";
import { Pageable, PageableResponse, SortEnum, SuppliersContentResponse } from "../../services/suppliers";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchDeleteSupplier, fetchGetSuppliers } from "@/app/store/thunk/supplierThunk";
import PaginationComponent from "@/app/components/PaginationComponent";
import { UUID } from "crypto";
import ModalComponent, { ModalData } from "@/app/components/ModalComponent";
import { useRouter } from "next/navigation";
import { deleteSupplier } from "@/app/store/slice/supplierSlice";

const ListaPage = () => {
  const dispatch = useAppDispatch();
  const supplierState = useAppSelector((state) => state.supplier);
  const [suppliers, setSuppliers] = React.useState<SuppliersContentResponse[]>([]);
  const [paging, setPaging] = React.useState<PageableResponse>({} as PageableResponse);
  const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
  const [id, setId] = React.useState<UUID | undefined>();

  useEffect(() => {
    setSuppliers(supplierState.supplierList.content);
    setPaging(supplierState.supplierList.page);
  }, [supplierState.supplierList]);

  const handleFetchSuppliers = (paging: Pageable) => {
    dispatch(fetchGetSuppliers(paging));
  };

  const handleDeleteSupplier = (id: UUID) => {
    dispatch(fetchDeleteSupplier(id));
    setIsModalActive(false);
    dispatch(deleteSupplier(id));
  };

  const handleOpenModal = (id: UUID) => {
    setIsModalActive(true);
    setId(id);
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
                      <button type="button" className="btn btn-danger mx-2" onClick={() => handleOpenModal(supplier.uuid)}>
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
        <ModalComponent
          data={suppliers?.find((supplier) => supplier.uuid === id) as ModalData}
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          handleAction={handleDeleteSupplier} 
        />
      </div>
    </div>
  );
}
export default ListaPage;
