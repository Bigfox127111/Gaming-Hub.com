const express = require('express');  
const app = express();  
const mongoose = require('mongoose');  
  
mongoose.connect('mongodb://localhost/gaming-website', { useNewUrlParser: true, useUnifiedTopology: true });  
  
const Game = mongoose.model('Game', {  
  title: String,  
  description: String,  
  screenshots: [{ type: String }],  
  trailer: String  
});  
  
const User = mongoose.model('User', {  
  username: String,  
  email: String,  
  password: String  
});  
  
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
  
app.get('/', (req, res) => {  
  res.send('Welcome to Gaming Website!');  
});  
  
app.get('/games', (req, res) => {  
  Game.find().then(games => res.json(games));  
});  
  
app.get('/games/:id', (req, res) => {  
  Game.findById(req.params.id).then(game => res.json(game));  
});  
  
app.post('/games', (req, res) => {  
  const game = new Game(req.body);  
  game.save().then(() => res.json(game));  
});  
  
app.put('/games/:id', (req, res) => {  
  Game.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, game) => {  
   if (err) res.status(400).send(err);  
   res.json(game);  
  });  
});  
  
app.delete('/games/:id', (req, res) => {  
  Game.findByIdAndRemove(req.params.id, (err, game) => {  
   if (err) res.status(400).send(err);  
   res.json(game);  
  });  
});  
  
app.listen(3000, () => {  
  console.log('Server started on port 3000');  
});
