import {gql} from 'apollo-server-express';
export const typeDefs = gql`
  type Query {
    hello: String,
    allRooms:[Room!]!,
    totalRooms:Int,
    availableRooms:[Room!],
    checkForDates(startDate: String!, stopDate: String!): [Room!]
  },
  type Room {
    id: ID!,
    name: String!,
    startDate: Int!,
    stopDate: Int!,
    occupied: Boolean!
  },
  type Mutation {
      addRoom(name: String!, occupied: Boolean!): Room!,
      removeRoom(_id: ID!): String!,
      bookRoom(_id: ID!, startDate: String!, stopDate: String!): Room!
  }
`;