import { GraphQLServer } from 'graphql-yoga'

/**
 * 1. Create Post Type
 * 2. Add, id, title, body, and published
 * 3. Define post query that returns single post
 * 4. Resolver - return some post data
 * 5. Test query
 *
 */

// Type Definitions
const typeDefs = `
  type Query {
    me: User!
    post: Post!
    
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
  
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: '123058',
        name: 'Mike',
        email: 'chuck@me.com',
        age: 28
      }
    },
    post() {
        return {
          id: '092',
          title: "Enter the Sandman",
          body: 'It is an intelligent modification, sir.',
          published: true
      }
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
