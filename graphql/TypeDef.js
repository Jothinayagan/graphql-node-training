const { gql } = require("apollo-server-core");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # Interfaces define properties, methods, and events, which are the members of the interface
  interface BookInterface {
    id: ID!
    title: String!
    author: String!
    year_written: Int!
    edition: String!
    price: Float!
    genres: [String!]!
  }

  # "Book" type defines the queryable fields for every book in our data source.
  type Book implements BookInterface {
    id: ID!
    title: String!
    author: String!
    year_written: Int!
    edition: String!
    price: Float!
    genres: [String!]!
    # rating: Int
  }

  # A special object type that groups a set of arguments together,
  # and can then be used as an argument to another field
  input BookInput {
    id: ID
    title: String
    author: String
    year_written: Int
    edition: String
    price: Float
    genres: [String]
  }

  enum Genre {
    FANTASY
    ROMANCE
    HISTORICAL_FICTION
    ACTION_AND_ADVENTURE
    THRILLER_AND_SUSPENSE
    MYSTERY
    SCIENCE_FICTION
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getBooks: [Book]
    getBooksByLimit(limit: Int, offset: Int): [Book]
    getBookById(id: ID!): [Book]
    getBooksByGenre(genres: String!): [Book]
  }

  type Mutation {
    addBook(bookInput: BookInput!): Book!
  }
`;

module.exports = { typeDefs };
