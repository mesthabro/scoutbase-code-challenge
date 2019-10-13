const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

function addActor (root, args, context, info) {
    return context.prisma.createActor({
        name: args.name,
        birthday: args.birthday,
        country: args.country,
    })
}

function addDirector (root, args, context, info) {
    return context.prisma.createDirector({
        name: args.name,
        birthday: args.birthday,
        country: args.country,
    })
}

function addMovie (root, args, context, info) {
    let minimum = 5.0
    let maximum = 9.0
    let randomRating = Math.random() * (maximum - minimum + 1) + minimum;
    randomRating = parseFloat(randomRating.toFixed(1))

    return context.prisma.createMovie({
        title: args.title,
        year: args.year,
        rating: args.rating,
        scoutbase_rating: randomRating,
        actors: {connect: args.actors.map(id => ({ id }))},
        directors: {connect: args.directors.map(id => ({ id }))},
    })
}

async function createUser (root, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({ ...args, password })
    const token = jwt.sign({ userId: user.id }, JWT_SECRET)
    return { token, user }
}

async function login (root, args, context, info) {
    const user = await context.prisma.user({ username: args.username })
    if (!user) throw new Error('No such user')

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) throw new Error('Incorrect password')

    const token = jwt.sign({ userId: user.id }, JWT_SECRET)
    return { token, user }
}

module.exports = {
    addActor,
    addDirector,
    addMovie,
    createUser,
    login,
}