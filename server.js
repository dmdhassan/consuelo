const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {

    var teamMembers = [
        { name: 'Hassan', organization: "consuelo", role: "Full Stack Developer"},
        { name: 'Richie', organization: "consuelo", role: "Software Developer"},
        { name: 'Saleem', organization: "consuelo", role: "Front End Developer"},
        { name: 'Lee', organization: "consuelo", role: "Front End Developer"},
        { name: 'eru', organization: "consuelo", role: "Front End Developer"},
      ];
      var tagline = "You can never under estimate working in team";

  res.render('pages/index', {
        teamMembers: teamMembers,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');