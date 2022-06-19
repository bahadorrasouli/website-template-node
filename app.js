const express = require('express');

const app = express();

const fetch = require('node-fetch');

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views ', './views');

// routes
app.get('/', (req,res)=>{
  res.render('home',{name:'Mr.Babak'});
});

// server
app.listen(3000, () => console.log('listening on port 3000') );