var express = require('express');
var router = express.Router();
var pessoa =  [];
var sens = [];
var usuario = [];
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

//Abrir principalMini
router.get('/principal-mini', function(req, res, next) {
  res.render('principalMini', { title: 'AC 6 - Principal' });
  next();
});

//Abrir cadastro usuario
router.get('/usuario', function(req, res, next) {
  res.render('usuario', { title: 'AC 6 - Cadastro' });
  next();
});

//Cadastro usuario
router.post('/cadastrar-usuario', function(request, response, next) {
  var usuarioCadastro = request.body.usuarioCadastro;
  var senhaCadastro = request.body.senhaCadastro;
  var nivelAcesso = request.body.gender;
  var telefoneCadastro = request.body.telefoneCadastro;
  var emailCadastro = request.body.emailCadastro;

  hash = {
    nomeLogin: request.body.usuarioCadastro,
    senhaLogin: request.body.senhaCadastro,
    nivelAcesso: request.body.gender,
    telefoneCadastro: request.body.telefoneCadastro,
    emailCadastro: request.body.emailCadastro
  }

  usuario.push(hash);
  console.log("--------------");
  console.log("Hash de usuario");
  console.log(usuario);
  console.log("--------------");

  if (!firebase.apps.length) {
    firebase.initializeApp(config);

    firebase.auth().createUserWithEmailAndPassword(emailCadastro, senhaCadastro).catch(function(error) {
    });

    firebase.database().ref().child('/usuarios').child(usuarioCadastro).set({
      nomeLogin: usuarioCadastro,
      nivelAcesso: nivelAcesso,
      telefoneCadastro: telefoneCadastro,
      emailCadastro: emailCadastro
    });

    console.log('\n\nCadastro efetuado com sucesso!\n\n');
  }else{

    firebase.auth().createUserWithEmailAndPassword(emailCadastro, senhaCadastro).catch(function(error) {
    });

    firebase.database().ref().child('/usuarios').child(usuarioCadastro).set({
      nomeLogin: usuarioCadastro,
      nivelAcesso: nivelAcesso,
      telefoneCadastro: telefoneCadastro,
      emailCadastro: emailCadastro,
    });


    console.log('\n\nCadastro efetuado com sucesso!\n\n');
  }

  response.redirect('/principal');
  next();
});

//Cadastro de sensor
router.post('/cadastrar', function(request, response, next) {

  var userAdmin = "admin@admin.com";
  var userAdmin2 = "joao@joao.com";
  var senhaAdmin = "admin123";
  var senhaAdmin2 = "joao123";

  var nomeLogin = request.body.nomeLogin;
  var senhaLogin = request.body.senhaLogin;

  if ((nomeLogin == userAdmin && senhaLogin == senhaAdmin) || (nomeLogin == userAdmin2 && senhaLogin == senhaAdmin2)){
    response.redirect('/principal');
  }else{

    var sensor = request.body.sensor;
    var status = request.body.status;

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
    response.redirect('/principal-mini');
  }

  next();
});

//Autenticacao de usuario
router.post('/autenticacao', function(request, response, next) {
  var userAdmin = "admin@admin.com";
  var userAdmin2 = "joao@joao.com";
  var senhaAdmin = "admin123";
  var senhaAdmin2 = "joao123";

  var nomeLogin = request.body.nomeLogin;
  var senhaLogin = request.body.senhaLogin;

  hash = {
    nomeLogin: request.body.nomeLogin,
    senhaLogin: request.body.senhaLogin
  }

  pessoa.push(hash);
  console.log("--------------");
  console.log("Hash de login");
  console.log(pessoa);
  console.log("--------------");

  if ((nomeLogin == userAdmin && senhaLogin == senhaAdmin) || (nomeLogin == userAdmin2 && senhaLogin == senhaAdmin2)){
    response.redirect('/principal');
  }else{

    if (!firebase.apps.length) {
      firebase.initializeApp(config);

      firebase.auth().signInWithEmailAndPassword(nomeLogin, senhaLogin)
      .then(function(firebaseUser) {
        response.redirect('/principal-mini');

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
        response.redirect('/principal-mini');

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
  }
});

module.exports = router;
