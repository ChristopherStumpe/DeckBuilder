const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

//add confirm it connected?

const playerSchema = new mongoose.Schema({
    username: String,
    score: Number,
    level: Number,
})

// ?
const Player = mongoose.model('Player', playerSchema);

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//promise?
//test try catch stuff
//prettify
//test before commit
//standard test dev
//test api is good test
//clean up notes and legacy
//refresh async