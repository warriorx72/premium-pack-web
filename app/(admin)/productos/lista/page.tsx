'use client'
import PaginationComponent from "@/app/components/PaginationComponent";
import React, { useEffect } from "react";
import { PageableResponse, ProductContentResponse } from "../../services/products";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchDeleteProduct, fetchGetProducts } from "@/app/store/thunk/productThunk";
import { Pageable } from "../../services/suppliers";
import ModalComponent, { ModalData } from "@/app/components/ModalComponent";
import { useRouter } from "next/navigation";
import { UUID } from "crypto";
import { deleteProduct } from "@/app/store/slice/productSlice";

const ListaPage = () => {

  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product);
  const router = useRouter();
  const [products, setProducts] = React.useState<ProductContentResponse[]>([]);
  const [paging, setPaging] = React.useState<PageableResponse>({} as PageableResponse);
  const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
  const [id, setId] = React.useState<UUID | undefined>();

  useEffect(() => {
    setProducts(productState.productList.content);
    setPaging(productState.productList.page);
  }, [productState.productList]);

  const handleFetchProducts = (paging: Pageable) => {
    dispatch(fetchGetProducts(paging));
  };

  const handleDeleteProduct = (id: UUID) => {
    dispatch(fetchDeleteProduct(id));
    setIsModalActive(false);
    dispatch(deleteProduct(id));
  };

  const handleOpenModal = (id: UUID) => {
    setIsModalActive(true);
    setId(id);
  }

  const handleUpdateProduct = (id: UUID) => {
    router.push(`/productos/${id}`);
  }

  return (
    <div className="container p-5 mx-auto mt-5 flex-column justify-content-center rounded shadow container-fluid justify-content-center align-items-center" style={{ maxWidth: '1800px', width: '100%' }}>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Proveedor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="myTable">
              {products?.map((product) => (
                <tr key={product.uuid}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.name_supplier}</td>
                  <td>
                  <button type="button" className="btn btn-primary" onClick={() => handleUpdateProduct(product.uuid)} >
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger mx-2" onClick={() => handleOpenModal(product.uuid)}>
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
          fetchData={handleFetchProducts}
        />
        <ModalComponent
          data={products?.find((product) => product.uuid === id) as ModalData}
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          handleAction={handleDeleteProduct}
        />
      </div>
    </div>
  )
}
export default ListaPage;
