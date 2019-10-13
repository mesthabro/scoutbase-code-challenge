function movies (root, args, context, info) {
    return context.prisma.movies()
}

module.exports = {
    movies,
}