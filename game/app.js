const express = require('express');
const app = express();

app.get('/game', (req, res) => {
    
    res.render("game.ejs");
});

app.listen(8080, () => {
  console.log(`Example app listening on port`)
});
