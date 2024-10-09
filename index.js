<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
  <title>Gaming Website</title>  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">  
  <style>  
   body {  
    font-family: Arial, sans-serif;  
    margin: 0;  
    padding: 0;  
   }  
  
   header {  
    background-color: #333;  
    color: #fff;  
    padding: 1em;  
    text-align: center;  
   }  
  
   header nav {  
    margin-top: 1em;  
   }  
  
   .hero {  
    background-image: url('hero.jpg');  
    background-size: cover;  
    background-position: center;  
    height: 100vh;  
    display: flex;  
    justify-content: center;  
    align-items: center;  
    color: #fff;  
   }  
  
   .featured-games {  
    padding: 2em;  
   }  
  
   .featured-games img {  
    width: 100%;  
    height: 200px;  
    object-fit: cover;  
    border-radius: 10px;  
   }  
  
   .featured-games h3 {  
    font-size: 18px;  
    margin-top: 10px;  
   }  
  
   .latest-news {  
    padding: 2em;  
   }  
  
   .latest-news ul {  
    list-style: none;  
    padding: 0;  
    margin: 0;  
   }  
  
   .latest-news li {  
    margin-bottom: 20px;  
   }  
  
   .latest-news h3 {  
    font-size: 18px;  
    margin-top: 10px;  
   }  
  
   footer {  
    background-color: #333;  
    color: #fff;  
    padding: 1em;  
    text-align: center;  
    clear: both;  
   }  
  </style>  
</head>  
<body>  
  <header>  
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">  
    <a class="navbar-brand" href="#">Gaming Website</a>  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
      <span class="navbar-toggler-icon"></span>  
    </button>  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">  
      <ul class="navbar-nav mr-auto">  
       <li class="nav-item active">  
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>  
       </li>  
       <li class="nav-item">  
        <a class="nav-link" href="#">Games</a>  
       </li>  
       <li class="nav-item">  
        <a class="nav-link" href="#">Community</a>  
       </li>  
      </ul>  
    </div>  
   </nav>  
  </header>  
  <main>  
   <section class="hero">  
    <h1>Welcome to Gaming Website</h1>  
    <p>Explore our collection of games and join our community!</p>  
    <button class="btn btn-primary">Get Started</button>  
   </section>  
   <section class="featured-games">  
    <h2>Featured Games</h2>  
    <div class="row">  
      <div class="col-md-4">  
       <img src="game1.jpg" alt="Game 1">  
       <h3>Game 1</h3>  
       <p>Game 1 description</p>  
      </div>  
      <div class="col-md-4">  
       <img src="game2.jpg" alt="Game 2">  
       <h3>Game 2</h3>  
       <p>Game 2 description</p>  
      </div>  
      <div class="col-md-4">  
       <img src="game3.jpg" alt="Game 3">  
       <h3>Game 3</h3>  
       <p>Game 3 description</p>  
      </div>  
    </div>  
   </section>  
   <section class="latest-news">  
    <h2>Latest News and Updates</h2>  
    <ul>  
      <li>  
       <h3>News 1</h3>  
       <p>News 1 description</p>  
      </li>  
      <li>  
       <h3>News 2</h3>  
       <p>News 2 description</p>  
      </li>  
      <li>  
       <h3>News 3</h3>  
       <p>News 3 description</p>  
      </li>  
    </ul>  
   </section>  
  </main>  
  <footer>  
   <p>&copy; 2023 Gaming Website</p>  
  </footer>  
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>  
  <script>  
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
  </script>  
</body>  
</html>
