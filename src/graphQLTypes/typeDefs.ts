const typeDefs = `#graphql
  type AuthResult {
    success: Boolean
    token: String
  }

  type creditsTopUp {
    success: Boolean
    newBalance: Int
    oldBalance: Int
  }

  type creditsBalance {
    success: Boolean
    balance: Int
  }

  type Query {
    _empty: String # Just a placeholder. You can replace or remove this once you have real query operations.

    #Credits
    getCredit: creditsBalance
  }
  
  type Mutation {
    #Auth   
    login(email: String, password: String): AuthResult
    register(email: String, password: String, username: String): AuthResult    
    
    #Credits
    TopupCredits(amount: Int, user_id: Int): creditsTopUp
  }
`;

export default typeDefs;
