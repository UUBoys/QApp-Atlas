const typeDefs = `#graphql
  type AuthResult {
    success: Boolean
    token: String
  }

  type Query {
    _empty: String # Just a placeholder. You can replace or remove this once you have real query operations.
  }
  
  type Mutation {
    #Auth   
    login(email: String, password: String): AuthResult
    register(email: String, password: String, username: String): AuthResult    
    #
  }
`;

export default typeDefs;
