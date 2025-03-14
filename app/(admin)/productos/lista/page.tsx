import React from "react";

const ListaPage = () => {
  return (
    <div className="container p-5 mx-auto mt-5 flex-column justify-content-center rounded shadow container-fluid justify-content-center align-items-center" style={{maxWidth: '1800px', width: '100%'}}>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Producto</th>
                <th>Especificaciones</th>
                <th>Proveedores</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody id="myTable">
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr className="success">
                <td>5</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Pagination">
          <ul className="pagination px-4 mt-4 justify-content-start">
            <li className="page-item disabled">
              <a
                className="page-link bg-dark text-white border-dark"
                href="#"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link bg-dark text-white border-dark" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link bg-black text-white border-dark" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link bg-dark text-white border-dark" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link bg-dark text-white border-dark" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
 )
}
export default ListaPage;
