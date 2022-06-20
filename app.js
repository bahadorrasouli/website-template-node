const express = require('express');

const app = express();

const fetch = require('node-fetch');

const companies = 'https://my.api.mockaroo.com/companies_fake_data.json?key=ced71540'


app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views ', './views');

// routes
app.get('/', (req,res)=>{
  fetch(companies)
  .then(response => response.json())
  .then(data => res.render('home',{data}));
});

app.get('/companies/:id', (req,res)=>{
  
  fetch(companies)
  .then(response => response.json())
  .then(data => {
    data.find(company=>{
      if(company.id == req.params.id){
        res.render('company',{data : company})
      }
    })
  });

});


// server
app.listen(3000, () => console.log('listening on port 3000') );