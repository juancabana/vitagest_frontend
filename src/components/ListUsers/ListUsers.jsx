import React from "react";
// componentes
import "../TopBarUsers/TopBarUsers.css";
import GET_USERS from "../../graphql/getUsers.graphql";
import UpdateUser from "../../graphql/UpdateUser.graphql";
import DeleteUser from "../../graphql/DeleteUser";
import imgUsers from "./../../core/assets/img/icons8-usuario-100.png";
import CreateUser from "../../graphql/CreateUser.graphql";

// estilos
import "./../TopBarProducts/TopBarProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListUsers.css";
import { useState } from "react";

import { useQuery } from "@apollo/client";

// Mutations

const ListUsers = () => {
  // const [mostrarFormEdit, setMostrarFormEdit] = useState(false);

  const { data, error, loading } = useQuery(GET_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error... {error.message}</h1>;

  return (
    <>
     <div className="TopBarUsers">
        <div className="wrapper-buttons">
         
        <CreateUser/>
        </div>

        <div className="wrapper-h1">
          <h1 className="h1-title">Gestionar usuarios</h1>
          <div className="wrapper-icon-rigth">
            <img src={imgUsers} alt="Logo" />
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
      <div className="ListUsers">
        <div className="containerUsers">
          <table className="tableUsers">
            <tr className="headerTableUsers">
              <th className="subtitle-list">ID</th>
              <th className="subtitle-list">PRIMER NOMBRE</th>
              <th className="subtitle-list">APELLIDO</th>
              <th className="subtitle-list">EDAD</th>
              <th className="subtitle-list">TELEFONO</th>
              <th className="subtitle-list">PAÍS</th>
              <th className="subtitle-list">ACTIONS</th>
            </tr>
            {data &&
              data.users.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((user) => (
                <tr className="contenttableUsers" key={user._id}>
                  <td className="content-table content-table-id">{user._id}</td>
                  <td className="content-table">{user.firstName}</td>
                  <td className="content-table">{user.lastName}</td>
                  <td className="content-table">{user.age}</td>
                  <td className="content-table">{user.phoneNumber}</td>
                  <td className="content-table">{user.country}</td>
                  <td className="containerbuttons">
                    <UpdateUser
                      id={user._id}
                      firstName={user.firstName}
                      lastName={user.lastName}
                      password={user.password}
                      age={user.age}
                      phoneNumber={user.phoneNumber}
                      country={user.country}
                    />
                    <DeleteUser
                      id={user._id}
                      firstName={user.firstName}
                      lastName={user.lastName}
                    />
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
