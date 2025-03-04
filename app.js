const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:


app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beer', (req, res, next) => {
  punkAPI
  .getBeers()
  // .then(beersFromApi => console.log('Beers from the database: ', beersFromApi))
  .then(beersFromApi =>  {
    // console.log(beersFromApi);
    res.render('beer', {beersFromApi})
  })

  .catch(error => console.log(error));
});



app.get('/random-beer', (req, res, next) => {
  punkAPI
  .getRandom()
  .then(responseFromAPI => {
    // your magic happens here
    // console.log(responseFromAPI);
    res.render('random-beer', {responseFromAPI});
  })
  .catch(error => console.log(error));

});


app.listen(3000, () => console.log(':)‍ on port 3000'));
