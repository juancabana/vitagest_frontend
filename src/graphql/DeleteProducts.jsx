import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import GET_PRODUCTS from "./getProducts.graphql";

const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

const DeleteProduct = (props) => {
  const [mostrarFormDelete, setMostrarFormDelete] = useState(false);

  const id = props.id;
  const name = props.name;

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const handleSubmitDelete = (e) => {
    e.preventDefault();

    deleteProduct({
      variables: {
        id: props.id,
      },
    });
  };

  const deleteProducts = () => {
    setMostrarFormDelete(!mostrarFormDelete);
    deleteProduct({
      variables: {
        id,
      },
    });
  };
  return (
    <>
      <button
        className="buttondelete"
        onClick={() => setMostrarFormDelete(!mostrarFormDelete)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="M7.95 19.05H16.075Q16.075 19.05 16.075 19.05Q16.075 19.05 16.075 19.05V8.925H7.95V19.05Q7.95 19.05 7.95 19.05Q7.95 19.05 7.95 19.05ZM5.075 5.925V4.05H8.525L9.525 3.05H14.475L15.475 4.05H18.95V5.925ZM7.95 20.925Q7.175 20.925 6.625 20.375Q6.075 19.825 6.075 19.05V7.05H17.95V19.05Q17.95 19.825 17.387 20.375Q16.825 20.925 16.075 20.925ZM7.95 19.05H16.075Q16.075 19.05 16.075 19.05Q16.075 19.05 16.075 19.05H7.95Q7.95 19.05 7.95 19.05Q7.95 19.05 7.95 19.05Z" />
        </svg>
      </button>

      <div className={mostrarFormDelete ? "show-element" : null}>
        {mostrarFormDelete && (
          <div>
            <div className="wrapper-form">
              <form onSubmit={handleSubmitDelete} className="form-delete">
                <div></div>
                <div className="confirmationMessage">
                  <h3 className="message-delete">
                    ¿Estás seguro de querer eliminar el producto {name}?
                  </h3>
                </div>

                <div>
                  <button
                    className="button-form"
                    type="submit"
                    value="Submit"
                    onClick={() =>
                      deleteProducts({ variables: { id: props.id } })
                    }
                  >
                    Eliminar
                  </button>

                  <button
                    className="button-form"
                    onClick={() => setMostrarFormDelete(!mostrarFormDelete)}
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

export default DeleteProduct;
