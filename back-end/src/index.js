const { prisma } = require('./generated/prisma-client')
const { IsAuthenticatedDirective } = require('./directives')
const { attachUserToContext } = require('./middlewares')
const { startServer } = require('./server')
const resolvers = require('./resolvers')

function main () {
    const typeDefs = initTypeDefs()
    const resolvers = initResolvers()
    const context = initContext()
    const middlewares = initMiddlewares()
    const schemaDirectives = initSchemaDirectives()
    startServer({ typeDefs, resolvers, context, middlewares, schemaDirectives })
}

function initTypeDefs () {
    return './src/schema.graphql';
}

function initResolvers () {
    return { ...resolvers }
}

function initContext () {
    return (request) => ({
        ...request,
        prisma,
    })
}

function initMiddlewares () {
    return [ attachUserToContext ]
}

function initSchemaDirectives () {
    return { isAuthenticated: IsAuthenticatedDirective }
}

main()