import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from "apollo-link-http";


const cache = new InMemoryCache()
const link = createHttpLink({ uri: `${process.env.REACT_APP_BACKEND_URL}/graphql` });



const client = new ApolloClient({
    cache,
    link
})

export default client