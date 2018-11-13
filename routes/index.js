var express = require('express');
var router = express.Router();
var pessoa =  [];
var sens = [];
var firebase = require("firebase");

// Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC7Iav23rAfUe3ABiY_Ffejj0593Dj5lC8",
  authDomain: "ac-6-63da6.firebaseapp.com",
  databaseURL: "https://ac-6-63da6.firebaseio.com",
  projectId: "ac-6-63da6",
  storageBucket: "",
  messagingSenderId: "5977518793"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AC 6 - Principal' });
});

//Abrir dashboard
router.get('/principal', function(req, res, next) {
  res.render('principal', { title: 'AC 6 - Principal' });
  next();
});

//Cadastro de sensor
router.post('/cadastrar', function(request, response, next) {

  var sensor = request.body.sensor;
  var status = request.body.status;

  hash = {
    nomeLogin: request.body.nomeLogin,
    senhaLogin: request.body.senhaLogin
  }

  sens.push(hash);
  console.log("--------------");
  console.log("Hash de pessoa");
  console.log(pessoa);
  console.log("--------------");

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.database().ref().child('/sensores').child(sensor).set({
      sensor: sensor,
      status: status,
    });

    console.log('\n\nCadastro efetuado com sucesso!\n\n');
  }else{
    firebase.database().ref().child('/sensores').child(sensor).set({
      sensor: sensor,
      status: status,
    });

    console.log('Cadastro efetuado com sucesso!');
  }

  response.redirect('/principal');
  next();
});

//Autenticacao de usuario
router.post('/autenticacao', function(request, response, next) {

  var nomeLogin = request.body.nomeLogin;
  var senhaLogin = request.body.senhaLogin;

  hash = {
    nomeLogin: request.body.nomeLogin,
    senhaLogin: request.body.senhaLogin
  }

  pessoa.push(hash);
  console.log("--------------");
  console.log("Hash de pessoa");
  console.log(pessoa);
  console.log("--------------");

  if (!firebase.apps.length) {
    firebase.initializeApp(config);

    firebase.auth().signInWithEmailAndPassword(nomeLogin, senhaLogin)
    .then(function(firebaseUser) {
      response.redirect('/principal');

    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        console.log("\n\nSenha incorreta.\n\n");
        response.redirect('/');
      } else {
        console.log(errorMessage);
      }
      console.log(error);
    });

  }else{

    firebase.auth().signInWithEmailAndPassword(nomeLogin, senhaLogin)
    .then(function(firebaseUser) {
      response.redirect('/principal');

    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        console.log("\n\nSenha incorreta.\n\n");
        response.redirect('/');
      } else {
        console.log(errorMessage);
      }
      console.log(error);
    });
  }
});

module.exports = router;
