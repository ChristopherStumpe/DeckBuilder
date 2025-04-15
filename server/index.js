const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

// mongoose.connect(process.env.MONGO_URI)

//add confirm it connected?

// const playerSchema = new mongoose.Schema({
//     username: String,
//     score: Number,
//     level: Number,
// })

// ?
// const Player = mongoose.model('Player', playerSchema);
app.get('/test', async (req, res) => {
    console.log('test recieved')
    res.json('test confirmed') 
})
//example api: save player data
app.post('/api/save', async (req, res) => {
    const { username, score, level } = req.body;
    const player = await Player.findOneAndUpdate(
        { username },
        { score, level },
        { new: true, upsert: true }
    );
    res.json(player)
})

// example API: load player data
app.get('/api/player/:username', async (req, res) => {
    const player = await Player.findOne({ username: req.params.username });
    res.json(player)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//promise?
//test try catch stuff
//test before commit
//standard test dev
//test api is good test
//clean up notes and legacy
//refresh async