const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    hello: String
  }

  type Repsonse {
    success: Boolean
    message: String
  }

  type Mutation {
    #Auth   
    login(email: String, password: String ): Repsonse
    register(username: String, email: String, password: String ): Repsonse
    
    #
  }
`;

export default typeDefs;
