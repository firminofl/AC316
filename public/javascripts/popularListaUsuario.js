(function() {
    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC7Iav23rAfUe3ABiY_Ffejj0593Dj5lC8",
    authDomain: "ac-6-63da6.firebaseapp.com",
    databaseURL: "https://ac-6-63da6.firebaseio.com",
    projectId: "ac-6-63da6",
    storageBucket: "",
    messagingSenderId: "5977518793"
  };
  firebase.initializeApp(config);

  var table = document.querySelector('#minhaTabelaUsuarios tbody');

  const dbSensoresRef = firebase.database().ref().child('/usuarios');

  dbSensoresRef.on('value', snap => {

      while(table.hasChildNodes()) {
            table.removeChild(table.firstChild);
      }

    var usuarios = snap.val();
    for(var i in usuarios) {
      var row = table.insertRow(-1);
      for(var j in usuarios[i]) {
                cell = row.insertCell(-1);
                cell.innerHTML = usuarios[i][j];
            }
        }
  });
  }());
