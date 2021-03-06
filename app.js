const express = require('express');

const app = express();

const fetch = require('node-fetch');

const companies = 'https://my.api.mockaroo.com/companies.json?key=e3ca41d0';
const statestics = 'https://my.api.mockaroo.com/statestics.json?key=e3ca41d0';

const apis = [
  {
    url: companies,
    id : 'companies'
  },
  {
    url: statestics,
    id : 'statestics'
  }
];


app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views ', './views');

// routes
app.get('/', (req,res)=>{

  let requests = apis.map(item => fetch(item.url).then(response => response.json()));
  
  const resultData = [];
  Promise.all(requests).then(
    
    datas => { 
      datas.forEach(
        (data, i) => {
          resultData[apis[i].id] = {...{data}}
        });
        
      res.render('home',{
        companies: resultData.companies.data,
        statestics: resultData.statestics.data,
        title: 'Main Page',
      })
    }
    
  );
  // res.render('home');
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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listening on port ${PORT}`) );