import { gql } from "@apollo/client";

export const GET_PROVIDERS = gql`
  query suppliers {
    suppliers {
      _id
      name
      experience
      location
      business
    }
  }
`;

export default GET_PROVIDERS;
