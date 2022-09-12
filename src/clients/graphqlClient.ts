import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HASURA_GRAPHQL_URL as string;
const adminKey = process.env.HASURA_GRAPHQL_ADMIN_KEY as string;

export const graphqlClient = async (query: any, variables?: any) => {
    const graphqlClient = new GraphQLClient(endpoint);
    graphqlClient.setHeader("x-hasura-admin-secret", adminKey);
    return graphqlClient.request(query, variables);
};