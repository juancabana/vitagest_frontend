import React, { useState } from "react";
import imgProviders from './../core/assets/img/icons8-hombre-en-la-caja-del-producto-red-jacket-100.png'
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import GET_PROVIDERS from "./getProviders.graphql";


const CREATE_PROVIDER = gql`
  mutation createSupplier(
    $name: String!
    $location: String!
    $experience: Float!
    $business: String!

  ) {
    createSupplier(
      supplier: {
        name: $name
        location: $location
        experience: $experience
        business: $business
  
      }
    ) {
      name
      location
      experience
      business

    }
  }
`;

const CreateProvider = () => {
  const [mostrarFormAdd, setMostrarFormAdd] = useState(false);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [business, setBusiness] = useState("");


  const [createProvider] = useMutation(CREATE_PROVIDER, {
    refetchQueries: [{query: GET_PROVIDERS}]
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createProvider({
      variables: {
        name,
        experience,
        location,
        business,

      },
    });

    setName("");
    setExperience("");
    setLocation("");
    setBusiness("");

  };



  const addProvider = () => {
    setMostrarFormAdd(!mostrarFormAdd);
    createProvider({
      variables: {

        name,
        experience: Number(experience),
        location,
        business,

      },
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha guardado el proveedor correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  };
  return (
    <>
          
      <button
        className="button-new"
        onClick={() => setMostrarFormAdd(!mostrarFormAdd)}
      >
        <svg
          className="svg-add"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19Z" />
        </svg>
        <h2 className="h2New">New</h2>
      </button>

      <div className={mostrarFormAdd ? "show-element" : null}>
        {mostrarFormAdd && (
          <div className="wrapper-form">
            <form
              onSubmit={handleSubmit}
              className="form-create"
            >
              <div>
                <div>
                  <h2 className="h1-form">Insertar proveedor</h2>
                </div>
                <div className="wrapper-icon-rigth">
                  <img src={imgProviders} alt="Logo" />
                </div>
              </div>

              <div>
                <div className="wrapper-label-form">
                  <label className="label-form">Nombre: </label>
                  <input
                    className="form-control form-control-input"
                    name="name"
                    type="text"
                    value={name}
                    required
                    onChange={(evt) => setName(evt.target.value)}
                    placeholder="Nombre"
                  />
                </div>

        
                <div className="wrapper-label-form">
                  <label className="label-form">Dirección: </label>
                  <input
                    className="form-control"
                    name="location"
                    type="text"
                    required
                    value={location}
                    onChange={(evt) => setLocation(evt.target.value)}
                    placeholder="Dirección"
                  />
                </div>
                <div className="wrapper-label-form">
                  <label className="label-form">Años de experiencia: </label>
                  <input
                    className="form-control"
                    name="experience"
                    type="number"
                    required
                    value={experience}
                    onChange={(evt) => setExperience( parseFloat(evt.target.value) )}
                    placeholder="Años de experiencia"
                  />
                </div>

                <div className="wrapper-label-form">
                  <label className="label-form">Tipo de negocio: </label>
                  <input
                    className="form-control"
                    name="business"
                    required
                    type="text"
                    value={business}
                    onChange={(evt) => setBusiness(evt.target.value)}
                    placeholder="Tipo negocio"
                    // onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>
                <button

                className="button-form"
                type="submit"
                value="Submit"
                onClick={() => addProvider()}

                >Insertar</button>
                <button className="button-form" onClick={() => setMostrarFormAdd(!mostrarFormAdd)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateProvider;
