import React, { useState } from "react";
import imgUsers from "./../core/assets/img/icons8-usuario-100.png";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import GET_USERS from "./getUsers.graphql";

const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $password: String!
    $age: Float
    $phoneNumber: Float!
    $country: String
  ) {
    createUser(
      user: {
        firstName: $firstName
        lastName: $lastName
        password: $password
        age: $age
        phoneNumber: $phoneNumber
        country: $country
      }
    ) {
      firstName
      lastName
      password
      age
      phoneNumber
      country
    }
  }
`;

const CreateUser = () => {
  const [mostrarFormAdd, setMostrarFormAdd] = useState(false);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [country, setcountry] = useState("");

  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser({
      variables: {
        firstName,
        lastName,
        password,
        age: Number(age),
        phoneNumber,
        country,
      },
    });

    setfirstName("");
    setlastName("");
    setpassword("");
    setage("");
    setphoneNumber("");
    setcountry("");
  };

  const addProduct = () => {
    setMostrarFormAdd(!mostrarFormAdd);
    createUser({
      variables: {
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
      title: "Se ha guardado el usuario correctamente",
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
                  <h2 className="h1-form">Insertar usuario</h2>
                </div>
                <div className="wrapper-icon-rigth">
                  <img src={imgUsers} alt="Logo" />
                </div>
              </div>

              <div>
                <div className="wrapper-label-form">
                  <label className="label-form">Primer nombre: </label>
                  <input
                    className="form-control form-control-input"
                    name="firstName"
                    type="text"
                    value={firstName}
                    required
                    onChange={(evt) => setfirstName(evt.target.value)}
                    placeholder="Firstname"
                  />
                </div>

                <div className="wrapper-label-form">
                  <label className="label-form">Apellido: </label>
                  <input
                    className="form-control"
                    name="lastName"
                    type="text"
                    required
                    value={lastName}
                    onChange={(evt) => setlastName(evt.target.value)}
                    placeholder="Last name"
                  />
                </div>
                <div className="wrapper-label-form">
                  <label className="label-form">Contraseña: </label>
                  <input
                    className="form-control"
                    name="password"
                    type="text"
                    required
                    value={password}
                    onChange={(evt) => setpassword(evt.target.value)}
                    placeholder="Password"
                  />
                </div>

                <div className="wrapper-label-form">
                  <label className="label-form">Edad: </label>
                  <input
                    className="form-control"
                    name="age"
                    required
                    type="number"
                    value={age}
                    onChange={(evt) => setage(parseFloat(evt.target.value))}
                    placeholder="Age"
                    // onChange={this.handleChange}
                  />
                </div>

                <div className="wrapper-label-form">
                  <label className="label-form">Numero de telefono: </label>
                  <input
                    className="form-control"
                    name="phoneNumber"
                    required
                    type="number"
                    value={phoneNumber}
                    onChange={(evt) =>
                      setphoneNumber(parseFloat(evt.target.value))
                    }
                    placeholder="Phone number"
                    // onChange={this.handleChange}
                  />
                </div>

                <div className="wrapper-label-form">
                  <label className="label-form">Pais:</label>
                  <input
                    className="form-control"
                    name="country"
                    required
                    type="text"
                    value={country}
                    placeholder="Country"
                    onChange={(evt) => setcountry(evt.target.value)}
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

export default CreateUser;
