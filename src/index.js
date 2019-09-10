import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Integers, Float (Real), ID

// Type Definitions
const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`

// Resolvers
const resolvers = {
  Query: {
    title () {
      return 'Socks'
    },
    price () {
      return 1.32
    },
    releaseYear () {
      return 2019
    },
    rating () {
      return null
    },
    inStock () {
      return true
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('The server is up!')
})
