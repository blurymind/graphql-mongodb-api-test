const { gql } = require('apollo-server');

module.exports = gql`
  type HiveFive {
    id: ID!
    from: String!
    to: String!
  }

  input CreateHiveFiveInput {
    from: String!
    to: String!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    hiveFives: [HiveFive]
  }

  type Mutation {
    createHiveFive(input: CreateHiveFiveInput!): HiveFive!
  } 
`;
