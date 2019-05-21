const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://nabsNew:delete1@ds159546.mlab.com:59546/graphql-react');
mongoose.connection.once('open', () => {
    console.log('Conneted to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening at port 4000');
});