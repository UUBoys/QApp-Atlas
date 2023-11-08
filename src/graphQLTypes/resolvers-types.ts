import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResult = {
  __typename?: 'AuthResult';
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type CreateEstablishmentResult = {
  __typename?: 'CreateEstablishmentResult';
  establishment?: Maybe<Establishment>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateEventResult = {
  __typename?: 'CreateEventResult';
  event?: Maybe<Event>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreditsBalance = {
  __typename?: 'CreditsBalance';
  balance?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreditsTopUp = {
  __typename?: 'CreditsTopUp';
  newBalance?: Maybe<Scalars['Int']['output']>;
  oldBalance?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Establishment = {
  __typename?: 'Establishment';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  coverImage?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<Event>>>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['String']['output']>;
  establishment_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maximumCapacity?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
};

export type GetEstablishmentsResponse = {
  __typename?: 'GetEstablishmentsResponse';
  establishments?: Maybe<Array<Maybe<Establishment>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetEventsResponse = {
  __typename?: 'GetEventsResponse';
  events?: Maybe<Array<Maybe<Event>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEstablishment?: Maybe<CreateEstablishmentResult>;
  createEvent?: Maybe<CreateEventResult>;
  googleOAuth?: Maybe<AuthResult>;
  login?: Maybe<AuthResult>;
  purchaseTicket?: Maybe<PurchaseTicketResult>;
  register?: Maybe<AuthResult>;
  topupCredits?: Maybe<CreditsTopUp>;
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
  event_id: Scalars['Int']['input'];
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

export type PurchaseTicketResult = {
  __typename?: 'PurchaseTicketResult';
  success?: Maybe<Scalars['Boolean']['output']>;
  ticket?: Maybe<Ticket>;
};

export type Query = {
  __typename?: 'Query';
  getCredit?: Maybe<CreditsBalance>;
  getEstablishmentById?: Maybe<GetEstablishmentsResponse>;
  getEstablishments?: Maybe<GetEstablishmentsResponse>;
  getEstablishmentsForUser?: Maybe<GetEstablishmentsResponse>;
  getEvents?: Maybe<GetEventsResponse>;
};


export type QueryGetEstablishmentByIdArgs = {
  id: Scalars['Int']['input'];
};

export type Ticket = {
  __typename?: 'Ticket';
  event_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type UpdateEstablishmentResult = {
  __typename?: 'UpdateEstablishmentResult';
  establishment?: Maybe<Establishment>;
  success?: Maybe<Scalars['Boolean']['output']>;
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
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GetEstablishmentsResponse: ResolverTypeWrapper<GetEstablishmentsResponse>;
  GetEventsResponse: ResolverTypeWrapper<GetEventsResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PurchaseTicketResult: ResolverTypeWrapper<PurchaseTicketResult>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Ticket: ResolverTypeWrapper<Ticket>;
  UpdateEstablishmentResult: ResolverTypeWrapper<UpdateEstablishmentResult>;
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
  Float: Scalars['Float']['output'];
  GetEstablishmentsResponse: GetEstablishmentsResponse;
  GetEventsResponse: GetEventsResponse;
  Int: Scalars['Int']['output'];
  Mutation: {};
  PurchaseTicketResult: PurchaseTicketResult;
  Query: {};
  String: Scalars['String']['output'];
  Ticket: Ticket;
  UpdateEstablishmentResult: UpdateEstablishmentResult;
}>;

export type AuthResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthResult'] = ResolversParentTypes['AuthResult']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateEstablishmentResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEstablishmentResult'] = ResolversParentTypes['CreateEstablishmentResult']> = ResolversObject<{
  establishment?: Resolver<Maybe<ResolversTypes['Establishment']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateEventResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEventResult'] = ResolversParentTypes['CreateEventResult']> = ResolversObject<{
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditsBalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditsBalance'] = ResolversParentTypes['CreditsBalance']> = ResolversObject<{
  balance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreditsTopUpResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditsTopUp'] = ResolversParentTypes['CreditsTopUp']> = ResolversObject<{
  newBalance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  oldBalance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EstablishmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Establishment'] = ResolversParentTypes['Establishment']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  establishment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximumCapacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetEstablishmentsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetEstablishmentsResponse'] = ResolversParentTypes['GetEstablishmentsResponse']> = ResolversObject<{
  establishments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Establishment']>>>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetEventsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetEventsResponse'] = ResolversParentTypes['GetEventsResponse']> = ResolversObject<{
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCredit?: Resolver<Maybe<ResolversTypes['CreditsBalance']>, ParentType, ContextType>;
  getEstablishmentById?: Resolver<Maybe<ResolversTypes['GetEstablishmentsResponse']>, ParentType, ContextType, RequireFields<QueryGetEstablishmentByIdArgs, 'id'>>;
  getEstablishments?: Resolver<Maybe<ResolversTypes['GetEstablishmentsResponse']>, ParentType, ContextType>;
  getEstablishmentsForUser?: Resolver<Maybe<ResolversTypes['GetEstablishmentsResponse']>, ParentType, ContextType>;
  getEvents?: Resolver<Maybe<ResolversTypes['GetEventsResponse']>, ParentType, ContextType>;
}>;

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = ResolversObject<{
  event_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateEstablishmentResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEstablishmentResult'] = ResolversParentTypes['UpdateEstablishmentResult']> = ResolversObject<{
  establishment?: Resolver<Maybe<ResolversTypes['Establishment']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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
  GetEstablishmentsResponse?: GetEstablishmentsResponseResolvers<ContextType>;
  GetEventsResponse?: GetEventsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PurchaseTicketResult?: PurchaseTicketResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  UpdateEstablishmentResult?: UpdateEstablishmentResultResolvers<ContextType>;
}>;

