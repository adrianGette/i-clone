const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log("Obteniendo usuario");
            return null;
        },
    },

    Mutation: {
        // User
        register: async (_, { input }) => {

            const newUser = input;
            newUser.email = newUser.email.toLowerCase();
            newUser.username = newUser.username.toLowerCase();

            const { email, username, password } = newUser;

            // Revisar si el email está en uso
            const foundEmail = await User.findOne({ email });
            if(foundEmail) throw new Error("El email ya está en uso.");

            // Revisar si el username está en uso
            const foundUsername = await User.findOne({ username });
            if(foundUsername) throw new Error("El nombre de usuario está en uso.");

            // Encriptar contraseña de usuario
            const salt = await bcryptjs.genSaltSync(10);
            newUser.password = await bcryptjs.hash(password, salt);

           try {
               const user = new User(newUser);
               user.save();
               return user;
           } catch (error) {
               console.log(error);
           }
        },
    },
};

module.exports = resolvers;