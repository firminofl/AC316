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
  
    //const bigTextEvaluationStudents = document.getElementById('bigTextEvaluationStudents');
    //const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('bigTextEvaluationStudents');
    //dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());
  
    var table = document.querySelector('#minhaTabela tbody');

    const dbSensoresRef = firebase.database().ref().child('/sensores');

    dbSensoresRef.on('value', snap => {
      
        while(table.hasChildNodes()) {
              table.removeChild(table.firstChild);
        }
  
      var sensores = snap.val();
      for(var i in sensores) {
        var row = table.insertRow(-1);
        for(var j in sensores[i]) {
                  cell = row.insertCell(-1);
                  cell.innerHTML = sensores[i][j];
              }
          }
    });
  }());