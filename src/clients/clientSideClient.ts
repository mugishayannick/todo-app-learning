import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HASURA_GRAPHQL_URL as string;
const adminKey = process.env.HASURA_GRAPHQL_ADMIN_KEY as string;

export const clientSideService = new GraphQLClient(endpoint, {
  headers: { "x-hasura-admin-secret": adminKey },
});


