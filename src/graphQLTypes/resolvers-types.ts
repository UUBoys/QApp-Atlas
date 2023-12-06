import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** This is the result of a Login/OAuth */
export type AuthResult = {
  __typename?: 'AuthResult';
  /** This is the token used for authentication (JWT Bearer) */
  token: Scalars['String']['output'];
};

export type CreateEstablishmentResult = {
  __typename?: 'CreateEstablishmentResult';
  establishment: Establishment;
};

export type CreateEventResult = {
  __typename?: 'CreateEventResult';
  event: Event;
};

/** This is the response of a Credits Balance */
export type CreditsBalance = {
  __typename?: 'CreditsBalance';
  /** This is the balance of the user */
  balance: Scalars['Int']['output'];
};

/** This is the response of a Credits TopUp */
export type CreditsTopUp = {
  __typename?: 'CreditsTopUp';
  /** This is the new balance of the user */
  newBalance: Scalars['Int']['output'];
  /** This is the old balance of the user */
  oldBalance: Scalars['Int']['output'];
};

/** Establishment type */
export type Establishment = {
  __typename?: 'Establishment';
  /** This is the city of the establishment */
  city: Scalars['String']['output'];
  /** This is the country of the establishment */
  country: Scalars['String']['output'];
  /** This is the cover image of the establishment */
  coverImage?: Maybe<Scalars['String']['output']>;
  /** This is the description of the establishment */
  description: Scalars['String']['output'];
  /** These are events, that belong to the establishment */
  events?: Maybe<Array<Maybe<Event>>>;
  /** This is the id of the establishment */
  id: Scalars['Int']['output'];
  /** This is the name of the establishment */
  name: Scalars['String']['output'];
  /** This is the profile image of the establishment */
  profileImage?: Maybe<Scalars['String']['output']>;
  /** This is the street of the establishment */
  street: Scalars['String']['output'];
};

/** Event type */
export type Event = {
  __typename?: 'Event';
  /** This is the description of the event */
  description?: Maybe<Scalars['String']['output']>;
  /** This is the end date of the event */
  end_date: Scalars['String']['output'];
  /** ID of establishment that event belongs to */
  establishment_id: Scalars['Int']['output'];
  /** This is the id of the event */
  id: Scalars['String']['output'];
  /** Image of the event */
  image?: Maybe<Scalars['String']['output']>;
  /** Maximum capacity of the event */
  maximumCapacity: Scalars['Int']['output'];
  /** This is the name of the event */
  name: Scalars['String']['output'];
  /** This is the price of the event */
  price: Scalars['Float']['output'];
  /** This is the start date of the event */
  start_date: Scalars['String']['output'];
  /** Tickets assigned to this event */
  tickets?: Maybe<Array<Maybe<EventAvailableTickets>>>;
};

/** Event available tickets */
export type EventAvailableTickets = {
  __typename?: 'EventAvailableTickets';
  available_quantity: Scalars['Int']['output'];
  event_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ticket_id: Scalars['Int']['output'];
  ticket_name: Scalars['String']['output'];
};

export type GetEstablishmentsResponse = {
  __typename?: 'GetEstablishmentsResponse';
  establishments?: Maybe<Array<Maybe<Establishment>>>;
};

export type GetEventsResponse = {
  __typename?: 'GetEventsResponse';
  events?: Maybe<Array<Maybe<Event>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new establishment (requires authentication) */
  createEstablishment?: Maybe<CreateEstablishmentResult>;
  /** Create new event (requires authentication) */
  createEvent?: Maybe<CreateEventResult>;
  /** Login with Google OAuth (requires Google ID Token) */
  googleOAuth?: Maybe<AuthResult>;
  login?: Maybe<AuthResult>;
  /** Purchase a ticket for an event (requires authentication and sufficient credits) */
  purchaseTicket?: Maybe<PurchaseTicketResult>;
  register?: Maybe<AuthResult>;
  /** Top up the credits of the user that is logged in (requires authentication) */
  topupCredits?: Maybe<CreditsTopUp>;
  /** Update an existing establishment (requires authentication) */
  updateEstablishment?: Maybe<UpdateEstablishmentResult>;
};


export type MutationCreateEstablishmentArgs = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  profileImage?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
};


export type MutationCreateEventArgs = {
  description: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  establishment_id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  maximumCapacity: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  start_date: Scalars['String']['input'];
};


export type MutationGoogleOAuthArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPurchaseTicketArgs = {
  event_id: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationTopupCreditsArgs = {
  amount: Scalars['Int']['input'];
};


export type MutationUpdateEstablishmentArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  establishment_id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

/** This is the result of a ticket purchase */
export type PurchaseTicketResult = {
  __typename?: 'PurchaseTicketResult';
  event_id: Scalars['String']['output'];
  new_balance: Scalars['Int']['output'];
  ticket_id: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get the credits of the user that is logged in (requires authentication) */
  getCredit?: Maybe<CreditsBalance>;
  /** Get a specific establishment by id */
  getEstablishmentById?: Maybe<GetEstablishmentsResponse>;
  /** Get all establishments */
  getEstablishments?: Maybe<GetEstablishmentsResponse>;
  /** Get all establishments for a specific user (requires authentication) */
  getEstablishmentsForUser?: Maybe<GetEstablishmentsResponse>;
  /** Get event by id */
  getEventById?: Maybe<GetEventsResponse>;
  /** Get all events */
  getEvents?: Maybe<GetEventsResponse>;
  /** Get all available tickets */
  getTickets?: Maybe<Array<Maybe<EventAvailableTickets>>>;
  /** Get all tickets for an event */
  getTicketsForEvent?: Maybe<Array<Maybe<EventAvailableTickets>>>;
  /** Get all tickets for a user (requires authentication) */
  getTicketsForUser?: Maybe<Array<Maybe<UserTicket>>>;
  /** Search for establishments and events - performs a full text search on the name of establishments/events depending on the type */
  search?: Maybe<SearchResultResponse>;
};


export type QueryGetEstablishmentByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetEventByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTicketsForEventArgs = {
  event_id: Scalars['String']['input'];
};


export type QuerySearchArgs = {
  query: Scalars['String']['input'];
  type: SearchType;
};

/** Search result - contains the type of the result and the result itself */
export type SearchResult = {
  __typename?: 'SearchResult';
  result?: Maybe<SearchResultUnion>;
  searchType?: Maybe<SearchResultType>;
};

/** Search result response - contains an array of search results */
export type SearchResultResponse = {
  __typename?: 'SearchResultResponse';
  results?: Maybe<Array<Maybe<SearchResult>>>;
};

/** Search result type - either event or establishment */
export enum SearchResultType {
  Establishment = 'ESTABLISHMENT',
  Event = 'EVENT'
}

export type SearchResultUnion = Establishment | Event;

/** Search type - what to search for */
export enum SearchType {
  All = 'ALL',
  Establishment = 'ESTABLISHMENT',
  Event = 'EVENT'
}

export type UpdateEstablishmentResult = {
  __typename?: 'UpdateEstablishmentResult';
  establishment: Establishment;
};

/** User ticket type */
export type UserTicket = {
  __typename?: 'UserTicket';
  bought_quantity: Scalars['Int']['output'];
  event_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ticket_id: Scalars['Int']['output'];
  ticket_name: Scalars['String']['output'];
  user_id: Scalars['Int']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  SearchResultUnion: ( Establishment ) | ( Event );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthResult: ResolverTypeWrapper<AuthResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateEstablishmentResult: ResolverTypeWrapper<CreateEstablishmentResult>;
  CreateEventResult: ResolverTypeWrapper<CreateEventResult>;
  CreditsBalance: ResolverTypeWrapper<CreditsBalance>;
  CreditsTopUp: ResolverTypeWrapper<CreditsTopUp>;
  Establishment: ResolverTypeWrapper<Establishment>;
  Event: ResolverTypeWrapper<Event>;
  EventAvailableTickets: ResolverTypeWrapper<EventAvailableTickets>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GetEstablishmentsResponse: ResolverTypeWrapper<GetEstablishmentsResponse>;
  GetEventsResponse: ResolverTypeWrapper<GetEventsResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PurchaseTicketResult: ResolverTypeWrapper<PurchaseTicketResult>;
  Query: ResolverTypeWrapper<{}>;
  SearchResult: ResolverTypeWrapper<Omit<SearchResult, 'result'> & { result?: Maybe<ResolversTypes['SearchResultUnion']> }>;
  SearchResultResponse: ResolverTypeWrapper<SearchResultResponse>;
  SearchResultType: SearchResultType;
  SearchResultUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SearchResultUnion']>;
  SearchType: SearchType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateEstablishmentResult: ResolverTypeWrapper<UpdateEstablishmentResult>;
  UserTicket: ResolverTypeWrapper<UserTicket>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthResult: AuthResult;
  Boolean: Scalars['Boolean']['output'];
  CreateEstablishmentResult: CreateEstablishmentResult;
  CreateEventResult: CreateEventResult;
  CreditsBalance: CreditsBalance;
  CreditsTopUp: CreditsTopUp;
  Establishment: Establishment;
  Event: Event;
  EventAvailableTickets: EventAvailableTickets;
  Float: Scalars['Float']['output'];
  GetEstablishmentsResponse: GetEstablishmentsResponse;
  GetEventsResponse: GetEventsResponse;
  Int: Scalars['Int']['output'];
  Mutation: {};
  PurchaseTicketResult: PurchaseTicketResult;
  Query: {};
  SearchResult: Omit<SearchResult, 'result'> & { result?: Maybe<ResolversParentTypes['SearchResultUnion']> };
  SearchResultResponse: SearchResultResponse;
  SearchResultUnion: ResolversUnionTypes<ResolversParentTypes>['SearchResultUnion'];
  String: Scalars['String']['output'];
  UpdateEstablishmentResult: UpdateEstablishmentResult;
  UserTicket: UserTicket;
}>;

export type AuthResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthResult'] = ResolversParentTypes['AuthResult']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateEstablishmentResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEstablishmentResult'] = ResolversParentTypes['CreateEstablishmentResult']> = ResolversObject<{
  establishment?: Resolver<ResolversTypes['Establishment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateEventResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEventResult'] = ResolversParentTypes['CreateEventResult']> = ResolversObject<{
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditsBalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditsBalance'] = ResolversParentTypes['CreditsBalance']> = ResolversObject<{
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditsTopUpResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditsTopUp'] = ResolversParentTypes['CreditsTopUp']> = ResolversObject<{
  newBalance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oldBalance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EstablishmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Establishment'] = ResolversParentTypes['Establishment']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  establishment_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximumCapacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  start_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tickets?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventAvailableTickets']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventAvailableTicketsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventAvailableTickets'] = ResolversParentTypes['EventAvailableTickets']> = ResolversObject<{
  available_quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  event_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ticket_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticket_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetEstablishmentsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetEstablishmentsResponse'] = ResolversParentTypes['GetEstablishmentsResponse']> = ResolversObject<{
  establishments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Establishment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetEventsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetEventsResponse'] = ResolversParentTypes['GetEventsResponse']> = ResolversObject<{
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createEstablishment?: Resolver<Maybe<ResolversTypes['CreateEstablishmentResult']>, ParentType, ContextType, RequireFields<MutationCreateEstablishmentArgs, 'city' | 'country' | 'description' | 'name' | 'street'>>;
  createEvent?: Resolver<Maybe<ResolversTypes['CreateEventResult']>, ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'description' | 'end_date' | 'establishment_id' | 'maximumCapacity' | 'name' | 'price' | 'start_date'>>;
  googleOAuth?: Resolver<Maybe<ResolversTypes['AuthResult']>, ParentType, ContextType, RequireFields<MutationGoogleOAuthArgs, 'idToken'>>;
  login?: Resolver<Maybe<ResolversTypes['AuthResult']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  purchaseTicket?: Resolver<Maybe<ResolversTypes['PurchaseTicketResult']>, ParentType, ContextType, RequireFields<MutationPurchaseTicketArgs, 'event_id' | 'user_id'>>;
  register?: Resolver<Maybe<ResolversTypes['AuthResult']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'password' | 'username'>>;
  topupCredits?: Resolver<Maybe<ResolversTypes['CreditsTopUp']>, ParentType, ContextType, RequireFields<MutationTopupCreditsArgs, 'amount'>>;
  updateEstablishment?: Resolver<Maybe<ResolversTypes['UpdateEstablishmentResult']>, ParentType, ContextType, RequireFields<MutationUpdateEstablishmentArgs, 'establishment_id'>>;
}>;

export type PurchaseTicketResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PurchaseTicketResult'] = ResolversParentTypes['PurchaseTicketResult']> = ResolversObject<{
  event_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  new_balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticket_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCredit?: Resolver<Maybe<ResolversTypes['CreditsBalance']>, ParentType, ContextType>;
  getEstablishmentById?: Resolver<Maybe<ResolversTypes['GetEstablishmentsResponse']>, ParentType, ContextType, RequireFields<QueryGetEstablishmentByIdArgs, 'id'>>;
  getEstablishments?: Resolver<Maybe<ResolversTypes['GetEstablishmentsResponse']>, ParentType, ContextType>;
  getEstablishmentsForUser?: Resolver<Maybe<ResolversTypes['GetEstablishmentsResponse']>, ParentType, ContextType>;
  getEventById?: Resolver<Maybe<ResolversTypes['GetEventsResponse']>, ParentType, ContextType, RequireFields<QueryGetEventByIdArgs, 'id'>>;
  getEvents?: Resolver<Maybe<ResolversTypes['GetEventsResponse']>, ParentType, ContextType>;
  getTickets?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventAvailableTickets']>>>, ParentType, ContextType>;
  getTicketsForEvent?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventAvailableTickets']>>>, ParentType, ContextType, RequireFields<QueryGetTicketsForEventArgs, 'event_id'>>;
  getTicketsForUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserTicket']>>>, ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['SearchResultResponse']>, ParentType, ContextType, RequireFields<QuerySearchArgs, 'query' | 'type'>>;
}>;

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = ResolversObject<{
  result?: Resolver<Maybe<ResolversTypes['SearchResultUnion']>, ParentType, ContextType>;
  searchType?: Resolver<Maybe<ResolversTypes['SearchResultType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchResultResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultResponse'] = ResolversParentTypes['SearchResultResponse']> = ResolversObject<{
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['SearchResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchResultUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultUnion'] = ResolversParentTypes['SearchResultUnion']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Establishment' | 'Event', ParentType, ContextType>;
}>;

export type UpdateEstablishmentResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEstablishmentResult'] = ResolversParentTypes['UpdateEstablishmentResult']> = ResolversObject<{
  establishment?: Resolver<ResolversTypes['Establishment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserTicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserTicket'] = ResolversParentTypes['UserTicket']> = ResolversObject<{
  bought_quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  event_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ticket_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticket_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AuthResult?: AuthResultResolvers<ContextType>;
  CreateEstablishmentResult?: CreateEstablishmentResultResolvers<ContextType>;
  CreateEventResult?: CreateEventResultResolvers<ContextType>;
  CreditsBalance?: CreditsBalanceResolvers<ContextType>;
  CreditsTopUp?: CreditsTopUpResolvers<ContextType>;
  Establishment?: EstablishmentResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventAvailableTickets?: EventAvailableTicketsResolvers<ContextType>;
  GetEstablishmentsResponse?: GetEstablishmentsResponseResolvers<ContextType>;
  GetEventsResponse?: GetEventsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PurchaseTicketResult?: PurchaseTicketResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchResultResponse?: SearchResultResponseResolvers<ContextType>;
  SearchResultUnion?: SearchResultUnionResolvers<ContextType>;
  UpdateEstablishmentResult?: UpdateEstablishmentResultResolvers<ContextType>;
  UserTicket?: UserTicketResolvers<ContextType>;
}>;

