import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "jobs" */
export type Jobs = {
  __typename?: 'jobs';
  id: Scalars['uuid'];
  salary: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "jobs" */
export type Jobs_Aggregate = {
  __typename?: 'jobs_aggregate';
  aggregate?: Maybe<Jobs_Aggregate_Fields>;
  nodes: Array<Jobs>;
};

/** aggregate fields of "jobs" */
export type Jobs_Aggregate_Fields = {
  __typename?: 'jobs_aggregate_fields';
  avg?: Maybe<Jobs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jobs_Max_Fields>;
  min?: Maybe<Jobs_Min_Fields>;
  stddev?: Maybe<Jobs_Stddev_Fields>;
  stddev_pop?: Maybe<Jobs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jobs_Stddev_Samp_Fields>;
  sum?: Maybe<Jobs_Sum_Fields>;
  var_pop?: Maybe<Jobs_Var_Pop_Fields>;
  var_samp?: Maybe<Jobs_Var_Samp_Fields>;
  variance?: Maybe<Jobs_Variance_Fields>;
};


/** aggregate fields of "jobs" */
export type Jobs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Jobs_Avg_Fields = {
  __typename?: 'jobs_avg_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "jobs". All fields are combined with a logical 'AND'. */
export type Jobs_Bool_Exp = {
  _and?: InputMaybe<Array<Jobs_Bool_Exp>>;
  _not?: InputMaybe<Jobs_Bool_Exp>;
  _or?: InputMaybe<Array<Jobs_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  salary?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobs" */
export enum Jobs_Constraint {
  /** unique or primary key constraint on columns "id" */
  JobsPkey = 'jobs_pkey'
}

/** input type for incrementing numeric columns in table "jobs" */
export type Jobs_Inc_Input = {
  salary?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "jobs" */
export type Jobs_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  salary?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Jobs_Max_Fields = {
  __typename?: 'jobs_max_fields';
  id?: Maybe<Scalars['uuid']>;
  salary?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Jobs_Min_Fields = {
  __typename?: 'jobs_min_fields';
  id?: Maybe<Scalars['uuid']>;
  salary?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "jobs" */
export type Jobs_Mutation_Response = {
  __typename?: 'jobs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobs>;
};

/** on_conflict condition type for table "jobs" */
export type Jobs_On_Conflict = {
  constraint: Jobs_Constraint;
  update_columns?: Array<Jobs_Update_Column>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};

/** Ordering options when selecting data from "jobs". */
export type Jobs_Order_By = {
  id?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobs */
export type Jobs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "jobs" */
export enum Jobs_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Salary = 'salary',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "jobs" */
export type Jobs_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  salary?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Jobs_Stddev_Fields = {
  __typename?: 'jobs_stddev_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Jobs_Stddev_Pop_Fields = {
  __typename?: 'jobs_stddev_pop_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Jobs_Stddev_Samp_Fields = {
  __typename?: 'jobs_stddev_samp_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "jobs" */
export type Jobs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jobs_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  salary?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Jobs_Sum_Fields = {
  __typename?: 'jobs_sum_fields';
  salary?: Maybe<Scalars['Int']>;
};

/** update columns of table "jobs" */
export enum Jobs_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Salary = 'salary',
  /** column name */
  Title = 'title'
}

export type Jobs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Jobs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobs_Set_Input>;
  where: Jobs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Jobs_Var_Pop_Fields = {
  __typename?: 'jobs_var_pop_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Jobs_Var_Samp_Fields = {
  __typename?: 'jobs_var_samp_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Jobs_Variance_Fields = {
  __typename?: 'jobs_variance_fields';
  salary?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "jobs" */
  delete_jobs?: Maybe<Jobs_Mutation_Response>;
  /** delete single row from the table: "jobs" */
  delete_jobs_by_pk?: Maybe<Jobs>;
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "jobs" */
  insert_jobs?: Maybe<Jobs_Mutation_Response>;
  /** insert a single row into the table: "jobs" */
  insert_jobs_one?: Maybe<Jobs>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "jobs" */
  update_jobs?: Maybe<Jobs_Mutation_Response>;
  /** update single row of the table: "jobs" */
  update_jobs_by_pk?: Maybe<Jobs>;
  /** update multiples rows of table: "jobs" */
  update_jobs_many?: Maybe<Array<Maybe<Jobs_Mutation_Response>>>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
  /** update multiples rows of table: "todo" */
  update_todo_many?: Maybe<Array<Maybe<Todo_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_JobsArgs = {
  where: Jobs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_JobsArgs = {
  objects: Array<Jobs_Insert_Input>;
  on_conflict?: InputMaybe<Jobs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobs_OneArgs = {
  object: Jobs_Insert_Input;
  on_conflict?: InputMaybe<Jobs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_JobsArgs = {
  _inc?: InputMaybe<Jobs_Inc_Input>;
  _set?: InputMaybe<Jobs_Set_Input>;
  where: Jobs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobs_By_PkArgs = {
  _inc?: InputMaybe<Jobs_Inc_Input>;
  _set?: InputMaybe<Jobs_Set_Input>;
  pk_columns: Jobs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobs_ManyArgs = {
  updates: Array<Jobs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _set?: InputMaybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_ManyArgs = {
  updates: Array<Todo_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "jobs" */
  jobs: Array<Jobs>;
  /** fetch aggregated fields from the table: "jobs" */
  jobs_aggregate: Jobs_Aggregate;
  /** fetch data from the table: "jobs" using primary key columns */
  jobs_by_pk?: Maybe<Jobs>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootJobsArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Query_RootJobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Query_RootJobs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Query_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  userId: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "jobs" */
  jobs: Array<Jobs>;
  /** fetch aggregated fields from the table: "jobs" */
  jobs_aggregate: Jobs_Aggregate;
  /** fetch data from the table: "jobs" using primary key columns */
  jobs_by_pk?: Maybe<Jobs>;
  /** fetch data from the table in a streaming manner : "jobs" */
  jobs_stream: Array<Jobs>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table in a streaming manner : "todo" */
  todo_stream: Array<Todo>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner : "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootJobsArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Subscription_RootJobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Subscription_RootJobs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootJobs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jobs_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Subscription_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTodo_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Todo_Stream_Cursor_Input>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  completed: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  due_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
};


/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: InputMaybe<Array<Todo_Bool_Exp>>;
  _not?: InputMaybe<Todo_Bool_Exp>;
  _or?: InputMaybe<Array<Todo_Bool_Exp>>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  due_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodoPkey = 'todo_pkey'
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todo>;
};

/** on_conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns?: Array<Todo_Update_Column>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** Ordering options when selecting data from "todo". */
export type Todo_Order_By = {
  completed?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  due_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todo */
export type Todo_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "todo" */
export type Todo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todo_Stream_Cursor_Value_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Todo_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  userEmail: Scalars['bpchar'];
  userGender: Scalars['bpchar'];
  userId: Scalars['uuid'];
  userName: Scalars['bpchar'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  userEmail?: InputMaybe<Bpchar_Comparison_Exp>;
  userGender?: InputMaybe<Bpchar_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  userName?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "userId" */
  UsersPkey = 'Users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  userEmail?: InputMaybe<Scalars['bpchar']>;
  userGender?: InputMaybe<Scalars['bpchar']>;
  userId?: InputMaybe<Scalars['uuid']>;
  userName?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  userEmail?: Maybe<Scalars['bpchar']>;
  userGender?: Maybe<Scalars['bpchar']>;
  userId?: Maybe<Scalars['uuid']>;
  userName?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  userEmail?: Maybe<Scalars['bpchar']>;
  userGender?: Maybe<Scalars['bpchar']>;
  userId?: Maybe<Scalars['uuid']>;
  userName?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  userEmail?: InputMaybe<Order_By>;
  userGender?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userName?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  userId: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  UserEmail = 'userEmail',
  /** column name */
  UserGender = 'userGender',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserName = 'userName'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  userEmail?: InputMaybe<Scalars['bpchar']>;
  userGender?: InputMaybe<Scalars['bpchar']>;
  userId?: InputMaybe<Scalars['uuid']>;
  userName?: InputMaybe<Scalars['bpchar']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  userEmail?: InputMaybe<Scalars['bpchar']>;
  userGender?: InputMaybe<Scalars['bpchar']>;
  userId?: InputMaybe<Scalars['uuid']>;
  userName?: InputMaybe<Scalars['bpchar']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  UserEmail = 'userEmail',
  /** column name */
  UserGender = 'userGender',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserName = 'userName'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type CreateJobsMutationVariables = Exact<{
  salary?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
}>;


export type CreateJobsMutation = { __typename?: 'mutation_root', insert_jobs?: { __typename?: 'jobs_mutation_response', returning: Array<{ __typename?: 'jobs', salary: number, title: string }> } | null };

export type CreateUsersMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateUsersMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', userName: any, userGender: any, userEmail: any }> } | null };

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'query_root', jobs: Array<{ __typename?: 'jobs', id: any, salary: number, title: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', userId: any, userName: any, userEmail: any, userGender: any }> };


export const CreateJobsDocument = `
    mutation CreateJobs($salary: Int, $title: String) {
  insert_jobs(objects: {salary: $salary, title: $title}) {
    returning {
      salary
      title
    }
  }
}
    `;
export const useCreateJobsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateJobsMutation, TError, CreateJobsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateJobsMutation, TError, CreateJobsMutationVariables, TContext>(
      ['CreateJobs'],
      (variables?: CreateJobsMutationVariables) => fetcher<CreateJobsMutation, CreateJobsMutationVariables>(client, CreateJobsDocument, variables, headers)(),
      options
    );
export const CreateUsersDocument = `
    mutation CreateUsers {
  insert_users(
    objects: {userName: "Mugisha", userEmail: "mugisha1233@gmail.com", userGender: "Male"}
  ) {
    returning {
      userName
      userGender
      userEmail
    }
  }
}
    `;
export const useCreateUsersMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUsersMutation, TError, CreateUsersMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUsersMutation, TError, CreateUsersMutationVariables, TContext>(
      ['CreateUsers'],
      (variables?: CreateUsersMutationVariables) => fetcher<CreateUsersMutation, CreateUsersMutationVariables>(client, CreateUsersDocument, variables, headers)(),
      options
    );
export const GetJobsDocument = `
    query getJobs {
  jobs {
    id
    salary
    title
  }
}
    `;
export const useGetJobsQuery = <
      TData = GetJobsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetJobsQueryVariables,
      options?: UseQueryOptions<GetJobsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetJobsQuery, TError, TData>(
      variables === undefined ? ['getJobs'] : ['getJobs', variables],
      fetcher<GetJobsQuery, GetJobsQueryVariables>(client, GetJobsDocument, variables, headers),
      options
    );
export const GetUsersDocument = `
    query getUsers {
  users {
    userId
    userName
    userEmail
    userGender
  }
}
    `;
export const useGetUsersQuery = <
      TData = GetUsersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUsersQueryVariables,
      options?: UseQueryOptions<GetUsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUsersQuery, TError, TData>(
      variables === undefined ? ['getUsers'] : ['getUsers', variables],
      fetcher<GetUsersQuery, GetUsersQueryVariables>(client, GetUsersDocument, variables, headers),
      options
    );