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
          var newRow = table.insertRow(-1)
          var count = 0

          var actionCell = newRow.insertCell(count)

          var sensorCell = newRow.insertCell(count)
          var sensorValue = document.createTextNode(sensores[i][j])
          sensorCell.appendChild(sensorValue)
          count++;

          var statusCell = newRow.insertCell(count)
          var statusValue = document.createTextNode(sensores[i][j])
          statusCell.appendChild(statusValue)
          count++;

          var editarCell = newRow.insertCell(count)
          var editarElement = document.createElement('input')
          editarElement.setAttribute('type', 'checkbox')
          editarElement.setAttribute('data-toggle', 'toggle')
          editarElement.setAttribute('value', 'Editar')
          editarElement.classList.add('btn')
          //editarElement.onclick = editItem(rows[i])
          editarCell.appendChild(editarElement)

        }
      }
    });
  }());
