function actors (root, args, context, info) {
    return context.prisma.movie({ id: root.id }).actors()
}

function directors (root, args, context, info) {
    return context.prisma.movie({ id: root.id }).directors()
}

module.exports = {
    actors,
    directors
}