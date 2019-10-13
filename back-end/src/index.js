const { startServer } = require('./server')
const resolvers = require('./resolvers')

function main () {
    const typeDefs = initTypeDefs()
    const resolvers = initResolvers()
    startServer({ typeDefs, resolvers })
}

function initTypeDefs () {
    return './src/schema.graphql';
}

function initResolvers () {
    return { ...resolvers }
}

main()