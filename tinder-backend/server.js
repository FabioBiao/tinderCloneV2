import express from 'express';
import mongoose from 'mongoose';

import Cors from 'Cors';
import Cards from './dbCards.js';

// app config
const app = express();
const port = process.env.PORT || 8081
const connection_url = 'mongodb+srv://admin:mjKlGYz3UFhHlabX@cluster0.w539x.mongodb.net/tinderdb?retryWrites=true&w=majority';

// middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    userNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true
});


// API endpoints
app.get('/', (req, res) => res.status(200).send('Hello Clever Programs'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        console.log(data);
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});


// listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));


