import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    companies: <T = Company[]>(args: { where?: CompanyWhereInput, orderBy?: CompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contacts: <T = Contact[]>(args: { where?: ContactWhereInput, orderBy?: ContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactHistoryInCompanies: <T = ContactHistoryInCompany[]>(args: { where?: ContactHistoryInCompanyWhereInput, orderBy?: ContactHistoryInCompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactDetails: <T = ContactDetail[]>(args: { where?: ContactDetailWhereInput, orderBy?: ContactDetailOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leads: <T = Lead[]>(args: { where?: LeadWhereInput, orderBy?: LeadOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leadStates: <T = LeadState[]>(args: { where?: LeadStateWhereInput, orderBy?: LeadStateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    colors: <T = Color[]>(args: { where?: ColorWhereInput, orderBy?: ColorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orders: <T = Order[]>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderPositionses: <T = OrderPositions[]>(args: { where?: OrderPositionsWhereInput, orderBy?: OrderPositionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currencies: <T = Currency[]>(args: { where?: CurrencyWhereInput, orderBy?: CurrencyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    nomenclatures: <T = Nomenclature[]>(args: { where?: NomenclatureWhereInput, orderBy?: NomenclatureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    company: <T = Company | null>(args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contact: <T = Contact | null>(args: { where: ContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactHistoryInCompany: <T = ContactHistoryInCompany | null>(args: { where: ContactHistoryInCompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactDetail: <T = ContactDetail | null>(args: { where: ContactDetailWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lead: <T = Lead | null>(args: { where: LeadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leadState: <T = LeadState | null>(args: { where: LeadStateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    color: <T = Color | null>(args: { where: ColorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderPositions: <T = OrderPositions | null>(args: { where: OrderPositionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currency: <T = Currency | null>(args: { where: CurrencyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    nomenclature: <T = Nomenclature | null>(args: { where: NomenclatureWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    companiesConnection: <T = CompanyConnection>(args: { where?: CompanyWhereInput, orderBy?: CompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactsConnection: <T = ContactConnection>(args: { where?: ContactWhereInput, orderBy?: ContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactHistoryInCompaniesConnection: <T = ContactHistoryInCompanyConnection>(args: { where?: ContactHistoryInCompanyWhereInput, orderBy?: ContactHistoryInCompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactDetailsConnection: <T = ContactDetailConnection>(args: { where?: ContactDetailWhereInput, orderBy?: ContactDetailOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leadsConnection: <T = LeadConnection>(args: { where?: LeadWhereInput, orderBy?: LeadOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leadStatesConnection: <T = LeadStateConnection>(args: { where?: LeadStateWhereInput, orderBy?: LeadStateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    colorsConnection: <T = ColorConnection>(args: { where?: ColorWhereInput, orderBy?: ColorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ordersConnection: <T = OrderConnection>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderPositionsesConnection: <T = OrderPositionsConnection>(args: { where?: OrderPositionsWhereInput, orderBy?: OrderPositionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currenciesConnection: <T = CurrencyConnection>(args: { where?: CurrencyWhereInput, orderBy?: CurrencyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    nomenclaturesConnection: <T = NomenclatureConnection>(args: { where?: NomenclatureWhereInput, orderBy?: NomenclatureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCompany: <T = Company>(args: { data: CompanyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createContact: <T = Contact>(args: { data: ContactCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createContactHistoryInCompany: <T = ContactHistoryInCompany>(args: { data: ContactHistoryInCompanyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createContactDetail: <T = ContactDetail>(args: { data: ContactDetailCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLead: <T = Lead>(args: { data: LeadCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLeadState: <T = LeadState>(args: { data: LeadStateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createColor: <T = Color>(args: { data: ColorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrder: <T = Order>(args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrderPositions: <T = OrderPositions>(args: { data: OrderPositionsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCurrency: <T = Currency>(args: { data: CurrencyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNomenclature: <T = Nomenclature>(args: { data: NomenclatureCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCompany: <T = Company | null>(args: { data: CompanyUpdateInput, where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateContact: <T = Contact | null>(args: { data: ContactUpdateInput, where: ContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateContactHistoryInCompany: <T = ContactHistoryInCompany | null>(args: { data: ContactHistoryInCompanyUpdateInput, where: ContactHistoryInCompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateContactDetail: <T = ContactDetail | null>(args: { data: ContactDetailUpdateInput, where: ContactDetailWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLead: <T = Lead | null>(args: { data: LeadUpdateInput, where: LeadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLeadState: <T = LeadState | null>(args: { data: LeadStateUpdateInput, where: LeadStateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateColor: <T = Color | null>(args: { data: ColorUpdateInput, where: ColorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrder: <T = Order | null>(args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrderPositions: <T = OrderPositions | null>(args: { data: OrderPositionsUpdateInput, where: OrderPositionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCurrency: <T = Currency | null>(args: { data: CurrencyUpdateInput, where: CurrencyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNomenclature: <T = Nomenclature | null>(args: { data: NomenclatureUpdateInput, where: NomenclatureWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCompany: <T = Company | null>(args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteContact: <T = Contact | null>(args: { where: ContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteContactHistoryInCompany: <T = ContactHistoryInCompany | null>(args: { where: ContactHistoryInCompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteContactDetail: <T = ContactDetail | null>(args: { where: ContactDetailWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLead: <T = Lead | null>(args: { where: LeadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLeadState: <T = LeadState | null>(args: { where: LeadStateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteColor: <T = Color | null>(args: { where: ColorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrder: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrderPositions: <T = OrderPositions | null>(args: { where: OrderPositionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCurrency: <T = Currency | null>(args: { where: CurrencyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNomenclature: <T = Nomenclature | null>(args: { where: NomenclatureWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCompany: <T = Company>(args: { where: CompanyWhereUniqueInput, create: CompanyCreateInput, update: CompanyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertContact: <T = Contact>(args: { where: ContactWhereUniqueInput, create: ContactCreateInput, update: ContactUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertContactHistoryInCompany: <T = ContactHistoryInCompany>(args: { where: ContactHistoryInCompanyWhereUniqueInput, create: ContactHistoryInCompanyCreateInput, update: ContactHistoryInCompanyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertContactDetail: <T = ContactDetail>(args: { where: ContactDetailWhereUniqueInput, create: ContactDetailCreateInput, update: ContactDetailUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLead: <T = Lead>(args: { where: LeadWhereUniqueInput, create: LeadCreateInput, update: LeadUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLeadState: <T = LeadState>(args: { where: LeadStateWhereUniqueInput, create: LeadStateCreateInput, update: LeadStateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertColor: <T = Color>(args: { where: ColorWhereUniqueInput, create: ColorCreateInput, update: ColorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrder: <T = Order>(args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrderPositions: <T = OrderPositions>(args: { where: OrderPositionsWhereUniqueInput, create: OrderPositionsCreateInput, update: OrderPositionsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCurrency: <T = Currency>(args: { where: CurrencyWhereUniqueInput, create: CurrencyCreateInput, update: CurrencyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNomenclature: <T = Nomenclature>(args: { where: NomenclatureWhereUniqueInput, create: NomenclatureCreateInput, update: NomenclatureUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCompanies: <T = BatchPayload>(args: { data: CompanyUpdateInput, where?: CompanyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyContacts: <T = BatchPayload>(args: { data: ContactUpdateInput, where?: ContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyContactHistoryInCompanies: <T = BatchPayload>(args: { data: ContactHistoryInCompanyUpdateInput, where?: ContactHistoryInCompanyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyContactDetails: <T = BatchPayload>(args: { data: ContactDetailUpdateInput, where?: ContactDetailWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLeads: <T = BatchPayload>(args: { data: LeadUpdateInput, where?: LeadWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLeadStates: <T = BatchPayload>(args: { data: LeadStateUpdateInput, where?: LeadStateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyColors: <T = BatchPayload>(args: { data: ColorUpdateInput, where?: ColorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrders: <T = BatchPayload>(args: { data: OrderUpdateInput, where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrderPositionses: <T = BatchPayload>(args: { data: OrderPositionsUpdateInput, where?: OrderPositionsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCurrencies: <T = BatchPayload>(args: { data: CurrencyUpdateInput, where?: CurrencyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNomenclatures: <T = BatchPayload>(args: { data: NomenclatureUpdateInput, where?: NomenclatureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCompanies: <T = BatchPayload>(args: { where?: CompanyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyContacts: <T = BatchPayload>(args: { where?: ContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyContactHistoryInCompanies: <T = BatchPayload>(args: { where?: ContactHistoryInCompanyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyContactDetails: <T = BatchPayload>(args: { where?: ContactDetailWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLeads: <T = BatchPayload>(args: { where?: LeadWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLeadStates: <T = BatchPayload>(args: { where?: LeadStateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyColors: <T = BatchPayload>(args: { where?: ColorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrders: <T = BatchPayload>(args: { where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrderPositionses: <T = BatchPayload>(args: { where?: OrderPositionsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCurrencies: <T = BatchPayload>(args: { where?: CurrencyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNomenclatures: <T = BatchPayload>(args: { where?: NomenclatureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    company: <T = CompanySubscriptionPayload | null>(args: { where?: CompanySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    contact: <T = ContactSubscriptionPayload | null>(args: { where?: ContactSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    contactHistoryInCompany: <T = ContactHistoryInCompanySubscriptionPayload | null>(args: { where?: ContactHistoryInCompanySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    contactDetail: <T = ContactDetailSubscriptionPayload | null>(args: { where?: ContactDetailSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    lead: <T = LeadSubscriptionPayload | null>(args: { where?: LeadSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    leadState: <T = LeadStateSubscriptionPayload | null>(args: { where?: LeadStateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    color: <T = ColorSubscriptionPayload | null>(args: { where?: ColorSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    orderPositions: <T = OrderPositionsSubscriptionPayload | null>(args: { where?: OrderPositionsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    currency: <T = CurrencySubscriptionPayload | null>(args: { where?: CurrencySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    nomenclature: <T = NomenclatureSubscriptionPayload | null>(args: { where?: NomenclatureSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Company: (where?: CompanyWhereInput) => Promise<boolean>
  Contact: (where?: ContactWhereInput) => Promise<boolean>
  ContactHistoryInCompany: (where?: ContactHistoryInCompanyWhereInput) => Promise<boolean>
  ContactDetail: (where?: ContactDetailWhereInput) => Promise<boolean>
  Lead: (where?: LeadWhereInput) => Promise<boolean>
  LeadState: (where?: LeadStateWhereInput) => Promise<boolean>
  Color: (where?: ColorWhereInput) => Promise<boolean>
  Order: (where?: OrderWhereInput) => Promise<boolean>
  OrderPositions: (where?: OrderPositionsWhereInput) => Promise<boolean>
  Currency: (where?: CurrencyWhereInput) => Promise<boolean>
  Nomenclature: (where?: NomenclatureWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateColor {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateContact {
  count: Int!
}

type AggregateContactDetail {
  count: Int!
}

type AggregateContactHistoryInCompany {
  count: Int!
}

type AggregateCurrency {
  count: Int!
}

type AggregateLead {
  count: Int!
}

type AggregateLeadState {
  count: Int!
}

type AggregateNomenclature {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderPositions {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Color implements Node {
  id: ID!
  name: String!
  hexValue: String!
}

"""A connection to a list of items."""
type ColorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ColorEdge]!
  aggregate: AggregateColor!
}

input ColorCreateInput {
  name: String
  hexValue: String!
}

input ColorCreateOneInput {
  create: ColorCreateInput
  connect: ColorWhereUniqueInput
}

"""An edge in a connection."""
type ColorEdge {
  """The item at the end of the edge."""
  node: Color!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ColorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  hexValue_ASC
  hexValue_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ColorPreviousValues {
  id: ID!
  name: String!
  hexValue: String!
}

type ColorSubscriptionPayload {
  mutation: MutationType!
  node: Color
  updatedFields: [String!]
  previousValues: ColorPreviousValues
}

input ColorSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ColorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ColorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ColorSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ColorWhereInput
}

input ColorUpdateDataInput {
  name: String
  hexValue: String
}

input ColorUpdateInput {
  name: String
  hexValue: String
}

input ColorUpdateOneInput {
  create: ColorCreateInput
  connect: ColorWhereUniqueInput
  delete: Boolean
  update: ColorUpdateDataInput
  upsert: ColorUpsertNestedInput
}

input ColorUpsertNestedInput {
  update: ColorUpdateDataInput!
  create: ColorCreateInput!
}

input ColorWhereInput {
  """Logical AND on all given filters."""
  AND: [ColorWhereInput!]

  """Logical OR on all given filters."""
  OR: [ColorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ColorWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  hexValue: String

  """All values that are not equal to given value."""
  hexValue_not: String

  """All values that are contained in given list."""
  hexValue_in: [String!]

  """All values that are not contained in given list."""
  hexValue_not_in: [String!]

  """All values less than the given value."""
  hexValue_lt: String

  """All values less than or equal the given value."""
  hexValue_lte: String

  """All values greater than the given value."""
  hexValue_gt: String

  """All values greater than or equal the given value."""
  hexValue_gte: String

  """All values containing the given string."""
  hexValue_contains: String

  """All values not containing the given string."""
  hexValue_not_contains: String

  """All values starting with the given string."""
  hexValue_starts_with: String

  """All values not starting with the given string."""
  hexValue_not_starts_with: String

  """All values ending with the given string."""
  hexValue_ends_with: String

  """All values not ending with the given string."""
  hexValue_not_ends_with: String
}

input ColorWhereUniqueInput {
  id: ID
}

type Company implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  note: String!
  legalName: String!
  manager(where: UserWhereInput): User
  contactDetails(where: ContactDetailWhereInput, orderBy: ContactDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactDetail!]
  contactsHistory(where: ContactHistoryInCompanyWhereInput, orderBy: ContactHistoryInCompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactHistoryInCompany!]
}

"""A connection to a list of items."""
type CompanyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  name: String!
  note: String
  legalName: String
  manager: UserCreateOneInput
  contactDetails: ContactDetailCreateManyWithoutOwnerCompanyInput
  contactsHistory: ContactHistoryInCompanyCreateManyWithoutCompanyInput
}

input CompanyCreateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutContactDetailsInput {
  create: CompanyCreateWithoutContactDetailsInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutContactsHistoryInput {
  create: CompanyCreateWithoutContactsHistoryInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutContactDetailsInput {
  name: String!
  note: String
  legalName: String
  manager: UserCreateOneInput
  contactsHistory: ContactHistoryInCompanyCreateManyWithoutCompanyInput
}

input CompanyCreateWithoutContactsHistoryInput {
  name: String!
  note: String
  legalName: String
  manager: UserCreateOneInput
  contactDetails: ContactDetailCreateManyWithoutOwnerCompanyInput
}

"""An edge in a connection."""
type CompanyEdge {
  """The item at the end of the edge."""
  node: Company!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  note_ASC
  note_DESC
  legalName_ASC
  legalName_DESC
}

type CompanyPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  note: String!
  legalName: String!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CompanySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CompanySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CompanySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
}

input CompanyUpdateDataInput {
  name: String
  note: String
  legalName: String
  manager: UserUpdateOneInput
  contactDetails: ContactDetailUpdateManyWithoutOwnerCompanyInput
  contactsHistory: ContactHistoryInCompanyUpdateManyWithoutCompanyInput
}

input CompanyUpdateInput {
  name: String
  note: String
  legalName: String
  manager: UserUpdateOneInput
  contactDetails: ContactDetailUpdateManyWithoutOwnerCompanyInput
  contactsHistory: ContactHistoryInCompanyUpdateManyWithoutCompanyInput
}

input CompanyUpdateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
  delete: Boolean
  update: CompanyUpdateDataInput
  upsert: CompanyUpsertNestedInput
}

input CompanyUpdateOneWithoutContactDetailsInput {
  create: CompanyCreateWithoutContactDetailsInput
  connect: CompanyWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CompanyUpdateWithoutContactDetailsDataInput
  upsert: CompanyUpsertWithoutContactDetailsInput
}

input CompanyUpdateOneWithoutContactsHistoryInput {
  create: CompanyCreateWithoutContactsHistoryInput
  connect: CompanyWhereUniqueInput
  delete: Boolean
  update: CompanyUpdateWithoutContactsHistoryDataInput
  upsert: CompanyUpsertWithoutContactsHistoryInput
}

input CompanyUpdateWithoutContactDetailsDataInput {
  name: String
  note: String
  legalName: String
  manager: UserUpdateOneInput
  contactsHistory: ContactHistoryInCompanyUpdateManyWithoutCompanyInput
}

input CompanyUpdateWithoutContactsHistoryDataInput {
  name: String
  note: String
  legalName: String
  manager: UserUpdateOneInput
  contactDetails: ContactDetailUpdateManyWithoutOwnerCompanyInput
}

input CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput!
  create: CompanyCreateInput!
}

input CompanyUpsertWithoutContactDetailsInput {
  update: CompanyUpdateWithoutContactDetailsDataInput!
  create: CompanyCreateWithoutContactDetailsInput!
}

input CompanyUpsertWithoutContactsHistoryInput {
  update: CompanyUpdateWithoutContactsHistoryDataInput!
  create: CompanyCreateWithoutContactsHistoryInput!
}

input CompanyWhereInput {
  """Logical AND on all given filters."""
  AND: [CompanyWhereInput!]

  """Logical OR on all given filters."""
  OR: [CompanyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CompanyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  legalName: String

  """All values that are not equal to given value."""
  legalName_not: String

  """All values that are contained in given list."""
  legalName_in: [String!]

  """All values that are not contained in given list."""
  legalName_not_in: [String!]

  """All values less than the given value."""
  legalName_lt: String

  """All values less than or equal the given value."""
  legalName_lte: String

  """All values greater than the given value."""
  legalName_gt: String

  """All values greater than or equal the given value."""
  legalName_gte: String

  """All values containing the given string."""
  legalName_contains: String

  """All values not containing the given string."""
  legalName_not_contains: String

  """All values starting with the given string."""
  legalName_starts_with: String

  """All values not starting with the given string."""
  legalName_not_starts_with: String

  """All values ending with the given string."""
  legalName_ends_with: String

  """All values not ending with the given string."""
  legalName_not_ends_with: String
  manager: UserWhereInput
  contactDetails_every: ContactDetailWhereInput
  contactDetails_some: ContactDetailWhereInput
  contactDetails_none: ContactDetailWhereInput
  contactsHistory_every: ContactHistoryInCompanyWhereInput
  contactsHistory_some: ContactHistoryInCompanyWhereInput
  contactsHistory_none: ContactHistoryInCompanyWhereInput
}

input CompanyWhereUniqueInput {
  id: ID
}

type Contact implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  middleName: String!
  note: String!
  manager(where: UserWhereInput): User
  contactDetails(where: ContactDetailWhereInput, orderBy: ContactDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactDetail!]
  workingHistory(where: ContactHistoryInCompanyWhereInput, orderBy: ContactHistoryInCompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactHistoryInCompany!]
}

"""A connection to a list of items."""
type ContactConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ContactEdge]!
  aggregate: AggregateContact!
}

input ContactCreateInput {
  firstName: String!
  lastName: String
  middleName: String
  note: String
  manager: UserCreateOneInput
  contactDetails: ContactDetailCreateManyWithoutOwnerContactInput
  workingHistory: ContactHistoryInCompanyCreateManyWithoutContactInput
}

input ContactCreateOneWithoutContactDetailsInput {
  create: ContactCreateWithoutContactDetailsInput
  connect: ContactWhereUniqueInput
}

input ContactCreateOneWithoutWorkingHistoryInput {
  create: ContactCreateWithoutWorkingHistoryInput
  connect: ContactWhereUniqueInput
}

input ContactCreateWithoutContactDetailsInput {
  firstName: String!
  lastName: String
  middleName: String
  note: String
  manager: UserCreateOneInput
  workingHistory: ContactHistoryInCompanyCreateManyWithoutContactInput
}

input ContactCreateWithoutWorkingHistoryInput {
  firstName: String!
  lastName: String
  middleName: String
  note: String
  manager: UserCreateOneInput
  contactDetails: ContactDetailCreateManyWithoutOwnerContactInput
}

type ContactDetail implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  kind: ContactDetailsKind!
  value: String!
  rawValue: String!
  ownerCompany(where: CompanyWhereInput): Company
  ownerContact(where: ContactWhereInput): Contact
  ownerLead(where: LeadWhereInput): Lead
}

"""A connection to a list of items."""
type ContactDetailConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ContactDetailEdge]!
  aggregate: AggregateContactDetail!
}

input ContactDetailCreateInput {
  kind: ContactDetailsKind!
  value: String!
  rawValue: String!
  ownerCompany: CompanyCreateOneWithoutContactDetailsInput
  ownerContact: ContactCreateOneWithoutContactDetailsInput
  ownerLead: LeadCreateOneWithoutContactDetailsInput
}

input ContactDetailCreateManyWithoutOwnerCompanyInput {
  create: [ContactDetailCreateWithoutOwnerCompanyInput!]
  connect: [ContactDetailWhereUniqueInput!]
}

input ContactDetailCreateManyWithoutOwnerContactInput {
  create: [ContactDetailCreateWithoutOwnerContactInput!]
  connect: [ContactDetailWhereUniqueInput!]
}

input ContactDetailCreateManyWithoutOwnerLeadInput {
  create: [ContactDetailCreateWithoutOwnerLeadInput!]
  connect: [ContactDetailWhereUniqueInput!]
}

input ContactDetailCreateWithoutOwnerCompanyInput {
  kind: ContactDetailsKind!
  value: String!
  rawValue: String!
  ownerContact: ContactCreateOneWithoutContactDetailsInput
  ownerLead: LeadCreateOneWithoutContactDetailsInput
}

input ContactDetailCreateWithoutOwnerContactInput {
  kind: ContactDetailsKind!
  value: String!
  rawValue: String!
  ownerCompany: CompanyCreateOneWithoutContactDetailsInput
  ownerLead: LeadCreateOneWithoutContactDetailsInput
}

input ContactDetailCreateWithoutOwnerLeadInput {
  kind: ContactDetailsKind!
  value: String!
  rawValue: String!
  ownerCompany: CompanyCreateOneWithoutContactDetailsInput
  ownerContact: ContactCreateOneWithoutContactDetailsInput
}

"""An edge in a connection."""
type ContactDetailEdge {
  """The item at the end of the edge."""
  node: ContactDetail!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ContactDetailOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  kind_ASC
  kind_DESC
  value_ASC
  value_DESC
  rawValue_ASC
  rawValue_DESC
}

type ContactDetailPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  kind: ContactDetailsKind!
  value: String!
  rawValue: String!
}

enum ContactDetailsKind {
  EMAIL
  PHONE
  ADDRESS
}

type ContactDetailSubscriptionPayload {
  mutation: MutationType!
  node: ContactDetail
  updatedFields: [String!]
  previousValues: ContactDetailPreviousValues
}

input ContactDetailSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactDetailSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactDetailSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactDetailSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ContactDetailWhereInput
}

input ContactDetailUpdateInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerCompany: CompanyUpdateOneWithoutContactDetailsInput
  ownerContact: ContactUpdateOneWithoutContactDetailsInput
  ownerLead: LeadUpdateOneWithoutContactDetailsInput
}

input ContactDetailUpdateManyWithoutOwnerCompanyInput {
  create: [ContactDetailCreateWithoutOwnerCompanyInput!]
  connect: [ContactDetailWhereUniqueInput!]
  disconnect: [ContactDetailWhereUniqueInput!]
  delete: [ContactDetailWhereUniqueInput!]
  update: [ContactDetailUpdateWithWhereUniqueWithoutOwnerCompanyInput!]
  upsert: [ContactDetailUpsertWithWhereUniqueWithoutOwnerCompanyInput!]
}

input ContactDetailUpdateManyWithoutOwnerContactInput {
  create: [ContactDetailCreateWithoutOwnerContactInput!]
  connect: [ContactDetailWhereUniqueInput!]
  disconnect: [ContactDetailWhereUniqueInput!]
  delete: [ContactDetailWhereUniqueInput!]
  update: [ContactDetailUpdateWithWhereUniqueWithoutOwnerContactInput!]
  upsert: [ContactDetailUpsertWithWhereUniqueWithoutOwnerContactInput!]
}

input ContactDetailUpdateManyWithoutOwnerLeadInput {
  create: [ContactDetailCreateWithoutOwnerLeadInput!]
  connect: [ContactDetailWhereUniqueInput!]
  disconnect: [ContactDetailWhereUniqueInput!]
  delete: [ContactDetailWhereUniqueInput!]
  update: [ContactDetailUpdateWithWhereUniqueWithoutOwnerLeadInput!]
  upsert: [ContactDetailUpsertWithWhereUniqueWithoutOwnerLeadInput!]
}

input ContactDetailUpdateWithoutOwnerCompanyDataInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerContact: ContactUpdateOneWithoutContactDetailsInput
  ownerLead: LeadUpdateOneWithoutContactDetailsInput
}

input ContactDetailUpdateWithoutOwnerContactDataInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerCompany: CompanyUpdateOneWithoutContactDetailsInput
  ownerLead: LeadUpdateOneWithoutContactDetailsInput
}

input ContactDetailUpdateWithoutOwnerLeadDataInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerCompany: CompanyUpdateOneWithoutContactDetailsInput
  ownerContact: ContactUpdateOneWithoutContactDetailsInput
}

input ContactDetailUpdateWithWhereUniqueWithoutOwnerCompanyInput {
  where: ContactDetailWhereUniqueInput!
  data: ContactDetailUpdateWithoutOwnerCompanyDataInput!
}

input ContactDetailUpdateWithWhereUniqueWithoutOwnerContactInput {
  where: ContactDetailWhereUniqueInput!
  data: ContactDetailUpdateWithoutOwnerContactDataInput!
}

input ContactDetailUpdateWithWhereUniqueWithoutOwnerLeadInput {
  where: ContactDetailWhereUniqueInput!
  data: ContactDetailUpdateWithoutOwnerLeadDataInput!
}

input ContactDetailUpsertWithWhereUniqueWithoutOwnerCompanyInput {
  where: ContactDetailWhereUniqueInput!
  update: ContactDetailUpdateWithoutOwnerCompanyDataInput!
  create: ContactDetailCreateWithoutOwnerCompanyInput!
}

input ContactDetailUpsertWithWhereUniqueWithoutOwnerContactInput {
  where: ContactDetailWhereUniqueInput!
  update: ContactDetailUpdateWithoutOwnerContactDataInput!
  create: ContactDetailCreateWithoutOwnerContactInput!
}

input ContactDetailUpsertWithWhereUniqueWithoutOwnerLeadInput {
  where: ContactDetailWhereUniqueInput!
  update: ContactDetailUpdateWithoutOwnerLeadDataInput!
  create: ContactDetailCreateWithoutOwnerLeadInput!
}

input ContactDetailWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactDetailWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactDetailWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactDetailWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  kind: ContactDetailsKind

  """All values that are not equal to given value."""
  kind_not: ContactDetailsKind

  """All values that are contained in given list."""
  kind_in: [ContactDetailsKind!]

  """All values that are not contained in given list."""
  kind_not_in: [ContactDetailsKind!]
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
  rawValue: String

  """All values that are not equal to given value."""
  rawValue_not: String

  """All values that are contained in given list."""
  rawValue_in: [String!]

  """All values that are not contained in given list."""
  rawValue_not_in: [String!]

  """All values less than the given value."""
  rawValue_lt: String

  """All values less than or equal the given value."""
  rawValue_lte: String

  """All values greater than the given value."""
  rawValue_gt: String

  """All values greater than or equal the given value."""
  rawValue_gte: String

  """All values containing the given string."""
  rawValue_contains: String

  """All values not containing the given string."""
  rawValue_not_contains: String

  """All values starting with the given string."""
  rawValue_starts_with: String

  """All values not starting with the given string."""
  rawValue_not_starts_with: String

  """All values ending with the given string."""
  rawValue_ends_with: String

  """All values not ending with the given string."""
  rawValue_not_ends_with: String
  ownerCompany: CompanyWhereInput
  ownerContact: ContactWhereInput
  ownerLead: LeadWhereInput
}

input ContactDetailWhereUniqueInput {
  id: ID
}

"""An edge in a connection."""
type ContactEdge {
  """The item at the end of the edge."""
  node: Contact!

  """A cursor for use in pagination."""
  cursor: String!
}

type ContactHistoryInCompany implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  company(where: CompanyWhereInput): Company!
  contact(where: ContactWhereInput): Contact!
  position: String!
  from: DateTime!
}

"""A connection to a list of items."""
type ContactHistoryInCompanyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ContactHistoryInCompanyEdge]!
  aggregate: AggregateContactHistoryInCompany!
}

input ContactHistoryInCompanyCreateInput {
  position: String
  from: DateTime!
  company: CompanyCreateOneWithoutContactsHistoryInput!
  contact: ContactCreateOneWithoutWorkingHistoryInput!
}

input ContactHistoryInCompanyCreateManyWithoutCompanyInput {
  create: [ContactHistoryInCompanyCreateWithoutCompanyInput!]
  connect: [ContactHistoryInCompanyWhereUniqueInput!]
}

input ContactHistoryInCompanyCreateManyWithoutContactInput {
  create: [ContactHistoryInCompanyCreateWithoutContactInput!]
  connect: [ContactHistoryInCompanyWhereUniqueInput!]
}

input ContactHistoryInCompanyCreateWithoutCompanyInput {
  position: String
  from: DateTime!
  contact: ContactCreateOneWithoutWorkingHistoryInput!
}

input ContactHistoryInCompanyCreateWithoutContactInput {
  position: String
  from: DateTime!
  company: CompanyCreateOneWithoutContactsHistoryInput!
}

"""An edge in a connection."""
type ContactHistoryInCompanyEdge {
  """The item at the end of the edge."""
  node: ContactHistoryInCompany!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ContactHistoryInCompanyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  position_ASC
  position_DESC
  from_ASC
  from_DESC
}

type ContactHistoryInCompanyPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  position: String!
  from: DateTime!
}

type ContactHistoryInCompanySubscriptionPayload {
  mutation: MutationType!
  node: ContactHistoryInCompany
  updatedFields: [String!]
  previousValues: ContactHistoryInCompanyPreviousValues
}

input ContactHistoryInCompanySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactHistoryInCompanySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactHistoryInCompanySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactHistoryInCompanySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ContactHistoryInCompanyWhereInput
}

input ContactHistoryInCompanyUpdateInput {
  position: String
  from: DateTime
  company: CompanyUpdateOneWithoutContactsHistoryInput
  contact: ContactUpdateOneWithoutWorkingHistoryInput
}

input ContactHistoryInCompanyUpdateManyWithoutCompanyInput {
  create: [ContactHistoryInCompanyCreateWithoutCompanyInput!]
  connect: [ContactHistoryInCompanyWhereUniqueInput!]
  disconnect: [ContactHistoryInCompanyWhereUniqueInput!]
  delete: [ContactHistoryInCompanyWhereUniqueInput!]
  update: [ContactHistoryInCompanyUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [ContactHistoryInCompanyUpsertWithWhereUniqueWithoutCompanyInput!]
}

input ContactHistoryInCompanyUpdateManyWithoutContactInput {
  create: [ContactHistoryInCompanyCreateWithoutContactInput!]
  connect: [ContactHistoryInCompanyWhereUniqueInput!]
  disconnect: [ContactHistoryInCompanyWhereUniqueInput!]
  delete: [ContactHistoryInCompanyWhereUniqueInput!]
  update: [ContactHistoryInCompanyUpdateWithWhereUniqueWithoutContactInput!]
  upsert: [ContactHistoryInCompanyUpsertWithWhereUniqueWithoutContactInput!]
}

input ContactHistoryInCompanyUpdateWithoutCompanyDataInput {
  position: String
  from: DateTime
  contact: ContactUpdateOneWithoutWorkingHistoryInput
}

input ContactHistoryInCompanyUpdateWithoutContactDataInput {
  position: String
  from: DateTime
  company: CompanyUpdateOneWithoutContactsHistoryInput
}

input ContactHistoryInCompanyUpdateWithWhereUniqueWithoutCompanyInput {
  where: ContactHistoryInCompanyWhereUniqueInput!
  data: ContactHistoryInCompanyUpdateWithoutCompanyDataInput!
}

input ContactHistoryInCompanyUpdateWithWhereUniqueWithoutContactInput {
  where: ContactHistoryInCompanyWhereUniqueInput!
  data: ContactHistoryInCompanyUpdateWithoutContactDataInput!
}

input ContactHistoryInCompanyUpsertWithWhereUniqueWithoutCompanyInput {
  where: ContactHistoryInCompanyWhereUniqueInput!
  update: ContactHistoryInCompanyUpdateWithoutCompanyDataInput!
  create: ContactHistoryInCompanyCreateWithoutCompanyInput!
}

input ContactHistoryInCompanyUpsertWithWhereUniqueWithoutContactInput {
  where: ContactHistoryInCompanyWhereUniqueInput!
  update: ContactHistoryInCompanyUpdateWithoutContactDataInput!
  create: ContactHistoryInCompanyCreateWithoutContactInput!
}

input ContactHistoryInCompanyWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactHistoryInCompanyWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactHistoryInCompanyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactHistoryInCompanyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  position: String

  """All values that are not equal to given value."""
  position_not: String

  """All values that are contained in given list."""
  position_in: [String!]

  """All values that are not contained in given list."""
  position_not_in: [String!]

  """All values less than the given value."""
  position_lt: String

  """All values less than or equal the given value."""
  position_lte: String

  """All values greater than the given value."""
  position_gt: String

  """All values greater than or equal the given value."""
  position_gte: String

  """All values containing the given string."""
  position_contains: String

  """All values not containing the given string."""
  position_not_contains: String

  """All values starting with the given string."""
  position_starts_with: String

  """All values not starting with the given string."""
  position_not_starts_with: String

  """All values ending with the given string."""
  position_ends_with: String

  """All values not ending with the given string."""
  position_not_ends_with: String
  from: DateTime

  """All values that are not equal to given value."""
  from_not: DateTime

  """All values that are contained in given list."""
  from_in: [DateTime!]

  """All values that are not contained in given list."""
  from_not_in: [DateTime!]

  """All values less than the given value."""
  from_lt: DateTime

  """All values less than or equal the given value."""
  from_lte: DateTime

  """All values greater than the given value."""
  from_gt: DateTime

  """All values greater than or equal the given value."""
  from_gte: DateTime
  company: CompanyWhereInput
  contact: ContactWhereInput
}

input ContactHistoryInCompanyWhereUniqueInput {
  id: ID
}

enum ContactOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  middleName_ASC
  middleName_DESC
  note_ASC
  note_DESC
}

type ContactPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  middleName: String!
  note: String!
}

type ContactSubscriptionPayload {
  mutation: MutationType!
  node: Contact
  updatedFields: [String!]
  previousValues: ContactPreviousValues
}

input ContactSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ContactWhereInput
}

input ContactUpdateInput {
  firstName: String
  lastName: String
  middleName: String
  note: String
  manager: UserUpdateOneInput
  contactDetails: ContactDetailUpdateManyWithoutOwnerContactInput
  workingHistory: ContactHistoryInCompanyUpdateManyWithoutContactInput
}

input ContactUpdateOneWithoutContactDetailsInput {
  create: ContactCreateWithoutContactDetailsInput
  connect: ContactWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ContactUpdateWithoutContactDetailsDataInput
  upsert: ContactUpsertWithoutContactDetailsInput
}

input ContactUpdateOneWithoutWorkingHistoryInput {
  create: ContactCreateWithoutWorkingHistoryInput
  connect: ContactWhereUniqueInput
  delete: Boolean
  update: ContactUpdateWithoutWorkingHistoryDataInput
  upsert: ContactUpsertWithoutWorkingHistoryInput
}

input ContactUpdateWithoutContactDetailsDataInput {
  firstName: String
  lastName: String
  middleName: String
  note: String
  manager: UserUpdateOneInput
  workingHistory: ContactHistoryInCompanyUpdateManyWithoutContactInput
}

input ContactUpdateWithoutWorkingHistoryDataInput {
  firstName: String
  lastName: String
  middleName: String
  note: String
  manager: UserUpdateOneInput
  contactDetails: ContactDetailUpdateManyWithoutOwnerContactInput
}

input ContactUpsertWithoutContactDetailsInput {
  update: ContactUpdateWithoutContactDetailsDataInput!
  create: ContactCreateWithoutContactDetailsInput!
}

input ContactUpsertWithoutWorkingHistoryInput {
  update: ContactUpdateWithoutWorkingHistoryDataInput!
  create: ContactCreateWithoutWorkingHistoryInput!
}

input ContactWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  middleName: String

  """All values that are not equal to given value."""
  middleName_not: String

  """All values that are contained in given list."""
  middleName_in: [String!]

  """All values that are not contained in given list."""
  middleName_not_in: [String!]

  """All values less than the given value."""
  middleName_lt: String

  """All values less than or equal the given value."""
  middleName_lte: String

  """All values greater than the given value."""
  middleName_gt: String

  """All values greater than or equal the given value."""
  middleName_gte: String

  """All values containing the given string."""
  middleName_contains: String

  """All values not containing the given string."""
  middleName_not_contains: String

  """All values starting with the given string."""
  middleName_starts_with: String

  """All values not starting with the given string."""
  middleName_not_starts_with: String

  """All values ending with the given string."""
  middleName_ends_with: String

  """All values not ending with the given string."""
  middleName_not_ends_with: String
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  manager: UserWhereInput
  contactDetails_every: ContactDetailWhereInput
  contactDetails_some: ContactDetailWhereInput
  contactDetails_none: ContactDetailWhereInput
  workingHistory_every: ContactHistoryInCompanyWhereInput
  workingHistory_some: ContactHistoryInCompanyWhereInput
  workingHistory_none: ContactHistoryInCompanyWhereInput
}

input ContactWhereUniqueInput {
  id: ID
}

type Currency implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  code: String!
  name: String!
}

"""A connection to a list of items."""
type CurrencyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CurrencyEdge]!
  aggregate: AggregateCurrency!
}

input CurrencyCreateInput {
  code: String!
  name: String!
}

input CurrencyCreateOneInput {
  create: CurrencyCreateInput
  connect: CurrencyWhereUniqueInput
}

"""An edge in a connection."""
type CurrencyEdge {
  """The item at the end of the edge."""
  node: Currency!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CurrencyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
}

type CurrencyPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  code: String!
  name: String!
}

type CurrencySubscriptionPayload {
  mutation: MutationType!
  node: Currency
  updatedFields: [String!]
  previousValues: CurrencyPreviousValues
}

input CurrencySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrencySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrencySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrencySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CurrencyWhereInput
}

input CurrencyUpdateDataInput {
  code: String
  name: String
}

input CurrencyUpdateInput {
  code: String
  name: String
}

input CurrencyUpdateOneInput {
  create: CurrencyCreateInput
  connect: CurrencyWhereUniqueInput
  delete: Boolean
  update: CurrencyUpdateDataInput
  upsert: CurrencyUpsertNestedInput
}

input CurrencyUpsertNestedInput {
  update: CurrencyUpdateDataInput!
  create: CurrencyCreateInput!
}

input CurrencyWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrencyWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrencyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrencyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input CurrencyWhereUniqueInput {
  id: ID
}

scalar DateTime

type Lead implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
  state(where: LeadStateWhereInput): LeadState!
  note: String!
  manager(where: UserWhereInput): User!
  contactDetails(where: ContactDetailWhereInput, orderBy: ContactDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactDetail!]
}

"""A connection to a list of items."""
type LeadConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LeadEdge]!
  aggregate: AggregateLead!
}

input LeadCreateInput {
  description: String!
  note: String
  state: LeadStateCreateOneInput!
  manager: UserCreateOneInput!
  contactDetails: ContactDetailCreateManyWithoutOwnerLeadInput
}

input LeadCreateOneWithoutContactDetailsInput {
  create: LeadCreateWithoutContactDetailsInput
  connect: LeadWhereUniqueInput
}

input LeadCreateWithoutContactDetailsInput {
  description: String!
  note: String
  state: LeadStateCreateOneInput!
  manager: UserCreateOneInput!
}

"""An edge in a connection."""
type LeadEdge {
  """The item at the end of the edge."""
  node: Lead!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LeadOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  description_ASC
  description_DESC
  note_ASC
  note_DESC
}

type LeadPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
  note: String!
}

type LeadState implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  color(where: ColorWhereInput): Color!
}

"""A connection to a list of items."""
type LeadStateConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LeadStateEdge]!
  aggregate: AggregateLeadState!
}

input LeadStateCreateInput {
  name: String!
  color: ColorCreateOneInput!
}

input LeadStateCreateOneInput {
  create: LeadStateCreateInput
  connect: LeadStateWhereUniqueInput
}

"""An edge in a connection."""
type LeadStateEdge {
  """The item at the end of the edge."""
  node: LeadState!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LeadStateOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type LeadStatePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type LeadStateSubscriptionPayload {
  mutation: MutationType!
  node: LeadState
  updatedFields: [String!]
  previousValues: LeadStatePreviousValues
}

input LeadStateSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LeadStateSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeadStateSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeadStateSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LeadStateWhereInput
}

input LeadStateUpdateDataInput {
  name: String
  color: ColorUpdateOneInput
}

input LeadStateUpdateInput {
  name: String
  color: ColorUpdateOneInput
}

input LeadStateUpdateOneInput {
  create: LeadStateCreateInput
  connect: LeadStateWhereUniqueInput
  delete: Boolean
  update: LeadStateUpdateDataInput
  upsert: LeadStateUpsertNestedInput
}

input LeadStateUpsertNestedInput {
  update: LeadStateUpdateDataInput!
  create: LeadStateCreateInput!
}

input LeadStateWhereInput {
  """Logical AND on all given filters."""
  AND: [LeadStateWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeadStateWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeadStateWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  color: ColorWhereInput
}

input LeadStateWhereUniqueInput {
  id: ID
}

type LeadSubscriptionPayload {
  mutation: MutationType!
  node: Lead
  updatedFields: [String!]
  previousValues: LeadPreviousValues
}

input LeadSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LeadSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeadSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeadSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LeadWhereInput
}

input LeadUpdateInput {
  description: String
  note: String
  state: LeadStateUpdateOneInput
  manager: UserUpdateOneInput
  contactDetails: ContactDetailUpdateManyWithoutOwnerLeadInput
}

input LeadUpdateOneWithoutContactDetailsInput {
  create: LeadCreateWithoutContactDetailsInput
  connect: LeadWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LeadUpdateWithoutContactDetailsDataInput
  upsert: LeadUpsertWithoutContactDetailsInput
}

input LeadUpdateWithoutContactDetailsDataInput {
  description: String
  note: String
  state: LeadStateUpdateOneInput
  manager: UserUpdateOneInput
}

input LeadUpsertWithoutContactDetailsInput {
  update: LeadUpdateWithoutContactDetailsDataInput!
  create: LeadCreateWithoutContactDetailsInput!
}

input LeadWhereInput {
  """Logical AND on all given filters."""
  AND: [LeadWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeadWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeadWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  state: LeadStateWhereInput
  manager: UserWhereInput
  contactDetails_every: ContactDetailWhereInput
  contactDetails_some: ContactDetailWhereInput
  contactDetails_none: ContactDetailWhereInput
}

input LeadWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createCompany(data: CompanyCreateInput!): Company!
  createContact(data: ContactCreateInput!): Contact!
  createContactHistoryInCompany(data: ContactHistoryInCompanyCreateInput!): ContactHistoryInCompany!
  createContactDetail(data: ContactDetailCreateInput!): ContactDetail!
  createLead(data: LeadCreateInput!): Lead!
  createLeadState(data: LeadStateCreateInput!): LeadState!
  createColor(data: ColorCreateInput!): Color!
  createOrder(data: OrderCreateInput!): Order!
  createOrderPositions(data: OrderPositionsCreateInput!): OrderPositions!
  createCurrency(data: CurrencyCreateInput!): Currency!
  createNomenclature(data: NomenclatureCreateInput!): Nomenclature!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateContact(data: ContactUpdateInput!, where: ContactWhereUniqueInput!): Contact
  updateContactHistoryInCompany(data: ContactHistoryInCompanyUpdateInput!, where: ContactHistoryInCompanyWhereUniqueInput!): ContactHistoryInCompany
  updateContactDetail(data: ContactDetailUpdateInput!, where: ContactDetailWhereUniqueInput!): ContactDetail
  updateLead(data: LeadUpdateInput!, where: LeadWhereUniqueInput!): Lead
  updateLeadState(data: LeadStateUpdateInput!, where: LeadStateWhereUniqueInput!): LeadState
  updateColor(data: ColorUpdateInput!, where: ColorWhereUniqueInput!): Color
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateOrderPositions(data: OrderPositionsUpdateInput!, where: OrderPositionsWhereUniqueInput!): OrderPositions
  updateCurrency(data: CurrencyUpdateInput!, where: CurrencyWhereUniqueInput!): Currency
  updateNomenclature(data: NomenclatureUpdateInput!, where: NomenclatureWhereUniqueInput!): Nomenclature
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteContact(where: ContactWhereUniqueInput!): Contact
  deleteContactHistoryInCompany(where: ContactHistoryInCompanyWhereUniqueInput!): ContactHistoryInCompany
  deleteContactDetail(where: ContactDetailWhereUniqueInput!): ContactDetail
  deleteLead(where: LeadWhereUniqueInput!): Lead
  deleteLeadState(where: LeadStateWhereUniqueInput!): LeadState
  deleteColor(where: ColorWhereUniqueInput!): Color
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteOrderPositions(where: OrderPositionsWhereUniqueInput!): OrderPositions
  deleteCurrency(where: CurrencyWhereUniqueInput!): Currency
  deleteNomenclature(where: NomenclatureWhereUniqueInput!): Nomenclature
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  upsertContact(where: ContactWhereUniqueInput!, create: ContactCreateInput!, update: ContactUpdateInput!): Contact!
  upsertContactHistoryInCompany(where: ContactHistoryInCompanyWhereUniqueInput!, create: ContactHistoryInCompanyCreateInput!, update: ContactHistoryInCompanyUpdateInput!): ContactHistoryInCompany!
  upsertContactDetail(where: ContactDetailWhereUniqueInput!, create: ContactDetailCreateInput!, update: ContactDetailUpdateInput!): ContactDetail!
  upsertLead(where: LeadWhereUniqueInput!, create: LeadCreateInput!, update: LeadUpdateInput!): Lead!
  upsertLeadState(where: LeadStateWhereUniqueInput!, create: LeadStateCreateInput!, update: LeadStateUpdateInput!): LeadState!
  upsertColor(where: ColorWhereUniqueInput!, create: ColorCreateInput!, update: ColorUpdateInput!): Color!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertOrderPositions(where: OrderPositionsWhereUniqueInput!, create: OrderPositionsCreateInput!, update: OrderPositionsUpdateInput!): OrderPositions!
  upsertCurrency(where: CurrencyWhereUniqueInput!, create: CurrencyCreateInput!, update: CurrencyUpdateInput!): Currency!
  upsertNomenclature(where: NomenclatureWhereUniqueInput!, create: NomenclatureCreateInput!, update: NomenclatureUpdateInput!): Nomenclature!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCompanies(data: CompanyUpdateInput!, where: CompanyWhereInput): BatchPayload!
  updateManyContacts(data: ContactUpdateInput!, where: ContactWhereInput): BatchPayload!
  updateManyContactHistoryInCompanies(data: ContactHistoryInCompanyUpdateInput!, where: ContactHistoryInCompanyWhereInput): BatchPayload!
  updateManyContactDetails(data: ContactDetailUpdateInput!, where: ContactDetailWhereInput): BatchPayload!
  updateManyLeads(data: LeadUpdateInput!, where: LeadWhereInput): BatchPayload!
  updateManyLeadStates(data: LeadStateUpdateInput!, where: LeadStateWhereInput): BatchPayload!
  updateManyColors(data: ColorUpdateInput!, where: ColorWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateInput!, where: OrderWhereInput): BatchPayload!
  updateManyOrderPositionses(data: OrderPositionsUpdateInput!, where: OrderPositionsWhereInput): BatchPayload!
  updateManyCurrencies(data: CurrencyUpdateInput!, where: CurrencyWhereInput): BatchPayload!
  updateManyNomenclatures(data: NomenclatureUpdateInput!, where: NomenclatureWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  deleteManyContacts(where: ContactWhereInput): BatchPayload!
  deleteManyContactHistoryInCompanies(where: ContactHistoryInCompanyWhereInput): BatchPayload!
  deleteManyContactDetails(where: ContactDetailWhereInput): BatchPayload!
  deleteManyLeads(where: LeadWhereInput): BatchPayload!
  deleteManyLeadStates(where: LeadStateWhereInput): BatchPayload!
  deleteManyColors(where: ColorWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyOrderPositionses(where: OrderPositionsWhereInput): BatchPayload!
  deleteManyCurrencies(where: CurrencyWhereInput): BatchPayload!
  deleteManyNomenclatures(where: NomenclatureWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Nomenclature implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: NomenclatureType!
  name: String!
  description: String!
}

"""A connection to a list of items."""
type NomenclatureConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NomenclatureEdge]!
  aggregate: AggregateNomenclature!
}

input NomenclatureCreateInput {
  type: NomenclatureType
  name: String!
  description: String!
}

input NomenclatureCreateOneInput {
  create: NomenclatureCreateInput
  connect: NomenclatureWhereUniqueInput
}

"""An edge in a connection."""
type NomenclatureEdge {
  """The item at the end of the edge."""
  node: Nomenclature!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NomenclatureOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type NomenclaturePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: NomenclatureType!
  name: String!
  description: String!
}

type NomenclatureSubscriptionPayload {
  mutation: MutationType!
  node: Nomenclature
  updatedFields: [String!]
  previousValues: NomenclaturePreviousValues
}

input NomenclatureSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NomenclatureSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NomenclatureSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NomenclatureSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NomenclatureWhereInput
}

enum NomenclatureType {
  GOODS
  SERVICE
}

input NomenclatureUpdateDataInput {
  type: NomenclatureType
  name: String
  description: String
}

input NomenclatureUpdateInput {
  type: NomenclatureType
  name: String
  description: String
}

input NomenclatureUpdateOneInput {
  create: NomenclatureCreateInput
  connect: NomenclatureWhereUniqueInput
  delete: Boolean
  update: NomenclatureUpdateDataInput
  upsert: NomenclatureUpsertNestedInput
}

input NomenclatureUpsertNestedInput {
  update: NomenclatureUpdateDataInput!
  create: NomenclatureCreateInput!
}

input NomenclatureWhereInput {
  """Logical AND on all given filters."""
  AND: [NomenclatureWhereInput!]

  """Logical OR on all given filters."""
  OR: [NomenclatureWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NomenclatureWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: NomenclatureType

  """All values that are not equal to given value."""
  type_not: NomenclatureType

  """All values that are contained in given list."""
  type_in: [NomenclatureType!]

  """All values that are not contained in given list."""
  type_not_in: [NomenclatureType!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

input NomenclatureWhereUniqueInput {
  id: ID
}

type Order implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  customer(where: CompanyWhereInput): Company!
  manager(where: UserWhereInput): User
  positions(where: OrderPositionsWhereInput, orderBy: OrderPositionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderPositions!]
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  customer: CompanyCreateOneInput!
  manager: UserCreateOneInput
  positions: OrderPositionsCreateManyInput
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPositions implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  nomenclature(where: NomenclatureWhereInput): Nomenclature!
  quantity: Float!
  price: Float!
  amount: Float!
  currency(where: CurrencyWhereInput): Currency!
}

"""A connection to a list of items."""
type OrderPositionsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderPositionsEdge]!
  aggregate: AggregateOrderPositions!
}

input OrderPositionsCreateInput {
  quantity: Float!
  price: Float!
  amount: Float!
  nomenclature: NomenclatureCreateOneInput!
  currency: CurrencyCreateOneInput!
}

input OrderPositionsCreateManyInput {
  create: [OrderPositionsCreateInput!]
  connect: [OrderPositionsWhereUniqueInput!]
}

"""An edge in a connection."""
type OrderPositionsEdge {
  """The item at the end of the edge."""
  node: OrderPositions!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderPositionsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  quantity_ASC
  quantity_DESC
  price_ASC
  price_DESC
  amount_ASC
  amount_DESC
}

type OrderPositionsPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  quantity: Float!
  price: Float!
  amount: Float!
}

type OrderPositionsSubscriptionPayload {
  mutation: MutationType!
  node: OrderPositions
  updatedFields: [String!]
  previousValues: OrderPositionsPreviousValues
}

input OrderPositionsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderPositionsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderPositionsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderPositionsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderPositionsWhereInput
}

input OrderPositionsUpdateDataInput {
  quantity: Float
  price: Float
  amount: Float
  nomenclature: NomenclatureUpdateOneInput
  currency: CurrencyUpdateOneInput
}

input OrderPositionsUpdateInput {
  quantity: Float
  price: Float
  amount: Float
  nomenclature: NomenclatureUpdateOneInput
  currency: CurrencyUpdateOneInput
}

input OrderPositionsUpdateManyInput {
  create: [OrderPositionsCreateInput!]
  connect: [OrderPositionsWhereUniqueInput!]
  disconnect: [OrderPositionsWhereUniqueInput!]
  delete: [OrderPositionsWhereUniqueInput!]
  update: [OrderPositionsUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderPositionsUpsertWithWhereUniqueNestedInput!]
}

input OrderPositionsUpdateWithWhereUniqueNestedInput {
  where: OrderPositionsWhereUniqueInput!
  data: OrderPositionsUpdateDataInput!
}

input OrderPositionsUpsertWithWhereUniqueNestedInput {
  where: OrderPositionsWhereUniqueInput!
  update: OrderPositionsUpdateDataInput!
  create: OrderPositionsCreateInput!
}

input OrderPositionsWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderPositionsWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderPositionsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderPositionsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  quantity: Float

  """All values that are not equal to given value."""
  quantity_not: Float

  """All values that are contained in given list."""
  quantity_in: [Float!]

  """All values that are not contained in given list."""
  quantity_not_in: [Float!]

  """All values less than the given value."""
  quantity_lt: Float

  """All values less than or equal the given value."""
  quantity_lte: Float

  """All values greater than the given value."""
  quantity_gt: Float

  """All values greater than or equal the given value."""
  quantity_gte: Float
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  nomenclature: NomenclatureWhereInput
  currency: CurrencyWhereInput
}

input OrderPositionsWhereUniqueInput {
  id: ID
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

input OrderUpdateInput {
  customer: CompanyUpdateOneInput
  manager: UserUpdateOneInput
  positions: OrderPositionsUpdateManyInput
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  customer: CompanyWhereInput
  manager: UserWhereInput
  positions_every: OrderPositionsWhereInput
  positions_some: OrderPositionsWhereInput
  positions_none: OrderPositionsWhereInput
}

input OrderWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  contacts(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contact]!
  contactHistoryInCompanies(where: ContactHistoryInCompanyWhereInput, orderBy: ContactHistoryInCompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactHistoryInCompany]!
  contactDetails(where: ContactDetailWhereInput, orderBy: ContactDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactDetail]!
  leads(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lead]!
  leadStates(where: LeadStateWhereInput, orderBy: LeadStateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeadState]!
  colors(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Color]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  orderPositionses(where: OrderPositionsWhereInput, orderBy: OrderPositionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderPositions]!
  currencies(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Currency]!
  nomenclatures(where: NomenclatureWhereInput, orderBy: NomenclatureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nomenclature]!
  user(where: UserWhereUniqueInput!): User
  company(where: CompanyWhereUniqueInput!): Company
  contact(where: ContactWhereUniqueInput!): Contact
  contactHistoryInCompany(where: ContactHistoryInCompanyWhereUniqueInput!): ContactHistoryInCompany
  contactDetail(where: ContactDetailWhereUniqueInput!): ContactDetail
  lead(where: LeadWhereUniqueInput!): Lead
  leadState(where: LeadStateWhereUniqueInput!): LeadState
  color(where: ColorWhereUniqueInput!): Color
  order(where: OrderWhereUniqueInput!): Order
  orderPositions(where: OrderPositionsWhereUniqueInput!): OrderPositions
  currency(where: CurrencyWhereUniqueInput!): Currency
  nomenclature(where: NomenclatureWhereUniqueInput!): Nomenclature
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  contactsConnection(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactConnection!
  contactHistoryInCompaniesConnection(where: ContactHistoryInCompanyWhereInput, orderBy: ContactHistoryInCompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactHistoryInCompanyConnection!
  contactDetailsConnection(where: ContactDetailWhereInput, orderBy: ContactDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactDetailConnection!
  leadsConnection(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeadConnection!
  leadStatesConnection(where: LeadStateWhereInput, orderBy: LeadStateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeadStateConnection!
  colorsConnection(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ColorConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderPositionsesConnection(where: OrderPositionsWhereInput, orderBy: OrderPositionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderPositionsConnection!
  currenciesConnection(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CurrencyConnection!
  nomenclaturesConnection(where: NomenclatureWhereInput, orderBy: NomenclatureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NomenclatureConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  contact(where: ContactSubscriptionWhereInput): ContactSubscriptionPayload
  contactHistoryInCompany(where: ContactHistoryInCompanySubscriptionWhereInput): ContactHistoryInCompanySubscriptionPayload
  contactDetail(where: ContactDetailSubscriptionWhereInput): ContactDetailSubscriptionPayload
  lead(where: LeadSubscriptionWhereInput): LeadSubscriptionPayload
  leadState(where: LeadStateSubscriptionWhereInput): LeadStateSubscriptionPayload
  color(where: ColorSubscriptionWhereInput): ColorSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderPositions(where: OrderPositionsSubscriptionWhereInput): OrderPositionsSubscriptionPayload
  currency(where: CurrencySubscriptionWhereInput): CurrencySubscriptionPayload
  nomenclature(where: NomenclatureSubscriptionWhereInput): NomenclatureSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ColorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'hexValue_ASC' |
  'hexValue_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CompanyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'note_ASC' |
  'note_DESC' |
  'legalName_ASC' |
  'legalName_DESC'

export type ContactDetailsKind =   'EMAIL' |
  'PHONE' |
  'ADDRESS'

export type NomenclatureOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type LeadStateOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type CurrencyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'code_ASC' |
  'code_DESC' |
  'name_ASC' |
  'name_DESC'

export type ContactDetailOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'kind_ASC' |
  'kind_DESC' |
  'value_ASC' |
  'value_DESC' |
  'rawValue_ASC' |
  'rawValue_DESC'

export type ContactHistoryInCompanyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'position_ASC' |
  'position_DESC' |
  'from_ASC' |
  'from_DESC'

export type ContactOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'middleName_ASC' |
  'middleName_DESC' |
  'note_ASC' |
  'note_DESC'

export type LeadOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'description_ASC' |
  'description_DESC' |
  'note_ASC' |
  'note_DESC'

export type OrderPositionsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'price_ASC' |
  'price_DESC' |
  'amount_ASC' |
  'amount_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NomenclatureType =   'GOODS' |
  'SERVICE'

export type OrderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface ContactHistoryInCompanyCreateInput {
  position?: String
  from: DateTime
  company: CompanyCreateOneWithoutContactsHistoryInput
  contact: ContactCreateOneWithoutWorkingHistoryInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface ContactDetailUpdateManyWithoutOwnerContactInput {
  create?: ContactDetailCreateWithoutOwnerContactInput[] | ContactDetailCreateWithoutOwnerContactInput
  connect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  disconnect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  delete?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  update?: ContactDetailUpdateWithWhereUniqueWithoutOwnerContactInput[] | ContactDetailUpdateWithWhereUniqueWithoutOwnerContactInput
  upsert?: ContactDetailUpsertWithWhereUniqueWithoutOwnerContactInput[] | ContactDetailUpsertWithWhereUniqueWithoutOwnerContactInput
}

export interface ContactDetailUpsertWithWhereUniqueWithoutOwnerCompanyInput {
  where: ContactDetailWhereUniqueInput
  update: ContactDetailUpdateWithoutOwnerCompanyDataInput
  create: ContactDetailCreateWithoutOwnerCompanyInput
}

export interface ContactUpdateWithoutWorkingHistoryDataInput {
  firstName?: String
  lastName?: String
  middleName?: String
  note?: String
  manager?: UserUpdateOneInput
  contactDetails?: ContactDetailUpdateManyWithoutOwnerContactInput
}

export interface NomenclatureCreateOneInput {
  create?: NomenclatureCreateInput
  connect?: NomenclatureWhereUniqueInput
}

export interface ContactUpdateOneWithoutWorkingHistoryInput {
  create?: ContactCreateWithoutWorkingHistoryInput
  connect?: ContactWhereUniqueInput
  delete?: Boolean
  update?: ContactUpdateWithoutWorkingHistoryDataInput
  upsert?: ContactUpsertWithoutWorkingHistoryInput
}

export interface CurrencySubscriptionWhereInput {
  AND?: CurrencySubscriptionWhereInput[] | CurrencySubscriptionWhereInput
  OR?: CurrencySubscriptionWhereInput[] | CurrencySubscriptionWhereInput
  NOT?: CurrencySubscriptionWhereInput[] | CurrencySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CurrencyWhereInput
}

export interface ContactHistoryInCompanyUpdateWithoutCompanyDataInput {
  position?: String
  from?: DateTime
  contact?: ContactUpdateOneWithoutWorkingHistoryInput
}

export interface OrderPositionsSubscriptionWhereInput {
  AND?: OrderPositionsSubscriptionWhereInput[] | OrderPositionsSubscriptionWhereInput
  OR?: OrderPositionsSubscriptionWhereInput[] | OrderPositionsSubscriptionWhereInput
  NOT?: OrderPositionsSubscriptionWhereInput[] | OrderPositionsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderPositionsWhereInput
}

export interface ContactHistoryInCompanyUpdateWithWhereUniqueWithoutCompanyInput {
  where: ContactHistoryInCompanyWhereUniqueInput
  data: ContactHistoryInCompanyUpdateWithoutCompanyDataInput
}

export interface ColorSubscriptionWhereInput {
  AND?: ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput
  OR?: ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput
  NOT?: ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ColorWhereInput
}

export interface UserCreateInput {
  email: String
  password: String
  name?: String
}

export interface LeadWhereInput {
  AND?: LeadWhereInput[] | LeadWhereInput
  OR?: LeadWhereInput[] | LeadWhereInput
  NOT?: LeadWhereInput[] | LeadWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  state?: LeadStateWhereInput
  manager?: UserWhereInput
  contactDetails_every?: ContactDetailWhereInput
  contactDetails_some?: ContactDetailWhereInput
  contactDetails_none?: ContactDetailWhereInput
}

export interface CompanyCreateInput {
  name: String
  note?: String
  legalName?: String
  manager?: UserCreateOneInput
  contactDetails?: ContactDetailCreateManyWithoutOwnerCompanyInput
  contactsHistory?: ContactHistoryInCompanyCreateManyWithoutCompanyInput
}

export interface ContactWhereInput {
  AND?: ContactWhereInput[] | ContactWhereInput
  OR?: ContactWhereInput[] | ContactWhereInput
  NOT?: ContactWhereInput[] | ContactWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  middleName?: String
  middleName_not?: String
  middleName_in?: String[] | String
  middleName_not_in?: String[] | String
  middleName_lt?: String
  middleName_lte?: String
  middleName_gt?: String
  middleName_gte?: String
  middleName_contains?: String
  middleName_not_contains?: String
  middleName_starts_with?: String
  middleName_not_starts_with?: String
  middleName_ends_with?: String
  middleName_not_ends_with?: String
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  manager?: UserWhereInput
  contactDetails_every?: ContactDetailWhereInput
  contactDetails_some?: ContactDetailWhereInput
  contactDetails_none?: ContactDetailWhereInput
  workingHistory_every?: ContactHistoryInCompanyWhereInput
  workingHistory_some?: ContactHistoryInCompanyWhereInput
  workingHistory_none?: ContactHistoryInCompanyWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput
  OR?: OrderWhereInput[] | OrderWhereInput
  NOT?: OrderWhereInput[] | OrderWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  customer?: CompanyWhereInput
  manager?: UserWhereInput
  positions_every?: OrderPositionsWhereInput
  positions_some?: OrderPositionsWhereInput
  positions_none?: OrderPositionsWhereInput
}

export interface ContactDetailCreateManyWithoutOwnerCompanyInput {
  create?: ContactDetailCreateWithoutOwnerCompanyInput[] | ContactDetailCreateWithoutOwnerCompanyInput
  connect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
}

export interface LeadSubscriptionWhereInput {
  AND?: LeadSubscriptionWhereInput[] | LeadSubscriptionWhereInput
  OR?: LeadSubscriptionWhereInput[] | LeadSubscriptionWhereInput
  NOT?: LeadSubscriptionWhereInput[] | LeadSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LeadWhereInput
}

export interface ContactDetailCreateWithoutOwnerCompanyInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerContact?: ContactCreateOneWithoutContactDetailsInput
  ownerLead?: LeadCreateOneWithoutContactDetailsInput
}

export interface CompanyWhereInput {
  AND?: CompanyWhereInput[] | CompanyWhereInput
  OR?: CompanyWhereInput[] | CompanyWhereInput
  NOT?: CompanyWhereInput[] | CompanyWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  legalName?: String
  legalName_not?: String
  legalName_in?: String[] | String
  legalName_not_in?: String[] | String
  legalName_lt?: String
  legalName_lte?: String
  legalName_gt?: String
  legalName_gte?: String
  legalName_contains?: String
  legalName_not_contains?: String
  legalName_starts_with?: String
  legalName_not_starts_with?: String
  legalName_ends_with?: String
  legalName_not_ends_with?: String
  manager?: UserWhereInput
  contactDetails_every?: ContactDetailWhereInput
  contactDetails_some?: ContactDetailWhereInput
  contactDetails_none?: ContactDetailWhereInput
  contactsHistory_every?: ContactHistoryInCompanyWhereInput
  contactsHistory_some?: ContactHistoryInCompanyWhereInput
  contactsHistory_none?: ContactHistoryInCompanyWhereInput
}

export interface ContactCreateOneWithoutContactDetailsInput {
  create?: ContactCreateWithoutContactDetailsInput
  connect?: ContactWhereUniqueInput
}

export interface ContactHistoryInCompanySubscriptionWhereInput {
  AND?: ContactHistoryInCompanySubscriptionWhereInput[] | ContactHistoryInCompanySubscriptionWhereInput
  OR?: ContactHistoryInCompanySubscriptionWhereInput[] | ContactHistoryInCompanySubscriptionWhereInput
  NOT?: ContactHistoryInCompanySubscriptionWhereInput[] | ContactHistoryInCompanySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ContactHistoryInCompanyWhereInput
}

export interface ContactCreateWithoutContactDetailsInput {
  firstName: String
  lastName?: String
  middleName?: String
  note?: String
  manager?: UserCreateOneInput
  workingHistory?: ContactHistoryInCompanyCreateManyWithoutContactInput
}

export interface CompanySubscriptionWhereInput {
  AND?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  OR?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  NOT?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CompanyWhereInput
}

export interface ContactHistoryInCompanyCreateManyWithoutContactInput {
  create?: ContactHistoryInCompanyCreateWithoutContactInput[] | ContactHistoryInCompanyCreateWithoutContactInput
  connect?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
}

export interface NomenclatureUpdateInput {
  type?: NomenclatureType
  name?: String
  description?: String
}

export interface ContactHistoryInCompanyCreateWithoutContactInput {
  position?: String
  from: DateTime
  company: CompanyCreateOneWithoutContactsHistoryInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface CompanyCreateOneWithoutContactsHistoryInput {
  create?: CompanyCreateWithoutContactsHistoryInput
  connect?: CompanyWhereUniqueInput
}

export interface ContactWhereUniqueInput {
  id?: ID_Input
}

export interface CompanyCreateWithoutContactsHistoryInput {
  name: String
  note?: String
  legalName?: String
  manager?: UserCreateOneInput
  contactDetails?: ContactDetailCreateManyWithoutOwnerCompanyInput
}

export interface ContactDetailWhereUniqueInput {
  id?: ID_Input
}

export interface LeadCreateOneWithoutContactDetailsInput {
  create?: LeadCreateWithoutContactDetailsInput
  connect?: LeadWhereUniqueInput
}

export interface LeadStateWhereUniqueInput {
  id?: ID_Input
}

export interface LeadCreateWithoutContactDetailsInput {
  description: String
  note?: String
  state: LeadStateCreateOneInput
  manager: UserCreateOneInput
}

export interface OrderWhereUniqueInput {
  id?: ID_Input
}

export interface LeadStateCreateOneInput {
  create?: LeadStateCreateInput
  connect?: LeadStateWhereUniqueInput
}

export interface CurrencyWhereUniqueInput {
  id?: ID_Input
}

export interface LeadStateCreateInput {
  name: String
  color: ColorCreateOneInput
}

export interface OrderPositionsUpdateInput {
  quantity?: Float
  price?: Float
  amount?: Float
  nomenclature?: NomenclatureUpdateOneInput
  currency?: CurrencyUpdateOneInput
}

export interface ColorCreateOneInput {
  create?: ColorCreateInput
  connect?: ColorWhereUniqueInput
}

export interface CurrencyUpsertNestedInput {
  update: CurrencyUpdateDataInput
  create: CurrencyCreateInput
}

export interface ColorCreateInput {
  name?: String
  hexValue: String
}

export interface CurrencyUpdateOneInput {
  create?: CurrencyCreateInput
  connect?: CurrencyWhereUniqueInput
  delete?: Boolean
  update?: CurrencyUpdateDataInput
  upsert?: CurrencyUpsertNestedInput
}

export interface ContactHistoryInCompanyCreateManyWithoutCompanyInput {
  create?: ContactHistoryInCompanyCreateWithoutCompanyInput[] | ContactHistoryInCompanyCreateWithoutCompanyInput
  connect?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
}

export interface NomenclatureUpdateDataInput {
  type?: NomenclatureType
  name?: String
  description?: String
}

export interface ContactHistoryInCompanyCreateWithoutCompanyInput {
  position?: String
  from: DateTime
  contact: ContactCreateOneWithoutWorkingHistoryInput
}

export interface OrderPositionsUpdateDataInput {
  quantity?: Float
  price?: Float
  amount?: Float
  nomenclature?: NomenclatureUpdateOneInput
  currency?: CurrencyUpdateOneInput
}

export interface ContactCreateOneWithoutWorkingHistoryInput {
  create?: ContactCreateWithoutWorkingHistoryInput
  connect?: ContactWhereUniqueInput
}

export interface OrderPositionsUpdateManyInput {
  create?: OrderPositionsCreateInput[] | OrderPositionsCreateInput
  connect?: OrderPositionsWhereUniqueInput[] | OrderPositionsWhereUniqueInput
  disconnect?: OrderPositionsWhereUniqueInput[] | OrderPositionsWhereUniqueInput
  delete?: OrderPositionsWhereUniqueInput[] | OrderPositionsWhereUniqueInput
  update?: OrderPositionsUpdateWithWhereUniqueNestedInput[] | OrderPositionsUpdateWithWhereUniqueNestedInput
  upsert?: OrderPositionsUpsertWithWhereUniqueNestedInput[] | OrderPositionsUpsertWithWhereUniqueNestedInput
}

export interface ContactCreateWithoutWorkingHistoryInput {
  firstName: String
  lastName?: String
  middleName?: String
  note?: String
  manager?: UserCreateOneInput
  contactDetails?: ContactDetailCreateManyWithoutOwnerContactInput
}

export interface CompanyUpdateDataInput {
  name?: String
  note?: String
  legalName?: String
  manager?: UserUpdateOneInput
  contactDetails?: ContactDetailUpdateManyWithoutOwnerCompanyInput
  contactsHistory?: ContactHistoryInCompanyUpdateManyWithoutCompanyInput
}

export interface ContactDetailCreateManyWithoutOwnerContactInput {
  create?: ContactDetailCreateWithoutOwnerContactInput[] | ContactDetailCreateWithoutOwnerContactInput
  connect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
}

export interface OrderUpdateInput {
  customer?: CompanyUpdateOneInput
  manager?: UserUpdateOneInput
  positions?: OrderPositionsUpdateManyInput
}

export interface ContactDetailCreateWithoutOwnerContactInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerCompany?: CompanyCreateOneWithoutContactDetailsInput
  ownerLead?: LeadCreateOneWithoutContactDetailsInput
}

export interface LeadStateUpdateInput {
  name?: String
  color?: ColorUpdateOneInput
}

export interface CompanyCreateOneWithoutContactDetailsInput {
  create?: CompanyCreateWithoutContactDetailsInput
  connect?: CompanyWhereUniqueInput
}

export interface ContactDetailUpdateWithoutOwnerLeadDataInput {
  kind?: ContactDetailsKind
  value?: String
  rawValue?: String
  ownerCompany?: CompanyUpdateOneWithoutContactDetailsInput
  ownerContact?: ContactUpdateOneWithoutContactDetailsInput
}

export interface CompanyCreateWithoutContactDetailsInput {
  name: String
  note?: String
  legalName?: String
  manager?: UserCreateOneInput
  contactsHistory?: ContactHistoryInCompanyCreateManyWithoutCompanyInput
}

export interface ContactDetailUpdateManyWithoutOwnerLeadInput {
  create?: ContactDetailCreateWithoutOwnerLeadInput[] | ContactDetailCreateWithoutOwnerLeadInput
  connect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  disconnect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  delete?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  update?: ContactDetailUpdateWithWhereUniqueWithoutOwnerLeadInput[] | ContactDetailUpdateWithWhereUniqueWithoutOwnerLeadInput
  upsert?: ContactDetailUpsertWithWhereUniqueWithoutOwnerLeadInput[] | ContactDetailUpsertWithWhereUniqueWithoutOwnerLeadInput
}

export interface ContactCreateInput {
  firstName: String
  lastName?: String
  middleName?: String
  note?: String
  manager?: UserCreateOneInput
  contactDetails?: ContactDetailCreateManyWithoutOwnerContactInput
  workingHistory?: ContactHistoryInCompanyCreateManyWithoutContactInput
}

export interface ContactDetailUpdateInput {
  kind?: ContactDetailsKind
  value?: String
  rawValue?: String
  ownerCompany?: CompanyUpdateOneWithoutContactDetailsInput
  ownerContact?: ContactUpdateOneWithoutContactDetailsInput
  ownerLead?: LeadUpdateOneWithoutContactDetailsInput
}

export interface ContactHistoryInCompanyUpdateManyWithoutCompanyInput {
  create?: ContactHistoryInCompanyCreateWithoutCompanyInput[] | ContactHistoryInCompanyCreateWithoutCompanyInput
  connect?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
  disconnect?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
  delete?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
  update?: ContactHistoryInCompanyUpdateWithWhereUniqueWithoutCompanyInput[] | ContactHistoryInCompanyUpdateWithWhereUniqueWithoutCompanyInput
  upsert?: ContactHistoryInCompanyUpsertWithWhereUniqueWithoutCompanyInput[] | ContactHistoryInCompanyUpsertWithWhereUniqueWithoutCompanyInput
}

export interface ContactUpdateInput {
  firstName?: String
  lastName?: String
  middleName?: String
  note?: String
  manager?: UserUpdateOneInput
  contactDetails?: ContactDetailUpdateManyWithoutOwnerContactInput
  workingHistory?: ContactHistoryInCompanyUpdateManyWithoutContactInput
}

export interface ContactDetailCreateInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerCompany?: CompanyCreateOneWithoutContactDetailsInput
  ownerContact?: ContactCreateOneWithoutContactDetailsInput
  ownerLead?: LeadCreateOneWithoutContactDetailsInput
}

export interface ContactUpsertWithoutWorkingHistoryInput {
  update: ContactUpdateWithoutWorkingHistoryDataInput
  create: ContactCreateWithoutWorkingHistoryInput
}

export interface LeadCreateInput {
  description: String
  note?: String
  state: LeadStateCreateOneInput
  manager: UserCreateOneInput
  contactDetails?: ContactDetailCreateManyWithoutOwnerLeadInput
}

export interface CompanyUpsertWithoutContactDetailsInput {
  update: CompanyUpdateWithoutContactDetailsDataInput
  create: CompanyCreateWithoutContactDetailsInput
}

export interface ContactDetailCreateManyWithoutOwnerLeadInput {
  create?: ContactDetailCreateWithoutOwnerLeadInput[] | ContactDetailCreateWithoutOwnerLeadInput
  connect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
}

export interface CompanyUpdateOneWithoutContactDetailsInput {
  create?: CompanyCreateWithoutContactDetailsInput
  connect?: CompanyWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CompanyUpdateWithoutContactDetailsDataInput
  upsert?: CompanyUpsertWithoutContactDetailsInput
}

export interface ContactDetailCreateWithoutOwnerLeadInput {
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerCompany?: CompanyCreateOneWithoutContactDetailsInput
  ownerContact?: ContactCreateOneWithoutContactDetailsInput
}

export interface ContactDetailUpdateWithWhereUniqueWithoutOwnerContactInput {
  where: ContactDetailWhereUniqueInput
  data: ContactDetailUpdateWithoutOwnerContactDataInput
}

export interface OrderCreateInput {
  customer: CompanyCreateOneInput
  manager?: UserCreateOneInput
  positions?: OrderPositionsCreateManyInput
}

export interface LeadStateWhereInput {
  AND?: LeadStateWhereInput[] | LeadStateWhereInput
  OR?: LeadStateWhereInput[] | LeadStateWhereInput
  NOT?: LeadStateWhereInput[] | LeadStateWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  color?: ColorWhereInput
}

export interface CompanyCreateOneInput {
  create?: CompanyCreateInput
  connect?: CompanyWhereUniqueInput
}

export interface LeadStateSubscriptionWhereInput {
  AND?: LeadStateSubscriptionWhereInput[] | LeadStateSubscriptionWhereInput
  OR?: LeadStateSubscriptionWhereInput[] | LeadStateSubscriptionWhereInput
  NOT?: LeadStateSubscriptionWhereInput[] | LeadStateSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LeadStateWhereInput
}

export interface OrderPositionsCreateManyInput {
  create?: OrderPositionsCreateInput[] | OrderPositionsCreateInput
  connect?: OrderPositionsWhereUniqueInput[] | OrderPositionsWhereUniqueInput
}

export interface ContactDetailWhereInput {
  AND?: ContactDetailWhereInput[] | ContactDetailWhereInput
  OR?: ContactDetailWhereInput[] | ContactDetailWhereInput
  NOT?: ContactDetailWhereInput[] | ContactDetailWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  kind?: ContactDetailsKind
  kind_not?: ContactDetailsKind
  kind_in?: ContactDetailsKind[] | ContactDetailsKind
  kind_not_in?: ContactDetailsKind[] | ContactDetailsKind
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  rawValue?: String
  rawValue_not?: String
  rawValue_in?: String[] | String
  rawValue_not_in?: String[] | String
  rawValue_lt?: String
  rawValue_lte?: String
  rawValue_gt?: String
  rawValue_gte?: String
  rawValue_contains?: String
  rawValue_not_contains?: String
  rawValue_starts_with?: String
  rawValue_not_starts_with?: String
  rawValue_ends_with?: String
  rawValue_not_ends_with?: String
  ownerCompany?: CompanyWhereInput
  ownerContact?: ContactWhereInput
  ownerLead?: LeadWhereInput
}

export interface OrderPositionsCreateInput {
  quantity: Float
  price: Float
  amount: Float
  nomenclature: NomenclatureCreateOneInput
  currency: CurrencyCreateOneInput
}

export interface NomenclatureWhereInput {
  AND?: NomenclatureWhereInput[] | NomenclatureWhereInput
  OR?: NomenclatureWhereInput[] | NomenclatureWhereInput
  NOT?: NomenclatureWhereInput[] | NomenclatureWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: NomenclatureType
  type_not?: NomenclatureType
  type_in?: NomenclatureType[] | NomenclatureType
  type_not_in?: NomenclatureType[] | NomenclatureType
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface ColorWhereInput {
  AND?: ColorWhereInput[] | ColorWhereInput
  OR?: ColorWhereInput[] | ColorWhereInput
  NOT?: ColorWhereInput[] | ColorWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  hexValue?: String
  hexValue_not?: String
  hexValue_in?: String[] | String
  hexValue_not_in?: String[] | String
  hexValue_lt?: String
  hexValue_lte?: String
  hexValue_gt?: String
  hexValue_gte?: String
  hexValue_contains?: String
  hexValue_not_contains?: String
  hexValue_starts_with?: String
  hexValue_not_starts_with?: String
  hexValue_ends_with?: String
  hexValue_not_ends_with?: String
}

export interface ContactDetailSubscriptionWhereInput {
  AND?: ContactDetailSubscriptionWhereInput[] | ContactDetailSubscriptionWhereInput
  OR?: ContactDetailSubscriptionWhereInput[] | ContactDetailSubscriptionWhereInput
  NOT?: ContactDetailSubscriptionWhereInput[] | ContactDetailSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ContactDetailWhereInput
}

export interface NomenclatureCreateInput {
  type?: NomenclatureType
  name: String
  description: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface CurrencyCreateOneInput {
  create?: CurrencyCreateInput
  connect?: CurrencyWhereUniqueInput
}

export interface CompanyWhereUniqueInput {
  id?: ID_Input
}

export interface CurrencyCreateInput {
  code: String
  name: String
}

export interface LeadWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
}

export interface OrderPositionsWhereUniqueInput {
  id?: ID_Input
}

export interface CompanyUpdateInput {
  name?: String
  note?: String
  legalName?: String
  manager?: UserUpdateOneInput
  contactDetails?: ContactDetailUpdateManyWithoutOwnerCompanyInput
  contactsHistory?: ContactHistoryInCompanyUpdateManyWithoutCompanyInput
}

export interface OrderPositionsUpsertWithWhereUniqueNestedInput {
  where: OrderPositionsWhereUniqueInput
  update: OrderPositionsUpdateDataInput
  create: OrderPositionsCreateInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface NomenclatureUpsertNestedInput {
  update: NomenclatureUpdateDataInput
  create: NomenclatureCreateInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  name?: String
}

export interface OrderPositionsUpdateWithWhereUniqueNestedInput {
  where: OrderPositionsWhereUniqueInput
  data: OrderPositionsUpdateDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface CompanyUpdateOneInput {
  create?: CompanyCreateInput
  connect?: CompanyWhereUniqueInput
  delete?: Boolean
  update?: CompanyUpdateDataInput
  upsert?: CompanyUpsertNestedInput
}

export interface ContactDetailUpdateManyWithoutOwnerCompanyInput {
  create?: ContactDetailCreateWithoutOwnerCompanyInput[] | ContactDetailCreateWithoutOwnerCompanyInput
  connect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  disconnect?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  delete?: ContactDetailWhereUniqueInput[] | ContactDetailWhereUniqueInput
  update?: ContactDetailUpdateWithWhereUniqueWithoutOwnerCompanyInput[] | ContactDetailUpdateWithWhereUniqueWithoutOwnerCompanyInput
  upsert?: ContactDetailUpsertWithWhereUniqueWithoutOwnerCompanyInput[] | ContactDetailUpsertWithWhereUniqueWithoutOwnerCompanyInput
}

export interface ContactDetailUpsertWithWhereUniqueWithoutOwnerLeadInput {
  where: ContactDetailWhereUniqueInput
  update: ContactDetailUpdateWithoutOwnerLeadDataInput
  create: ContactDetailCreateWithoutOwnerLeadInput
}

export interface ContactDetailUpdateWithWhereUniqueWithoutOwnerCompanyInput {
  where: ContactDetailWhereUniqueInput
  data: ContactDetailUpdateWithoutOwnerCompanyDataInput
}

export interface LeadUpdateInput {
  description?: String
  note?: String
  state?: LeadStateUpdateOneInput
  manager?: UserUpdateOneInput
  contactDetails?: ContactDetailUpdateManyWithoutOwnerLeadInput
}

export interface ContactDetailUpdateWithoutOwnerCompanyDataInput {
  kind?: ContactDetailsKind
  value?: String
  rawValue?: String
  ownerContact?: ContactUpdateOneWithoutContactDetailsInput
  ownerLead?: LeadUpdateOneWithoutContactDetailsInput
}

export interface ContactHistoryInCompanyUpsertWithWhereUniqueWithoutCompanyInput {
  where: ContactHistoryInCompanyWhereUniqueInput
  update: ContactHistoryInCompanyUpdateWithoutCompanyDataInput
  create: ContactHistoryInCompanyCreateWithoutCompanyInput
}

export interface ContactUpdateOneWithoutContactDetailsInput {
  create?: ContactCreateWithoutContactDetailsInput
  connect?: ContactWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ContactUpdateWithoutContactDetailsDataInput
  upsert?: ContactUpsertWithoutContactDetailsInput
}

export interface CompanyUpdateWithoutContactDetailsDataInput {
  name?: String
  note?: String
  legalName?: String
  manager?: UserUpdateOneInput
  contactsHistory?: ContactHistoryInCompanyUpdateManyWithoutCompanyInput
}

export interface ContactUpdateWithoutContactDetailsDataInput {
  firstName?: String
  lastName?: String
  middleName?: String
  note?: String
  manager?: UserUpdateOneInput
  workingHistory?: ContactHistoryInCompanyUpdateManyWithoutContactInput
}

export interface NomenclatureSubscriptionWhereInput {
  AND?: NomenclatureSubscriptionWhereInput[] | NomenclatureSubscriptionWhereInput
  OR?: NomenclatureSubscriptionWhereInput[] | NomenclatureSubscriptionWhereInput
  NOT?: NomenclatureSubscriptionWhereInput[] | NomenclatureSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NomenclatureWhereInput
}

export interface ContactHistoryInCompanyUpdateManyWithoutContactInput {
  create?: ContactHistoryInCompanyCreateWithoutContactInput[] | ContactHistoryInCompanyCreateWithoutContactInput
  connect?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
  disconnect?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
  delete?: ContactHistoryInCompanyWhereUniqueInput[] | ContactHistoryInCompanyWhereUniqueInput
  update?: ContactHistoryInCompanyUpdateWithWhereUniqueWithoutContactInput[] | ContactHistoryInCompanyUpdateWithWhereUniqueWithoutContactInput
  upsert?: ContactHistoryInCompanyUpsertWithWhereUniqueWithoutContactInput[] | ContactHistoryInCompanyUpsertWithWhereUniqueWithoutContactInput
}

export interface ContactHistoryInCompanyWhereInput {
  AND?: ContactHistoryInCompanyWhereInput[] | ContactHistoryInCompanyWhereInput
  OR?: ContactHistoryInCompanyWhereInput[] | ContactHistoryInCompanyWhereInput
  NOT?: ContactHistoryInCompanyWhereInput[] | ContactHistoryInCompanyWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  position?: String
  position_not?: String
  position_in?: String[] | String
  position_not_in?: String[] | String
  position_lt?: String
  position_lte?: String
  position_gt?: String
  position_gte?: String
  position_contains?: String
  position_not_contains?: String
  position_starts_with?: String
  position_not_starts_with?: String
  position_ends_with?: String
  position_not_ends_with?: String
  from?: DateTime
  from_not?: DateTime
  from_in?: DateTime[] | DateTime
  from_not_in?: DateTime[] | DateTime
  from_lt?: DateTime
  from_lte?: DateTime
  from_gt?: DateTime
  from_gte?: DateTime
  company?: CompanyWhereInput
  contact?: ContactWhereInput
}

export interface ContactHistoryInCompanyUpdateWithWhereUniqueWithoutContactInput {
  where: ContactHistoryInCompanyWhereUniqueInput
  data: ContactHistoryInCompanyUpdateWithoutContactDataInput
}

export interface CurrencyWhereInput {
  AND?: CurrencyWhereInput[] | CurrencyWhereInput
  OR?: CurrencyWhereInput[] | CurrencyWhereInput
  NOT?: CurrencyWhereInput[] | CurrencyWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  code?: String
  code_not?: String
  code_in?: String[] | String
  code_not_in?: String[] | String
  code_lt?: String
  code_lte?: String
  code_gt?: String
  code_gte?: String
  code_contains?: String
  code_not_contains?: String
  code_starts_with?: String
  code_not_starts_with?: String
  code_ends_with?: String
  code_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface ContactHistoryInCompanyUpdateWithoutContactDataInput {
  position?: String
  from?: DateTime
  company?: CompanyUpdateOneWithoutContactsHistoryInput
}

export interface CurrencyUpdateInput {
  code?: String
  name?: String
}

export interface CompanyUpdateOneWithoutContactsHistoryInput {
  create?: CompanyCreateWithoutContactsHistoryInput
  connect?: CompanyWhereUniqueInput
  delete?: Boolean
  update?: CompanyUpdateWithoutContactsHistoryDataInput
  upsert?: CompanyUpsertWithoutContactsHistoryInput
}

export interface ColorWhereUniqueInput {
  id?: ID_Input
}

export interface CompanyUpdateWithoutContactsHistoryDataInput {
  name?: String
  note?: String
  legalName?: String
  manager?: UserUpdateOneInput
  contactDetails?: ContactDetailUpdateManyWithoutOwnerCompanyInput
}

export interface CurrencyUpdateDataInput {
  code?: String
  name?: String
}

export interface CompanyUpsertWithoutContactsHistoryInput {
  update: CompanyUpdateWithoutContactsHistoryDataInput
  create: CompanyCreateWithoutContactsHistoryInput
}

export interface CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput
  create: CompanyCreateInput
}

export interface ContactHistoryInCompanyUpsertWithWhereUniqueWithoutContactInput {
  where: ContactHistoryInCompanyWhereUniqueInput
  update: ContactHistoryInCompanyUpdateWithoutContactDataInput
  create: ContactHistoryInCompanyCreateWithoutContactInput
}

export interface ContactDetailUpdateWithWhereUniqueWithoutOwnerLeadInput {
  where: ContactDetailWhereUniqueInput
  data: ContactDetailUpdateWithoutOwnerLeadDataInput
}

export interface ContactUpsertWithoutContactDetailsInput {
  update: ContactUpdateWithoutContactDetailsDataInput
  create: ContactCreateWithoutContactDetailsInput
}

export interface ContactDetailUpsertWithWhereUniqueWithoutOwnerContactInput {
  where: ContactDetailWhereUniqueInput
  update: ContactDetailUpdateWithoutOwnerContactDataInput
  create: ContactDetailCreateWithoutOwnerContactInput
}

export interface LeadUpdateOneWithoutContactDetailsInput {
  create?: LeadCreateWithoutContactDetailsInput
  connect?: LeadWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LeadUpdateWithoutContactDetailsDataInput
  upsert?: LeadUpsertWithoutContactDetailsInput
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderWhereInput
}

export interface LeadUpdateWithoutContactDetailsDataInput {
  description?: String
  note?: String
  state?: LeadStateUpdateOneInput
  manager?: UserUpdateOneInput
}

export interface ContactSubscriptionWhereInput {
  AND?: ContactSubscriptionWhereInput[] | ContactSubscriptionWhereInput
  OR?: ContactSubscriptionWhereInput[] | ContactSubscriptionWhereInput
  NOT?: ContactSubscriptionWhereInput[] | ContactSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ContactWhereInput
}

export interface LeadStateUpdateOneInput {
  create?: LeadStateCreateInput
  connect?: LeadStateWhereUniqueInput
  delete?: Boolean
  update?: LeadStateUpdateDataInput
  upsert?: LeadStateUpsertNestedInput
}

export interface NomenclatureWhereUniqueInput {
  id?: ID_Input
}

export interface LeadStateUpdateDataInput {
  name?: String
  color?: ColorUpdateOneInput
}

export interface ColorUpdateInput {
  name?: String
  hexValue?: String
}

export interface ColorUpdateOneInput {
  create?: ColorCreateInput
  connect?: ColorWhereUniqueInput
  delete?: Boolean
  update?: ColorUpdateDataInput
  upsert?: ColorUpsertNestedInput
}

export interface ContactDetailUpdateWithoutOwnerContactDataInput {
  kind?: ContactDetailsKind
  value?: String
  rawValue?: String
  ownerCompany?: CompanyUpdateOneWithoutContactDetailsInput
  ownerLead?: LeadUpdateOneWithoutContactDetailsInput
}

export interface LeadUpsertWithoutContactDetailsInput {
  update: LeadUpdateWithoutContactDetailsDataInput
  create: LeadCreateWithoutContactDetailsInput
}

export interface LeadStateUpsertNestedInput {
  update: LeadStateUpdateDataInput
  create: LeadStateCreateInput
}

export interface ColorUpsertNestedInput {
  update: ColorUpdateDataInput
  create: ColorCreateInput
}

export interface ColorUpdateDataInput {
  name?: String
  hexValue?: String
}

export interface OrderPositionsWhereInput {
  AND?: OrderPositionsWhereInput[] | OrderPositionsWhereInput
  OR?: OrderPositionsWhereInput[] | OrderPositionsWhereInput
  NOT?: OrderPositionsWhereInput[] | OrderPositionsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  quantity?: Float
  quantity_not?: Float
  quantity_in?: Float[] | Float
  quantity_not_in?: Float[] | Float
  quantity_lt?: Float
  quantity_lte?: Float
  quantity_gt?: Float
  quantity_gte?: Float
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  amount?: Float
  amount_not?: Float
  amount_in?: Float[] | Float
  amount_not_in?: Float[] | Float
  amount_lt?: Float
  amount_lte?: Float
  amount_gt?: Float
  amount_gte?: Float
  nomenclature?: NomenclatureWhereInput
  currency?: CurrencyWhereInput
}

export interface ContactHistoryInCompanyUpdateInput {
  position?: String
  from?: DateTime
  company?: CompanyUpdateOneWithoutContactsHistoryInput
  contact?: ContactUpdateOneWithoutWorkingHistoryInput
}

export interface NomenclatureUpdateOneInput {
  create?: NomenclatureCreateInput
  connect?: NomenclatureWhereUniqueInput
  delete?: Boolean
  update?: NomenclatureUpdateDataInput
  upsert?: NomenclatureUpsertNestedInput
}

export interface ContactHistoryInCompanyWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface NomenclaturePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NomenclatureType
  name: String
  description: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface OrderPositionsPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  quantity: Float
  price: Float
  amount: Float
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Company extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  note: String
  legalName: String
  manager?: User
  contactDetails?: ContactDetail[]
  contactsHistory?: ContactHistoryInCompany[]
}

export interface ContactDetail extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  kind: ContactDetailsKind
  value: String
  rawValue: String
  ownerCompany?: Company
  ownerContact?: Contact
  ownerLead?: Lead
}

/*
 * A connection to a list of items.

 */
export interface NomenclatureConnection {
  pageInfo: PageInfo
  edges: NomenclatureEdge[]
  aggregate: AggregateNomenclature
}

export interface AggregateNomenclature {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CurrencyEdge {
  node: Currency
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateOrderPositions {
  count: Int
}

export interface CurrencyPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  code: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface OrderPositionsConnection {
  pageInfo: PageInfo
  edges: OrderPositionsEdge[]
  aggregate: AggregateOrderPositions
}

export interface Currency extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  code: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface CurrencySubscriptionPayload {
  mutation: MutationType
  node?: Currency
  updatedFields?: String[]
  previousValues?: CurrencyPreviousValues
}

export interface AggregateColor {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ColorConnection {
  pageInfo: PageInfo
  edges: ColorEdge[]
  aggregate: AggregateColor
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface LeadStateEdge {
  node: LeadState
  cursor: String
}

export interface Nomenclature extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NomenclatureType
  name: String
  description: String
}

export interface AggregateLead {
  count: Int
}

export interface CompanySubscriptionPayload {
  mutation: MutationType
  node?: Company
  updatedFields?: String[]
  previousValues?: CompanyPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LeadConnection {
  pageInfo: PageInfo
  edges: LeadEdge[]
  aggregate: AggregateLead
}

export interface CompanyPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  note: String
  legalName: String
}

/*
 * An edge in a connection.

 */
export interface ContactDetailEdge {
  node: ContactDetail
  cursor: String
}

export interface OrderPositions extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  nomenclature: Nomenclature
  quantity: Float
  price: Float
  amount: Float
  currency: Currency
}

export interface AggregateContactHistoryInCompany {
  count: Int
}

export interface ContactSubscriptionPayload {
  mutation: MutationType
  node?: Contact
  updatedFields?: String[]
  previousValues?: ContactPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ContactHistoryInCompanyConnection {
  pageInfo: PageInfo
  edges: ContactHistoryInCompanyEdge[]
  aggregate: AggregateContactHistoryInCompany
}

export interface ContactPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  middleName: String
  note: String
}

/*
 * An edge in a connection.

 */
export interface ContactEdge {
  node: Contact
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
}

export interface AggregateCompany {
  count: Int
}

export interface ContactHistoryInCompanySubscriptionPayload {
  mutation: MutationType
  node?: ContactHistoryInCompany
  updatedFields?: String[]
  previousValues?: ContactHistoryInCompanyPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CompanyConnection {
  pageInfo: PageInfo
  edges: CompanyEdge[]
  aggregate: AggregateCompany
}

export interface ContactHistoryInCompanyPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  position: String
  from: DateTime
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Order extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  customer: Company
  manager?: User
  positions?: OrderPositions[]
}

/*
 * An edge in a connection.

 */
export interface NomenclatureEdge {
  node: Nomenclature
  cursor: String
}

export interface ContactDetailSubscriptionPayload {
  mutation: MutationType
  node?: ContactDetail
  updatedFields?: String[]
  previousValues?: ContactDetailPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CurrencyConnection {
  pageInfo: PageInfo
  edges: CurrencyEdge[]
  aggregate: AggregateCurrency
}

export interface ContactDetailPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  kind: ContactDetailsKind
  value: String
  rawValue: String
}

export interface AggregateOrder {
  count: Int
}

export interface Contact extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  middleName: String
  note: String
  manager?: User
  contactDetails?: ContactDetail[]
  workingHistory?: ContactHistoryInCompany[]
}

/*
 * An edge in a connection.

 */
export interface ColorEdge {
  node: Color
  cursor: String
}

export interface LeadSubscriptionPayload {
  mutation: MutationType
  node?: Lead
  updatedFields?: String[]
  previousValues?: LeadPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LeadStateConnection {
  pageInfo: PageInfo
  edges: LeadStateEdge[]
  aggregate: AggregateLeadState
}

export interface LeadPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  description: String
  note: String
}

export interface AggregateContactDetail {
  count: Int
}

export interface Color extends Node {
  id: ID_Output
  name: String
  hexValue: String
}

/*
 * An edge in a connection.

 */
export interface ContactHistoryInCompanyEdge {
  node: ContactHistoryInCompany
  cursor: String
}

export interface LeadStateSubscriptionPayload {
  mutation: MutationType
  node?: LeadState
  updatedFields?: String[]
  previousValues?: LeadStatePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ContactConnection {
  pageInfo: PageInfo
  edges: ContactEdge[]
  aggregate: AggregateContact
}

export interface LeadStatePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

export interface AggregateUser {
  count: Int
}

export interface LeadState extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  color: Color
}

export interface AggregateCurrency {
  count: Int
}

export interface ColorSubscriptionPayload {
  mutation: MutationType
  node?: Color
  updatedFields?: String[]
  previousValues?: ColorPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: OrderEdge[]
  aggregate: AggregateOrder
}

export interface ColorPreviousValues {
  id: ID_Output
  name: String
  hexValue: String
}

/*
 * An edge in a connection.

 */
export interface LeadEdge {
  node: Lead
  cursor: String
}

export interface Lead extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  description: String
  state: LeadState
  note: String
  manager: User
  contactDetails?: ContactDetail[]
}

export interface AggregateContact {
  count: Int
}

export interface NomenclatureSubscriptionPayload {
  mutation: MutationType
  node?: Nomenclature
  updatedFields?: String[]
  previousValues?: NomenclaturePreviousValues
}

export interface OrderPositionsSubscriptionPayload {
  mutation: MutationType
  node?: OrderPositions
  updatedFields?: String[]
  previousValues?: OrderPositionsPreviousValues
}

export interface ContactHistoryInCompany extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  company: Company
  contact: Contact
  position: String
  from: DateTime
}

export interface OrderPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order
  updatedFields?: String[]
  previousValues?: OrderPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderPositionsEdge {
  node: OrderPositions
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface CompanyEdge {
  node: Company
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ContactDetailConnection {
  pageInfo: PageInfo
  edges: ContactDetailEdge[]
  aggregate: AggregateContactDetail
}

export interface AggregateLeadState {
  count: Int
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number