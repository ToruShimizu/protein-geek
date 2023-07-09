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
  /** Deletes zero or more records from the `makers` collection */
  deleteFrommakersCollection: MakersDeleteResponse;
  /** Deletes zero or more records from the `proteins` collection */
  deleteFromproteinsCollection: ProteinsDeleteResponse;
  /** Deletes zero or more records from the `reviews` collection */
  deleteFromreviewsCollection: ReviewsDeleteResponse;
  /** Adds one or more `makers` records to the collection */
  insertIntomakersCollection?: Maybe<MakersInsertResponse>;
  /** Adds one or more `proteins` records to the collection */
  insertIntoproteinsCollection?: Maybe<ProteinsInsertResponse>;
  /** Adds one or more `reviews` records to the collection */
  insertIntoreviewsCollection?: Maybe<ReviewsInsertResponse>;
  /** Updates zero or more records in the `makers` collection */
  updatemakersCollection: MakersUpdateResponse;
  /** Updates zero or more records in the `proteins` collection */
  updateproteinsCollection: ProteinsUpdateResponse;
  /** Updates zero or more records in the `reviews` collection */
  updatereviewsCollection: ReviewsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommakersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MakersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproteinsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProteinsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromreviewsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReviewsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomakersCollectionArgs = {
  objects: Array<MakersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproteinsCollectionArgs = {
  objects: Array<ProteinsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoreviewsCollectionArgs = {
  objects: Array<ReviewsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatemakersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MakersFilter>;
  set: MakersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproteinsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProteinsFilter>;
  set: ProteinsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatereviewsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReviewsFilter>;
  set: ReviewsUpdateInput;
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
  /** A pagable collection of type `makers` */
  makersCollection?: Maybe<MakersConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `proteins` */
  proteinsCollection?: Maybe<ProteinsConnection>;
  /** A pagable collection of type `reviews` */
  reviewsCollection?: Maybe<ReviewsConnection>;
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
export type QueryProteinsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProteinsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProteinsOrderBy>>;
};


/** The root type for querying data */
export type QueryReviewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReviewsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
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

export type Makers = Node & {
  __typename?: 'makers';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  protein_id?: Maybe<Scalars['BigInt']['output']>;
  src?: Maybe<Scalars['String']['output']>;
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

export type Proteins = Node & {
  __typename?: 'proteins';
  capacity: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  flavor: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  maker_id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  price: Scalars['String']['output'];
  review_id?: Maybe<Scalars['BigInt']['output']>;
  src: Scalars['String']['output'];
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
  capacity?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  flavor?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  maker_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  price?: InputMaybe<StringFilter>;
  review_id?: InputMaybe<BigIntFilter>;
  src?: InputMaybe<StringFilter>;
};

export type ProteinsInsertInput = {
  capacity?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  maker_id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  review_id?: InputMaybe<Scalars['BigInt']['input']>;
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
  capacity?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  flavor?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  maker_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  review_id?: InputMaybe<OrderByDirection>;
  src?: InputMaybe<OrderByDirection>;
};

export type ProteinsUpdateInput = {
  capacity?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  maker_id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  review_id?: InputMaybe<Scalars['BigInt']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type ProteinsUpdateResponse = {
  __typename?: 'proteinsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Proteins>;
};

export type Reviews = Node & {
  __typename?: 'reviews';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rate: Scalars['BigFloat']['output'];
  title: Scalars['String']['output'];
};

export type ReviewsConnection = {
  __typename?: 'reviewsConnection';
  edges: Array<ReviewsEdge>;
  pageInfo: PageInfo;
};

export type ReviewsDeleteResponse = {
  __typename?: 'reviewsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews>;
};

export type ReviewsEdge = {
  __typename?: 'reviewsEdge';
  cursor: Scalars['String']['output'];
  node: Reviews;
};

export type ReviewsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rate?: InputMaybe<BigFloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ReviewsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['BigFloat']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewsInsertResponse = {
  __typename?: 'reviewsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews>;
};

export type ReviewsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  rate?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type ReviewsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['BigFloat']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewsUpdateResponse = {
  __typename?: 'reviewsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews>;
};

export type MakerQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MakerQueryQuery = { __typename?: 'Query', makersCollection?: { __typename?: 'makersConnection', edges: Array<{ __typename?: 'makersEdge', node: { __typename?: 'makers', id: any, name: string } }> } | null };


export const MakerQueryDocument = gql`
    query MakerQuery {
  makersCollection {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useMakerQueryQuery__
 *
 * To run a query within a React component, call `useMakerQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakerQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMakerQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMakerQueryQuery(baseOptions?: Apollo.QueryHookOptions<MakerQueryQuery, MakerQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MakerQueryQuery, MakerQueryQueryVariables>(MakerQueryDocument, options);
      }
export function useMakerQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MakerQueryQuery, MakerQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MakerQueryQuery, MakerQueryQueryVariables>(MakerQueryDocument, options);
        }
export type MakerQueryQueryHookResult = ReturnType<typeof useMakerQueryQuery>;
export type MakerQueryLazyQueryHookResult = ReturnType<typeof useMakerQueryLazyQuery>;
export type MakerQueryQueryResult = Apollo.QueryResult<MakerQueryQuery, MakerQueryQueryVariables>;