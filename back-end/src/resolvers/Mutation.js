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

module.exports = {
    addActor,
    addDirector,
    addMovie,
}