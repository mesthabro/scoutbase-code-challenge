const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./config')

const attachUserToContext = (resolve, root, args, context, info) => {
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const user = jwt.verify(token, JWT_SECRET)
        context.user = user
    }
    return resolve(root, args, context, info)
}

module.exports = {
    attachUserToContext,
}