const typeDefs = `#graphql
  type AuthResult {
    success: Boolean
    token: String
  }

  type CreditsTopUp {
    success: Boolean
    newBalance: Int
    oldBalance: Int
  }

  type CreditsBalance {
    success: Boolean
    balance: Int
  }

  type Query {
    #Credits
    getCredit: CreditsBalance
  }
  
  type Mutation {
    #Auth   
    login(email: String, password: String): AuthResult
    register(email: String, password: String, username: String): AuthResult    
    
    #Credits
    topupCredits(amount: Int, user_id: Int): CreditsTopUp
  }
`;

export default typeDefs;
