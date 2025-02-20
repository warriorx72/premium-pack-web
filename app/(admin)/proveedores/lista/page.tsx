import React from "react";

const ListaPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="table-responsive p-4 px-4 mt-4 rounded shadow container-fluid d-flex justify-content-center align-items-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Productos</th>
                <th>Dirección</th>
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
                tabIndex="-1"
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
  );
};
export default ListaPage;
