const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID
        name: String
        username: String
        email: String
        website: String
        description: String
        password: String
        avatar: String
        createAt: Strings
    }

    type Query {
        # User
        getUser: User
    }
`;

module.exports = typeDefs;