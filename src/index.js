const { ApolloServer } = require('apollo-server-express')
const express = require('express')
require('./config.js')
const typeDefs = require('./schema')
const { User } = require('./mongo/model');

const resolvers = {
    Query:{
        queryUsers:async ()=> await User.find({}).exec()
    },
    Mutation:{
        addUser:async (_,args) => {
            try {
                let response = await User.create(args)
                return response
            }catch(e){
                return e.message
            }
        }
    }

}
const server = new ApolloServer({ typeDefs,resolvers });


const app = express()
server.applyMiddleware({app})


app.listen({port:4000}, () => 
console.log(`on start ${server.graphqlPath}`)
)