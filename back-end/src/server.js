const { GraphQLServer } = require('graphql-yoga')
const { PORT } = require('./config')

const startServer = (opts) => {
    const { 
        typeDefs = '', 
        resolvers = {}, 
        middlewares = [], 
        schemaDirectives = {}, 
        context = (req) => ({...req}),
    } = opts

    // INIT SERVER
    const server = new GraphQLServer({
        typeDefs,
        resolvers,
        middlewares,
        schemaDirectives,
        context,
    })

    // SERVER START
    server.start({
        port: PORT,
        endpoint: '/graphql',
        playground: '/',
        cors: {
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            preflightContinue: false,
            optionsSuccessStatus: 204
        }
    }, (opts) => {
        console.log(`Listening on port ${opts.port}`)
    })
}

module.exports = {
    startServer,
}