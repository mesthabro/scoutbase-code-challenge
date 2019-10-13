const { prisma } = require('./generated/prisma-client')
const { startServer } = require('./server')
const resolvers = require('./resolvers')

function main () {
    const typeDefs = initTypeDefs()
    const resolvers = initResolvers()
    const context = initContext()
    startServer({ typeDefs, resolvers, context })
}

function initTypeDefs () {
    return './src/schema.graphql';
}

function initResolvers () {
    return { ...resolvers }
}

function initContext () {
    return () => ({
        prisma,
    })
}

main()