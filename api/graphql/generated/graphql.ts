import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `flavors` collection */
  deleteFromflavorsCollection: FlavorsDeleteResponse;
  /** Deletes zero or more records from the `makers` collection */
  deleteFrommakersCollection: MakersDeleteResponse;
  /** Deletes zero or more records from the `products` collection */
  deleteFromproductsCollection: ProductsDeleteResponse;
  /** Deletes zero or more records from the `proteins` collection */
  deleteFromproteinsCollection: ProteinsDeleteResponse;
  /** Deletes zero or more records from the `sellers` collection */
  deleteFromsellersCollection: SellersDeleteResponse;
  /** Adds one or more `flavors` records to the collection */
  insertIntoflavorsCollection?: Maybe<FlavorsInsertResponse>;
  /** Adds one or more `makers` records to the collection */
  insertIntomakersCollection?: Maybe<MakersInsertResponse>;
  /** Adds one or more `products` records to the collection */
  insertIntoproductsCollection?: Maybe<ProductsInsertResponse>;
  /** Adds one or more `proteins` records to the collection */
  insertIntoproteinsCollection?: Maybe<ProteinsInsertResponse>;
  /** Adds one or more `sellers` records to the collection */
  insertIntosellersCollection?: Maybe<SellersInsertResponse>;
  /** Updates zero or more records in the `flavors` collection */
  updateflavorsCollection: FlavorsUpdateResponse;
  /** Updates zero or more records in the `makers` collection */
  updatemakersCollection: MakersUpdateResponse;
  /** Updates zero or more records in the `products` collection */
  updateproductsCollection: ProductsUpdateResponse;
  /** Updates zero or more records in the `proteins` collection */
  updateproteinsCollection: ProteinsUpdateResponse;
  /** Updates zero or more records in the `sellers` collection */
  updatesellersCollection: SellersUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromflavorsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FlavorsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommakersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MakersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproteinsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProteinsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsellersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SellersFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoflavorsCollectionArgs = {
  objects: Array<FlavorsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomakersCollectionArgs = {
  objects: Array<MakersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductsCollectionArgs = {
  objects: Array<ProductsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproteinsCollectionArgs = {
  objects: Array<ProteinsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosellersCollectionArgs = {
  objects: Array<SellersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateflavorsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FlavorsFilter>;
  set: FlavorsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemakersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MakersFilter>;
  set: MakersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
  set: ProductsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproteinsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProteinsFilter>;
  set: ProteinsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesellersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SellersFilter>;
  set: SellersUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `flavors` */
  flavorsCollection?: Maybe<FlavorsConnection>;
  /** A pagable collection of type `makers` */
  makersCollection?: Maybe<MakersConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `products` */
  productsCollection?: Maybe<ProductsConnection>;
  /** A pagable collection of type `proteins` */
  proteinsCollection?: Maybe<ProteinsConnection>;
  /** A pagable collection of type `sellers` */
  sellersCollection?: Maybe<SellersConnection>;
};


/** The root type for querying data */
export type QueryFlavorsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FlavorsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FlavorsOrderBy>>;
};


/** The root type for querying data */
export type QueryMakersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MakersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MakersOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


/** The root type for querying data */
export type QueryProteinsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProteinsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProteinsOrderBy>>;
};


/** The root type for querying data */
export type QuerySellersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SellersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SellersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Flavors = Node & {
  __typename?: 'flavors';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id?: Maybe<Scalars['BigInt']['output']>;
  products?: Maybe<Products>;
  productsCollection?: Maybe<ProductsConnection>;
  protein_id: Scalars['BigInt']['output'];
  proteins: Proteins;
  proteinsCollection?: Maybe<ProteinsConnection>;
  seller_id?: Maybe<Scalars['BigInt']['output']>;
  sellers?: Maybe<Sellers>;
  sellersCollection?: Maybe<SellersConnection>;
  src: Scalars['String']['output'];
};


export type FlavorsProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


export type FlavorsProteinsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProteinsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProteinsOrderBy>>;
};


export type FlavorsSellersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SellersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SellersOrderBy>>;
};

export type FlavorsConnection = {
  __typename?: 'flavorsConnection';
  edges: Array<FlavorsEdge>;
  pageInfo: PageInfo;
};

export type FlavorsDeleteResponse = {
  __typename?: 'flavorsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Flavors>;
};

export type FlavorsEdge = {
  __typename?: 'flavorsEdge';
  cursor: Scalars['String']['output'];
  node: Flavors;
};

export type FlavorsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  product_id?: InputMaybe<BigIntFilter>;
  protein_id?: InputMaybe<BigIntFilter>;
  seller_id?: InputMaybe<BigIntFilter>;
  src?: InputMaybe<StringFilter>;
};

export type FlavorsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['BigInt']['input']>;
  protein_id?: InputMaybe<Scalars['BigInt']['input']>;
  seller_id?: InputMaybe<Scalars['BigInt']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type FlavorsInsertResponse = {
  __typename?: 'flavorsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Flavors>;
};

export type FlavorsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  protein_id?: InputMaybe<OrderByDirection>;
  seller_id?: InputMaybe<OrderByDirection>;
  src?: InputMaybe<OrderByDirection>;
};

export type FlavorsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['BigInt']['input']>;
  protein_id?: InputMaybe<Scalars['BigInt']['input']>;
  seller_id?: InputMaybe<Scalars['BigInt']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type FlavorsUpdateResponse = {
  __typename?: 'flavorsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Flavors>;
};

export type Makers = Node & {
  __typename?: 'makers';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  protein_id?: Maybe<Scalars['BigInt']['output']>;
  proteins?: Maybe<Proteins>;
  proteinsCollection?: Maybe<ProteinsConnection>;
  src: Scalars['String']['output'];
};


export type MakersProteinsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProteinsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProteinsOrderBy>>;
};

export type MakersConnection = {
  __typename?: 'makersConnection';
  edges: Array<MakersEdge>;
  pageInfo: PageInfo;
};

export type MakersDeleteResponse = {
  __typename?: 'makersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Makers>;
};

export type MakersEdge = {
  __typename?: 'makersEdge';
  cursor: Scalars['String']['output'];
  node: Makers;
};

export type MakersFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  protein_id?: InputMaybe<BigIntFilter>;
  src?: InputMaybe<StringFilter>;
};

export type MakersInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  protein_id?: InputMaybe<Scalars['BigInt']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type MakersInsertResponse = {
  __typename?: 'makersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Makers>;
};

export type MakersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  protein_id?: InputMaybe<OrderByDirection>;
  src?: InputMaybe<OrderByDirection>;
};

export type MakersUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  protein_id?: InputMaybe<Scalars['BigInt']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type MakersUpdateResponse = {
  __typename?: 'makersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Makers>;
};

export type Products = Node & {
  __typename?: 'products';
  capacity: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  flavor_id?: Maybe<Scalars['BigInt']['output']>;
  flavors?: Maybe<Flavors>;
  flavorsCollection?: Maybe<FlavorsConnection>;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  price: Scalars['String']['output'];
};


export type ProductsFlavorsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FlavorsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FlavorsOrderBy>>;
};

export type ProductsConnection = {
  __typename?: 'productsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
};

export type ProductsDeleteResponse = {
  __typename?: 'productsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsEdge = {
  __typename?: 'productsEdge';
  cursor: Scalars['String']['output'];
  node: Products;
};

export type ProductsFilter = {
  capacity?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  flavor_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  price?: InputMaybe<StringFilter>;
};

export type ProductsInsertInput = {
  capacity?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor_id?: InputMaybe<Scalars['BigInt']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsInsertResponse = {
  __typename?: 'productsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsOrderBy = {
  capacity?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  flavor_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
};

export type ProductsUpdateInput = {
  capacity?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor_id?: InputMaybe<Scalars['BigInt']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsUpdateResponse = {
  __typename?: 'productsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type Proteins = Node & {
  __typename?: 'proteins';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  flavor_id?: Maybe<Scalars['BigInt']['output']>;
  flavors?: Maybe<Flavors>;
  flavorsCollection?: Maybe<FlavorsConnection>;
  id: Scalars['BigInt']['output'];
  maker_id?: Maybe<Scalars['BigInt']['output']>;
  makers?: Maybe<Makers>;
  makersCollection?: Maybe<MakersConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  src: Scalars['String']['output'];
};


export type ProteinsFlavorsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FlavorsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FlavorsOrderBy>>;
};


export type ProteinsMakersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MakersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MakersOrderBy>>;
};

export type ProteinsConnection = {
  __typename?: 'proteinsConnection';
  edges: Array<ProteinsEdge>;
  pageInfo: PageInfo;
};

export type ProteinsDeleteResponse = {
  __typename?: 'proteinsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Proteins>;
};

export type ProteinsEdge = {
  __typename?: 'proteinsEdge';
  cursor: Scalars['String']['output'];
  node: Proteins;
};

export type ProteinsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  flavor_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  maker_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  src?: InputMaybe<StringFilter>;
};

export type ProteinsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor_id?: InputMaybe<Scalars['BigInt']['input']>;
  maker_id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type ProteinsInsertResponse = {
  __typename?: 'proteinsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Proteins>;
};

export type ProteinsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  flavor_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  maker_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  src?: InputMaybe<OrderByDirection>;
};

export type ProteinsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor_id?: InputMaybe<Scalars['BigInt']['input']>;
  maker_id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type ProteinsUpdateResponse = {
  __typename?: 'proteinsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Proteins>;
};

export type Sellers = Node & {
  __typename?: 'sellers';
  amazon?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  flavor_id?: Maybe<Scalars['BigInt']['output']>;
  flavors?: Maybe<Flavors>;
  flavorsCollection?: Maybe<FlavorsConnection>;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  official: Scalars['String']['output'];
  rakuten?: Maybe<Scalars['String']['output']>;
  yahoo?: Maybe<Scalars['String']['output']>;
};


export type SellersFlavorsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FlavorsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FlavorsOrderBy>>;
};

export type SellersConnection = {
  __typename?: 'sellersConnection';
  edges: Array<SellersEdge>;
  pageInfo: PageInfo;
};

export type SellersDeleteResponse = {
  __typename?: 'sellersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sellers>;
};

export type SellersEdge = {
  __typename?: 'sellersEdge';
  cursor: Scalars['String']['output'];
  node: Sellers;
};

export type SellersFilter = {
  amazon?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  flavor_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  official?: InputMaybe<StringFilter>;
  rakuten?: InputMaybe<StringFilter>;
  yahoo?: InputMaybe<StringFilter>;
};

export type SellersInsertInput = {
  amazon?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor_id?: InputMaybe<Scalars['BigInt']['input']>;
  official?: InputMaybe<Scalars['String']['input']>;
  rakuten?: InputMaybe<Scalars['String']['input']>;
  yahoo?: InputMaybe<Scalars['String']['input']>;
};

export type SellersInsertResponse = {
  __typename?: 'sellersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sellers>;
};

export type SellersOrderBy = {
  amazon?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  flavor_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  official?: InputMaybe<OrderByDirection>;
  rakuten?: InputMaybe<OrderByDirection>;
  yahoo?: InputMaybe<OrderByDirection>;
};

export type SellersUpdateInput = {
  amazon?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor_id?: InputMaybe<Scalars['BigInt']['input']>;
  official?: InputMaybe<Scalars['String']['input']>;
  rakuten?: InputMaybe<Scalars['String']['input']>;
  yahoo?: InputMaybe<Scalars['String']['input']>;
};

export type SellersUpdateResponse = {
  __typename?: 'sellersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sellers>;
};

export type MakersQueryVariables = Exact<{ [key: string]: never; }>;


export type MakersQuery = { __typename?: 'Query', makersCollection?: { __typename?: 'makersConnection', edges: Array<{ __typename?: 'makersEdge', node: { __typename?: 'makers', id: any, name: string, src: string } }> } | null };

export type MakerByIdQueryVariables = Exact<{
  id: Scalars['BigInt']['input'];
}>;


export type MakerByIdQuery = { __typename?: 'Query', makersCollection?: { __typename?: 'makersConnection', edges: Array<{ __typename?: 'makersEdge', node: { __typename?: 'makers', id: any, name: string, src: string, proteinsCollection?: { __typename?: 'proteinsConnection', edges: Array<{ __typename?: 'proteinsEdge', node: { __typename?: 'proteins', id: any, name: string, src: string, maker_id?: any | null } }> } | null } }> } | null };

export type ProteinByIdQueryVariables = Exact<{
  id: Scalars['BigInt']['input'];
}>;


export type ProteinByIdQuery = { __typename?: 'Query', proteinsCollection?: { __typename?: 'proteinsConnection', edges: Array<{ __typename?: 'proteinsEdge', node: { __typename?: 'proteins', id: any, name: string, src: string, flavorsCollection?: { __typename?: 'flavorsConnection', edges: Array<{ __typename?: 'flavorsEdge', node: { __typename?: 'flavors', id: any, name: string, src: string, sellersCollection?: { __typename?: 'sellersConnection', edges: Array<{ __typename?: 'sellersEdge', node: { __typename?: 'sellers', id: any, amazon?: string | null, rakuten?: string | null, yahoo?: string | null, official: string } }> } | null, productsCollection?: { __typename?: 'productsConnection', edges: Array<{ __typename?: 'productsEdge', node: { __typename?: 'products', id: any, capacity: string, price: string } }> } | null } }> } | null } }> } | null };


export const MakersDocument = gql`
    query Makers {
  makersCollection {
    edges {
      node {
        id
        name
        src
      }
    }
  }
}
    `;

/**
 * __useMakersQuery__
 *
 * To run a query within a React component, call `useMakersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMakersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMakersQuery(baseOptions?: Apollo.QueryHookOptions<MakersQuery, MakersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MakersQuery, MakersQueryVariables>(MakersDocument, options);
      }
export function useMakersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MakersQuery, MakersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MakersQuery, MakersQueryVariables>(MakersDocument, options);
        }
export type MakersQueryHookResult = ReturnType<typeof useMakersQuery>;
export type MakersLazyQueryHookResult = ReturnType<typeof useMakersLazyQuery>;
export type MakersQueryResult = Apollo.QueryResult<MakersQuery, MakersQueryVariables>;
export const MakerByIdDocument = gql`
    query MakerById($id: BigInt!) {
  makersCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        name
        src
        proteinsCollection {
          edges {
            node {
              id
              name
              src
              maker_id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMakerByIdQuery__
 *
 * To run a query within a React component, call `useMakerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMakerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMakerByIdQuery(baseOptions: Apollo.QueryHookOptions<MakerByIdQuery, MakerByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MakerByIdQuery, MakerByIdQueryVariables>(MakerByIdDocument, options);
      }
export function useMakerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MakerByIdQuery, MakerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MakerByIdQuery, MakerByIdQueryVariables>(MakerByIdDocument, options);
        }
export type MakerByIdQueryHookResult = ReturnType<typeof useMakerByIdQuery>;
export type MakerByIdLazyQueryHookResult = ReturnType<typeof useMakerByIdLazyQuery>;
export type MakerByIdQueryResult = Apollo.QueryResult<MakerByIdQuery, MakerByIdQueryVariables>;
export const ProteinByIdDocument = gql`
    query ProteinById($id: BigInt!) {
  proteinsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        name
        src
        flavorsCollection {
          edges {
            node {
              id
              name
              src
              sellersCollection {
                edges {
                  node {
                    id
                    amazon
                    rakuten
                    yahoo
                    official
                  }
                }
              }
              productsCollection {
                edges {
                  node {
                    id
                    capacity
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useProteinByIdQuery__
 *
 * To run a query within a React component, call `useProteinByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProteinByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProteinByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProteinByIdQuery(baseOptions: Apollo.QueryHookOptions<ProteinByIdQuery, ProteinByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProteinByIdQuery, ProteinByIdQueryVariables>(ProteinByIdDocument, options);
      }
export function useProteinByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProteinByIdQuery, ProteinByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProteinByIdQuery, ProteinByIdQueryVariables>(ProteinByIdDocument, options);
        }
export type ProteinByIdQueryHookResult = ReturnType<typeof useProteinByIdQuery>;
export type ProteinByIdLazyQueryHookResult = ReturnType<typeof useProteinByIdLazyQuery>;
export type ProteinByIdQueryResult = Apollo.QueryResult<ProteinByIdQuery, ProteinByIdQueryVariables>;