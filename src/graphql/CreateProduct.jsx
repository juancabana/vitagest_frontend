import React, { useState } from "react";
import imgProviders from "./../core/assets/img/icons8-hombre-en-la-caja-del-producto-red-jacket-100.png";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import GET_PRODUCT from "./getProducts.graphql";

const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $category: String!, $price: Float!) {
    createProduct(
      product: { name: $name, category: $category, price: $price }
    ) {
      name
      category
      price
    }
  }
`;

const CreateProduct = () => {
  const [mostrarFormAdd, setMostrarFormAdd] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCT }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createProduct({
      variables: {
        name,
        price,
        category,
      },
    });

    setName("");
    setCategory("");
    setPrice("");
  };

  const addProduct = () => {
    setMostrarFormAdd(!mostrarFormAdd);
    createProduct({
      variables: {
        name,
        price: Number(price),
        category,
      },
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se ha guardado el producto correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
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
            <form onSubmit={handleSubmit} className="form-create">
              <div>
                <div>
                  <h2 className="h1-form">Insertar producto</h2>
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
                  <label className="label-form">Categoria: </label>
                  <input
                    className="form-control"
                    name="category"
                    type="text"
                    required
                    value={category}
                    onChange={(evt) => setCategory(evt.target.value)}
                    placeholder="Categoria"
                  />
                </div>
                <div className="wrapper-label-form">
                  <label className="label-form">Precio del producto: </label>
                  <input
                    className="form-control"
                    name="price"
                    type="number"
                    required
                    value={price}
                    onChange={(evt) => setPrice(parseFloat(evt.target.value))}
                    placeholder="precio del producto (En pesos)"
                  />
                </div>
              </div>

              <div>
                <button
                  className="button-form"
                  type="submit"
                  value="Submit"
                  onClick={() => addProduct()}
                >
                  Insertar
                </button>
                <button
                  className="button-form"
                  onClick={() => setMostrarFormAdd(!mostrarFormAdd)}
                >
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

export default CreateProduct;
