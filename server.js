const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', hbs);

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('upperCase', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('main.hbs', {
    title: 'Home page',
    page: 'Welcome to home page.'
  });
});

app.get('/signup', (req, res) => {
  res.render('signup.hbs', {
    title: 'Signup page',
    page: 'Welcome to signup page.'
  });
});

app.listen(port, () => {
  console.log(`Go to port ${port}`);
});
