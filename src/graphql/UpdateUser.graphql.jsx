import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import GET_USERS from "./getUsers.graphql";
import Swal from "sweetalert2";

const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $password: String!
    $age: Float
    $phoneNumber: Float!
    $country: String
  ) {
    updateUser(
      id: $id
      user: {
        firstName: $firstName
        lastName: $lastName
        password: $password
        age: $age
        phoneNumber: $phoneNumber
        country: $country
      }
    ) {
      _id
      firstName
      lastName
      password
      age
      country
    }
  }
`;
const UpdateUser = (props) => {
  const [mostrarFormEdit, setMostrarFormEdit] = useState(false);

  const id = props.id;
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [country, setcountry] = useState("");

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    updateUser({
      variables: {
        id: props.id,
        firstName,
        lastName,
        password,
        age,
        phoneNumber,
        country,
      },
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se ha actualizado el proveedor correctamente",
      showConfirmButton: false,
      timer: 1500,
    });

    setfirstName("");
    setlastName("");
    setpassword("");
    setage();
    setphoneNumber();
    setcountry("");
  };

  const editProduct = () => {
    setMostrarFormEdit(!mostrarFormEdit);
    updateUser({
      variables: {
        id,
        firstName,
        lastName,
        password,
        age: Number(age),
        phoneNumber: Number(phoneNumber),
        country,
      },
    });
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
                    <h2 className="h1-form">Editar usuario</h2>
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
                    <label className="label-form">Primer nombre: </label>
                    <input
                      className="form-control form-control-input"
                      name="firstName"
                      type="text"
                      required
                      onChange={(evt) => setfirstName(evt.target.value)}
                      placeholder={props.firstName}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>

                  <div className="wrapper-label-form">
                    <label className="label-form">Apellido: </label>
                    <input
                      className="form-control"
                      name="lastName"
                      type="text"
                      required
                      onChange={(evt) => setlastName(evt.target.value)}
                      placeholder={props.lastName}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>
                  <div className="wrapper-label-form">
                    <label className="label-form">Contraseña: </label>
                    <input
                      className="form-control"
                      name="password"
                      type="text"
                      required
                      onChange={(evt) => setpassword(evt.target.value)}
                      placeholder={props.password}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>

                  <div className="wrapper-label-form">
                    <label className="label-form">Edad: </label>
                    <input
                      className="form-control"
                      name="age"
                      required
                      type="number"
                      onChange={(evt) => setage(parseInt(evt.target.value))}
                      placeholder={props.age}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>

                  <div className="wrapper-label-form">
                    <label className="label-form">Numero de telefono: </label>
                    <input
                      className="form-control"
                      name="phoneNumber"
                      required
                      type="number"
                      onChange={(evt) =>
                        setphoneNumber(parseInt(evt.target.value))
                      }
                      placeholder={props.phoneNumber}
                      onSubmit={handleSubmitAdd}
                    />
                  </div>

                  <div className="wrapper-label-form">
                    <label className="label-form">Pais:</label>
                    <input
                      className="form-control"
                      name="country"
                      required
                      type="text"
                      placeholder={props.country}
                      onSubmit={handleSubmitAdd}
                      onChange={(evt) => setcountry(evt.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    className="button-form"
                    type="submit"
                    value="Submit"
                    onClick={() => editProduct()}
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

export default UpdateUser;
