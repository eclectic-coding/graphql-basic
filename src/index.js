import { GraphQLServer } from 'graphql-yoga'

// Add location String
// Add BIO String
// Type Definitions
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!'
    },
    name(){
      return 'Chuck Smith'
    },
    location(){
      return 'Lake Waccamaw'
    },
    bio(){
      return "I love GraphQL"
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
