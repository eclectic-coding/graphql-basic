import { GraphQLServer } from 'graphql-yoga'

// Demo User Data
const users = [{
  id: '1',
  name: 'Andrew',
  email: 'andrew@example.com',
  age: 27
}, {
  id: '12',
  name: 'Chuck',
  email: 'chuck@example.com',
  age: 57
}, {
  id: '13',
  name: 'Michelle',
  email: 'michelle@example.com'
}]

const posts = [{
  id: '10',
  title: 'Hello World',
  body: 'Pius coordinataes ducunt ad turpis.',
  published: true
}, {
  id: '15',
  title: 'Random Words',
  body: 'Pius coordinataes ducunt ad turpis.',
  published: true
}, {
  id: '16',
  title: 'Baseball rules!',
  body: 'Pius coordinataes ducunt ad turpis.',
  published: true
}]

// Type Definitions
const typeDefs = `
    type Query {
       users(query: String): [User!]!
       posts(query: String): [Post!]!
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
    users (parent, args, ctx, info) {
      if (!args.query) {
        return users
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase())
      })
    },
    posts (parent, args, ctx, info) {
      if (!args.query) {
        return posts
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
        const isBodyMath = post.body.toLowerCase().includes(args.query.toLowerCase())
        return isTitleMatch || isBodyMath
      })
    },
    me () {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@example.com'
      }
    },
    post () {
      return {
        id: '016',
        title: 'Baseball Rules!',
        body: '',
        published: false
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