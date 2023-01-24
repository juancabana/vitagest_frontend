import React from "react";
import "./../TopBarProducts/TopBarProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateProduct from "../../graphql/UpdateProduct";
import imgProduct from "./../../core/assets/img/icons8-producto-usado-100.png";
import CreateProduct from "../../graphql/CreateProduct";
import "./../TopBarProducts/TopBarProducts.css";

import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import "./ListProducts.css";
import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "../../graphql/getProducts.graphql";
import DeleteProduct from "../../graphql/DeleteProducts";

import { useState } from "react";

const ListProducts = () => {
  const { data, error, loading } = useQuery(GET_PRODUCTS);

  const [searchTerm, setSearchTerm] = useState("");
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>`Error... ${error.message}`</h1>;

  return (
    <>
      <div className="TopBarProducts">
        <div className="wrapper-buttons">
          <CreateProduct />
        </div>

        <div className="wrapper-h1">
          <h1 className="h1-title">Gestionar productos</h1>
          <div className="wrapper-icon-rigth">
            <img src={imgProduct} alt="Logo" />
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

      <div className="ListProducts">
        <div className="containerProducts">
          <table className="tableProducts">
            <tr className="headerTableProducts">
              <th className="subtitle-list">ID</th>
              <th className="subtitle-list">NOMBRE</th>
              <th className="subtitle-list">CATEGORIA</th>
              <th className="subtitle-list">PRECIO</th>
              <th className="subtitle-list">ACTIONS</th>
            </tr>
            {data.products
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((product) => (
                <tr className="contenttableProducts" key={product.id}>
                  <td className="content-table">{product._id}</td>
                  <td className="content-table">{product.name}</td>
                  <td className="content-table">{product.category}</td>
                  <td className="content-table">${product.price}</td>
                  <td className="containerbuttons">
                    <UpdateProduct
                      id={product._id}
                      name={product.name}
                      category={product.category}
                      price={product.price}
                    />

                    <DeleteProduct id={product._id} name={product.name} />
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
