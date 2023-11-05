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

  type Event {
    id: String
    name: String
    description: String
    start_date: String
    end_date: String
    price: Float
    establishment_id: Int
    maximumCapacity: Int
  }

  type Establishment {
    id: Int
    name: String
    description: String
    street: String
    city: String
    country: String
  }
  
  type Ticket {
    id: String
    event_id: Int
    user_id: Int
  }

  type PurchaseTicketResult {
    success: Boolean
    ticket: Ticket
  }
  
  type CreateEstablishmentResult {
    success: Boolean
    establishment: Establishment
  }

  type CreateEventResult {
    success: Boolean
    event: Event
  }

  type GetEstablishmentsResponse {
    success: Boolean
    establishments: [Establishment]
  }

  type GetEventsResponse {
    success: Boolean
    events: [Event]
  }

  type Query {
    #Credits
    getCredit: CreditsBalance

    #Establishment
    getEstablishment(id: Int): GetEstablishmentsResponse
    getEstablishmentsForUser: GetEstablishmentsResponse

    getEvents: GetEventsResponse
  }

  type Mutation {
    #Auth   
    login(email: String!, password: String!): AuthResult
    register(email: String!, password: String!, username: String!): AuthResult
    googleOAuth(idToken: String!): AuthResult
    
    #Credits
    topupCredits(amount: Int!): CreditsTopUp

    #Establishment
    createEstablishment(name: String!, description: String!, street: String!, city: String!, country: String!): CreateEstablishmentResult
    createEvent(name: String!, description: String!, start_date: String!, end_date: String!, price: Float!, establishment_id: Int!, maximumCapacity: Int!): CreateEventResult
    purchaseTicket(event_id: Int!, user_id: Int!): PurchaseTicketResult
  }
`;

export default typeDefs;
