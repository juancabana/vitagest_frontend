import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query products {
    products {
      _id
      name
      category
      price
    }
  }
`;

export default GET_PRODUCTS;
