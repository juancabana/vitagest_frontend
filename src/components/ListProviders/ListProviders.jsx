import React from "react";
import "../TopBarProviders/TopBarProviders.css";

import "./../TopBarProviders/TopBarProviders.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProvider from "../../graphql/CreateProvider";
import imgProvider from "./../../core/assets/img/icons8-hombre-en-la-caja-del-producto-red-jacket-100.png";



import { useState } from "react";

import "./ListProviders.css";
import { useQuery } from "@apollo/client";

import GET_PROVIDERS from "../../graphql/getProviders.graphql";
import DeleteProvider from "../../graphql/DeleteProvider";
import UpdateProvider from "../../graphql/UpdateProvider";



const ListProviders = () => {
  const { data, error, loading } = useQuery(GET_PROVIDERS);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>`Error... ${error.message}`</h1>;
  
    return (
      <>
       <div className="TopBarProviders">
        <div className="wrapper-buttons">
         <CreateProvider/>


        </div>

        <div className="wrapper-h1">
          <h1 className="h1-title">Gestionar proveedores</h1>
          <div className="wrapper-icon-rigth">
            <img src={imgProvider} alt="Logo" />
          </div>
        </div>

        <div className="wrapper-search">
          <input
            className="input-search"
            type="search"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          
          />
        </div>
      </div>



        <div className="ListProviders">
          <div className="containerProviders">
            <table className="tableProviders">
              <tr className="headerTableProviders">
                <th className="subtitle-list">ID</th>
                <th className="subtitle-list">NOMBRE</th>
                <th className="subtitle-list">EXPERIENCIA</th>
                <th className="subtitle-list">DIRECCIÓN</th>
                <th className="subtitle-list">NEGOCIO</th>
                <th className="subtitle-list">ACTIONS</th>
              </tr>
              {data && data.suppliers
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((provider) => (
                <tr className="contenttableProviders">
                  <td className="content-table">{provider._id}</td>
                  <td className="content-table">{provider.name}</td>
                  <td className="content-table">{provider.experience} años</td>
                  <td className="content-table-location">{provider.location}</td>
                  <td className="content-table">{provider.business}</td>
                  <td className="containerbuttons">
                    <UpdateProvider id={provider._id} name={provider.name} experience={provider.experience} location={provider.location} business={provider.business} />
                    
                    {/* <button
                      className="buttonedit"
                      // onClick={() => this.mostrarModalEditar(provider)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                      >
                        <path d="M10.15 20.7 14.025 16.825H21.95V20.7ZM3.95 18.825H5.25L15.275 8.85L14.6 8.175L13.925 7.5L3.95 17.525ZM2.075 20.7V16.725L15.275 3.55Q15.8 3 16.587 3Q17.375 3 17.925 3.55L19.225 4.9Q19.775 5.425 19.775 6.2Q19.775 6.975 19.225 7.5L6.05 20.7ZM17.9 6.2 16.575 4.875ZM15.275 8.85 14.6 8.175 13.925 7.5 15.275 8.85Z" />
                      </svg>
                    </button> */}
                    <DeleteProvider id={provider._id} name={provider.name}/>
                   
                  </td>
                </tr>
              ))}
            </table>
          </div>

          {/* <Modal 
          // isOpen={this.state.modalInsertar}
          >
            <ModalHeader>
              <div>
                <h3>Insertar proveedor</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>Id: </label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  // value={this.state.data.length + 1}
                />
              </FormGroup>

              <FormGroup>
                <label>Nombre: </label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  // onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>experiencia: </label>
                <input
                  className="form-control"
                  name="experiencia"
                  type="float"
                  // onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>ciudad: </label>
                <input
                  className="form-control"
                  name="ciudad"
                  type="text"
                  // onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>producto: </label>
                <input
                  className="form-control"
                  name="negocio"
                  type="text"
                  // onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button 
              // onClick={() => this.insertar()}
              >Insertar</Button>
              <Button 
              // onClick={() => this.ocultarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
          // isOpen={this.state.modalEditar}
          >
            <ModalHeader>
              <div>
                <h3>Editar registro</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>Id: </label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  // value={this.state.form.id}
                />
              </FormGroup>

              <FormGroup>
                <label>Nombre: </label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  // onChange={this.handleChange}
                  // value={this.state.form.nombre}
                />
              </FormGroup>

              <FormGroup>
                <label>experiencia: </label>
                <input
                  className="form-control"
                  name="experiencia"
                  type="float"
                  // onChange={this.handleChange}
                  // value={this.state.form.experiencia}
                />
              </FormGroup>

              <FormGroup>
                <label>ciudad: </label>
                <input
                  className="form-control"
                  name="ciudad"
                  type="text"
                  // onChange={this.handleChange}
                  // value={this.state.form.ciudad}
                />
              </FormGroup>
              <FormGroup>
                <label>producto: </label>
                <input
                  className="form-control"
                  name="negocio"
                  type="text"
                  // onChange={this.handleChange}
                  // value={this.state.form.negocio}
                />
              </FormGroup>
              
            </ModalBody>

            <ModalFooter>
              <Button 
              // onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button 
              // onClick={() => this.ocultarModalEditar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal> */}
        </div>
      </>
    );
}

export default ListProviders;
