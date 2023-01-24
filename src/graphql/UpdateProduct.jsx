import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import GET_PRODUCTS from "./getProducts.graphql";
import Swal from "sweetalert2";

const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: ID!
    $name: String!
    $category: String!
    $price: Float
  ) {
    updateProduct(
      id: $id
      product: { name: $name, category: $category, price: $price }
    ) {
      _id
      name
      category
      price
    }
  }
`;
const UpdateProductbyid = (props) => {
  const [mostrarFormEdit, setMostrarFormEdit] = useState(false);

  const id = props.id;
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();

  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const handleSubmitAdd = async (e) => {
    e.preventDefault();

    await updateProduct({
      variables: {
        id: id,
        name: name,
        category: category,
        price: price,
      },
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se ha actualizado el producto correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    setMostrarFormEdit(!mostrarFormEdit);
  };

  return (
    <>
      <button
        className="buttonedit"
        onClick={() => setMostrarFormEdit(!mostrarFormEdit)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="M10.15 20.7 14.025 16.825H21.95V20.7ZM3.95 18.825H5.25L15.275 8.85L14.6 8.175L13.925 7.5L3.95 17.525ZM2.075 20.7V16.725L15.275 3.55Q15.8 3 16.587 3Q17.375 3 17.925 3.55L19.225 4.9Q19.775 5.425 19.775 6.2Q19.775 6.975 19.225 7.5L6.05 20.7ZM17.9 6.2 16.575 4.875ZM15.275 8.85 14.6 8.175 13.925 7.5 15.275 8.85Z" />
        </svg>
      </button>

      <div className={mostrarFormEdit ? "show-element" : null}>
        {mostrarFormEdit && (
          <div>
            <div className="wrapper-form">
              <form onSubmit={handleSubmitAdd} className="form-create">
                <div>
                  <div>
                    <h2 className="h1-form">Editar proveedor</h2>
                  </div>
                  <div className="wrapper-icon-rigth"></div>
                </div>

                <div>
                  <div className="wrapper-label-form">
                    <label className="label-form">ID: </label>
                    <input
                      className="form-control form-control-input"
                      name="id"
                      type="number"
                      value={id}
                      readOnly
                      placeholder={props.id}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>

                  <div className="wrapper-label-form">
                    <label className="label-form">Nombre: </label>
                    <input
                      className="form-control form-control-input"
                      name="name"
                      type="text"
                      required
                      onChange={(evt) => setName(evt.target.value)}
                      placeholder={props.name}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>

                  <div className="wrapper-label-form">
                    <label className="label-form">Categoria: </label>
                    <input
                      className="form-control"
                      name="category"
                      type="text"
                      required
                      onChange={(evt) => setCategory(evt.target.value)}
                      placeholder={props.category}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>
                  <div className="wrapper-label-form">
                    <label className="label-form">Precio del producto: </label>
                    <input
                      className="form-control"
                      name="price"
                      type="number"
                      required
                      onChange={(evt) => setPrice(parseFloat(evt.target.value))}
                      placeholder={props.price}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>
                </div>

                <div>
                  <button
                    className="button-form"
                    type="submit"
                    value="Submit"
                    // onClick={() => editProvider()}
                  >
                    Editar
                  </button>

                  <button
                    className="button-form"
                    onClick={() => setMostrarFormEdit(!mostrarFormEdit)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateProductbyid;
