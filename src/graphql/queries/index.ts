import { gql } from "graphql-request";

export const GET_ALL_DATA = gql`
  query {
    skills1(stage: PUBLISHED) {
      image
      title
      link
    }

    projects1{
      id
      title
      description
      demo
      github
      technologies
      image
    }
  }
`;
