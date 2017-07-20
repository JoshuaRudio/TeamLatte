const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.listen(3000);

app.use(express.static('public'))


app.get('/', function(req, res) {

  // let options = {
  //   root: __dirname,
  //   dotfiles: 'deny',
  //   headers: {
  //     'x-timestamp': Date.now(),
  //     'x-sent': true
  //   }
  // };

  res.render('pages/index');
});

app.get('/about', function(req, res){
  let options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('about.html', options);
});

app.get('/mission', function(req, res){
  let options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('mission.html', options);
});
