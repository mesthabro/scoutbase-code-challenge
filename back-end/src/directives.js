const { SchemaDirectiveVisitor } = require('graphql-tools')

class IsAuthenticatedDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        field.resolve = async function(root, args, context, info) {
            if (!context.user){
                throw new Error('User must be authenticated to view protected fields');
            }
            return root[field.name];
        };
    }
}

module.exports = {
    IsAuthenticatedDirective,
}