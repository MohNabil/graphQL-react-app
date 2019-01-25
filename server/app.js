const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests.
app.use(cors());

mongoose.connect('mongodb://mohNabil:satriani1@ds161159.mlab.com:61159/graphql-mohnabil', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('connected to the mongo database');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening for requests');
})