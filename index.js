import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import {typeDefs} from './src/typeDefs';
import {resolvers} from './src/resolvers';

const app = express(),
    port = process.env.PORT || 4000;

const startServer = async()=>{
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });
    await mongoose.connect('mongodb://Naren:Naren123@ds359868.mlab.com:59868/testgraph', {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(port, () =>
      console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
    );
}

startServer();