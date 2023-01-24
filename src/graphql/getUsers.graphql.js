import { gql } from "@apollo/client";

const GET_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName
      password
      age
      phoneNumber
      country
    }
  }
`;

export default GET_USERS;
